import{s as r,r as s,u as p,a as m,R as t,L as f,B as g,b as h,c as d,W as b,d as y,F as x}from"./vendor.79b16a9d.js";function B(){import("data:text/javascript,")}const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}};E();const k=r.h1`
  font-size: 48px;
  color: ${o=>o.theme.accentColor};
`,v=r.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,L=r.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=r.span`
  text-align: center;
  display: block;
`,w=()=>{const[o,i]=s.exports.useState(!0),a=p().state;return s.exports.useState(),s.exports.useState(),s.exports.useEffect(()=>{(async()=>{const e=await fetch(`https://api.coinpaprika.com/v1/coins/${a.id}`),n=await fetch(`https://api.coinpaprika.com/v1/tickers/${a.id}`),l=await e.json(),u=await n.json();console.log(l),console.log(u),i(!1)})()}),m(),t.createElement(v,null,t.createElement(L,null,t.createElement(k,null,(a==null?void 0:a.name)||"Loading...")),o?t.createElement(C,null,"Loading..."):null)},$=r.h1`
  font-size: 48px;
  color: ${o=>o.theme.accentColor};
`,S=r.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,q=r.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,R=r.span`
  text-align: center;
  display: block;
`,P=r.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`,j=r.ul``,I=r.li`
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
`,O=()=>{const[o,i]=s.exports.useState([]),[c,a]=s.exports.useState(!0);return s.exports.useEffect(()=>{(async()=>{const n=await(await fetch("https://api.coinpaprika.com/v1/coins")).json();i(n.slice(0,100)),a(!1)})()},[]),t.createElement(S,null,t.createElement(q,null,t.createElement($,null,"Coins")),c?t.createElement(R,null,"Loading..."):t.createElement(j,null,o.map(e=>t.createElement(I,{key:e.id},t.createElement(f,{to:`/:${e.id}`,state:{name:e.name,id:e.id}},t.createElement(P,{alt:e.name,src:`https://cryptocurrencyliveprices.com/img/${e.id}.png`}),e.name," \u2192")))))},z=()=>t.createElement(g,null,t.createElement(h,null,t.createElement(d,{path:"/:coinId",element:t.createElement(w,null)}),t.createElement(d,{path:"/",element:t.createElement(O,null)}))),F=b`
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;function M(){return t.createElement(t.Fragment,null,t.createElement(F,null),t.createElement(z,null))}const _={textColor:"#c8d6e5",backgroundColor:"#222f3e",accentColor:"#1dd1a1"};y.render(t.createElement(s.exports.StrictMode,null,t.createElement(x,{theme:_},t.createElement(M,null))),document.getElementById("root"));export{B as __vite_legacy_guard};
