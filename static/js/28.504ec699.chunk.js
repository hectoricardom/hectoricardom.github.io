(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{106:function(n,e,t){"use strict";t.r(e);var i=t(2),o=t.n(i),a=t(18),r=t(19);e.default=function(){var n=function(){var n=Object(a.c)(function(n){return n.observeComponent}),e=Object(a.b)();return{observeChanges:n,close:function(n){Object(r.CloseToast)(e,{id:n})}}}(),e=(n.observeChanges,n.close),t=Object(r.getComponentStore)().listToat||{},i=Object.keys(t);return o.a.createElement(o.a.Fragment,null,t&&i.map(function(n,i){var a=t[n];if(a&&a.visible){s(n),a.display;var r=a.data,l={opacity:a.display?1:0},c=r&&r.text?r.text:"sdgfdsfgsdfg";return o.a.createElement("div",{id:n,className:"TtBase_Toast"},o.a.createElement("div",{className:a.display?"toast active":"toast",style:l},o.a.createElement("div",{className:"text"},c),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{className:"md-button md-ink-ripple",type:"button",style:{},onClick:function(){return e(n)}},"Ok"))))}}),o.a.createElement("style",null,"\n                        .TtBase_Toast{\n                          position:fixed;\n                      }\n                      \n                  \n                      .toast {\n                        -webkit-transform: translate3d(0,0,0);\n                        transform: translate3d(0,0,0);\n                        opacity: 0;\n                        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);\n                        -webkit-transition: all .4s cubic-bezier(.4,0,.2,1);\n                        transition: all .4s cubic-bezier(.4,0,.2,1);\n                        background-color: #424242;\n                        color: #fff;\n                        display: -webkit-box;\n                        display: -ms-flexbox;\n                        display: flex;\n                        -webkit-box-orient: vertical;\n                        -webkit-box-direction: normal;\n                        -ms-flex-direction: column;\n                        flex-direction: column;\n                        font-size: 14px;\n                        padding-top: 12px;\n                        padding-left: 16px;\n                        padding-right: 16px;\n                        position: fixed;\n                        min-height: 65px;                        \n                        top: 70px;\n                        right: 28px;\n                        min-width: 240px;\n                        max-width: 340px\n                      }\n                      \n                      \n                      .accessibility__toast, .toast {\n                        line-height: 20px;\n                      /*  z-index: -1; */\n                        border-radius: 2px;\n                      }\n                      \n                      .toast.active {\n                        -webkit-transform: translate3d(0,0,0);\n                        transform: translate3d(0,0,0);\n                        opacity: 0.87;\n                        z-index: 500;\n                      }\n                      \n                      .toast .actions {\n                        display: -webkit-box;\n                        display: -ms-flexbox;\n                        display: flex;\n                        -webkit-box-pack: end;\n                        -ms-flex-pack: end;\n                        justify-content: flex-end;\n                        -webkit-box-orient: horizontal;\n                        -webkit-box-direction: normal;\n                        -ms-flex-direction: row;\n                        flex-direction: row;\n                      }\n                      \n                      \n                      .toast .actions .md-button {\n                        color: rgb(0, 145, 234);\n                        -webkit-box-flex: 1;\n                        -ms-flex: 1;\n                        flex: 1;\n                        height: 18px;\n                        margin: 0;\n                        min-height: 40px;\n                        max-height: 40px;\n                        min-width: 100px;\n                        max-width: 100px;\n                        width: 85px;\n                        font-weight: 700;\n                      }\n                      \n                      .md-button {\n                        letter-spacing: .010em;\n                        display: inline-block;\n                        position: relative;\n                        cursor: pointer;\n                        min-height: 36px;\n                        min-width: 88px;\n                        line-height: 36px;\n                        vertical-align: middle;\n                        -webkit-box-align: center;\n                        -webkit-align-items: center;\n                        align-items: center;\n                        text-align: center;\n                        border-radius: 2px;\n                        box-sizing: border-box;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                        user-select: none;\n                        outline: 0;\n                        border: 0;\n                        padding: 0 6px;\n                        margin: 6px 8px;\n                        background: 0 0;\n                        color: currentColor;\n                        white-space: nowrap;\n                        font-size: 14px;\n                        font-style: inherit;\n                        font-variant: inherit;\n                        font-family: inherit;\n                        overflow: hidden;\n                        -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n                        transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n                      }\n                      \n                                  "))};var s=function(n){var e=n,t=new RegExp("=","g");return e=e.replace(t,"")}}}]);
//# sourceMappingURL=28.504ec699.chunk.js.map