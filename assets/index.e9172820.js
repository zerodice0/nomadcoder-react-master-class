import{u,R as e,_ as v,s as c,a as k,b as $,c as f,H as y,L as p,d as E,e as h,B as w,W as L,r as C,F as S,f as T,Q as q,g as P,h as F}from"./vendor.55687445.js";function ce(){import("data:text/javascript,")}const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};j();const M=async()=>fetch("https://api.coinpaprika.com/v1/coins").then(t=>t.json()),R=async t=>fetch(`https://api.coinpaprika.com/v1/coins/${t}/`).then(o=>o.json()),_=async t=>fetch(`https://api.coinpaprika.com/v1/tickers/${t}/`).then(o=>o.json()),O=async t=>{const o=Math.floor(Date.now()/1e3),n=o-60*60*24*30;return fetch(`https://api.coinpaprika.com/v1/coins/${t}/ohlcv/historical?start=${n}&end=${o}`).then(i=>i.json())},I=({coinId:t})=>{var i,r;const{isLoading:o,data:n}=u(["ohlcv",t],()=>O(t),{refetchInterval:1e4});return e.createElement(e.Fragment,null,o?"Loading chart...":e.createElement(v,{type:"line",series:[{name:"Price",data:(i=n==null?void 0:n.map(l=>l.close))!=null?i:[]}],options:{theme:{mode:"dark"},chart:{height:500,width:300,background:"transparent",toolbar:{show:!1}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},categories:(r=n==null?void 0:n.map(l=>l.time_close))!=null?r:[],type:"datetime"},yaxis:{show:!1},tooltip:{y:{formatter:function(l){return`$${l.toFixed(2)} USD`}}},fill:{type:"gradient",gradient:{gradientToColors:["#0066FF"]}},colors:["#1dd1a1"],grid:{show:!1},stroke:{curve:"smooth",width:4}}}))},z=()=>e.createElement("h1",null,"Price"),H=c.h1`
  font-size: 48px;
  color: ${t=>t.theme.accentColor};
`,A=c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,B=c.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Q=c.span`
  text-align: center;
  display: block;
`,N=c.div`
  height: 3rem;
  display: flex;
  justify-content: align-items;
  align-items: center;
  border-bottom: 1px solid ${t=>t.theme.boxColor};
  color: ${t=>t.theme.boxColor};
`,x=c.div`
  display: flex;
  justify-content: space-between;
  background-color: ${t=>t.theme.boxColor};
  padding: 10px 20px;
  border-radius: 10px;
`,m=c.div`
  display: flex;
  flex-direcation: column;
  align-items: center;

  span: first-child {
    font-size: 10px;
    font-wegith: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,U=c.p`
  margin: 20px 0px;
  color: ${t=>t.theme.boxColor};
`,W=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,b=c.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${t=>t.theme.boxColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${t=>t.isActive?t.theme.accentColor:t.theme.textColor};
  a {
    display: block;
  }
`,G=()=>{const o=k().state,{coinId:n}=$(),i=f("/:coinId/price"),r=f("/:coinId/chart"),{isLoading:l,data:a}=u(["info",n],()=>R(n!=null?n:"")),{isLoading:g,data:s}=u(["ticker",n],()=>_(n!=null?n:""),{refetchInterval:5e3});return e.createElement(A,null,e.createElement(y,null,e.createElement("title",null,o!=null&&o.name?o.name:l||g?"Loading...":a==null?void 0:a.name)),e.createElement(p,{to:"/"},e.createElement(N,null,"\u2190 return to coin list")),e.createElement(B,null,e.createElement(H,null,o!=null&&o.name?o.name:l||g?"Loading...":a==null?void 0:a.name)),l||g?e.createElement(Q,null,"Loading..."):e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement(m,null,e.createElement("span",null,"Rank:"),e.createElement("span",null,a==null?void 0:a.rank)),e.createElement(m,null,e.createElement("span",null,"Symbol:"),e.createElement("span",null,"$",a==null?void 0:a.symbol)),e.createElement(m,null,e.createElement("span",null,"Price:"),e.createElement("span",null,s==null?void 0:s.quotes.USD.price.toFixed(3)))),e.createElement(U,null,a==null?void 0:a.description),e.createElement(x,null,e.createElement(m,null,e.createElement("span",null,"Total Suply:"),e.createElement("span",null,s==null?void 0:s.total_supply)),e.createElement(m,null,e.createElement("span",null,"Max Supply:"),e.createElement("span",null,s==null?void 0:s.max_supply))),e.createElement(W,null,e.createElement(b,{isActive:r!==null},e.createElement(p,{to:`/${n}/chart`},"Chart")),e.createElement(b,{isActive:i!==null},e.createElement(p,{to:`/${n}/price`},"Price"))),e.createElement(E,null,e.createElement(h,{path:"price",element:e.createElement(z,null)}),e.createElement(h,{path:"chart",element:e.createElement(I,{coinId:n!=null?n:""})}))))},K=c.h1`
  font-size: 48px;
  color: ${t=>t.theme.accentColor};
`,J=c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,V=c.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=c.span`
  text-align: center;
  display: block;
`,Y=c.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`,Z=c.ul``,D=c.li`
  background-color: ${t=>t.theme.boxColor};
  color: ${t=>t.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;

  a {
    display: flex;
    align-itmes: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${t=>t.theme.accentColor};
      display: block;
    }
  }
`,ee=()=>{const{isLoading:t,data:o}=u("allCoins",M);return e.createElement(J,null,e.createElement(y,null,e.createElement("title",null,"Coins")),e.createElement(V,null,e.createElement(K,null,"Coins")),t?e.createElement(X,null,"Loading..."):e.createElement(Z,null,o==null?void 0:o.slice(0,100).map(n=>e.createElement(D,{key:n.id},e.createElement(p,{to:`/${n.id}`,state:{name:n.name,id:n.id}},e.createElement(Y,{alt:n.name,src:`https://cryptocurrencyliveprices.com/img/${n.id}.png`}),n.name," \u2192")))))},te=()=>e.createElement(w,null,e.createElement(E,null,e.createElement(h,{path:"/:coinId/*",element:e.createElement(G,null)}),e.createElement(h,{path:"/",element:e.createElement(ee,null)}))),d={textColor:"#2f3136",backgroundColor:"#222f3e",accentColor:"#1dd1a1",boxColor:"white"},ne={textColor:"white",backgroundColor:"white",accentColor:"#1dd1a1",boxColor:"#2f3136"},oe=L`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box: 
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${t=>t.theme.backgroundColor};
    color: ${t=>t.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`,le=c.button`
  position: fixed;
  width: 4rem;
  height: 4rem;
  top: 20px;
  right: 20px;
  background-color: ${t=>t.theme.accentColor};
  color: white;
  border: none;
  border-radius: 50%;
`;function re(){const[t,o]=C.exports.useState(d);return e.createElement(S,{theme:t},e.createElement(le,{onClick:()=>{o(t===d?ne:d),localStorage.setItem("theme",t===d?"dark":"light")}},"Change Theme"),e.createElement(oe,null),e.createElement(te,null),e.createElement(T.exports.ReactQueryDevtools,{initialIsOpen:!1}))}const ae=new q;P.render(e.createElement(C.exports.StrictMode,null,e.createElement(F,{client:ae},e.createElement(re,null))),document.getElementById("root"));export{ce as __vite_legacy_guard};
