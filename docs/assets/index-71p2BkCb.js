var Qe=Object.defineProperty;var Ze=(t,e,n)=>e in t?Qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ce=(t,e,n)=>(Ze(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function $(){}const Je=t=>t;function pe(t,e){for(const n in e)t[n]=e[n];return t}function Ae(t){return t()}function $e(){return Object.create(null)}function I(t){t.forEach(Ae)}function V(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function we(t,e){return t===e?!0:(ee||(ee=document.createElement("a")),ee.href=e,t===ee.href)}function et(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null){for(const r of e)r(void 0);return $}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(t,e,n,r){if(t){const i=Te(t,e,n,r);return t[0](i)}}function Te(t,e,n,r){return t[1]&&r?pe(n.ctx.slice(),t[1](r(e))):n.ctx}function Ne(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],u=Math.max(e.dirty.length,i.length);for(let s=0;s<u;s+=1)l[s]=e.dirty[s]|i[s];return l}return e.dirty|i}return e.dirty}function Pe(t,e,n,r,i,l){if(i){const u=Te(e,n,r,l);t.p(u,i)}}function Re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function nt(t){return t&&V(t.destroy)?t.destroy:$}const qe=typeof window<"u";let rt=qe?()=>window.performance.now():()=>Date.now(),he=qe?t=>requestAnimationFrame(t):$;const U=new Set;function De(t){U.forEach(e=>{e.c(t)||(U.delete(e),e.f())}),U.size!==0&&he(De)}function st(t){let e;return U.size===0&&he(De),{promise:new Promise(n=>{U.add(e={c:t,f:n})}),abort(){U.delete(e)}}}function _(t,e){t.appendChild(e)}function Fe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function it(t){const e=b("style");return e.textContent="/* empty */",lt(Fe(t),e),e.sheet}function lt(t,e){return _(t.head||t,e),e.sheet}function E(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function ge(t){return document.createTextNode(t)}function M(){return ge(" ")}function oe(){return ge("")}function We(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function at(t,e){e=""+e,t.data!==e&&(t.data=e)}function ut(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ie(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ne(t,e){return new t(e)}const re=new Map;let se=0;function ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:it(e),rules:{}};return re.set(t,n),n}function ye(t,e,n,r,i,l,u,s=0){const o=16.666/r;let a=`{
`;for(let z=0;z<=1;z+=o){const O=e+(n-e)*l(z);a+=z*100+`%{${u(O,1-O)}}
`}const c=a+`100% {${u(n,1-n)}}
}`,f=`__svelte_${ct(c)}_${s}`,p=Fe(t),{stylesheet:S,rules:d}=re.get(p)||ft(p,t);d[f]||(d[f]=!0,S.insertRule(`@keyframes ${f} ${c}`,S.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${f} ${r}ms linear ${i}ms 1 both`,se+=1,f}function dt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),se-=i,se||mt())}function mt(){he(()=>{se||(re.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&x(e)}),re.clear())})}let Z;function Q(t){Z=t}function _e(){if(!Z)throw new Error("Function called outside component initialization");return Z}function pt(t){_e().$$.after_update.push(t)}function ht(t){_e().$$.on_destroy.push(t)}function gt(){const t=_e();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=Ie(e,n,{cancelable:r});return i.slice().forEach(u=>{u.call(t,l)}),!l.defaultPrevented}return!0}}function ve(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const X=[],xe=[];let Y=[];const ke=[],Ke=Promise.resolve();let me=!1;function Be(){me||(me=!0,Ke.then(Xe))}function _t(){return Be(),Ke}function J(t){Y.push(t)}const fe=new Set;let K=0;function Xe(){if(K!==0)return;const t=Z;do{try{for(;K<X.length;){const e=X[K];K++,Q(e),bt(e.$$)}}catch(e){throw X.length=0,K=0,e}for(Q(null),X.length=0,K=0;xe.length;)xe.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];fe.has(n)||(fe.add(n),n())}Y.length=0}while(X.length);for(;ke.length;)ke.pop()();me=!1,fe.clear(),Q(t)}function bt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function $t(t){const e=[],n=[];Y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Y=e}let G;function wt(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function de(t,e,n){t.dispatchEvent(Ie(`${e?"intro":"outro"}${n}`))}const te=new Set;let D;function ae(){D={r:0,c:[],p:D}}function ue(){D.r||I(D.c),D=D.p}function v(t,e){t&&t.i&&(te.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(te.has(t))return;te.add(t),D.c.push(()=>{te.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const yt={duration:0};function ze(t,e,n,r){let l=e(t,n,{direction:"both"}),u=r?0:1,s=null,o=null,a=null,c;function f(){a&&dt(t,a)}function p(d,w){const z=d.b-u;return w*=Math.abs(z),{a:u,b:d.b,d:z,duration:w,start:d.start,end:d.start+w,group:d.group}}function S(d){const{delay:w=0,duration:z=300,easing:O=Je,tick:q=$,css:F}=l||yt,y={start:rt()+w,b:d};d||(y.group=D,D.r+=1),"inert"in t&&(d?c!==void 0&&(t.inert=c):(c=t.inert,t.inert=!0)),s||o?o=y:(F&&(f(),a=ye(t,u,d,z,w,O,F)),d&&q(0,1),s=p(y,z),J(()=>de(t,d,"start")),st(h=>{if(o&&h>o.start&&(s=p(o,z),o=null,de(t,s.b,"start"),F&&(f(),a=ye(t,u,s.b,s.duration,0,O,l.css))),s){if(h>=s.end)q(u=s.b,1-u),de(t,s.b,"end"),o||(s.b?f():--s.group.r||I(s.group.c)),s=null;else if(h>=s.start){const m=h-s.start;u=s.a+s.d*O(m/s.duration),q(u,1-u)}}return!!(s||o)}))}return{run(d){V(l)?wt().then(()=>{l=l({direction:d?"in":"out"}),S(d)}):S(d)},end(){f(),s=o=null}}}function ie(t,e){const n={},r={},i={$$scope:1};let l=t.length;for(;l--;){const u=t[l],s=e[l];if(s){for(const o in u)o in s||(r[o]=1);for(const o in s)i[o]||(n[o]=s[o],i[o]=1);t[l]=s}else for(const o in u)i[o]=1}for(const u in r)u in n||(n[u]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function H(t){t&&t.c()}function j(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),J(()=>{const l=t.$$.on_mount.map(Ae).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...l):I(l),t.$$.on_mount=[]}),i.forEach(J)}function L(t,e){const n=t.$$;n.fragment!==null&&($t(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(X.push(t),Be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(t,e,n,r,i,l,u=null,s=[-1]){const o=Z;Q(t);const a=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:i,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:$e(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};u&&u(a.root);let c=!1;if(a.ctx=n?n(t,e.props||{},(f,p,...S)=>{const d=S.length?S[0]:p;return a.ctx&&i(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),c&&vt(t,f)),p}):[],a.update(),c=!0,I(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const f=ot(e.target);a.fragment&&a.fragment.l(f),f.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&v(t.$$.fragment),j(t,e.target,e.anchor),Xe()}Q(o)}class N{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){L(this,1),this.$destroy=$}$on(e,n){if(!V(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xt);const B=[];function Ue(t,e){return{subscribe:Ye(t,e).subscribe}}function Ye(t,e=$){let n;const r=new Set;function i(s){if(A(t,s)&&(t=s,n)){const o=!B.length;for(const a of r)a[1](),B.push(a,t);if(o){for(let a=0;a<B.length;a+=2)B[a][0](B[a+1]);B.length=0}}}function l(s){i(s(t))}function u(s,o=$){const a=[s,o];return r.add(a),r.size===1&&(n=e(i,l)||$),s(t),()=>{r.delete(a),r.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:u}}function Ve(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return Ue(n,(u,s)=>{let o=!1;const a=[];let c=0,f=$;const p=()=>{if(c)return;f();const d=e(r?a[0]:a,u,s);l?u(d):f=V(d)?d:$},S=i.map((d,w)=>tt(d,z=>{a[w]=z,c&=~(1<<w),o&&p()},()=>{c|=1<<w}));return o=!0,p(),function(){I(S),f(),o=!1}})}function kt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,l,u=[],s="",o=t.split("/");for(o[0]||o.shift();i=o.shift();)n=i[0],n==="*"?(u.push("wild"),s+="/(.*)"):n===":"?(r=i.indexOf("?",1),l=i.indexOf(".",1),u.push(i.substring(1,~r?r:~l?l:i.length)),s+=~r&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(s+=(~r?"?":"")+"\\"+i.substring(l))):s+="/"+i;return{keys:u,pattern:new RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}}function zt(t){let e,n,r;const i=[t[2]];var l=t[0];function u(s,o){let a={};if(o!==void 0&&o&4)a=ie(i,[le(s[2])]);else for(let c=0;c<i.length;c+=1)a=pe(a,i[c]);return{props:a}}return l&&(e=ne(l,u(t)),e.$on("routeEvent",t[7])),{c(){e&&H(e.$$.fragment),n=oe()},m(s,o){e&&j(e,s,o),E(s,n,o),r=!0},p(s,o){if(o&1&&l!==(l=s[0])){if(e){ae();const a=e;k(a.$$.fragment,1,0,()=>{L(a,1)}),ue()}l?(e=ne(l,u(s,o)),e.$on("routeEvent",s[7]),H(e.$$.fragment),v(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const a=o&4?ie(i,[le(s[2])]):{};e.$set(a)}},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&k(e.$$.fragment,s),r=!1},d(s){s&&x(n),e&&L(e,s)}}}function Et(t){let e,n,r;const i=[{params:t[1]},t[2]];var l=t[0];function u(s,o){let a={};if(o!==void 0&&o&6)a=ie(i,[o&2&&{params:s[1]},o&4&&le(s[2])]);else for(let c=0;c<i.length;c+=1)a=pe(a,i[c]);return{props:a}}return l&&(e=ne(l,u(t)),e.$on("routeEvent",t[6])),{c(){e&&H(e.$$.fragment),n=oe()},m(s,o){e&&j(e,s,o),E(s,n,o),r=!0},p(s,o){if(o&1&&l!==(l=s[0])){if(e){ae();const a=e;k(a.$$.fragment,1,0,()=>{L(a,1)}),ue()}l?(e=ne(l,u(s,o)),e.$on("routeEvent",s[6]),H(e.$$.fragment),v(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const a=o&6?ie(i,[o&2&&{params:s[1]},o&4&&le(s[2])]):{};e.$set(a)}},i(s){r||(e&&v(e.$$.fragment,s),r=!0)},o(s){e&&k(e.$$.fragment,s),r=!1},d(s){s&&x(n),e&&L(e,s)}}}function St(t){let e,n,r,i;const l=[Et,zt],u=[];function s(o,a){return o[1]?0:1}return e=s(t),n=u[e]=l[e](t),{c(){n.c(),r=oe()},m(o,a){u[e].m(o,a),E(o,r,a),i=!0},p(o,[a]){let c=e;e=s(o),e===c?u[e].p(o,a):(ae(),k(u[c],1,1,()=>{u[c]=null}),ue(),n=u[e],n?n.p(o,a):(n=u[e]=l[e](o),n.c()),v(n,1),n.m(r.parentNode,r))},i(o){i||(v(n),i=!0)},o(o){k(n),i=!1},d(o){o&&x(r),u[e].d(o)}}}function Ee(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const be=Ue(null,function(e){e(Ee());const n=()=>{e(Ee())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Ve(be,t=>t.location);Ve(be,t=>t.querystring);const Se=Ye(void 0);function jt(t,e){if(e=Le(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return je(t,e),{update(n){n=Le(n),je(t,n)}}}function Lt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function je(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||Mt(r.currentTarget.getAttribute("href"))})}function Le(t){return t&&typeof t=="string"?{href:t}:t||{}}function Mt(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Ht(t,e,n){let{routes:r={}}=e,{prefix:i=""}=e,{restoreScrollState:l=!1}=e;class u{constructor(h,m){if(!m||typeof m!="function"&&(typeof m!="object"||m._sveltesparouter!==!0))throw Error("Invalid component object");if(!h||typeof h=="string"&&(h.length<1||h.charAt(0)!="/"&&h.charAt(0)!="*")||typeof h=="object"&&!(h instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:P,keys:C}=kt(h);this.path=h,typeof m=="object"&&m._sveltesparouter===!0?(this.component=m.component,this.conditions=m.conditions||[],this.userData=m.userData,this.props=m.props||{}):(this.component=()=>Promise.resolve(m),this.conditions=[],this.props={}),this._pattern=P,this._keys=C}match(h){if(i){if(typeof i=="string")if(h.startsWith(i))h=h.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const W=h.match(i);if(W&&W[0])h=h.substr(W[0].length)||"/";else return null}}const m=this._pattern.exec(h);if(m===null)return null;if(this._keys===!1)return m;const P={};let C=0;for(;C<this._keys.length;){try{P[this._keys[C]]=decodeURIComponent(m[C+1]||"")||null}catch{P[this._keys[C]]=null}C++}return P}async checkConditions(h){for(let m=0;m<this.conditions.length;m++)if(!await this.conditions[m](h))return!1;return!0}}const s=[];r instanceof Map?r.forEach((y,h)=>{s.push(new u(h,y))}):Object.keys(r).forEach(y=>{s.push(new u(y,r[y]))});let o=null,a=null,c={};const f=gt();async function p(y,h){await _t(),f(y,h)}let S=null,d=null;l&&(d=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?S=y.state:S=null},window.addEventListener("popstate",d),pt(()=>{Lt(S)}));let w=null,z=null;const O=be.subscribe(async y=>{w=y;let h=0;for(;h<s.length;){const m=s[h].match(y.location);if(!m){h++;continue}const P={route:s[h].path,location:y.location,querystring:y.querystring,userData:s[h].userData,params:m&&typeof m=="object"&&Object.keys(m).length?m:null};if(!await s[h].checkConditions(P)){n(0,o=null),z=null,p("conditionsFailed",P);return}p("routeLoading",Object.assign({},P));const C=s[h].component;if(z!=C){C.loading?(n(0,o=C.loading),z=C,n(1,a=C.loadingParams),n(2,c={}),p("routeLoaded",Object.assign({},P,{component:o,name:o.name,params:a}))):(n(0,o=null),z=null);const W=await C();if(y!=w)return;n(0,o=W&&W.default||W),z=C}m&&typeof m=="object"&&Object.keys(m).length?n(1,a=m):n(1,a=null),n(2,c=s[h].props),p("routeLoaded",Object.assign({},P,{component:o,name:o.name,params:a})).then(()=>{Se.set(a)});return}n(0,o=null),z=null,Se.set(void 0)});ht(()=>{O(),d&&window.removeEventListener("popstate",d)});function q(y){ve.call(this,t,y)}function F(y){ve.call(this,t,y)}return t.$$set=y=>{"routes"in y&&n(3,r=y.routes),"prefix"in y&&n(4,i=y.prefix),"restoreScrollState"in y&&n(5,l=y.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,a,c,r,i,l,q,F]}class Ot extends N{constructor(e){super(),T(this,e,Ht,St,A,{routes:3,prefix:4,restoreScrollState:5})}}const At="/webmen/assets/ibokebap-hDk5lSsm.webp",Ct="/webmen/assets/menu1-cbpqzX1C.webp";function Tt(t){let e,n,r;const i=t[2].default,l=Ce(i,t,t[1],null);return{c(){e=b("div"),l&&l.c(),g(e,"class",n="flex flex-col md:flex-row relative bg-slate-100 p-10 my-24 border-y-4 rounded-xl border-orange-800 border-opacity-20 shadow-2xl "+t[0])},m(u,s){E(u,e,s),l&&l.m(e,null),r=!0},p(u,[s]){l&&l.p&&(!r||s&2)&&Pe(l,i,u,u[1],r?Ne(i,u[1],s,null):Re(u[1]),null),(!r||s&1&&n!==(n="flex flex-col md:flex-row relative bg-slate-100 p-10 my-24 border-y-4 rounded-xl border-orange-800 border-opacity-20 shadow-2xl "+u[0]))&&g(e,"class",n)},i(u){r||(v(l,u),r=!0)},o(u){k(l,u),r=!1},d(u){u&&x(e),l&&l.d(u)}}}function Nt(t,e,n){let{$$slots:r={},$$scope:i}=e,{extraClass:l=""}=e;return t.$$set=u=>{"extraClass"in u&&n(0,l=u.extraClass),"$$scope"in u&&n(1,i=u.$$scope)},[l,i,r]}class Ge extends N{constructor(e){super(),T(this,e,Nt,Tt,A,{extraClass:0})}}function Pt(t){let e,n,r,i,l,u,s,o,a,c;return{c(){e=b("div"),e.innerHTML='<div><p class="text-xl font-bold text-opacity-90">İşletmeniz için en iyi</p></div> <div><h1 class="text-3xl md:text-6xl lg:text-7xl my-3">Web Çözümleri</h1></div> <div><p class="text-xl text-opacity-90 text-end">İşletmenizin ihtiyaçlarına göre özelleştirilmiş profesyonel web çözümlerini <b>2.500₺&#39;den başlayan fiyatlarla</b> edinin!</p></div> <div class="w-fit px-8 py-1 my-4 mx-auto md:ml-7 rounded-3xl border-4 border-orange-600 hover:bg-orange-50 transition-colors duration-150"><a class="no-underline h-full w-full align-middle font-rb font-bold text-lg" href="#">Fiyatlar</a></div>',n=M(),r=b("div"),i=b("div"),l=b("img"),s=M(),o=b("div"),a=b("img"),g(e,"class","flex flex-col w-full md:w-2/5 justify-center font-rb h-full text-center"),g(l,"class","h-full border-y-4 border-slate-400 rounded-lg"),we(l.src,u=At)||g(l,"src",u),g(l,"alt","ibokebap"),g(i,"class",Me+" z-10 shadow-2xl waveAnim"),g(a,"class","h-full border-y-4 border-slate-400 rounded-lg -translate-x-6 translate-y-6"),we(a.src,c=Ct)||g(a,"src",c),g(a,"alt","menu1"),g(o,"class",Me+" waveAnim"),ut(o,"animation-delay","1s"),g(r,"id","thediv"),g(r,"class","w-full md:w-3/5 flex flex-row justify-center align-middle items-center h-full")},m(f,p){E(f,e,p),E(f,n,p),E(f,r,p),_(r,i),_(i,l),_(r,s),_(r,o),_(o,a)},p:$,d(f){f&&(x(e),x(n),x(r))}}}function Rt(t){let e,n;return e=new Ge({props:{extraClass:"h-[500px] md:h-96",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(r,i){j(e,r,i),n=!0},p(r,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:r}),e.$set(l)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}const Me="h-4/5";class qt extends N{constructor(e){super(),T(this,e,null,Rt,A,{})}}const Dt="/webmen/assets/smilingMan-PPZdpsXV.webp";function Ft(t){let e;return{c(){e=b("table"),e.innerHTML='<thead><tr><th class="invisible border-none">Özellik</th> <th class="!bg-orange-100">QR Menu</th> <th class="!bg-orange-200 underline">Kurumsal Website</th> <th class="!bg-yellow-500 underline decoration-double">Kurumsal Dinamik Website</th></tr> <tr class="text-sm [&amp;&gt;*]:max-w-xs"><th class="invisible border-none">Özellik</th> <th class="!bg-orange-100">İşletmeniz için düşük maliyetli yüksek kalite QR menü</th> <th class="!bg-orange-200">Kurumunuzun internet varlığını sağlayacak harika web tasarımları</th> <th class="!bg-yellow-500">Kurumunuzun bütün web ihtiyaçlarına karşılık gelecek sunucu destekli uygun web sistemleri</th></tr></thead> <tbody><tr><td>Özel Domain</td> <td>var</td> <td>var</td> <td>var</td></tr> <tr><td>Çoklu Sayfa</td> <td>yok</td> <td>4</td> <td>5</td></tr> <tr><td>7/24 Destek</td> <td>yok</td> <td>yok</td> <td>var</td></tr> <tr><td>Sunucu Hizmeti</td> <td>yok</td> <td>yok</td> <td>var</td></tr></tbody>',g(e,"class","table-fixed border-collapse m-0 md:m-8 text-center w-full md:w-auto font-rb text-sm md:text-lg md:shadow-2xl md:translate-x-4 [&>*>*>*]:border-4 [&>*>*>*]:px-4 [&>*>*>*]:py-2 [&>*>*>*]:border-black [&>*>*>*]:bg-white ")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class Wt extends N{constructor(e){super(),T(this,e,null,Ft,A,{})}}function It(t){let e,n,r,i,l,u,s,o,a,c;return l=new Wt({}),{c(){e=b("div"),n=b("div"),n.innerHTML=`<div class="bg-white bg-opacity-80 p-1 rounded-md md:bg-opacity-0 w-1/2"><p class="text-xl text-opacity-90 text-center"><b>İşletmenizin bütün ihtiyaçlarını karşılayacak ve sektörünüze uygun</b>
                web çözümlerimiz ile işinizi bir adım daha öteye taşımak için <b class="text-2xl opacity-100">beklemeyin!</b></p></div>`,r=M(),i=b("div"),H(l.$$.fragment),u=M(),s=b("div"),s.innerHTML="",o=M(),a=b("div"),a.innerHTML=`<img class="h-full ml-auto opacity-90" src="${Dt}" alt="a smiling Man"/>`,g(n,"class","flex flex-row justify-center w-full z-10"),g(i,"class","mx-auto w-full md:-translate-x-10"),g(e,"class","flex flex-col w-full md:w-3/4 z-10 justify-start font-rb h-full"),g(s,"class","h-full w-1/4 z-10"),g(a,"class","h-full w-full absolute left-0 top-0")},m(f,p){E(f,e,p),_(e,n),_(e,r),_(e,i),j(l,i,null),E(f,u,p),E(f,s,p),E(f,o,p),E(f,a,p),c=!0},p:$,i(f){c||(v(l.$$.fragment,f),c=!0)},o(f){k(l.$$.fragment,f),c=!1},d(f){f&&(x(e),x(u),x(s),x(o),x(a)),L(l)}}}function Kt(t){let e,n;return e=new Ge({props:{extraClass:"max-h-min px-0",$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(r,i){j(e,r,i),n=!0},p(r,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:r}),e.$set(l)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}class Bt extends N{constructor(e){super(),T(this,e,null,Kt,A,{})}}function Xt(t){let e;return{c(){e=b("div"),e.innerHTML='<div class="w-[45%]"></div> <div class="w-[2%] rounded-full !border-4 aspect-square"></div> <div class="w-[45%]"></div>',g(e,"class","w-full flex flex-row justify-between items-center opacity-60 [&>*]:border-t-4 [&>*]:border-orange-700 ")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class Ut extends N{constructor(e){super(),T(this,e,null,Xt,A,{})}}function Yt(t){let e,n,r,i,l,u,s;return n=new qt({}),i=new Ut({}),u=new Bt({}),{c(){e=b("div"),H(n.$$.fragment),r=M(),H(i.$$.fragment),l=M(),H(u.$$.fragment),g(e,"class","min-h-screen")},m(o,a){E(o,e,a),j(n,e,null),_(e,r),j(i,e,null),_(e,l),j(u,e,null),s=!0},p:$,i(o){s||(v(n.$$.fragment,o),v(i.$$.fragment,o),v(u.$$.fragment,o),s=!0)},o(o){k(n.$$.fragment,o),k(i.$$.fragment,o),k(u.$$.fragment,o),s=!1},d(o){o&&x(e),L(n),L(i),L(u)}}}class Vt extends N{constructor(e){super(),T(this,e,null,Yt,A,{})}}function Gt(t){let e;return{c(){e=b("div"),e.innerHTML="<br/><br/><br/><br/>not found",g(e,"class","min-h-screen")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class Qt extends N{constructor(e){super(),T(this,e,null,Gt,A,{})}}function Zt(t){let e;return{c(){e=b("div"),g(e,"class","min-h-screen")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class Jt extends N{constructor(e){super(),T(this,e,null,Zt,A,{})}}function en(t){let e;return{c(){e=b("div"),g(e,"class","min-h-screen")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class tn extends N{constructor(e){super(),T(this,e,null,en,A,{})}}function nn(t){let e;return{c(){e=b("div"),g(e,"class","min-h-screen")},m(n,r){E(n,e,r)},p:$,i:$,o:$,d(n){n&&x(e)}}}class rn extends N{constructor(e){super(),T(this,e,null,nn,A,{})}}const sn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%206H20M4%2012H20M4%2018H20'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function ln(t){let e,n,r,i,l;return{c(){e=b("li"),n=b("a"),r=ge(t[0]),g(n,"href",t[1]),g(n,"class","block text-center p-3 no-underline hover:shadow-2xl transition-shadow duration-300 font-roboto font-bold"),g(e,"class","inline-block m-0 p-0")},m(u,s){E(u,e,s),_(e,n),_(n,r),i||(l=[We(n,"click",function(){V(t[2])&&t[2].apply(this,arguments)}),nt(jt.call(null,n))],i=!0)},p(u,[s]){t=u,s&1&&at(r,t[0]),s&2&&g(n,"href",t[1])},i:$,o:$,d(u){u&&x(e),i=!1,I(l)}}}function on(t,e,n){let{title:r="button"}=e,{page:i}=e,{onclick:l=()=>{}}=e;return t.$$set=u=>{"title"in u&&n(0,r=u.title),"page"in u&&n(1,i=u.page),"onclick"in u&&n(2,l=u.onclick)},[r,i,l]}class R extends N{constructor(e){super(),T(this,e,on,ln,A,{title:0,page:1,onclick:2})}}function an(t){const e=t-1;return e*e*e+1}function He(t,{delay:e=0,duration:n=400,easing:r=an,axis:i="y"}={}){const l=getComputedStyle(t),u=+l.opacity,s=i==="y"?"height":"width",o=parseFloat(l[s]),a=i==="y"?["top","bottom"]:["left","right"],c=a.map(O=>`${O[0].toUpperCase()}${O.slice(1)}`),f=parseFloat(l[`padding${c[0]}`]),p=parseFloat(l[`padding${c[1]}`]),S=parseFloat(l[`margin${c[0]}`]),d=parseFloat(l[`margin${c[1]}`]),w=parseFloat(l[`border${c[0]}Width`]),z=parseFloat(l[`border${c[1]}Width`]);return{delay:e,duration:n,easing:r,css:O=>`overflow: hidden;opacity: ${Math.min(O*20,1)*u};${s}: ${O*o}px;padding-${a[0]}: ${O*f}px;padding-${a[1]}: ${O*p}px;margin-${a[0]}: ${O*S}px;margin-${a[1]}: ${O*d}px;border-${a[0]}-width: ${O*w}px;border-${a[1]}-width: ${O*z}px;`}}function un(t){let e,n,r;return{c(){e=b("div"),e.innerHTML=`<img src="${sn}" alt="menu icon"/>`,g(e,"class","m-0 p-0 fixed top-0 right-0 z-50 w-1/6 rounded-l-lg aspect-square bg-orange-600")},m(i,l){E(i,e,l),n||(r=We(e,"click",t[2]),n=!0)},p:$,i:$,o:$,d(i){i&&x(e),n=!1,r()}}}function cn(t){let e,n,r,i,l;const u=t[4].default,s=Ce(u,t,t[3],null);return{c(){e=b("div"),n=b("div"),n.innerHTML='<h1 class="text-xl text-center font-bold">webmen</h1>',r=M(),i=b("ul"),s&&s.c(),g(n,"class","flex flex-col basis-1/4 justify-center px-4"),g(i,"class","list-none m-0 p-0 py-1 overflow-hidden w-full flex flex-row basis-3/4 justify-center space-x-5 max-h-min relative"),g(e,"class","m-0 p-0 sticky transition top-0 z-50 flex flex-row shadow-xl bg-slate-50 border-b-4 border-orange-600")},m(o,a){E(o,e,a),_(e,n),_(e,r),_(e,i),s&&s.m(i,null),l=!0},p(o,a){s&&s.p&&(!l||a&8)&&Pe(s,u,o,o[3],l?Ne(u,o[3],a,null):Re(o[3]),null)},i(o){l||(v(s,o),l=!0)},o(o){k(s,o),l=!1},d(o){o&&x(e),s&&s.d(o)}}}function Oe(t){let e,n,r,i,l,u,s,o,a,c,f,p,S,d;return u=new R({props:{title:"Anasayfa",page:"/"}}),o=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),c=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),p=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){e=b("div"),n=b("div"),r=b("ul"),i=b("li"),i.innerHTML='<h1 class="underline">Menu</h1>',l=M(),H(u.$$.fragment),s=M(),H(o.$$.fragment),a=M(),H(c.$$.fragment),f=M(),H(p.$$.fragment),g(r,"class","max-w-min text-center m-auto"),g(e,"class","fixed top-0 right-0 h-screen w-[75vw] bg-orange-300 z-20")},m(w,z){E(w,e,z),_(e,n),_(n,r),_(r,i),_(r,l),j(u,r,null),_(r,s),j(o,r,null),_(r,a),j(c,r,null),_(r,f),j(p,r,null),d=!0},i(w){d||(v(u.$$.fragment,w),v(o.$$.fragment,w),v(c.$$.fragment,w),v(p.$$.fragment,w),w&&J(()=>{d&&(S||(S=ze(e,He,{axis:"x"},!0)),S.run(1))}),d=!0)},o(w){k(u.$$.fragment,w),k(o.$$.fragment,w),k(c.$$.fragment,w),k(p.$$.fragment,w),w&&(S||(S=ze(e,He,{axis:"x"},!1)),S.run(0)),d=!1},d(w){w&&x(e),L(u),L(o),L(c),L(p),w&&S&&S.end()}}}function fn(t){let e,n,r,i,l;const u=[cn,un],s=[];function o(c,f){return c[1]?1:0}e=o(t),n=s[e]=u[e](t);let a=t[0]&&Oe();return{c(){n.c(),r=M(),a&&a.c(),i=oe()},m(c,f){s[e].m(c,f),E(c,r,f),a&&a.m(c,f),E(c,i,f),l=!0},p(c,[f]){n.p(c,f),c[0]?a?f&1&&v(a,1):(a=Oe(),a.c(),v(a,1),a.m(i.parentNode,i)):a&&(ae(),k(a,1,1,()=>{a=null}),ue())},i(c){l||(v(n),v(a),l=!0)},o(c){k(n),k(a),l=!1},d(c){c&&(x(r),x(i)),s[e].d(c),a&&a.d(c)}}}function dn(t,e,n){let{$$slots:r={},$$scope:i}=e;const u=window.innerWidth<768;let s=!1;function o(){n(0,s=!s)}return t.$$set=a=>{"$$scope"in a&&n(3,i=a.$$scope)},[s,u,o,i,r]}class mn extends N{constructor(e){super(),T(this,e,dn,fn,A,{})}}function pn(t){let e,n,r,i,l,u,s,o,a,c,f,p,S,d,w,z,O,q,F,y,h;return c=new R({props:{title:"Anasayfa",page:"/"}}),p=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),d=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),z=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){e=b("footer"),n=b("div"),r=b("div"),i=b("div"),i.innerHTML="<p>webmen, İstanbul merkezli kurumsal web hizmetleri sunan bir tasarım merkezi ve ajanstır.</p>",l=M(),u=b("div"),s=b("ul"),o=b("li"),o.innerHTML='<h1 class="underline">Menu</h1>',a=M(),H(c.$$.fragment),f=M(),H(p.$$.fragment),S=M(),H(d.$$.fragment),w=M(),H(z.$$.fragment),O=M(),q=b("div"),q.innerHTML='<p class="font-rb text-sm">Bu Websitesi H. Bumin Y. Tarafından webmen Web Şirketi için tasarlanmış ve üretilmiştir.</p>',F=M(),y=b("div"),y.innerHTML="",g(s,"class","w-full md:max-w-min text-center border-2 border-white rounded-md bg-slate-500"),g(u,"class","w-full"),g(q,"class","mt-auto"),g(r,"class","h-[47%] md:h-full p-6 w-full md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start text-white"),g(y,"class","h-[47%] md:h-full p-6 w-full md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start"),g(n,"class","h-full w-full top-0 left-0 flex flex-col md:flex-row p-4 justify-around bg-slate-500"),g(e,"class","w-full h-full md:h-1/2 p-0 left-0 bottom-0 relative")},m(m,P){E(m,e,P),_(e,n),_(n,r),_(r,i),_(r,l),_(r,u),_(u,s),_(s,o),_(s,a),j(c,s,null),_(s,f),j(p,s,null),_(s,S),j(d,s,null),_(s,w),j(z,s,null),_(r,O),_(r,q),_(n,F),_(n,y),h=!0},p:$,i(m){h||(v(c.$$.fragment,m),v(p.$$.fragment,m),v(d.$$.fragment,m),v(z.$$.fragment,m),h=!0)},o(m){k(c.$$.fragment,m),k(p.$$.fragment,m),k(d.$$.fragment,m),k(z.$$.fragment,m),h=!1},d(m){m&&x(e),L(c),L(p),L(d),L(z)}}}class hn extends N{constructor(e){super(),T(this,e,null,pn,A,{})}}function gn(t){let e,n,r,i,l,u,s,o;return e=new R({props:{title:"Anasayfa",page:"/"}}),r=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),l=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),s=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){H(e.$$.fragment),n=M(),H(r.$$.fragment),i=M(),H(l.$$.fragment),u=M(),H(s.$$.fragment)},m(a,c){j(e,a,c),E(a,n,c),j(r,a,c),E(a,i,c),j(l,a,c),E(a,u,c),j(s,a,c),o=!0},p:$,i(a){o||(v(e.$$.fragment,a),v(r.$$.fragment,a),v(l.$$.fragment,a),v(s.$$.fragment,a),o=!0)},o(a){k(e.$$.fragment,a),k(r.$$.fragment,a),k(l.$$.fragment,a),k(s.$$.fragment,a),o=!1},d(a){a&&(x(n),x(i),x(u)),L(e,a),L(r,a),L(l,a),L(s,a)}}}function _n(t){let e,n,r,i,l,u,s;return n=new mn({props:{$$slots:{default:[gn]},$$scope:{ctx:t}}}),i=new Ot({props:{routes:t[0]}}),u=new hn({}),{c(){e=b("body"),H(n.$$.fragment),r=M(),H(i.$$.fragment),l=M(),H(u.$$.fragment)},m(o,a){E(o,e,a),j(n,e,null),_(e,r),j(i,e,null),_(e,l),j(u,e,null),s=!0},p(o,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:o}),n.$set(c)},i(o){s||(v(n.$$.fragment,o),v(i.$$.fragment,o),v(u.$$.fragment,o),s=!0)},o(o){k(n.$$.fragment,o),k(i.$$.fragment,o),k(u.$$.fragment,o),s=!1},d(o){o&&x(e),L(n),L(i),L(u)}}}function bn(t){return[{"/":Vt,"/kurumsal":Jt,"/hizmetler":tn,"/iletisim":rn,"*":Qt}]}class $n extends N{constructor(e){super(),T(this,e,bn,_n,A,{})}}new $n({target:document.getElementById("app")});
