(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{114:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(3),c=a.n(r),l=a(6),s=a(2),i=a.n(s),o=a(18),d=a(90),u=a(0),m=(a(45),u.f()),v=u.g(),f=u.h(),p=u.d(),b="243876nt5fdgomwy",g={amount:{reqired:!0,number:!0,minValue:10,maxValue:25e4},agentId:{reqired:!0},date:{reqired:!0},tasa:{reqired:!0,number:!0,minValue:.01,maxValue:1e3}};function _(e,t){var a={};return u.m(e).map(function(n){if(t){var r=t&&t.toLowerCase(),c=e[n].name&&e[n].name.toLowerCase();r&&c&&c.indexOf(r)>=0&&(a[n]=e[n])}else a[n]=e[n]}),a}t.default=Object(d.a)(function(e){var t=function(){var e=Object(o.c)(function(e){return e.observeChanges}),t=Object(o.b)();return{observeChanges:e,LoadUA:function(){var e=Object(l.a)(c.a.mark(function e(a){var n,r,l,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["id","name","email","isqvmAgent","telegram_chat_id","isDelivery","allowInventory"],r={query:"getQueryUsersDetails",params:{userId:u.Q()},Collection:"Users",arraySerialization:u.Y(),fields:n},l=u.x(u.S(),r),e.next=5,l;case 5:(s=e.sent)&&(i=u.Y()?u.u(s,n,1):s,u.ub("agentsList",i),t({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:u.C()}}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),dispatch:t}}(),a=t.dispatch,r=t.LoadUA,d=u.O(),h=u.K();d.keys=h;var E=Object(s.useState)(!1),y=Object(n.a)(E,2),k=y[0],C=y[1],O=Object(s.useState)(null),w=Object(n.a)(O,2),j=w[0],x=w[1],N=Object(s.useState)(!1),S=Object(n.a)(N,2),U=S[0],L=S[1],I=d.outerWidth;window.location.hash.split("?")[1]&&window.location.hash.split("?")[1];Object(s.useEffect)(function(){j!==I&&x(I),k||(C(!0),u.i()?(r(),setTimeout(function(){window.scrollTo(0,0)},350),setTimeout(function(){return L(!0)},50),window.localStorage.setItem("lng","es")):d.route_history.push({pathname:"/marketplace"}))});var A=u.H(),q="Android"===A.os||"iPhone"===A.os||d.outerWidth<550,F=Object(s.useState)(""),D=Object(n.a)(F,2),T=(D[0],D[1]),V=Object(s.useState)(""),P=Object(n.a)(V,2),B=P[0],Y=P[1],K=Object(s.useState)(!1),J=Object(n.a)(K,2),Q=(J[0],J[1],Object(s.useState)(!1)),W=Object(n.a)(Q,2),H=(W[0],W[1],Object(s.useState)("")),M=Object(n.a)(H,2),z=M[0],G=M[1],R=Object(s.useState)(null),X=Object(n.a)(R,2),Z=X[0],$=X[1],ee=Object(s.useState)(null),te=Object(n.a)(ee,2),ae=(te[0],te[1],Object(s.useState)("")),ne=Object(n.a)(ae,2),re=ne[0],ce=ne[1],le=Object(s.useState)(""),se=Object(n.a)(le,2),ie=se[0],oe=se[1],de=u.J(b)||{},ue=d.agentsList||{};ue=u.i()&&B&&B.length>0?_(d.agentsList,B):_(d.agentsList,"");var me=Z&&d.agentsList&&d.agentsList[Z]||{},ve=function(){var e=Object(l.a)(c.a.mark(function e(t,n){var r,l,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r={params:{userId:me.id,fld:t,value:n},query:"upgradeUserByAdmin"},!me||!me.id){e.next=7;break}return l=u.x(u.S(),r),e.next=5,l;case 5:(s=e.sent)&&s[me.id]&&(ue[me.id]=s[me.id],u.ub("agentsList",ue),a({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:u.C()}}));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={params:{userId:me.id,fld:"telegram_chat_id",value:z},query:"upgradeUserByAdmin"},!me||!me.id){e.next=7;break}return n=u.x(u.S(),t),e.next=5,n;case 5:(r=e.sent)&&r[me.id]&&(ue[me.id]=r[me.id],u.ub("agentsList",ue),a({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:u.C()}}));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={params:{newUser:me.id,oldUser:ie.id,Collection:re},query:"updUserColl"},console.log(t),!me||!me.id){e.next=8;break}return n=u.x(u.S(),t),e.next=6,n;case 6:(r=e.sent)&&r[me.id]&&(ue[me.id]=r[me.id],u.ub("agentsList",ue),a({type:"UPD_KEY_VALUE",kv:{key:"observeChanges",value:u.C()}}));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n          --base-color_telegram: #0088cc;\n          --checkBox--button--color: #0088cc;\n          --checkBox--button--Active--color: #0088cc;\n        }\n        "),i.a.createElement("div",{className:"palette  formContainer shopping_cart InfoM ".concat(q?"is_mobile":""),style:{opacity:U?1:0}},i.a.createElement("div",{className:"centerListCardProd "},i.a.createElement("div",{className:"formContainer centerListCardProd ",style:{opacity:1}},i.a.createElement("div",{className:" _flxWrp HUs"},i.a.createElement("div",{className:"paddField address"},i.a.createElement(v,{icon:"more_vert",form:b,field:"agentId",keyCode:49,background:"#f9f9f9",color:"var(--base-color)",placeholder:"Agente",initvalue:de.agentId,OnSelect:function(e){var t;(t=e)&&t.id&&($(t.id),T(null))},data:ue,OnChange:function(e){return Y(e)}})),i.a.createElement("div",{className:"  headerTtl "},i.a.createElement("div",{className:"mainTitle"},me.id),i.a.createElement("div",{className:"descTitle"},me.name)),me&&me.id?i.a.createElement("div",null,i.a.createElement("div",{className:"paddField address"},i.a.createElement(v,{icon:"more_vert",form:b,field:"oldUser",keyCode:79,background:"#f9f9f9",color:"var(--base-color)",placeholder:"Agente",initvalue:de.oldUser,OnSelect:function(e){return oe(e)},data:ue,OnChange:function(e){return Y(e)}})),i.a.createElement("div",{className:"paddField paletteTlg"},i.a.createElement(f,{icon:"more_vert",form:b,field:"collection",keyCode:33,background:"#f9f9f9",color:"var(--base-color_telegram)",placeholder:"Collection",OnChange:function(e){return ce(e)}})),i.a.createElement("div",{className:"pym81b sendBx mov_type _dsplFlx telegram_color ",onClick:function(){return pe()}},i.a.createElement("div",{className:"icon_mov"},i.a.createElement(m,{name:"telegram"})),i.a.createElement("div",{className:"mov_type_title "},"Update Collection"),i.a.createElement("div",{className:"flexSpace"}))):null,me&&me.id?i.a.createElement("div",null,i.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"Is QvaMarket Agent",i.a.createElement("div",{className:"in_stock_switch_btn"},i.a.createElement(p,{initvalue:me.isqvmAgent,keyCode:77,updChange:function(e){return ve("isqvmAgent",e)}}))),i.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"Is Reseller",i.a.createElement("div",{className:"in_stock_switch_btn"},i.a.createElement(p,{initvalue:me.allowInventory,keyCode:73,updChange:function(e){return ve("allowInventory",e)}}))),i.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"Is Delivery",i.a.createElement("div",{className:"in_stock_switch_btn"},i.a.createElement(p,{initvalue:me.isDelivery,keyCode:75,updChange:function(e){return ve("isDelivery",e)}}))),i.a.createElement("div",{className:"in_stock_switch _dsplFlx"},"Is Store",i.a.createElement("div",{className:"in_stock_switch_btn"},i.a.createElement(p,{initvalue:me.isStore,keyCode:75,updChange:function(e){return ve("isStore",e)}}))),i.a.createElement("div",{className:"paddField paletteTlg"},i.a.createElement(f,{icon:"more_vert",form:b,field:"telegram_chat_id",keyCode:36,background:"#f9f9f9",color:"var(--base-color_telegram)",placeholder:"Telegram Id",OnChange:function(e){return G(e)},validations:g.telegram_chat_id,initvalue:me.telegram_chat_id})),i.a.createElement("div",{className:"pym81b sendBx mov_type _dsplFlx telegram_color ",onClick:function(){return fe()}},i.a.createElement("div",{className:"icon_mov"},i.a.createElement(m,{name:"telegram"})),i.a.createElement("div",{className:"mov_type_title "},"Guardar Telegram ChatID"),i.a.createElement("div",{className:"flexSpace"}))):null)))))})}}]);
//# sourceMappingURL=39.ee1286f6.chunk.js.map