(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{236:function(e,t,a){e.exports=a(438)},241:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),i=a.n(o),l=(a(241),a(21)),c=a(51),s=a.n(c);function m(e){if(null===e)return null;for(var t=[],a=0;a<e.length;a++)0===a?t.push(e[a]):t.push({date:e[a].date,confirmed:e[a].confirmed-e[a-1].confirmed,deaths:e[a].deaths-e[a-1].deaths,recovered:e[a].recovered-e[a-1].recovered});return t}function d(e,t){if(null===t)return e;for(var a=[],n=0;n<e.length;n++)a.push({date:e[n].date,confirmed:e[n].confirmed,deaths:e[n].deaths,recovered:e[n].recovered,confirmed1:t[n].confirmed,deaths1:t[n].deaths,recovered1:t[n].recovered});return a}var u=a(199),p=a(479),g=a(496),f=a(487),h=a(486),E=a(488),v=a(484),b=a(96),y=a(491),S=a(440),w=a(489),x=a(490),C=a(497),D=a(485),j=a(482),O=a(494),I=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:160}}})),k=r.a.memo((function(e){var t=I(),a=Object(n.useState)(sessionStorage.getItem(e.item)),o=Object(l.a)(a,2),i=o[0],c=o[1];return r.a.createElement(j.a,{variant:"outlined",className:t.formControl},r.a.createElement(C.a,{id:"demo-simple-select-outlined-label"},"Country"),r.a.createElement(O.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:i,onChange:function(t){c(t.target.value),sessionStorage.setItem(e.item,t.target.value),e.reload&&window.location.reload()},label:"Country"},r.a.createElement(D.a,{value:""},r.a.createElement("em",null,"Global")),e.list.list.map((function(e){return r.a.createElement(D.a,{value:e},e)}))))})),B=a(188),N=a.n(B),F=a(4),W=a(189),A=a.n(W),G=a(492),z=Object(p.a)((function(e){return{root:{position:"relative",flexGrow:1,display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),ackgroundColor:"#0392D0"},appBarShift:{marginLeft:190,width:"calc(100% - ".concat(190,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:190,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,top:"200vh"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function P(e){var t=z(),a=Object(n.useState)(null),o=Object(l.a)(a,2),i=o[0],c=o[1],s=r.a.useState(!1),m=Object(l.a)(s,2),d=m[0],u=m[1];return r.a.createElement("div",{className:t.root},r.a.createElement(h.a,null),r.a.createElement(f.a,{position:"absolute",className:Object(F.a)(t.appBar,d&&t.appBarShift)},r.a.createElement(E.a,{className:t.toolbar},r.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},className:Object(F.a)(t.menuButton,d&&t.menuButtonHidden)},r.a.createElement(N.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"COVID 19 Stats"))),r.a.createElement(g.a,{variant:"permanent",classes:{paper:Object(F.a)(t.drawerPaper,!d&&t.drawerPaperClose)},open:d},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(w.a,{onClick:function(){u(!1)}},r.a.createElement(A.a,null))),r.a.createElement("div",{className:t.drawerContainer},r.a.createElement(v.a,null,["Global Stats","Country Stats","Country Compare"].map((function(e,t){return r.a.createElement(S.a,{button:!0,key:e,onClick:function(){c(e),sessionStorage.setItem("selection",e),"Global Stats"===e&&(sessionStorage.setItem("countryDisplay",""),window.location.reload())}},r.a.createElement(x.a,{primary:e}))}))),r.a.createElement(y.a,null),"Country Stats"===i&&r.a.createElement(v.a,null,r.a.createElement(S.a,null,r.a.createElement(k,{item:"countryDisplay",list:e.list,reload:!0}))),"Country Compare"===i&&r.a.createElement(v.a,null,r.a.createElement(S.a,null,r.a.createElement(k,{item:"countryDisplay",list:e.list,reload:!1})),r.a.createElement(S.a,null,r.a.createElement(k,{item:"secondCountryDisplay",list:e.list,reload:!0}))))),r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(G.a,{className:t.container},e.children)))}var R=a(439),T=Object(p.a)((function(e){return{depositContext:{flex:1},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",textAlign:"center",maxWidth:"200"}}})),K=r.a.memo((function(e){var t=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{elevation:5,className:t.paper},r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.title),r.a.createElement(b.a,{component:"p",variant:window.innerWidth<500?"h6":"h4"},e.number.toLocaleString()),r.a.createElement(b.a,{color:"textSecondary",className:t.depositContext},e.date)))})),L=a(493),H=r.a.memo((function(e){var t=e.Data[e.Data.length-1];return r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(K,{title:"Confirmed",number:t?t.confirmed:"loading",date:t?t.date:"loading"})),r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(K,{title:"Deaths",number:t?t.deaths:"loading",date:t?t.date:"loading"})),r.a.createElement(L.a,{item:!0,xs:4},r.a.createElement(K,{title:"Recovered",number:t?t.recovered:"loading",date:t?t.date:"loading"})))})),J=a(28),M=Object(p.a)((function(e){return{depositContext:{flex:1},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",textAlign:"center",maxWidth:"200"}}})),V=r.a.memo((function(e){var t=e.Data,a=M();return r.a.createElement(R.a,{elevation:3,className:a.paper},r.a.createElement("h2",null,e.label),r.a.createElement(J.e,{height:300,width:"100%"},r.a.createElement(J.d,{data:t,height:300,width:370,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(J.a,{strokeDasharray:"3 3"}),r.a.createElement(J.g,{dataKey:"date"}),r.a.createElement(J.h,{hide:!0}),r.a.createElement(J.f,null),r.a.createElement(J.b,null),r.a.createElement(J.c,{type:"monotone",dataKey:e.type,stroke:e.stroke,dot:!1,strokeWidth:3}),t[0].hasOwnProperty(e.Stype)&&r.a.createElement(J.c,{type:"monotone",dataKey:e.Stype,stroke:"#581845",dot:!1,strokeWidth:3}))))})),$=Object(p.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},drawer:{},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),q=r.a.memo((function(){var e=$();console.log("rendered");var t=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e={list:[]};s.a.get("https://pomber.github.io/covid19/timeseries.json").then((function(t){for(var a in t.data)e.list.push(a);r(e)})).catch((function(e){console.error(e)}))}),[]),a}(),a=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t=[];s.a.get("https://pomber.github.io/covid19/timeseries.json").then((function(a){if(e)o(a.data[e]);else{for(var n=0;n<a.data.Israel.length;n++)for(var r in a.data)"Afghanistan"===r?t.push(a.data[r][n]):(t[n].confirmed+=a.data[r][n].confirmed,t[n].deaths+=a.data[r][n].deaths,t[n].recovered+=a.data[r][n].recovered);o(t)}})).catch((function(e){console.error(e)}))}),[e]),r}(sessionStorage.getItem("countryDisplay")),o=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){s.a.get("https://pomber.github.io/covid19/timeseries.json").then((function(t){null!==e&&o(t.data[e])})).catch((function(e){console.error(e)}))}),[e]),null===e?null:r}(sessionStorage.getItem("secondCountryDisplay"));return"Country Stats"===sessionStorage.getItem("selection")&&sessionStorage.removeItem("secondCountryDisplay"),"Global Stats"===sessionStorage.getItem("selection")&&sessionStorage.removeItem("secondCountryDisplay"),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{className:e.appBar,list:t},r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:12},a?r.a.createElement(H,{Data:a}):"Loading")),r.a.createElement("br",null),r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(a,o),type:"confirmed",Stype:"confirmed1",label:"Total Confirmed",stroke:"#FFAE00"}):""),r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(a,o),type:"deaths",Stype:"deaths1",label:"Total Deaths",stroke:"#FF0000"}):""),r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(a,o),type:"recovered",Stype:"recovered1",label:"Total Recovered",stroke:"#00FF2A "}):"")),r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(m(a),m(o)),type:"confirmed",Stype:"confirmed1",label:"Daily Confirmed",stroke:"#FFAE00"}):""),r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(m(a),m(o)),type:"deaths",Stype:"deaths1",label:"Daily Deaths",stroke:"#FF0000"}):""),r.a.createElement(L.a,{item:!0,xs:12,md:6,lg:4},a?r.a.createElement(V,{Data:d(m(a),m(o)),type:"recovered",Stype:"recovered1",label:"Daily Recovered",stroke:"#00FF2A "}):""))))}));var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[236,1,2]]]);
//# sourceMappingURL=main.0965be9f.chunk.js.map