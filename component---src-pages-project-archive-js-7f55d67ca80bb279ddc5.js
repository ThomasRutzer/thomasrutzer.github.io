(self.webpackChunkgithub_user_page=self.webpackChunkgithub_user_page||[]).push([[705],{1787:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(7294),a=n(8590),s=n(3101),l=n(9384),o=n(4892),c=n(2350);function i(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var d=i("Tab"),u=i("TabList"),p=i("TabPanel");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return d(e)||u(e)||p(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,f({},e.props,{children:m(e.props.children,t)})):e}))}function b(e,t){return r.Children.forEach(e,(function(e){null!==e&&(d(e)||p(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(u(e)&&t(e),b(e.props.children,t)))}))}function h(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function v(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}var y=0;function g(){return"react-tabs-"+y++}function N(e){var t=0;return b(e,(function(e){d(e)&&t++})),t}var C,E=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return e&&"getAttribute"in e}function x(e){return I(e)&&e.getAttribute("data-rttab")}function _(e){return I(e)&&"true"===e.getAttribute("aria-disabled")}var w=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,r=n.direction,a=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var s=t.props.selectedIndex,l=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(l=!0,o=!1,t.handleClick(e)),37===e.keyCode||!a&&38===e.keyCode?(s="rtl"===r?t.getNextTab(s):t.getPrevTab(s),l=!0,o=!0):39===e.keyCode||!a&&40===e.keyCode?(s="rtl"===r?t.getPrevTab(s):t.getNextTab(s),l=!0,o=!0):35===e.keyCode?(s=t.getLastTab(),l=!0,o=!0):36===e.keyCode&&(s=t.getFirstTab(),l=!0,o=!0),l&&e.preventDefault(),o&&t.setSelected(s,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(_(n))return;var r=[].slice.call(n.parentNode.children).filter(x).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,k(t,n);var s=a.prototype;return s.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},s.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!_(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!_(this.getTab(r)))return r;return e},s.getPrevTab=function(e){for(var t=e;t--;)if(!_(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!_(this.getTab(t)))return t;return e},s.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!_(this.getTab(t)))return t;return null},s.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!_(this.getTab(e)))return e;return null},s.getTabsCount=function(){return N(this.props.children)},s.getPanelsCount=function(){return function(e){var t=0;return b(e,(function(e){p(e)&&t++})),t}(this.props.children)},s.getTab=function(e){return this.tabNodes["tabs-"+e]},s.getChildren=function(){var e=this,t=0,n=this.props,a=n.children,s=n.disabledTabClassName,l=n.focus,o=n.forceRenderTabPanel,c=n.selectedIndex,i=n.selectedTabClassName,f=n.selectedTabPanelClassName,b=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var h=this.tabIds.length-this.getTabsCount();h++<0;)this.tabIds.push(g()),this.panelIds.push(g());return m(a,(function(n){var a=n;if(u(n)){var h=0,v=!1;null==C&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{C=!(void 0===t||!t.document||!t.document.activeElement)}catch(n){C=!1}}(b),C&&(v=r.Children.toArray(n.props.children).filter(d).some((function(t,n){var r=b||("undefined"!=typeof window?window:void 0);return r&&r.document.activeElement===e.getTab(n)}))),a=(0,r.cloneElement)(n,{children:m(n.props.children,(function(t){var n="tabs-"+h,a=c===h,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:a,focus:a&&(l||v)};return i&&(o.selectedClassName=i),s&&(o.disabledClassName=s),h++,(0,r.cloneElement)(t,o)}))})}else if(p(n)){var y={id:e.panelIds[t],tabId:e.tabIds[t],selected:c===t};o&&(y.forceRender=o),f&&(y.selectedClassName=f),t++,a=(0,r.cloneElement)(n,y)}return a}))},s.isTabFromContainer=function(e){if(!x(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},s.render=function(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),s=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,E));return r.createElement("div",T({},s,{className:v(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,a&&a(t)},"data-rttabs":!0}),this.getChildren())},a}(r.Component);w.defaultProps={className:"react-tabs",focus:!1};var O=["children","defaultIndex","defaultFocus"];function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,s=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var l={focus:"keydown"===r.type};1===s&&(l.selectedIndex=e),n.setState(l)}},n.state=a.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,P(t,n),a.getDerivedStateFromProps=function(e,t){return a.copyPropsToState(e,t)},a.getModeFromProps=function(e){return null===e.selectedIndex?1:0},a.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var r={focus:n,mode:a.getModeFromProps(e)};if(1===r.mode){var s=Math.max(0,N(e.children)-1),l=null;l=null!=t.selectedIndex?Math.min(t.selectedIndex,s):e.defaultIndex||0,r.selectedIndex=l}return r},a.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O)),a=this.state,s=a.focus,l=a.selectedIndex;return n.focus=s,n.onSelect=this.handleSelected,null!=l&&(n.selectedIndex=l),r.createElement(w,n,t)},a}(r.Component);j.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},j.tabsRole="Tabs";var R=["children","className"];function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,F(t,n),a.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,R);return r.createElement("ul",S({},a,{className:v(n),role:"tablist"}),t)},a}(r.Component);D.defaultProps={className:"react-tabs__tab-list"},D.tabsRole="TabList";var A=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L="react-tabs__tab",U=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,K(t,n);var s=a.prototype;return s.componentDidMount=function(){this.checkFocus()},s.componentDidUpdate=function(){this.checkFocus()},s.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},s.render=function(){var e,t=this,n=this.props,a=n.children,s=n.className,l=n.disabled,o=n.disabledClassName,c=(n.focus,n.id),i=n.panelId,d=n.selected,u=n.selectedClassName,p=n.tabIndex,f=n.tabRef,m=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,A);return r.createElement("li",M({},m,{className:v(s,(e={},e[u]=d,e[o]=l,e)),ref:function(e){t.node=e,f&&f(e)},role:"tab",id:c,"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":i,tabIndex:p||(d?"0":null),"data-rttab":!0}),a)},a}(r.Component);U.defaultProps={className:L,disabledClassName:L+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:L+"--selected"},U.tabsRole="Tab";var W=["children","className","forceRender","id","selected","selectedClassName","tabId"];function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z="react-tabs__tab-panel",V=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,J(t,n),a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,s=t.forceRender,l=t.id,o=t.selected,c=t.selectedClassName,i=t.tabId,d=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,W);return r.createElement("div",z({},d,{className:v(a,(e={},e[c]=o,e)),role:"tabpanel",id:l,"aria-labelledby":i}),s||o?n:null)},a}(r.Component);V.defaultProps={className:Z,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},V.tabsRole="TabPanel";var B=function(e){var t=e.children,n=e.defaultIndex;return r.createElement(j,{defaultIndex:n,className:"tabs"},r.createElement(D,{className:"tab-list py mb-5"},t.map((function(e,t){return r.createElement(U,{key:t,className:"tab-list__item tab-list__item--"+t,selectedClassName:"tab-list__item--selected"},e.props.label,r.createElement("svg",{className:"tab-list__icon relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"16",width:"16"},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})))}))),t.map((function(e,t){return r.createElement(V,{key:t,className:"tabs__tab-panel",selectedClassName:"tabs__tab-panel--selected"},e.props.children)})))},G=n(891),H=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(s.Z,{title:"thomas rutzer – project archive"}),r.createElement(l.W,null,r.createElement(G.ad,null),r.createElement(l.v,null,r.createElement(B,{defaultIndex:t.allWorksJson.group.length-1},t.allWorksJson.group.map((function(e,t){return r.createElement("section",{key:t,label:0===t?e.edges[0].node.year:(n=e.edges[0].node.year,""+n.toString().slice(-2))},r.createElement("ul",null,e.edges.map((function(e,t){return r.createElement("li",{key:t,className:"project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 "+(0!==t?"pt-6 border-t-2 border-grey-darker":"")},r.createElement("div",{className:"col-start-1 col-span-1 row-start-1 row-span-2"},r.createElement(a.G,{className:"rounded-lg",style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"},alt:e.node.teaserImage.alt,image:e.node.fields.teaserImageAsset.childImageSharp.gatsbyImageData})),r.createElement("div",{className:"col-start-2 col-span-1"},r.createElement("h2",{className:"text-3xl lg:text-4xl -mt-2"},e.node.title)),r.createElement("div",{className:"col-start-2 col-span-1 row-start-2 self-end"},r.createElement("h3",{className:"text-secondary-lighter"},e.node.subTitle)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 my-2 md:my-0"},r.createElement("p",null,e.node.teaserDescription)),r.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between"},r.createElement("div",{className:"self-end"},r.createElement("span",{className:"text-secondary-lighter block text-sm"},"key facts"),r.createElement(c.Z,{items:e.node.features})),r.createElement("div",{className:"self-end"},e.node.links.map((function(e,t){var n=e.link,a=e.label;return r.createElement("div",{className:"whitespace-no-wrap",key:t},r.createElement(o.d,{appearance:"primary",link:n},a))})))))}))));var n})))),r.createElement("section",{className:"bg-grey-darkest-pattern"},r.createElement(l.v,null,r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},r.createElement("div",{className:"col-start-1 col-span-1"},r.createElement(G.NZ,{appearance:"primary"},"credits")),r.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},r.createElement("p",{className:"mb-2 font-bold"},"teaser images"),t.allWorksJson.group.map((function(e,t){return r.createElement("ul",{key:t,className:"text-sm"},r.createElement("li",{className:"text-secondary-lighter mb-1"},e.edges[0].node.year),e.edges.map((function(e,n){return r.createElement("li",{key:n+t,className:"mb-2 block"},e.node.teaserImage.reference.link&&r.createElement(o.d,{link:e.node.teaserImage.reference.link,size:"small"},e.node.title+" "+e.node.subTitle," by"," ",e.node.teaserImage.reference.author),!e.node.teaserImage.reference.link&&e.node.title+" "+e.node.subTitle+" "+e.node.teaserImage.reference.link+"by "+e.node.teaserImage.reference.author)})))}))))))))}}}]);
//# sourceMappingURL=component---src-pages-project-archive-js-7f55d67ca80bb279ddc5.js.map