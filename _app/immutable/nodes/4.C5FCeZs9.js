import{e as o,a as y,t as A}from"../chunks/disclose-version.DOT5PGYy.js";import{i as E}from"../chunks/legacy.C4fRPcng.js";import{p as I,t as M,b as j,d as t,e as s,r as a}from"../chunks/runtime.BuXBzAlP.js";import{s as u}from"../chunks/render.BsHusE5W.js";import{s as q,u as w,a as v,b as h}from"../chunks/store.3ayTBQIn.js";import{R as z,r as _}from"../chunks/ReaPerStore.T4YjNwXP.js";var B=A('<div class="container svelte-bdda1v"><h1>Persistent Counter</h1> <p> </p> <button class="svelte-bdda1v">Increment</button> <button class="svelte-bdda1v">Decrement</button> <hr> <h2>Settings</h2> <p> </p> <p> </p> <button class="svelte-bdda1v">Toggle Theme</button> <button class="svelte-bdda1v">Toggle Notifications</button></div>');function O(S,$){I($,!1);const b=q(),n=()=>h(r,"$counterStore",b),e=()=>h(i,"$settingsStore",b);z.setPrefix("myApp:");const r=_("counter",0),i=_("settings",{theme:"light",notifications:!0}),x=()=>w(r,n()),k=()=>v(r,Math.max(0,n()-1)),T=()=>v(i,{...e(),theme:e().theme==="light"?"dark":"light"}),C=()=>v(i,{...e(),notifications:!e().notifications});E();var c=B(),p=t(s(c),2),N=s(p);a(p);var d=t(p,2),g=t(d,2),l=t(g,6),P=s(l);a(l);var m=t(l,2),D=s(m);a(m);var f=t(m,2),R=t(f,2);a(c),M(()=>{u(N,`Count: ${n()??""}`),u(P,`Theme: ${e().theme??""}`),u(D,`Notifications: ${(e().notifications?"Enabled":"Disabled")??""}`)}),o("click",d,x),o("click",g,k),o("click",f,T),o("click",R,C),y(S,c),j()}export{O as component};
