(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{321:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(5),c=a.n(o),i=a(114),l=a(14),s=a.n(l),u=a(30),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=p(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!d(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",m({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);f.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var v=f,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var g=function(e){var t=e.to,a=e.exact,n=e.strict,o=e.location,c=e.activeClassName,l=e.className,s=e.activeStyle,u=e.style,m=e.isActive,p=e["aria-current"],d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===("undefined"===typeof t?"undefined":h(t))?t.pathname:t,g=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return r.a.createElement(i.a,{path:g,exact:a,strict:n,location:o,children:function(e){var a=e.location,n=e.match,o=!!(m?m(n,a):n);return r.a.createElement(v,b({to:t,className:o?[l,c].filter(function(e){return e}).join(" "):l,style:o?b({},u,s):u,"aria-current":o&&p||null},d))}})};g.propTypes={to:v.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,"aria-current":c.a.oneOf(["page","step","location","date","time","true"])},g.defaultProps={activeClassName:"active","aria-current":"page"};t.a=g},657:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(1),o=a.n(r),c=a(321),i=a(16),l=a(0),s=a(4),u=a(11),m=(a(69),a(15)),p=a(6),d=Object(m.Icon_Cmpt)(),f=Object(m.ScrollDc_Cmpt)(),v=Object(s.a)(function(){return a.e(54).then(a.bind(null,656))});t.default=function(){Object(i.c)(p.b);var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],s=t[1],m=Object(r.useState)(null),b=Object(n.a)(m,2),h=(b[0],b[1]),g=Object(r.useState)(0),y=Object(n.a)(g,2),_=y[0],E=y[1],N=Object(r.useState)(""),O=Object(n.a)(N,2),j=O[0],x=O[1],C=Object(r.useState)(!0),k=Object(n.a)(C,2),w=k[0],S=k[1];Object(u.getThumbnailImg)("qvaMarket_logo2.png");var R=function(e){s(!1),x("");var t=document.getElementById("_search_input_header_");t&&(t.value=""),h(!1)};Object(r.useEffect)(function(){_||E(1)});a&&j&&l.D().route_history&&l.D().route_history.location&&l.D().route_history.location.pathname&&"/search"!==l.D().route_history.location.pathname&&(s(!1),x(""),document.getElementById("_search_input_header_").value="");var F=l.D().outerWidth,P=l.A(),T=F?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/operations"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Operations"," "))),P?null:o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/products"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Products"))),o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/marketplace"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Marketplace"))),o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/inventory"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Inventory"))),P?null:o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/customers_list"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Customers List"))),P?null:o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/senders"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Senders"))),P?null:o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/receivers"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Receivers"))),o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/dispatcher"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Dispatcher"))),o.a.createElement("div",{className:"navigation-tab",onCdivck:function(){return R()}},o.a.createElement(c.a,{to:{pathname:"/movements_list"},className:"logo",role:"sdivde_item"},o.a.createElement("a",{className:"menu-trigger",role:"button","aria-haspopup":"true",tabindex:"0"},"Movements")))):null,D=F?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header_title"},o.a.createElement(c.a,{to:{pathname:"/portfolio"}},o.a.createElement("div",{className:"_dsplFlx"},o.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/hrm-1128.appspot.com/o/images%2FschoolCollections.svg?alt=media&token=25f42a1d-4302-4332-8a77-7341a9704acf",alt:"portfolio"}),o.a.createElement("div",{className:"title"},"Hector Ricardo"))))):null;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{scrollhandler:function(e){return function(e){S(!(e>50))}(e)}}),o.a.createElement("div",{className:"","is-mobile":"".concat(P)},o.a.createElement("div",{className:"header_nav_container_  header_floating_  Wht ".concat(w?"":"Wht")},o.a.createElement("div",{className:"_dsplFlx  _w100 "},o.a.createElement("div",{className:"_dsplFlx spaceAround"},l.O()?D:T),o.a.createElement("canvas",{id:"myCanvas"}),o.a.createElement("div",{className:"flexSpace"}),o.a.createElement("div",{className:"_right_header_content  _dsplFlx ".concat(a?"_hover_":"")},o.a.createElement("div",{className:"h_cart_icon  ",onClick:function(){window.open("https://firebasestorage.googleapis.com/v0/b/hrm-1128.appspot.com/o/images%2FResume-Hector-Ricardo.pdf?alt=media&token=c5de99ab-3114-4585-becf-e085e696955c")}},o.a.createElement(d,{name:"arrow_down_large",color:"rgba(95,99,104,1)"}))),o.a.createElement("div",{className:"_right_header_content  _dsplFlx ".concat(a?"_hover_":"")},o.a.createElement("div",{className:"h_cart_icon  ",onClick:function(){return function(e,t){var a={zIndex:650,observeResize:!0,props:{minHeight:"40px"}};a.content=o.a.createElement(v,null),Object(u.OpenModal)(a)}()}},o.a.createElement(d,{name:"send",color:"rgba(95,99,104,1)"})))),o.a.createElement("div",{className:" hd_black_bckGrnd ".concat(w?"":"boxShadow"),style:w?{backgroundColor:"transparent"}:{}}))))}}}]);
//# sourceMappingURL=43.3a6695cc.chunk.js.map