"use strict";(self.webpackChunkgithub_user_page=self.webpackChunkgithub_user_page||[]).push([[705],{3181:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var r=n(7294),a=n(6125),l=n(3101);function s(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var o=s("Tab"),c=s("TabList"),i=s("TabPanel");function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||c(e)||i(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,d({},e.props,{children:u(e.props.children,t)})):e}))}function f(e,t){return r.Children.forEach(e,(function(e){null!==e&&(o(e)||i(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(c(e)&&t(e),f(e.props.children,t)))}))}function p(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function m(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(r&&(r+=" "),r+=t);return r}var b=0;function h(){return"react-tabs-"+b++}function v(e){var t=0;return f(e,(function(e){o(e)&&t++})),t}var g,y=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function k(e){return e&&"getAttribute"in e}function C(e){return k(e)&&e.getAttribute("data-rttab")}function T(e){return k(e)&&"true"===e.getAttribute("aria-disabled")}var x=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,r=n.direction,a=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var l=t.props.selectedIndex,s=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,o=!1,t.handleClick(e)),37===e.keyCode||!a&&38===e.keyCode?(l="rtl"===r?t.getNextTab(l):t.getPrevTab(l),s=!0,o=!0):39===e.keyCode||!a&&40===e.keyCode?(l="rtl"===r?t.getPrevTab(l):t.getNextTab(l),s=!0,o=!0):35===e.keyCode?(l=t.getLastTab(),s=!0,o=!0):36===e.keyCode&&(l=t.getFirstTab(),s=!0,o=!0),s&&e.preventDefault(),o&&t.setSelected(l,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(T(n))return;var r=[].slice.call(n.parentNode.children).filter(C).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,E(t,n);var l=a.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!T(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!T(this.getTab(r)))return r;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!T(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!T(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!T(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!T(this.getTab(e)))return e;return null},l.getTabsCount=function(){return v(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return f(e,(function(e){i(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,n=this.props,a=n.children,l=n.disabledTabClassName,s=n.focus,d=n.forceRenderTabPanel,f=n.selectedIndex,p=n.selectedTabClassName,m=n.selectedTabPanelClassName,b=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var v=this.tabIds.length-this.getTabsCount();v++<0;)this.tabIds.push(h()),this.panelIds.push(h());return u(a,(function(n){var a=n;if(c(n)){var h=0,v=!1;null==g&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{g=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){g=!1}}(b),g&&(v=r.Children.toArray(n.props.children).filter(o).some((function(t,n){var r=b||("undefined"!=typeof window?window:void 0);return r&&r.document.activeElement===e.getTab(n)}))),a=(0,r.cloneElement)(n,{children:u(n.props.children,(function(t){var n="tabs-"+h,a=f===h,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:a,focus:a&&(s||v)};return p&&(o.selectedClassName=p),l&&(o.disabledClassName=l),h++,(0,r.cloneElement)(t,o)}))})}else if(i(n)){var y={id:e.panelIds[t],tabId:e.tabIds[t],selected:f===t};d&&(y.forceRender=d),m&&(y.selectedClassName=m),t++,a=(0,r.cloneElement)(n,y)}return a}))},l.isTabFromContainer=function(e){if(!C(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),l=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,y));return r.createElement("div",N({},l,{className:m(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,a&&a(t)},"data-rttabs":!0}),this.getChildren())},a}(r.Component);x.defaultProps={className:"react-tabs",focus:!1};var w=["children","defaultIndex","defaultFocus"];function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}var _=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,l=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var s={focus:"keydown"===r.type};1===l&&(s.selectedIndex=e),n.setState(s)}},n.state=a.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,I(t,n),a.getDerivedStateFromProps=function(e,t){return a.copyPropsToState(e,t)},a.getModeFromProps=function(e){return null===e.selectedIndex?1:0},a.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var r={focus:n,mode:a.getModeFromProps(e)};if(1===r.mode){var l=Math.max(0,v(e.children)-1),s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,l):e.defaultIndex||0,r.selectedIndex=s}return r},a.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,w)),a=this.state,l=a.focus,s=a.selectedIndex;return n.focus=l,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),r.createElement(x,n,t)},a}(r.Component);_.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},_.tabsRole="Tabs";var O=["children","className"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}var R=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,j(t,n),a.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O);return r.createElement("ul",P({},a,{className:m(n),role:"tablist"}),t)},a}(r.Component);R.defaultProps={className:"react-tabs__tab-list"},R.tabsRole="TabList";var S=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}var M="react-tabs__tab",A=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,F(t,n);var l=a.prototype;return l.componentDidMount=function(){this.checkFocus()},l.componentDidUpdate=function(){this.checkFocus()},l.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},l.render=function(){var e,t=this,n=this.props,a=n.children,l=n.className,s=n.disabled,o=n.disabledClassName,c=(n.focus,n.id),i=n.panelId,d=n.selected,u=n.selectedClassName,f=n.tabIndex,p=n.tabRef,b=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,S);return r.createElement("li",D({},b,{className:m(l,(e={},e[u]=d,e[o]=s,e)),ref:function(e){t.node=e,p&&p(e)},role:"tab",id:c,"aria-selected":d?"true":"false","aria-disabled":s?"true":"false","aria-controls":i,tabIndex:f||(d?"0":null),"data-rttab":!0}),a)},a}(r.Component);A.defaultProps={className:M,disabledClassName:M+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:M+"--selected"},A.tabsRole="Tab";var K=["children","className","forceRender","id","selected","selectedClassName","tabId"];function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}var W="react-tabs__tab-panel",z=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,U(t,n),a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,l=t.forceRender,s=t.id,o=t.selected,c=t.selectedClassName,i=t.tabId,d=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,K);return r.createElement("div",L({},d,{className:m(a,(e={},e[c]=o,e)),role:"tabpanel",id:s,"aria-labelledby":i}),l||o?n:null)},a}(r.Component);z.defaultProps={className:W,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},z.tabsRole="TabPanel";var V=function(e){var t=e.children,n=e.defaultIndex;return r.createElement(_,{defaultIndex:n,className:"tabs"},r.createElement(R,{className:"tab-list py mb-5"},t.map((function(e,t){return r.createElement(A,{key:t,className:"tab-list__item tab-list__item--"+t,selectedClassName:"tab-list__item--selected"},e.props.label,r.createElement("svg",{className:"tab-list__icon relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"16",width:"16"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})))}))),t.map((function(e,t){return r.createElement(z,{key:t,className:"tabs__tab-panel",selectedClassName:"tabs__tab-panel--selected"},e.props.children)})))},J=n(2338),B=n(8913),G=n(8010),H=n(2411),q=n(6573),Z=n(627),Q=n(5900),X=n.n(Q),Y=n(7778),$=n(4227),ee=[{mouseMoveTranslations:[1,3,1,3]},{mouseMoveTranslations:[5,10,5,10]},{mouseMoveTranslations:[10,20,10,20]}],te=function(){return r.createElement("div",{className:"relative"},r.createElement(B.f,{verticalSpacing:!1},r.createElement("ul",{className:"py-2"},r.createElement("li",null,r.createElement(Y.f,{link:"/"},r.createElement("svg",{className:"external-link__icon transform -rotate-90 mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},r.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})),"Go to start view")))),r.createElement(B.f,null,r.createElement("h1",{className:"sub-hero__title leading-tight font-mono md:my-4"},r.createElement("span",{className:"text-sm"},"(Almost all)"),r.createElement("span",{className:"text-6xl block font-semibold"},"Design ",r.createElement("br",null),"& Code"),r.createElement("span",{className:"text-5xl text-stroke text-stroke-white block italic"},"along the road"))),r.createElement("div",{className:"overflow-hidden md:overflow-visible -z-10 absolute w-full h-full left-0 top-0 bg-gradient-to-r from-black","aria-hidden":"true"},ee.map((function(e,t){var n,a=X()("sub-hero-circle absolute",((n={})["sub-hero-circle--"+t]=!0,n));return r.createElement("div",{className:a},r.createElement($.f,{appearance:$.O.DARK,mouseMoveTranslations:e.mouseMoveTranslations}))}))))},ne=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(l.Z,{title:"thomas rutzer – project archive"}),r.createElement(q.f,null,r.createElement(te,null),r.createElement(B.f,null,r.createElement(V,{defaultIndex:t.allWorksJson.group.length-1},t.allWorksJson.group.map((function(e,t){return r.createElement("section",{key:t,label:0===t?e.edges[0].node.year:(n=e.edges[0].node.year,""+n.toString().slice(-2))},r.createElement("ul",null,e.edges.map((function(e,t){return r.createElement("li",{key:t,className:"project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 "+(0!==t?"pt-6 border-t-2 border-grey-darker":"")},r.createElement("div",{className:"col-start-1 col-span-1 row-start-1 row-span-2"},r.createElement(a.G,{className:"rounded-lg",style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"},alt:e.node.teaserImage.alt,image:e.node.fields.teaserImageAsset.childImageSharp.gatsbyImageData})),r.createElement("div",{className:"col-start-2 col-span-1"},r.createElement("h2",{className:"text-xl lg:text-2xl tracking-widest uppercase font-mono"},e.node.title)),r.createElement("div",{className:"col-start-2 col-span-1 row-start-2 self-end"},r.createElement("h3",{className:"text-secondary-lighter block font-mono uppercase"},e.node.subTitle)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 my-2 md:my-0 leading-loose"},r.createElement("p",null,e.node.teaserDescription)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between"},r.createElement("div",{className:"self-end"},r.createElement(H.fC,null,r.createElement(H.Dx,null,"Key facts"),r.createElement(H.aV,{items:e.node.features,delimiter:!0}))),r.createElement("div",{className:"self-end"},e.node.links.map((function(e,t){var n=e.link,a=e.label;return r.createElement("div",{className:"whitespace-no-wrap",key:t},r.createElement(G.fC,{link:n},a))})))))}))));var n})))),r.createElement("section",{className:"bg-grey-darkest-pattern"},r.createElement(B.f,null,r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},r.createElement("div",{className:"col-start-1 col-span-1"},r.createElement(Z.f,null,"credits")),r.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},r.createElement(J.f,{title:"teaser images"},t.allWorksJson.group.map((function(e,t){return r.createElement("ul",{key:t,className:"text-sm"},r.createElement("li",{className:"text-secondary-lighter mb-1"},e.edges[0].node.year),e.edges.map((function(e,n){return r.createElement("li",{key:n+t,className:"mb-2 block"},e.node.teaserImage.reference.link&&r.createElement(G.fC,{link:e.node.teaserImage.reference.link},e.node.title," ",e.node.subTitle," by ",e.node.teaserImage.reference.author),!e.node.teaserImage.reference.link&&e.node.title+" "+e.node.subTitle+" "+e.node.teaserImage.reference.link+"by "+e.node.teaserImage.reference.author)})))})))))))))}}}]);
//# sourceMappingURL=component---src-pages-project-archive-js-8177110793e0499eb40d.js.map