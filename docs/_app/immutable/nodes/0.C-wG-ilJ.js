import{a as y,t as k,d as A}from"../chunks/disclose-version.C1eOiaso.js";import{b as C,E,k as L,n as N,a2 as T,h as g,m as q,af as w,ag as R,p as j,f as F,t as M,a as O,s as l,c as n,r as i}from"../chunks/runtime.9jOrjJ9T.js";import{p as v}from"../chunks/index.CXxdRljs.js";function P(t,a,...r){var o=t,e=N,s;C(()=>{e!==(e=a())&&(s&&(T(s),s=null),s=L(()=>e(o,...r)))},E),g&&(o=q)}function _(t,a,r,o){var e=t.__attributes??(t.__attributes={});g&&(e[a]=t.getAttribute(a)),e[a]!==(e[a]=r)&&(r==null?t.removeAttribute(a):typeof r!="string"&&x(t).includes(a)?t[a]=r:t.setAttribute(a,r))}var d=new Map;function x(t){var a=d.get(t.nodeName);if(a)return a;d.set(t.nodeName,a=[]);for(var r,o=t,e=Element.prototype;e!==o;){r=R(o);for(var s in r)r[s].set&&a.push(s);o=w(o)}return a}const z=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:z},Symbol.toStringTag,{value:"Module"}));function H(){localStorage.clear()}function B(){console.log(localStorage)}var D=k('<nav><ul><li><a href="/#" class="svelte-18fqmkr">Home</a></li> <li><a href="/Counter" class="svelte-18fqmkr">Counter</a></li></ul> <div role="group" class="svelte-18fqmkr"><button class="inline" data-placement="left" data-tooltip="See LocalStorage in console output">Log</button> <button class="inline" data-placement="left" data-tooltip="Remove all entries from LocalStorage">Clear</button></div></nav> <main class="container"><!></main>',1);function Q(t,a){j(a,!0);var r=D(),o=F(r),e=n(o),s=n(e),m=n(s);i(s);var c=l(s,2),h=n(c);i(c),i(e);var p=l(e,2),f=n(p);f.__click=[B];var b=l(f,2);b.__click=[H],i(p),i(o);var u=l(o,2),S=n(u);P(S,()=>a.children),i(u),M(()=>{_(m,"aria-current",v.url.pathname==="/"),_(h,"aria-current",v.url.pathname==="/Counter")}),y(t,r),O()}A(["click"]);export{Q as component,K as universal};
