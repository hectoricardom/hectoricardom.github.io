(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{72:function(e,n,a){"use strict";a.r(n);var t=a(2),c=a.n(t),i=a(4),u=(a(68),Object(i.a)(function(){return a.e(0).then(a.bind(null,29))}));n.default=function(e){var n=e.amount,a=e.minValue,t=!0;return(n>2e3||n<a)&&(t=!1),c.a.createElement("div",{className:" _dsplFlx ".concat(t?"":"inValid")},c.a.createElement("div",{className:"_groupBtn left active",onClick:function(){if("function"===typeof e.change){var t=n-10;t>=a&&e.change(t)}}},c.a.createElement(u,{name:"minus"})),c.a.createElement("div",{className:"inptNumb"},c.a.createElement("input",{type:"number",value:n,onChange:function(n){if("function"===typeof e.change){var a=parseInt(n.target.value);a>=0&&a<=2e3&&e.change(a)}}})),c.a.createElement("div",{className:"_groupBtn right active",onClick:function(){if("function"===typeof e.change){var a=n+10;e.change(a),a>2e3?e.change(2e3):e.change(a)}}},c.a.createElement(u,{name:"add"})))}}}]);
//# sourceMappingURL=31.f142f861.chunk.js.map