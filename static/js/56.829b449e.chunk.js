(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{668:function(e,a,t){"use strict";t.r(a),t.d(a,"groupbyCat",function(){return u}),t.d(a,"parseInventorybycategoryID",function(){return g});var n=t(27),l=t(1),o=t.n(l),c=t(16),i=t(6),r=t(0),s=(t(70),t(15)),d=Object(s.BTNH_Cmpt)(),m=Object(s.Cmpt_CircleTabrt)(),p=Object(s.Cmpt_ChipImg)();function u(e,a){var t=[],n=0;return e&&e.map(function(l){if(l&&n<=a){var o=e[l]&&e[l].type;o&&(t[o]||(t[o]=[]),t[o].push(l),n+=1)}}),t}function g(e,a,t){var n={},l=t&&t.split(" ");return e&&Object(r.e)(e).map(function(t){var o=e[t]&&e[t].categoryID;if(n[o]||(n[o]={}),l&&l.length>0){var c={};for(var i in l){var s=l[i];if(s){var d=s.toLowerCase(),m=e[t]&&e[t].name&&e[t].name.toLowerCase(),p=e[t]&&e[t].salePrice,u=a&&a[o]&&a[o].name&&a[o].name.toLowerCase(),g=d&&m&&m.indexOf(d)>=0,v=d&&u&&u.indexOf(d)>=0,b=d&&p&&p.toString().indexOf(d)>=0;c[i]=g||v||b?2:1}else c[i]=2}var E=0;Object(r.e)(c).map(function(e){E+=c[e]}),2*l.length===E&&(n[o][t]=e[t])}else n[o][t]=e[t]}),n}a.default=function(e){e.mvId,e.item;var a=Object(l.useState)(!1),t=Object(n.a)(a,2),s=t[0],u=t[1],g=Object(l.useState)(0),v=Object(n.a)(g,2),b=v[0],E=v[1],w=Object(c.c)(i.d);Object(l.useEffect)(function(){w!==b&&(E(w),window.google.charts.load("current",{packages:["corechart"]}),window.google.charts.setOnLoadCallback(j)),s||(u(!0),setTimeout(function(){window.google.charts.load("current",{packages:["corechart"]}),window.google.charts.setOnLoadCallback(j)},650))});var f=Object(r.D)("portfolioData")&&Object(r.D)("portfolioData").technologies||{},h=Object(r.D)("portfolioData")&&Object(r.D)("portfolioData").skills||"",x=Object(r.D)("portfolioData")&&Object(r.D)("portfolioData").extraTech||[],O=Object(r.D)("portfolioData")&&Object(r.D)("portfolioData").projects||[],j=function(){if(window.google&&window.google.visualization){var e=window.google.visualization.arrayToDataTable(h.frontLevel);new window.google.visualization.PieChart(document.getElementById("piechartFrontEnd")).draw(e,{title:"Level",backgroundColor:"#f9f9f9"});var a=window.google.visualization.arrayToDataTable(h.frontExperience),t=new window.google.visualization.DataView(a);t.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var n={title:"Exprecience",width:Object(r.A)()?340:535,height:Object(r.A)()?200:375,bar:{groupWidth:"95%"},legend:{position:"none"},backgroundColor:"#f9f9f9"};new window.google.visualization.ColumnChart(document.getElementById("frontEndExp")).draw(t,n);var l=window.google.visualization.arrayToDataTable(h.backLevel);new window.google.visualization.PieChart(document.getElementById("piechartBackEnd")).draw(l,{title:"Level",backgroundColor:"#f9f9f9",annotations:{textStyle:{fontName:"Google Sans",fontSize:18,bold:!0,italic:!0,color:"#871b47",auraColor:"#d799ae",opacity:.8}}});var o=window.google.visualization.arrayToDataTable(h.backExperience),c=new window.google.visualization.DataView(o);c.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var i={title:"Exprecience",width:Object(r.A)()?340:535,height:Object(r.A)()?200:375,bar:{groupWidth:"95%"},legend:{position:"none"},backgroundColor:"#f9f9f9"};new window.google.visualization.ColumnChart(document.getElementById("backEndExp")).draw(c,i)}};return o.a.createElement("div",{id:"skills_experience",jsname:"JNwhwd",className:"xwW5Ce u3mD2d"},o.a.createElement("div",{className:"m18Ex  u3mD2d xwW5Ce mgtOp65 brdMbl"},o.a.createElement("div",{className:"pym81b sendBx "},o.a.createElement("div",{className:" graph_title"},"Front End Skills"),o.a.createElement("div",{className:" _dsplFlx spaceAround _flxWrp "},o.a.createElement("div",{className:" _dsplFlx spaceAround "},o.a.createElement("div",{id:"piechartFrontEnd",style:{width:Object(r.A)()?"360px":"535px",height:Object(r.A)()?"200px":"375px"}})),Object(r.A)()?o.a.createElement("div",{className:"sp_line transparent"}):null,o.a.createElement("div",{className:" _dsplFlx spaceAround "},o.a.createElement("div",{id:"frontEndExp",style:{width:Object(r.A)()?"360px":"535px",height:Object(r.A)()?"200px":"375px"}})))),o.a.createElement("div",{className:"pym81b sendBx "},o.a.createElement("div",{className:" graph_title"},"Back End Skills"),o.a.createElement("div",{className:" _dsplFlx spaceAround _flxWrp"},o.a.createElement("div",{className:" _dsplFlx spaceAround "},o.a.createElement("div",{id:"piechartBackEnd",style:{width:Object(r.A)()?"360px":"535px",height:Object(r.A)()?"200px":"375px"}})),Object(r.A)()?o.a.createElement("div",{className:"sp_line transparent"}):null,o.a.createElement("div",{className:" _dsplFlx spaceAround "},o.a.createElement("div",{id:"backEndExp",style:{width:Object(r.A)()?"360px":"535px",height:Object(r.A)()?"200px":"375px"}}))))),o.a.createElement("div",{className:"pym81b sendBx mgtOp65 otherTechnologyWrp"},o.a.createElement("div",{className:" graph_title"},"Other Technologies"),o.a.createElement("div",{className:"_dsplFlx spaceAround _flxWrp"},x.map(function(e){return o.a.createElement(m,{src:f[e].logo,txt:e})}))),o.a.createElement("div",{className:"pym81b sendBx mgtOp65"},o.a.createElement("div",{className:" graph_title "},"Current Projects"),O&&Object(r.e)(O).map(function(e){return o.a.createElement("div",{className:"_dsplFlx spaceAround "},o.a.createElement("div",{className:"  headerTtl"},o.a.createElement("div",{className:"_dsplFlx projectItm"},o.a.createElement("img",{src:O[e].logo,alt:e}),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"title"},e),o.a.createElement("div",{className:"description"},O[e].about),o.a.createElement("div",{className:"_dsplFlx fieldPadding _openApp"},o.a.createElement("div",{className:"flexSpace"}),o.a.createElement("span",{onClick:function(){return window.open("https://qvamarkets.com")}},o.a.createElement(d,{theme:"light_blue",title:"Open App"}))))),o.a.createElement("div",{className:"pym81b sendBx "},o.a.createElement("div",{className:"role"},O[e].role),O[e].technologies&&Object(r.e)(O[e].technologies).map(function(a){return o.a.createElement("div",null,o.a.createElement("div",{className:"title_tech"},a),o.a.createElement("div",{className:"_dsplFlx spaceAround "},O[e].technologies[a].map(function(e){return o.a.createElement("div",{className:"_dsplFlx spaceAround "},o.a.createElement("div",{className:"imgChip"},o.a.createElement(p,{src:e[0]&&f[e[0]]&&f[e[0]].logo,alt:e[0],txt:"".concat(e[1],"%")})))})))}))))})))}}}]);
//# sourceMappingURL=56.829b449e.chunk.js.map