import{o as l,q as _,_ as s,c as d}from"./clientConfigs-5f87582e.js";import{e as m,j as a,d as h,u as E,b as v,h as u,a as y,ab as R,r as V,ac as A,R as L}from"./framework-cb0d5945.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=l({enhance({app:n}){console.log("This is a iframe.")}}),p=[g],f=m(_),O={ce39ad2a:a(()=>s(()=>import("./demo-basic-d4cd2cd5.js"),["assets/demo-basic-d4cd2cd5.js","assets/index-c4ed375c.js","assets/index-4a858df2.js","assets/framework-cb0d5945.js","assets/index-a3f75183.js"])),"1bbe0e37":a(()=>s(()=>import("./demo-iframe-f3c1a5be.js"),["assets/demo-iframe-f3c1a5be.js","assets/framework-cb0d5945.js","assets/index-4a858df2.js","assets/error-76853d47.js"])),"1b4d5de0":a(()=>s(()=>import("./demo-debug-e90765be.js"),["assets/demo-debug-e90765be.js","assets/index-c4ed375c.js","assets/index-4a858df2.js","assets/framework-cb0d5945.js","assets/index-a3f75183.js"])),"7edd5295":a(()=>s(()=>import("./demo-title-f2d9d13f.js"),["assets/demo-title-f2d9d13f.js","assets/index-c4ed375c.js","assets/index-4a858df2.js","assets/framework-cb0d5945.js","assets/index-a3f75183.js"])),"9fbf6338":a(()=>s(()=>import("./demo-desc-fb62b5dd.js"),["assets/demo-desc-fb62b5dd.js","assets/index-c4ed375c.js","assets/index-4a858df2.js","assets/framework-cb0d5945.js","assets/index-a3f75183.js"])),"59e4d1ae":a(()=>s(()=>import("./demo-transform-a3168a54.js"),["assets/demo-transform-a3168a54.js","assets/framework-cb0d5945.js"])),"3e7944d1":a(()=>s(()=>import("./demo-tabs-ef50c90a.js"),["assets/demo-tabs-ef50c90a.js","assets/framework-cb0d5945.js","assets/index-4a858df2.js","assets/error-76853d47.js","assets/index-a3f75183.js"])),"39ea8975":a(()=>s(()=>import("./basic-584c6273.js"),["assets/basic-584c6273.js","assets/framework-cb0d5945.js"]))},b=h({name:"Vuepress",setup(){const n=E(),t=v(()=>O[n.params.name]);return()=>t.value?u(t.value):u("div","404 Not Found")}}),D=()=>y({history:R(V(f.value.base)),routes:[{path:"/:name",component:b}],scrollBehavior:(t,i,r)=>r||(t.hash?{el:t.hash}:{top:0})}),I=async()=>{var i;const n=A({name:"VuepressApp",setup(){var r;for(const e of p)(r=e.setup)==null||r.call(e);return()=>[u(L),...d.concat(p).flatMap(({rootComponents:e=[]})=>e.map(o=>u(o)))]}}),t=D();for(const r of d.concat(p))await((i=r.enhance)==null?void 0:i.call(r,{app:n,router:t,siteData:f}));return n.use(t),{app:n,router:t}};I().then(({app:n,router:t})=>{t.isReady().then(()=>{n.mount("#app")})});