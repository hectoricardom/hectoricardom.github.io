(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(3),o=a.n(r),c=a(6),i=a(2),s=a.n(i),l=a(18),p=a(91),u=a(19),f=a(0),m=(a(45),f.a()),d=f.f(),y=f.e();t.default=function(e){var t=function(){var e=Object(l.c)(function(e){return e.observeChanges}),t=Object(l.b)(),a=function(){var e=Object(c.a)(o.a.mark(function e(a){var n,r,c,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["id","name","email","isqvmAgent","isAdmin"],r={query:"getQueryUsersDetails",params:{userId:f.Q()},Collection:"Users",arraySerialization:f.Y(),fields:n},c=f.x(f.S(),r),e.next=5,c;case 5:(i=e.sent)&&(s=f.Y()?f.u(i,n,1):i,f.ub("agentsList",s),t({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:f.C()}}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return{observeChanges:e,_LoadCities:function(e){Object(u.fetchCities)(e,t)},dispatch:t,LoadUA:a,_updRemesa:function(e,a){Object(u.fetchRemesa)(e,t,a)}}}().dispatch,a=e.mvId,r=f.O().Groups,v=r&&r[a],b=v&&v.id,h=Object(i.useState)(0),E=Object(n.a)(h,2),O=E[0],_=E[1],g=v&&v.name,N=f.N(),C=(v&&v.isPaid,function(){var e=Object(c.a)(o.a.mark(function e(a){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{id:v.id},query:"removeGroup",user:N},r=f.x(f.S(),n),e.next=4,r;case 4:e.sent&&(Object(u.loadGroups)(N),Object(u.CloseModal)(t,{id:a}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),j="";return v&&(j="Entrega"===v.type?"_Rem":"BTC"===v.type?"_btc":"COMBO"===v.type?"_cmb":"INVESTMENT_FOOD"===v.type||"INVESTMENT_INGREDIENTS"===v.type?"_investFood":"DEBT"===v.type?"_debt":"TRANSFER"===v.type?"_trnsfr":"DELIVERY_EXPS"===v.type?"_dlvExp":"","Entrega"===v.type||("BTC"===v.type||("COMBO"===v.type||("INVESTMENT_FOOD"===v.type||"INVESTMENT_INGREDIENTS"===v.type||("DEBT"===v.type||("TRANSFER"===v.type||v.type)))))),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("div",{className:"movementItem_mobile  group ".concat(O?"open":"")},s.a.createElement("div",{className:" mov_type _dsplFlx SmlB mov_actions ".concat(j)},s.a.createElement("div",{className:"details_op "},s.a.createElement("div",{className:"title_head3r _dsplFlx "},s.a.createElement("h5",null,g),s.a.createElement("div",{className:"flexSpace"}))),s.a.createElement("div",{className:"flexSpace"}),s.a.createElement("div",{className:"actions"},s.a.createElement("div",{className:"icon_open ".concat(O?"up":"down"),onClick:function(){return _(!O)}},s.a.createElement(d,{name:"arrow_down"})))),O?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"separator"}),s.a.createElement("div",{className:"sendBtn _dsplFlx mov_actions"},s.a.createElement("div",{className:"flexSpace"}),s.a.createElement("div",{className:"sendBtn _dsplFlx spaceAround"},s.a.createElement("div",{className:"fieldPadding _MrgV _actBtnMg"},s.a.createElement("span",{onClick:function(){return function(){var e={zIndex:450,observeResize:!0};e.props={item:b,minHeight:"190px"},e.content=s.a.createElement(y,{confirm:C}),Object(u.OpenModal)(t,e)}()}},s.a.createElement(m,{theme:"fire_brick",title:f.mb(68)}))),s.a.createElement("div",{className:"fieldPadding _MrgV _actBtnMg"},s.a.createElement("span",null,s.a.createElement(p.a,{to:{pathname:"/edit_operation",search:"?movId="+b},className:" u3mD2d xwW5Ce",onClick:function(e){var a=v;a.group=v.group.id,delete a.user,delete a.year,delete a.month,f.pb("243876nt5fdgomwy",a),t({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:f.C()}})}},s.a.createElement(m,{theme:"light_blue",title:f.mb(71)}))))))):null)))}},91:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(7),c=a.n(o),i=a(69),s=a(21),l=a.n(s),p=a(36),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=f(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!m(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},f(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(p.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);d.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var y=d,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var h=function(e){var t=e.to,a=e.exact,n=e.strict,o=e.location,c=e.activeClassName,s=e.className,l=e.activeStyle,p=e.style,u=e.isActive,f=e["aria-current"],m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":b(t))?t.pathname:t,h=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return r.a.createElement(i.a,{path:h,exact:a,strict:n,location:o,children:function(e){var a=e.location,n=e.match,o=!!(u?u(n,a):n);return r.a.createElement(y,v({to:t,className:o?[s,c].filter(function(e){return e}).join(" "):s,style:o?v({},p,l):p,"aria-current":o&&f||null},m))}})};h.propTypes={to:y.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,"aria-current":c.a.oneOf(["page","step","location","date","time","true"])},h.defaultProps={activeClassName:"active","aria-current":"page"};t.a=h}}]);
//# sourceMappingURL=14.fd2c15b2.chunk.js.map