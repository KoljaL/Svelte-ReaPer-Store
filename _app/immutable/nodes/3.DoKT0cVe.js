import{e as o,a as D,t as M}from"../chunks/disclose-version.CDX8MpCH.js";import{i as R}from"../chunks/legacy.JBKJZu-L.js";import{p as q,q as I,u as j,f as w,t as z,a as B,s as e,c as s,r as n}from"../chunks/runtime.Ba6OPkUi.js";import{s as p}from"../chunks/render.B3MqaJus.js";import{s as F,a as b,u as G,b as l}from"../chunks/store.DavXJo3J.js";import{R as H,r as k}from"../chunks/ReaPerStore.C-B338zV.js";import{o as J}from"../chunks/index-client.8PtBJSaj.js";var K=M('<div class="container"><h3>Settings</h3> <p> <button class="svelte-yvk33d">Toggle Theme</button></p> <p> <button class="svelte-yvk33d">Toggle Notifications</button></p></div> <hr> <h3>Persistent Counter</h3> <p> </p> <button class="svelte-yvk33d">Increment</button> <button class="svelte-yvk33d">Decrement</button>',1);function Y(S,$){q($,!1);const f=F(),t=()=>b(i,"$settingsStore",f),a=()=>b(r,"$counterStore",f);J(()=>{document.documentElement.setAttribute("data-theme",t().theme)}),H.setPrefix("myApp:");const r=k("counter",0),i=k("settings",{theme:"light",notifications:!0}),x=()=>G(r,a()),y=()=>l(r,Math.max(0,a()-1));function T(){l(i,{...t(),theme:t().theme==="light"?"dark":"light"}),document.documentElement.setAttribute("data-theme",t().theme)}const A=()=>l(i,{...t(),notifications:!t().notifications});I(()=>t(),()=>{document.documentElement.setAttribute("data-theme",t().theme)}),j(),R();var h=K(),c=w(h),m=e(s(c),2),v=s(m),C=e(v);n(m);var d=e(m,2),g=s(d),E=e(g);n(d),n(c);var u=e(c,6),N=s(u);n(u);var _=e(u,2),P=e(_,2);z(()=>{p(v,`Theme: ${t().theme??""} `),p(g,`Notifications: ${(t().notifications?"Enabled":"Disabled")??""} `),p(N,`Count: ${a()??""}`)}),o("click",C,T),o("click",E,A),o("click",_,x),o("click",P,y),D(S,h),B()}export{Y as component};
