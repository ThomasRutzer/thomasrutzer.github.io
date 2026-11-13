import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { getSFX } from "@lib/sfx";

gsap.registerPlugin(Draggable);

type Point = { x: number; y: number };

/**
 * - `select`: the plug rests on one of several targets. Dropping it on another
 *   target connects it and emits `cable:connect`.
 * - `tether`: purely decorative. The plug can be dragged around but always
 *   springs back to its rest point.
 */
export type CableMode = "select" | "tether";

export type CableConnectDetail = {
  index: number;
  source: "drag" | "api";
};

declare global {
  interface HTMLElementEventMap {
    "cable:connect": CustomEvent<CableConnectDetail>;
  }
}

const SNAP_DISTANCE = 56;
// Fraction of a settle tween after which a click/keyboard switch starts
// arcing to the target jack, mirroring the spark seen on drag.
const SETTLE_SPARK_START = 0.35;
// A tethered plug can never be pulled further than this from its rest point.
const TETHER_MAX_STRETCH = 120;

const BEND: Record<CableMode, { ratio: number; min: number }> = {
  select: { ratio: 0.5, min: 40 },
  tether: { ratio: 0.8, min: 40 },
};

function cablePath(start: Point, end: Point, mode: CableMode) {
  const { ratio, min } = BEND[mode];
  const dy = end.y - start.y;
  const bend = Math.max(min, Math.abs(dy) * ratio);
  const lean = Math.sign(dy) || -1;
  const cp1y = start.y + bend * lean;
  const cp2y = end.y - bend * lean;
  return `M ${start.x} ${start.y} C ${start.x} ${cp1y}, ${end.x} ${cp2y}, ${end.x} ${end.y}`;
}

