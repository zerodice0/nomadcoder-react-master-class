import{R as e,s as a,r as c,u as S,a as I,b as f,L as d,c as E,d as u,B as P,W as q,e as R,F as M}from"./vendor.7ff1a15c.js";function te(){import("data:text/javascript,")}const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function m(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=m(t);fetch(t.href,o)}};O();const j=()=>e.createElement("h1",null,"Chart"),_=()=>e.createElement("h1",null,"Price"),z=a.h1`
  font-size: 48px;
  color: ${n=>n.theme.accentColor};
`,T=a.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,A=a.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,F=a.span`
  text-align: center;
  display: block;
`,b=a.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,p=a.div`
  display: flex;
  flex-direcation: column;
  align-items: center;

  span: first-child {
    font-size: 10px;
    font-wegith: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,D=a.p`
  margin: 20px 0px;
`,N=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,x=a.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${n=>n.isActive?n.theme.accentColor:n.theme.textColor};
  a {
    display: block;
  }
`,B=()=>{const[n,s]=c.exports.useState(!0),r=S().state,{coinId:t}=I(),[o,i]=c.exports.useState(),[l,y]=c.exports.useState(),v=f("/:coinId/price"),k=f("/:coinId/chart");return c.exports.useEffect(()=>{(async()=>{var g,h;const C=await fetch(`https://api.coinpaprika.com/v1/coins/${(g=r==null?void 0:r.id)!=null?g:t}/`),w=await fetch(`https://api.coinpaprika.com/v1/tickers/${(h=r==null?void 0:r.id)!=null?h:t}/`),$=await C.json(),L=await w.json();y($),i(L),s(!1)})()},[t]),console.log(t),e.createElement(T,null,e.createElement(A,null,e.createElement(z,null,r!=null&&r.name?r.name:n?"Loading...":l==null?void 0:l.name)),n?e.createElement(F,null,"Loading..."):e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement(p,null,e.createElement("span",null,"Rank:"),e.createElement("span",null,l==null?void 0:l.rank)),e.createElement(p,null,e.createElement("span",null,"Symbol:"),e.createElement("span",null,"$",l==null?void 0:l.symbol)),e.createElement(p,null,e.createElement("span",null,"Open Source:"),e.createElement("span",null,l!=null&&l.open_source?"Yes":"No"))),e.createElement(D,null,l==null?void 0:l.description),e.createElement(b,null,e.createElement(p,null,e.createElement("span",null,"Total Suply:"),e.createElement("span",null,o==null?void 0:o.total_supply)),e.createElement(p,null,e.createElement("span",null,"Max Supply:"),e.createElement("span",null,o==null?void 0:o.max_supply))),e.createElement(N,null,e.createElement(x,{isActive:k!==null},e.createElement(d,{to:`/${t}/chart`},"Chart")),e.createElement(x,{isActive:v!==null},e.createElement(d,{to:`/${t}/price`},"Price"))),e.createElement(E,null,e.createElement(u,{path:"price",element:e.createElement(_,null)}),e.createElement(u,{path:"chart",element:e.createElement(j,null)}))))},H=a.h1`
  font-size: 48px;
  color: ${n=>n.theme.accentColor};
`,W=a.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,G=a.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,K=a.span`
  text-align: center;
  display: block;
`,Y=a.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`,J=a.ul``,Q=a.li`
  background-color: white;
  color: ${n=>n.theme.backgroundColor};
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
      color: ${n=>n.theme.accentColor};
      display: block;
    }
  }
`,U=()=>{const[n,s]=c.exports.useState([]),[m,r]=c.exports.useState(!0);return c.exports.useEffect(()=>{(async()=>{const o=await(await fetch("https://api.coinpaprika.com/v1/coins")).json();s(o.slice(0,100)),r(!1)})()},[]),e.createElement(W,null,e.createElement(G,null,e.createElement(H,null,"Coins")),m?e.createElement(K,null,"Loading..."):e.createElement(J,null,n.map(t=>e.createElement(Q,{key:t.id},e.createElement(d,{to:`/${t.id}`,state:{name:t.name,id:t.id}},e.createElement(Y,{alt:t.name,src:`https://cryptocurrencyliveprices.com/img/${t.id}.png`}),t.name," \u2192")))))},V=()=>e.createElement(P,null,e.createElement(E,null,e.createElement(u,{path:"/:coinId/*",element:e.createElement(B,null)}),e.createElement(u,{path:"/",element:e.createElement(U,null)}))),X=q`
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
    background-color: ${n=>n.theme.backgroundColor};
    color: ${n=>n.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;function Z(){return e.createElement(e.Fragment,null,e.createElement(X,null),e.createElement(V,null))}const ee={textColor:"#c8d6e5",backgroundColor:"#222f3e",accentColor:"#1dd1a1"};R.render(e.createElement(c.exports.StrictMode,null,e.createElement(M,{theme:ee},e.createElement(Z,null))),document.getElementById("root"));export{te as __vite_legacy_guard};
