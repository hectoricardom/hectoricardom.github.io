(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{659:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(1),i=n.n(o),s=n(0),c=n(11),r=n(16),l=n(6);t.default=function(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2),u=n[0],g=n[1];Object(r.c)(l.b);Object(o.useEffect)(function(){u||(g(!0),s.M(function(){return d()}))});var d=function(){var e=window.gapi;e.load("auth2",function(){setTimeout(function(){e.signin2.render("google-signin-button",{width:232,height:40,longtitle:!0,hidden:!0,onsuccess:f,onfailure:b}),setTimeout(function(){var t=e.auth2.getAuthInstance(),n=t&&t.currentUser.get(),a=n&&n.getAuthResponse();if(a.id_token){var o={params:{id_token:a.id_token,access_token:a.access_token},query:"getGoogleUserbyToken"};s.D("userProfile")&&s.D("userProfile").email||Object(c.getSectionByGtoken)(o)}},350)},350)})},b=function(e){console.log("onFail",e)},f=function(e){var t=window.gapi.auth2.getAuthInstance(),n=t&&t.currentUser.get(),a=n&&n.getAuthResponse(),o={params:{id_token:a.id_token,access_token:a.access_token},query:"getGoogleUserbyToken"};s.D("userProfile")&&s.D("userProfile").email||Object(c.getSectionByGtoken)(o)},m=s.D().thumbnailJsonBlob&&s.D().thumbnailJsonBlob["qvaMarket_logo2.png"],k=m&&m.requested?m.blob:null;return i.a.createElement(i.a.Fragment,null,u?i.a.createElement("div",{id:"g_signin2_bx"},i.a.createElement("div",{class:"login_message"},i.a.createElement("img",{src:k,alt:"qvaMarket"}),i.a.createElement("p",null,s.bb(22)),i.a.createElement("div",{class:"_dsplFlx"},i.a.createElement("div",{class:"flexSpace"}),i.a.createElement("div",{id:"google-signin-button","data-theme":"dark"})))):null)}}}]);
//# sourceMappingURL=48.393c2422.chunk.js.map