(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(n,e,t){"use strict";t.r(e);var i=t(2),a=t.n(i),o=t(18),c=t(19);e.default=function(){var n=function(){var n=Object(o.c)(function(n){return n.observeComponent}),e=Object(o.b)();return{observeChanges:n,close:function(n){Object(c.CloseModal)(e,{id:n})}}}(),e=(n.observeChanges,n.close),t=Object(c.getComponentStore)().listDialog||{},i=Object.keys(t);return a.a.createElement(a.a.Fragment,null,i.map(function(n,i){var o=t[n];if(o&&o.visible){var c={},l=r(n);c["--s__".concat(l,"_heigth__")]="750px",c["--s__".concat(l,"_width__")]="80vw",c["--s__".concat(l,"_zIndex__")]=250,c["--overlay__".concat(l,"_zIndex__")]=249,o.display,o.height&&(c["--s__".concat(l,"_heigth__")]=o.height),o.width&&(c["--s__".concat(l,"_width__")]=o.width),o.zIndex&&(c["--s__".concat(l,"_zIndex__")]=o.zIndex,c["--overlay__".concat(l,"_zIndex__")]=o.zIndex-1);var s={marginTop:o.height/-2,marginLeft:o.width/-2,top:"50%",left:"50%",height:o.height,width:o.width,zIndex:"var(--s__".concat(l,"_zIndex__)")};o.isView&&(s={marginTop:0,marginLeft:0,top:"0%",left:"0%",height:"100%",maxHeight:"100%",width:"100%",zIndex:"var(--s__".concat(l,"_zIndex__)")});var _={zIndex:"var(--overlay__".concat(l,"_zIndex__)")},d=null,v=o.data;return o.content&&(d=a.a.cloneElement(o.content,{data:v})),a.a.createElement("div",{className:o.display?"active":"",style:c,key:n},a.a.createElement("div",{className:"DialogHRM",style:s,id:n},d||null),o.visible?a.a.createElement("div",{className:"DialogHRMOverlay",style:_,onClick:function(){return e(n)}}):null)}}),a.a.createElement("style",null,"\n                                \n                                .DialogHRM{    \n                                    \n                                  position: fixed;  /*Stay in place */\n                                  z-index: 220; /* Sit on top */\n                                  background-color: transparent; /* Black fallback color */\n                                  /*background-color: rgba(0,0,0, 0.6); /* Black w/opacity */\n                                  overflow: hidden;  \n                                  opacity: 0;\n                                  top: 50%;\n                                  left: 50%;   \n                                  visibility: hidden;\n                                  max-height: calc(100vh - 48px);\n                                  transition: opacity ease-in-out .25s,visibility ease-in-out .25s;               \n                                  /*  max-width: 80vw; */\n                                  margin-left: -40vw;\n                                  transition: opacity .125s cubic-bezier(0.0,0.0,0.2,1), visibility .125s cubic-bezier(0.0,0.0,0.2,1);\n                                }\n                                \n                                \n                                .active .DialogHRM{\n                                /* transform: translate3d(0, var(--slide-option-heigth-perc--), 0); position: static;*/\n                                  opacity: 1;\n                                  visibility: visible;   \n                                  pointer-events: auto;\n                                  transition: opacity .325s cubic-bezier(0.0,0.0,0.2,1), visibility .325s cubic-bezier(0.0,0.0,0.2,1);\n                                }\n                                \n                                .DialogHRMOverlay{\n                                  height: 100vh; \n                                  width: 100%;     \n                                  opacity: 0;\n                                  position: fixed;\n                                  z-index: 210; \n                                  left: 0;\n                                  bottom: 0;\n                                  background-color: rgba(0,0,0,0.62); \n                                  overflow-x: hidden;   \n                                  transition: opacity ease-in-out .500s;\n                                  transform-origin:  50% 210% 0;\n                                }\n                                \n                                \n                                .active .DialogHRMOverlay{    \n                                  opacity: 1;\n                                  bottom: 0;    \n                                  transition: opacity ease-in-out .358s;\n                                }\n                                  "))};var r=function(n){var e=n,t=new RegExp("=","g");return e=e.replace(t,"")}}}]);
//# sourceMappingURL=18.74c1e995.chunk.js.map