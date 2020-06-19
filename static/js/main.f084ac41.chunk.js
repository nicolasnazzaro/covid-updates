(this["webpackJsonpcovid-updates"]=this["webpackJsonpcovid-updates"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"cards_container__2nAh3",pickerContainer:"cards_pickerContainer__1maKw",card:"cards_card__1CqLb",infected:"cards_infected__281pr",recovered:"cards_recovered__26Qnc",deaths:"cards_deaths__lYVzI"}},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),l=a(8),i=a.n(l),u=a(12),s=a(17),d=a(34),m=a.n(d),f="https://covid19.mathdro.id/api",p=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,l,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f,t&&(a="".concat(f,"/countries/").concat(t)),e.prev=2,e.next=5,m.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,u=r.lastUpdate,s={confirmed:c,recovered:o,deaths:l,lastUpdate:u},e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(f,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(f,"/countries"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.countries.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(223),b=a(228),g=a(224),_=a(225),y=a(227),x=a(226),w=a(73),j=a.n(w),C=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,h();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{className:j.a.formControl},r.a.createElement(x.a,{default:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"All"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},O=a(35),k=a.n(O),S=a(13),N=a.n(S),D=a(36),B=a.n(D),I=function(){var e,t,a,c=Object(n.useState)({}),o=Object(s.a)(c,2),l=o[0],d=o[1],m=Object(n.useState)(""),f=Object(s.a)(m,2),v=f[0],h=f[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,p(v);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]);var y=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.confirmed?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:N.a.pickerContainer},r.a.createElement("h3",{style:{marginRight:20}},"By country:"),r.a.createElement(C,{handleCountryChange:y})),r.a.createElement(E.a,{container:!0,spacig:3,justify:"center",className:N.a.container},r.a.createElement(E.a,{item:!0,component:b.a,xs:12,md:3,className:B()(N.a.card,N.a.infected)},r.a.createElement(g.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:null===(e=l.confirmed)||void 0===e?void 0:e.value,duration:1.5,separator:","})),r.a.createElement(_.a,{color:"textSecondary"},new Date(l.lastUpdate).toDateString()),r.a.createElement(_.a,{variant:"body2"},"Number of active cases"))),r.a.createElement(E.a,{item:!0,component:b.a,xs:12,md:3,className:B()(N.a.card,N.a.recovered)},r.a.createElement(g.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:null===(t=l.recovered)||void 0===t?void 0:t.value,duration:1.5,separator:","})),r.a.createElement(_.a,{color:"textSecondary"},new Date(l.lastUpdate).toDateString()),r.a.createElement(_.a,{variant:"body2"},"Number of recovered"))),r.a.createElement(E.a,{item:!0,component:b.a,xs:12,md:3,className:B()(N.a.card,N.a.deaths)},r.a.createElement(g.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:null===(a=l.deaths)||void 0===a?void 0:a.value,duration:1.5,separator:","})),r.a.createElement(_.a,{color:"textSecondary"},new Date(l.lastUpdate).toDateString()),r.a.createElement(_.a,{variant:"body2"},"Number of deaths"))))):r.a.createElement("p",null,"Loading cards...")},U=a(78),A=a(80),J=a.n(A),L=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){v().then((function(e){return c(e)}))}),[]);var o=r.a.createElement(U.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Total Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.1)",fill:!0},{data:a.map((function(e,t){var n;return t>0&&(n=a[t].confirmed-a[t-1].confirmed),n})),label:"Infected daily increment",borderColor:"yellow",backgroundColor:"rgba(255, 255, 125, 0.1)",fill:!0}]}});return r.a.createElement("div",{className:J.a.container},r.a.createElement("h3",null,"Global Overview"),a.length?o:r.a.createElement("p",null,"Loading chart..."))},F=a(81),Q=a.n(F),R=a(82),V=a.n(R),W=a(229),q=function(){return r.a.createElement("footer",{className:V.a.footer},r.a.createElement(_.a,{variant:"body2",color:"textSecondary"},"Data retrieved from ",r.a.createElement(W.a,{color:"inherit",href:"https://covid19.mathdro.id/api"},"https://covid19.mathdro.id/api")))},z=function(){return r.a.createElement("div",{className:Q.a.container},r.a.createElement("h2",null,"Covid-19 Updates"),r.a.createElement(L,null),r.a.createElement(I,null),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports={formControl:"countryPicker_formControl__1V_Hl"}},80:function(e,t,a){e.exports={container:"chart_container__3lAJl"}},81:function(e,t,a){e.exports={container:"App_container__1MQN3"}},82:function(e,t,a){e.exports={footer:"footer_footer__1lZIc"}},84:function(e,t,a){e.exports=a(204)}},[[84,1,2]]]);
//# sourceMappingURL=main.f084ac41.chunk.js.map