(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Gx3p:function(e,t,r){e.exports=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function r(e,t,r){e.style.setProperty(t,r)}function n(e,t){return e.appendChild(t)}function a(t,r,a,i){var o=e.createElement("span");return r&&(o.className=r),a&&(!i&&o.setAttribute("data-"+r,a),o.textContent=a),t&&n(t,o)||o}function i(e,t){return e.getAttribute("data-"+t)}function o(t,r){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(r||e).querySelectorAll(t)):[]}function l(e){for(var t=[];e--;)t[e]=[];return t}function s(e,t){e&&e.some(t)}function c(e){return function(t){return e[t]}}var u={};function m(e,t,r,n){return{by:e,depends:t,key:r,split:n}}function d(e){return function e(t,r,n){var a=n.indexOf(t);if(-1==a)n.unshift(t),s(u[t].depends,(function(r){e(r,t,n)}));else{var i=n.indexOf(r);n.splice(a,1),n.splice(i,0,t)}return n}(e,0,[]).map(c(u))}function p(e){u[e.by]=e}function h(e,r,i,l,c){e.normalize();var u=[],m=document.createDocumentFragment();l&&u.push(e.previousSibling);var d=[];return o(e.childNodes).some((function(e){if(!e.tagName||e.hasChildNodes()){if(e.childNodes&&e.childNodes.length)return d.push(e),void u.push.apply(u,h(e,r,i,l,c));var n=e.wholeText||"",o=n.trim();o.length&&(" "===n[0]&&d.push(t(" ")),s(o.split(i),(function(e,t){t&&c&&d.push(a(m,"whitespace"," ",c));var n=a(m,r,e);u.push(n),d.push(n)}))," "===n[n.length-1]&&d.push(t(" ")))}else d.push(e)})),s(d,(function(e){n(m,e)})),e.innerHTML="",n(e,m),u}var f=m("words",0,"word",(function(e){return h(e,"word",/\s+/,0,1)})),g=m("chars",["words"],"char",(function(e,t,r){var n=[];return s(r.words,(function(e,r){n.push.apply(n,h(e,"char","",t.whitespace&&r))})),n}));function v(e){var t=(e=e||{}).key;return o(e.target||"[data-splitting]").map((function(n){var a=n["🍌"];if(!e.force&&a)return a;a=n["🍌"]={el:n};var o=d(e.by||i(n,"splitting")||"chars"),l=function(e,t){for(var r in t)e[r]=t[r];return e}({},e);return s(o,(function(e){if(e.split){var i=e.by,o=(t?"-"+t:"")+e.key,c=e.split(n,l,a);o&&function(e,t,n){var a="--"+t,i=a+"-index";s(n,(function(e,t){Array.isArray(e)?s(e,(function(e){r(e,i,t)})):r(e,i,t)})),r(e,a+"-total",n.length)}(n,o,c),a[i]=c,n.classList.add(i)}})),n.classList.add("splitting"),a}))}function y(e,t,r){var n=o(t.matching||e.children,e),a={};return s(n,(function(e){var t=Math.round(e[r]);(a[t]||(a[t]=[])).push(e)})),Object.keys(a).map(Number).sort(w).map(c(a))}function w(e,t){return e-t}v.html=function(e){var t=(e=e||{}).target=a();return t.innerHTML=e.content,v(e),t.outerHTML},v.add=p;var E=m("lines",["words"],"line",(function(e,t,r){return y(e,{matching:r.words},"offsetTop")})),b=m("items",0,"item",(function(e,t){return o(t.matching||e.children,e)})),x=m("rows",0,"row",(function(e,t){return y(e,t,"offsetTop")})),k=m("cols",0,"col",(function(e,t){return y(e,t,"offsetLeft")})),N=m("grid",["rows","cols"]),O=m("layout",0,0,(function(e,t){var l=t.rows=+(t.rows||i(e,"rows")||1),s=t.columns=+(t.columns||i(e,"columns")||1);if(t.image=t.image||i(e,"image")||e.currentSrc||e.src,t.image){var c=o("img",e)[0];t.image=c&&(c.currentSrc||c.src)}t.image&&r(e,"background-image","url("+t.image+")");for(var u=l*s,m=[],d=a(0,"cell-grid");u--;){var p=a(d,"cell");a(p,"cell-inner"),m.push(p)}return n(e,d),m})),j=m("cellRows",["layout"],"row",(function(e,t,r){var n=t.rows,a=l(n);return s(r.layout,(function(e,t,r){a[Math.floor(t/(r.length/n))].push(e)})),a})),S=m("cellColumns",["layout"],"col",(function(e,t,r){var n=t.columns,a=l(n);return s(r.layout,(function(e,t){a[t%n].push(e)})),a})),L=m("cells",["cellRows","cellColumns"],"cell",(function(e,t,r){return r.layout}));return p(f),p(g),p(E),p(b),p(x),p(k),p(N),p(O),p(j),p(S),p(L),v}()},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return q}));var n=r("q1tI"),a=r.n(n),i=r("kD0k"),o=r.n(i);r("ls82");function l(e,t,r,n,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,a)}var s=r("9Hrx"),c=r("EgnG"),u=r("Gx3p"),m=r.n(u),d=a.a.forwardRef((function(e,t){return a.a.createElement("h1",{ref:t,className:"intro__title text-primary"},e.children)}));function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=new Map,v=new Map,y=0;function w(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(r=e.root)?(v.has(r)||(y+=1,v.set(r,y.toString())),v.get(r)):"0":e[t]);var r})).toString()}function E(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=w(e),r=g.get(t);if(!r){var n=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var r,i=t.isIntersecting&&a.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(r=n.get(t.target))||r.forEach((function(e){e(i,t)}))}))}),e);r={id:t,observer:a,elements:n},g.set(t,r)}return r}(r),a=n.id,i=n.observer,o=n.elements,l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),g.delete(a))}}function b(e){return"function"!=typeof e.children}var x=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),b(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,a=e.trackVisibility,i=e.delay;this._unobserveCb=E(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:a,delay:i})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!b(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var a=this.props,i=a.children,o=a.as,l=a.tag,s=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(o||l||"div",f({ref:this.handleNode},s),i)},a}(n.Component);x.displayName="InView",x.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var k=x;function N(e,t,r){if(void 0===t&&(t=0),void 0===r&&(r=window),!r)return 0;var n=(r instanceof Element?r.clientHeight:r.innerHeight)||0,a=t*e.height,i=(e.bottom-a)/(n+e.height-2*a);return 1-Math.max(0,Math.min(1,i))}function O(e,t,r){if(void 0===t&&(t=0),void 0===r&&(r=window),!r)return 0;var n=(r instanceof Element?r.clientWidth:r.innerWidth)||0,a=t*e.width,i=(e.right-a)/(n+e.width-2*a);return 1-Math.max(0,Math.min(1,i))}function j(e){return"function"!=typeof e.children}var S=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return h(p(t=e.call.apply(e,[this].concat(n))||this),"state",{percentage:0,inView:!1,entry:void 0}),h(p(t),"node",void 0),h(p(t),"monitoring",!1),h(p(t),"handleScroll",(function(){if(t.node){var e=t.node.getBoundingClientRect(),r=t.props.horizontal?O(e,t.props.threshold,t.props.root):N(e,t.props.threshold,t.props.root);r!==t.state.percentage&&t.setState({percentage:r})}})),h(p(t),"handleInView",(function(e,r){t.node=r.target,t.setState({entry:r,inView:e})})),h(p(t),"handleRenderProps",(function(e){var r=e.ref,n=t.state,a=n.percentage,i=n.entry,o=n.inView;return j(t.props)?null:t.props.children({percentage:a,entry:i,inView:o,ref:r})})),t}Object(s.a)(t,e);var r=t.prototype;return r.componentDidUpdate=function(e,t){!this.props.onChange||t.percentage===this.state.percentage&&t.inView===this.state.inView||this.props.onChange(this.state.percentage,this.state.entry),e.root!==this.props.root&&this.monitoring&&(this.monitorScroll(!1,e.root),this.monitorScroll(this.state.inView)),t.inView!==this.state.inView&&this.monitorScroll(this.state.inView,e.root)},r.componentWillUnmount=function(){this.monitorScroll(!1)},r.monitorScroll=function(e,t){var r=t||this.props.root||window;if(e){if(this.monitoring)return;r.addEventListener("scroll",this.handleScroll,{passive:!0}),r.addEventListener("resize",this.handleScroll),this.handleScroll(),this.monitoring=!0}else{if(!this.monitoring)return;r.removeEventListener("scroll",this.handleScroll),r.removeEventListener("resize",this.handleScroll),this.monitoring=!1}},r.render=function(){return Object(n.createElement)(k,{onChange:this.handleInView},j(this.props)?this.props.children:this.handleRenderProps)},t}(n.Component);function L(e){void 0===e&&(e={});var t=function(e){var t=void 0===e?{}:e,r=t.threshold,a=t.delay,i=t.trackVisibility,o=t.rootMargin,l=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,m=Object(n.useRef)(),d=Object(n.useState)({inView:!!u}),p=d[0],h=d[1],f=Object(n.useCallback)((function(e){void 0!==m.current&&(m.current(),m.current=void 0),c||e&&(m.current=E(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&s&&m.current&&(m.current(),m.current=void 0)}),{root:l,rootMargin:o,threshold:r,trackVisibility:i,delay:a}))}),[Array.isArray(r)?r.toString():r,l,o,s,c,i,a]);Object(n.useEffect)((function(){m.current||!p.entry||s||c||h({inView:!!u})}));var g=[f,p.inView,p.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}(e),r=t[0],a=t[1],i=t[2],o=Object(n.useState)(0),l=o[0],s=o[1],c=i&&i.target;return Object(n.useEffect)((function(){var t=function(){if(c){var t=c.getBoundingClientRect(),r=e.horizontal?O(t,e.threshold,e.root):N(t,e.threshold,e.root);s(r)}};if(a){var r=e.root||window;return r.addEventListener("scroll",t,{passive:!0}),r.addEventListener("resize",t),function(){r.removeEventListener("scroll",t),r.removeEventListener("resize",t)}}t()}),[a,e.root,e.horizontal,e.threshold,c]),[r,l,i]}h(S,"displayName","ScrollPercentage"),h(S,"defaultProps",{threshold:0});var V=r("9eSz"),C=r.n(V),I=r("CctC"),P=a.a.lazy((function(){return Promise.all([r.e(5),r.e(13)]).then(r.bind(null,"FECW"))})),z=function(e){var t=e.imgPath,r=Object(n.useState)(),i=r[0],o=r[1];Object(n.useEffect)((function(){o(navigator.connection&&"cellular"!==navigator.connection.type&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))}),[]);var l=L({threshold:0}),s=l[0],c=l[1];return a.a.createElement("div",{ref:s,className:"portrait","aria-hidden":"true",style:{opacity:1-Object(I.a)(c,.5,1,0,1)}},i&&a.a.createElement(n.Suspense,{fallback:a.a.createElement("span",{role:"img","aria-label":"loading..."},"🏋️")},a.a.createElement(P,{img:t.src})),!i&&a.a.createElement(C.a,{className:"w-full h-full",alt:"Portrait of Thomas Rutzer",fluid:t}))},M=function(e){function t(t){var r;return(r=e.call(this,t)||this).headline=a.a.createRef(),r.main=a.a.createRef(),r.subline=a.a.createRef(),r.bg=a.a.createRef(),r}Object(s.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e,t=(e=o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=m()({target:this.headline.current}),(r=c.a.timeline()).add({targets:this.main.current,opacity:[0,1],duration:0}).add({targets:this.bg.current,opacity:[0,1],keyframes:[{clipPath:"inset(0)"},{clipPath:"inset(32px)"}],duration:2e3,easing:"easeInOutExpo"}).add({targets:this.headline.current,opacity:[0,1],duration:0},"-=300").add({targets:t[0].chars,rotate:[20,0],translateY:["100%",0],opacity:[0,1],duration:2700,delay:c.a.stagger(20,{}),easing:"easeInOutExpo"},"-=1200").add({targets:this.subline.current,opacity:[0,1],translateY:[20,0],duration:1e3,easing:"easeOutQuad"},"-=1600"),r.play();case 4:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){l(i,n,a,o,s,"next",e)}function s(e){l(i,n,a,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),r.render=function(){return a.a.createElement("div",{className:"relative flex items-center overflow-hidden",style:{opacity:0},ref:this.main},a.a.createElement("div",{ref:this.bg,className:"intro__bg"},a.a.createElement(z,{imgPath:this.props.imgPath})),a.a.createElement("div",{className:"min-h-screen flex justify-between flex-col p-6 md:p-7",variant:"large"},a.a.createElement(d,{ref:this.headline},"hay I’m Thomas"),a.a.createElement("div",{ref:this.subline,className:"max-w-screen-sm"},a.a.createElement("p",null,"creative developer who feels most comfortable where sophisticated design meets well structured code."))))},t}(a.a.Component),_=r("jNNy"),R=r("I/Ru"),T=r("6zjD"),A=r("QgIm"),G=r("TSYQ"),F=r.n(G),D=function(e){var t=e.src,r=e.alt,i=e.fit,o=void 0===i?"cover":i,l=e.tiles,s=e.index,c=e.offsetX,u=void 0===c?0:c,m=e.offsetY,d=void 0===m?0:m,p=Object(n.useMemo)((function(){var e;return F()(((e={})["col-start-"+(s%2==0?"1":"2")+" col-span-5"]=!0,e["lg:col-start-"+l[0][0]]=!0,e["lg:col-span-"+l[0][1]]=!0,e["lg:row-start-"+l[1][0]]=!0,e["lg:row-span-"+l[1][1]]=!0,e))}),[s,l]);return a.a.createElement("div",{style:{transform:"translate("+u+"px, "+d+"px)"},className:p+" \n        overflow-hidden\n        mt-"+(0===s?"0":"4")+" lg:mt-0\n        flex items-center flex-col\n        transition-transform duration-1000 ease-out"},a.a.createElement(C.a,{className:"w-full",imgStyle:{objectFit:o},fluid:t.childImageSharp.fluid,alt:r}),a.a.createElement("figcaption",{className:"text-xs italic text-center mt-2 px-1 "},"Fig.",s+1,": ",r))},W=r("gGy4"),B=function(e){var t=e.appearance,r=e.title,n=e.subtitle,i=e.images,o=void 0===i?[]:i,l=Object(W.a)(15,35,15,35);return a.a.createElement("div",{className:"relative"},a.a.createElement("div",{className:"mb-6 lg:absolute lg:w-full lg:h-full \n          flex items-center justify-center flex-col z-10\n          pointer-events-none\n          "},a.a.createElement("h3",{className:"text-4xl md:text-6xl md:text-stroke-white md:text-stroke-2"},r),a.a.createElement("h4",null,n)),a.a.createElement("div",{className:"grid grid-cols-6 lg:grid-rows-3 lg:gap-5 lg:h-screen"},o.map((function(e,r){return a.a.createElement(D,{appearance:t,key:r,index:r,src:e.src,alt:e.alt,fit:e.fit,tiles:e.tiles,offsetX:l.tx,offsetY:l.ty})}))))},J=r("8G0I"),Y=function(e){var t=e.work,r=F()({"bg-grey-darkest":"dark"===t.selectedAppearance,"bg-tertiary":"tertiary"===t.selectedAppearance});return a.a.createElement("section",{className:r},a.a.createElement(R.a,{variant:"large",additionalClasses:"md:px-5 pt-6 md:pb-6 md:pt-7",verticalSpacing:!1,horizontalSpacing:!1},a.a.createElement(B,{appearance:"dark"===t.selectedAppearance?"light":"dark",images:t.images.map((function(e,r){return{src:t.fields.workImageAssets[r],alt:e.alt,tiles:e.grid.tiles,mobileRow:e.grid.mobileRow,fit:e.grid.fit}})),title:t.title,subtitle:t.subTitle})),a.a.createElement(R.a,null,a.a.createElement("div",{className:"grid grid-cols-6 md:gap-5 leading-7"},a.a.createElement("div",{className:"flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0"},a.a.createElement("p",null,a.a.createElement("span",{className:("dark"===t.selectedAppearance?"text-tertiary-lighter":"text-grey-darkest")+" block"},"first release"),a.a.createElement("span",{className:"text-grey-lighter"},t.year)),a.a.createElement("div",null,a.a.createElement("span",{className:("dark"===t.selectedAppearance?"text-tertiary-lighter":"text-grey-darkest")+" block"},"key facts"),a.a.createElement(J.a,{items:t.features}))),a.a.createElement("div",{className:"my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4"},a.a.createElement("p",{className:"whitespace-pre-line"},t.leadingDescription),a.a.createElement("p",{className:"whitespace-pre-line mt-3"},t.description)),a.a.createElement("div",{className:"col-start-1 col-span-6 md:col-start-6 md:col-span-1"},a.a.createElement("div",{className:"flex flex-col md:items-end"},a.a.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right"},t.links.map((function(e,t){var r=e.link,n=e.label;return a.a.createElement("div",{className:"whitespace-no-wrap",key:t},a.a.createElement(T.a,{appearance:"primary",link:r},n))}))))))))},H=r("87P0"),q=(t.default=function(e){var t=e.data;return a.a.createElement(R.b,null,a.a.createElement(_.a,null),a.a.createElement(M,{imgPath:t.portrait.childImageSharp.fluid}),a.a.createElement(R.a,{verticalSpacing:!1,additionalClasses:"pt-4 md:pt-7"},a.a.createElement(A.a,null,"work")),t.allWorksJson.edges.map((function(e,t){return a.a.createElement(Y,{work:e.node,key:t})})),a.a.createElement("section",{className:"bg-gradient-to-b from-grey-darkest to-black md:py-4"},a.a.createElement(R.a,null,a.a.createElement("div",{className:"flex flex-col md:flex-row items-center justify-center"},a.a.createElement("h2",{className:"text-2xl md:text-4xl md:text-stroke-white md:text-stroke mb-2 md:mb-0 md:mr-4"},"There is more"),a.a.createElement(H.b,{link:"/project-archive"},"project archive")))),a.a.createElement("section",{className:"bg-grey-darkest-pattern"},a.a.createElement(R.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(A.a,{appearance:"primary"},"thoughts")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},t.allWritesJson.edges.map((function(e,t){return a.a.createElement("div",{key:t,className:0===t?"mt-0":"mt-4 md:mt-7"},a.a.createElement(T.a,{link:e.node.link,appearance:"primary",size:"large"},e.node.title),a.a.createElement("small",{className:"block italic text-grey-lighter mt-4"},"— ",e.node.description))})))))),a.a.createElement("section",{className:"bg-tertiary"},a.a.createElement(R.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(A.a,null,"about")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},a.a.createElement("p",null,"I'm a leading JavaScript developer with a focus on unique interfaces and interactions, currently working at ",a.a.createElement(T.a,{link:"https://artcom.de",appearance:"primary"},"art+com"),", a studio for media installations and spaces."),a.a.createElement("p",{className:"mt-4"},'In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom solutions, mostly with full-stack JavaScript and MQTT based realtime communication.'),a.a.createElement("p",{className:"mt-4"},"My personal research focus at the moment is blending interfaces into spaces with the new WebXR Device API.")),a.a.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},a.a.createElement("div",{className:"flex flex-col md:items-end"},a.a.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right md:pl-2"},a.a.createElement("div",null,a.a.createElement(T.a,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"twitter.com/thomasrutzer",size:"large"},"twitter")),a.a.createElement("div",null,a.a.createElement(T.a,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"mailto:thomas@rutzer.de",size:"large"},"mail")),a.a.createElement("div",null,a.a.createElement(T.a,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"https://github.com/ThomasRutzer",size:"large"},"github")))))))),a.a.createElement("section",{className:"bg-grey-darkest-pattern"},a.a.createElement(R.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(A.a,{appearance:"primary"},"credits")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},a.a.createElement("p",{className:"mb-2 font-bold"},"images"),t.allWorksJson.edges.map((function(e,t){return a.a.createElement("div",{key:t,className:0===t?"mt-0":"mt-4"},a.a.createElement("p",{className:"text-sm text-tertiary-lighter"},e.node.title," ",a.a.createElement("i",null,e.node.subTitle)),a.a.createElement("ul",null,e.node.images.map((function(e,t){return a.a.createElement("li",{key:t},e.reference.link&&a.a.createElement(T.a,{link:e.reference.link,size:"small"},"Fig.",t+1," by ",e.reference.author),!e.reference.link&&a.a.createElement("p",{className:"text-sm"},"Fig.",t+1," by ",e.reference.author))}))))}))),a.a.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},a.a.createElement("p",{className:"mb-2 font-bold"},"this site"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(T.a,{link:"https://www.gatsbyjs.org/",size:"small"},"Gatsby.js")),a.a.createElement("li",null,a.a.createElement(T.a,{link:"https://tailwindcss.com/",size:"small"},"Tailwind.css")),a.a.createElement("li",null,a.a.createElement(T.a,{link:"https://animejs.com/",size:"small"},"anime.js")),a.a.createElement("li",null,a.a.createElement(T.a,{link:"https://github.com/features/actions",size:"small"},"Github actions")),a.a.createElement("li",null,a.a.createElement(T.a,{link:"https://fonts.google.com/specimen/IBM+Plex+Mono",size:"small"},"IBM Plex Mono"))))))))},"3600203626")},kD0k:function(e,t,r){e.exports=r("ls82")},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,i=Object.create(a.prototype),o=new x(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return N()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=w(o,r);if(l){if(l===c)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var c={};function u(){}function m(){}function d(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,f=h&&h(h(k([])));f&&f!==t&&r.call(f,a)&&(p=f);var g=d.prototype=u.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,l){var c=s(e[a],e,i);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=g.constructor=d,d.constructor=m,d[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new y(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(g),g[o]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;b(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-107ab1acacc1322380d6.js.map