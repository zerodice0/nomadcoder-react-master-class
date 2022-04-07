import{u as d,R as e,s as r,L as u,B as m,a as p,b as s,W as f,c as b,r as h,F as g}from"./vendor.4845b68d.js";function B(){import("data:text/javascript,")}const y=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}};y();const E=()=>{const{coinId:t}=d();return e.createElement("h1",null,"Coin: ",t)},k=r.h1`
  font-size: 48px;
  color: ${t=>t.theme.accentColor};
`,x=r.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,v=r.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=r.ul``,q=r.li`
  background-color: white;
  color: ${t=>t.theme.backgroundColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  transition: color 1s ease-in;

  &:hover {
    a {
      color: ${t=>t.theme.accentColor};
      display: block;
    }
  }
`,w=[{id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:!1,is_active:!0,type:"coin"},{id:"eth-ethereum",name:"Ethereum",symbol:"ETH",rank:2,is_new:!1,is_active:!0,type:"coin"},{id:"hex-hex",name:"HEX",symbol:"HEX",rank:3,is_new:!1,is_active:!0,type:"token"}],L=()=>e.createElement(x,null,e.createElement(v,null,e.createElement(k,null,"Coins")),e.createElement(C,null,w.map(t=>e.createElement(q,{key:t.id},e.createElement(u,{to:`/:${t.id}`},t.name," \u2192"))))),_=()=>e.createElement(m,null,e.createElement(p,null,e.createElement(s,{path:"/:coinId",element:e.createElement(E,null)}),e.createElement(s,{path:"/",element:e.createElement(L,null)}))),R=f`
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;function S(){return e.createElement(e.Fragment,null,e.createElement(R,null),e.createElement(_,null))}const $={textColor:"#c8d6e5",backgroundColor:"#222f3e",accentColor:"#1dd1a1"};b.render(e.createElement(h.exports.StrictMode,null,e.createElement(g,{theme:$},e.createElement(S,null))),document.getElementById("root"));export{B as __vite_legacy_guard};
