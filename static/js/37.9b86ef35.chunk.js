(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"groupbyType",function(){return j});var a=n(3),c=n.n(a),r=n(6),o=n(20),s=n(2),i=n.n(s),l=n(18),u=n(90),m=n(19),b=n(8),d=n(0),p=(n(45),d.a()),f=(d.p(),d.o(),d.e(),d.g(),d.c(),d.n()),v=(Object(b.a)(function(){return n.e(1).then(n.bind(null,92))}),Object(b.a)(function(){return n.e(6).then(n.bind(null,95))})),O=Object(b.a)(function(){return n.e(2).then(n.bind(null,93))});function j(e,t){var n={};return e&&d.m(e).map(function(a){if(a){var c=e[a].type;t===c&&(n[a]=e[a])}}),n}t.default=Object(u.a)(function(e){var t=function(){var e=Object(l.c)(function(e){return e.observeChanges}),t=Object(l.b)();return{observeChanges:e,_LoadCities:function(e){Object(m.fetchCities)(e,t)},dispatch:t,_updRemesa:function(e,n){Object(m.fetchRemesa)(e,t,n)},_openMd:function(e,n){var a={zIndex:450};a.Id=e,a.observeResize=!0,a.props={item:n,minHeight:"1vh"},Object(m.OpenWatchDialog)(t,a)}}}(),n=(t._openMd,t.dispatch),a=(t._updRemesa,function(){var e=Object(l.c)(function(e){return e.observeForms}),t=Object(l.b)();return{_updFormObs:function(e,n){t({type:"UPD_KEY_VALUE",kv:{key:"observeForms",value:d.C()}})},observeForms:e}}()._updFormObs),u=d.O(),b=d.K();u.keys=b;d.J("243876nt5fdgomwy");var g=Object(s.useState)(!1),h=Object(o.a)(g,2),E=h[0],y=h[1],x=Object(s.useState)(null),w=Object(o.a)(x,2),_=w[0],N=w[1],C=Object(s.useState)(!1),S=Object(o.a)(C,2),T=S[0],k=S[1],F=Object(s.useState)(null),M=Object(o.a)(F,2),G=M[0],R=M[1],W=Object(s.useState)(0),z=Object(o.a)(W,2),I=z[0],J=(z[1],Object(s.useState)(1)),B=Object(o.a)(J,2),H=B[0],L=(B[1],u.ViewTypeMov),P=u.outerWidth,A=2===L?"ingresos":"gastos",D=j(u.Groups,A),K=d.N();Object(s.useEffect)(function(){_!==P&&N(P),G!==K&&(R(K),Object(m.loadGroups)(K)),E||(y(!0),d.vb(7),Object(m.loadGroups)(K),setTimeout(function(){return window.scrollTo(0,0)},350),setTimeout(function(){return k(!0)},50),window.localStorage.setItem("lng","es"),d.pb("243876nt5fdgomwy",{}),a())});var U=function(){var e=Object(r.a)(c.a.mark(function e(t){var a,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=d.J("addCategory")).type=2===L?"ingresos":"gastos",a.user=K,!(a.name.length>2)){e.next=10;break}return r={form:a,fields:["id","name"],query:"upgradeGroups"},o=d.x(d.S(),r),e.next=8,o;case 8:e.sent&&(Object(m.loadGroups)(K),Object(m.CloseModal)(n,{id:t}));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),V=d.H(),q="Android"===V.os||"iPhone"===V.os||u.outerWidth<550;return i.a.createElement(i.a.Fragment,null,i.a.createElement("style",null,"\n        .palette{\n          --base-color: rgb(21, 100, 191,1);\n          --base-color-gradient: 21, 100, 191;\n        }\n\n        "),i.a.createElement("div",{className:" palette formContainer shopping_cart  _movements ".concat(q?"is_mobile":""),style:{opacity:T?1:0}},i.a.createElement("div",{className:"formContainer ",style:{opacity:0===I?1:0}},0===I?i.a.createElement("div",{className:"centerListCardProd "},i.a.createElement("div",{className:"  headerTtl "},i.a.createElement("div",{className:"mainTitle"},"".concat(d.mb(12),"  ").concat(2===L?d.mb(201):d.mb(202)))),i.a.createElement("div",{className:" sendBx scroll3Wrp "},i.a.createElement(f,{index:H,indexTag:1,isMobile:q},D&&d.m(D).length>0?i.a.createElement(v,null):i.a.createElement("div",{className:"  headerTtl"},i.a.createElement("div",{className:"pym81b sendBx "},i.a.createElement("div",{className:"subtotal_cart "},"".concat(d.mb(208)," ").concat(2===L?d.mb(201):d.mb(202)," ").concat(d.mb(209))),i.a.createElement("div",{className:"_dsplFlx"},i.a.createElement("div",{className:"flexSpace"}),i.a.createElement("span",{onClick:function(){return function(e){var t={zIndex:450,observeResize:!0};t.props={item:e,minHeight:"190px"},t.content=i.a.createElement(O,{confirm:U}),Object(m.OpenModal)(n,t)}()}},i.a.createElement(p,{theme:"light_blue",title:"".concat(d.mb(12)," ").concat(d.mb(32))}))))))),i.a.createElement("div",{className:" sendBx scroll3Wrp "},i.a.createElement(f,{lbl:206,index:H,indexTag:2,isMobile:q},i.a.createElement("div",null)))):null),i.a.createElement("div",{className:"footSpace"})))})}}]);
//# sourceMappingURL=37.9b86ef35.chunk.js.map