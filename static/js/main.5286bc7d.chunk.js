(this.webpackJsonpbet=this.webpackJsonpbet||[]).push([[0],{28:function(e,a,t){e.exports=t(48)},33:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),o=t.n(l),c=t(3),i=(t(33),t(8)),u=t(2),s=(t(34),function(){var e=Object(u.f)();return r.a.createElement("div",{className:"welcome-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Bem vindo!"),r.a.createElement("p",null,"Crie uma nova partida e aposte com seus amigos!"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return a="/room/create",void e.push(a);var a}},"criar partida"))))}),d=t(1),m=t.n(d),v=t(4),p=(t(40),t(41),function(e){var a=e.text;return r.a.createElement("div",{className:"loader"},r.a.createElement("h3",null,a))}),b=Object(n.createContext)({});function f(){return Object(n.useContext)(b)}var E=b.Provider,h=t(13),y=t.n(h);t(42),t(44);y.a.initializeApp({apiKey:"AIzaSyCZmw9t-VfkOmvj1EF8aH3dbs479nVFzqw",authDomain:"bet-app-2507.firebaseapp.com",databaseURL:"https://bet-app-2507.firebaseio.com",projectId:"bet-app-2507",storageBucket:"bet-app-2507.appspot.com",messagingSenderId:"448279984350",appId:"1:448279984350:web:4656fd7056814a68e2aa4f"});var g=y.a.auth,O=y.a.database();function j(){var e=new g.GoogleAuthProvider;return g().signInWithPopup(e)}var k=function(){var e=f(),a=e.user,t=e.setUser,l=Object(u.f)(),o=Object(n.useState)(!0),i=Object(c.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(!1),E=Object(c.a)(b,2),h=E[0],y=E[1],k=Object(n.useState)(""),x=Object(c.a)(k,2),N=x[0],w=x[1],C=Object(n.useCallback)((function(){g().onAuthStateChanged(function(){var e=Object(v.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return t({id:a.uid,name:a.displayName,photo:a.photoURL,email:a.email}),d(!1),e.abrupt("return");case 4:return e.prev=4,e.next=7,j();case 7:n=e.sent,t({id:n.user.uid,name:n.user.displayName,photo:n.user.photoURL,email:n.user.email}),d(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(a){return e.apply(this,arguments)}}())}),[t]),S=function(){var e=Object(v.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),t.preventDefault(),e.prev=2,e.next=5,O.ref("room").push({owner:{id:a.id,name:a.name,email:a.email},name:N,players:[{id:a.id,name:a.name,photo:a.photo,money:5e3}],numbersDrawn:null,bets:null,status:"waiting players"});case 5:n=e.sent,l.push("/game/".concat(n.key)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),y(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C()}),[C]),s?r.a.createElement(p,{text:"Autenticando, aguarde..."}):r.a.createElement("div",{className:"room-create-page"},r.a.createElement("h3",null,"Ol\xe1 ",a.name,"."),r.a.createElement("p",null,"Insira o nome da sua partida para criar uma sala."),r.a.createElement("form",{onSubmit:S},r.a.createElement("input",{type:"text",name:"name",value:N,onChange:function(e){return w(e.target.value)},placeholder:"Nome da sala",autoComplete:"off"}),r.a.createElement("button",{type:"submit",disabled:!N||h},"criar sala")))},x=t(7);var N=Object(n.memo)((function(e){var a=e.price;return r.a.createElement(r.a.Fragment,null,new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)))})),w=function(e){var a,t,l,o,c=e.game,i=e.user,s=e.playerInGame,d=Object(u.g)().id,p=(null===i||void 0===i?void 0:i.id)===(null===c||void 0===c||null===(a=c.owner)||void 0===a?void 0:a.id),b=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null===c||void 0===c||null===(a=c.players)||void 0===a?void 0:a.filter((function(e){return e.id!==(null===i||void 0===i?void 0:i.id)})),e.next=3,O.ref("room/".concat(d,"/players")).set(t);case 3:case"end":return e.stop()}}),e)}))),[c,d,i]),f=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[].concat(Object(x.a)(null===c||void 0===c?void 0:c.players),[{id:null===i||void 0===i?void 0:i.id,name:null===i||void 0===i?void 0:i.name,photo:null===i||void 0===i?void 0:i.photo,money:5e3}]),e.next=3,O.ref("room/".concat(d,"/players")).update(a);case 3:case"end":return e.stop()}}),e)}))),[d,i,c]),E=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null===c||void 0===c||null===(a=c.players)||void 0===a?void 0:a.map((function(e){return{id:e.id,bet:0}})),n=function(){return Math.floor(32*Math.random()+1)},e.next=4,O.ref("room/".concat(d)).update({status:"in progress",round:1,bets:t,numberWin:n()});case 4:case"end":return e.stop()}}),e)}))),[d,c]);return r.a.createElement("div",{className:"game-page-select"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,null===c||void 0===c?void 0:c.name),r.a.createElement("br",null),r.a.createElement("div",{className:"link"},p&&r.a.createElement("h4",null,"Compartilhe o link com seus amigos!"),!p&&r.a.createElement("h4",null,"Aguardando o dono da partida come\xe7ar!"),r.a.createElement("input",{type:"text",name:"link",value:window.location.href,readOnly:!0})),p&&r.a.createElement("div",{className:"start-game"},r.a.createElement("button",{disabled:1===(null===c||void 0===c||null===(t=c.players)||void 0===t?void 0:t.length),onClick:E},"iniciar partida")),r.a.createElement("div",{className:"players"},r.a.createElement("h4",null,"Jogadores da partida (",null===c||void 0===c||null===(l=c.players)||void 0===l?void 0:l.length,")"),null===c||void 0===c||null===(o=c.players)||void 0===o?void 0:o.map((function(e,a){var t,n=(null===i||void 0===i?void 0:i.id)===e.id;return r.a.createElement("div",{className:"player",key:"user-".concat(a)},r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.photo,alt:e.name})),r.a.createElement("div",{className:"info"},e.name," ",n&&"(Voc\xea)"," ",!n&&e.id===(null===c||void 0===c||null===(t=c.owner)||void 0===t?void 0:t.id)&&"(Dono)",r.a.createElement("br",null),"Dinheiro: ",r.a.createElement(N,{price:e.money}))),n&&!p&&r.a.createElement("div",{className:"exit"},r.a.createElement("span",{onClick:b},"sair")))})),!s&&r.a.createElement("div",{className:"entry-game"},r.a.createElement("button",{onClick:f},"participar da partida")))))},C=t(27),S=t.n(C),A=function(e){var a,t=e.game,n=e.player,l=function(e){return e.toFixed(2)};return r.a.createElement("div",{className:"players"},null===t||void 0===t||null===(a=t.players)||void 0===a?void 0:a.sort((function(e,a){return e.money>a.money?-1:1})).map((function(e,a){var t=(null===n||void 0===n?void 0:n.id)===e.id;return r.a.createElement("div",{className:"player",key:"user-".concat(a)},r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"position"},"#",a+1),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.photo,alt:e.name})),r.a.createElement("div",{className:"info"},e.name," ",t&&"(Voc\xea)",r.a.createElement("br",null),"Dinheiro: R$ ",r.a.createElement(S.a,{value:e.money,formatValue:l}))))})))},R=function(e){var a,t,l,o=e.game,i=e.player,s=Object(u.g)().id,d=Object(n.useState)(""),p=Object(c.a)(d,2),b=p[0],f=p[1],E=Object(n.useState)(""),h=Object(c.a)(E,2),y=h[0],g=h[1],j=Object(n.useState)(!1),k=Object(c.a)(j,2),w=k[0],C=k[1],S=Object(n.useState)(0),A=Object(c.a)(S,2),R=A[0],I=A[1],L=Object(n.useState)(!1),V=Object(c.a)(L,2),D=V[0],P=V[1],U=null===o||void 0===o||null===(a=o.bets)||void 0===a?void 0:a.filter((function(e){return e.id===(null===i||void 0===i?void 0:i.id)&&e.bet>Number(0)})),F=U.length,M=null===U||void 0===U||null===(t=U[0])||void 0===t?void 0:t.bet,T=null===U||void 0===U||null===(l=U[0])||void 0===l?void 0:l.number,W=function(){return Math.floor(32*Math.random()+1)},B=Object(n.useCallback)((function(e){var a=e.target.value;f(a)}),[]),z=Object(n.useCallback)((function(e){Number(e.target.value)>32?g(32):g(e.target.value)}),[]),G=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===o||void 0===o?void 0:o.players.map((function(e){return{id:e.id,bet:0}})),t=(null===o||void 0===o?void 0:o.round)+1,e.next=4,O.ref("room/".concat(s)).update({round:t,bets:a,numberWin:W()});case 4:setTimeout((function(){C(!1),P(!1),I(0)}),200);case 5:case"end":return e.stop()}}),e)}))),[s,o]),J=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a,t,n,r,l,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),n=null===o||void 0===o||null===(a=o.bets)||void 0===a?void 0:a.filter((function(e){return e.number===(null===o||void 0===o?void 0:o.numberWin)})),r=null===o||void 0===o||null===(t=o.bets)||void 0===t?void 0:t.filter((function(e){return e.number!==(null===o||void 0===o?void 0:o.numberWin)})),l=[],!n.length){e.next=9;break}return c=Object(x.a)(null===o||void 0===o?void 0:o.players),n.forEach((function(e){var a=null===o||void 0===o?void 0:o.players.findIndex((function(a){return a.id===e.id}));c[a].money=c[a].money+(e.bet*(null===o||void 0===o?void 0:o.players.length)+e.bet),l=[].concat(Object(x.a)(l),[{id:e.id,name:c[a].name,gain:e.bet*(null===o||void 0===o?void 0:o.players.length)+e.bet}])})),e.next=9,O.ref("room/".concat(s,"/players")).set(c);case 9:if(!r.length){e.next=14;break}return i=Object(x.a)(null===o||void 0===o?void 0:o.players),r.forEach((function(e){var a=null===o||void 0===o?void 0:o.players.findIndex((function(a){return a.id===e.id}));i[a].money=i[a].money-e.bet,l=[].concat(Object(x.a)(l),[{id:e.id,name:i[a].name,lose:e.bet}])})),e.next=14,O.ref("room/".concat(s,"/players")).set(i);case 14:return e.next=16,O.ref("room/".concat(s,"/historic")).set(l);case 16:setTimeout((function(){G()}),2e3);case 17:case"end":return e.stop()}}),e)}))),[o,s,G]),H=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],t=function(e){a[e]=new Promise((function(a){setTimeout((function(){I(W()),a()}),600*e)}))},n=0;n<10;n++)t(n);return e.next=5,Promise.all(a);case 5:I(null===o||void 0===o?void 0:o.numberWin),setTimeout((function(){J()}),1500);case 7:case"end":return e.stop()}}),e)}))),[o,J]),$=Object(n.useCallback)((function(){var e;if(0===(null===o||void 0===o||null===(e=o.bets)||void 0===e?void 0:e.filter((function(e){return e.bet===Number(0)}))).length&&!w&&!D)return C(!0),void H()}),[o,H,w,D]),q=Object(n.useCallback)(function(){var e=Object(v.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!F){e.next=3;break}return e.abrupt("return",!1);case 3:return n=null===o||void 0===o||null===(t=o.bets)||void 0===t?void 0:t.filter((function(e){return e.id!==(null===i||void 0===i?void 0:i.id)})),n=[].concat(Object(x.a)(n),[{id:null===i||void 0===i?void 0:i.id,bet:Number(b),number:Number(y)}]),e.next=7,O.ref("room/".concat(s,"/bets")).set(n,(function(e){e?console.log(e):(g(""),f(""))}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[F,o,i,s,b,y]);return Object(n.useEffect)((function(){$()}),[$]),r.a.createElement("div",{className:"sort-and-bets"},!w&&!D&&r.a.createElement("h3",null,"Aguardando jogadores apostarem..."),w&&!D&&r.a.createElement("h3",null,"Sorteando n\xfamero..."),D&&r.a.createElement("h3",null,"Fazendo as contas..."),r.a.createElement("div",{className:"numbers-sort"},new Array(32).fill("").map((function(e,a){return r.a.createElement("div",{className:"number ".concat(R===a+1?"--choice":""),key:"key-".concat(a)},a+1)}))),r.a.createElement("div",{className:"bet"},r.a.createElement("form",{onSubmit:q},r.a.createElement("input",{placeholder:"N\xfamero (1 a 32)",type:"number",min:1,max:32,value:y,onChange:z}),r.a.createElement("input",{placeholder:"Valor aposta R$",type:"number",value:b,onChange:B}),r.a.createElement("button",{type:"submit",disabled:!b||!y||b&&Number(b)>(null===i||void 0===i?void 0:i.money)||F},"apostar"))),!!F&&r.a.createElement("div",{className:"bet_value"},r.a.createElement("h4",null,r.a.createElement("span",null,r.a.createElement(N,{price:M}))," ","apostado no n\xfamero ",r.a.createElement("span",null,T),"!")))},I=function(e){var a,t=e.game,n=e.player,l=null===t||void 0===t||null===(a=t.bets)||void 0===a?void 0:a.filter((function(e){return e.bet>0})),o=function(){var e;return(null===t||void 0===t?void 0:t.historic)?r.a.createElement("div",{className:"history"},r.a.createElement("h4",null,"Hist\xf3rico \xfaltima rodada"),null===t||void 0===t||null===(e=t.historic)||void 0===e?void 0:e.map((function(e){return r.a.createElement("div",{className:"hist",key:"hist-".concat(e.id)},r.a.createElement("span",null,e.name)," ",e.gain?"ganhou":"perdeu"," ",r.a.createElement(N,{price:e.gain?e.gain:e.lose}))}))):null};return 0===l.length?r.a.createElement("div",{className:"bets"},r.a.createElement("p",null,"Nenhum jogador apostou ainda."),o()):r.a.createElement("div",{className:"bets"},r.a.createElement("h4",null,"Apostas da rodada"),l.map((function(e){var a,l=(null===n||void 0===n?void 0:n.id)===e.id,o=null===t||void 0===t||null===(a=t.players)||void 0===a?void 0:a.filter((function(a){return a.id===e.id}));return r.a.createElement("div",{className:"bet",key:"bet-".concat(e.id)},o[0].name," ",l?"(Voc\xea)":""," apostou ",r.a.createElement(N,{price:e.bet}))})),o())},L=(t(47),function(){var e=f(),a=e.user,t=e.setUser,l=Object(u.g)().id,o=Object(n.useState)(!0),i=Object(c.a)(o,2),s=i[0],d=i[1],b=Object(n.useState)(null),E=Object(c.a)(b,2),h=E[0],y=E[1],k=Object(n.useState)(!1),x=Object(c.a)(k,2),N=x[0],C=x[1],S=Object(n.useState)(null),L=Object(c.a)(S,2),V=L[0],D=L[1],P=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.ref("room/".concat(l)).on("value",(function(e){var t=e.val();if(y(t),a&&t){var n,r=null===t||void 0===t||null===(n=t.players)||void 0===n?void 0:n.filter((function(e){return e.id===(null===a||void 0===a?void 0:a.id)}));(null===r||void 0===r?void 0:r.length)>0&&D(r[0]),C((null===r||void 0===r?void 0:r.length)>0),d(!1)}}),(function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[l,a]),U=Object(n.useCallback)(Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===a){e.next=3;break}return P(),e.abrupt("return");case 3:return e.next=5,g().onAuthStateChanged(function(){var e=Object(v.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return t({id:a.uid,name:a.displayName,photo:a.photoURL,email:a.email}),P(),e.abrupt("return");case 4:return e.prev=4,e.next=7,j();case 7:n=e.sent,t({id:n.user.uid,name:n.user.displayName,photo:n.user.photoURL,email:n.user.email}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:P();case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)}))),[t,P,a]);return Object(n.useEffect)((function(){U()}),[U]),s?r.a.createElement(p,{text:"Carregando dados da partida..."}):s||h?s||"finish"!==(null===h||void 0===h?void 0:h.status)?s||"waiting players"===(null===h||void 0===h?void 0:h.status)||N?s||"waiting players"!==(null===h||void 0===h?void 0:h.status)?r.a.createElement("div",{className:"game-page"},r.a.createElement("h3",null,null===h||void 0===h?void 0:h.name),r.a.createElement("small",null,"C\xe1lculo de ganhos = (VALOR APOSTA * N\xdaMERO DE PLAYERS) + VALOR APOSTA."),r.a.createElement("div",{className:"content"},r.a.createElement(A,{game:h,player:V}),r.a.createElement(R,{game:h,player:V}),r.a.createElement(I,{game:h,player:V}))):r.a.createElement(w,{game:h,user:a,playerInGame:N}):r.a.createElement(p,{text:"Ops, a partida j\xe1 foi iniciado."}):r.a.createElement(p,{text:"A partida j\xe1 acabou!"}):r.a.createElement(p,{text:"A partida n\xe3o existe!"})}),V=function(){return r.a.createElement(i.a,{basename:"/bet-game"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/game/:id",component:L}),r.a.createElement(u.a,{path:"/room/create",component:k}),r.a.createElement(u.a,{path:"/",component:s})))},D=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],l=a[1];return r.a.createElement(E,{value:{user:t,setUser:l}},r.a.createElement(V,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5286bc7d.chunk.js.map