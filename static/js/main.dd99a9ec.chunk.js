(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,n){e.exports=n(96)},52:function(e,t,n){},53:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"_Dispatch",function(){return ce}),n.d(a,"_State",function(){return se}),n.d(a,"_GRAPHQLURL",function(){return de}),n.d(a,"Subscribe",function(){return pe}),n.d(a,"Update",function(){return he}),n.d(a,"LoadData2",function(){return fe}),n.d(a,"LoadData",function(){return be}),n.d(a,"LoadServiceAreas",function(){return ge}),n.d(a,"sendEmail",function(){return ye}),n.d(a,"sendToken",function(){return Ee}),n.d(a,"setAuthenticate",function(){return ke}),n.d(a,"UpdKeyValue",function(){return Oe}),n.d(a,"UpdIsMobile",function(){return Se}),n.d(a,"appLoaded",function(){return _e}),n.d(a,"ScreenSize",function(){return Ce}),n.d(a,"setPath",function(){return xe}),n.d(a,"UpdateFormbyName",function(){return Ne}),n.d(a,"setSubId",function(){return je}),n.d(a,"UpdateForm",function(){return we}),n.d(a,"_formOberves",function(){return Ie}),n.d(a,"retrieveFormSuccess",function(){return De}),n.d(a,"retrieveFormOberves",function(){return Me});var i={};n.r(i),n.d(i,"UpdKeyValue",function(){return Re}),n.d(i,"OpenDialog",function(){return He}),n.d(i,"CloseDialog",function(){return Ze}),n.d(i,"OpenView",function(){return Ve}),n.d(i,"CloseView",function(){return Xe}),n.d(i,"OpenSlideOption",function(){return Ge}),n.d(i,"ChangeHeightSlideOption",function(){return qe}),n.d(i,"CloseSlideOption",function(){return Ye}),n.d(i,"retrieveDialogObserve",function(){return Ke});var o=n(0),r=n.n(o),c=n(41),s=n.n(c),l=(n(52),n(3)),u=n(4),d=n(6),m=n(5),v=n(7),p=(n(53),n(10)),h=n(8),f=n(43),b=n(11),g=n(16),y="APPLOADED_SUCCESS",E="ISMOBILE_SUCCESS",k="SCREEN_SIZE",O="CURRENT_PATH",S="FORMS_SUCCESS",_="FORMS_OBSERVES",C="AUTHENTICATE_SUCCESS",x="UPD_KEY_VALUE",N="UPD_KEY_VALUE_DIALOGS",j={common:{authenticate:!1,technology:[],involved:[],learn:{},mentor:{},hire:{},user:{},users:[],serviceAreas:{},sections:[],isMobile:!1,appLoaded:!1,path:"",blocks:[],logs:[],forms:{},validationForms:{},formObserve:0,screen_size:0,isValidToken:!1,grabbing:!1,SubscriptionId:null,activeUserList:{},liteMode:!1,isInProxy:!1,hyperMode:!1,_active:!1,userPremium:!1,activeUserInfo:{},phonecode:""},dialog:{dialogs:{},views:{},options_slide:{},dialogObserve:0}},w=Object(h.c)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.common,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(g.a)({},e,{appLoaded:t.appLoaded});case E:return Object(g.a)({},e,{isMobile:t.isMobile});case k:return Object(g.a)({},e,{screen_size:t.screen_size});case O:return Object(g.a)({},e,{path:t.path});case S:return Object(g.a)({},e,{forms:t.forms});case _:return Object(g.a)({},e,{formObserve:t.formObserve});case"USER_SUCCESS":return Object(g.a)({},e,{users:t.users});case C:return Object(g.a)({},e,{authenticate:t.authenticate});case x:return Object(g.a)({},e,Object(b.a)({},t.kv.key,t.kv.value));default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.dialog,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(g.a)({},e,Object(b.a)({},t.kv.key,t.kv.value));default:return e}}}),A=Object(h.d)(w,j,Object(h.a)(f.a)),I=n(99),D=n(100),M=n(98),T=n(101),F="https://hxrymz.com",z=n(13),U=n.n(z),W=n(20),P=n(21),L=n.n(P),B=(n(61),n(17)),J=n.n(B),R=null,H=!1;function Z(e){var t=!1;try{JSON.parse(e),t=!0}catch(n){t=!1}return t}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var V={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,a,i,o,r,c,s="",l=0;for(e=V._utf8_encode(e);l<e.length;)i=(t=e.charCodeAt(l++))>>2,o=(3&t)<<4|(n=e.charCodeAt(l++))>>4,r=(15&n)<<2|(a=e.charCodeAt(l++))>>6,c=63&a,isNaN(n)?r=c=64:isNaN(a)&&(c=64),s=s+this._keyStr.charAt(i)+this._keyStr.charAt(o)+this._keyStr.charAt(r)+this._keyStr.charAt(c);return s},decode:function(e){var t,n,a,i,o,r,c="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)t=this._keyStr.indexOf(e.charAt(s++))<<2|(i=this._keyStr.indexOf(e.charAt(s++)))>>4,n=(15&i)<<4|(o=this._keyStr.indexOf(e.charAt(s++)))>>2,a=(3&o)<<6|(r=this._keyStr.indexOf(e.charAt(s++))),c+=String.fromCharCode(t),64!=o&&(c+=String.fromCharCode(n)),64!=r&&(c+=String.fromCharCode(a));return c=V._utf8_decode(c)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t},_utf8_decode:function(e){for(var t,n,a="",i=0,o=t=0;i<e.length;)(o=e.charCodeAt(i))<128?(a+=String.fromCharCode(o),i++):o>191&&o<224?(t=e.charCodeAt(i+1),a+=String.fromCharCode((31&o)<<6|63&t),i+=2):(t=e.charCodeAt(i+1),n=e.charCodeAt(i+2),a+=String.fromCharCode((15&o)<<12|(63&t)<<6|63&n),i+=3);return a}};var X=function(e){if(e){var t=e[0].message;return t&&-1!==t.indexOf('{"_error"')?JSON.parse(t):{_error:"Server query error"}}},G=function(e){return e.query=e.query.replace(/\s/g,""),JSON.stringify(e)},q=function(){var e=Object(W.a)(U.a.mark(function e(t,n){var a,i,o,r,c,s,l,u,d,m,v,p,h,f,b,g,y,E,k;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=G(n),window.localStorage.getItem("hash"),i=window.localStorage.getItem("fpXb"),o=ie(),r=J.a.AES.encrypt(a,o).toString(),c=J.a.AES.encrypt(o,i).toString(),s=JSON.stringify({q:V.encode(r),k:V.encode(c)}),l=window.localStorage.getItem("jwt"),u=window.localStorage.getItem("fbtkClnt"),d="".concat(t,"/streamdata"),e.next=12,L()(d,{method:"post",headers:{"Content-Type":"application/json",Authorization:"".concat(l,":").concat(i),"x-fb-tk":"".concat(u)},body:s});case 12:return m=e.sent,e.next=15,m.text();case 15:return v=e.sent,p={},Z(h=V.decode(v))&&(200===(f=JSON.parse(h)).status&&(b=J.a.AES.decrypt(f.k,i).toString(J.a.enc.Utf8),Z(g=J.a.AES.decrypt(f.r,b).toString(J.a.enc.Utf8))&&(p=JSON.parse(g))),f.status),E=(y=p).data,k=y.errors,e.abrupt("return",{data:E,error:X(k)});case 21:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();function Y(e){var t={};return e.length>0?e.map(function(e){t[e.id]=e}):t=null,t}var K=function(){var e=Object(W.a)(U.a.mark(function e(t){var n,a,i,o;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("jwt"),a=window.localStorage.getItem("fpXb"),e.next=4,L()(t,{method:"post",headers:{"Content-Type":"application/json",Authorization:"".concat(n,":").concat(a)},body:""});case 4:return i=e.sent,e.next=7,i.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function $(e){var t=[];try{t=Object.keys(e)}catch(a){for(var n in e)t.push(n)}return t}function Q(e){return e%100!==0&&(e%4===0||e%400===0)?29:28}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},Date.prototype.getWeek=function(){var e=new Date(this.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},Date.prototype.getWeekYear=function(){var e=new Date(this.getTime());return e.setDate(e.getDate()+3-(e.getDay()+6)%7),e.getFullYear()};Q((new Date).getFullYear());function ee(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function te(e){return/^[\dX]{3}-?[\dX]{2}-?[\dX]{4}$/.test(e)}function ne(e){return/^[\dX]{3}-?[\dX]{3}-?[\dX]{4}$/.test(e)}function ae(e){return/^(\d{2})(\/)(\d{2})(\/)(\d{4})$/.test(e)}function ie(){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="",n=0;n<16;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}var oe=n(34),re=n.n(oe),ce=(n(85),null),se=null,le=JSON.parse(V.decode("eyJhcGlLZXkiOiJBSXphU3lDeDBFcnFmbENVdXZpRlRqald4SEFITWpvQjBsd2xGX00iLCJhdXRoRG9tYWluIjoiaHJtLTExMjguZmlyZWJhc2VhcHAuY29tIiwiZGF0YWJhc2VVUkwiOiJodHRwczovL2hybS0xMTI4LmZpcmViYXNlaW8uY29tIiwicHJvamVjdElkIjoiaHJtLTExMjgiLCJzdG9yYWdlQnVja2V0IjoiaHJtLTExMjguYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjEwNDkyNTA1ODUyNDUiLCJhcHBJZCI6IjE6MTA0OTI1MDU4NTI0NTp3ZWI6OGI0ZTA3NGI5Yzg4MDA1ZiJ9"));re.a.initializeApp(le);var ue=re.a.firestore(),de=F,me="AEBMN5JGXGKHTDPSXDBSZDKWEAEA",ve={AEBMN5JGXGKHTDPSXDBSZDKWEAEA:!0,AGRDRNF5DLRJZRHWJW4AQ7EHQFLQ:!0},pe=function(){var e="/hhh/".concat(me,"/params/");ue.collection(e).onSnapshot(function(t){t.forEach(function(t){var n=t.data();ce(Oe({key:"user",value:n})),console.log("Subscribe",e,n)})})},he=function(e){var t="/hhh/".concat(me,"/params/");ue.collection(t).doc(me).set(e).then(function(e){})};function fe(){return function(e,t){ce||(ce=e),se||(se=t),e(_e(!0)),pe()}}function be(){return function(e,t){ce||(ce=e),se||(se=t);q(F,{query:" \n    query($doc: FindbyIdCda!){\n      payload:  getCdasbyId(cda: $doc) {\n        id        \n      }\n    }  \n    ",variables:{doc:{id:"dgt047j3",limit:1e3,page:1,sortBy:"date.desc"}}}).then(function(t){t&&t.data&&t.data.payload?(me=t.data.payload.id,ve[t.data.payload.id]&&(console.log(t.data.payload.id),e(Oe({key:"userPremium",value:!0}))),e(ke(!0)),e(_e(!0)),e(Ie()),e(ge()),pe()):e(_e(!0))}).catch(function(e){console.log(e)})}}function ge(){return function(e,t){q(F,{query:" \n    query($doc: FindCda!){\n      payload:  getServiceAreas(cda: $doc) {\n        id, \n        name\n      }\n    }  \n    ",variables:{doc:{id:"dgt047j3",limit:1e3,page:1,sortBy:"date.desc"}}}).then(function(t){console.log(t),t&&t.data&&t.data.payload&&e(Oe({key:"serviceAreas",value:Y(t.data.payload)}))}).catch(function(e){console.log(e)})}}function ye(e){return function(t,n){K("".concat(F,"/generateToken?email=").concat(e)).then(function(e){}).catch(function(e){console.log(e)})}}function Ee(e){return function(t,n){K("".concat(F,"/verifyToken?code=").concat(e)).then(function(e){e&&e.token&&(window.localStorage.setItem("jwt",e.token),t(be()))}).catch(function(e){console.log(e)})}}function ke(e){return{type:C,authenticate:e}}function Oe(e){return{type:x,kv:e}}function Se(e){return{type:E,isMobile:e}}function _e(e){return{type:y,appLoaded:e}}function Ce(e){return{type:k,screen_size:e}}function xe(e){return{type:O,path:e}}function Ne(e,t){return function(n,a){Ae(a().common,n,e,t)}}function je(e){return function(t,n){t(Oe({key:"SubscriptionId",value:e}))}}function we(e,t,n){return function(a,i){var o=i().common,r=o.forms;r[e]||(r[e]={}),r[e][t]=n,Ae(o,a,e,r[e])}}function Ae(e,t,n,a){var i=e.forms,o=e.formObserve+1;i[n]||(i[n]={}),i[n]=a,t(De(i)),t(Me(o))}function Ie(){return function(e,t){e(Me(t().common.formObserve+1))}}function De(e){return{type:S,forms:e}}function Me(e){return{type:_,formObserve:e}}n(88);var Te=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={position:"relative",width:this.props.width+"px"||!1,height:this.props.height+"px"||!1},t="spinnerPath",n={};return this.props.stroke&&(t="spinnerPathWC",n={stroke:this.props.stroke}),r.a.createElement("div",{id:"loadingSpinner",style:e},r.a.createElement("svg",{className:"spinnerSvg",viewBox:"25 25 50 50"},r.a.createElement("circle",{className:t,cx:"50",cy:"50",r:"20",fill:"none",style:n,strokeWidth:"2",strokeMiterlimit:"10"})))}}]),t}(o.Component),Fe=(n(89),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleKeyUp=function(e){e.keyCode&&(13===e.keyCode||e.keyCode)},n.handleFocus=function(e){n.setState({focus:!0})},n.handleClickFocus=function(e){var t=n.Elm.getElementsByTagName("input");for(var a in t){var i=t[a];if(i.childNodes&&n.Elm.contains(i)){i.focus();break}}},n.handleBlur=function(e){n.setState({focus:!1})},n.clear=function(e){var t=n.props.form;n.setState({error:!1,text:""}),n.props.actions.UpdateFormbyName(t,{})},n.handleChange=function(e){var t=n.props,a=(t.form,t.email),i=t.ssn,o=(t.address,t.number),r=t.date,c=t.phone,s=(t.field,e.target.value),l={v:!0,m:""};a&&(l=ee(s)?{v:!0,m:""}:{v:!1,m:"email not valid"}),i&&(l=te(s)?{v:!0,m:""}:{v:!1,m:"ssn not valid"}),c&&(l=ne(s)?{v:!0,m:""}:{v:!1,m:"phone not valid"}),r&&(l=ae(s)?{v:!0,m:""}:{v:!1,m:"date not valid"}),o&&(l=isNaN(s)?{v:!1,m:"number not valid"}:{v:!0,m:""}),n.setState({text:s,valid:l.v,msg:l.m}),"function"===typeof n.props.OnChange&&n.props.OnChange(s)},n.ref=function(e){n.Elm=e},n.state={drowndropInputText:"",text:"",valid:!0,msg:"",removeOption:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.props;e.forms,e.form,e.field;this.updateState=this.updateState.bind(this),this.clear=this.clear.bind(this);var t=this.props.initvalue;t&&this.setState({text:t})}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.initvalue?this.props.initvalue:null,n=e.initvalue?e.initvalue:null;t!==n&&this.setState({text:n})}},{key:"componentDidMount",value:function(){}},{key:"updateState",value:function(e){this.setState(Object(b.a)({},e.key,e.value))}},{key:"OnChange",value:function(e){var t=this.props,n=this.props;n.form,n.field,n.email,n.address;"function"===typeof t.OnChange&&t.OnChange(e)}},{key:"updState",value:function(e){this.setState(Object(b.a)({},e.key,e.value))}},{key:"render",value:function(){var e=this.props,t=e.number,n=e.email,a=e.placeholder,i=(e.formObserve,e.dark,e.forms),o=e.form,c=e.field,s={position:"absolute",transform:"translate3d(0px, 2px, 0)"},l={},u=(i[o]?i[o][c]:null)||"";(this.state.text?this.state.text.toString().length:0)>0&&(s={position:"absolute",transform:"translate3d(-5px, -25px, 0)",transformOrigin:"93.5px center 0px",fontSize:"12px",color:"var(--color-base--hover)"}),this.state.focus&&(s={position:"absolute",color:"var(--color-base--hover)",transform:"translate3d(-5px, -25px, 0)",transformOrigin:"93.5px center 0px",fontSize:"12px"},l={border:"1px solid var(--color-base--hover)"}),this.state.valid||(s={position:"absolute",color:"#b71c1c",transform:"translate3d(-5px, -25px, 0)",transformOrigin:"93.5px center 0px",fontSize:"12px"},l={border:"1px solid #b71c1c"});var d=this.state.msg||a,m="text";return t&&(m="number"),n&&(m="email"),r.a.createElement("div",{className:"Wxwduf",style:l,onClick:this.handleClickFocus,ref:this.ref},r.a.createElement("input",{type:m,value:u,onChange:this.handleChange,onFocus:this.handleFocus,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,style:{}}),r.a.createElement("div",{className:"_label",style:s},d))}}]),t}(o.Component));var ze=Object(p.b)(function(e,t){return{forms:e.common.forms,formObserve:e.common.formObserve}},function(e){return{actions:Object(h.b)(a,e)}})(Fe),Ue=(n(90),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={active:!1,removeOption:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.updateState=this.updateState.bind(this),this.handleChange=this.handleChange.bind(this);var e=this.props.initvalue;e&&this.setState({active:e})}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.initvalue?this.props.initvalue:null,n=e.initvalue?e.initvalue:null;t!==n&&this.setState({active:n})}},{key:"componentDidMount",value:function(){}},{key:"updateState",value:function(e){this.setState(Object(b.a)({},e.key,e.value))}},{key:"handleChange",value:function(e){this.props.disabled||("function"===typeof this.props.updChange&&this.props.updChange(!this.state.active),this.setState({active:!this.state.active}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"toggle-container ptoggle-button ".concat(this.state.active?"_active":""),onClick:this.handleChange},r.a.createElement("div",{className:"toggle-bar ptoggle-button"}),r.a.createElement("div",{className:"toggle-button ptoggle-button"},r.a.createElement("div",{className:"pripple",style:{opacity:.00448}}),r.a.createElement("div",{className:"pripple"})),r.a.createElement("div",{className:"toggle-label ptoggle-button"}))}}]),t}(o.Component)),We=(n(91),{"74d8d8ff-1500-439e-acb6-5e6de1a4e81c":{ServiceAreas:"74d8d8ff-1500-439e-acb6-5e6de1a4e81c",minimunPay:27,active:!0},"08a38a1c-a2b7-47b3-beb9-9f376b58e45f":{ServiceAreas:"08a38a1c-a2b7-47b3-beb9-9f376b58e45f",minimunPay:54,active:!1}}),Pe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"OnChangeGrabb",value:function(e){var t=this.props.user;t.grabbing=e,he(t)}},{key:"OnChangeActive",value:function(e){var t=this.props.user;t.running=e,t.filters||(t.filters=We),he(t)}},{key:"OnChange_slowMode",value:function(e){var t=this.props.user;t.slowMode=e,he(t)}},{key:"OnChange_hyperMode",value:function(e){var t=this.props.user;t.hyperMode=e,he(t)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.serviceAreas,a=e.userPremium,i=t.grabbing,o=t.running,c=t.slowMode,s=t.hyperMode,l=t.email,u=t.filters,d=t.isValidToken;return r.a.createElement("div",null,r.a.createElement("div",{className:"content_details"}),r.a.createElement("div",{className:"email-title"},r.a.createElement("span",null,l)),r.a.createElement("div",{className:"hirecGFkZElucHV0",style:{"--checkBox--button--color":"#f2f2f2","--checkBox--button--Active--color":"#ff7817"}},r.a.createElement("div",{className:"tab-label-title"},r.a.createElement("span",null,"Settings")),r.a.createElement("div",{className:"filter--cards--wrapers"},r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat("settings")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"area"},"Token")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"tokenIcon ".concat(d?"isValidTk":"isNotValidTk")})))),r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat("settings")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"area"},"Grabbing")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"actions--icons"},r.a.createElement(Ue,{icon:"more_vert",field:"active",updChange:this.OnChangeGrabb.bind(this),initvalue:!!o&&i}))))),r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat("settings")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"area"},"Active")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"actions--icons"},r.a.createElement(Ue,{icon:"more_vert",field:"active",updChange:this.OnChangeActive.bind(this),initvalue:o}))))),a?r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat("settings")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"area"},"HyperMode (100ms)")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"actions--icons"},r.a.createElement(Ue,{icon:"more_vert",field:"fastMode",updChange:this.OnChange_hyperMode.bind(this),initvalue:s}))))):null,r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat("settings")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"area"},"Slow Mode (2000ms)")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"actions--icons"},r.a.createElement(Ue,{icon:"more_vert",field:"hyperMode",updChange:this.OnChange_slowMode.bind(this),initvalue:c}))))))),r.a.createElement("div",{className:"hirecGFkZElucHV0",style:{"--checkBox--button--color":"#f2f2f2","--checkBox--button--Active--color":"#ff7817"}},r.a.createElement("div",{className:"tab-label-title"},r.a.createElement("span",null,"Filters")),r.a.createElement("div",{className:"filter--cards--wrapers"},u&&$(u).map(function(e,t){var a=u[e],i=n&&n[e]?n[e].name:null;return r.a.createElement(Je,{serviceAreasName:i,filters:u,form:e,item:a,minimunPay:a.minimunPay,key:e,active:a.active})}))))}}]),t}(o.Component);var Le=Object(p.b)(function(e,t){return{user:e.common.user,serviceAreas:e.common.serviceAreas,userPremium:e.common.userPremium}})(Pe),Be=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={active:!1,minimunPay:0,editingpay:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.minimunPay;this.setState({minimunPay:e})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.form,n=e.item;this.props.actions.UpdateFormbyName(t,n)}},{key:"editingPay",value:function(){this.setState({editingpay:!this.state.editingpay})}},{key:"SaveMinimunPay",value:function(){var e=this.props,t=e.user,n=e.forms,a=e.form,i=e.filters,o=n[a]?n[a]:null,r=t;if(o){var c=i;c[o.ServiceAreas]=o,r.filters=c,he(r)}this.setState({editingpay:!this.state.editingpay})}},{key:"OnChangePay",value:function(e){var t=this.props.form;e=isNaN(parseFloat(e))?0:parseFloat(e),this.props.actions.UpdateForm(t,"minimunPay",e)}},{key:"OnChangeActive",value:function(e){var t=this.props,n=t.forms,a=t.form,i=t.filters,o=t.user;this.props.actions.UpdateForm(a,"active",e);var r=n[a]?n[a]:null,c=o;if(r){var s=i;s[r.ServiceAreas]=r,c.filters=s,he(c)}}},{key:"render",value:function(){var e=this.props,t=e.serviceAreasName,n=e.forms,a=e.form,i=e.item,o=this.state.editingpay;return r.a.createElement("div",{className:"filter--cards "},r.a.createElement("div",{className:"top--secction ".concat(o?"editing":"")},r.a.createElement("div",{className:"service--areas"},r.a.createElement("div",{className:"label"},"Service Area :"),r.a.createElement("div",{className:"area"},t)),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"pay-show",onClick:this.editingPay.bind(this)},"$ ",i.minimunPay),r.a.createElement("div",{className:"edit-pay"},r.a.createElement("span",{className:"input--minimun--pay"},r.a.createElement(ze,{icon:"more_vert",form:a,field:"minimunPay",number:!0,placeholder:"Minimun Pay",OnChange:this.OnChangePay.bind(this),initvalue:i.minimunPay})),r.a.createElement("span",{className:"btn--minimun--pay"},r.a.createElement("div",{className:"center--Container grayStyle",onClick:this.SaveMinimunPay.bind(this),style:{"--color-tab--base--hover":"#777"}},r.a.createElement("div",{className:"hoverDiv orangeFlex "}),r.a.createElement("span",{className:"text2D orangeFlex"},"Save")))))),r.a.createElement("div",{className:"active--secction ".concat(o?"editing":"")},r.a.createElement(Ue,{icon:"more_vert",forms:n,form:a,field:"active",placeholder:"Active",updChange:this.OnChangeActive.bind(this),initvalue:i.active})))}}]),t}(o.Component);var Je=Object(p.b)(function(e,t){return{user:e.common.user,forms:e.common.forms,formObserve:e.common.formObserve}},function(e){return{actions:Object(h.b)(a,e)}})(Be);function Re(e){return{type:N,kv:e}}function He(e){return function(t,n){var a=n().dialog,i=e.id,o=e.zIndex,r=e.content,c=a.dialogs;c[i]||(c[i]={},c[i].zIndex=o,c[i].content=r,c[i].visible=!0,c[i].display=!1),c[i].zIndex=o,c[i].content=r,c[i].visible=!0,c[i].display=!1,t(Re({key:"dialogs",value:c})),t(Ke()),setTimeout(function(){c[i].display=!0,t(Re({key:"dialogs",value:c})),t(Ke())},5)}}function Ze(e){return function(t,n){var a=n().dialog,i=e.id,o=a.dialogs;o[i]&&(o[i].display=!1,t(Re({key:"dialogs",value:o})),t(Ke()),setTimeout(function(){o[i].visible=!1,t(Re({key:"dialogs",value:o})),t(Ke())},5))}}function Ve(e){return function(t,n){var a=n().dialog,i=e.id,o=e.zIndex,r=e.content,c=a.views;c[i]||(c[i]={},c[i].zIndex=o,c[i].content=r,c[i].visible=!0,c[i].display=!1),c[i].zIndex=o,c[i].content=r,c[i].visible=!0,c[i].display=!1,t(Re({key:"views",value:c})),t(Ke()),setTimeout(function(){c[i].display=!0,t(Re({key:"views",value:c})),t(Ke())},5)}}function Xe(e){return function(t,n){var a=n().dialog,i=e.id,o=a.views;o[i]&&(o[i].display=!1,t(Re({key:"views",value:o})),t(Ke()),setTimeout(function(){o[i].visible=!1,t(Re({key:"views",value:o})),t(Ke())},5))}}function Ge(e){return function(t,n){var a=n().dialog,i=e.id,o=e.zIndex,r=e.height,c=e.content,s=a.options_slide;s[i]||(s[i]={},s[i].zIndex=o,s[i].content=c,s[i].height=r,s[i].visible=!0,s[i].display=!1),s[i].zIndex=o,s[i].height=r,s[i].content=e.content?e.content:s[i].content,s[i].visible=!0,s[i].display=!1,t(Re({key:"options_slide",value:s})),t(Ke()),setTimeout(function(){s[i].display=!0,t(Re({key:"options_slide",value:s})),t(Ke())},5)}}function qe(e){return function(t,n){var a=n().dialog,i=e.id,o=e.zIndex,r=e.height,c=(e.content,a.options_slide);c[i].zIndex=o,c[i].height=r,t(Re({key:"options_slide",value:c})),t(Ke())}}function Ye(e){return function(t,n){var a=n().dialog,i=e.id,o=a.options_slide;o[i]&&(o[i].display=!1,t(Re({key:"options_slide",value:o})),t(Ke()),setTimeout(function(){o[i].visible=!1,t(Re({key:"options_slide",value:o})),t(Ke())},250))}}function Ke(){return function(e,t){e(Re({key:"dialogObserve",value:t().dialog.dialogObserve+1}))}}n(92);var $e=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).ref=function(e){n.MS_Elem=e},n.state={visible:!1,top:0,left:0,display:!1,height:0,width:null,orientation:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"Close",value:function(e){var t={id:e};this.props.actions.CloseSlideOption(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=(t.dialogObserve,Object.keys(n));return r.a.createElement("div",null,a.map(function(t){var a=n[t];if(a&&a.visible){var i={},o=function(e){var t=e,n=new RegExp("=","g");return t=t.replace(n,"")}(t);i["--s__".concat(o,"_heigth__")]="750px",i["--s__".concat(o,"_zIndex__")]=250,i["--overlay__".concat(o,"_zIndex__")]=249,a.display&&(a.height&&(i["--s__".concat(o,"_heigth__")]=a.height+"px"),a.zIndex&&(i["--s__".concat(o,"_zIndex__")]=a.zIndex,i["--overlay__".concat(o,"_zIndex__")]=a.zIndex-1));var c={transform:"translate3d(0, var(--s__".concat(o,"_heigth__), 0)"),opacity:1,zIndex:"var(--s__".concat(o,"_zIndex__)")},s={opacity:1,zIndex:"var(--overlay__".concat(o,"_zIndex__)")};return r.a.createElement("div",{className:a.display?"active":"",style:i,key:o},r.a.createElement("div",{className:"SlideOption",style:c},a.content?a.content:null),a.display?r.a.createElement("div",{className:"SlideOptionOverlay ".concat(a.display?"show":""),style:s,onClick:e.Close.bind(e,t)}):null)}}))}}]),t}(o.Component);var Qe=Object(p.b)(function(e,t){return{list:e.dialog.options_slide,dialogObserve:e.dialog.dialogObserve}},function(e){return{actions:Object(h.b)(i,e)}})($e),et=n(19),tt=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={scrollPosition:e.getWindowScrollTop()},e.handleInterval=e.handleInterval.bind(Object(et.a)(Object(et.a)(e))),e.handleRequestAnimationFrame=e.handleRequestAnimationFrame.bind(Object(et.a)(Object(et.a)(e))),e}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.intervalID=setInterval(this.handleInterval,50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}},{key:"getWindowScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"handleInterval",value:function(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}},{key:"handleRequestAnimationFrame",value:function(){var e=this.state.scrollPosition,t=this.getWindowScrollTop();t!==e&&("function"===typeof this.props.scrollhandler&&this.props.scrollhandler(t),this.setState({scrollPosition:t}))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(o.Component),nt=(n(93),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleKeyUp=function(e){e.keyCode&&(13===e.keyCode||e.keyCode)},n.handleFocus=function(e){n.setState({focus:!0})},n.handleClickFocus=function(e){var t=n.Elm.getElementsByTagName("input");for(var a in t){var i=t[a];if(i.childNodes&&n.Elm.contains(i)){i.focus();break}}},n.handleBlur=function(e){n.setState({focus:!1})},n.clear=function(e){var t=n.props.form;n.setState({error:!1,text:""}),n.props.actions.UpdateFormbyName(t,{})},n.handleChange=function(e){var t=n.props,a=t.form,i=t.email,o=t.ssn,r=(t.address,t.date),c=t.phone,s=t.field,l=e.target.value,u={v:!0,m:""},d=new RegExp("- ","g");l=l.toUpperCase().replace(d,""),i&&(u=ee(l)?{v:!0,m:""}:{v:!1,m:"email not valid"}),o&&(u=te(l)?{v:!0,m:""}:{v:!1,m:"ssn not valid"}),c&&(u=ne(l)?{v:!0,m:""}:{v:!1,m:"phone not valid"}),r&&(u=ae(l)?{v:!0,m:""}:{v:!1,m:"date not valid"}),n.setState({text:l,valid:u.v,msg:u.m}),n.props.actions.UpdateForm(a,s,l),"function"===typeof n.props.OnChange&&n.props.OnChange(l)},n.ref=function(e){n.Elm=e},n.state={drowndropInputText:"",text:"",valid:!0,msg:"",removeOption:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.forms,n=e.form,a=e.field;this.updateState=this.updateState.bind(this),this.clear=this.clear.bind(this);var i=t[n]?t[n][a]:null;i&&this.setState({error:!1,text:i})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){}},{key:"updateState",value:function(e){this.setState(Object(b.a)({},e.key,e.value))}},{key:"OnChange",value:function(e){var t=this.props,n=this.props;n.form,n.field,n.email,n.address;"function"===typeof t.OnChange&&t.OnChange(e)}},{key:"updState",value:function(e){this.setState(Object(b.a)({},e.key,e.value))}},{key:"render",value:function(){var e=this.props,t=e.number,n=e.email,a=(e.placeholder,e.formObserve,e.dark,e.forms),i=e.form,o=e.field,c={position:"absolute",transform:"scale(1)"},s=(a[i]?a[i][o]:null)||"";s.length>0&&(c={position:"absolute",transform:"scale(0)"});var l="text";return t&&(l="number"),n&&(l="email"),r.a.createElement("div",{className:"codeIt",style:{},onClick:this.handleClickFocus,ref:this.ref},r.a.createElement("input",{type:l,value:s,onChange:this.handleChange,onFocus:this.handleFocus,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,style:{}}),r.a.createElement("div",{className:"_label",style:c}," - - - - - - "))}}]),t}(o.Component));var at=Object(p.b)(function(e,t){return{forms:e.common.forms,formObserve:e.common.formObserve}},function(e){return{actions:Object(h.b)(a,e)}})(nt),it=(n(94),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).ref=function(e){n.elm=e},n.state={active:!1,brand:null,model:null,color:null,code:!1,viewport:!1,phonecode:"",provider:null},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props._phones;this.scrollhandler()}},{key:"componentWillUnmount",value:function(){}},{key:"updBrands",value:function(e){this.setState({brand:e,model:null,color:null})}},{key:"updProvider",value:function(e){this.setState({provider:e,model:null,color:null})}},{key:"updColor",value:function(e){this.setState({color:e})}},{key:"handleSomethingWrong",value:function(){this.setState({active:!1})}},{key:"handleSentEmail",value:function(){var e=this,t=this.props.forms.Login?this.props.forms.Login.email:null;t&&K("".concat(F,"/generateToken?email=").concat(t)).then(function(t){200===t.status?e.setState({code:!0,phonecode:t.phone}):e.setState({code:!1})}).catch(function(t){e.setState({code:!1})})}},{key:"handleConfirmToken",value:function(e){this.props.actions.sendToken(e)}},{key:"handlerCodeInput",value:function(e){e.length>5&&this.props.actions.sendToken(e)}},{key:"handlerEmailInput",value:function(e){this.props.actions.UpdateForm("Login","email",e)}},{key:"scrollhandler",value:function(e){this.state.viewport||function(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,i=t.top<=n&&t.top+t.height>=0,o=t.left<=a&&t.left+t.width>=0;return i&&o}(this.elm)&&this.setState({viewport:!0})}},{key:"render",value:function(){var e=this.state,t=e.code,n=e.phonecode;return r.a.createElement("div",{className:"loadingLoging"},r.a.createElement(tt,{scrollhandler:this.scrollhandler.bind(this)}),r.a.createElement("div",{ref:this.ref,className:"c-tabs-content","is-in-viewport":"".concat(this.state.viewport)},r.a.createElement("div",{className:"left_Section left_SectionTextMedia left_SectionTextMedias lSectionNoPadding center_Tabs_Section","aria-hidden":!0,"aria-labelledby":"",key:"8543845",role:"tabpanel"},r.a.createElement("div",{className:"--auto--margin grid--middle u-grid--override center_Tab_Content_Slide  desktop--6-12 tablet--8-12 mobile--11-12"},r.a.createElement("div",{className:"grid__item desktop--4-12 tablet--11-12 --auto--margin"},r.a.createElement("div",{className:"left_Section__text cascade-text desktop--10-12 tablet--8-12 mobile--12-12 --auto--margin"},r.a.createElement("h3",{className:"beta cascade-text__item white-Color-Text","btn-dt-id":"".concat(V.encode("datePickbutton".concat(984823)))},"".concat(t?"Introducir el c\xf3digo de verificaci\xf3n":"Login")),r.a.createElement("div",{className:"text-normal cascade-text__item  white-backColor"},r.a.createElement("div",{className:"flexContainerH",style:{maxWidth:"360px"}},r.a.createElement("div",{className:"flexContainerSldH",style:{transform:"translate3d(".concat(t?"-100%":"0",", 0px, 0px)")}},r.a.createElement("div",{className:"OptionContM islogin ".concat(t?"":"active_"),style:{minWidth:"100%"}},r.a.createElement("div",{className:"text-description"},"We will send a code to the phone related to this email"),r.a.createElement("div",{className:"email--login"},r.a.createElement(ze,{icon:"more_vert",form:"Login",field:"email",email:!0,placeholder:"Email",OnChange:this.handlerEmailInput.bind(this)})),r.a.createElement("div",{className:"center--padding--btn-login"},r.a.createElement("div",{className:"center--Container grayStyle",onClick:this.handleSentEmail.bind(this),style:{"--color-tab--base--hover":"#777"}},r.a.createElement("div",{className:"hoverDiv orangeFlex "}),r.a.createElement("span",{className:"text2D orangeFlex"},"Login")))),r.a.createElement("div",{className:"OptionContM iscode ".concat(t?"active_":""),style:{minWidth:"100%"}},r.a.createElement("div",{className:"text-description"},"Enter the 6-digit code sent to your phone number ending in ",n),r.a.createElement("div",{className:"code--input"},r.a.createElement(at,{icon:"more_vert",form:"Login",field:"code",email:!0,placeholder:"Email",OnChange:this.handlerCodeInput.bind(this)})),r.a.createElement("div",{className:"center--padding--btn-login"},r.a.createElement("div",{className:"center--Container grayStyle",onClick:this.handleConfirmToken.bind(this),style:{"--color-tab--base--hover":"#777"}},r.a.createElement("div",{className:"hoverDiv orangeFlex "}),r.a.createElement("span",{className:"text2D orangeFlex"},"Verify the code")))))))))))))}}]),t}(o.Component));var ot=Object(p.b)(function(e,t){return{forms:e.common.forms,_phones:e.common.phones,phonecode:e.common.phonecode,formObserve:e.common.formObserve}},function(e){return{actions:Object(h.b)(a,e)}})(it),rt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={route_list:[],setting:!1,badUser:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize);var e=ie();this.props.commonActions.setSubId(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"componentDidMount",value:function(){this.props.commonActions.LoadData()}},{key:"resize",value:function(e){this.props.commonActions&&this.props.commonActions.ScreenSize(window.outerWidth)}},{key:"render",value:function(){var e=this.props,t=e.appLoaded,n=e.authenticate,a=e._active;return t?n?r.a.createElement("div",{className:"App ".concat(a?"":"not_active")},r.a.createElement("div",{id:"content_body"},r.a.createElement(D.a,null,r.a.createElement(M.a,{exact:!0,path:"/",component:Le}))),r.a.createElement(Qe,null)):r.a.createElement(ot,null):r.a.createElement("div",{className:"loadingScreen"},r.a.createElement(Te,{stroke:"#fff"}))}}]),t}(o.Component);var ct=Object(T.a)(Object(p.b)(function(e,t){return{appLoaded:e.common.appLoaded,_active:e.common._active,authenticate:e.common.authenticate}},function(e){return{commonActions:Object(h.b)(a,e)}})(rt)),st=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={route_list:[],setting:!1,badUser:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){!function(e){var t="\n    --dropDown--background--color:#f9f9f9;\n    --footer--text-color--: #c4c4c4 ;\n    --background--color--cards: #fafafa;\n    --slide__card--p-color--:#6e6e6e;\n    --slide__card--title-color--:#5e5e5e;\n    --tip__card--p-color--:#777;\n    --color-logo_:#333;\n    --color-base--hover:#ff7817;\n    --background--color: #f5f5f5;\n    --colorText_: #263238;\n    --icon--color_: #b0bec5;\n    --tip__card--backgropund-Color--:#fff;\n    --tab--nav-Color--:#5f6368;    \n    --tab--nav-icon-color--:#c7c7c7;\n    --fill--theme--color:#666;";R||(R=document.getElementById("root")),e?R.style=t:(H=!H,R.style=H?"\n    --dropDown--background--color: #263238;\n    --footer--text-color--:#3a3a3a ;\n    --background--color--cards: #263238;\n    --slide__card--p-color--:#aaaaaa;\n    --slide__card--title-color--:#e5e5e5;\n    --tip__card--p-color--:#aaaaaa;\n    --color-logo_:#fff;\n    --color-base--hover:##ff7817;\n    --background--color: #263238;\n    --colorText_: #e5e5e5;\n    --icon--color_: #b0bec5;\n    --tip__card--backgropund-Color--:#444;\n    --tab--nav-Color--:#aaaaaa;\n    --tab--nav-icon-color--:#aaaaaa;\n    --fill--theme--color:#f5f5f5;":t)}(!0),window.localStorage.setItem("fpXb",function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{store:A},r.a.createElement(I.a,null,r.a.createElement(ct,null))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.dd99a9ec.chunk.js.map