// Jagged, hand-drawn-looking arc standing in for an electric spark jumping
// the remaining gap between the plug and a reachable (not yet connected) jack.
function lightningPath(start: Point, end: Point): string {
  const segments = 6;
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  const points: Point[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    let x = start.x + dx * t;
    let y = start.y + dy * t;
    if (i > 0 && i < segments) {
      const offset = (Math.random() - 0.5) * 16;
      x += nx * offset;
      y += ny * offset;
    }
    points.push({ x, y });
  }

  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type SettleOptions = { ease?: string; spark?: boolean };

/**
 * <patch-cable data-mode="select|tether" data-active="0">
 *   <… data-cable-origin />   fixed end of the cable
 *   <… data-cable-target />   one or more jacks the plug can rest on
 *   <svg><path data-cable /><path data-spark /></svg>
 *   <span data-plug />
 * </patch-cable>
 *
 * Purely visual and pointer-driven. Hosts must keep their own keyboard path
 * and call `connectTo()` to move the plug.
 */
export class PatchCableElement extends HTMLElement {
  /** True while the plug is being dragged. */
  dragging = false;

  #mode: CableMode = "select";
  #active = 0;
  #origin!: HTMLElement;
  #targets: HTMLElement[] = [];
  #cable!: SVGPathElement;
  #spark!: SVGPathElement;
  #plug!: HTMLElement;
  #draggable: Draggable | null = null;
  #resizeObserver: ResizeObserver | null = null;
  #ui = getSFX();

  #hovered = -1;
  #sparkTimer: ReturnType<typeof setInterval> | null = null;
  #sparkSound: ReturnType<ReturnType<typeof getSFX>["play"]> = null;
  // Where the spark arcs from: the dragged plug, or the plug mid-settle.
  #sparkOrigin: Point | null = null;
  // Target currently sparking from a settle, or -1.
  #settleSparkIndex = -1;

  get activeIndex() {
    return this.#active;
  }

  connectedCallback() {
    const origin = this.querySelector<HTMLElement>("[data-cable-origin]");
    const cable = this.querySelector<SVGPathElement>("path[data-cable]");
    const spark = this.querySelector<SVGPathElement>("path[data-spark]");
    const plug = this.querySelector<HTMLElement>("[data-plug]");
    const targets = Array.from(
      this.querySelectorAll<HTMLElement>("[data-cable-target]"),
    );
    if (!origin || !cable || !spark || !plug || targets.length === 0) return;

    this.#origin = origin;
    this.#cable = cable;
    this.#spark = spark;
    this.#plug = plug;
    this.#targets = targets;
    this.#mode = this.dataset.mode === "tether" ? "tether" : "select";
    this.#active = Math.min(
      Math.max(0, Number(this.dataset.active) || 0),
      targets.length - 1,
    );

    gsap.set(plug, { xPercent: -50, yPercent: -50 });
    this.#paintInstant(this.#active);
    this.#observeResize();
    this.#createDraggable();
  }

  disconnectedCallback() {
    this.#draggable?.kill();
    this.#draggable = null;
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
    this.#stopSpark();
    if (this.#plug) gsap.killTweensOf([this.#plug, this.#cable, this.#spark]);
  }

  /** Move the plug to a target and announce it if it changed. */
  connectTo(
    index: number,
    opts: SettleOptions & { source?: CableConnectDetail["source"] } = {},
  ) {
    if (index < 0 || index >= this.#targets.length) return;
    const changed = index !== this.#active;
    this.#active = index;
    this.#settle(index, opts);
    if (changed) {
      this.dispatchEvent(
        new CustomEvent<CableConnectDetail>("cable:connect", {
          detail: { index, source: opts.source ?? "api" },
          bubbles: true,
        }),
      );
    }
  }

  // --- geometry ---------------------------------------------------------

  #point(el: HTMLElement): Point {
    const host = this.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - host.left,
      y: r.top + r.height / 2 - host.top,
    };
  }

  #targetPoint(index: number) {
    return this.#point(this.#targets[index]);
  }

  #path(end: Point) {
    return cablePath(this.#point(this.#origin), end, this.#mode);
  }

  #drawCableTo(end: Point) {
    this.#cable.setAttribute("d", this.#path(end));
  }

  #paintInstant(index: number) {
    const point = this.#targetPoint(index);
    gsap.set(this.#plug, { x: point.x, y: point.y, opacity: 1 });
    this.#drawCableTo(point);
  }

  #nearestTarget(point: Point): number {
    let best = -1;
    let bestDistance = Infinity;
    this.#targets.forEach((_, i) => {
      const p = this.#targetPoint(i);
      const distance = Math.hypot(p.x - point.x, p.y - point.y);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    return bestDistance <= SNAP_DISTANCE ? best : -1;
  }

  // Only reposition on a genuine size change (viewport resize/container query
  // breakpoint). In select mode the host's height changes on every tab switch,
  // which would otherwise fire mid-settle and cut the animation short.
  #observeResize() {
    let { width, height } = this.getBoundingClientRect();
    this.#resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      const heightMatters = this.#mode === "tether";
      if (rect.width === width && (!heightMatters || rect.height === height)) {
        return;
      }
      width = rect.width;
      height = rect.height;
      this.#paintInstant(this.#active);
    });
    this.#resizeObserver.observe(this);
  }

  // --- settle -----------------------------------------------------------

  #settle(index: number, opts: SettleOptions = {}) {
    const plug = this.#plug;
    const target = this.#targetPoint(index);

    this.#endSettleSpark();

    if (prefersReducedMotion()) {
      gsap.set(plug, { x: target.x, y: target.y, opacity: 1 });
      this.#drawCableTo(target);
      if (opts.spark) this.#ui.play("connect");
      return;
    }

    // At rest (click/keyboard) there's no existing velocity, so an inOut ease
    // avoids the "arrives instantly" look a plain out-ease has. Right after a
    // drag release the plug already has velocity, so drag hands in an
    // out-ease instead, which starts fast and continues the motion.
    const ease = opts.ease ?? "power2.inOut";
    const duration = 0.7;

    const tween = gsap.to(plug, {
      x: target.x,
      y: target.y,
      opacity: 1,
      duration,
      ease,
      overwrite: "auto",
      onUpdate: () => {
        if (!opts.spark) return;
        const current = {
          x: gsap.getProperty(plug, "x") as number,
          y: gsap.getProperty(plug, "y") as number,
        };
        const progress = tween.progress();
        // Skip the final frame: the plug sits on the jack, so the arc would
        // collapse to zero length right before fading out.
        if (progress >= 1) return;
        this.#sparkOrigin = current;
        if (this.#settleSparkIndex < 0 && progress >= SETTLE_SPARK_START) {
          this.#settleSparkIndex = index;
          this.#targets[index].toggleAttribute("data-cable-hot", true);
          this.#ui.play("snap");
          this.#startSpark(index);
        } else if (this.#settleSparkIndex >= 0) {
          this.#drawSpark(index);
        }
      },
      onComplete: () => {
        if (this.#settleSparkIndex < 0) return;
        this.#endSettleSpark();
        this.#ui.play("connect");
      },
    });

    gsap.to(this.#cable, {
      attr: { d: this.#path(target) },
      duration,
      ease,
      overwrite: "auto",
    });
  }

  // --- spark ------------------------------------------------------------

  #endSettleSpark() {
    if (this.#settleSparkIndex < 0) return;
    this.#targets[this.#settleSparkIndex].toggleAttribute(
      "data-cable-hot",
      false,
    );
    this.#settleSparkIndex = -1;
    this.#sparkOrigin = null;
    this.#stopSpark();
  }

  #drawSpark(index: number) {
    if (!this.#sparkOrigin) return;
    this.#spark.setAttribute(
      "d",
      lightningPath(this.#sparkOrigin, this.#targetPoint(index)),
    );
  }

  #stopSpark() {
    if (this.#sparkTimer !== null) {
      clearInterval(this.#sparkTimer);
      this.#sparkTimer = null;
    }
    this.#sparkSound?.stop();
    this.#sparkSound = null;
    if (this.#spark) {
      gsap.to(this.#spark, { opacity: 0, duration: 0.15, overwrite: true });
    }
  }

  #startSpark(index: number) {
    if (prefersReducedMotion()) return;
    gsap.to(this.#spark, { opacity: 1, duration: 0.1, overwrite: true });
    const draw = () => this.#drawSpark(index);
    draw();
    this.#sparkTimer = setInterval(draw, 55);

    // "scanning" is a looping cue: start it once and keep the handle so
    // #stopSpark can end it when the arc breaks or the plug is dropped. Its
    // pack default (0.075) gets lost under the other cues.
    this.#sparkSound = this.#ui.play("scanning", {
      retrigger: "restart",
      volume: 0.5,
    });
  }

  #setHover(index: number) {
    if (index === this.#hovered) return;
    if (this.#hovered >= 0) {
      this.#targets[this.#hovered].toggleAttribute("data-cable-hot", false);
    }
    this.#hovered = index;
    this.#stopSpark();
    if (index >= 0) {
      this.#targets[index].toggleAttribute("data-cable-hot", true);
      this.#ui.play("snap");
      this.#startSpark(index);
    }
  }

  // --- dragging ---------------------------------------------------------

  // Rubber-band the plug: free near the rest point, increasingly stiff
  // further out, never beyond TETHER_MAX_STRETCH.
  #stretch(point: Point): Point {
    const rest = this.#targetPoint(this.#active);
    const dx = point.x - rest.x;
    const dy = point.y - rest.y;
    const distance = Math.hypot(dx, dy);
    if (distance === 0) return point;
    const limited =
      TETHER_MAX_STRETCH * (1 - Math.exp(-distance / TETHER_MAX_STRETCH));
    const k = limited / distance;
    return { x: rest.x + dx * k, y: rest.y + dy * k };
  }

  #createDraggable() {
    const host = this;
    const tether = this.#mode === "tether";

    [this.#draggable] = Draggable.create(this.#plug, {
      type: "x,y",
      bounds: tether ? undefined : this,
      onDragStart() {
        host.dragging = true;
        gsap.killTweensOf(host.#plug);
        host.#endSettleSpark();
        host.#ui.play("drag-start");
      },
      onDrag() {
        let point: Point = { x: this.x, y: this.y };
        if (tether) {
          point = host.#stretch(point);
          gsap.set(host.#plug, point);
        }
        host.#sparkOrigin = point;
        host.#drawCableTo(point);
        host.#setHover(host.#nearestTarget(point));
      },
      onDragEnd() {
        host.dragging = false;
        host.#setHover(-1);
        host.#sparkOrigin = null;

        // A tether always springs back, with the same spark-and-settle the
        // tabs use when a cable is clicked into place.
        if (tether) {
          host.#settle(host.#active, { ease: "power2.out", spark: true });
          return;
        }

        const target = host.#nearestTarget({ x: this.x, y: this.y });

        if (target >= 0 && target !== host.#active) {
          host.#ui.play("connect");
          host.connectTo(target, { source: "drag", ease: "power2.out" });
        } else {
          host.#ui.play(target >= 0 ? "drop" : "invalid-drop");
          host.#settle(host.#active, { ease: "power2.out" });
        }
      },
    });
  }
}

if (!customElements.get("patch-cable")) {
  customElements.define("patch-cable", PatchCableElement);
}
