import{R as e,s as a,r as c,u as k,a as w,b as f,c as p,L as C,B as L,W as S,d as $,F as q}from"./vendor.79b16a9d.js";function U(){import("data:text/javascript,")}const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function m(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=m(t);fetch(t.href,n)}};P();const R=()=>e.createElement("h1",null,"Chart"),I=()=>e.createElement("h1",null,"Price"),O=a.h1`
  font-size: 48px;
  color: ${o=>o.theme.accentColor};
`,j=a.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,_=a.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,z=a.span`
  text-align: center;
  display: block;
`,h=a.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,u=a.div`
  display: flex;
  flex-direcation: column;
  align-items: center;

  span: first-child {
    font-size: 10px;
    font-wegith: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,F=a.p`
  margin: 20px 0px;
`,M=()=>{const[o,s]=c.exports.useState(!0),l=k().state,{coinId:t}=w(),[n,i]=c.exports.useState(),[r,b]=c.exports.useState();return c.exports.useEffect(()=>{(async()=>{var d,g;const E=await fetch(`https://api.coinpaprika.com/v1/coins/${(d=l==null?void 0:l.id)!=null?d:t}`),y=await fetch(`https://api.coinpaprika.com/v1/tickers/${(g=l==null?void 0:l.id)!=null?g:t}`),x=await E.json(),v=await y.json();b(x),i(v),s(!1)})()},[t]),console.log(t),e.createElement(j,null,e.createElement(_,null,e.createElement(O,null,l!=null&&l.name?l.name:o?"Loading...":r==null?void 0:r.name)),o?e.createElement(z,null,"Loading..."):e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(u,null,e.createElement("span",null,"Rank:"),e.createElement("span",null,r==null?void 0:r.rank)),e.createElement(u,null,e.createElement("span",null,"Symbol:"),e.createElement("span",null,"$",r==null?void 0:r.symbol)),e.createElement(u,null,e.createElement("span",null,"Open Source:"),e.createElement("span",null,r!=null&&r.open_source?"Yes":"No"))),e.createElement(F,null,r==null?void 0:r.description),e.createElement(h,null,e.createElement(u,null,e.createElement("span",null,"Total Suply:"),e.createElement("span",null,n==null?void 0:n.total_supply)),e.createElement(u,null,e.createElement("span",null,"Max Supply:"),e.createElement("span",null,n==null?void 0:n.max_supply))),e.createElement(f,null,e.createElement(p,{path:"price",element:e.createElement(I,null)}),e.createElement(p,{path:"chart",element:e.createElement(R,null)}))))},D=a.h1`
  font-size: 48px;
  color: ${o=>o.theme.accentColor};
`,N=a.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,T=a.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,B=a.span`
  text-align: center;
  display: block;
`,H=a.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`,A=a.ul``,W=a.li`
  background-color: white;
  color: ${o=>o.theme.backgroundColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  transition: color 1s ease-in;

  a {
    display: flex;
    align-itmes: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${o=>o.theme.accentColor};
      display: block;
    }
  }
`,G=()=>{const[o,s]=c.exports.useState([]),[m,l]=c.exports.useState(!0);return c.exports.useEffect(()=>{(async()=>{const n=await(await fetch("https://api.coinpaprika.com/v1/coins")).json();s(n.slice(0,100)),l(!1)})()},[]),e.createElement(N,null,e.createElement(T,null,e.createElement(D,null,"Coins")),m?e.createElement(B,null,"Loading..."):e.createElement(A,null,o.map(t=>e.createElement(W,{key:t.id},e.createElement(C,{to:`/${t.id}`,state:{name:t.name,id:t.id}},e.createElement(H,{alt:t.name,src:`https://cryptocurrencyliveprices.com/img/${t.id}.png`}),t.name," \u2192")))))},K=()=>e.createElement(L,null,e.createElement(f,null,e.createElement(p,{path:"/:coinId/*",element:e.createElement(M,null)}),e.createElement(p,{path:"/",element:e.createElement(G,null)}))),Y=S`
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
    background-color: ${o=>o.theme.backgroundColor};
    color: ${o=>o.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;function J(){return e.createElement(e.Fragment,null,e.createElement(Y,null),e.createElement(K,null))}const Q={textColor:"#c8d6e5",backgroundColor:"#222f3e",accentColor:"#1dd1a1"};$.render(e.createElement(c.exports.StrictMode,null,e.createElement(q,{theme:Q},e.createElement(J,null))),document.getElementById("root"));export{U as __vite_legacy_guard};
