import{w as m,x as D,H as I,y as L,z as p,A as c,B as N,C as O,D as u,E as S,F as H,G as V,I as C,J as M,K as Y,L as P,M as $,p as j,N as E,O as k,b as z,c as B}from"./runtime.BuXBzAlP.js";import{b as F,r as R,h,c as G}from"./disclose-version.DOT5PGYy.js";const J=["touchstart","touchmove"];function K(t){return J.includes(t)}function U(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function W(t,e){return A(t,e)}function X(t,e){m(),e.intro=e.intro??!1;const r=e.target,_=E,l=u;try{for(var s=D(r);s&&(s.nodeType!==8||s.data!==I);)s=L(s);if(!s)throw p;c(!0),N(s),O();const d=A(t,{...e,anchor:s});if(u===null||u.nodeType!==8||u.data!==S)throw H(),p;return c(!1),d}catch(d){if(d===p)return e.recover===!1&&V(),m(),C(r),c(!1),W(t,e);throw d}finally{c(_),N(l)}}const i=new Map;function A(t,{target:e,anchor:r,props:_={},events:l,context:s,intro:d=!0}){m();var v=new Set,y=o=>{for(var a=0;a<o.length;a++){var n=o[a];if(!v.has(n)){v.add(n);var f=K(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(M(F)),R.add(y);var g=void 0,b=Y(()=>{var o=r??e.appendChild(P());return $(()=>{if(s){j({});var a=B;a.c=s}l&&(_.$$events=l),E&&G(o,null),g=t(o,_)||{},E&&(k.nodes_end=u),s&&z()}),()=>{var f;for(var a of v){e.removeEventListener(a,h);var n=i.get(a);--n===0?(document.removeEventListener(a,h),i.delete(a)):i.set(a,n)}R.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(g,b),g}let w=new WeakMap;function Z(t,e){const r=w.get(t);return r?(w.delete(t),r(e)):Promise.resolve()}export{X as h,W as m,U as s,Z as u};