(self.webpackChunkgithub_user_page=self.webpackChunkgithub_user_page||[]).push([[705],{2350:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.items;return r.createElement("ul",{className:"featureList"},t.map((function(e,t){return r.createElement("li",{key:t,className:"featureList__item text-sm text-grey-lighter"},e)})))}},8586:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children;return r.createElement("h2",{className:"text-2xl"},r.createElement("span",null,t),r.createElement("span",{className:"text-primary"},"."))}},8319:function(e,t,n){"use strict";n.d(t,{$:function(){return f},J:function(){return o}});var r=n(7294),a="(prefers-reduced-motion: no-preference)",l="undefined"==typeof window,s=function(){return!!l||!window.matchMedia(a).matches},o=function(){var e=r.useState(s),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=window.matchMedia(a),t=function(e){n(!e.matches)};return e.addEventListener("change",t),function(){e.removeEventListener("change",t)}}),[]),t},c=function(e){return{x:(e=e||window.event).clientX,y:e.clientY}},i=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},u=function(e,t,n){return(1-n)*e+n*t},d=n(906),f=function(e,t,n,a,l){var s=(0,r.useState)(null),o=s[0],f=s[1],m=(0,r.useState)(null),p=m[0],b=m[1],h=(0,r.useRef)(null),v=(0,r.useRef)(null),g=(0,r.useCallback)((function(e){var t=c(e),n=t.x,r=t.y;v.current=n,h.current=r}),[]);return(0,r.useEffect)((function(){if(!l){var r=null,s=i(e,t),o=i(n,a);return r=requestAnimationFrame((function e(){f((function(e){return u(e,(0,d.Z)(v.current,0,window.innerWidth,-s,s),.07)})),b((function(e){return u(e,(0,d.Z)(h.current,0,window.innerHeight,-o,o),.07)})),r=requestAnimationFrame(e)})),function(){return cancelAnimationFrame(r)}}}),[l,e,t,n,a]),(0,r.useEffect)((function(){return l?window.removeEventListener("mousemove",g):window.addEventListener("mousemove",g),function(){window.removeEventListener("mousemove",g)}}),[g,l]),{tx:o,ty:p}}},6371:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(7294),a=n(8590),l=n(3101),s=n(9384),o=n(4892),c=n(2350);function i(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var u=i("Tab"),d=i("TabList"),f=i("TabPanel");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return u(e)||d(e)||f(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,m({},e.props,{children:p(e.props.children,t)})):e}))}function b(e,t){return r.Children.forEach(e,(function(e){null!==e&&(u(e)||f(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(d(e)&&t(e),b(e.props.children,t)))}))}function h(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function v(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}var g=0;function y(){return"react-tabs-"+g++}function E(e){var t=0;return b(e,(function(e){u(e)&&t++})),t}var N,w=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){return e&&"getAttribute"in e}function C(e){return k(e)&&e.getAttribute("data-rttab")}function T(e){return k(e)&&"true"===e.getAttribute("aria-disabled")}var I=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,r=n.direction,a=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var l=t.props.selectedIndex,s=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,o=!1,t.handleClick(e)),37===e.keyCode||!a&&38===e.keyCode?(l="rtl"===r?t.getNextTab(l):t.getPrevTab(l),s=!0,o=!0):39===e.keyCode||!a&&40===e.keyCode?(l="rtl"===r?t.getPrevTab(l):t.getNextTab(l),s=!0,o=!0):35===e.keyCode?(l=t.getLastTab(),s=!0,o=!0):36===e.keyCode&&(l=t.getFirstTab(),s=!0,o=!0),s&&e.preventDefault(),o&&t.setSelected(l,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(T(n))return;var r=[].slice.call(n.parentNode.children).filter(C).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,_(t,n);var l=a.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!T(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!T(this.getTab(r)))return r;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!T(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!T(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!T(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!T(this.getTab(e)))return e;return null},l.getTabsCount=function(){return E(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return b(e,(function(e){f(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,n=this.props,a=n.children,l=n.disabledTabClassName,s=n.focus,o=n.forceRenderTabPanel,c=n.selectedIndex,i=n.selectedTabClassName,m=n.selectedTabPanelClassName,b=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var h=this.tabIds.length-this.getTabsCount();h++<0;)this.tabIds.push(y()),this.panelIds.push(y());return p(a,(function(n){var a=n;if(d(n)){var h=0,v=!1;null==N&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{N=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){N=!1}}(b),N&&(v=r.Children.toArray(n.props.children).filter(u).some((function(t,n){var r=b||("undefined"!=typeof window?window:void 0);return r&&r.document.activeElement===e.getTab(n)}))),a=(0,r.cloneElement)(n,{children:p(n.props.children,(function(t){var n="tabs-"+h,a=c===h,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:a,focus:a&&(s||v)};return i&&(o.selectedClassName=i),l&&(o.disabledClassName=l),h++,(0,r.cloneElement)(t,o)}))})}else if(f(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:c===t};o&&(g.forceRender=o),m&&(g.selectedClassName=m),t++,a=(0,r.cloneElement)(n,g)}return a}))},l.isTabFromContainer=function(e){if(!C(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),l=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,w));return r.createElement("div",x({},l,{className:v(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,a&&a(t)},"data-rttabs":!0}),this.getChildren())},a}(r.Component);I.defaultProps={className:"react-tabs",focus:!1};var j=["children","defaultIndex","defaultFocus"];function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,l=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var s={focus:"keydown"===r.type};1===l&&(s.selectedIndex=e),n.setState(s)}},n.state=a.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,O(t,n),a.getDerivedStateFromProps=function(e,t){return a.copyPropsToState(e,t)},a.getModeFromProps=function(e){return null===e.selectedIndex?1:0},a.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var r={focus:n,mode:a.getModeFromProps(e)};if(1===r.mode){var l=Math.max(0,E(e.children)-1),s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,l):e.defaultIndex||0,r.selectedIndex=s}return r},a.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,j)),a=this.state,l=a.focus,s=a.selectedIndex;return n.focus=l,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),r.createElement(I,n,t)},a}(r.Component);P.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},P.tabsRole="Tabs";var S=["children","className"];function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,F(t,n),a.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,S);return r.createElement("ul",R({},a,{className:v(n),role:"tablist"}),t)},a}(r.Component);M.defaultProps={className:"react-tabs__tab-list"},M.tabsRole="TabList";var L=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z="react-tabs__tab",K=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,A(t,n);var l=a.prototype;return l.componentDidMount=function(){this.checkFocus()},l.componentDidUpdate=function(){this.checkFocus()},l.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},l.render=function(){var e,t=this,n=this.props,a=n.children,l=n.className,s=n.disabled,o=n.disabledClassName,c=(n.focus,n.id),i=n.panelId,u=n.selected,d=n.selectedClassName,f=n.tabIndex,m=n.tabRef,p=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,L);return r.createElement("li",D({},p,{className:v(l,(e={},e[d]=u,e[o]=s,e)),ref:function(e){t.node=e,m&&m(e)},role:"tab",id:c,"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":i,tabIndex:f||(u?"0":null),"data-rttab":!0}),a)},a}(r.Component);K.defaultProps={className:Z,disabledClassName:Z+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:Z+"--selected"},K.tabsRole="Tab";var W=["children","className","forceRender","id","selected","selectedClassName","tabId"];function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z="react-tabs__tab-panel",q=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,U(t,n),a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,l=t.forceRender,s=t.id,o=t.selected,c=t.selectedClassName,i=t.tabId,u=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,W);return r.createElement("div",J({},u,{className:v(a,(e={},e[c]=o,e)),role:"tabpanel",id:s,"aria-labelledby":i}),l||o?n:null)},a}(r.Component);q.defaultProps={className:z,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},q.tabsRole="TabPanel";var H=function(e){var t=e.children,n=e.defaultIndex;return r.createElement(P,{defaultIndex:n,className:"tabs"},r.createElement(M,{className:"tab-list py mb-5"},t.map((function(e,t){return r.createElement(K,{key:t,className:"tab-list__item tab-list__item--"+t,selectedClassName:"tab-list__item--selected"},e.props.label,r.createElement("svg",{className:"tab-list__icon relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"16",width:"16"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})))}))),t.map((function(e,t){return r.createElement(q,{key:t,className:"tabs__tab-panel",selectedClassName:"tabs__tab-panel--selected"},e.props.children)})))},V=n(8586),B=n(8319),G=n(7741),$=function(e){var t=e.mouseMoveTranslations,n=void 0===t?[10,20,10,20]:t,a=(0,B.J)(),l=(0,B.$)(n[0],n[1],n[2],n[3],"undefined"!=typeof window&&((0,G.Z)()||a));return r.createElement("div",{className:"parallax-circles"},r.createElement("div",{className:"parallax-circles__outer bg-primary bg-gradient-to-b from-secondary"},r.createElement("div",{style:{transform:"translate("+l.tx+"px, "+l.ty+"px)"},className:"parallax-circles__inner bg-gradient-to-r from-grey-darker transition-transform duration-700 ease-out"})))},X=function(){return r.createElement("div",{className:"project-archive-intro relative"},r.createElement(s.v,{verticalSpacing:!1},r.createElement("ul",{className:"py-2"},r.createElement("li",null,r.createElement(o.h,{link:"/"},r.createElement("svg",{className:"external-link__icon transform -rotate-90 mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},r.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})),"Go to start view")))),r.createElement(s.v,null,r.createElement("h1",{className:"project-archive-intro__title leading-tight md:my-4"},r.createElement("span",{className:"text-sm text-grey-lighter"},"(Almost all)"),r.createElement("span",{className:"text-6xl font-bold block"},"Design ",r.createElement("br",null),"& Code"),r.createElement("span",{className:"text-5xl text-stroke text-stroke-white block italic"},"along the road"))),r.createElement("div",{className:"project-archive-intro__bg bg-gradient-to-r from-black","aria-hidden":"true"},r.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--1"},r.createElement($,{mouseMoveTranslations:[1,3,1,3]})),r.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--2"},r.createElement($,{mouseMoveTranslations:[5,10,5,10]})),r.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--3"},r.createElement($,null))))},Y=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(l.Z,{title:"thomas rutzer – project archive"}),r.createElement(s.W,null,r.createElement(X,null),r.createElement(s.v,null,r.createElement(H,{defaultIndex:t.allWorksJson.group.length-1},t.allWorksJson.group.map((function(e,t){return r.createElement("section",{key:t,label:0===t?e.edges[0].node.year:(n=e.edges[0].node.year,""+n.toString().slice(-2))},r.createElement("ul",null,e.edges.map((function(e,t){return r.createElement("li",{key:t,className:"project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 "+(0!==t?"pt-6 border-t-2 border-grey-darker":"")},r.createElement("div",{className:"col-start-1 col-span-1 row-start-1 row-span-2"},r.createElement(a.G,{className:"h-full rounded-lg",style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"},alt:e.node.teaserImage.alt,image:e.node.fields.teaserImageAsset.childImageSharp.gatsbyImageData})),r.createElement("div",{className:"col-start-2 col-span-1"},r.createElement("h2",{className:"text-3xl lg:text-4xl -mt-2"},e.node.title)),r.createElement("div",{className:"col-start-2 col-span-1 row-start-2 self-end"},r.createElement("h3",{className:"text-secondary-lighter"},e.node.subTitle)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 my-2 md:my-0"},r.createElement("p",null,e.node.teaserDescription)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between"},r.createElement("div",{className:"self-end"},r.createElement("span",{className:"text-secondary-lighter block text-sm"},"key facts"),r.createElement(c.Z,{items:e.node.features})),r.createElement("div",{className:"self-end"},e.node.links.map((function(e,t){var n=e.link,a=e.label;return r.createElement("div",{className:"whitespace-no-wrap",key:t},r.createElement(o.d,{appearance:"primary",link:n},a))})))))}))));var n})))),r.createElement("section",{className:"bg-grey-darkest-pattern"},r.createElement(s.v,null,r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},r.createElement("div",{className:"col-start-1 col-span-1"},r.createElement(V.Z,{appearance:"primary"},"credits")),r.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},r.createElement("p",{className:"mb-2 font-bold"},"teaser images"),t.allWorksJson.group.map((function(e,t){return r.createElement("ul",{key:t,className:"text-sm"},r.createElement("li",{className:"text-secondary-lighter mb-1"},e.edges[0].node.year),e.edges.map((function(e,n){return r.createElement("li",{key:n+t,className:"mb-2 block"},e.node.teaserImage.reference.link&&r.createElement(o.d,{link:e.node.teaserImage.reference.link,size:"small"},e.node.title+" "+e.node.subTitle," by"," ",e.node.teaserImage.reference.author),!e.node.teaserImage.reference.link&&e.node.title+" "+e.node.subTitle+" "+e.node.teaserImage.reference.link+"by "+e.node.teaserImage.reference.author)})))}))))))))}},7741:function(e,t){"use strict";t.Z=function(){return window&&window.matchMedia("(pointer: coarse)").matches}},906:function(e,t){"use strict";t.Z=function(e,t,n,r,a){return(e-t)*(a-r)/(n-t)+r}}}]);
//# sourceMappingURL=component---src-pages-project-archive-js-0d599e20fdbd031fd3a6.js.map