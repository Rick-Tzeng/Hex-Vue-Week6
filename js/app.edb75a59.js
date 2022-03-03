(function(){"use strict";var e={6937:function(e,n,t){var r=t(9242),o=(t(8937),t(6265)),i=t.n(o),a=t(6423),u=t(3752),c=t.n(u),f=t(1373),d=t(3396);function s(e,n){const t=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(t)}var l=t(89);const p={},h=(0,l.Z)(p,[["render",s]]);var m=h,v=t(678);const b=[{path:"/",name:"前台",component:()=>t.e(589).then(t.bind(t,4589)),children:[{path:"",name:"首頁",component:()=>t.e(374).then(t.bind(t,5374))},{path:"about",name:"關於我們",component:()=>t.e(174).then(t.bind(t,3174))},{path:"allProducts",name:"相關產品",component:()=>t.e(366).then(t.bind(t,4366))},{path:"product/:id",name:"單一產品內容",component:()=>t.e(675).then(t.bind(t,1675))},{path:"cart",name:"我的購物車",component:()=>t.e(113).then(t.bind(t,3113))}]},{path:"/login",name:"登入頁面",component:()=>t.e(818).then(t.bind(t,7818))},{path:"/admin",name:"後台",component:()=>t.e(619).then(t.bind(t,6619)),children:[{path:"allProducts",name:"產品列表",component:()=>t.e(943).then(t.bind(t,943))},{path:"orders",name:"客戶訂單",component:()=>t.e(182).then(t.bind(t,6182))}]},{path:"/:pathMatch(.*)*",name:"404頁面",component:()=>t.e(169).then(t.bind(t,6169))},{path:"/admin/:pathMatch(.*)*",name:"重新導向",redirect:{name:"後台"}}],g=(0,v.p7)({history:(0,v.r5)(),routes:b,linkExactActiveClass:"activated"});var y=g;const w=(0,r.ri)(m);w.config.globalProperties.$mitter=(0,f.Z)(),w.use(a.Z,i()),w.use(c()),w.use(y),w.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{113:"40d1fe24",169:"fb6b79a1",174:"726d9af4",182:"5f789cd5",366:"3a0f562f",374:"c10a0f5f",589:"dc077010",619:"dee05d36",675:"d0e00287",818:"429c8f8f",943:"95807ea4"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{113:"c6160643",169:"389fa0b2",366:"c6160643",374:"642fc210",589:"ad888242",619:"a915b1c8",675:"c6160643"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="homework:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Hex-Vue-Week6/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={113:1,169:1,366:1,374:1,589:1,619:1,675:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var d=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkhomework"]=self["webpackChunkhomework"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6937)}));r=t.O(r)})();
//# sourceMappingURL=app.edb75a59.js.map