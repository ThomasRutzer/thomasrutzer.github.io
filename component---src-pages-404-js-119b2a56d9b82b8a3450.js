(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DBfQ:function(e,t,n){e.exports={grid:"_404-module--grid--3_O1t",symbol:"_404-module--symbol--3o9fX",evaluated:"_404-module--evaluated--18vp0",cta:"_404-module--cta--1XLMM"}},nYRv:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),s=n("I/Ru"),o=n("6zjD");t.a=function(e){var t=e.title;return l.a.createElement("header",{className:"bg-grey-darkest-pattern"},l.a.createElement(s.a,{verticalSpacing:!1},l.a.createElement("ul",{className:"py-2"},l.a.createElement("li",null,l.a.createElement(o.b,{link:"/"},l.a.createElement("svg",{className:"external-link__icon transform -rotate-90 mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},l.a.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})),"Go to start view")))),l.a.createElement(s.a,null,l.a.createElement("h1",{className:"relative text-4xl md:text-6xl text-primary"},t)))}},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),s=n("EgnG"),o=n("jNNy");function r(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var i="slot-module_slot__39zq1";r(".slot-module_slot__39zq1 {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center; }\n");var c="symbol-module_symbol__2mcQp";r(".symbol-module_symbol__2mcQp {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 33.333%;\n  width: 100%;\n  font-size: calc(48px + (102 - 48) * ((100vw - 300px) / (1280 - 300))); }\n");var u=function(e){var t=e.symbol,n=e.evaluated,a=e.defaultStyleClass,s=e.evaluatedStyleClass;return l.a.createElement("div",{className:"\n      "+c+" \n      "+a+" \n      "+(n?s:"")},t)},m=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},b=function(e){function t(e){m(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.$symbols=l.a.createRef(),n.state={complete:null},n}return y(t,e),p(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.reset.bind(this))}},{key:"componentDidUpdate",value:function(e){!e.spin&&this.props.spin&&(this.reset(),this.start())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.reset.bind(this))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{ref:this.$symbols,className:i},this.props.symbols.map((function(t,n){return l.a.createElement(u,{key:n,evaluated:e.state.complete&&n===e.props.symbols.length-2,symbol:t,evaluatedStyleClass:e.props.symbolEvaluatedStyleClass,defaultStyleClass:e.props.symbolDefaultStyleClass})})))}},{key:"reset",value:function(){this.setState({complete:!1}),Object(s.a)({targets:this.$symbols.current,translateY:0,duration:0})}},{key:"start",value:function(){var e=this;Object(s.a)({targets:this.$symbols.current,translateY:"-"+this.$symbols.current.offsetHeight/3*(this.props.symbols.length-3)+"px",duration:2e3,easing:"easeInOutQuad",delay:500*this.props.slotIndex,complete:function(){e.setState({complete:!0},e.props.evaluate(e.props.slotIndex,e.props.symbols[e.props.symbols.length-2]))}})}}]),t}(l.a.Component);function v(e){return e[Math.floor(Math.random()*e.length)]}function g(e,t){return Array.from(Array(e).keys()).reduce((function(e){return[].concat(h(e),[v(t)])}),[])}var S="slotMachine-module_wrapper__3ERHR",E="slotMachine-module_slotMachine__282LB";r(".slotMachine-module_wrapper__3ERHR {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%; }\n\n.slotMachine-module_slotMachine__282LB {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex: 1 1 0; }\n");var _=function(e){function t(e){m(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSpinning:!1,isJackpot:!1},n.slots=[n.createSlot(n.props.initialSymbols[0]),n.createSlot(n.props.initialSymbols[1]),n.createSlot(n.props.initialSymbols[2])],n.prepareSlots(!0),n.slotMachineRef=l.a.createRef(),n}return y(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;Object(s.a)({targets:this.slotMachineRef.current,duration:1200,opacity:1,easing:"easeInOutQuad",complete:function(){e.spin()}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{ref:this.slotMachineRef,className:S},l.a.createElement("div",{className:E},this.slots.map((function(t,n){return l.a.createElement(b,{key:n,slotIndex:n,spin:e.state.isSpinning,evaluate:function(t,n){return e.saveSingleResult(t,n)},symbolDefaultStyleClass:e.props.symbolDefaultStyleClass,symbolEvaluatedStyleClass:e.props.symbolEvaluatedStyleClass,symbols:t.symbols})}))))}},{key:"spin",value:function(){this.state.isSpinning||this.setState({isSpinning:!0,isJackpot:!1})}},{key:"saveSingleResult",value:function(e,t){return this.slots[e].evaluation=t,0===this.slots.filter((function(e){return null===e.evaluation})).length?this.broadcastResult():null}},{key:"broadcastResult",value:function(){var e=this,t=this.slots.every((function(t){return t.evaluation===e.slots[0].evaluation}));this.setState({isSpinning:!1,isJackpot:t}),this.props.onSpinningEnd(t),this.prepareSlots(!1)}},{key:"prepareSlots",value:function(e){var t=this;this.slots=this.slots.map((function(n){return f({},n,{evaluation:null,symbols:e?[].concat(h(g(t.props.symbolsPerSlot-1,t.props.symbols)),h(n.symbols.slice(n.symbols.length-3,n.symbols.length))):[].concat(h(n.symbols.slice(n.symbols.length-3,n.symbols.length)),h(g(t.props.symbolsPerSlot-1,t.props.symbols)))})}))}},{key:"createSlot",value:function(e){return{symbols:[v(this.props.symbols),e,v(this.props.symbols)],evaluation:null}}}]),t}(l.a.Component);_.defaultProps={symbols:["0","1","2","3","4","5","6","7","8","9"],initialSymbols:["1","2","3"],symbolsPerSlot:20,symbolDefaultStyleClass:"slotMachine__symbol",symbolEvaluatedStyleClass:"slotMachine__symbol--evaluated",onSpinningEnd:function(){}};var k=l.a.forwardRef((function(e,t){return l.a.createElement(_,f({ref:t},e))})),w=n("I/Ru"),x=n("6zjD"),C=n("DBfQ"),O=n.n(C),j=n("87P0"),R=n("nYRv");t.default=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!0),n=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:"404 — Too bad"}),l.a.createElement(w.b,null,l.a.createElement(R.a,{title:"404 — Too bad"}),l.a.createElement("section",{className:"bg-gradient-to-r from-black"},l.a.createElement(w.a,null,l.a.createElement("div",{className:""+O.a.grid},l.a.createElement(k,{symbols:["0","1","2","3","4"],ref:e,initialSymbols:["4","0","4"],onSpinningEnd:function(e){return function(e){r(!1),e&&Object(s.a)({targets:document.body,duration:1200,keyframes:[{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"},{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"}],easing:"easeInOutQuad",complete:function(){document.body.removeAttribute("style")}})}(e)},symbolEvaluatedStyleClass:O.a.evaluated,symbolDefaultStyleClass:O.a.symbol}),l.a.createElement("div",{className:O.a.cta},l.a.createElement(j.a,{disabled:n,onClick:function(){e.current.spin(),r(!0)}},"Spin to Win!")),l.a.createElement("div",{className:"mt-4 text-center"},l.a.createElement("p",null,"I couldn't find what you were looking for. ",l.a.createElement("br",null),"Go ",l.a.createElement(x.b,{link:"/"},"home")," or try your luck.")))))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-119b2a56d9b82b8a3450.js.map