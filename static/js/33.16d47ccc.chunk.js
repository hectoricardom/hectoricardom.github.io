(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"groupbyTab",function(){return h});var a=n(3),r=n.n(a),c=n(6),o=n(20),s=n(2),i=n.n(s),l=n(18),u=n(90),d=n(19),m=n(8),p=n(0),b=(n(45),p.a()),f=p.p(),v=Object(m.a)(function(){return n.e(35).then(n.bind(null,100))}),O=Object(m.a)(function(){return n.e(14).then(n.bind(null,101))}),j=Object(m.a)(function(){return n.e(2).then(n.bind(null,93))});function h(e,t){var n={};return e&&p.m(e).map(function(a){if(a){var r=e[a].type&&e[a].type.toString().toLowerCase(),c=e[a].name&&e[a].name.toString().toLowerCase();if(t){var o=t.toString().toLowerCase();c.indexOf(o)>=0&&(n[r]||(n[r]=[]),n[r].push(a))}else n[r]||(n[r]=[]),n[r].push(a)}}),n}t.default=Object(u.a)(function(e){var t=function(){var e=Object(l.c)(function(e){return e.observeChanges}),t=Object(l.b)();return{observeChanges:e,_LoadCities:function(e){Object(d.fetchCities)(e,t)},dispatch:t,_updRemesa:function(e,n){Object(d.fetchRemesa)(e,t,n)},_openMd:function(e,n){var a={zIndex:450};a.Id=e,a.observeResize=!0,a.props={item:n,minHeight:"1vh"},Object(d.OpenWatchDialog)(t,a)}}}(),n=(t._openMd,t.dispatch),a=(t._updRemesa,function(){var e=Object(l.c)(function(e){return e.observeForms}),t=Object(l.b)();return{_updFormObs:function(e,n){t({type:"UPD_KEY_VALUE",kv:{key:"observeForms",value:p.C()}})},observeForms:e}}()._updFormObs),u=p.O(),m=p.K();u.keys=m;p.J("add_operation");var _=Object(s.useState)(!1),E=Object(o.a)(_,2),g=E[0],C=E[1],w=Object(s.useState)(null),y=Object(o.a)(w,2),x=y[0],S=y[1],N=Object(s.useState)(!1),k=Object(o.a)(N,2),F=k[0],I=k[1],L=Object(s.useState)(null),M=Object(o.a)(L,2),R=M[0],W=M[1],J=Object(s.useState)(0),T=Object(o.a)(J,2),z=T[0],G=(T[1],Object(s.useState)(1)),A=Object(o.a)(G,2),D=A[0],H=(A[1],Object(s.useState)(24)),P=Object(o.a)(H,2),U=P[0],V=P[1],K=Object(s.useState)(""),q=Object(o.a)(K,2),B=q[0],Y=q[1],Q=u.outerWidth,X=p.N();Object(s.useEffect)(function(){if(x!==Q&&S(Q),R!==X&&(W(X),Object(d.loadGroups)(X)),!g){C(!0),p.vb(7),Object(d.loadGroups)(X),setTimeout(function(){return window.scrollTo(0,0)},350),setTimeout(function(){return I(!0)},50),window.localStorage.setItem("lng","es");var e=p.J("add_operation");e&&e.id||(p.pb("add_operation",{}),a())}});var Z=p.H(),$="Android"===Z.os||"iPhone"===Z.os||u.outerWidth<550,ee=u.Groups,te=(2===D?u.Incomes:u.Expenses,h(ee,B)),ne=function(){var e=Object(c.a)(r.a.mark(function e(t){var a,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p.J("addCategory")).user=X,!(a.name.length>2)){e.next=9;break}return c={form:a,fields:["id","name"],query:"upgradeGroups"},o=p.x(p.S(),c),e.next=7,o;case 7:e.sent&&Object(d.CloseModal)(n,{id:t});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n\n        "),i.a.createElement("div",{className:" palette formContainer shopping_cart  _movements ".concat($?"is_mobile":""),style:{opacity:F?1:0}},i.a.createElement("div",{className:"formContainer ",style:{opacity:0===z?1:0}},0===z?i.a.createElement("div",{className:"centerListCardProd "},i.a.createElement("div",{className:"delete_alert_t1 "},i.a.createElement("div",null,"".concat(p.mb(32)))),i.a.createElement("div",{className:"_dsplFlx"},i.a.createElement("div",{className:"flexSpace"}),i.a.createElement("span",{className:" u3mD2d xwW5Ce",onClick:function(e){var t={zIndex:450,observeResize:!0};t.props={item:e,minHeight:"330px",showType:!0},t.content=i.a.createElement(j,{confirm:ne}),Object(d.OpenModal)(n,t)}},i.a.createElement(b,{theme:"blue_white",title:p.mb(12)}))),i.a.createElement("div",{className:" _search_MrgV  "},i.a.createElement(f,{updChanges:Y,placeholderCode:20})),i.a.createElement("div",{className:" sendBx scroll3Wrp "},i.a.createElement("div",{className:"formContainer ",style:{opacity:1===D?1:0}},1===D?i.a.createElement("div",{className:"_dsplFlx space2Around _flxWrp op4oU"},te&&p.m(te).map(function(e,t){return i.a.createElement(v,{data:te[e],ind:t,fV:e,range:U,updRange:function(e){return V(e)},ItemComponent:i.a.createElement(O,null),tag:"_pend_Mov"})})):null))):null),i.a.createElement("div",{className:"footSpace"})))})}}]);
//# sourceMappingURL=33.16d47ccc.chunk.js.map