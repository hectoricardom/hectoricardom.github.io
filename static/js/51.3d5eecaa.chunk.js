(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"groupbyCat",function(){return s}),t.d(a,"parseInventorybycategoryID",function(){return g});var o=t(28),n=t(2),i=t.n(n),r=t(17),l=t(6),c=t(0),d=(t(68),t(16));Object(d.StarRating_Cmpt)(),Object(d.MsgAlert_Cmpt)(),Object(d.Cmpt_BoxImagePreview)();function s(e,a){var t=[],o=0;return e&&e.map(function(n){if(n&&o<=a){var i=e[n]&&e[n].type;i&&(t[i]||(t[i]=[]),t[i].push(n),o+=1)}}),t}function g(e,a,t){var o={},n=t&&t.split(" ");return e&&Object(c.e)(e).map(function(t){var i=e[t]&&e[t].categoryID;if(o[i]||(o[i]={}),n&&n.length>0){var r={};for(var l in n){var d=n[l];if(d){var s=d.toLowerCase(),g=e[t]&&e[t].name&&e[t].name.toLowerCase(),p=e[t]&&e[t].salePrice,u=a&&a[i]&&a[i].name&&a[i].name.toLowerCase(),w=s&&g&&g.indexOf(s)>=0,b=s&&u&&u.indexOf(s)>=0,m=s&&p&&p.toString().indexOf(s)>=0;r[l]=w||b||m?2:1}else r[l]=2}var v=0;Object(c.e)(r).map(function(e){v+=r[e]}),2*n.length===v&&(o[i][t]=e[t])}else o[i][t]=e[t]}),o}a.default=function(e){e.mvId,e.item;var a=Object(n.useState)(!1),t=Object(o.a)(a,2),d=t[0],s=t[1],g=Object(n.useState)(0),p=Object(o.a)(g,2),u=p[0],w=p[1],b=Object(r.c)(l.d);Object(n.useEffect)(function(){b!==u&&(w(b),window.google.charts.load("current",{packages:["corechart"]}),window.google.charts.setOnLoadCallback(m)),d||(s(!0),setTimeout(function(){window.google.charts.load("current",{packages:["corechart"]}),window.google.charts.setOnLoadCallback(m)},650))});var m=function(){if(console.log(window.google.visualization),window.google&&window.google.visualization){var e=window.google.visualization.arrayToDataTable([["Technology","Level"],["HTML5",5],["Javascript",4.3],["CCS",4.5],["React",4.25],["Redux",4],["JSON",5]]);new window.google.visualization.PieChart(document.getElementById("piechartFrontEnd")).draw(e,{title:"Front End Skills Level",backgroundColor:"#f9f9f9"});var a=window.google.visualization.arrayToDataTable([["Technology","Years",{role:"style"}],["HTML5",7,"rgb(21, 100, 191,1)"],["Javascript",6,"rgb(220, 57, 18)"],["CCS",7,"rgb(255, 153, 0)"],["React",4,"rgb(16, 150, 24)"],["Redux",3,"rgb(153, 0, 153)"],["JSON",5,"rgb(0, 153, 198)"]]),t=new window.google.visualization.DataView(a);t.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var o={title:"Front End Skills Exprecience",width:Object(c.B)()?340:600,height:Object(c.B)()?200:400,bar:{groupWidth:"95%"},legend:{position:"none"},backgroundColor:"#f9f9f9"};new window.google.visualization.ColumnChart(document.getElementById("frontEndExp")).draw(t,o);var n=window.google.visualization.arrayToDataTable([["Technology","Level"],["Node",4],["Express",4],["GraphQL",4],["RestApi",4.5],["SQL",4],["No-SQL",4]]);new window.google.visualization.PieChart(document.getElementById("piechartBackEnd")).draw(n,{title:"Back End Skills Level",backgroundColor:"#f9f9f9"});var i=window.google.visualization.arrayToDataTable([["Technology","Years",{role:"style"}],["Node",6,"rgb(21, 100, 191,1)"],["Express",6,"rgb(220, 57, 18)"],["GraphQL",4,"rgb(255, 153, 0)"],["RestApi",6,"rgb(16, 150, 24)"],["SQL",7,"rgb(153, 0, 153)"],["No-SQL",5,"rgb(0, 153, 198)"]]),r=new window.google.visualization.DataView(i);r.setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]);var l={title:"Back End Skills Exprecience",width:Object(c.B)()?340:600,height:Object(c.B)()?200:400,bar:{groupWidth:"95%"},legend:{position:"none"},backgroundColor:"#f9f9f9"};new window.google.visualization.ColumnChart(document.getElementById("backEndExp")).draw(r,l)}};return i.a.createElement("div",{jsname:"JNwhwd",className:"xwW5Ce u3mD2d"},i.a.createElement("div",{className:"m18Ex  u3mD2d xwW5Ce mgtOp65 brdMbl"},i.a.createElement("div",{className:" _dsplFlx spaceAround "},i.a.createElement("div",{id:"piechartFrontEnd",style:{width:Object(c.B)()?"360px":"600px",height:Object(c.B)()?"200px":"430px"}})),i.a.createElement("div",{className:"separator_line"}),i.a.createElement("div",{className:" _dsplFlx spaceAround "},i.a.createElement("div",{id:"frontEndExp",style:{width:Object(c.B)()?"360px":"600px",height:Object(c.B)()?"200px":"430px"}})),i.a.createElement("div",{className:"separator_line"}),i.a.createElement("div",{className:" _dsplFlx spaceAround "},i.a.createElement("div",{id:"piechartBackEnd",style:{width:Object(c.B)()?"360px":"600px",height:Object(c.B)()?"200px":"430px"}})),i.a.createElement("div",{className:"separator_line"}),i.a.createElement("div",{className:" _dsplFlx spaceAround "},i.a.createElement("div",{id:"backEndExp",style:{width:Object(c.B)()?"360px":"600px",height:Object(c.B)()?"200px":"430px"}}))))}}}]);
//# sourceMappingURL=51.3d5eecaa.chunk.js.map