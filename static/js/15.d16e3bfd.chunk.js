(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"calcMovExpInc",function(){return j}),a.d(t,"loadGastos",function(){return _}),a.d(t,"groupbyTab",function(){return w}),a.d(t,"filterbyUser",function(){return x});var n=a(20),r=a(3),o=a.n(r),i=a(6),c=a(2),l=a.n(c),s=a(18),u=a(90),m=(a(91),a(19)),p=a(8),f=a(0),d=(a(45),f.a()),v=f.o(),b=(f.e(),f.g()),h=(f.c(),f.n(),Object(p.a)(function(){return a.e(1).then(a.bind(null,92))}),Object(p.a)(function(){return a.e(34).then(a.bind(null,98))})),y=Object(p.a)(function(){return a.e(36).then(a.bind(null,99))}),g=f.d(),O=f.f(),E=function(){var e=Object(s.c)(function(e){return e.observeChanges}),t=Object(s.b)(),a=function(){var e=Object(i.a)(o.a.mark(function e(a){var n,r,i,c,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["id","name","email","isqvmAgent","isAdmin"],r={query:"getQueryUsersDetails",params:{userId:f.Q()},Collection:"Users",arraySerialization:f.Y(),fields:n},i=f.x(f.S(),r),e.next=5,i;case 5:(c=e.sent)&&(l=f.Y()?f.u(c,n,1):c,f.ub("agentsList",l),t({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:f.C()}}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return{observeChanges:e,_LoadCities:function(e){Object(m.fetchCities)(e,t)},dispatch:t,LoadUA:a,_openMd:function(e,a){var n={zIndex:450};n.Id=e,n.observeResize=!0,n.props={item:a,minHeight:"1vh"},Object(m.OpenWatchDialog)(t,n)}}},j=function(){var e=Object(i.a)(o.a.mark(function e(t){var a,n,r,i,c,l,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=f.O(),n=2===a.ViewTypeMov,f.ub(n?"Incomes":"Expenses",t),r={},i=0,c=f.J("_search_M")||{},l=c.search,f.m(t).map(function(e,a){var n=!1,o=t[e].import&&t[e].import.toString().toLowerCase();if(l){var c=l&&l.toLowerCase()?l.toString().toLowerCase():"",s=t[e].title.toString().toLowerCase(),u=t[e].group&&t[e].group.name&&t[e].group.name.toString().toLowerCase(),m=t[e].date>1,p=s&&s.indexOf(c)>=0&&m,d=u&&u.indexOf(c)>=0&&m,v=o&&o.indexOf(c)>=0&&m;(p||d||v)&&(n=!0)}else n=!0;var b=f.i()||f.N();n&&b&&(r[e]=t[e],i+=t[e].import)}),s=f.lb(r,"date",!1),f.ub(n?"IncomeSort":"ExpenseSort",s),f.ub("balanceM",i),r=null,t=null,Object(m.getDispatch)()({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:f.C()}});case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(o.a.mark(function e(){var t,a,n,r,i,c,l,s,u,m,p,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.O(),a=t.agentId2||f.N(),n=t.filtersMov||{},(new Date).getTime(),r=["id","title","description","import","date","year","month","image",{N:"users",Q:"",f:["id","name","email"]},{N:"group",Q:"",f:["id","name"]}],i=f.Y(),c=t.ViewTypeMov,l=2===c?"getQueryIncomesDetails":"getQueryExpensesDetails",s=12*n.year+(n.month+1),u={query:l,fields:r,arraySerialization:i,params:{userId:a,filterK:"month",filterV:s||11}},m=f.x(f.S(),u),e.next=13,m;case 13:(p=e.sent)&&(d=i?f.u(p,r,1):p,j(d));case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();t.default=Object(u.a)(function(e){var t=E(),a=(t._openMd,t.dispatch,t.LoadUA,function(){var e=Object(s.c)(function(e){return e.observeForms}),t=Object(s.b)();return{_updFormObs:function(e,a){t({type:"UPD_KEY_VALUE",kv:{key:"observeForms",value:f.C()}})},observeForms:e}}()._updFormObs),r=f.O(),o=f.K();r.keys=o;f.J("add_operation");var i=r.usersDetail,u=Object(c.useState)(!1),p=Object(n.a)(u,2),v=p[0],y=p[1],_=Object(c.useState)(null),S=Object(n.a)(_,2),k=S[0],M=S[1],T=Object(c.useState)(!1),I=Object(n.a)(T,2),D=I[0],L=I[1],F=Object(c.useState)(null),R=Object(n.a)(F,2),A=R[0],P=R[1],U=Object(c.useState)(0),V=Object(n.a)(U,2),Y=V[0],q=V[1],K=Object(c.useState)(1),z=Object(n.a)(K,2),H=z[0],Q=(z[1],Object(c.useState)(24)),J=Object(n.a)(Q,2),W=J[0],B=J[1],$=Object(c.useState)(""),G=Object(n.a)($,2),X=G[0],Z=G[1],ee=Object(c.useState)(1),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],re=Object(c.useState)(1),oe=Object(n.a)(re,2),ie=(oe[0],oe[1]),ce=r.outerWidth,le=r.agentId2||r.userProfile,se=f.N();Object(c.useEffect)(function(){if(k!==ce&&M(ce),A!==se&&P(se),!v){y(!0),f.vb(7),f.i(),setTimeout(function(){return window.scrollTo(0,0)},350),setTimeout(function(){return L(!0)},50);var e=r.filtersMov||{};e.year||(e.year=(new Date).getFullYear()),e.month||(e.month=(new Date).getMonth()),f.ub("filtersMov",e),window.localStorage.setItem("lng","es");var t=f.J("add_operation");t&&t.id||(f.pb("add_operation",{}),a())}});var ue=r.filtersMov||{},me=(f.cb[ue.month],f.H()),pe="Android"===me.os||"iPhone"===me.os||r.outerWidth<550,fe=2===H?r.IncomeSort:r.ExpenseSort,de=2===H?r.Incomes:r.Expenses,ve=w(fe,de),be=i&&i.filters,he=f.lb(be,"name",1);he.slice(0,W);r.lastReload&&ae!==r.lastReload&&(ne(r.lastReload),j(de));r.balanceM;var ye={};ye=f.i()&&X&&X.length>0?x(r.usersList,X):x(r.usersList,"");return l.a.createElement(l.a.Fragment,null,l.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n\n        "),l.a.createElement("div",{className:" palette formContainer shopping_cart  _movements ".concat(pe?"is_mobile":""),style:{opacity:D?1:0}},l.a.createElement("div",{className:"formContainer ",style:{opacity:D?1:0}},D?l.a.createElement("div",{className:"centerListCardProd "},f.i()?l.a.createElement("div",{className:"paddField address"},l.a.createElement(b,{icon:"more_vert",form:"kjsahfashflkashjaf",field:"agentId",keyCode:49,background:"#f9f9f9",color:"var(--base-color)",placeholder:f.mb(13),OnSelect:function(e){return t=e.id,f.ub("agentId2",t),f.ub("usersDetail",null),Object(m.SubscribeDetailsbyId)(t),void ie(f.C());var t},data:ye,OnChange:function(e){return Z(e)}})):null,f.i()?l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("span",{onClick:function(){}},l.a.createElement(d,{theme:"light_blue",title:le})),l.a.createElement("div",{className:"flexSpace"})):null,l.a.createElement("div",{className:"  headerTtl"},l.a.createElement("div",{className:"pym81b sendBx "},null,l.a.createElement("div",{className:"subtotal_cart "},i&&i.email),l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("span",{className:"_dsplFlx ".concat(i&&i.isValidToken?"green_light":"fire_brick"),onClick:function(){return Object(m.UpdateDetails)(le,{isValidToken:!(i&&i.isValidToken)})}},l.a.createElement("div",{className:"token"},"Token"),l.a.createElement("div",{className:"icon_open "},l.a.createElement(O,{name:i&&i.isValidToken?"success":"alert"})))),l.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"Active ",l.a.createElement("div",{className:"in_stock_switch_btn"},l.a.createElement(g,{initvalue:i&&i.running,keyCode:73,updChange:function(){return Object(m.UpdateDetails)(le,{running:!(i&&i.running)})}}))))),Y?l.a.createElement(N,{close:function(){return q(!1)}}):null,l.a.createElement("div",{className:" sendBx scroll3Wrp "},l.a.createElement("div",{className:"formContainer ",style:{opacity:1===H?1:0}},1===H?l.a.createElement("div",{className:"_dsplFlx space2Around _flxWrp op4oU"},he&&he.map(function(e,t){return l.a.createElement(C,{data:ve[e],ind:t,fV:e,range:W,updRange:function(e){return B(e)},ItemComponent:l.a.createElement(h,null),tag:"_pend_Mov"})})):null))):null),l.a.createElement("div",{className:"footSpace"})))});var C=function(e){e.data;var t=e.ind,a=e.range,r=e.ItemComponent,o=e.fV,i=Object(c.useState)(!1),s=Object(n.a)(i,2),u=s[0],m=s[1],p=null;return r&&(p=l.a.cloneElement(r,{mvId:o})),l.a.createElement("div",{id:t+"_gpr_"+t,style:{minHeight:"100px"}},u?l.a.createElement("div",{className:""},p):l.a.createElement(v,{scrollhandler:function(n){if(!u){var r=document.getElementById(t+"_gpr_"+t);if(r){var o=f.db(r).top;o>=n-100&&o<=n+window.innerHeight+(n>500?1600:0)&&(m(!0),e.updRange(a+12))}}}}))};function w(e,t){var a={};return e&&e.map(function(e){if(e&&t[e]){var n=t[e].date,r=Math.ceil(new Date(n).getTime()/864e5);a[r]||(a[r]=[]),a[r].push(e)}}),a}var N=function(e){var t=E().dispatch,a=(e.mvId,f.O()),r=(f.N(),Object(c.useState)(!1)),o=Object(n.a)(r,2),i=o[0],s=o[1],u=Object(c.useState)(0),p=Object(n.a)(u,2),v=(p[0],p[1]),b=function(e){var t=a.filtersMov||{};t.year=e,f.ub("filtersMov",t),v(f.D()),_()},h=function(e,n){var r=a.filtersMov||{};r.month=n,f.ub("filtersMov",r),_(),Object(m.CloseModal)(t,{id:e})};Object(c.useEffect)(function(){if(!i){s(!0);var e=a.filtersMov||{};e.year||(e.year=(new Date).getFullYear()),e.month||(e.month=(new Date).getMonth()),f.ub("filtersMov",e)}});var g=a.filtersMov||{};return l.a.createElement("div",{className:"  headerTtl"},l.a.createElement("div",{className:"pym81b sendBx "},l.a.createElement("div",{className:"_dsplFlx"},l.a.createElement("div",{className:"subtotal_cart "},"Filtros"),l.a.createElement("div",{className:"flexSpace"}),l.a.createElement("div",{className:"icon_open ",onClick:function(){"function"===typeof e.close&&e.close()}},l.a.createElement(O,{name:"Xclose",size:18}))),l.a.createElement("div",{className:"_dsplFlx spaceAround"},l.a.createElement("div",{className:"icon_open ",onClick:function(){return b(2021)}},l.a.createElement(d,{theme:2021===g.year?"blue_white":"light_blue",title:"2021"})),l.a.createElement("div",{className:"icon_open ",onClick:function(){return b(2020)}},l.a.createElement(d,{theme:2020===g.year?"blue_white":"light_blue",title:"2020"})),l.a.createElement("div",{className:"icon_open ",onClick:function(){return b(2019)}},l.a.createElement(d,{theme:2019===g.year?"blue_white":"light_blue",title:"2019"}))),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"_dsplFlx spaceAround"},l.a.createElement("div",{className:"icon_open ",onClick:function(){return function(){var e={zIndex:450,observeResize:!0,props:{minHeight:"420px"}};e.content=l.a.createElement(y,{confirm:h}),Object(m.OpenModal)(t,e)}()}},l.a.createElement(d,{theme:"light_blue",title:"Month"})),l.a.createElement("div",{className:"icon_open ",onClick:function(){}},l.a.createElement(d,{theme:"light_blue",title:"Categories"})))))};function x(e,t){var a={};return e&&f.m(e).map(function(n){if(n){var r=e[n].email&&e[n].email.toString().toLowerCase(),o=e[n].name&&e[n].name.toString().toLowerCase();if(t){var i=t.toString().toLowerCase();(o&&o.indexOf(i)>=0||r&&r.indexOf(i)>=0)&&(a[n]={id:n,name:e[n].email})}else a[n]={id:n,name:e[n].email}}}),a}},91:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(7),i=a.n(o),c=a(69),l=a(21),s=a.n(l),u=a(36),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=p(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(u.b)(t,null,null,o.location):t,c=o.createHref(i);return r.a.createElement("a",m({},n,{onClick:this.handleClick,href:c,ref:a}))},t}(r.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired};var v=d,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var y=function(e){var t=e.to,a=e.exact,n=e.strict,o=e.location,i=e.activeClassName,l=e.className,s=e.activeStyle,u=e.style,m=e.isActive,p=e["aria-current"],f=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":h(t))?t.pathname:t,y=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return r.a.createElement(c.a,{path:y,exact:a,strict:n,location:o,children:function(e){var a=e.location,n=e.match,o=!!(m?m(n,a):n);return r.a.createElement(v,b({to:t,className:o?[l,i].filter(function(e){return e}).join(" "):l,style:o?b({},u,s):u,"aria-current":o&&p||null},f))}})};y.propTypes={to:v.propTypes.to,exact:i.a.bool,strict:i.a.bool,location:i.a.object,activeClassName:i.a.string,className:i.a.string,activeStyle:i.a.object,style:i.a.object,isActive:i.a.func,"aria-current":i.a.oneOf(["page","step","location","date","time","true"])},y.defaultProps={activeClassName:"active","aria-current":"page"};t.a=y}}]);
//# sourceMappingURL=15.d16e3bfd.chunk.js.map