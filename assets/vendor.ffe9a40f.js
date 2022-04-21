function cl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const r_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i_=cl(r_);function td(t){return!!t||t===""}function Fn(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ht(r)?a_(r):Fn(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ht(t))return t;if(at(t))return t}}const s_=/;(?![^(]*\))/g,o_=/:(.+)/;function a_(t){const e={};return t.split(s_).forEach(n=>{if(n){const r=n.split(o_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fe(t){let e="";if(ht(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=Fe(t[n]);r&&(e+=r+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Mr(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ht(e)&&(t.class=Fe(e)),n&&(t.style=Fn(n)),t}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ki(t[r],e[r]);return n}function ki(t,e){if(t===e)return!0;let n=id(t),r=id(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=me(t),r=me(e),n||r)return n&&r?u_(t,e):!1;if(n=at(t),r=at(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),u=e.hasOwnProperty(o);if(a&&!u||!a&&u||!ki(t[o],e[o]))return!1}}return String(t)===String(e)}function l_(t,e){return t.findIndex(n=>ki(n,e))}const vt=t=>t==null?"":me(t)||at(t)&&(t.toString===od||!Oe(t.toString))?JSON.stringify(t,nd,2):String(t),nd=(t,e)=>e&&e.__v_isRef?nd(t,e.value):Si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Qo(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!me(e)&&!ad(e)?String(e):e,Xe={},Ii=[],mn=()=>{},c_=()=>!1,h_=/^on[^a-z]/,Xo=t=>h_.test(t),hl=t=>t.startsWith("onUpdate:"),It=Object.assign,rd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f_=Object.prototype.hasOwnProperty,Ue=(t,e)=>f_.call(t,e),me=Array.isArray,Si=t=>Jo(t)==="[object Map]",Qo=t=>Jo(t)==="[object Set]",id=t=>t instanceof Date,Oe=t=>typeof t=="function",ht=t=>typeof t=="string",fl=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",sd=t=>at(t)&&Oe(t.then)&&Oe(t.catch),od=Object.prototype.toString,Jo=t=>od.call(t),d_=t=>Jo(t).slice(8,-1),ad=t=>Jo(t)==="[object Object]",dl=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zo=cl(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},p_=/-(\w)/g,In=ea(t=>t.replace(p_,(e,n)=>n?n.toUpperCase():"")),m_=/\B([A-Z])/g,Lr=ea(t=>t.replace(m_,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),pl=ea(t=>t?`on${ta(t)}`:""),bs=(t,e)=>!Object.is(t,e),na=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ra=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ud;const g_=()=>ud||(ud=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Sn;const ia=[];class y_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Sn&&(this.parent=Sn,this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ia.push(this),Sn=this)}off(){this.active&&(ia.pop(),Sn=ia[ia.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function v_(t,e){e=e||Sn,e&&e.active&&e.effects.push(t)}function w_(){return Sn}function __(t){Sn&&Sn.cleanups.push(t)}const ml=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ld=t=>(t.w&nr)>0,cd=t=>(t.n&nr)>0,b_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=nr},T_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];ld(i)&&!cd(i)?i.delete(t):e[n++]=i,i.w&=~nr,i.n&=~nr}e.length=n}},gl=new WeakMap;let Es=0,nr=1;const yl=30,ks=[];let Ur;const $r=Symbol(""),vl=Symbol("");class wl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],v_(this,r)}run(){if(!this.active)return this.fn();if(!ks.includes(this))try{return ks.push(Ur=this),E_(),nr=1<<++Es,Es<=yl?b_(this):hd(this),this.fn()}finally{Es<=yl&&T_(this),nr=1<<--Es,Fr(),ks.pop();const e=ks.length;Ur=e>0?ks[e-1]:void 0}}stop(){this.active&&(hd(this),this.onStop&&this.onStop(),this.active=!1)}}function hd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ci=!0;const _l=[];function Ai(){_l.push(Ci),Ci=!1}function E_(){_l.push(Ci),Ci=!0}function Fr(){const t=_l.pop();Ci=t===void 0?!0:t}function tn(t,e,n){if(!fd())return;let r=gl.get(t);r||gl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=ml()),dd(i)}function fd(){return Ci&&Ur!==void 0}function dd(t,e){let n=!1;Es<=yl?cd(t)||(t.n|=nr,n=!ld(t)):n=!t.has(Ur),n&&(t.add(Ur),Ur.deps.push(t))}function Bn(t,e,n,r,i,s){const o=gl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&me(t))o.forEach((u,l)=>{(l==="length"||l>=r)&&a.push(u)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":me(t)?dl(n)&&a.push(o.get("length")):(a.push(o.get($r)),Si(t)&&a.push(o.get(vl)));break;case"delete":me(t)||(a.push(o.get($r)),Si(t)&&a.push(o.get(vl)));break;case"set":Si(t)&&a.push(o.get($r));break}if(a.length===1)a[0]&&bl(a[0]);else{const u=[];for(const l of a)l&&u.push(...l);bl(ml(u))}}function bl(t,e){for(const n of me(t)?t:[...t])(n!==Ur||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const k_=cl("__proto__,__v_isRef,__isVue"),pd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(fl)),I_=Tl(),S_=Tl(!1,!0),C_=Tl(!0),md=A_();function A_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Be(this);for(let s=0,o=this.length;s<o;s++)tn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Be)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ai();const r=Be(this)[e].apply(this,n);return Fr(),r}}),t}function Tl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?H_:kd:e?Ed:Td).get(r))return r;const o=me(r);if(!t&&o&&Ue(md,i))return Reflect.get(md,i,s);const a=Reflect.get(r,i,s);return(fl(i)?pd.has(i):k_(i))||(t||tn(r,"get",i),e)?a:St(a)?!o||!dl(i)?a.value:a:at(a)?t?Id(a):Di(a):a}}const D_=gd(),O_=gd(!0);function gd(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&!Sl(i)&&(i=Be(i),o=Be(o),!me(n)&&St(o)&&!St(i)))return o.value=i,!0;const a=me(n)&&dl(r)?Number(r)<n.length:Ue(n,r),u=Reflect.set(n,r,i,s);return n===Be(s)&&(a?bs(i,o)&&Bn(n,"set",r,i):Bn(n,"add",r,i)),u}}function R_(t,e){const n=Ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Bn(t,"delete",e,void 0),r}function x_(t,e){const n=Reflect.has(t,e);return(!fl(e)||!pd.has(e))&&tn(t,"has",e),n}function N_(t){return tn(t,"iterate",me(t)?"length":$r),Reflect.ownKeys(t)}const yd={get:I_,set:D_,deleteProperty:R_,has:x_,ownKeys:N_},P_={get:C_,set(t,e){return!0},deleteProperty(t,e){return!0}},M_=It({},yd,{get:S_,set:O_}),El=t=>t,sa=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,r=!1){t=t.__v_raw;const i=Be(t),s=Be(e);e!==s&&!n&&tn(i,"get",e),!n&&tn(i,"get",s);const{has:o}=sa(i),a=r?El:n?Cl:Is;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,r=Be(n),i=Be(t);return t!==i&&!e&&tn(r,"has",t),!e&&tn(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ua(t,e=!1){return t=t.__v_raw,!e&&tn(Be(t),"iterate",$r),Reflect.get(t,"size",t)}function vd(t){t=Be(t);const e=Be(this);return sa(e).has.call(e,t)||(e.add(t),Bn(e,"add",t,t)),this}function wd(t,e){e=Be(e);const n=Be(this),{has:r,get:i}=sa(n);let s=r.call(n,t);s||(t=Be(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?bs(e,o)&&Bn(n,"set",t,e):Bn(n,"add",t,e),this}function _d(t){const e=Be(this),{has:n,get:r}=sa(e);let i=n.call(e,t);i||(t=Be(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Bn(e,"delete",t,void 0),s}function bd(){const t=Be(this),e=t.size!==0,n=t.clear();return e&&Bn(t,"clear",void 0,void 0),n}function la(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Be(o),u=e?El:t?Cl:Is;return!t&&tn(a,"iterate",$r),o.forEach((l,c)=>r.call(i,u(l),u(c),s))}}function ca(t,e,n){return function(...r){const i=this.__v_raw,s=Be(i),o=Si(s),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,l=i[t](...r),c=n?El:e?Cl:Is;return!e&&tn(s,"iterate",u?vl:$r),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:this}}function L_(){const t={get(s){return oa(this,s)},get size(){return ua(this)},has:aa,add:vd,set:wd,delete:_d,clear:bd,forEach:la(!1,!1)},e={get(s){return oa(this,s,!1,!0)},get size(){return ua(this)},has:aa,add:vd,set:wd,delete:_d,clear:bd,forEach:la(!1,!0)},n={get(s){return oa(this,s,!0)},get size(){return ua(this,!0)},has(s){return aa.call(this,s,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:la(!0,!1)},r={get(s){return oa(this,s,!0,!0)},get size(){return ua(this,!0)},has(s){return aa.call(this,s,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ca(s,!1,!1),n[s]=ca(s,!0,!1),e[s]=ca(s,!1,!0),r[s]=ca(s,!0,!0)}),[t,n,e,r]}const[U_,$_,F_,B_]=L_();function kl(t,e){const n=e?t?B_:F_:t?$_:U_;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ue(n,i)&&i in r?n:r,i,s)}const V_={get:kl(!1,!1)},j_={get:kl(!1,!0)},q_={get:kl(!0,!1)},Td=new WeakMap,Ed=new WeakMap,kd=new WeakMap,H_=new WeakMap;function W_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z_(t){return t.__v_skip||!Object.isExtensible(t)?0:W_(d_(t))}function Di(t){return t&&t.__v_isReadonly?t:Il(t,!1,yd,V_,Td)}function K_(t){return Il(t,!1,M_,j_,Ed)}function Id(t){return Il(t,!0,P_,q_,kd)}function Il(t,e,n,r,i){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=z_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Oi(t){return Sl(t)?Oi(t.__v_raw):!!(t&&t.__v_isReactive)}function Sl(t){return!!(t&&t.__v_isReadonly)}function Sd(t){return Oi(t)||Sl(t)}function Be(t){const e=t&&t.__v_raw;return e?Be(e):t}function Cd(t){return ra(t,"__v_skip",!0),t}const Is=t=>at(t)?Di(t):t,Cl=t=>at(t)?Id(t):t;function Ad(t){fd()&&(t=Be(t),t.dep||(t.dep=ml()),dd(t.dep))}function Dd(t,e){t=Be(t),t.dep&&bl(t.dep)}function St(t){return Boolean(t&&t.__v_isRef===!0)}function Te(t){return Od(t,!1)}function G_(t){return Od(t,!0)}function Od(t,e){return St(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Be(e),this._value=n?e:Is(e)}get value(){return Ad(this),this._value}set value(e){e=this._shallow?e:Be(e),bs(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Is(e),Dd(this))}}function k(t){return St(t)?t.value:t}const X_={get:(t,e,n)=>k(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return St(i)&&!St(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Rd(t){return Oi(t)?t:new Proxy(t,X_)}function NP(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=Ss(t,n);return e}class Q_{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Ss(t,e){const n=t[e];return St(n)?n:new Q_(t,e)}class J_{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new wl(e,()=>{this._dirty||(this._dirty=!0,Dd(this))}),this.__v_isReadonly=r}get value(){const e=Be(this);return Ad(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function K(t,e){let n,r;const i=Oe(t);return i?(n=t,r=mn):(n=t.get,r=t.set),new J_(n,r,i||!r)}Promise.resolve();function Z_(t,e,...n){const r=t.vnode.props||Xe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[c]||Xe;f?i=n.map(m=>m.trim()):h&&(i=n.map(Ts))}let a,u=r[a=pl(e)]||r[a=pl(In(e))];!u&&s&&(u=r[a=pl(Lr(e))]),u&&hn(u,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,hn(l,t,6,i)}}function xd(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Oe(t)){const u=l=>{const c=xd(l,e,!0);c&&(a=!0,It(o,c))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!s&&!a?(r.set(t,null),null):(me(s)?s.forEach(u=>o[u]=null):It(o,s),r.set(t,o),o)}function Al(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,Lr(e))||Ue(t,e))}let nn=null,Nd=null;function ha(t){const e=nn;return nn=t,Nd=t&&t.type.__scopeId||null,e}function qe(t,e=nn,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&op(-1);const s=ha(e),o=t(...i);return ha(s),r._d&&op(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Dl(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:u,emit:l,render:c,renderCache:h,data:f,setupState:m,ctx:p,inheritAttrs:E}=t;let d,y;const w=ha(t);try{if(n.shapeFlag&4){const C=i||r;d=An(c.call(C,C,h,s,m,f,p)),y=u}else{const C=e;d=An(C.length>1?C(s,{attrs:u,slots:a,emit:l}):C(s,null)),y=e.props?u:e1(u)}}catch(C){As.length=0,ka(C,t,1),d=Ze(gn)}let b=d;if(y&&E!==!1){const C=Object.keys(y),{shapeFlag:V}=b;C.length&&V&(1|6)&&(o&&C.some(hl)&&(y=t1(y,o)),b=Ri(b,y))}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),d=b,ha(w),d}const e1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},t1=(t,e)=>{const n={};for(const r in t)(!hl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function n1(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?Pd(r,o,l):!!o;if(u&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==r[f]&&!Al(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Pd(r,o,l):!0:!!o;return!1}function Pd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Al(n,s))return!0}return!1}function r1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const i1=t=>t.__isSuspense;function s1(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):Q1(t)}function ir(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=wt||nn;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Oe(e)?e.call(r.proxy):e}}function o1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jn(()=>{t.isMounted=!0}),Vd(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],a1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},setup(t,{slots:e}){const n=cp(),r=o1();let i;return()=>{const s=e.default&&$d(e.default(),!0);if(!s||!s.length)return;const o=Be(t),{mode:a}=o,u=s[0];if(r.isLeaving)return Rl(u);const l=Ud(u);if(!l)return Rl(u);const c=Ol(l,o,r,n);xl(l,c);const h=n.subTree,f=h&&Ud(h);let m=!1;const{getTransitionKey:p}=l.type;if(p){const E=p();i===void 0?i=E:E!==i&&(i=E,m=!0)}if(f&&f.type!==gn&&(!qr(l,f)||m)){const E=Ol(f,o,r,n);if(xl(f,E),a==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update()},Rl(u);a==="in-out"&&l.type!==gn&&(E.delayLeave=(d,y,w)=>{const b=Ld(r,f);b[String(f.key)]=f,d._leaveCb=()=>{y(),d._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=w})}return u}}},Md=a1;function Ld(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ol(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:l,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:p,onBeforeAppear:E,onAppear:d,onAfterAppear:y,onAppearCancelled:w}=e,b=String(t.key),C=Ld(n,t),V=(x,T)=>{x&&hn(x,r,9,T)},S={mode:s,persisted:o,beforeEnter(x){let T=a;if(!n.isMounted)if(i)T=E||a;else return;x._leaveCb&&x._leaveCb(!0);const A=C[b];A&&qr(t,A)&&A.el._leaveCb&&A.el._leaveCb(),V(T,[x])},enter(x){let T=u,A=l,L=c;if(!n.isMounted)if(i)T=d||u,A=y||l,L=w||c;else return;let O=!1;const F=x._enterCb=J=>{O||(O=!0,J?V(L,[x]):V(A,[x]),S.delayedLeave&&S.delayedLeave(),x._enterCb=void 0)};T?(T(x,F),T.length<=1&&F()):F()},leave(x,T){const A=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return T();V(h,[x]);let L=!1;const O=x._leaveCb=F=>{L||(L=!0,T(),F?V(p,[x]):V(m,[x]),x._leaveCb=void 0,C[A]===t&&delete C[A])};C[A]=t,f?(f(x,O),f.length<=1&&O()):O()},clone(x){return Ol(x,e,n,r)}};return S}function Rl(t){if(fa(t))return t=Ri(t),t.children=null,t}function Ud(t){return fa(t)?t.children?t.children[0]:void 0:t}function xl(t,e){t.shapeFlag&6&&t.component?xl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $d(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===xe?(s.patchFlag&128&&r++,n=n.concat($d(s.children,e))):(e||s.type!==gn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Gt(t){return Oe(t)?{setup:t,name:t.name}:t}const Nl=t=>!!t.type.__asyncLoader,fa=t=>t.type.__isKeepAlive;function u1(t,e){Fd(t,"a",e)}function l1(t,e){Fd(t,"da",e)}function Fd(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(da(e,r,n),n){let i=n.parent;for(;i&&i.parent;)fa(i.parent.vnode)&&c1(r,e,n,i),i=i.parent}}function c1(t,e,n,r){const i=da(e,t,r,!0);pa(()=>{rd(r[e],i)},n)}function da(t,e,n=wt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ai(),xi(n);const a=hn(e,n,t,o);return Hr(),Fr(),a});return r?i.unshift(s):i.push(s),s}}const Vn=t=>(e,n=wt)=>(!Ea||t==="sp")&&da(t,e,n),h1=Vn("bm"),jn=Vn("m"),Bd=Vn("bu"),f1=Vn("u"),Vd=Vn("bum"),pa=Vn("um"),d1=Vn("sp"),p1=Vn("rtg"),m1=Vn("rtc");function g1(t,e=wt){da("ec",t,e)}let Pl=!0;function y1(t){const e=Hd(t),n=t.proxy,r=t.ctx;Pl=!1,e.beforeCreate&&jd(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:u,inject:l,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:p,activated:E,deactivated:d,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:C,render:V,renderTracked:S,renderTriggered:x,errorCaptured:T,serverPrefetch:A,expose:L,inheritAttrs:O,components:F,directives:J,filters:ke}=e;if(l&&v1(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const v in o){const D=o[v];Oe(D)&&(r[v]=D.bind(n))}if(i){const v=i.call(n,n);at(v)&&(t.data=Di(v))}if(Pl=!0,s)for(const v in s){const D=s[v],G=Oe(D)?D.bind(n,n):Oe(D.get)?D.get.bind(n,n):mn,Se=!Oe(D)&&Oe(D.set)?D.set.bind(n):mn,Ge=K({get:G,set:Se});Object.defineProperty(r,v,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ot=>Ge.value=ot})}if(a)for(const v in a)qd(a[v],r,n,v);if(u){const v=Oe(u)?u.call(n):u;Reflect.ownKeys(v).forEach(D=>{ir(D,v[D])})}c&&jd(c,t,"c");function Ie(v,D){me(D)?D.forEach(G=>v(G.bind(n))):D&&v(D.bind(n))}if(Ie(h1,h),Ie(jn,f),Ie(Bd,m),Ie(f1,p),Ie(u1,E),Ie(l1,d),Ie(g1,T),Ie(m1,S),Ie(p1,x),Ie(Vd,w),Ie(pa,C),Ie(d1,A),me(L))if(L.length){const v=t.exposed||(t.exposed={});L.forEach(D=>{Object.defineProperty(v,D,{get:()=>n[D],set:G=>n[D]=G})})}else t.exposed||(t.exposed={});V&&t.render===mn&&(t.render=V),O!=null&&(t.inheritAttrs=O),F&&(t.components=F),J&&(t.directives=J)}function v1(t,e,n=mn,r=!1){me(t)&&(t=Ml(t));for(const i in t){const s=t[i];let o;at(s)?"default"in s?o=$t(s.from||i,s.default,!0):o=$t(s.from||i):o=$t(s),St(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function jd(t,e,n){hn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qd(t,e,n,r){const i=r.includes(".")?Ep(n,r):()=>n[r];if(ht(t)){const s=e[t];Oe(s)&&vn(i,s)}else if(Oe(t))vn(i,t.bind(n));else if(at(t))if(me(t))t.forEach(s=>qd(s,e,n,r));else{const s=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(s)&&vn(i,s,t)}}function Hd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let u;return a?u=a:!i.length&&!n&&!r?u=e:(u={},i.length&&i.forEach(l=>ma(u,l,o,!0)),ma(u,e,o)),s.set(e,u),u}function ma(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ma(t,s,n,!0),i&&i.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=w1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const w1={data:Wd,props:Br,emits:Br,methods:Br,computed:Br,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Br,directives:Br,watch:b1,provide:Wd,inject:_1};function Wd(t,e){return e?t?function(){return It(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function _1(t,e){return Br(Ml(t),Ml(e))}function Ml(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?It(It(Object.create(null),t),e):e}function b1(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=Ft(t[r],e[r]);return n}function T1(t,e,n,r=!1){const i={},s={};ra(s,_a,1),t.propsDefaults=Object.create(null),zd(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:K_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function E1(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Be(i),[u]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];const m=e[f];if(u)if(Ue(s,f))m!==s[f]&&(s[f]=m,l=!0);else{const p=In(f);i[p]=Ll(u,a,p,m,t,!1)}else m!==s[f]&&(s[f]=m,l=!0)}}}else{zd(t,e,i,s)&&(l=!0);let c;for(const h in a)(!e||!Ue(e,h)&&((c=Lr(h))===h||!Ue(e,c)))&&(u?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Ll(u,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ue(e,h))&&(delete s[h],l=!0)}l&&Bn(t,"set","$attrs")}function zd(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let u in e){if(Zo(u))continue;const l=e[u];let c;i&&Ue(i,c=In(u))?!s||!s.includes(c)?n[c]=l:(a||(a={}))[c]=l:Al(t.emitsOptions,u)||(!(u in r)||l!==r[u])&&(r[u]=l,o=!0)}if(s){const u=Be(n),l=a||Xe;for(let c=0;c<s.length;c++){const h=s[c];n[h]=Ll(i,u,h,l[h],t,!Ue(l,h))}}return o}function Ll(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ue(o,"default");if(a&&r===void 0){const u=o.default;if(o.type!==Function&&Oe(u)){const{propsDefaults:l}=i;n in l?r=l[n]:(xi(i),r=l[n]=u.call(null,e),Hr())}else r=u}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}function Kd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let u=!1;if(!Oe(t)){const c=h=>{u=!0;const[f,m]=Kd(h,e,!0);It(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!u)return r.set(t,Ii),Ii;if(me(s))for(let c=0;c<s.length;c++){const h=In(s[c]);Gd(h)&&(o[h]=Xe)}else if(s)for(const c in s){const h=In(c);if(Gd(h)){const f=s[c],m=o[h]=me(f)||Oe(f)?{type:f}:f;if(m){const p=Qd(Boolean,m.type),E=Qd(String,m.type);m[0]=p>-1,m[1]=E<0||p<E,(p>-1||Ue(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Gd(t){return t[0]!=="$"}function Yd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xd(t,e){return Yd(t)===Yd(e)}function Qd(t,e){return me(e)?e.findIndex(n=>Xd(n,t)):Oe(e)&&Xd(e,t)?0:-1}const Jd=t=>t[0]==="_"||t==="$stable",Ul=t=>me(t)?t.map(An):[An(t)],k1=(t,e,n)=>{const r=qe((...i)=>Ul(e(...i)),n);return r._c=!1,r},Zd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Jd(i))continue;const s=t[i];if(Oe(s))e[i]=k1(i,s,r);else if(s!=null){const o=Ul(s);e[i]=()=>o}}},ep=(t,e)=>{const n=Ul(e);t.slots.default=()=>n},I1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Be(e),ra(e,"_",n)):Zd(e,t.slots={})}else t.slots={},e&&ep(t,e);ra(t.slots,_a,1)},S1=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(It(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Zd(e,i)),o=e}else e&&(ep(t,e),o={default:1});if(s)for(const a in i)!Jd(a)&&!(a in o)&&delete i[a]};function PP(t,e){const n=nn;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,u,l=Xe]=e[s];Oe(o)&&(o={mounted:o,updated:o}),o.deep&&Wr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:u,modifiers:l})}return t}function Vr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let u=a.dir[r];u&&(Ai(),hn(u,n,8,[t.el,a,t,e]),Fr())}}function tp(){return{app:null,config:{isNativeTag:c_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C1=0;function A1(t,e){return function(r,i=null){i!=null&&!at(i)&&(i=null);const s=tp(),o=new Set;let a=!1;const u=s.app={_uid:C1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:eb,get config(){return s.config},set config(l){},use(l,...c){return o.has(l)||(l&&Oe(l.install)?(o.add(l),l.install(u,...c)):Oe(l)&&(o.add(l),l(u,...c))),u},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),u},component(l,c){return c?(s.components[l]=c,u):s.components[l]},directive(l,c){return c?(s.directives[l]=c,u):s.directives[l]},mount(l,c,h){if(!a){const f=Ze(r,i);return f.appContext=s,c&&e?e(f,l):t(f,l,h),a=!0,u._container=l,l.__vue_app__=u,zl(f.component)||f.component.proxy}},unmount(){a&&(t(null,u._container),delete u._container.__vue_app__)},provide(l,c){return s.provides[l]=c,u}};return u}}const Bt=s1;function D1(t){return O1(t)}function O1(t,e){const n=g_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:u,setText:l,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=mn,cloneNode:p,insertStaticContent:E}=t,d=(g,_,I,U=null,P=null,z=null,W=!1,q=null,H=!!_.dynamicChildren)=>{if(g===_)return;g&&!qr(g,_)&&(U=Y(g),tt(g,P,z,!0),g=null),_.patchFlag===-2&&(H=!1,_.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:Z}=_;switch(B){case ql:y(g,_,I,U);break;case gn:w(g,_,I,U);break;case ya:g==null&&b(_,I,U,W);break;case xe:J(g,_,I,U,P,z,W,q,H);break;default:Z&1?S(g,_,I,U,P,z,W,q,H):Z&6?ke(g,_,I,U,P,z,W,q,H):(Z&64||Z&128)&&B.process(g,_,I,U,P,z,W,q,H,Ne)}ie!=null&&P&&$l(ie,g&&g.ref,z,_||g,!_)},y=(g,_,I,U)=>{if(g==null)r(_.el=a(_.children),I,U);else{const P=_.el=g.el;_.children!==g.children&&l(P,_.children)}},w=(g,_,I,U)=>{g==null?r(_.el=u(_.children||""),I,U):_.el=g.el},b=(g,_,I,U)=>{[g.el,g.anchor]=E(g.children,_,I,U)},C=({el:g,anchor:_},I,U)=>{let P;for(;g&&g!==_;)P=f(g),r(g,I,U),g=P;r(_,I,U)},V=({el:g,anchor:_})=>{let I;for(;g&&g!==_;)I=f(g),i(g),g=I;i(_)},S=(g,_,I,U,P,z,W,q,H)=>{W=W||_.type==="svg",g==null?x(_,I,U,P,z,W,q,H):L(g,_,P,z,W,q,H)},x=(g,_,I,U,P,z,W,q)=>{let H,B;const{type:ie,props:Z,shapeFlag:se,transition:ae,patchFlag:Re,dirs:Ye}=g;if(g.el&&p!==void 0&&Re===-1)H=g.el=p(g.el);else{if(H=g.el=o(g.type,z,Z&&Z.is,Z),se&8?c(H,g.children):se&16&&A(g.children,H,null,U,P,z&&ie!=="foreignObject",W,q),Ye&&Vr(g,null,U,"created"),Z){for(const X in Z)X!=="value"&&!Zo(X)&&s(H,X,null,Z[X],z,g.children,U,P,N);"value"in Z&&s(H,"value",null,Z.value),(B=Z.onVnodeBeforeMount)&&Cn(B,U,g)}T(H,g,g.scopeId,W,U)}Ye&&Vr(g,null,U,"beforeMount");const je=(!P||P&&!P.pendingBranch)&&ae&&!ae.persisted;je&&ae.beforeEnter(H),r(H,_,I),((B=Z&&Z.onVnodeMounted)||je||Ye)&&Bt(()=>{B&&Cn(B,U,g),je&&ae.enter(H),Ye&&Vr(g,null,U,"mounted")},P)},T=(g,_,I,U,P)=>{if(I&&m(g,I),U)for(let z=0;z<U.length;z++)m(g,U[z]);if(P){let z=P.subTree;if(_===z){const W=P.vnode;T(g,W,W.scopeId,W.slotScopeIds,P.parent)}}},A=(g,_,I,U,P,z,W,q,H=0)=>{for(let B=H;B<g.length;B++){const ie=g[B]=q?or(g[B]):An(g[B]);d(null,ie,_,I,U,P,z,W,q)}},L=(g,_,I,U,P,z,W)=>{const q=_.el=g.el;let{patchFlag:H,dynamicChildren:B,dirs:ie}=_;H|=g.patchFlag&16;const Z=g.props||Xe,se=_.props||Xe;let ae;(ae=se.onVnodeBeforeUpdate)&&Cn(ae,I,_,g),ie&&Vr(_,g,I,"beforeUpdate");const Re=P&&_.type!=="foreignObject";if(B?O(g.dynamicChildren,B,q,I,U,Re,z):W||G(g,_,q,null,I,U,Re,z,!1),H>0){if(H&16)F(q,_,Z,se,I,U,P);else if(H&2&&Z.class!==se.class&&s(q,"class",null,se.class,P),H&4&&s(q,"style",Z.style,se.style,P),H&8){const Ye=_.dynamicProps;for(let je=0;je<Ye.length;je++){const X=Ye[je],oe=Z[X],he=se[X];(he!==oe||X==="value")&&s(q,X,oe,he,P,g.children,I,U,N)}}H&1&&g.children!==_.children&&c(q,_.children)}else!W&&B==null&&F(q,_,Z,se,I,U,P);((ae=se.onVnodeUpdated)||ie)&&Bt(()=>{ae&&Cn(ae,I,_,g),ie&&Vr(_,g,I,"updated")},U)},O=(g,_,I,U,P,z,W)=>{for(let q=0;q<_.length;q++){const H=g[q],B=_[q],ie=H.el&&(H.type===xe||!qr(H,B)||H.shapeFlag&(6|64))?h(H.el):I;d(H,B,ie,null,U,P,z,W,!0)}},F=(g,_,I,U,P,z,W)=>{if(I!==U){for(const q in U){if(Zo(q))continue;const H=U[q],B=I[q];H!==B&&q!=="value"&&s(g,q,B,H,W,_.children,P,z,N)}if(I!==Xe)for(const q in I)!Zo(q)&&!(q in U)&&s(g,q,I[q],null,W,_.children,P,z,N);"value"in U&&s(g,"value",I.value,U.value)}},J=(g,_,I,U,P,z,W,q,H)=>{const B=_.el=g?g.el:a(""),ie=_.anchor=g?g.anchor:a("");let{patchFlag:Z,dynamicChildren:se,slotScopeIds:ae}=_;ae&&(q=q?q.concat(ae):ae),g==null?(r(B,I,U),r(ie,I,U),A(_.children,I,ie,P,z,W,q,H)):Z>0&&Z&64&&se&&g.dynamicChildren?(O(g.dynamicChildren,se,I,P,z,W,q),(_.key!=null||P&&_===P.subTree)&&Fl(g,_,!0)):G(g,_,I,ie,P,z,W,q,H)},ke=(g,_,I,U,P,z,W,q,H)=>{_.slotScopeIds=q,g==null?_.shapeFlag&512?P.ctx.activate(_,I,U,W,H):We(_,I,U,P,z,W,H):Ie(g,_,H)},We=(g,_,I,U,P,z,W)=>{const q=g.component=V1(g,U,P);if(fa(g)&&(q.ctx.renderer=Ne),j1(q),q.asyncDep){if(P&&P.registerDep(q,v),!g.el){const H=q.subTree=Ze(gn);w(null,H,_,I)}return}v(q,g,_,I,P,z,W)},Ie=(g,_,I)=>{const U=_.component=g.component;if(n1(g,_,I))if(U.asyncDep&&!U.asyncResolved){D(U,_,I);return}else U.next=_,Y1(U.update),U.update();else _.component=g.component,_.el=g.el,U.vnode=_},v=(g,_,I,U,P,z,W)=>{const q=()=>{if(g.isMounted){let{next:ie,bu:Z,u:se,parent:ae,vnode:Re}=g,Ye=ie,je;H.allowRecurse=!1,ie?(ie.el=Re.el,D(g,ie,W)):ie=Re,Z&&na(Z),(je=ie.props&&ie.props.onVnodeBeforeUpdate)&&Cn(je,ae,ie,Re),H.allowRecurse=!0;const X=Dl(g),oe=g.subTree;g.subTree=X,d(oe,X,h(oe.el),Y(oe),g,P,z),ie.el=X.el,Ye===null&&r1(g,X.el),se&&Bt(se,P),(je=ie.props&&ie.props.onVnodeUpdated)&&Bt(()=>Cn(je,ae,ie,Re),P)}else{let ie;const{el:Z,props:se}=_,{bm:ae,m:Re,parent:Ye}=g,je=Nl(_);if(H.allowRecurse=!1,ae&&na(ae),!je&&(ie=se&&se.onVnodeBeforeMount)&&Cn(ie,Ye,_),H.allowRecurse=!0,Z&&ve){const X=()=>{g.subTree=Dl(g),ve(Z,g.subTree,g,P,null)};je?_.type.__asyncLoader().then(()=>!g.isUnmounted&&X()):X()}else{const X=g.subTree=Dl(g);d(null,X,I,U,g,P,z),_.el=X.el}if(Re&&Bt(Re,P),!je&&(ie=se&&se.onVnodeMounted)){const X=_;Bt(()=>Cn(ie,Ye,X),P)}_.shapeFlag&256&&g.a&&Bt(g.a,P),g.isMounted=!0,_=I=U=null}},H=new wl(q,()=>yp(g.update),g.scope),B=g.update=H.run.bind(H);B.id=g.uid,H.allowRecurse=B.allowRecurse=!0,B()},D=(g,_,I)=>{_.component=g;const U=g.vnode.props;g.vnode=_,g.next=null,E1(g,_.props,U,I),S1(g,_.children,I),Ai(),Xl(void 0,g.update),Fr()},G=(g,_,I,U,P,z,W,q,H=!1)=>{const B=g&&g.children,ie=g?g.shapeFlag:0,Z=_.children,{patchFlag:se,shapeFlag:ae}=_;if(se>0){if(se&128){Ge(B,Z,I,U,P,z,W,q,H);return}else if(se&256){Se(B,Z,I,U,P,z,W,q,H);return}}ae&8?(ie&16&&N(B,P,z),Z!==B&&c(I,Z)):ie&16?ae&16?Ge(B,Z,I,U,P,z,W,q,H):N(B,P,z,!0):(ie&8&&c(I,""),ae&16&&A(Z,I,U,P,z,W,q,H))},Se=(g,_,I,U,P,z,W,q,H)=>{g=g||Ii,_=_||Ii;const B=g.length,ie=_.length,Z=Math.min(B,ie);let se;for(se=0;se<Z;se++){const ae=_[se]=H?or(_[se]):An(_[se]);d(g[se],ae,I,null,P,z,W,q,H)}B>ie?N(g,P,z,!0,!1,Z):A(_,I,U,P,z,W,q,H,Z)},Ge=(g,_,I,U,P,z,W,q,H)=>{let B=0;const ie=_.length;let Z=g.length-1,se=ie-1;for(;B<=Z&&B<=se;){const ae=g[B],Re=_[B]=H?or(_[B]):An(_[B]);if(qr(ae,Re))d(ae,Re,I,null,P,z,W,q,H);else break;B++}for(;B<=Z&&B<=se;){const ae=g[Z],Re=_[se]=H?or(_[se]):An(_[se]);if(qr(ae,Re))d(ae,Re,I,null,P,z,W,q,H);else break;Z--,se--}if(B>Z){if(B<=se){const ae=se+1,Re=ae<ie?_[ae].el:U;for(;B<=se;)d(null,_[B]=H?or(_[B]):An(_[B]),I,Re,P,z,W,q,H),B++}}else if(B>se)for(;B<=Z;)tt(g[B],P,z,!0),B++;else{const ae=B,Re=B,Ye=new Map;for(B=Re;B<=se;B++){const kt=_[B]=H?or(_[B]):An(_[B]);kt.key!=null&&Ye.set(kt.key,B)}let je,X=0;const oe=se-Re+1;let he=!1,be=0;const Ce=new Array(oe);for(B=0;B<oe;B++)Ce[B]=0;for(B=ae;B<=Z;B++){const kt=g[B];if(X>=oe){tt(kt,P,z,!0);continue}let kn;if(kt.key!=null)kn=Ye.get(kt.key);else for(je=Re;je<=se;je++)if(Ce[je-Re]===0&&qr(kt,_[je])){kn=je;break}kn===void 0?tt(kt,P,z,!0):(Ce[kn-Re]=B+1,kn>=be?be=kn:he=!0,d(kt,_[kn],I,null,P,z,W,q,H),X++)}const tr=he?R1(Ce):Ii;for(je=tr.length-1,B=oe-1;B>=0;B--){const kt=Re+B,kn=_[kt],ed=kt+1<ie?_[kt+1].el:U;Ce[B]===0?d(null,kn,I,ed,P,z,W,q,H):he&&(je<0||B!==tr[je]?ot(kn,I,ed,2):je--)}}},ot=(g,_,I,U,P=null)=>{const{el:z,type:W,transition:q,children:H,shapeFlag:B}=g;if(B&6){ot(g.component.subTree,_,I,U);return}if(B&128){g.suspense.move(_,I,U);return}if(B&64){W.move(g,_,I,Ne);return}if(W===xe){r(z,_,I);for(let Z=0;Z<H.length;Z++)ot(H[Z],_,I,U);r(g.anchor,_,I);return}if(W===ya){C(g,_,I);return}if(U!==2&&B&1&&q)if(U===0)q.beforeEnter(z),r(z,_,I),Bt(()=>q.enter(z),P);else{const{leave:Z,delayLeave:se,afterLeave:ae}=q,Re=()=>r(z,_,I),Ye=()=>{Z(z,()=>{Re(),ae&&ae()})};se?se(z,Re,Ye):Ye()}else r(z,_,I)},tt=(g,_,I,U=!1,P=!1)=>{const{type:z,props:W,ref:q,children:H,dynamicChildren:B,shapeFlag:ie,patchFlag:Z,dirs:se}=g;if(q!=null&&$l(q,null,I,g,!0),ie&256){_.ctx.deactivate(g);return}const ae=ie&1&&se,Re=!Nl(g);let Ye;if(Re&&(Ye=W&&W.onVnodeBeforeUnmount)&&Cn(Ye,_,g),ie&6)ne(g.component,I,U);else{if(ie&128){g.suspense.unmount(I,U);return}ae&&Vr(g,null,_,"beforeUnmount"),ie&64?g.type.remove(g,_,I,P,Ne,U):B&&(z!==xe||Z>0&&Z&64)?N(B,_,I,!1,!0):(z===xe&&Z&(128|256)||!P&&ie&16)&&N(H,_,I),U&&yt(g)}(Re&&(Ye=W&&W.onVnodeUnmounted)||ae)&&Bt(()=>{Ye&&Cn(Ye,_,g),ae&&Vr(g,null,_,"unmounted")},I)},yt=g=>{const{type:_,el:I,anchor:U,transition:P}=g;if(_===xe){R(I,U);return}if(_===ya){V(g);return}const z=()=>{i(I),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:q}=P,H=()=>W(I,z);q?q(g.el,z,H):H()}else z()},R=(g,_)=>{let I;for(;g!==_;)I=f(g),i(g),g=I;i(_)},ne=(g,_,I)=>{const{bum:U,scope:P,update:z,subTree:W,um:q}=g;U&&na(U),P.stop(),z&&(z.active=!1,tt(W,g,_,I)),q&&Bt(q,_),Bt(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},N=(g,_,I,U=!1,P=!1,z=0)=>{for(let W=z;W<g.length;W++)tt(g[W],_,I,U,P)},Y=g=>g.shapeFlag&6?Y(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ye=(g,_,I)=>{g==null?_._vnode&&tt(_._vnode,null,null,!0):d(_._vnode||null,g,_,null,null,null,I),_p(),_._vnode=g},Ne={p:d,um:tt,m:ot,r:yt,mt:We,mc:A,pc:G,pbc:O,n:Y,o:t};let pe,ve;return e&&([pe,ve]=e(Ne)),{render:ye,hydrate:pe,createApp:A1(ye,pe)}}function $l(t,e,n,r,i=!1){if(me(t)){t.forEach((f,m)=>$l(f,e&&(me(e)?e[m]:e),n,r,i));return}if(Nl(r)&&!i)return;const s=r.shapeFlag&4?zl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:u}=t,l=e&&e.r,c=a.refs===Xe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==u&&(ht(l)?(c[l]=null,Ue(h,l)&&(h[l]=null)):St(l)&&(l.value=null)),ht(u)){const f=()=>{c[u]=o,Ue(h,u)&&(h[u]=o)};o?(f.id=-1,Bt(f,n)):f()}else if(St(u)){const f=()=>{u.value=o};o?(f.id=-1,Bt(f,n)):f()}else Oe(u)&&ar(u,a,12,[o,c])}function Cn(t,e,n,r=null){hn(t,e,7,[n,r])}function Fl(t,e,n=!1){const r=t.children,i=e.children;if(me(r)&&me(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=or(i[s]),a.el=o.el),n||Fl(o,a))}}function R1(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const x1=t=>t.__isTeleport,Cs=t=>t&&(t.disabled||t.disabled===""),np=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Bl=(t,e)=>{const n=t&&t.to;return ht(n)?e?e(n):null:n},N1={__isTeleport:!0,process(t,e,n,r,i,s,o,a,u,l){const{mc:c,pc:h,pbc:f,o:{insert:m,querySelector:p,createText:E,createComment:d}}=l,y=Cs(e.props);let{shapeFlag:w,children:b,dynamicChildren:C}=e;if(t==null){const V=e.el=E(""),S=e.anchor=E("");m(V,n,r),m(S,n,r);const x=e.target=Bl(e.props,p),T=e.targetAnchor=E("");x&&(m(T,x),o=o||np(x));const A=(L,O)=>{w&16&&c(b,L,O,i,s,o,a,u)};y?A(n,S):x&&A(x,T)}else{e.el=t.el;const V=e.anchor=t.anchor,S=e.target=t.target,x=e.targetAnchor=t.targetAnchor,T=Cs(t.props),A=T?n:S,L=T?V:x;if(o=o||np(S),C?(f(t.dynamicChildren,C,A,i,s,o,a),Fl(t,e,!0)):u||h(t,e,A,L,i,s,o,a,!1),y)T||ga(e,n,V,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=Bl(e.props,p);O&&ga(e,O,null,l,0)}else T&&ga(e,S,x,l,1)}},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:u,anchor:l,targetAnchor:c,target:h,props:f}=t;if(h&&s(c),(o||!Cs(f))&&(s(l),a&16))for(let m=0;m<u.length;m++){const p=u[m];i(p,e,n,!0,!!p.dynamicChildren)}},move:ga,hydrate:P1};function ga(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:u,children:l,props:c}=t,h=s===2;if(h&&r(o,e,n),(!h||Cs(c))&&u&16)for(let f=0;f<l.length;f++)i(l[f],e,n,2);h&&r(a,e,n)}function P1(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:u}},l){const c=e.target=Bl(e.props,u);if(c){const h=c._lpa||c.firstChild;e.shapeFlag&16&&(Cs(e.props)?(e.anchor=l(o(t),e,a(t),n,r,i,s),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=l(h,e,c,n,r,i,s)),c._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const M1=N1,Vl="components";function MP(t,e){return ip(Vl,t,!0,e)||t}const rp=Symbol();function jl(t){return ht(t)?ip(Vl,t,!1)||t:t||rp}function ip(t,e,n=!0,r=!1){const i=nn||wt;if(i){const s=i.type;if(t===Vl){const a=W1(s);if(a&&(a===e||a===In(e)||a===ta(In(e))))return s}const o=sp(i[t]||s[t],e)||sp(i.appContext[t],e);return!o&&r?s:o}}function sp(t,e){return t&&(t[e]||t[In(e)]||t[ta(In(e))])}const xe=Symbol(void 0),ql=Symbol(void 0),gn=Symbol(void 0),ya=Symbol(void 0),As=[];let jr=null;function M(t=!1){As.push(jr=t?null:[])}function L1(){As.pop(),jr=As[As.length-1]||null}let va=1;function op(t){va+=t}function ap(t){return t.dynamicChildren=va>0?jr||Ii:null,L1(),va>0&&jr&&jr.push(t),t}function Q(t,e,n,r,i,s){return ap(ue(t,e,n,r,i,s,!0))}function Pe(t,e,n,r,i){return ap(Ze(t,e,n,r,i,!0))}function wa(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const _a="__vInternal",up=({key:t})=>t!=null?t:null,ba=({ref:t})=>t!=null?ht(t)||St(t)||Oe(t)?{i:nn,r:t}:t:null;function ue(t,e=null,n=null,r=0,i=null,s=t===xe?0:1,o=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&up(e),ref:e&&ba(e),scopeId:Nd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Hl(u,n),s&128&&t.normalize(u)):n&&(u.shapeFlag|=ht(n)?8:16),va>0&&!o&&jr&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&jr.push(u),u}const Ze=U1;function U1(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===rp)&&(t=gn),wa(t)){const a=Ri(t,e,!0);return n&&Hl(a,n),a}if(z1(t)&&(t=t.__vccOpts),e){e=sr(e);let{class:a,style:u}=e;a&&!ht(a)&&(e.class=Fe(a)),at(u)&&(Sd(u)&&!me(u)&&(u=It({},u)),e.style=Fn(u))}const o=ht(t)?1:i1(t)?128:x1(t)?64:at(t)?4:Oe(t)?2:0;return ue(t,e,n,r,i,o,s,!0)}function sr(t){return t?Sd(t)||_a in t?It({},t):t:null}function Ri(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?cn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&up(a),ref:e&&e.ref?n&&i?me(i)?i.concat(ba(e)):[i,ba(e)]:ba(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ri(t.ssContent),ssFallback:t.ssFallback&&Ri(t.ssFallback),el:t.el,anchor:t.anchor}}function yn(t=" ",e=0){return Ze(ql,null,t,e)}function LP(t,e){const n=Ze(ya,null,t);return n.staticCount=e,n}function $(t="",e=!1){return e?(M(),Pe(gn,null,t)):Ze(gn,null,t)}function An(t){return t==null||typeof t=="boolean"?Ze(gn):me(t)?Ze(xe,null,t.slice()):typeof t=="object"?or(t):Ze(ql,null,String(t))}function or(t){return t.el===null||t.memo?t:Ri(t)}function Hl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),Hl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_a in e)?e._ctx=nn:i===3&&nn&&(nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:nn},n=32):(e=String(e),r&64?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fe([e.class,r.class]));else if(i==="style")e.style=Fn([e.style,r.style]);else if(Xo(i)){const s=e[i],o=r[i];s!==o&&!(me(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ct(t,e,n,r){let i;const s=n&&n[r];if(me(t)||ht(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(at(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Yt(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(me(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.fn)}return t}function fe(t,e,n={},r,i){if(nn.isCE)return Ze("slot",e==="default"?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),M();const o=s&&lp(s(n)),a=Pe(xe,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function lp(t){return t.some(e=>wa(e)?!(e.type===gn||e.type===xe&&!lp(e.children)):!0)?t:null}const Wl=t=>t?hp(t)?zl(t)||t.proxy:Wl(t.parent):null,Ta=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wl(t.parent),$root:t=>Wl(t.root),$emit:t=>t.emit,$options:t=>Hd(t),$forceUpdate:t=>()=>yp(t.update),$nextTick:t=>xs.bind(t.proxy),$watch:t=>J1.bind(t)}),$1={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:u}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Xe&&Ue(r,e))return o[e]=1,r[e];if(i!==Xe&&Ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Ue(l,e))return o[e]=3,s[e];if(n!==Xe&&Ue(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const c=Ta[e];let h,f;if(c)return e==="$attrs"&&tn(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Xe&&Ue(n,e))return o[e]=4,n[e];if(f=u.config.globalProperties,Ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==Xe&&Ue(i,e))i[e]=n;else if(r!==Xe&&Ue(r,e))r[e]=n;else if(Ue(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Xe&&Ue(t,o)||e!==Xe&&Ue(e,o)||(a=s[0])&&Ue(a,o)||Ue(r,o)||Ue(Ta,o)||Ue(i.config.globalProperties,o)}},F1=tp();let B1=0;function V1(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||F1,s={uid:B1++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kd(r,i),emitsOptions:xd(r,i),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:r.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Z_.bind(null,s),t.ce&&t.ce(s),s}let wt=null;const cp=()=>wt||nn,xi=t=>{wt=t,t.scope.on()},Hr=()=>{wt&&wt.scope.off(),wt=null};function hp(t){return t.vnode.shapeFlag&4}let Ea=!1;function j1(t,e=!1){Ea=e;const{props:n,children:r}=t.vnode,i=hp(t);T1(t,n,i,e),I1(t,r);const s=i?q1(t,e):void 0;return Ea=!1,s}function q1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cd(new Proxy(t.ctx,$1));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?mp(t):null;xi(t),Ai();const s=ar(r,t,0,[t.props,i]);if(Fr(),Hr(),sd(s)){if(s.then(Hr,Hr),e)return s.then(o=>{fp(t,o,e)}).catch(o=>{ka(o,t,0)});t.asyncDep=s}else fp(t,s,e)}else pp(t,e)}function fp(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Rd(e)),pp(t,n)}let dp;function pp(t,e,n){const r=t.type;if(!t.render){if(!e&&dp&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:u}=r,l=It(It({isCustomElement:s,delimiters:a},o),u);r.render=dp(i,l)}}t.render=r.render||mn}xi(t),Ai(),y1(t),Fr(),Hr()}function H1(t){return new Proxy(t.attrs,{get(e,n){return tn(t,"get","$attrs"),e[n]}})}function mp(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=H1(t))},slots:t.slots,emit:t.emit,expose:e}}function zl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rd(Cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ta)return Ta[n](t)}}))}function W1(t){return Oe(t)&&t.displayName||t.name}function z1(t){return Oe(t)&&"__vccOpts"in t}function ar(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ka(s,e,n)}return i}function hn(t,e,n,r){if(Oe(t)){const s=ar(t,e,n,r);return s&&sd(s)&&s.catch(o=>{ka(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(hn(t[s],e,n,r));return i}function ka(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](t,o,a)===!1)return}s=s.parent}const u=e.appContext.config.errorHandler;if(u){ar(u,null,10,[t,o,a]);return}}K1(t,n,i,r)}function K1(t,e,n,r=!0){console.error(t)}let Ia=!1,Kl=!1;const rn=[];let qn=0;const Ds=[];let Os=null,Ni=0;const Rs=[];let ur=null,Pi=0;const gp=Promise.resolve();let Gl=null,Yl=null;function xs(t){const e=Gl||gp;return t?e.then(this?t.bind(this):t):e}function G1(t){let e=qn+1,n=rn.length;for(;e<n;){const r=e+n>>>1;Ns(rn[r])<t?e=r+1:n=r}return e}function yp(t){(!rn.length||!rn.includes(t,Ia&&t.allowRecurse?qn+1:qn))&&t!==Yl&&(t.id==null?rn.push(t):rn.splice(G1(t.id),0,t),vp())}function vp(){!Ia&&!Kl&&(Kl=!0,Gl=gp.then(bp))}function Y1(t){const e=rn.indexOf(t);e>qn&&rn.splice(e,1)}function wp(t,e,n,r){me(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),vp()}function X1(t){wp(t,Os,Ds,Ni)}function Q1(t){wp(t,ur,Rs,Pi)}function Xl(t,e=null){if(Ds.length){for(Yl=e,Os=[...new Set(Ds)],Ds.length=0,Ni=0;Ni<Os.length;Ni++)Os[Ni]();Os=null,Ni=0,Yl=null,Xl(t,e)}}function _p(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,ur){ur.push(...e);return}for(ur=e,ur.sort((n,r)=>Ns(n)-Ns(r)),Pi=0;Pi<ur.length;Pi++)ur[Pi]();ur=null,Pi=0}}const Ns=t=>t.id==null?1/0:t.id;function bp(t){Kl=!1,Ia=!0,Xl(t),rn.sort((n,r)=>Ns(n)-Ns(r));const e=mn;try{for(qn=0;qn<rn.length;qn++){const n=rn[qn];n&&n.active!==!1&&ar(n,null,14)}}finally{qn=0,rn.length=0,_p(),Ia=!1,Gl=null,(rn.length||Ds.length||Rs.length)&&bp(t)}}function UP(t,e){return Ql(t,null,e)}const Tp={};function vn(t,e,n){return Ql(t,e,n)}function Ql(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Xe){const a=wt;let u,l=!1,c=!1;if(St(t)?(u=()=>t.value,l=!!t._shallow):Oi(t)?(u=()=>t,r=!0):me(t)?(c=!0,l=t.some(Oi),u=()=>t.map(y=>{if(St(y))return y.value;if(Oi(y))return Wr(y);if(Oe(y))return ar(y,a,2)})):Oe(t)?e?u=()=>ar(t,a,2):u=()=>{if(!(a&&a.isUnmounted))return h&&h(),hn(t,a,3,[f])}:u=mn,e&&r){const y=u;u=()=>Wr(y())}let h,f=y=>{h=d.onStop=()=>{ar(y,a,4)}};if(Ea)return f=mn,e?n&&hn(e,a,3,[u(),c?[]:void 0,f]):u(),mn;let m=c?[]:Tp;const p=()=>{if(!!d.active)if(e){const y=d.run();(r||l||(c?y.some((w,b)=>bs(w,m[b])):bs(y,m)))&&(h&&h(),hn(e,a,3,[y,m===Tp?void 0:m,f]),m=y)}else d.run()};p.allowRecurse=!!e;let E;i==="sync"?E=p:i==="post"?E=()=>Bt(p,a&&a.suspense):E=()=>{!a||a.isMounted?X1(p):p()};const d=new wl(u,E);return e?n?p():m=d.run():i==="post"?Bt(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&rd(a.scope.effects,d)}}function J1(t,e,n){const r=this.proxy,i=ht(t)?t.includes(".")?Ep(r,t):()=>r[t]:t.bind(r,r);let s;Oe(e)?s=e:(s=e.handler,n=e);const o=wt;xi(this);const a=Ql(i,s.bind(r),n);return o?xi(o):Hr(),a}function Ep(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Wr(t,e){if(!at(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),St(t))Wr(t.value,e);else if(me(t))for(let n=0;n<t.length;n++)Wr(t[n],e);else if(Qo(t)||Si(t))t.forEach(n=>{Wr(n,e)});else if(ad(t))for(const n in t)Wr(t[n],e);return t}function Sa(){return Z1().slots}function Z1(){const t=cp();return t.setupContext||(t.setupContext=mp(t))}function Ps(t,e,n){const r=arguments.length;return r===2?at(e)&&!me(e)?wa(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wa(n)&&(n=[n]),Ze(t,e,n))}const eb="3.2.24",tb="http://www.w3.org/2000/svg",Mi=typeof document!="undefined"?document:null,kp=new Map,nb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Mi.createElementNS(tb,t):Mi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Mi.createTextNode(t),createComment:t=>Mi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=kp.get(t);if(!s){const o=Mi.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}kp.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ib(t,e,n){const r=t.style,i=ht(n);if(n&&!i){for(const s in n)Jl(r,s,n[s]);if(e&&!ht(e))for(const s in e)n[s]==null&&Jl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Ip=/\s*!important$/;function Jl(t,e,n){if(me(n))n.forEach(r=>Jl(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=sb(t,e);Ip.test(n)?t.setProperty(Lr(r),n.replace(Ip,""),"important"):t[r]=n}}const Sp=["Webkit","Moz","ms"],Zl={};function sb(t,e){const n=Zl[e];if(n)return n;let r=In(e);if(r!=="filter"&&r in t)return Zl[e]=r;r=ta(r);for(let i=0;i<Sp.length;i++){const s=Sp[i]+r;if(s in t)return Zl[e]=s}return e}const Cp="http://www.w3.org/1999/xlink";function ob(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cp,e.slice(6,e.length)):t.setAttributeNS(Cp,e,n);else{const s=i_(e);n==null||s&&!td(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function ab(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=td(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Ca=Date.now,Ap=!1;if(typeof window!="undefined"){Ca()>document.createEvent("Event").timeStamp&&(Ca=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ap=!!(t&&Number(t[1])<=53)}let ec=0;const ub=Promise.resolve(),lb=()=>{ec=0},cb=()=>ec||(ub.then(lb),ec=Ca());function lr(t,e,n,r){t.addEventListener(e,n,r)}function hb(t,e,n,r){t.removeEventListener(e,n,r)}function fb(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,u]=db(e);if(r){const l=s[e]=pb(r,i);lr(t,a,l,u)}else o&&(hb(t,a,o,u),s[e]=void 0)}}const Dp=/(?:Once|Passive|Capture)$/;function db(t){let e;if(Dp.test(t)){e={};let n;for(;n=t.match(Dp);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Lr(t.slice(2)),e]}function pb(t,e){const n=r=>{const i=r.timeStamp||Ca();(Ap||i>=n.attached-1)&&hn(mb(r,n.value),e,5,[r])};return n.value=t,n.attached=cb(),n}function mb(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Op=/^on[a-z]/,gb=(t,e,n,r,i=!1,s,o,a,u)=>{e==="class"?rb(t,r,i):e==="style"?ib(t,n,r):Xo(e)?hl(e)||fb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yb(t,e,r,i))?ab(t,e,r,s,o,a,u):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ob(t,e,r,i))};function yb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Op.test(e)&&Oe(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Op.test(e)&&ht(n)?!1:e in t}const cr="transition",Ms="animation",Dn=(t,{slots:e})=>Ps(Md,vb(t),e);Dn.displayName="Transition";const Rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dn.props=It({},Md.props,Rp);const zr=(t,e=[])=>{me(t)?t.forEach(n=>n(...e)):t&&t(...e)},xp=t=>t?me(t)?t.some(e=>e.length>1):t.length>1:!1;function vb(t){const e={};for(const F in t)F in Rp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,p=wb(i),E=p&&p[0],d=p&&p[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:C,onLeaveCancelled:V,onBeforeAppear:S=y,onAppear:x=w,onAppearCancelled:T=b}=e,A=(F,J,ke)=>{Li(F,J?c:a),Li(F,J?l:o),ke&&ke()},L=(F,J)=>{Li(F,m),Li(F,f),J&&J()},O=F=>(J,ke)=>{const We=F?x:w,Ie=()=>A(J,F,ke);zr(We,[J,Ie]),Np(()=>{Li(J,F?u:s),hr(J,F?c:a),xp(We)||Pp(J,r,E,Ie)})};return It(e,{onBeforeEnter(F){zr(y,[F]),hr(F,s),hr(F,o)},onBeforeAppear(F){zr(S,[F]),hr(F,u),hr(F,l)},onEnter:O(!1),onAppear:O(!0),onLeave(F,J){const ke=()=>L(F,J);hr(F,h),Tb(),hr(F,f),Np(()=>{Li(F,h),hr(F,m),xp(C)||Pp(F,r,d,ke)}),zr(C,[F,ke])},onEnterCancelled(F){A(F,!1),zr(b,[F])},onAppearCancelled(F){A(F,!0),zr(T,[F])},onLeaveCancelled(F){L(F),zr(V,[F])}})}function wb(t){if(t==null)return null;if(at(t))return[tc(t.enter),tc(t.leave)];{const e=tc(t);return[e,e]}}function tc(t){return Ts(t)}function hr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Li(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Np(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _b=0;function Pp(t,e,n,r){const i=t._endId=++_b,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:u}=bb(t,e);if(!o)return r();const l=o+"end";let c=0;const h=()=>{t.removeEventListener(l,f),s()},f=m=>{m.target===t&&++c>=u&&h()};setTimeout(()=>{c<u&&h()},a+1),t.addEventListener(l,f)}function bb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(cr+"Delay"),s=r(cr+"Duration"),o=Mp(i,s),a=r(Ms+"Delay"),u=r(Ms+"Duration"),l=Mp(a,u);let c=null,h=0,f=0;e===cr?o>0&&(c=cr,h=o,f=s.length):e===Ms?l>0&&(c=Ms,h=l,f=u.length):(h=Math.max(o,l),c=h>0?o>l?cr:Ms:null,f=c?c===cr?s.length:u.length:0);const m=c===cr&&/\b(transform|all)(,|$)/.test(n[cr+"Property"]);return{type:c,timeout:h,propCount:f,hasTransform:m}}function Mp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Lp(n)+Lp(t[r])))}function Lp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Tb(){return document.body.offsetHeight}const Ui=t=>{const e=t.props["onUpdate:modelValue"];return me(e)?n=>na(e,n):e};function Eb(t){t.target.composing=!0}function Up(t){const e=t.target;e.composing&&(e.composing=!1,kb(e,"input"))}function kb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const $P={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ui(i);const s=r||i.props&&i.props.type==="number";lr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=Ts(a)),t._assign(a)}),n&&lr(t,"change",()=>{t.value=t.value.trim()}),e||(lr(t,"compositionstart",Eb),lr(t,"compositionend",Up),lr(t,"change",Up))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ui(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ts(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},FP={created(t,{value:e},n){t.checked=ki(e,n.props.value),t._assign=Ui(n),lr(t,"change",()=>{t._assign(Ls(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Ui(r),e!==n&&(t.checked=ki(e,r.props.value))}},BP={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Qo(e);lr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ts(Ls(o)):Ls(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=Ui(r)},mounted(t,{value:e}){$p(t,e)},beforeUpdate(t,e,n){t._assign=Ui(n)},updated(t,{value:e}){$p(t,e)}};function $p(t,e){const n=t.multiple;if(!(n&&!me(e)&&!Qo(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Ls(s);if(n)me(e)?s.selected=l_(e,o)>-1:s.selected=e.has(o);else if(ki(Ls(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ls(t){return"_value"in t?t._value:t.value}const Ib=["ctrl","shift","alt","meta"],Sb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ib.some(n=>t[`${n}Key`]&&!e.includes(n))},nc=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Sb[e[i]];if(s&&s(n,e))return}return t(n,...r)},Cb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},He=(t,e)=>n=>{if(!("key"in n))return;const r=Lr(n.key);if(e.some(i=>i===r||Cb[i]===r))return t(n)},VP={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Us(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Us(t,!0),r.enter(t)):r.leave(t,()=>{Us(t,!1)}):Us(t,e))},beforeUnmount(t,{value:e}){Us(t,e)}};function Us(t,e){t.style.display=e?t._vod:"none"}const Ab=It({patchProp:gb},nb);let Fp;function Db(){return Fp||(Fp=D1(Ab))}const jP=(...t)=>{const e=Db().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Ob(r);if(!i)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ob(t){return ht(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Rb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xb(t,e,n){return e&&Bp(t.prototype,e),n&&Bp(t,n),t}function Nb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Nb(t,i,n[i])})}return t}function Vp(t,e){return Lb(t)||$b(t,e)||Bb()}function Pb(t){return Mb(t)||Ub(t)||Fb()}function Mb(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Lb(t){if(Array.isArray(t))return t}function Ub(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function $b(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(u){i=!0,s=u}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function Fb(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Bb(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var jp=function(){},rc={},qp={},Vb=null,Hp={mark:jp,measure:jp};try{typeof window!="undefined"&&(rc=window),typeof document!="undefined"&&(qp=document),typeof MutationObserver!="undefined"&&(Vb=MutationObserver),typeof performance!="undefined"&&(Hp=performance)}catch{}var jb=rc.navigator||{},Wp=jb.userAgent,zp=Wp===void 0?"":Wp,Aa=rc,Vt=qp,Da=Hp;Aa.document;var ic=!!Vt.documentElement&&!!Vt.head&&typeof Vt.addEventListener=="function"&&typeof Vt.createElement=="function",qb=~zp.indexOf("MSIE")||~zp.indexOf("Trident/"),Hn="___FONT_AWESOME___",sc=16,Kp="fa",Gp="svg-inline--fa",Yp="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var oc={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xp=Aa.FontAwesomeConfig||{};function Hb(t){var e=Vt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Wb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Vt&&typeof Vt.querySelector=="function"){var zb=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zb.forEach(function(t){var e=Vp(t,2),n=e[0],r=e[1],i=Wb(Hb(n));i!=null&&(Xp[r]=i)})}var Kb={familyPrefix:Kp,replacementClass:Gp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ac=Me({},Kb,Xp);ac.autoReplaceSvg||(ac.observeMutations=!1);var Pt=Me({},ac);Aa.FontAwesomeConfig=Pt;var Wn=Aa||{};Wn[Hn]||(Wn[Hn]={});Wn[Hn].styles||(Wn[Hn].styles={});Wn[Hn].hooks||(Wn[Hn].hooks={});Wn[Hn].shims||(Wn[Hn].shims=[]);var On=Wn[Hn],Gb=[],Yb=function t(){Vt.removeEventListener("DOMContentLoaded",t),uc=1,Gb.map(function(e){return e()})},uc=!1;ic&&(uc=(Vt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Vt.readyState),uc||Vt.addEventListener("DOMContentLoaded",Yb));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var fr=sc,dr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xb(t){if(!(!t||!ic)){var e=Vt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Vt.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Vt.head.insertBefore(e,r),t}}var Qb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oa(){for(var t=12,e="";t-- >0;)e+=Qb[Math.random()*62|0];return e}function Qp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Qp(t[n]),'" ')},"").trim()}function lc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function cc(t){return t.size!==dr.size||t.x!==dr.x||t.y!==dr.y||t.rotate!==dr.rotate||t.flipX||t.flipY}function Jp(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:l}}function Zb(t){var e=t.transform,n=t.width,r=n===void 0?sc:n,i=t.height,s=i===void 0?sc:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&qb?u+="translate(".concat(e.x/fr-r/2,"em, ").concat(e.y/fr-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/fr,"em), calc(-50% + ").concat(e.y/fr,"em)) "):u+="translate(".concat(e.x/fr,"em, ").concat(e.y/fr,"em) "),u+="scale(".concat(e.size/fr*(e.flipX?-1:1),", ").concat(e.size/fr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var hc={x:0,y:0,width:"100%",height:"100%"};function Zp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function eT(t){return t.tag==="g"?t.children:[t]}function tT(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,o=t.transform,a=r.width,u=r.icon,l=i.width,c=i.icon,h=Jp({transform:o,containerWidth:l,iconWidth:a}),f={tag:"rect",attributes:Me({},hc,{fill:"white"})},m=u.children?{children:u.children.map(Zp)}:{},p={tag:"g",attributes:Me({},h.inner),children:[Zp(Me({tag:u.tag,attributes:Me({},u.attributes,h.path)},m))]},E={tag:"g",attributes:Me({},h.outer),children:[p]},d="mask-".concat(s||Oa()),y="clip-".concat(s||Oa()),w={tag:"mask",attributes:Me({},hc,{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,E]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:eT(c)},w]};return e.push(b,{tag:"rect",attributes:Me({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(d,")")},hc)}),{children:e,attributes:n}}function nT(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,o=lc(s);if(o.length>0&&(n.style=o),cc(i)){var a=Jp({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:Me({},a.outer),children:[{tag:"g",attributes:Me({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Me({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function rT(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(cc(o)&&n.found&&!r.found){var a=n.width,u=n.height,l={x:a/u/2,y:.5};i.style=lc(Me({},s,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iT(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(Pt.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Me({},i,{id:o}),children:r}]}]}function sT(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,l=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,m=f===void 0?!1:f,p=r.found?r:n,E=p.width,d=p.height,y=i==="fak",w=y?"":"fa-w-".concat(Math.ceil(E/d*16)),b=[Pt.replacementClass,s?"".concat(Pt.familyPrefix,"-").concat(s):"",w].filter(function(L){return h.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(h.classes).join(" "),C={children:[],attributes:Me({},h.attributes,{"data-prefix":i,"data-icon":s,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(d)})},V=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(E/d*16*.0625,"em")}:{};m&&(C.attributes[Yp]=""),u&&C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Oa())},children:[u]});var S=Me({},C,{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:Me({},V,h.styles)}),x=r.found&&n.found?tT(S):nT(S),T=x.children,A=x.attributes;return S.children=T,S.attributes=A,a?iT(S):rT(S)}function oT(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,l=Me({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});u&&(l[Yp]="");var c=Me({},o.styles);cc(i)&&(c.transform=Zb({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=lc(c);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}var em=function(){};Pt.measurePerformance&&Da&&Da.mark&&Da.measure;var aT=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},fc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?aT(n,i):n,u,l,c;for(r===void 0?(u=1,c=e[s[0]]):(u=0,c=r);u<o;u++)l=s[u],c=a(c,e[l],l,e);return c};function tm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(e).reduce(function(o,a){var u=e[a],l=!!u.icon;return l?o[u.iconName]=u.icon:o[a]=u,o},{});typeof On.hooks.addPack=="function"&&!i?On.hooks.addPack(t,s):On.styles[t]=Me({},On.styles[t]||{},s),t==="fas"&&tm("fa",e)}var nm=On.styles,uT=On.shims,rm=function(){var e=function(i){return fc(nm,function(s,o,a){return s[a]=fc(o,i,{}),s},{})};e(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),e(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(a){r[a]=s}),r});var n="far"in nm;fc(uT,function(r,i){var s=i[0],o=i[1],a=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:a},r},{})};rm();On.styles;function im(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function sm(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Qp(t):"<".concat(e," ").concat(Jb(r),">").concat(s.map(sm).join(""),"</").concat(e,">")}var lT=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n):n};function dc(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}dc.prototype=Object.create(Error.prototype);dc.prototype.constructor=dc;var Ra={fill:"currentColor"},om={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};Me({},Ra,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var pc=Me({},om,{attributeName:"opacity"});Me({},Ra,{cx:"256",cy:"364",r:"28"}),Me({},om,{attributeName:"r",values:"28;14;28;28;14;28;"}),Me({},pc,{values:"1;0;1;1;0;1;"});Me({},Ra,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Me({},pc,{values:"1;0;0;0;0;1;"});Me({},Ra,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Me({},pc,{values:"0;0;1;1;0;0;"});On.styles;function am(t){var e=t[0],n=t[1],r=t.slice(4),i=Vp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Pt.familyPrefix,"-").concat(oc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Pt.familyPrefix,"-").concat(oc.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Pt.familyPrefix,"-").concat(oc.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}On.styles;var cT=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function hT(){var t=Kp,e=Gp,n=Pt.familyPrefix,r=Pt.replacementClass,i=cT;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var fT=function(){function t(){Rb(this,t),this.definitions={}}return xb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Me({},n.definitions[a]||{},o[a]),tm(a,o[a]),rm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,l=o.icon;n[a]||(n[a]={}),n[a][u]=l}),n}}]),t}();function um(){Pt.autoAddCss&&!hm&&(Xb(hT()),hm=!0)}function lm(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sm(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!ic){var r=Vt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function cm(t){var e=t.prefix,n=e===void 0?"fa":e,r=t.iconName;if(!!r)return im(pT.definitions,n,r)||im(On.styles,n,r)}function dT(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:cm(i||{})),t(r,Me({},n,{mask:i}))}}var pT=new fT,hm=!1,fm={transform:function(e){return lT(e)}},mT=dT(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?dr:n,i=e.symbol,s=i===void 0?!1:i,o=e.mask,a=o===void 0?null:o,u=e.maskId,l=u===void 0?null:u,c=e.title,h=c===void 0?null:c,f=e.titleId,m=f===void 0?null:f,p=e.classes,E=p===void 0?[]:p,d=e.attributes,y=d===void 0?{}:d,w=e.styles,b=w===void 0?{}:w;if(!!t){var C=t.prefix,V=t.iconName,S=t.icon;return lm(Me({type:"icon"},t),function(){return um(),Pt.autoA11y&&(h?y["aria-labelledby"]="".concat(Pt.replacementClass,"-title-").concat(m||Oa()):(y["aria-hidden"]="true",y.focusable="false")),sT({icons:{main:am(S),mask:a?am(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:V,transform:Me({},dr,r),symbol:s,title:h,maskId:l,titleId:m,extra:{attributes:y,styles:b,classes:E}})})}}),gT=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?dr:r,s=n.title,o=s===void 0?null:s,a=n.classes,u=a===void 0?[]:a,l=n.attributes,c=l===void 0?{}:l,h=n.styles,f=h===void 0?{}:h;return lm({type:"text",content:e},function(){return um(),oT({content:e,transform:Me({},dr,i),title:o,extra:{attributes:c,styles:f,classes:["".concat(Pt.familyPrefix,"-layers-text")].concat(Pb(u))}})})},yT=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function vT(t,e){return e={exports:{}},t(e,e.exports),e.exports}var wT=vT(function(t){(function(e){var n=function(y,w,b){if(!l(w)||h(w)||f(w)||m(w)||u(w))return w;var C,V=0,S=0;if(c(w))for(C=[],S=w.length;V<S;V++)C.push(n(y,w[V],b));else{C={};for(var x in w)Object.prototype.hasOwnProperty.call(w,x)&&(C[y(x,b)]=n(y,w[x],b))}return C},r=function(y,w){w=w||{};var b=w.separator||"_",C=w.split||/(?=[A-Z])/;return y.split(C).join(b)},i=function(y){return p(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,b){return b?b.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},a=Object.prototype.toString,u=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},c=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},m=function(y){return a.call(y)=="[object Boolean]"},p=function(y){return y=y-0,y===y},E=function(y,w){var b=w&&"process"in w?w.process:w;return typeof b!="function"?y:function(C,V){return b(C,y,V)}},d={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,w){return n(E(i,w),y)},decamelizeKeys:function(y,w){return n(E(o,w),y,w)},pascalizeKeys:function(y,w){return n(E(s,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=d:e.humps=d})(yT)}),_T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},xa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bT=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},mc=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function TT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=wT.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function ET(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function gc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return gc(u)}),i=Object.keys(t.attributes||{}).reduce(function(u,l){var c=t.attributes[l];switch(l){case"class":u.class=ET(c);break;case"style":u.style=TT(c);break;default:u.attrs[l]=c}return u},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=bT(n,["class","style"]);return Ps(t.tag,xa({},e,{class:i.class,style:xa({},i.style,o)},i.attrs,a),r)}var dm=!1;try{dm=!0}catch{}function kT(){if(!dm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Fs(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$s({},t,e):{}}function IT(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},$s(e,"fa-"+t.size,t.size!==null),$s(e,"fa-rotate-"+t.rotation,t.rotation!==null),$s(e,"fa-pull-"+t.pull,t.pull!==null),$s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function pm(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":_T(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var qP=Gt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=K(function(){return pm(e.icon)}),s=K(function(){return Fs("classes",IT(e))}),o=K(function(){return Fs("transform",typeof e.transform=="string"?fm.transform(e.transform):e.transform)}),a=K(function(){return Fs("mask",pm(e.mask))}),u=K(function(){return mT(i.value,xa({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});vn(u,function(c){if(!c)return kT("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=K(function(){return u.value?gc(u.value.abstract[0],{},r):null});return function(){return l.value}}});Gt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Pt.familyPrefix,s=K(function(){return[i+"-layers"].concat(mc(e.fixedWidth?[i+"-fw"]:[]))});return function(){return Ps("div",{class:s.value},r.default?r.default():[])}}});Gt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Pt.familyPrefix,s=K(function(){return Fs("classes",[].concat(mc(e.counter?[i+"-layers-counter"]:[]),mc(e.position?[i+"-layers-"+e.position]:[])))}),o=K(function(){return Fs("transform",typeof e.transform=="string"?fm.transform(e.transform):e.transform)}),a=K(function(){var l=gT(e.value.toString(),xa({},o.value,s.value)),c=l.abstract;return e.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),u=K(function(){return gc(a.value,{},r)});return function(){return u.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var HP={prefix:"fas",iconName:"angle-right",icon:[256,512,[],"f105","M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"]},WP={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},zP={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},KP={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},GP={prefix:"fas",iconName:"key",icon:[512,512,[],"f084","M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"]},YP={prefix:"fas",iconName:"sign-in-alt",icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]},XP={prefix:"fas",iconName:"sign-out-alt",icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]},QP={prefix:"fas",iconName:"user-circle",icon:[496,512,[],"f2bd","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"]},JP={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var ZP={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;u||(m=64,o||(f=64)),r.push(n[c],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ST(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},DT=function(t){try{return AT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function gm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RT(){return _t().indexOf("Electron/")>=0}function vm(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xT(){return _t().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="FirebaseError";class pr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=NT,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function PT(t,e){return t.replace(MT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MT=/\{\$([^}]+)}/g;function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wm(s)&&wm(o)){if(!Na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UT(t,e){const n=new $T(t,e);return n.subscribe.bind(n)}class $T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jT(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VT(t){return t===Gr?void 0:t}function jT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ve||(Ve={}));const HT={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},WT=Ve.INFO,zT={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},KT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=WT,this._logHandler=KT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",_m="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new vc("@firebase/app"),XT="@firebase/app-compat",QT="@firebase/analytics-compat",JT="@firebase/analytics",ZT="@firebase/app-check-compat",eE="@firebase/app-check",tE="@firebase/auth",nE="@firebase/auth-compat",rE="@firebase/database",iE="@firebase/database-compat",sE="@firebase/functions",oE="@firebase/functions-compat",aE="@firebase/installations",uE="@firebase/installations-compat",lE="@firebase/messaging",cE="@firebase/messaging-compat",hE="@firebase/performance",fE="@firebase/performance-compat",dE="@firebase/remote-config",pE="@firebase/remote-config-compat",mE="@firebase/storage",gE="@firebase/storage-compat",yE="@firebase/firestore",vE="@firebase/firestore-compat",wE="firebase",_E="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="[DEFAULT]",bE={[wc]:"fire-core",[XT]:"fire-core-compat",[JT]:"fire-analytics",[QT]:"fire-analytics-compat",[eE]:"fire-app-check",[ZT]:"fire-app-check-compat",[tE]:"fire-auth",[nE]:"fire-auth-compat",[rE]:"fire-rtdb",[iE]:"fire-rtdb-compat",[sE]:"fire-fn",[oE]:"fire-fn-compat",[aE]:"fire-iid",[uE]:"fire-iid-compat",[lE]:"fire-fcm",[cE]:"fire-fcm-compat",[hE]:"fire-perf",[fE]:"fire-perf-compat",[dE]:"fire-rc",[pE]:"fire-rc-compat",[mE]:"fire-gcs",[gE]:"fire-gcs-compat",[yE]:"fire-fst",[vE]:"fire-fst-compat","fire-js":"fire-js",[wE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map,bc=new Map;function TE(t,e){try{t.container.addComponent(e)}catch(n){_c.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(bc.has(e))return _c.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,t);for(const n of Pa.values())TE(n,t);return!0}function Ma(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},La=new Bs("app","Firebase",EE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw La.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=_E;function eM(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:bm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw La.create("bad-app-name",{appName:String(r)});const i=Pa.get(r);if(i){if(Na(t,i.options)&&Na(n,i.config))return i;throw La.create("duplicate-app",{appName:r})}const s=new qT(r);for(const a of bc.values())s.addComponent(a);const o=new kE(t,n,s);return Pa.set(r,o),o}function Tc(t=bm){const e=Pa.get(t);if(!e)throw La.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=bE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_c.warn(a.join(" "));return}$i(new Kr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){$i(new Kr("platform-logger",e=>new GT(e),"PRIVATE")),Rn(wc,_m,t),Rn(wc,_m,"esm2017"),Rn("fire-js","")}IE("");var SE="firebase",CE="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(SE,CE,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ec(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Tm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AE=Tm,Em=new Bs("auth","Firebase",Tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new vc("@firebase/auth");function Ua(t,...e){km.logLevel<=Ve.ERROR&&km.error(`Auth (${Fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw kc(t,...e)}function xn(t,...e){return kc(t,...e)}function Im(t,e,n){const r=Object.assign(Object.assign({},AE()),{[e]:n});return new Bs("auth","Firebase",r).create(e,{appName:t.name})}function DE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fn(t,"argument-error"),Im(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Em.create(t,...e)}function ge(t,e,...n){if(!t)throw kc(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Kn(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;function Gn(t){Kn(t instanceof Function,"Expected a class definition");let e=Sm.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Na(s,e!=null?e:{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function RE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xE(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||gm()||"connection"in navigator)?navigator.onLine:!0}function PE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=mm()||ym()}get(){return NE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Hs(3e4,6e4);function Bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,r,i={}){return Dm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Am.fetch()(Om(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Dm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ME),e);try{const i=new UE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cc(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Im(t,c,l);fn(t,c)}}catch(i){if(i instanceof pr)throw i;fn(t,"network-request-failed")}}async function Ws(t,e,n,r,i={}){const s=await Yr(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Om(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sc(t.config,i):`${t.config.apiScheme}://${i}`}class UE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),LE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function FE(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BE(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=Dc(r);ge(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(Ac(i.auth_time)),issuedAtTime:zs(Ac(i.iat)),expirationTime:zs(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Dc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=DT(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i),null}}function VE(t){const e=Dc(t);return ge(e,"internal-error"),ge(typeof e.exp!="undefined","internal-error"),ge(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&jE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vi(t,FE(n,{idToken:r}));ge(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?zE(s.providerUserInfo):[],a=WE(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rm(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HE(t){const e=it(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zE(t){return t.map(e=>{var{providerId:n}=e,r=Ec(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(t,e){const n=await Dm(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Om(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Am.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken!="undefined","internal-error"),ge(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):VE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ge(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ks;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ge(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ge(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){ge(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vi(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BE(this,e)}reload(){return HE(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vi(this,$E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,d=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:b,emailVerified:C,isAnonymous:V,providerData:S,stsTokenManager:x}=n;ge(b&&x,e,"internal-error");const T=Ks.fromJSON(this.name,x);ge(typeof b=="string",e,"internal-error"),mr(h,e.name),mr(f,e.name),ge(typeof C=="boolean",e,"internal-error"),ge(typeof V=="boolean",e,"internal-error"),mr(m,e.name),mr(p,e.name),mr(E,e.name),mr(d,e.name),mr(y,e.name),mr(w,e.name);const A=new Xr({uid:b,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:V,photoURL:p,phoneNumber:m,tenantId:E,stsTokenManager:T,createdAt:y,lastLoginAt:w});return S&&Array.isArray(S)&&(A.providerData=S.map(L=>Object.assign({},L))),d&&(A._redirectEventId=d),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ks;i.updateFromServerResponse(n);const s=new Xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xm.type="NONE";const Nm=xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Gn(Nm),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Gn(Nm);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Xr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fm(e))return"Blackberry";if(Bm(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if($m(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mm(t=_t()){return/firefox\//i.test(t)}function Oc(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=_t()){return/crios\//i.test(t)}function Um(t=_t()){return/iemobile/i.test(t)}function $m(t=_t()){return/android/i.test(t)}function Fm(t=_t()){return/blackberry/i.test(t)}function Bm(t=_t()){return/webos/i.test(t)}function Ba(t=_t()){return/iphone|ipad|ipod/i.test(t)}function GE(t=_t()){var e;return Ba(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function YE(){return vm()&&document.documentMode===10}function Vm(t=_t()){return Ba(t)||$m(t)||Bm(t)||Fm(t)||/windows phone/i.test(t)||Um(t)}function XE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=Pm(_t());break;case"Worker":n=`${Pm(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qm(this),this.idTokenSubscription=new qm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Em,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ge(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Gs(t){return it(t)}class qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=UT(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function JE(t,e){return Yr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e){return Ws(t,"POST","/v1/accounts:signInWithPassword",Bi(t,e))}async function ek(t,e){return Yr(t,"POST","/v1/accounts:sendOobCode",Bi(t,e))}async function tk(t,e){return ek(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",Bi(t,e))}async function rk(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",Bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Rc{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ZE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nk(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return JE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rk(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return Ws(t,"POST","/v1/accounts:signInWithIdp",Bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="http://localhost";class Qr extends Rc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ec(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ok(t){const e=js(qs(t)).link,n=e?js(qs(e)).deep_link_id:null,r=js(qs(t)).deep_link_id;return(r?js(qs(r)).link:null)||r||n||e||t}class xc{constructor(e){var n,r,i,s,o,a;const u=js(qs(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=sk((i=u.mode)!==null&&i!==void 0?i:null);ge(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ok(e);try{return new xc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return Ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xc.parseLink(n);return ge(r,"argument-error"),Ys._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Nc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Xs{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Xs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Xs{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Xs{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return Ws(t,"POST","/v1/accounts:signUp",Bi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xr._fromIdTokenResponse(e,r,i),o=Hm(r);return new Jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hm(r);return new Jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends pr{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Va(e,n,r,i)}}function Wm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(t,s,e,r):s})}async function uk(t,e,n=!1){const r=await Vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vi(t,Wm(r,i,e,t),n);ge(s.idToken,r,"internal-error");const o=Dc(s.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(t.uid===a,r,"user-mismatch"),Jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t,e,n=!1){const r="signIn",i=await Wm(t,r,e),s=await Jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ck(t,e){return zm(Gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e,n){var r;ge(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ge(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ge(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ge(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e,n){const r=it(t),i={requestType:"PASSWORD_RESET",email:e};n&&hk(r,i,n),await tk(r,i)}async function nM(t,e,n){const r=Gs(t),i=await ak(r,{returnSecureToken:!0,email:e,password:n}),s=await Jr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function rM(t,e,n){return ck(it(t),Hi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e){return Yr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=it(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vi(r,fk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sM(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function oM(t){return it(t).signOut()}const ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){const t=_t();return Oc(t)||Ba(t)}const pk=1e3,mk=10;class Gm extends Km{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dk()&&XE(),this.fallbackToPolling=Vm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gm.type="LOCAL";const gk=Gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ym.type="SESSION";const Xm=Ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await yk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Pc("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function wk(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){return typeof Nn().WorkerGlobalScope!="undefined"&&typeof Nn().importScripts=="function"}async function _k(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tk(){return Qm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebaseLocalStorageDb",Ek=1,Ha="firebaseLocalStorage",Zm="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function kk(){const t=indexedDB.deleteDatabase(Jm);return new Qs(t).toPromise()}function Mc(){const t=indexedDB.open(Jm,Ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:Zm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await kk(),e(await Mc()))})})}async function eg(t,e,n){const r=Wa(t,!0).put({[Zm]:e,value:n});return new Qs(r).toPromise()}async function Ik(t,e){const n=Wa(t,!1).get(e),r=await new Qs(n).toPromise();return r===void 0?null:r.value}function tg(t,e){const n=Wa(t,!0).delete(e);return new Qs(n).toPromise()}const Sk=800,Ck=3;class ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ck)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(Tk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await eg(e,ja,"1"),await tg(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ik(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wa(i,!1).getAll();return new Qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ng.type="LOCAL";const Ak=ng;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ok(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Dk().appendChild(r)})}function Rk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){return e?Gn(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Rc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return zm(t.auth,new Lc(t),t.bypassAuthState)}function Nk(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),lk(n,new Lc(t),t.bypassAuthState)}async function Pk(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),uk(n,new Lc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return Pk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:fn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Hs(2e3,1e4);async function aM(t,e,n){const r=Gs(t);DE(t,e,Nc);const i=rg(r,n);return new Zr(r,"signInViaPopup",e,i).executeNotNull()}class Zr extends ig{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mk.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="pendingRedirect",Uc=new Map;class Uk extends ig{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Uc.get(this.auth._key());if(!e){try{const r=await $k(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uc.set(this.auth._key(),e)}return this.bypassAuthState||Uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $k(t,e){const n=Bk(e),r=Fk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Fk(t){return Gn(t._redirectPersistence)}function Bk(t){return Fa(Lk,t.config.apiKey,t.name)}async function Vk(t,e,n=!1){const r=Gs(t),i=rg(r,e),o=await new Uk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=10*60*1e3;class qk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!og(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return og(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function Gk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wk(t);for(const n of e)try{if(Yk(n))return}catch{}fn(t,"unauthorized-domain")}function Yk(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kk.test(n))return!1;if(zk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new Hs(3e4,6e4);function ag(){const t=Nn().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qk(t){return new Promise((e,n)=>{var r,i,s;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(xn(t,"network-request-failed"))},timeout:Xk.get()})}if((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Nn().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Rk("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},Ok(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw za=null,e})}let za=null;function Jk(t){return za=za||Qk(t),za}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Hs(5e3,15e3),eI="__/auth/iframe",tI="emulator/auth/iframe",nI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iI(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sc(e,tI):`https://${t.config.authDomain}/${eI}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=rI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vs(r).slice(1)}`}async function sI(t){const e=await Jk(t),n=Nn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:iI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},Zk.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aI=500,uI=600,lI="_blank",cI="http://localhost";class ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hI(t,e,n,r=aI,i=uI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},oI),{width:r.toString(),height:i.toString(),top:s,left:o}),l=_t().toLowerCase();n&&(a=Lm(l)?lI:n),Mm(l)&&(e=e||cI,u.scrollbars="yes");const c=Object.entries(u).reduce((f,[m,p])=>`${f}${m}=${p},`,"");if(GE(l)&&a!=="_self")return fI(e||"",a),new ug(null);const h=window.open(e||"",a,c);ge(h,t,"popup-blocked");try{h.focus()}catch{}return new ug(h)}function fI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="__/auth/handler",pI="emulator/auth/handler";function lg(t,e,n,r,i,s){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof Nc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Xs){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${mI(t)}?${Vs(a).slice(1)}`}function mI({config:t}){return t.emulator?Sc(t,pI):`https://${t.authDomain}/${dI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class gI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xm,this._completeRedirectFn=Vk}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=lg(e,n,r,Ic(),i);return hI(e,o,Pc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wk(lg(e,n,r,Ic(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sI(e),r=new qk(e);return n.register("authEvent",i=>(ge(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$c];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vm()||Oc()||Ba()}}const yI=gI;var cg="@firebase/auth",hg="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _I(t){$i(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{ge(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),ge(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},u=new QE(o,a);return RE(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$i(new Kr("auth-internal",e=>{const n=Gs(e.getProvider("auth").getImmediate());return(r=>new vI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(cg,hg,wI(t)),Rn(cg,hg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t=Tc()){const e=Ma(t,"auth");return e.isInitialized()?e.getImmediate():OE(t,{popupRedirectResolver:yI,persistence:[Ak,gk,Xm]})}_I("Browser");var bI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},te,Fc=Fc||{},_e=bI||self;function Ka(){}function Bc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Js(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TI(t){return Object.prototype.hasOwnProperty.call(t,Vc)&&t[Vc]||(t[Vc]=++EI)}var Vc="closure_uid_"+(1e9*Math.random()>>>0),EI=0;function kI(t,e,n){return t.call.apply(t.bind,arguments)}function II(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=kI:At=II,At.apply(null,arguments)}function Ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Dt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function _r(){this.s=this.s,this.o=this.o}var SI=0,CI={};_r.prototype.s=!1;_r.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),SI!=0)){var t=TI(this);delete CI[t]}};_r.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},dg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function AI(t){e:{var e=wS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function pg(t){return Array.prototype.concat.apply([],arguments)}function jc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ya(t){return/^[\s\xa0]*$/.test(t)}var mg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function jt(t,e){return t.indexOf(e)!=-1}function qc(t,e){return t<e?-1:t>e?1:0}var qt;e:{var gg=_e.navigator;if(gg){var yg=gg.userAgent;if(yg){qt=yg;break e}}qt=""}function Hc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vg(t){const e={};for(const n in t)e[n]=t[n];return e}var wg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _g(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wg.length;s++)n=wg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wc(t){return Wc[" "](t),t}Wc[" "]=Ka;function DI(t){var e=xI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var OI=jt(qt,"Opera"),Wi=jt(qt,"Trident")||jt(qt,"MSIE"),bg=jt(qt,"Edge"),zc=bg||Wi,Tg=jt(qt,"Gecko")&&!(jt(qt.toLowerCase(),"webkit")&&!jt(qt,"Edge"))&&!(jt(qt,"Trident")||jt(qt,"MSIE"))&&!jt(qt,"Edge"),RI=jt(qt.toLowerCase(),"webkit")&&!jt(qt,"Edge");function Eg(){var t=_e.document;return t?t.documentMode:void 0}var Xa;e:{var Kc="",Gc=function(){var t=qt;if(Tg)return/rv:([^\);]+)(\)|;)/.exec(t);if(bg)return/Edge\/([\d\.]+)/.exec(t);if(Wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RI)return/WebKit\/(\S+)/.exec(t);if(OI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gc&&(Kc=Gc?Gc[1]:""),Wi){var Yc=Eg();if(Yc!=null&&Yc>parseFloat(Kc)){Xa=String(Yc);break e}}Xa=Kc}var xI={};function NI(){return DI(function(){let t=0;const e=mg(String(Xa)).split("."),n=mg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=qc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||qc(i[2].length==0,s[2].length==0)||qc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Xc;if(_e.document&&Wi){var kg=Eg();Xc=kg||parseInt(Xa,10)||void 0}else Xc=void 0;var PI=Xc,MI=function(){if(!_e.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{_e.addEventListener("test",Ka,e),_e.removeEventListener("test",Ka,e)}catch{}return t}();function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};function Zs(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tg){e:{try{Wc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.Z.h.call(this)}}Dt(Zs,Mt);var LI={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var eo="closure_listenable_"+(1e6*Math.random()|0),UI=0;function $I(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++UI,this.ca=this.fa=!1}function Qa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ja(t){this.src=t,this.g={},this.h=0}Ja.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new $I(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Qc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fg(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Zc="closure_lm_"+(1e6*Math.random()|0),eh={};function Ig(t,e,n,r,i){if(r&&r.once)return Cg(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ig(t,e[s],n,r,i);return null}return n=ih(n),t&&t[eo]?t.N(e,n,Js(r)?!!r.capture:!!r,i):Sg(t,e,n,!1,r,i)}function Sg(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Js(i)?!!i.capture:!!i,a=nh(t);if(a||(t[Zc]=a=new Ja(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)MI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Dg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FI(){function t(n){return e.call(t.src,t.listener,n)}var e=BI;return t}function Cg(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Cg(t,e[s],n,r,i);return null}return n=ih(n),t&&t[eo]?t.O(e,n,Js(r)?!!r.capture:!!r,i):Sg(t,e,n,!0,r,i)}function Ag(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ag(t,e[s],n,r,i);else r=Js(r)?!!r.capture:!!r,n=ih(n),t&&t[eo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jc(s,n,r,i),-1<n&&(Qa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=nh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jc(e,n,r,i)),(n=-1<t?e[t]:null)&&th(n))}function th(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[eo])Qc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=nh(e))?(Qc(n,t),n.h==0&&(n.src=null,e[Zc]=null)):Qa(t)}}}function Dg(t){return t in eh?eh[t]:eh[t]="on"+t}function BI(t,e){if(t.ca)t=!0;else{e=new Zs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&th(t),t=n.call(r,e)}return t}function nh(t){return t=t[Zc],t instanceof Ja?t:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ih(t){return typeof t=="function"?t:(t[rh]||(t[rh]=function(e){return t.handleEvent(e)}),t[rh])}function bt(){_r.call(this),this.i=new Ja(this),this.P=this,this.I=null}Dt(bt,_r);bt.prototype[eo]=!0;bt.prototype.removeEventListener=function(t,e,n,r){Ag(this,t,e,n,r)};function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;e=new Mt(r,t),_g(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Za(o,r,!0,e)&&i}if(o=e.g=t,i=Za(o,r,!0,e)&&i,i=Za(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Za(o,r,!1,e)&&i}bt.prototype.M=function(){if(bt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qa(n[r]);delete t.g[e],t.h--}}this.I=null};bt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Za(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Qc(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var sh=_e.JSON.stringify;function VI(){var t=Rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jI{constructor(){this.h=this.g=null}add(e,n){const r=Og.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Og=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qI,t=>t.reset());class qI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HI(t){_e.setTimeout(()=>{throw t},0)}function oh(t,e){ah||WI(),uh||(ah(),uh=!0),Rg.add(t,e)}var ah;function WI(){var t=_e.Promise.resolve(void 0);ah=function(){t.then(zI)}}var uh=!1,Rg=new jI;function zI(){for(var t;t=VI();){try{t.h.call(t.g)}catch(n){HI(n)}var e=Og;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uh=!1}function eu(t,e){bt.call(this),this.h=t||1,this.g=e||_e,this.j=At(this.kb,this),this.l=Date.now()}Dt(eu,bt);te=eu.prototype;te.da=!1;te.S=null;te.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(lh(this),this.start()))}};te.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}te.M=function(){eu.Z.M.call(this),lh(this),delete this.g};function ch(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_e.setTimeout(t,e||0)}function xg(t){t.g=ch(()=>{t.g=null,t.i&&(t.i=!1,xg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KI extends _r{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xg(this)}M(){super.M(),this.g&&(_e.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(t){_r.call(this),this.h=t,this.g={}}Dt(to,_r);var Ng=[];function Pg(t,e,n,r){Array.isArray(n)||(n&&(Ng[0]=n.toString()),n=Ng);for(var i=0;i<n.length;i++){var s=Ig(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Mg(t){Hc(t.g,function(e,n){this.g.hasOwnProperty(n)&&th(e)},t),t.g={}}to.prototype.M=function(){to.Z.M.call(this),Mg(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tu(){this.g=!0}tu.prototype.Aa=function(){this.g=!1};function GI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QI(t,n)+(r?" "+r:"")})}function XI(t,e){t.info(function(){return"TIMEOUT: "+e})}tu.prototype.info=function(){};function QI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return sh(n)}catch{return e}}var ei={},Lg=null;function nu(){return Lg=Lg||new bt}ei.Ma="serverreachability";function Ug(t){Mt.call(this,ei.Ma,t)}Dt(Ug,Mt);function no(t){const e=nu();Ot(e,new Ug(e,t))}ei.STAT_EVENT="statevent";function $g(t,e){Mt.call(this,ei.STAT_EVENT,t),this.stat=e}Dt($g,Mt);function Ht(t){const e=nu();Ot(e,new $g(e,t))}ei.Na="timingevent";function Fg(t,e){Mt.call(this,ei.Na,t),this.size=e}Dt(Fg,Mt);function ro(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _e.setTimeout(function(){t()},e)}var ru={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Bg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function hh(){}hh.prototype.h=null;function Vg(t){return t.h||(t.h=t.i())}function jg(){}var io={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fh(){Mt.call(this,"d")}Dt(fh,Mt);function dh(){Mt.call(this,"c")}Dt(dh,Mt);var ph;function iu(){}Dt(iu,hh);iu.prototype.g=function(){return new XMLHttpRequest};iu.prototype.i=function(){return{}};ph=new iu;function so(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new to(this),this.P=JI,t=zc?125:void 0,this.W=new eu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new qg}function qg(){this.i=null,this.g="",this.h=!1}var JI=45e3,mh={},su={};te=so.prototype;te.setTimeout=function(t){this.P=t};function gh(t,e,n){t.K=1,t.v=cu(Yn(e)),t.s=n,t.U=!0,Hg(t,null)}function Hg(t,e){t.F=Date.now(),oo(t),t.A=Yn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Zg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new qg,t.g=Ty(t.l,n?e:null,!t.s),0<t.O&&(t.L=new KI(At(t.Ia,t,t.g),t.O)),Pg(t.V,t.g,"readystatechange",t.gb),e=t.H?vg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),no(1),GI(t.j,t.u,t.A,t.m,t.X,t.s)}te.gb=function(t){t=t.target;const e=this.L;e&&Xn(t)==3?e.l():this.Ia(t)};te.Ia=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||zc||this.g&&(this.h.h||this.g.ga()||hy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?no(3):no(2)),ou(this);var n=this.g.ba();this.N=n;t:if(Wg(this)){var r=hy(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ti(this),ao(this);var o="";break t}this.h.i=new _e.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,YI(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var l=a;break t}}l=null}if(n=l)zi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yh(this,n);else{this.i=!1,this.o=3,Ht(12),ti(this),ao(this);break e}}this.U?(zg(this,c,o),zc&&this.i&&c==3&&(Pg(this.V,this.W,"tick",this.fb),this.W.start())):(zi(this.j,this.m,o,null),yh(this,o)),c==4&&ti(this),this.i&&!this.I&&(c==4?vy(this.l,this):(this.i=!1,oo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ht(12)):(this.o=0,Ht(13)),ti(this),ao(this)}}}catch{}finally{}};function Wg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function zg(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZI(t,n),i==su){e==4&&(t.o=4,Ht(14),r=!1),zi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mh){t.o=4,Ht(15),zi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zi(t.j,t.m,i,null),yh(t,i);Wg(t)&&i!=su&&i!=mh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ah(e),e.L=!0,Ht(11))):(zi(t.j,t.m,n,"[Invalid Chunked Response]"),ti(t),ao(t))}te.fb=function(){if(this.g){var t=Xn(this.g),e=this.g.ga();this.C<e.length&&(ou(this),zg(this,t,e),this.i&&t!=4&&oo(this))}};function ZI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?su:(n=Number(e.substring(n,r)),isNaN(n)?mh:(r+=1,r+n>e.length?su:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.I=!0,ti(this)};function oo(t){t.Y=Date.now()+t.P,Kg(t,t.P)}function Kg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ro(At(t.eb,t),e)}function ou(t){t.B&&(_e.clearTimeout(t.B),t.B=null)}te.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(XI(this.j,this.A),this.K!=2&&(no(3),Ht(17)),ti(this),this.o=2,ao(this)):Kg(this,this.Y-t)};function ao(t){t.l.G==0||t.I||vy(t.l,t)}function ti(t){ou(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lh(t.W),Mg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_h(n.i,t))){if(n.I=t.N,!t.J&&_h(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)gu(n),pu(n);else break e;Ch(n),Ht(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ro(At(n.ab,n),6e3));if(1>=ny(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ii(n,11)}else if((t.J||n.g==t)&&gu(n),!Ya(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const p=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;!s.g&&(jt(p,"spdy")||jt(p,"quic")||jt(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(bh(s,s.h),s.h=null))}if(r.D){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,nt(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=by(r,r.H?r.la:null,r.W),o.J){ry(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(ou(a),oo(a)),r.g=o}else gy(r);0<n.l.length&&mu(n)}else l[0]!="stop"&&l[0]!="close"||ii(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ii(n,7):Ih(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}no(4)}catch{}}function eS(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Bc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bc(t)||typeof t=="string")dg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Bc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=eS(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ki(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ki)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}te=Ki.prototype;te.R=function(){wh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};te.T=function(){return wh(this),this.g.concat()};function wh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ni(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ni(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}te.get=function(t,e){return ni(this.h,t)?this.h[t]:e};te.set=function(t,e){ni(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};te.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ni(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Gg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ri(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ri){this.g=e!==void 0?e:t.g,au(this,t.j),this.s=t.s,uu(this,t.i),lu(this,t.m),this.l=t.l,e=t.h;var n=new co;n.i=e.i,e.g&&(n.g=new Ki(e.g),n.h=e.h),Yg(this,n),this.o=t.o}else t&&(n=String(t).match(Gg))?(this.g=!!e,au(this,n[1]||"",!0),this.s=uo(n[2]||""),uu(this,n[3]||"",!0),lu(this,n[4]),this.l=uo(n[5]||"",!0),Yg(this,n[6]||"",!0),this.o=uo(n[7]||"")):(this.g=!!e,this.h=new co(null,this.g))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,Xg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,Xg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?oS:sS,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,uS)),t.join("")};function Yn(t){return new ri(t)}function au(t,e,n){t.j=n?uo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uu(t,e,n){t.i=n?uo(e,!0):e}function lu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yg(t,e,n){e instanceof co?(t.h=e,lS(t.h,t.g)):(n||(e=lo(e,aS)),t.h=new co(e,t.g))}function nt(t,e,n){t.h.set(e,n)}function cu(t){return nt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nS(t){return t instanceof ri?Yn(t):new ri(t,void 0)}function rS(t,e,n,r){var i=new ri(null,void 0);return t&&au(i,t),e&&uu(i,e),n&&lu(i,n),r&&(i.l=r),i}function uo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xg=/[#\/\?@]/g,sS=/[#\?:]/g,oS=/[#\?]/g,aS=/[#\?@]/g,uS=/#/g;function co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Ki,t.h=0,t.i&&tS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=co.prototype;te.add=function(t,e){br(this),this.i=null,t=Gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Qg(t,e){br(t),e=Gi(t,e),ni(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ni(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&wh(t)))}function Jg(t,e){return br(t),e=Gi(t,e),ni(t.g.h,e)}te.forEach=function(t,e){br(this),this.g.forEach(function(n,r){dg(n,function(i){t.call(e,i,r,this)},this)},this)};te.T=function(){br(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};te.R=function(t){br(this);var e=[];if(typeof t=="string")Jg(this,t)&&(e=pg(e,this.g.get(Gi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=pg(e,t[n])}return e};te.set=function(t,e){return br(this),this.i=null,t=Gi(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Zg(t,e,n){Qg(t,e),0<n.length&&(t.i=null,t.g.set(Gi(t,e),jc(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lS(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Qg(this,r),Zg(this,i,n))},t)),t.j=e}var cS=class{constructor(t,e){this.h=t,this.g=e}};function ey(t){this.l=t||hS,_e.PerformanceNavigationTiming?(t=_e.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_e.g&&_e.g.Ea&&_e.g.Ea()&&_e.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hS=10;function ty(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ny(t){return t.h?1:t.g?t.g.size:0}function _h(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bh(t,e){t.g?t.g.add(e):t.h=e}function ry(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ey.prototype.cancel=function(){if(this.i=iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function iy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jc(t.i)}function Th(){}Th.prototype.stringify=function(t){return _e.JSON.stringify(t,void 0)};Th.prototype.parse=function(t){return _e.JSON.parse(t,void 0)};function fS(){this.g=new Th}function dS(t,e,n){const r=n||"";try{vh(t,function(i,s){let o=i;Js(i)&&(o=sh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pS(t,e){const n=new tu;if(_e.Image){const r=new Image;r.onload=Ga(hu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ga(hu,n,r,"TestLoadImage: error",!1,e),r.onabort=Ga(hu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ga(hu,n,r,"TestLoadImage: timeout",!1,e),_e.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ho(t){this.l=t.$b||null,this.j=t.ib||!1}Dt(ho,hh);ho.prototype.g=function(){return new fu(this.l,this.j)};ho.prototype.i=function(t){return function(){return t}}({});function fu(t,e){bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Eh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(fu,bt);var Eh=0;te=fu.prototype;te.open=function(t,e){if(this.readyState!=Eh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_e).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=Eh};te.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof _e.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function sy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}te.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fo(this):po(this),this.readyState==3&&sy(this)}};te.Ua=function(t){this.g&&(this.response=this.responseText=t,fo(this))};te.Ta=function(t){this.g&&(this.response=t,fo(this))};te.ha=function(){this.g&&fo(this)};function fo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mS=_e.JSON.parse;function ft(t){bt.call(this),this.headers=new Ki,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=oy,this.K=this.L=!1}Dt(ft,bt);var oy="",gS=/^https?$/i,yS=["POST","PUT"];te=ft.prototype;te.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ph.g(),this.C=this.u?Vg(this.u):Vg(ph),this.g.onreadystatechange=At(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){ay(this,s);return}t=n||"";const i=new Ki(this.headers);r&&vh(r,function(s,o){i.set(o,s)}),r=AI(i.T()),n=_e.FormData&&t instanceof _e.FormData,!(0<=fg(yS,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cy(this),0<this.B&&((this.K=vS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.pa,this)):this.A=ch(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ay(this,s)}};function vS(t){return Wi&&NI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function wS(t){return t.toLowerCase()=="content-type"}te.pa=function(){typeof Fc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))};function ay(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uy(t),du(t)}function uy(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),du(this))};te.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),du(this,!0)),ft.Z.M.call(this)};te.Fa=function(){this.s||(this.F||this.v||this.l?ly(this):this.cb())};te.cb=function(){ly(this)};function ly(t){if(t.h&&typeof Fc!="undefined"&&(!t.C[1]||Xn(t)!=4||t.ba()!=2)){if(t.v&&Xn(t)==4)ch(t.Fa,0,t);else if(Ot(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Gg)[1]||null;if(!i&&_e.self&&_e.self.location){var s=_e.self.location.protocol;i=s.substr(0,s.length-1)}r=!gS.test(i?i.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",uy(t)}}finally{du(t)}}}}function du(t,e){if(t.g){cy(t);const n=t.g,r=t.C[0]?Ka:null;t.g=null,t.C=null,e||Ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function cy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(_e.clearTimeout(t.A),t.A=null)}function Xn(t){return t.g?t.g.readyState:0}te.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};te.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mS(e)}};function hy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case oy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Da=function(){return this.m};te.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function _S(t){let e="";return Hc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_S(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):nt(t,e,n))}function mo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fy(t){this.za=0,this.l=[],this.h=new tu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=mo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=mo("baseRetryDelayMs",5e3,t),this.$a=mo("retryDelaySeedMs",1e4,t),this.Ya=mo("forwardChannelMaxRetries",2,t),this.ra=mo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ey(t&&t.concurrentRequestLimit),this.Ca=new fS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}te=fy.prototype;te.ma=8;te.G=1;function Ih(t){if(dy(t),t.G==3){var e=t.V++,n=Yn(t.F);nt(n,"SID",t.J),nt(n,"RID",e),nt(n,"TYPE","terminate"),go(t,n),e=new so(t,t.h,e,void 0),e.K=2,e.v=cu(Yn(n)),n=!1,_e.navigator&&_e.navigator.sendBeacon&&(n=_e.navigator.sendBeacon(e.v.toString(),"")),!n&&_e.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ty(e.l,null),e.g.ea(e.v)),e.F=Date.now(),oo(e)}_y(t)}te.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function pu(t){t.g&&(Ah(t),t.g.cancel(),t.g=null)}function dy(t){pu(t),t.u&&(_e.clearTimeout(t.u),t.u=null),gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&_e.clearTimeout(t.m),t.m=null)}function Sh(t,e){t.l.push(new cS(t.Za++,e)),t.G==3&&mu(t)}function mu(t){ty(t.i)||t.m||(t.m=!0,oh(t.Ha,t),t.C=0)}function bS(t,e){return ny(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ro(At(t.Ha,t,e),wy(t,t.C)),t.C++,!0)}te.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new so(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=vg(s),_g(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=my(this,i,e),n=Yn(this.F),nt(n,"RID",t),nt(n,"CVER",22),this.D&&nt(n,"X-HTTP-Session-Id",this.D),go(this,n),this.o&&s&&kh(n,this.o,s),bh(this.i,i),this.Ra&&nt(n,"TYPE","init"),this.ja?(nt(n,"$req",e),nt(n,"SID","null"),i.$=!0,gh(i,n,null)):gh(i,n,e),this.G=2}}else this.G==3&&(t?py(this,t):this.l.length==0||ty(this.i)||py(this))};function py(t,e){var n;e?n=e.m:n=t.V++;const r=Yn(t.F);nt(r,"SID",t.J),nt(r,"RID",n),nt(r,"AID",t.U),go(t,r),t.o&&t.s&&kh(r,t.o,t.s),n=new so(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=my(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bh(t.i,n),gh(n,r,e)}function go(t,e){t.j&&vh({},function(n,r){nt(e,r,n)})}function my(t,e,n){n=Math.min(t.l.length,n);var r=t.j?At(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{dS(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function gy(t){t.g||t.u||(t.Y=1,oh(t.Ga,t),t.A=0)}function Ch(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ro(At(t.Ga,t),wy(t,t.A)),t.A++,!0)}te.Ga=function(){if(this.u=null,yy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ro(At(this.bb,this),t)}};te.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ht(10),pu(this),yy(this))};function Ah(t){t.B!=null&&(_e.clearTimeout(t.B),t.B=null)}function yy(t){t.g=new so(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Yn(t.oa);nt(e,"RID","rpc"),nt(e,"SID",t.J),nt(e,"CI",t.N?"0":"1"),nt(e,"AID",t.U),go(t,e),nt(e,"TYPE","xmlhttp"),t.o&&t.s&&kh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=cu(Yn(e)),n.s=null,n.U=!0,Hg(n,t)}te.ab=function(){this.v!=null&&(this.v=null,pu(this),Ch(this),Ht(19))};function gu(t){t.v!=null&&(_e.clearTimeout(t.v),t.v=null)}function vy(t,e){var n=null;if(t.g==e){gu(t),Ah(t),t.g=null;var r=2}else if(_h(t.i,e))n=e.D,ry(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=nu(),Ot(r,new Fg(r,n,e,i)),mu(t)}else gy(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&bS(t,e)||r==2&&Ch(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ii(t,5);break;case 4:ii(t,10);break;case 3:ii(t,6);break;default:ii(t,2)}}}function wy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ii(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=At(t.jb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),_e.location&&_e.location.protocol=="http"||au(n,"https"),cu(n)),pS(n.toString(),r)}else Ht(2);t.G=0,t.j&&t.j.va(e),_y(t),dy(t)}te.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ht(2)):(this.h.info("Failed to ping google.com"),Ht(1))};function _y(t){t.G=0,t.I=-1,t.j&&((iy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,jc(t.l),t.l.length=0),t.j.ua())}function by(t,e,n){let r=nS(n);if(r.i!="")e&&uu(r,e+"."+r.i),lu(r,r.m);else{const i=_e.location;r=rS(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Hc(t.aa,function(i,s){nt(r,s,i)}),e=t.D,n=t.sa,e&&n&&nt(r,e,n),nt(r,"VER",t.ma),go(t,r),r}function Ty(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ft(new ho({ib:!0})):new ft(t.qa),e.L=t.H,e}function Ey(){}te=Ey.prototype;te.xa=function(){};te.wa=function(){};te.va=function(){};te.ua=function(){};te.Oa=function(){};function yu(){if(Wi&&!(10<=Number(PI)))throw Error("Environmental error: no available transport.")}yu.prototype.g=function(t,e){return new sn(t,e)};function sn(t,e){bt.call(this),this.g=new fy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yi(this)}Dt(sn,bt);sn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),oh(At(t.hb,t,e))),Ht(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=by(t,null,t.W),mu(t)};sn.prototype.close=function(){Ih(this.g)};sn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Sh(this.g,e)}else this.v?(e={},e.__data__=sh(t),Sh(this.g,e)):Sh(this.g,t)};sn.prototype.M=function(){this.g.j=null,delete this.j,Ih(this.g),delete this.g,sn.Z.M.call(this)};function ky(t){fh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Dt(ky,fh);function Iy(){dh.call(this),this.status=1}Dt(Iy,dh);function Yi(t){this.g=t}Dt(Yi,Ey);Yi.prototype.xa=function(){Ot(this.g,"a")};Yi.prototype.wa=function(t){Ot(this.g,new ky(t))};Yi.prototype.va=function(t){Ot(this.g,new Iy(t))};Yi.prototype.ua=function(){Ot(this.g,"b")};yu.prototype.createWebChannel=yu.prototype.g;sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;ru.NO_ERROR=0;ru.TIMEOUT=8;ru.HTTP_ERROR=6;Bg.COMPLETE="complete";jg.EventType=io;io.OPEN="a";io.CLOSE="b";io.ERROR="c";io.MESSAGE="d";bt.prototype.listen=bt.prototype.N;ft.prototype.listenOnce=ft.prototype.O;ft.prototype.getLastError=ft.prototype.La;ft.prototype.getLastErrorCode=ft.prototype.Da;ft.prototype.getStatus=ft.prototype.ba;ft.prototype.getResponseJson=ft.prototype.Qa;ft.prototype.getResponseText=ft.prototype.ga;ft.prototype.send=ft.prototype.ea;var TS=function(){return new yu},ES=function(){return nu()},Dh=ru,kS=Bg,IS=ei,Sy={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},SS=ho,vu=jg,CS=ft;const Cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new vc("@firebase/firestore");function Ay(){return si.logLevel}function le(t,...e){if(si.logLevel<=Ve.DEBUG){const n=e.map(Oh);si.debug(`Firestore (${Xi}): ${t}`,...n)}}function Tr(t,...e){if(si.logLevel<=Ve.ERROR){const n=e.map(Oh);si.error(`Firestore (${Xi}): ${t}`,...n)}}function Dy(t,...e){if(si.logLevel<=Ve.WARN){const n=e.map(Oh);si.warn(`Firestore (${Xi}): ${t}`,...n)}}function Oh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function Je(t,e){t||Ae()}function De(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class OS{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Je(typeof r.accessToken=="string"),new AS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new Xt(e)}}class RS{constructor(e,n,r){this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class xS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new RS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),new NS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rh.I=-1;class Oy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ze(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return on.fromMillis(Date.now())}static fromDate(e){return on.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new on(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new $e(e)}static min(){return new $e(new on(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(),r===void 0?r=e.length-n:r>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends yo{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const LS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends yo{construct(e,n,r){return new Qt(e,n,r)}static isValidIdentifier(e){return LS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.fields=e,e.sort(Qt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const US=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Je(!!t),typeof t=="string"){let e=0;const n=US.exec(t);if(Je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Py(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?Py(e):e}function wo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new on(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function $S(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(rt.fromString(e))}static fromName(e){return new we(rt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new rt(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:10:Ae()}function Pn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ji(r.bytesValue).isEqual(Ji(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return dt(r.geoPointValue.latitude)===dt(i.geoPointValue.latitude)&&dt(r.geoPointValue.longitude)===dt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return dt(r.integerValue)===dt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=dt(r.doubleValue),o=dt(i.doubleValue);return s===o?wu(s)===wu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ry(s)!==Ry(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Pn(s[a],o[a])))return!1;return!0}(t,e);default:return Ae()}}function _o(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return ze(n,r);switch(n){case 0:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=dt(i.integerValue||i.doubleValue),a=dt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(wo(t),wo(e));case 5:return ze(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ji(i),a=Ji(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=ze(o[u],a[u]);if(l!==0)return l}return ze(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ze(dt(i.latitude),dt(s.latitude));return o!==0?o:ze(dt(i.longitude),dt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=es(o[u],a[u]);if(l)return l}return ze(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=ze(a[c],l[c]);if(h!==0)return h;const f=es(o[a[c]],u[l[c]]);if(f!==0)return f}return ze(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=kr(t),r=kr(e),i=ze(n.seconds,r.seconds);return i!==0?i:ze(n.nanos,r.nanos)}function xh(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,we.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Nh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Nh(r.fields[a])}`;return s+"}"}(t.mapValue):Ae();var e,n}function Ly(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ph(t){return!!t&&"integerValue"in t}function Mh(t){return!!t&&"arrayValue"in t}function Uy(t){return!!t&&"nullValue"in t}function $y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _u(t){return!!t&&"mapValue"in t}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_u(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=Qt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_u(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_u(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new an(bo(this.value))}}function Fy(t){const e=[];return oi(t.fields,(n,r)=>{const i=new Qt([n]);if(_u(r)){const s=Fy(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vo(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Lt(e,0,$e.min(),an.empty(),0)}static newFoundDocument(e,n,r){return new Lt(e,1,n,r,0)}static newNoDocument(e,n){return new Lt(e,2,n,an.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,an.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function By(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FS(t,e,n,r,i,s,o)}function Lh(t){const e=De(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>VS(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=bu(e.startAt)),e.endAt&&(n+="|ub:",n+=bu(e.endAt)),e.R=n}return e.R}function BS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${xh(r.value)}`;var r}).join(", ")}]`),Zi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+bu(t.startAt)),t.endAt&&(e+=", endAt: "+bu(t.endAt)),`Target(${e})`}function Uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!YS(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Pn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qy(t.startAt,e.startAt)&&qy(t.endAt,e.endAt)}function $h(t){return we.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Wt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new jS(e,n,r):n==="array-contains"?new WS(e,r):n==="in"?new zS(e,r):n==="not-in"?new KS(e,r):n==="array-contains-any"?new GS(e,r):new Wt(e,n,r)}static P(e,n,r){return n==="in"?new qS(e,r):new HS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(es(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.v(es(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function VS(t){return t.field.canonicalString()+t.op.toString()+xh(t.value)}class jS extends Wt{constructor(e,n,r){super(e,n,r),this.key=we.fromName(r.referenceValue)}matches(e){const n=we.comparator(e.key,this.key);return this.v(n)}}class qS extends Wt{constructor(e,n){super(e,"in",n),this.keys=Vy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HS extends Wt{constructor(e,n){super(e,"not-in",n),this.keys=Vy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>we.fromName(r.referenceValue))}class WS extends Wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mh(n)&&_o(n.arrayValue,this.value)}}class zS extends Wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class KS extends Wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class GS extends Wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}class Fh{constructor(e,n){this.position=e,this.before=n}}function bu(t){return`${t.before?"b":"a"}:${t.position.map(e=>xh(e)).join(",")}`}class To{constructor(e,n="asc"){this.field=e,this.dir=n}}function YS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=we.comparator(we.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function qy(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function XS(t,e,n,r,i,s,o,a){return new Eo(t,e,n,r,i,s,o,a)}function Bh(t){return new Eo(t)}function Tu(t){return!Zi(t.limit)&&t.limitType==="F"}function Eu(t){return!Zi(t.limit)&&t.limitType==="L"}function Hy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wy(t){for(const e of t.filters)if(e.V())return e.field;return null}function zy(t){return t.collectionGroup!==null}function ko(t){const e=De(t);if(e.S===null){e.S=[];const n=Wy(e),r=Hy(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new To(n)),e.S.push(new To(Qt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new To(Qt.keyField(),s))}}}return e.S}function ui(t){const e=De(t);if(!e.D)if(e.limitType==="F")e.D=By(e.path,e.collectionGroup,ko(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ko(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new To(s.field,o))}const r=e.endAt?new Fh(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Fh(e.startAt.position,!e.startAt.before):null;e.D=By(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function QS(t,e,n){return new Eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Uh(ui(t),ui(e))&&t.limitType===e.limitType}function Ky(t){return`${Lh(ui(t))}|lt:${t.limitType}`}function Vh(t){return`Query(target=${BS(ui(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):we.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!jy(n.startAt,ko(n),r)||n.endAt&&jy(n.endAt,ko(n),r))}(t,e)}function Gy(t){return(e,n)=>{let r=!1;for(const i of ko(t)){const s=JS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JS(t,e,n){const r=t.field.isKeyField()?we.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?es(a,u):Ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function Xy(t){return{integerValue:""+t}}function ZS(t,e){return $S(e)?Xy(e):Yy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this._=void 0}}function eC(t,e,n){return t instanceof Cu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ts?Jy(t,e):t instanceof Io?Zy(t,e):function(r,i){const s=Qy(r,i),o=ev(s)+ev(r.N);return Ph(s)&&Ph(r.N)?Xy(o):Yy(r.k,o)}(t,e)}function tC(t,e,n){return t instanceof ts?Jy(t,e):t instanceof Io?Zy(t,e):n}function Qy(t,e){return t instanceof Au?Ph(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Cu extends Su{}class ts extends Su{constructor(e){super(),this.elements=e}}function Jy(t,e){const n=tv(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends Su{constructor(e){super(),this.elements=e}}function Zy(t,e){let n=tv(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Au extends Su{constructor(e,n){super(),this.k=e,this.N=n}}function ev(t){return dt(t.integerValue||t.doubleValue)}function tv(t){return Mh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.field=e,this.transform=n}}function rC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ts&&r instanceof ts||n instanceof Io&&r instanceof Io?Qi(n.elements,r.elements,Pn):n instanceof Au&&r instanceof Au?Pn(n.N,r.N):n instanceof Cu&&r instanceof Cu}(t.transform,e.transform)}class iC{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function sC(t,e,n){t instanceof Ru?function(r,i,s){const o=r.value.clone(),a=sv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof li?function(r,i,s){if(!Du(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(iv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function jh(t,e,n){t instanceof Ru?function(r,i,s){if(!Du(r.precondition,i))return;const o=r.value.clone(),a=ov(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(rv(i),o).setHasLocalMutations()}(t,e,n):t instanceof li?function(r,i,s){if(!Du(r.precondition,i))return;const o=ov(r.fieldTransforms,s,i),a=i.data;a.setAll(iv(r)),a.setAll(o),i.convertToFoundDocument(rv(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Du(r.precondition,i)&&i.convertToNoDocument($e.min())}(t,e)}function oC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Qy(r.transform,i||null);s!=null&&(n==null&&(n=an.empty()),n.set(r.field,s))}return n||null}function nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qi(n,r,(i,s)=>rC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function rv(t){return t.isFoundDocument()?t.version:$e.min()}class Ru extends Ou{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class li extends Ou{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sv(t,e,n){const r=new Map;Je(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tC(o,a,n[i]))}return r}function ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eC(s,o,e))}return r}class av extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class aC extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Le;function lC(t){switch(t){default:return Ae();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function uv(t){if(t===void 0)return Tr("GRPC error has no .code"),j.UNKNOWN;switch(t){case pt.OK:return j.OK;case pt.CANCELLED:return j.CANCELLED;case pt.UNKNOWN:return j.UNKNOWN;case pt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case pt.INTERNAL:return j.INTERNAL;case pt.UNAVAILABLE:return j.UNAVAILABLE;case pt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case pt.NOT_FOUND:return j.NOT_FOUND;case pt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case pt.ABORTED:return j.ABORTED;case pt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case pt.DATA_LOSS:return j.DATA_LOSS;default:return Ae()}}(Le=pt||(pt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:xt.RED,this.left=i!=null?i:xt.EMPTY,this.right=s!=null?s:xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new Ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lv(this.data.getIterator())}getIteratorFrom(e){return new lv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class lv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Ut(we.comparator);function ci(){return cC}const hC=new Ut(we.comparator);function qh(){return hC}const fC=new Ut(we.comparator);function dC(){return fC}const pC=new Nt(we.comparator);function et(...t){let e=pC;for(const n of t)e=e.add(n);return e}const mC=new Nt(ze);function cv(){return mC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n)),new Nu($e.min(),r,cv(),ci(),et())}}class So{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new So(Rt.EMPTY_BYTE_STRING,n,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class hv{constructor(e,n){this.targetId=e,this.M=n}}class fv{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dv{constructor(){this.F=0,this.L=mv(),this.B=Rt.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=et(),n=et(),r=et();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ae()}}),new So(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=mv()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class gC{constructor(e){this.et=e,this.nt=new Map,this.st=ci(),this.it=pv(),this.rt=new Nt(ze)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new we(s.path);this.at(n,o,Lt.newNoDocument(o,$e.min()))}else Je(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&$h(a.target)){const u=new we(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.at(o,u,Lt.newNoDocument(u,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=et();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Nu(e,n,this.rt,this.st,r);return this.st=ci(),this.it=pv(),this.rt=new Nt(ze),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new dv,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new Nt(ze),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new dv),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function pv(){return new Ut(we.comparator)}function mv(){return new Ut(we.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wC{constructor(e,n){this.databaseId=e,this.C=n}}function Mu(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gv(t,e){return t.C?e.toBase64():e.toUint8Array()}function _C(t,e){return Mu(t,e.toTimestamp())}function Jn(t){return Je(!!t),$e.fromTimestamp(function(e){const n=kr(e);return new on(n.seconds,n.nanos)}(t))}function Hh(t,e){return function(n){return new rt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function yv(t){const e=rt.fromString(t);return Je(Ev(e)),e}function Wh(t,e){return Hh(t.databaseId,e.path)}function zh(t,e){const n=yv(e);if(n.get(1)!==t.databaseId.projectId)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new we(vv(n))}function Kh(t,e){return Hh(t.databaseId,e)}function bC(t){const e=yv(t);return e.length===4?rt.emptyPath():vv(e)}function Gh(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vv(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wv(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function TC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.C?(Je(l===void 0||typeof l=="string"),Rt.fromBase64String(l||"")):(Je(l===void 0||l instanceof Uint8Array),Rt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?j.UNKNOWN:uv(u.code);return new re(l,u.message||"")}(o);n=new fv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zh(t,r.document.name),s=Jn(r.document.updateTime),o=new an({mapValue:{fields:r.document.fields}}),a=Lt.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Pu(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zh(t,r.document),s=r.readTime?Jn(r.readTime):$e.min(),o=Lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zh(t,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in e))return Ae();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new uC(i),o=r.targetId;n=new hv(o,s)}}return n}function EC(t,e){let n;if(e instanceof Ru)n={update:wv(t,e.key,e.value)};else if(e instanceof av)n={delete:Wh(t,e.key)};else if(e instanceof li)n={update:wv(t,e.key,e.data),updateMask:NC(e.fieldMask)};else{if(!(e instanceof aC))return Ae();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ts)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Io)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Au)return{fieldPath:s.field.canonicalString(),increment:o.N};throw Ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:_C(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ae()}(t,e.precondition)),n}function kC(t,e){return t&&t.length>0?(Je(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Jn(r.updateTime):Jn(i);return s.isEqual($e.min())&&(s=Jn(i)),new iC(s,r.transformResults||[])}(n,e))):[]}function IC(t,e){return{documents:[Kh(t,e.path)]}}function SC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if($y(c.value))return{unaryFilter:{field:ns(c.field),op:"IS_NAN"}};if(Uy(c.value))return{unaryFilter:{field:ns(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if($y(c.value))return{unaryFilter:{field:ns(c.field),op:"IS_NOT_NAN"}};if(Uy(c.value))return{unaryFilter:{field:ns(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(c.field),op:OC(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:ns(l.field),direction:DC(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||Zi(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=bv(e.startAt)),e.endAt&&(n.structuredQuery.endAt=bv(e.endAt)),n}function CC(t){let e=bC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Je(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=_v(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new To(rs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Zi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=Tv(n.startAt));let l=null;return n.endAt&&(l=Tv(n.endAt)),XS(e,i,o,s,a,"F",u,l)}function AC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function _v(t){return t?t.unaryFilter!==void 0?[xC(t)]:t.fieldFilter!==void 0?[RC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>_v(e)).reduce((e,n)=>e.concat(n)):Ae():[]}function bv(t){return{before:t.before,values:t.position}}function Tv(t){const e=!!t.before,n=t.values||[];return new Fh(n,e)}function DC(t){return yC[t]}function OC(t){return vC[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return Qt.fromServerFormat(t.fieldPath)}function RC(t){return Wt.create(rs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}function xC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=rs(t.unaryFilter.field);return Wt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=rs(t.unaryFilter.field);return Wt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rs(t.unaryFilter.field);return Wt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=rs(t.unaryFilter.field);return Wt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}function NC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ev(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const PC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,r)=>{n(e)})}static reject(e){return new ee((n,r)=>{r(e)})}static waitFor(e){return new ee((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=ee.resolve(!1);for(const r of e)n=n.next(i=>i?ee.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function Co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sC(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&jh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&jh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument($e.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),et())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,r)=>nv(n,r))&&Qi(this.baseMutations,e.baseMutations,(n,r)=>nv(n,r))}}class Yh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Je(e.mutations.length===r.length);let i=dC();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yh(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i,s=$e.min(),o=$e.min(),a=Rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.Gt=e}}function $C(t){const e=CC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?QS(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.zt=new BC}addToCollectionParentIndex(e,n){return this.zt.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.zt.getEntries(n))}}class BC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Nt(rt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Nt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new is(0)}static re(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==PC)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xy(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:$e.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Lt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ee.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return we.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):zy(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new we(n)).next(r=>{let i=qh();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=qh();return this.Jt.getCollectionParents(e,i).next(o=>ee.forEach(o,a=>{const u=function(l,c){return new Eo(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=Lt.newInvalidDocument(c),i=i.insert(c,h)),jh(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Iu(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=et();for(const o of n)for(const a of o.mutations)a instanceof li&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=et(),i=et();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual($e.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return(Tu(n)||Eu(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(Ay()<=Ve.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vh(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(e,n){let r=new Nt(Gy(e));return n.forEach((i,s)=>{Iu(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return Ay()<=Ve.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Vh(n)),this.Mn.getDocumentsMatchingQuery(e,n,$e.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Ut(ze),this.Kn=new Do(s=>Lh(s),Uh),this.jn=$e.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new kv(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function HC(t,e,n,r){return new qC(t,e,n,r)}async function Iv(t,e){const n=De(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new kv(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=et();for(const f of a){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of u){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return i.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function WC(t,e){const n=De(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let f=ee.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(p=>{const E=u.docVersions.get(m);Je(E!==null),p.version.compareTo(E)<0&&(c.applyToRemoteDocument(p,u),p.isValidDocument()&&l.addEntry(p,u.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function Sv(t){const e=De(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function zC(t,e){const n=De(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,c)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?f=f.withResumeToken(Rt.EMPTY_BYTE_STRING,$e.min()).withLastLimboFreeSnapshotVersion($e.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(c,f),function(m,p,E){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,l)&&a.push(n.He.updateTargetData(s,f))});let u=ci();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(KC(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual($e.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return ee.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,u)).next(()=>u)}).then(s=>(n.qn=i,s))}function KC(t,e,n,r,i){let s=et();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=ci();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual($e.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):le("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function GC(t,e){const n=De(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function YC(t,e){const n=De(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,ee.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new hi(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=De(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Co(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Cv(t,e,n){const r=De(t);let i=$e.min(),s=et();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=De(a),h=c.Kn.get(l);return h!==void 0?ee.resolve(c.qn.get(h)):c.He.getTargetData(u,l)}(r,o,ui(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:$e.min(),n?s:et())).next(a=>({documents:a,zn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return ee.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Jn(r.createTime)}),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:$C(r.bundledQuery),readTime:Jn(r.readTime)}}(n)),ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.ts=new Nt(Tt.es),this.ns=new Nt(Tt.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Tt(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new we(new rt([])),r=new Tt(n,e),i=new Tt(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new we(new rt([])),r=new Tt(n,e),i=new Tt(n,e+1);let s=et();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Tt(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return we.comparator(e.key,n.key)||ze(e.fs,n.fs)}static ss(e,n){return ze(e.fs,n.fs)||we.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Nt(Tt.es)}checkEmpty(e){return ee.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new LC(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Tt(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return ee.resolve(o)}lookupMutationBatch(e,n){return ee.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return ee.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return ee.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),ee.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(ze);return n.forEach(i=>{const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),ee.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;we.isDocumentKey(s)||(s=s.child(""));const o=new Tt(new we(s),0);let a=new Nt(ze);return this.ws.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.fs)),!0)},o),ee.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Je(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return ee.forEach(n.mutations,i=>{const s=new Tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Tt(n,0),i=this.ws.firstAfterOrEqual(r);return ee.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,ee.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ut(we.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ee.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=ci();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Lt.newInvalidDocument(i))}),ee.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=ci();const s=new we(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Iu(n,u)&&(i=i.insert(u.key,u.mutableCopy()))}return ee.resolve(i)}Es(e,n){return ee.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZC(this)}getSize(e){return ee.resolve(this.size)}}class ZC extends VC{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),ee.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.persistence=e,this.Is=new Do(n=>Lh(n),Uh),this.lastRemoteSnapshotVersion=$e.min(),this.highestTargetId=0,this.As=0,this.Rs=new Jh,this.targetCount=0,this.bs=is.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),ee.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new is(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.ae(n),ee.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ee.waitFor(s).next(()=>i)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return ee.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),ee.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),ee.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return ee.resolve(r)}containsKey(e,n){return ee.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.Ps={},this.Be=new Rh(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new eA(this),this.Jt=new FC,this.Je=function(r,i){return new JC(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new UC(n),this.Ye=new XC(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new QC(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){le("MemoryPersistence","Starting transaction:",e);const i=new nA(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return ee.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class nA extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class Zh{constructor(e){this.persistence=e,this.Cs=new Jh,this.Ns=null}static ks(e){return new Zh(e)}get xs(){if(this.Ns)return this.Ns;throw Ae()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),ee.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.xs,r=>{const i=we.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return ee.or([()=>ee.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class Av{constructor(){this.activeTargetIds=cv()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rA{constructor(){this.pi=new Av,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);le("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(u=>(le("RestConnection","Received: ",u),u),u=>{throw Dy("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=sA[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new CS;a.listenOnce(kS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dh.NO_ERROR:const l=a.getResponseJson();le("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Dh.TIMEOUT:le("Connection",'RPC "'+e+'" timed out'),o(new re(j.DEADLINE_EXCEEDED,"Request time out"));break;case Dh.HTTP_ERROR:const c=a.getStatus();if(le("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(p)>=0?p:j.UNKNOWN}(h.status);o(new re(f,h.message))}else o(new re(j.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new re(j.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{le("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=TS(),o=ES(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new SS({})),this.qi(a.initMessageHeaders,n,r),mm()||ym()||RT()||vm()||xT()||gm()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");le("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const f=new oA({Vi:p=>{h?le("Connection","Not sending because WebChannel is closed:",p):(c||(le("Connection","Opening WebChannel transport."),l.open(),c=!0),le("Connection","WebChannel sending:",p),l.send(p))},Si:()=>l.close()}),m=(p,E,d)=>{p.listen(E,y=>{try{d(y)}catch(w){setTimeout(()=>{throw w},0)}})};return m(l,vu.EventType.OPEN,()=>{h||le("Connection","WebChannel transport opened.")}),m(l,vu.EventType.CLOSE,()=>{h||(h=!0,le("Connection","WebChannel transport closed"),f.Oi())}),m(l,vu.EventType.ERROR,p=>{h||(h=!0,Dy("Connection","WebChannel transport errored:",p),f.Oi(new re(j.UNAVAILABLE,"The operation could not be completed")))}),m(l,vu.EventType.MESSAGE,p=>{var E;if(!h){const d=p.data[0];Je(!!d);const y=d,w=y.error||((E=y[0])===null||E===void 0?void 0:E.error);if(w){le("Connection","WebChannel received error:",w);const b=w.status;let C=function(S){const x=pt[S];if(x!==void 0)return uv(x)}(b),V=w.message;C===void 0&&(C=j.INTERNAL,V="Unknown error status: "+b+" with message "+w.message),h=!0,f.Oi(new re(C,V)),l.close()}else le("Connection","WebChannel received:",d),f.Mi(d)}}),m(o,IS.STAT_EVENT,p=>{p.stat===Sy.PROXY?le("Connection","Detected buffering proxy"):p.stat===Sy.NOPROXY&&le("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function ef(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new wC(t,!0)}class Ov{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&le("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r,i,s,o,a,u){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Ov(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new re(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uA extends Rv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=TC(this.k,e),r=function(i){if(!("targetChange"in i))return $e.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$e.min():s.readTime?Jn(s.readTime):$e.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Gh(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=$h(a)?{documents:IC(i,a)}:{query:SC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=gv(i,s.resumeToken):s.snapshotVersion.compareTo($e.min())>0&&(o.readTime=Mu(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=AC(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Gh(this.k),n.removeTarget=e,this.gr(n)}}class lA extends Rv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(Je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=kC(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.Cr(r,n)}return Je(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Gh(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EC(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class hA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Tr(n),this.Lr=!1):le("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{fi(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=De(a);u.Gr.add(4),await Oo(u),u.Jr.set("Unknown"),u.Gr.delete(4),await Uu(u)}(this))})}),this.Jr=new hA(r,i)}}async function Uu(t){if(fi(t))for(const e of t.zr)await e(!0)}async function Oo(t){for(const e of t.zr)await e(!1)}function xv(t,e){const n=De(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),rf(n)?nf(n):ss(n).lr()&&tf(n,e))}function Nv(t,e){const n=De(t),r=ss(n);n.Wr.delete(e),r.lr()&&Pv(n,e),n.Wr.size===0&&(r.lr()?r._r():fi(n)&&n.Jr.set("Unknown"))}function tf(t,e){t.Yr.X(e.targetId),ss(t).Pr(e)}function Pv(t,e){t.Yr.X(e),ss(t).vr(e)}function nf(t){t.Yr=new gC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ss(t).start(),t.Jr.Br()}function rf(t){return fi(t)&&!ss(t).hr()&&t.Wr.size>0}function fi(t){return De(t).Gr.size===0}function Mv(t){t.Yr=void 0}async function dA(t){t.Wr.forEach((e,n)=>{tf(t,e)})}async function pA(t,e){Mv(t),rf(t)?(t.Jr.Kr(e),nf(t)):t.Jr.set("Unknown")}async function mA(t,e,n){if(t.Jr.set("Online"),e instanceof fv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof Pu?t.Yr.ot(e):e instanceof hv?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual($e.min()))try{const r=await Sv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(u);l&&i.Wr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken(Rt.EMPTY_BYTE_STRING,u.snapshotVersion)),Pv(i,a);const l=new hi(u.target,a,1,u.sequenceNumber);tf(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){le("RemoteStore","Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!Co(e))throw e;t.Gr.add(1),await Oo(t),t.Jr.set("Offline"),n||(n=()=>Sv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Uu(t)})}function Lv(t,e){return e().catch(n=>$u(t,n,e))}async function Fu(t){const e=De(t),n=Ir(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;gA(e);)try{const i=await GC(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,yA(e,i)}catch(i){await $u(e,i)}Uv(e)&&$v(e)}function gA(t){return fi(t)&&t.Qr.length<10}function yA(t,e){t.Qr.push(e);const n=Ir(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Uv(t){return fi(t)&&!Ir(t).hr()&&t.Qr.length>0}function $v(t){Ir(t).start()}async function vA(t){Ir(t).kr()}async function wA(t){const e=Ir(t);for(const n of t.Qr)e.Dr(n.mutations)}async function _A(t,e,n){const r=t.Qr.shift(),i=Yh.from(r,e,n);await Lv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fu(t)}async function bA(t,e){e&&Ir(t).Sr&&await async function(n,r){if(i=r.code,lC(i)&&i!==j.ABORTED){const s=n.Qr.shift();Ir(n).wr(),await Lv(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fu(n)}var i}(t,e),Uv(t)&&$v(t)}async function Fv(t,e){const n=De(t);n.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.Gr.add(3),await Oo(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Uu(n)}async function TA(t,e){const n=De(t);e?(n.Gr.delete(2),await Uu(n)):e||(n.Gr.add(2),await Oo(n),n.Jr.set("Unknown"))}function ss(t){return t.Xr||(t.Xr=function(e,n,r){const i=De(e);return i.Or(),new uA(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:dA.bind(null,t),Ni:pA.bind(null,t),br:mA.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),rf(t)?nf(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Mv(t))})),t.Xr}function Ir(t){return t.Zr||(t.Zr=function(e,n,r){const i=De(e);return i.Or(),new lA(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:vA.bind(null,t),Ni:bA.bind(null,t),Nr:wA.bind(null,t),Cr:_A.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await Fu(t)):(await t.Zr.stop(),t.Qr.length>0&&(le("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new sf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function of(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),Co(t))return new re(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||we.comparator(n.key,r.key):(n,r)=>we.comparator(n.key,r.key),this.keyedMap=qh(),this.sortedSet=new Ut(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.eo=new Ut(we.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):Ae():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new as(e,n,os.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.so=void 0,this.listeners=[]}}class kA{constructor(){this.queries=new Do(e=>Ky(e),ku),this.onlineState="Unknown",this.io=new Set}}async function Vv(t,e){const n=De(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EA),i)try{s.so=await n.onListen(r)}catch(o){const a=of(o,`Initialization of query '${Vh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&af(n)}async function jv(t,e){const n=De(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function IA(t,e){const n=De(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&af(n)}function SA(t,e,n){const r=De(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function af(t){t.io.forEach(e=>{e.next()})}class qv{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class CA{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=et(),this.mutatedKeys=et(),this.Ao=Gy(e),this.Ro=new os(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new Bv,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Tu(this.query)&&i.size===this.query.limit?i.last():null,l=Eu(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),m=Iu(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let d=!1;f&&m?f.data.isEqual(m.data)?p!==E&&(r.track({type:3,doc:m}),d=!0):this.Vo(f,m)||(r.track({type:2,doc:m}),d=!0,(u&&this.Ao(m,u)>0||l&&this.Ao(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),d=!0):f&&!m&&(r.track({type:1,doc:f}),d=!0,(u||l)&&(a=!0)),d&&(m?(o=o.add(m),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Tu(this.query)||Eu(this.query))for(;o.size>this.query.limit;){const c=Tu(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,c)=>function(h,f){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return m(h)-m(f)}(l.type,c.type)||this.Ao(l.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,s.length!==0||u?{snapshot:new as(this.query,e.Ro,i,s,e.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Bv,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=et(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new Wv(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Hv(r))}),n}ko(e){this.To=e.zn,this.Io=et();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return as.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class AA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DA{constructor(e){this.key=e,this.$o=!1}}class OA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Do(a=>Ky(a),ku),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ut(we.comparator),this.Uo=new Map,this.qo=new Jh,this.Ko={},this.jo=new Map,this.Qo=is.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function RA(t,e){const n=VA(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await YC(n.localStore,ui(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xA(n,e,r,a==="current"),n.isPrimaryClient&&xv(n.remoteStore,o)}return i}async function xA(t,e,n,r){t.Go=(c,h,f)=>async function(m,p,E,d){let y=p.view.Po(E);y.Bn&&(y=await Cv(m.localStore,p.query,!1).then(({documents:C})=>p.view.Po(C,y)));const w=d&&d.targetChanges.get(p.targetId),b=p.view.applyChanges(y,m.isPrimaryClient,w);return Qv(m,p.targetId,b.Co),b.snapshot}(t,c,h,f);const i=await Cv(t.localStore,e,!0),s=new CA(e,i.zn),o=s.Po(i.documents),a=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Qv(t,n,u.Co);const l=new AA(e,n,s);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),u.snapshot}async function NA(t,e){const n=De(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!ku(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Nv(n.remoteStore,r.targetId),uf(n,r.targetId)}).catch(Ao)):(uf(n,r.targetId),await Qh(n.localStore,r.targetId,!0))}async function PA(t,e,n){const r=jA(t);try{const i=await function(s,o){const a=De(s),u=on.now(),l=o.reduce((h,f)=>h.add(f.key),et());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{c=f;const m=[];for(const p of o){const E=oC(p,c.get(p.key));E!=null&&m.push(new li(p.key,E,Fy(E.value.mapValue),Qn.exists(!0)))}return a.An.addMutationBatch(h,u,m,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ko[s.currentUser.toKey()];u||(u=new Ut(ze)),u=u.insert(o,a),s.Ko[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ro(r,i.changes),await Fu(r.remoteStore)}catch(i){const s=of(i,"Failed to persist write");n.reject(s)}}async function zv(t,e){const n=De(t);try{const r=await zC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(Je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?Je(o.$o):i.removedDocuments.size>0&&(Je(o.$o),o.$o=!1))}),await Ro(n,r,e)}catch(r){await Ao(r)}}function Kv(t,e,n){const r=De(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=De(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ro(o)&&(u=!0)}),u&&af(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MA(t,e,n){const r=De(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new Ut(we.comparator);o=o.insert(s,Lt.newNoDocument(s,$e.min()));const a=et().add(s),u=new Nu($e.min(),new Map,new Nt(ze),o,a);await zv(r,u),r.Bo=r.Bo.remove(s),r.Uo.delete(e),lf(r)}else await Qh(r.localStore,e,!1).then(()=>uf(r,e,n)).catch(Ao)}async function LA(t,e){const n=De(t),r=e.batch.batchId;try{const i=await WC(n.localStore,e);Yv(n,r,null),Gv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,i)}catch(i){await Ao(i)}}async function UA(t,e,n){const r=De(t);try{const i=await function(s,o){const a=De(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.An.lookupMutationBatch(u,o).next(c=>(Je(c!==null),l=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,l))})}(r.localStore,e);Yv(r,e,n),Gv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,i)}catch(i){await Ao(i)}}function Gv(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Yv(t,e,n){const r=De(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||Xv(t,r)})}function Xv(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Nv(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),lf(t))}function Qv(t,e,n){for(const r of n)r instanceof Hv?(t.qo.addReference(r.key,e),$A(t,r)):r instanceof Wv?(le("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Xv(t,r.key)):Ae()}function $A(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(le("SyncEngine","New document in limbo: "+n),t.Lo.add(r),lf(t))}function lf(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new we(rt.fromString(e)),r=t.Qo.next();t.Uo.set(r,new DA(n)),t.Bo=t.Bo.insert(n,r),xv(t.remoteStore,new hi(ui(Bh(n.path)),r,2,Rh.I))}}async function Ro(t,e,n){const r=De(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,u)=>{o.push(r.Go(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Xh.$n(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,u){const l=De(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>ee.forEach(u,h=>ee.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>ee.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Co(c))throw c;le("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=l.qn.get(h),m=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(m);l.qn=l.qn.insert(h,p)}}}(r.localStore,s))}async function FA(t,e){const n=De(t);if(!n.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const r=await Iv(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new re(j.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Gn)}}function BA(t,e){const n=De(t),r=n.Uo.get(e);if(r&&r.$o)return et().add(r.key);{let i=et();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function VA(t){const e=De(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MA.bind(null,e),e.Oo.br=IA.bind(null,e.eventManager),e.Oo.zo=SA.bind(null,e.eventManager),e}function jA(t){const e=De(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UA.bind(null,e),e}class qA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return HC(this.persistence,new jC,e.initialUser,this.k)}Yo(e){return new tA(Zh.ks,this.k)}Jo(e){return new rA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kA}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new aA(i));var i;return function(s,o,a,u){return new cA(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Kv(this.syncEngine,a,0),o=Dv.Pt()?new Dv:new iA,new fA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new OA(r,i,s,o,a,u);return l&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=De(e);le("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Oo(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=Oy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{le("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(le("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=of(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zA(t,e){t.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Iv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function KA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GA(t);le("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Fv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Fv(e.remoteStore,s)),t.onlineComponents=e}async function GA(t){return t.offlineComponents||(le("FirestoreClient","Using default OfflineComponentProvider"),await zA(t,new qA)),t.offlineComponents}async function Zv(t){return t.onlineComponents||(le("FirestoreClient","Using default OnlineComponentProvider"),await KA(t,new HA)),t.onlineComponents}function YA(t){return Zv(t).then(e=>e.syncEngine)}async function cf(t){const e=await Zv(t),n=e.eventManager;return n.onListen=RA.bind(null,e.syncEngine),n.onUnlisten=NA.bind(null,e.syncEngine),n}function XA(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Jv({next:h=>{s.enqueueAndForget(()=>jv(i,c)),h.fromCache&&a.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new qv(o,l,{includeMetadataChanges:!0,wo:!0});return Vv(i,c)}(await cf(t),t.asyncQueue,e,n,r)),r.promise}class QA{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e,n){if(!n)throw new re(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JA(t,e,n,r){if(e===!0&&r===!0)throw new re(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n0(t){if(!we.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r0(t){if(we.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bu(t);throw new re(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new re(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,JA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i0({}),this._settingsFrozen=!1,e instanceof xo?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new re(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(i.options.projectId)}(e))}get app(){if(!this._app)throw new re(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DS;switch(n.type){case"gapi":const r=n.client;return Je(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new xS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new re(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=e0.get(e);n&&(le("ComponentProvider","Removing Datastore"),e0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Sr extends us{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new we(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function lM(t,e,...n){if(t=it(t),t0("collection","path",e),t instanceof hf){const r=rt.fromString(e,...n);return r0(r),new Sr(t,null,r)}{if(!(t instanceof zt||t instanceof Sr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return r0(r),new Sr(t.firestore,null,r)}}function ZA(t,e,...n){if(t=it(t),arguments.length===1&&(e=Oy.A()),t0("doc","path",e),t instanceof hf){const r=rt.fromString(e,...n);return n0(r),new zt(t,null,new we(r))}{if(!(t instanceof zt||t instanceof Sr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return n0(r),new zt(t.firestore,t instanceof Sr?t.converter:null,new we(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Ov(this,"async_queue_retry"),this.bc=()=>{const n=ef();n&&le("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=ef();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Er;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Co(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&Ae()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function s0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Cr extends hf{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new eD,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||o0(this),this._firestoreClient.terminate()}}function cM(t=Tc()){return Ma(t,"firestore").getImmediate()}function ff(t){return t._firestoreClient||o0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function o0(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new QA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(Rt.fromBase64String(e))}catch(n){throw new re(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=/^__.*__$/;class nD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ru(e,this.data,n,this.fieldTransforms)}}class a0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function u0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class qu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return zu(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(u0(this.$c)&&tD.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class rD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Lu(e)}Qc(e,n,r,i=!1){return new qu({$c:e,methodName:n,jc:r,path:Qt.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Hu(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new rD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l0(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);pf("Data must be an object, but it was:",o,r);const a=c0(r,o);let u,l;if(s.merge)u=new vo(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=mf(e,h,n);if(!o.contains(f))throw new re(j.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);f0(c,f)||c.push(f)}u=new vo(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new nD(new an(a),u,l)}class Wu extends ju{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wu}}function iD(t,e,n){return new qu({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class sD extends ju{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=iD(this,e,!0),r=this.Wc.map(s=>cs(s,n)),i=new ts(r);return new nC(e.path,i)}isEqual(e){return this===e}}function oD(t,e,n,r){const i=t.Qc(1,e,n);pf("Data must be an object, but it was:",i,r);const s=[],o=an.empty();oi(r,(u,l)=>{const c=gf(e,u,n);l=it(l);const h=i.Bc(c);if(l instanceof Wu)s.push(c);else{const f=cs(l,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new vo(s);return new a0(o,a,i.fieldTransforms)}function aD(t,e,n,r,i,s){const o=t.Qc(1,e,n),a=[mf(e,r,n)],u=[i];if(s.length%2!=0)throw new re(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(mf(e,s[f])),u.push(s[f+1]);const l=[],c=an.empty();for(let f=a.length-1;f>=0;--f)if(!f0(l,a[f])){const m=a[f];let p=u[f];p=it(p);const E=o.Bc(m);if(p instanceof Wu)l.push(m);else{const d=cs(p,E);d!=null&&(l.push(m),c.set(m,d))}}const h=new vo(l);return new a0(c,h,o.fieldTransforms)}function uD(t,e,n,r=!1){return cs(n,t.Qc(r?4:3,e))}function cs(t,e){if(h0(t=it(t)))return pf("Unsupported field value:",e,t),c0(t,e);if(t instanceof ju)return function(n,r){if(!u0(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=cs(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=it(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZS(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=on.fromDate(n);return{timestampValue:Mu(r.k,i)}}if(n instanceof on){const i=new on(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mu(r.k,i)}}if(n instanceof df)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ls)return{bytesValue:gv(r.k,n._byteString)};if(n instanceof zt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Bu(n)}`)}(t,e)}function c0(t,e){const n={};return xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=cs(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof on||t instanceof df||t instanceof ls||t instanceof zt||t instanceof ju)}function pf(t,e,n){if(!h0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bu(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function mf(t,e,n){if((e=it(e))instanceof Vu)return e._internalPath;if(typeof e=="string")return gf(t,e);throw zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const lD=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(lD)>=0)throw zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vu(...e.split("."))._internalPath}catch{throw zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(j.INVALID_ARGUMENT,a+t+u)}function f0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cD extends d0{data(){return super.data()}}function yf(t,e){return typeof e=="string"?gf(t,e):e instanceof Vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class p0 extends d0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ku extends p0{data(e={}){return super.data(e)}}class m0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new No(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ku(this._firestore,this._userDataWriter,r.key,r,new No(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new No(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new No(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:hD(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){if(Eu(t)&&t.explicitOrderBy.length===0)throw new re(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fD{}function hM(t,...e){for(const n of e)t=n._apply(t);return t}class dD extends fD{constructor(e,n,r){super(),this.zc=e,this.Hc=n,this.Jc=r,this.type="where"}_apply(e){const n=Hu(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new re(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){v0(c,l);const m=[];for(const p of c)m.push(y0(a,i,p));h={arrayValue:{values:m}}}else h=y0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||v0(c,l),h=uD(o,s,c,l==="in"||l==="not-in");const f=Wt.create(u,l,h);return function(m,p){if(p.V()){const d=Wy(m);if(d!==null&&!d.isEqual(p.field))throw new re(j.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${d.toString()}' and '${p.field.toString()}'`);const y=Hy(m);y!==null&&pD(m,p.field,y)}const E=function(d,y){for(const w of d.filters)if(y.indexOf(w.op)>=0)return w.op;return null}(m,function(d){switch(d){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(E!==null)throw E===p.op?new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${E.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new us(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Eo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function fM(t,e,n){const r=e,i=yf("where",t);return new dD(i,r,n)}function y0(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new re(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zy(e)&&n.indexOf("/")!==-1)throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(rt.fromString(n));if(!we.isDocumentKey(r))throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ly(t,new we(r))}if(n instanceof zt)return Ly(t,n._key);throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bu(n)}.`)}function v0(t,e){if(!Array.isArray(t)||t.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new re(j.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function pD(t,e,n){if(!n.isEqual(e))throw new re(j.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ae()}}convertObject(e,n){const r={};return oi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new df(dt(e.latitude),dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Py(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new on(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);Je(Ev(r));const i=new xo(r.get(1),r.get(3)),s=new we(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vf extends mD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function dM(t){t=wn(t,us);const e=wn(t.firestore,Cr),n=ff(e),r=new vf(e);return g0(t._query),XA(n,t._query).then(i=>new m0(e,r,t,i))}function pM(t,e,n){t=wn(t,zt);const r=wn(t.firestore,Cr),i=w0(t.converter,e,n);return Gu(r,[l0(Hu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function mM(t,e,n,...r){t=wn(t,zt);const i=wn(t.firestore,Cr),s=Hu(i);let o;return o=typeof(e=it(e))=="string"||e instanceof Vu?aD(s,"updateDoc",t._key,e,n,r):oD(s,"updateDoc",t._key,e),Gu(i,[o.toMutation(t._key,Qn.exists(!0))])}function gM(t){return Gu(wn(t.firestore,Cr),[new av(t._key,Qn.none())])}function yM(t,e){const n=wn(t.firestore,Cr),r=ZA(t),i=w0(t.converter,e);return Gu(n,[l0(Hu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qn.exists(!1))]).then(()=>r)}function vM(t,...e){var n,r,i;t=it(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||s0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(s0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof zt)l=wn(t.firestore,Cr),c=Bh(t._key.path),u={next:h=>{e[o]&&e[o](gD(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wn(t,us);l=wn(h.firestore,Cr),c=h._query;const f=new vf(l);u={next:m=>{e[o]&&e[o](new m0(l,f,h,m))},error:e[o+1],complete:e[o+2]},g0(t._query)}return function(h,f,m,p){const E=new Jv(p),d=new qv(f,E,m);return h.asyncQueue.enqueueAndForget(async()=>Vv(await cf(h),d)),()=>{E.nc(),h.asyncQueue.enqueueAndForget(async()=>jv(await cf(h),d))}}(ff(l),c,a,u)}function Gu(t,e){return function(n,r){const i=new Er;return n.asyncQueue.enqueueAndForget(async()=>PA(await YA(n),r,i)),i.promise}(ff(t),e)}function gD(t,e,n){const r=n.docs.get(e._key),i=new vf(t);return new p0(t,i,e._key,r,new No(n.hasPendingWrites,n.fromCache),e.converter)}function wM(...t){return new sD("arrayUnion",t)}(function(t,e=!0){(function(n){Xi=n})(Fi),$i(new Kr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Cr(i,new OS(n.getProvider("auth-internal")),new PS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Rn(Cy,"3.4.4",t),Rn(Cy,"3.4.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebasestorage.googleapis.com",b0="storageBucket",yD=2*60*1e3,vD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends pr{constructor(e,n){super(wf(e),`Firebase Storage: ${n} (${wf(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}_codeEquals(e){return wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function wf(t){return"storage/"+t}function _f(){const t="An unknown error occurred, please check the error payload for server response.";return new ut("unknown",t)}function wD(t){return new ut("object-not-found","Object '"+t+"' does not exist.")}function _D(t){return new ut("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut("unauthenticated",t)}function TD(){return new ut("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ED(t){return new ut("unauthorized","User does not have permission to access '"+t+"'.")}function kD(){return new ut("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function T0(){return new ut("canceled","User canceled the upload/download.")}function ID(t){return new ut("invalid-url","Invalid URL '"+t+"'.")}function SD(t){return new ut("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function CD(){return new ut("no-default-bucket","No default bucket found. Did you set the '"+b0+"' property when initializing the app?")}function E0(){return new ut("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function AD(){return new ut("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function DD(){return new ut("no-download-url","The given file does not have any download URLs.")}function bf(t){return new ut("invalid-argument",t)}function k0(){return new ut("app-deleted","The Firebase app was deleted.")}function OD(t){return new ut("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Po(t,e){return new ut("invalid-format","String does not match format '"+t+"': "+e)}function Mo(t){throw new ut("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw SD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},E=n===_0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",y=new RegExp(`^https?://${E}/${i}/${d}`,"i"),b=[{regex:a,indices:u,postModify:s},{regex:m,indices:p,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let C=0;C<b.length;C++){const V=b[C],S=V.regex.exec(e);if(S){const x=S[V.indices.bucket];let T=S[V.indices.path];T||(T=""),r=new un(x,T),V.postModify(r);break}}if(r==null)throw ID(e);return r}}class RD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...d){l||(l=!0,e.apply(null,d))}function h(d){i=setTimeout(()=>{i=null,t(m,u())},d)}function f(){s&&clearTimeout(s)}function m(d,...y){if(l){f();return}if(d){f(),c.call(null,d,...y);return}if(u()||o){f(),c.call(null,d,...y);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,h(b)}let p=!1;function E(d){p||(p=!0,f(),!l&&(i!==null?(d||(a=2),clearTimeout(i),h(0)):d||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function ND(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t){return t!==void 0}function MD(t){return typeof t=="function"}function LD(t){return typeof t=="object"&&!Array.isArray(t)}function Yu(t){return typeof t=="string"||t instanceof String}function I0(t){return Tf()&&t instanceof Blob}function Tf(){return typeof Blob!="undefined"}function S0(t,e,n,r){if(r<e)throw bf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function C0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(di||(di={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Xu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===di.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===di.ABORT;r(!1,new Xu(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Xu(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());PD(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=_f();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?k0():T0();o(u)}else{const u=kD();o(u)}};this.canceled_?n(!1,new Xu(!1,null,!0)):this.backoffId_=xD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ND(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Xu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $D(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function BD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jD(t,e,n,r,i,s){const o=C0(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return BD(u,e),$D(u,n),FD(u,s),VD(u,r),new UD(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function HD(...t){const e=qD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tf())return new Blob(t);throw new ut("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function WD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ef{constructor(e,n){this.data=e,this.contentType=n||null}}function KD(t,e){switch(t){case Mn.RAW:return new Ef(A0(e));case Mn.BASE64:case Mn.BASE64URL:return new Ef(D0(t,e));case Mn.DATA_URL:return new Ef(YD(e),XD(e))}throw _f()}function A0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function GD(t){let e;try{e=decodeURIComponent(t)}catch{throw Po(Mn.DATA_URL,"Malformed data URL.")}return A0(e)}function D0(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Po(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zD(e)}catch{throw Po(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class O0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Po(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=QD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function YD(t){const e=new O0(t);return e.base64?D0(Mn.BASE64,e.rest):GD(e.rest)}function XD(t){return new O0(t).contentType}function QD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){let r=0,i="";I0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(I0(this.data_)){const r=this.data_,i=WD(r,e,n);return i===null?null:new Ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(Tf()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(HD.apply(null,n))}else{const n=e.map(o=>Yu(o)?KD(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){let e;try{e=JSON.parse(t)}catch{return null}return LD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function x0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t,e){return e}class Kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||eO}}let Qu=null;function tO(t){return!Yu(t)||t.length<2?t:x0(t)}function N0(){if(Qu)return Qu;const t=[];t.push(new Kt("bucket")),t.push(new Kt("generation")),t.push(new Kt("metageneration")),t.push(new Kt("name","fullPath",!0));function e(s,o){return tO(o)}const n=new Kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Kt("size");return i.xform=r,t.push(i),t.push(new Kt("timeCreated")),t.push(new Kt("updated")),t.push(new Kt("md5Hash",null,!0)),t.push(new Kt("cacheControl",null,!0)),t.push(new Kt("contentDisposition",null,!0)),t.push(new Kt("contentEncoding",null,!0)),t.push(new Kt("contentLanguage",null,!0)),t.push(new Kt("contentType",null,!0)),t.push(new Kt("metadata","customMetadata",!0)),Qu=t,Qu}function nO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new un(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function rO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return nO(r,t),r}function P0(t,e,n){const r=R0(e);return r===null?null:rO(t,r,n)}function iO(t,e,n,r){const i=R0(e);if(i===null||!Yu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),m=Lo(f,n,r),p=C0({alt:"media",token:l});return m+p})[0]}function M0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class hs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){if(!t)throw _f()}function kf(t,e){function n(r,i){const s=P0(t,i,e);return Zn(s!==null),s}return n}function sO(t,e){function n(r,i){const s=P0(t,i,e);return Zn(s!==null),iO(s,i,t.host,t._protocol)}return n}function Uo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=TD():i=bD():n.getStatus()===402?i=_D(t.bucket):n.getStatus()===403?i=ED(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function L0(t){const e=Uo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=wD(t.path)),s.serverResponse=i.serverResponse,s}return n}function oO(t,e,n){const r=e.fullServerUrl(),i=Lo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hs(i,s,kf(t,n),o);return a.errorHandler=L0(e),a}function aO(t,e,n){const r=e.fullServerUrl(),i=Lo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hs(i,s,sO(t,n),o);return a.errorHandler=L0(e),a}function uO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function U0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uO(null,e)),r}function lO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let C=0;C<2;C++)b=b+Math.random().toString().slice(2);return b}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=U0(e,r,i),c=M0(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+u+"--",m=Ar.getBlob(h,r,f);if(m===null)throw E0();const p={name:l.fullPath},E=Lo(s,t.host,t._protocol),d="POST",y=t.maxUploadRetryTime,w=new hs(E,d,kf(t,n),y);return w.urlParams=p,w.headers=o,w.body=m.uploadData(),w.errorHandler=Uo(e),w}class Ju{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function If(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Zn(!1)}return Zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function cO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=U0(e,r,i),a={name:o.fullPath},u=Lo(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=M0(o,n),f=t.maxUploadRetryTime;function m(E){If(E);let d;try{d=E.getResponseHeader("X-Goog-Upload-URL")}catch{Zn(!1)}return Zn(Yu(d)),d}const p=new hs(u,l,m,f);return p.urlParams=a,p.headers=c,p.body=h,p.errorHandler=Uo(e),p}function hO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=If(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Zn(!1)}h||Zn(!1);const f=Number(h);return Zn(!isNaN(f)),new Ju(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new hs(n,o,s,a);return u.headers=i,u.errorHandler=Uo(e),u}const $0=256*1024;function fO(t,e,n,r,i,s,o,a){const u=new Ju(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw AD();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,f=h+c,p={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},E=r.slice(h,f);if(E===null)throw E0();function d(C,V){const S=If(C,["active","final"]),x=u.current+c,T=r.size();let A;return S==="final"?A=kf(e,s)(C,V):A=null,new Ju(x,T,S==="final",A)}const y="POST",w=e.maxUploadRetryTime,b=new hs(n,y,d,w);return b.headers=p,b.body=E.uploadData(),b.progressCallback=a||null,b.errorHandler=Uo(t),b}const Jt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Sf(t){switch(t){case"running":case"pausing":case"canceling":return Jt.RUNNING;case"paused":return Jt.PAUSED;case"success":return Jt.SUCCESS;case"canceled":return Jt.CANCELED;case"error":return Jt.ERROR;default:return Jt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,r){if(MD(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class pO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Mo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mO extends pO{initXhr(){this.xhr_.responseType="text"}}function ds(){return new mO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=N0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=cO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ds,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=hO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ds,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=$0*this._chunkMultiplier,n=new Ju(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=fO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ds,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){$0*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=oO(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ds,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=lO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ds,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=T0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Sf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new dO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Sf(this._state)){case Jt.SUCCESS:fs(this._resolve.bind(null,this.snapshot))();break;case Jt.CANCELED:case Jt.ERROR:const n=this._reject;fs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Sf(this._state)){case Jt.RUNNING:case Jt.PAUSED:e.next&&fs(e.next.bind(e,this.snapshot))();break;case Jt.SUCCESS:e.complete&&fs(e.complete.bind(e))();break;case Jt.CANCELED:case Jt.ERROR:e.error&&fs(e.error.bind(e,this._error))();break;default:e.error&&fs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pi(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x0(this._location.path)}get storage(){return this._service}get parent(){const e=JD(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OD(e)}}function yO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new gO(t,new Ar(e),n)}function vO(t){t._throwIfRoot("getDownloadURL");const e=aO(t.storage,t._location,N0());return t.storage.makeRequestWithTokens(e,ds).then(n=>{if(n===null)throw DD();return n})}function wO(t,e){const n=ZD(t._location.path,e),r=new un(t._location.bucket,n);return new pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){return/^[A-Za-z]+:\/\//.test(t)}function bO(t,e){return new pi(t,e)}function F0(t,e){if(t instanceof Cf){const n=t;if(n._bucket==null)throw CD();const r=new pi(n,n._bucket);return e!=null?F0(r,e):r}else return e!==void 0?wO(t,e):t}function TO(t,e){if(e&&_O(e)){if(t instanceof Cf)return bO(t,e);throw bf("To use ref(service, url), the first argument must be a Storage instance.")}else return F0(t,e)}function B0(t,e){const n=e==null?void 0:e[b0];return n==null?null:un.makeFromBucketSpec(n,t)}class Cf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=_0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yD,this._maxUploadRetryTime=vD,this._requests=new Set,i!=null?this._bucket=un.makeFromBucketSpec(i,this._host):this._bucket=B0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=B0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){S0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){S0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pi(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new RD(k0());{const s=jD(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const V0="@firebase/storage",j0="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="storage";function _M(t,e,n){return t=it(t),yO(t,e,n)}function bM(t){return t=it(t),vO(t)}function TM(t,e){return t=it(t),TO(t,e)}function EM(t=Tc(),e){return t=it(t),Ma(t,q0).getImmediate({identifier:e})}function EO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cf(n,r,i,e,Fi)}function kO(){$i(new Kr(q0,EO,"PUBLIC").setMultipleInstances(!0)),Rn(V0,j0,""),Rn(V0,j0,"esm2017")}kO();/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const H0=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ps=t=>H0?Symbol(t):"_vr_"+t,IO=ps("rvlm"),W0=ps("rvd"),Zu=ps("r"),z0=ps("rl"),Af=ps("rvl"),ms=typeof window!="undefined";function SO(t){return t.__esModule||H0&&t[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function Df(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const $o=()=>{},CO=/\/$/,AO=t=>t.replace(CO,"");function Of(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),u=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,u>-1?u:e.length),i=t(s)),u>-1&&(r=r||e.slice(0,u),o=e.slice(u,e.length)),r=xO(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function DO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function K0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OO(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gs(e.matched[r],n.matched[i])&&G0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function G0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RO(t[n],e[n]))return!1;return!0}function RO(t,e){return Array.isArray(t)?Y0(t,e):Array.isArray(e)?Y0(e,t):t===e}function Y0(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function xO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Fo;(function(t){t.pop="pop",t.push="push"})(Fo||(Fo={}));var Bo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bo||(Bo={}));function NO(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AO(t)}const PO=/^[^#]+#/;function MO(t,e){return t.replace(PO,"#")+e}function LO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const el=()=>({left:window.pageXOffset,top:window.pageYOffset});function UO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=LO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function X0(t,e){return(history.state?history.state.position-e:-1)+t}const Rf=new Map;function $O(t,e){Rf.set(t,e)}function FO(t){const e=Rf.get(t);return Rf.delete(t),e}let BO=()=>location.protocol+"//"+location.host;function Q0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,u=i.slice(a);return u[0]!=="/"&&(u="/"+u),K0(u,"")}return K0(n,t)+r+i}function VO(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const m=Q0(t,location),p=n.value,E=e.value;let d=0;if(f){if(n.value=m,e.value=f,o&&o===p){o=null;return}d=E?f.position-E.position:0}else r(m);i.forEach(y=>{y(n.value,p,{delta:d,type:Fo.pop,direction:d?d>0?Bo.forward:Bo.back:Bo.unknown})})};function u(){o=n.value}function l(f){i.push(f);const m=()=>{const p=i.indexOf(f);p>-1&&i.splice(p,1)};return s.push(m),m}function c(){const{history:f}=window;!f.state||f.replaceState(Qe({},f.state,{scroll:el()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:u,listen:l,destroy:h}}function J0(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?el():null}}function jO(t){const{history:e,location:n}=window,r={value:Q0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(u,l,c){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+u:BO()+t+u;try{e[c?"replaceState":"pushState"](l,"",f),i.value=l}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function o(u,l){const c=Qe({},e.state,J0(i.value.back,u,i.value.forward,!0),l,{position:i.value.position});s(u,c,!0),r.value=u}function a(u,l){const c=Qe({},i.value,e.state,{forward:u,scroll:el()});s(c.current,c,!0);const h=Qe({},J0(r.value,u,null),{position:c.position+1},l);s(u,h,!1),r.value=u}return{location:r,state:i,push:a,replace:o}}function kM(t){t=NO(t);const e=jO(t),n=VO(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Qe({location:"",base:t,go:r,createHref:MO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qO(t){return typeof t=="string"||t&&typeof t=="object"}function Z0(t){return typeof t=="string"||typeof t=="symbol"}const Dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ew=ps("nf");var tw;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tw||(tw={}));function ys(t,e){return Qe(new Error,{type:t,[ew]:!0},e)}function mi(t,e){return t instanceof Error&&ew in t&&(e==null||!!(t.type&e))}const nw="[^/]+?",HO={sensitive:!1,strict:!1,start:!0,end:!0},WO=/[.+*?^${}()[\]/\\]/g;function zO(t,e){const n=Qe({},HO,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const c=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(WO,"\\$&"),m+=40;else if(f.type===1){const{value:p,repeatable:E,optional:d,regexp:y}=f;s.push({name:p,repeatable:E,optional:d});const w=y||nw;if(w!==nw){m+=10;try{new RegExp(`(${w})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+C.message)}}let b=E?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(b=d&&l.length<2?`(?:/${b})`:"/"+b),d&&(b+="?"),i+=b,m+=20,d&&(m+=-8),E&&(m+=-20),w===".*"&&(m+=-50)}c.push(m)}r.push(c)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const c=l.match(o),h={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",p=s[f-1];h[p.name]=m&&p.repeatable?m.split("/"):m}return h}function u(l){let c="",h=!1;for(const f of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:p,repeatable:E,optional:d}=m,y=p in l?l[p]:"";if(Array.isArray(y)&&!E)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(y)?y.join("/"):y;if(!w)if(d)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);c+=w}}return c}return{re:o,score:r,keys:s,parse:a,stringify:u}}function KO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function GO(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=KO(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const YO={type:0,value:""},XO=/[a-zA-Z0-9_]/;function QO(t){if(!t)return[[]];if(t==="/")return[[YO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,u,l="",c="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:c,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=u}for(;a<t.length;){if(u=t[a++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(l&&h(),o()):u===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:u==="("?n=2:XO.test(u)?f():(h(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--);break;case 2:u===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+u:n=3:c+=u;break;case 3:h(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function JO(t,e,n){const r=zO(QO(t.path),n),i=Qe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ZO(t,e){const n=[],r=new Map;e=iw({strict:!1,end:!0,sensitive:!1},e);function i(c){return r.get(c)}function s(c,h,f){const m=!f,p=tR(c);p.aliasOf=f&&f.record;const E=iw(e,c),d=[p];if("alias"in c){const b=typeof c.alias=="string"?[c.alias]:c.alias;for(const C of b)d.push(Qe({},p,{components:f?f.record.components:p.components,path:C,aliasOf:f?f.record:p}))}let y,w;for(const b of d){const{path:C}=b;if(h&&C[0]!=="/"){const V=h.record.path,S=V[V.length-1]==="/"?"":"/";b.path=h.record.path+(C&&S+C)}if(y=JO(b,h,E),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),m&&c.name&&!rw(y)&&o(c.name)),"children"in p){const V=p.children;for(let S=0;S<V.length;S++)s(V[S],y,f&&f.children[S])}f=f||y,u(y)}return w?()=>{o(w)}:$o}function o(c){if(Z0(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function u(c){let h=0;for(;h<n.length&&GO(c,n[h])>=0;)h++;n.splice(h,0,c),c.record.name&&!rw(c)&&r.set(c.record.name,c)}function l(c,h){let f,m={},p,E;if("name"in c&&c.name){if(f=r.get(c.name),!f)throw ys(1,{location:c});E=f.record.name,m=Qe(eR(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),p=f.stringify(m)}else if("path"in c)p=c.path,f=n.find(w=>w.re.test(p)),f&&(m=f.parse(p),E=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw ys(1,{location:c,currentLocation:h});E=f.record.name,m=Qe({},h.params,c.params),p=f.stringify(m)}const d=[];let y=f;for(;y;)d.unshift(y.record),y=y.parent;return{name:E,path:p,params:m,matched:d,meta:rR(d)}}return t.forEach(c=>s(c)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function eR(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function nR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function rw(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rR(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function iw(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const sw=/#/g,iR=/&/g,sR=/\//g,oR=/=/g,aR=/\?/g,ow=/\+/g,uR=/%5B/g,lR=/%5D/g,aw=/%5E/g,cR=/%60/g,uw=/%7B/g,hR=/%7C/g,lw=/%7D/g,fR=/%20/g;function xf(t){return encodeURI(""+t).replace(hR,"|").replace(uR,"[").replace(lR,"]")}function dR(t){return xf(t).replace(uw,"{").replace(lw,"}").replace(aw,"^")}function Nf(t){return xf(t).replace(ow,"%2B").replace(fR,"+").replace(sw,"%23").replace(iR,"%26").replace(cR,"`").replace(uw,"{").replace(lw,"}").replace(aw,"^")}function pR(t){return Nf(t).replace(oR,"%3D")}function mR(t){return xf(t).replace(sw,"%23").replace(aR,"%3F")}function gR(t){return t==null?"":mR(t).replace(sR,"%2F")}function tl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(ow," "),o=s.indexOf("="),a=tl(o<0?s:s.slice(0,o)),u=o<0?null:tl(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(u)}else e[a]=u}return e}function cw(t){let e="";for(let n in t){const r=t[n];if(n=pR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&Nf(s)):[r&&Nf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function vR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Vo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Or(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const u=h=>{h===!1?a(ys(4,{from:n,to:e})):h instanceof Error?a(h):qO(h)?a(ys(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,u);let c=Promise.resolve(l);t.length<3&&(c=c.then(u)),c.catch(h=>a(h))})}function Pf(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(wR(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Or(l,n,r,s,o))}else{let u=a();i.push(()=>u.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const c=SO(l)?l.default:l;s.components[o]=c;const f=(c.__vccOpts||c)[e];return f&&Or(f,n,r,s,o)()}))}}return i}function wR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hw(t){const e=$t(Zu),n=$t(z0),r=K(()=>e.resolve(k(t.to))),i=K(()=>{const{matched:u}=r.value,{length:l}=u,c=u[l-1],h=n.matched;if(!c||!h.length)return-1;const f=h.findIndex(gs.bind(null,c));if(f>-1)return f;const m=fw(u[l-2]);return l>1&&fw(c)===m&&h[h.length-1].path!==m?h.findIndex(gs.bind(null,u[l-2])):f}),s=K(()=>i.value>-1&&ER(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&G0(n.params,r.value.params));function a(u={}){return TR(u)?e[k(t.replace)?"replace":"push"](k(t.to)).catch($o):Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const _R=Gt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hw,setup(t,{slots:e}){const n=Di(hw(t)),{options:r}=$t(Zu),i=K(()=>({[dw(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dw(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ps("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),bR=_R;function TR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ER(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function fw(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dw=(t,e,n)=>t!=null?t:e!=null?e:n,kR=Gt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=$t(Af),i=K(()=>t.route||r.value),s=$t(W0,0),o=K(()=>i.value.matched[s]);ir(W0,s+1),ir(IO,o),ir(Af,i);const a=Te();return vn(()=>[a.value,o.value,t.name],([u,l,c],[h,f,m])=>{l&&(l.instances[c]=u,f&&f!==l&&u&&u===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!gs(l,f)||!h)&&(l.enterCallbacks[c]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=i.value,l=o.value,c=l&&l.components[t.name],h=t.name;if(!c)return pw(n.default,{Component:c,route:u});const f=l.props[t.name],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,E=Ps(c,Qe({},m,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return pw(n.default,{Component:E,route:u})||E}}});function pw(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const IR=kR;function IM(t){const e=ZO(t.routes,t),n=t.parseQuery||yR,r=t.stringifyQuery||cw,i=t.history,s=Vo(),o=Vo(),a=Vo(),u=G_(Dr);let l=Dr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Df.bind(null,R=>""+R),h=Df.bind(null,gR),f=Df.bind(null,tl);function m(R,ne){let N,Y;return Z0(R)?(N=e.getRecordMatcher(R),Y=ne):Y=R,e.addRoute(Y,N)}function p(R){const ne=e.getRecordMatcher(R);ne&&e.removeRoute(ne)}function E(){return e.getRoutes().map(R=>R.record)}function d(R){return!!e.getRecordMatcher(R)}function y(R,ne){if(ne=Qe({},ne||u.value),typeof R=="string"){const ve=Of(n,R,ne.path),g=e.resolve({path:ve.path},ne),_=i.createHref(ve.fullPath);return Qe(ve,g,{params:f(g.params),hash:tl(ve.hash),redirectedFrom:void 0,href:_})}let N;if("path"in R)N=Qe({},R,{path:Of(n,R.path,ne.path).path});else{const ve=Qe({},R.params);for(const g in ve)ve[g]==null&&delete ve[g];N=Qe({},R,{params:h(R.params)}),ne.params=h(ne.params)}const Y=e.resolve(N,ne),ye=R.hash||"";Y.params=c(f(Y.params));const Ne=DO(r,Qe({},R,{hash:dR(ye),path:Y.path})),pe=i.createHref(Ne);return Qe({fullPath:Ne,hash:ye,query:r===cw?vR(R.query):R.query||{}},Y,{redirectedFrom:void 0,href:pe})}function w(R){return typeof R=="string"?Of(n,R,u.value.path):Qe({},R)}function b(R,ne){if(l!==R)return ys(8,{from:ne,to:R})}function C(R){return x(R)}function V(R){return C(Qe(w(R),{replace:!0}))}function S(R){const ne=R.matched[R.matched.length-1];if(ne&&ne.redirect){const{redirect:N}=ne;let Y=typeof N=="function"?N(R):N;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=w(Y):{path:Y},Y.params={}),Qe({query:R.query,hash:R.hash,params:R.params},Y)}}function x(R,ne){const N=l=y(R),Y=u.value,ye=R.state,Ne=R.force,pe=R.replace===!0,ve=S(N);if(ve)return x(Qe(w(ve),{state:ye,force:Ne,replace:pe}),ne||N);const g=N;g.redirectedFrom=ne;let _;return!Ne&&OO(r,Y,N)&&(_=ys(16,{to:g,from:Y}),Se(Y,Y,!0,!1)),(_?Promise.resolve(_):A(g,Y)).catch(I=>mi(I)?I:v(I,g,Y)).then(I=>{if(I){if(mi(I,2))return x(Qe(w(I.to),{state:ye,force:Ne,replace:pe}),ne||g)}else I=O(g,Y,!0,pe,ye);return L(g,Y,I),I})}function T(R,ne){const N=b(R,ne);return N?Promise.reject(N):Promise.resolve()}function A(R,ne){let N;const[Y,ye,Ne]=SR(R,ne);N=Pf(Y.reverse(),"beforeRouteLeave",R,ne);for(const ve of Y)ve.leaveGuards.forEach(g=>{N.push(Or(g,R,ne))});const pe=T.bind(null,R,ne);return N.push(pe),vs(N).then(()=>{N=[];for(const ve of s.list())N.push(Or(ve,R,ne));return N.push(pe),vs(N)}).then(()=>{N=Pf(ye,"beforeRouteUpdate",R,ne);for(const ve of ye)ve.updateGuards.forEach(g=>{N.push(Or(g,R,ne))});return N.push(pe),vs(N)}).then(()=>{N=[];for(const ve of R.matched)if(ve.beforeEnter&&!ne.matched.includes(ve))if(Array.isArray(ve.beforeEnter))for(const g of ve.beforeEnter)N.push(Or(g,R,ne));else N.push(Or(ve.beforeEnter,R,ne));return N.push(pe),vs(N)}).then(()=>(R.matched.forEach(ve=>ve.enterCallbacks={}),N=Pf(Ne,"beforeRouteEnter",R,ne),N.push(pe),vs(N))).then(()=>{N=[];for(const ve of o.list())N.push(Or(ve,R,ne));return N.push(pe),vs(N)}).catch(ve=>mi(ve,8)?ve:Promise.reject(ve))}function L(R,ne,N){for(const Y of a.list())Y(R,ne,N)}function O(R,ne,N,Y,ye){const Ne=b(R,ne);if(Ne)return Ne;const pe=ne===Dr,ve=ms?history.state:{};N&&(Y||pe?i.replace(R.fullPath,Qe({scroll:pe&&ve&&ve.scroll},ye)):i.push(R.fullPath,ye)),u.value=R,Se(R,ne,N,pe),G()}let F;function J(){F=i.listen((R,ne,N)=>{const Y=y(R),ye=S(Y);if(ye){x(Qe(ye,{replace:!0}),Y).catch($o);return}l=Y;const Ne=u.value;ms&&$O(X0(Ne.fullPath,N.delta),el()),A(Y,Ne).catch(pe=>mi(pe,4|8)?pe:mi(pe,2)?(x(pe.to,Y).then(ve=>{mi(ve,4|16)&&!N.delta&&N.type===Fo.pop&&i.go(-1,!1)}).catch($o),Promise.reject()):(N.delta&&i.go(-N.delta,!1),v(pe,Y,Ne))).then(pe=>{pe=pe||O(Y,Ne,!1),pe&&(N.delta?i.go(-N.delta,!1):N.type===Fo.pop&&mi(pe,4|16)&&i.go(-1,!1)),L(Y,Ne,pe)}).catch($o)})}let ke=Vo(),We=Vo(),Ie;function v(R,ne,N){G(R);const Y=We.list();return Y.length?Y.forEach(ye=>ye(R,ne,N)):console.error(R),Promise.reject(R)}function D(){return Ie&&u.value!==Dr?Promise.resolve():new Promise((R,ne)=>{ke.add([R,ne])})}function G(R){Ie||(Ie=!0,J(),ke.list().forEach(([ne,N])=>R?N(R):ne()),ke.reset())}function Se(R,ne,N,Y){const{scrollBehavior:ye}=t;if(!ms||!ye)return Promise.resolve();const Ne=!N&&FO(X0(R.fullPath,0))||(Y||!N)&&history.state&&history.state.scroll||null;return xs().then(()=>ye(R,ne,Ne)).then(pe=>pe&&UO(pe)).catch(pe=>v(pe,R,ne))}const Ge=R=>i.go(R);let ot;const tt=new Set;return{currentRoute:u,addRoute:m,removeRoute:p,hasRoute:d,getRoutes:E,resolve:y,options:t,push:C,replace:V,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:D,install(R){const ne=this;R.component("RouterLink",bR),R.component("RouterView",IR),R.config.globalProperties.$router=ne,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>k(u)}),ms&&!ot&&u.value===Dr&&(ot=!0,C(i.location).catch(ye=>{}));const N={};for(const ye in Dr)N[ye]=K(()=>u.value[ye]);R.provide(Zu,ne),R.provide(z0,Di(N)),R.provide(Af,u);const Y=R.unmount;tt.add(R),R.unmount=function(){tt.delete(R),tt.size<1&&(l=Dr,F&&F(),u.value=Dr,ot=!1,Ie=!1),Y()}}}}function vs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function SR(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>gs(l,a))?r.push(a):n.push(a));const u=t.matched[o];u&&(e.matched.find(l=>gs(l,u))||i.push(u))}return[n,r,i]}function SM(){return $t(Zu)}function ce(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function de(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Ee(t){de(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function gi(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function er(t,e){de(2,arguments);var n=Ee(t),r=ce(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var i=n.getDate(),s=new Date(n.getTime());s.setMonth(n.getMonth()+r+1,0);var o=s.getDate();return i>=o?s:(n.setFullYear(s.getFullYear(),s.getMonth(),i),n)}function mw(t,e){if(de(2,arguments),!e||typeof e!="object")return new Date(NaN);var n=e.years?ce(e.years):0,r=e.months?ce(e.months):0,i=e.weeks?ce(e.weeks):0,s=e.days?ce(e.days):0,o=e.hours?ce(e.hours):0,a=e.minutes?ce(e.minutes):0,u=e.seconds?ce(e.seconds):0,l=Ee(t),c=r||n?er(l,r+n*12):l,h=s||i?gi(c,s+i*7):c,f=a+o*60,m=u+f*60,p=m*1e3,E=new Date(h.getTime()+p);return E}function CR(t,e){de(2,arguments);var n=Ee(t).getTime(),r=ce(e);return new Date(n+r)}function gw(t,e){de(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,s=i==null?0:ce(i),o=n.weekStartsOn==null?s:ce(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Ee(t),u=a.getDay(),l=(u<o?7:0)+u-o;return a.setDate(a.getDate()-l),a.setHours(0,0,0,0),a}function nl(t){return de(1,arguments),gw(t,{weekStartsOn:1})}function AR(t){de(1,arguments);var e=Ee(t),n=e.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var i=nl(r),s=new Date(0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);var o=nl(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function DR(t){de(1,arguments);var e=AR(t),n=new Date(0);n.setFullYear(e,0,4),n.setHours(0,0,0,0);var r=nl(n);return r}function rl(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function yw(t){de(1,arguments);var e=Ee(t);return e.setHours(0,0,0,0),e}var OR=864e5;function RR(t,e){de(2,arguments);var n=yw(t),r=yw(e),i=n.getTime()-rl(n),s=r.getTime()-rl(r);return Math.round((i-s)/OR)}function vw(t,e){de(2,arguments);var n=ce(e);return er(t,n*12)}function ww(t){return de(1,arguments),t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function jo(t){if(de(1,arguments),!ww(t)&&typeof t!="number")return!1;var e=Ee(t);return!isNaN(Number(e))}var xR={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},NR=function(t,e,n){var r,i=xR[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},PR=NR;function Mf(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var MR={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},LR={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},UR={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$R={date:Mf({formats:MR,defaultWidth:"full"}),time:Mf({formats:LR,defaultWidth:"full"}),dateTime:Mf({formats:UR,defaultWidth:"full"})},FR=$R,BR={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},VR=function(t,e,n,r){return BR[t]},jR=VR;function qo(t){return function(e,n){var r=n||{},i=r.context?String(r.context):"standalone",s;if(i==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{var u=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[u]}var c=t.argumentCallback?t.argumentCallback(e):e;return s[c]}}var qR={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},HR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},WR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},zR={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},KR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},GR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},YR=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},XR={ordinalNumber:YR,era:qo({values:qR,defaultWidth:"wide"}),quarter:qo({values:HR,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:qo({values:WR,defaultWidth:"wide"}),day:qo({values:zR,defaultWidth:"wide"}),dayPeriod:qo({values:KR,defaultWidth:"wide",formattingValues:GR,defaultFormattingWidth:"wide"})},QR=XR;function Ho(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?ZR(a,function(h){return h.test(o)}):JR(a,function(h){return h.test(o)}),l;l=t.valueCallback?t.valueCallback(u):u,l=n.valueCallback?n.valueCallback(l):l;var c=e.slice(o.length);return{value:l,rest:c}}}function JR(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function ZR(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function ex(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var tx=/^(\d+)(th|st|nd|rd)?/i,nx=/\d+/i,rx={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ix={any:[/^b/i,/^(a|c)/i]},sx={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ox={any:[/1/i,/2/i,/3/i,/4/i]},ax={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ux={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},lx={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},cx={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hx={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},fx={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},dx={ordinalNumber:ex({matchPattern:tx,parsePattern:nx,valueCallback:function(t){return parseInt(t,10)}}),era:Ho({matchPatterns:rx,defaultMatchWidth:"wide",parsePatterns:ix,defaultParseWidth:"any"}),quarter:Ho({matchPatterns:sx,defaultMatchWidth:"wide",parsePatterns:ox,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ho({matchPatterns:ax,defaultMatchWidth:"wide",parsePatterns:ux,defaultParseWidth:"any"}),day:Ho({matchPatterns:lx,defaultMatchWidth:"wide",parsePatterns:cx,defaultParseWidth:"any"}),dayPeriod:Ho({matchPatterns:hx,defaultMatchWidth:"any",parsePatterns:fx,defaultParseWidth:"any"})},px=dx,mx={code:"en-US",formatDistance:PR,formatLong:FR,formatRelative:jR,localize:QR,match:px,options:{weekStartsOn:0,firstWeekContainsDate:1}},_w=mx;function bw(t,e){de(2,arguments);var n=ce(e);return CR(t,-n)}var gx=864e5;function yx(t){de(1,arguments);var e=Ee(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/gx)+1}function ws(t){de(1,arguments);var e=1,n=Ee(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function Tw(t){de(1,arguments);var e=Ee(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=ws(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=ws(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function vx(t){de(1,arguments);var e=Tw(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=ws(n);return r}var wx=6048e5;function Ew(t){de(1,arguments);var e=Ee(t),n=ws(e).getTime()-vx(e).getTime();return Math.round(n/wx)+1}function yi(t,e){de(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,s=i==null?0:ce(i),o=n.weekStartsOn==null?s:ce(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Ee(t),u=a.getUTCDay(),l=(u<o?7:0)+u-o;return a.setUTCDate(a.getUTCDate()-l),a.setUTCHours(0,0,0,0),a}function Lf(t,e){de(1,arguments);var n=Ee(t),r=n.getUTCFullYear(),i=e||{},s=i.locale,o=s&&s.options&&s.options.firstWeekContainsDate,a=o==null?1:ce(o),u=i.firstWeekContainsDate==null?a:ce(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,u),l.setUTCHours(0,0,0,0);var c=yi(l,e),h=new Date(0);h.setUTCFullYear(r,0,u),h.setUTCHours(0,0,0,0);var f=yi(h,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function _x(t,e){de(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,s=i==null?1:ce(i),o=n.firstWeekContainsDate==null?s:ce(n.firstWeekContainsDate),a=Lf(t,e),u=new Date(0);u.setUTCFullYear(a,0,o),u.setUTCHours(0,0,0,0);var l=yi(u,e);return l}var bx=6048e5;function kw(t,e){de(1,arguments);var n=Ee(t),r=yi(n,e).getTime()-_x(n,e).getTime();return Math.round(r/bx)+1}function Ke(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Tx={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Ke(e==="yy"?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):Ke(n+1,2)},d:function(t,e){return Ke(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return Ke(t.getUTCHours()%12||12,e.length)},H:function(t,e){return Ke(t.getUTCHours(),e.length)},m:function(t,e){return Ke(t.getUTCMinutes(),e.length)},s:function(t,e){return Ke(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,n-3));return Ke(i,e.length)}},Rr=Tx,_s={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ex={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Rr.y(t,e)},Y:function(t,e,n,r){var i=Lf(t,r),s=i>0?i:1-i;if(e==="YY"){var o=s%100;return Ke(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):Ke(s,e.length)},R:function(t,e){var n=Tw(t);return Ke(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return Ke(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Ke(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Ke(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Rr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Ke(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=kw(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):Ke(i,e.length)},I:function(t,e,n){var r=Ew(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):Ke(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Rr.d(t,e)},D:function(t,e,n){var r=yx(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Ke(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return Ke(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return Ke(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return Ke(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),i=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r=t.getUTCHours(),i;switch(r===12?i=_s.noon:r===0?i=_s.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r=t.getUTCHours(),i;switch(r>=17?i=_s.evening:r>=12?i=_s.afternoon:r>=4?i=_s.morning:i=_s.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Rr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Rr.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Ke(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):Ke(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Rr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Rr.s(t,e)},S:function(t,e){return Rr.S(t,e)},X:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return Sw(s);case"XXXX":case"XX":return vi(s);case"XXXXX":case"XXX":default:return vi(s,":")}},x:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"x":return Sw(s);case"xxxx":case"xx":return vi(s);case"xxxxx":case"xxx":default:return vi(s,":")}},O:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Iw(s,":");case"OOOO":default:return"GMT"+vi(s,":")}},z:function(t,e,n,r){var i=r._originalDate||t,s=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Iw(s,":");case"zzzz":default:return"GMT"+vi(s,":")}},t:function(t,e,n,r){var i=r._originalDate||t,s=Math.floor(i.getTime()/1e3);return Ke(s,e.length)},T:function(t,e,n,r){var i=r._originalDate||t,s=i.getTime();return Ke(s,e.length)}};function Iw(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e||"";return n+String(i)+o+Ke(s,2)}function Sw(t,e){if(t%60==0){var n=t>0?"-":"+";return n+Ke(Math.abs(t)/60,2)}return vi(t,e)}function vi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=Ke(Math.floor(i/60),2),o=Ke(i%60,2);return r+s+n+o}var kx=Ex;function Cw(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Aw(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function Ix(t,e){var n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Cw(t,e);var s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Cw(r,e)).replace("{{time}}",Aw(i,e))}var Sx={p:Aw,P:Ix},Dw=Sx,Cx=["D","DD"],Ax=["YY","YYYY"];function Ow(t){return Cx.indexOf(t)!==-1}function Rw(t){return Ax.indexOf(t)!==-1}function il(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Dx=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ox=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rx=/^'([^]*?)'?$/,xx=/''/g,Nx=/[a-zA-Z]/;function xw(t,e,n){de(2,arguments);var r=String(e),i=n||{},s=i.locale||_w,o=s.options&&s.options.firstWeekContainsDate,a=o==null?1:ce(o),u=i.firstWeekContainsDate==null?a:ce(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=s.options&&s.options.weekStartsOn,c=l==null?0:ce(l),h=i.weekStartsOn==null?c:ce(i.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var f=Ee(t);if(!jo(f))throw new RangeError("Invalid time value");var m=rl(f),p=bw(f,m),E={firstWeekContainsDate:u,weekStartsOn:h,locale:s,_originalDate:f},d=r.match(Ox).map(function(y){var w=y[0];if(w==="p"||w==="P"){var b=Dw[w];return b(y,s.formatLong,E)}return y}).join("").match(Dx).map(function(y){if(y==="''")return"'";var w=y[0];if(w==="'")return Px(y);var b=kx[w];if(b)return!i.useAdditionalWeekYearTokens&&Rw(y)&&il(y,e,t),!i.useAdditionalDayOfYearTokens&&Ow(y)&&il(y,e,t),b(p,y,s.localize,E);if(w.match(Nx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return y}).join("");return d}function Px(t){return t.match(Rx)[1].replace(xx,"'")}function Mx(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");e=e||{};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function Lx(t){de(1,arguments);var e=Ee(t),n=e.getDay();return n}function Ux(t){de(1,arguments);var e=Ee(t),n=e.getFullYear(),r=e.getMonth(),i=new Date(0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}function _n(t){de(1,arguments);var e=Ee(t),n=e.getHours();return n}var $x=6048e5;function Fx(t){de(1,arguments);var e=Ee(t),n=nl(e).getTime()-DR(e).getTime();return Math.round(n/$x)+1}function bn(t){de(1,arguments);var e=Ee(t),n=e.getMinutes();return n}function mt(t){de(1,arguments);var e=Ee(t),n=e.getMonth();return n}function xr(t){de(1,arguments);var e=Ee(t),n=e.getSeconds();return n}function Et(t){return de(1,arguments),Ee(t).getFullYear()}function Bx(t,e){de(2,arguments);var n=ce(e);return gi(t,-n)}function Wo(t,e){de(2,arguments);var n=ce(e);return er(t,-n)}function Vx(t,e){if(de(2,arguments),!e||typeof e!="object")return new Date(NaN);var n=e.years?ce(e.years):0,r=e.months?ce(e.months):0,i=e.weeks?ce(e.weeks):0,s=e.days?ce(e.days):0,o=e.hours?ce(e.hours):0,a=e.minutes?ce(e.minutes):0,u=e.seconds?ce(e.seconds):0,l=Wo(t,r+n*12),c=Bx(l,s+i*7),h=a+o*60,f=u+h*60,m=f*1e3,p=new Date(c.getTime()-m);return p}function Nw(t,e){de(2,arguments);var n=Ee(t),r=Ee(e);return n.getTime()>r.getTime()}function Pw(t,e){de(2,arguments);var n=Ee(t),r=Ee(e);return n.getTime()<r.getTime()}function jx(t,e){de(2,arguments);var n=Ee(t),r=Ee(e);return n.getTime()===r.getTime()}function Uf(t,e,n){de(2,arguments);var r=n||{},i=r.locale,s=i&&i.options&&i.options.weekStartsOn,o=s==null?0:ce(s),a=r.weekStartsOn==null?o:ce(r.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=Ee(t),l=ce(e),c=u.getUTCDay(),h=l%7,f=(h+7)%7,m=(f<a?7:0)+l-c;return u.setUTCDate(u.getUTCDate()+m),u}function qx(t,e){de(2,arguments);var n=ce(e);n%7==0&&(n=n-7);var r=1,i=Ee(t),s=i.getUTCDay(),o=n%7,a=(o+7)%7,u=(a<r?7:0)+n-s;return i.setUTCDate(i.getUTCDate()+u),i}function Hx(t,e){de(2,arguments);var n=Ee(t),r=ce(e),i=Ew(n)-r;return n.setUTCDate(n.getUTCDate()-i*7),n}function Wx(t,e,n){de(2,arguments);var r=Ee(t),i=ce(e),s=kw(r,n)-i;return r.setUTCDate(r.getUTCDate()-s*7),r}var zx=36e5,Kx=6e4,Gx=1e3,ct={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ln={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function st(t,e,n){var r=e.match(t);if(!r)return null;var i=parseInt(r[0],10);return{value:n?n(i):i,rest:e.slice(r[0].length)}}function Un(t,e){var n=e.match(t);if(!n)return null;if(n[0]==="Z")return{value:0,rest:e.slice(1)};var r=n[1]==="+"?1:-1,i=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,o=n[5]?parseInt(n[5],10):0;return{value:r*(i*zx+s*Kx+o*Gx),rest:e.slice(n[0].length)}}function Mw(t,e){return st(ct.anyDigitsSigned,t,e)}function lt(t,e,n){switch(t){case 1:return st(ct.singleDigit,e,n);case 2:return st(ct.twoDigits,e,n);case 3:return st(ct.threeDigits,e,n);case 4:return st(ct.fourDigits,e,n);default:return st(new RegExp("^\\d{1,"+t+"}"),e,n)}}function sl(t,e,n){switch(t){case 1:return st(ct.singleDigitSigned,e,n);case 2:return st(ct.twoDigitsSigned,e,n);case 3:return st(ct.threeDigitsSigned,e,n);case 4:return st(ct.fourDigitsSigned,e,n);default:return st(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function $f(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Lw(t,e){var n=e>0,r=n?e:1-e,i;if(r<=50)i=t||100;else{var s=r+50,o=Math.floor(s/100)*100,a=t>=s%100;i=t+o-(a?100:0)}return n?i:1-i}var Yx=[31,28,31,30,31,30,31,31,30,31,30,31],Xx=[31,29,31,30,31,30,31,31,30,31,30,31];function Uw(t){return t%400==0||t%4==0&&t%100!=0}var Qx={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var i=function(s){return{year:s,isTwoDigitYear:e==="yy"}};switch(e){case"y":return lt(4,t,i);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:i});default:return lt(e.length,t,i)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var i=t.getUTCFullYear();if(n.isTwoDigitYear){var s=Lw(n.year,i);return t.setUTCFullYear(s,0,1),t.setUTCHours(0,0,0,0),t}var o=!("era"in e)||e.era===1?n.year:1-n.year;return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var i=function(s){return{year:s,isTwoDigitYear:e==="YY"}};switch(e){case"Y":return lt(4,t,i);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:i});default:return lt(e.length,t,i)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var i=Lf(t,r);if(n.isTwoDigitYear){var s=Lw(n.year,i);return t.setUTCFullYear(s,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),yi(t,r)}var o=!("era"in e)||e.era===1?n.year:1-n.year;return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),yi(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return sl(e==="R"?4:e.length,t)},set:function(t,e,n,r){var i=new Date(0);return i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0),ws(i)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return sl(e==="u"?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return lt(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth((n-1)*3,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return lt(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth((n-1)*3,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var i=function(s){return s-1};switch(e){case"M":return st(ct.month,t,i);case"MM":return lt(2,t,i);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:i});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var i=function(s){return s-1};switch(e){case"L":return st(ct.month,t,i);case"LL":return lt(2,t,i);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:i});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return st(ct.week,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return yi(Wx(t,n,r),r)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return st(ct.week,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return ws(Hx(t,n,r),r)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"d":return st(ct.date,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return lt(e.length,t)}},validate:function(t,e,n){var r=t.getUTCFullYear(),i=Uw(r),s=t.getUTCMonth();return i?e>=1&&e<=Xx[s]:e>=1&&e<=Yx[s]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"D":case"DD":return st(ct.dayOfYear,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return lt(e.length,t)}},validate:function(t,e,n){var r=t.getUTCFullYear(),i=Uw(r);return i?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return t=Uf(t,n,r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var i=function(s){var o=Math.floor((s-1)/7)*7;return(s+r.weekStartsOn+6)%7+o};switch(e){case"e":case"ee":return lt(e.length,t,i);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:i});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return t=Uf(t,n,r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var i=function(s){var o=Math.floor((s-1)/7)*7;return(s+r.weekStartsOn+6)%7+o};switch(e){case"c":case"cc":return lt(e.length,t,i);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:i});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return t=Uf(t,n,r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var i=function(s){return s===0?7:s};switch(e){case"i":case"ii":return lt(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i});case"iiii":default:return n.day(t,{width:"wide",context:"formatting",valueCallback:i})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(t,{width:"short",context:"formatting",valueCallback:i})||n.day(t,{width:"narrow",context:"formatting",valueCallback:i})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(t,e,n,r){return t=qx(t,n,r),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours($f(n),0,0,0),t},incompatibleTokens:["b","B","H","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours($f(n),0,0,0),t},incompatibleTokens:["a","B","H","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours($f(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return st(ct.hour12h,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var i=t.getUTCHours()>=12;return i&&n<12?t.setUTCHours(n+12,0,0,0):!i&&n===12?t.setUTCHours(0,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return st(ct.hour23h,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return st(ct.hour11h,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){var i=t.getUTCHours()>=12;return i&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return st(ct.hour24h,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var i=n<=24?n%24:n;return t.setUTCHours(i,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return st(ct.minute,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return st(ct.second,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return lt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){var i=function(s){return Math.floor(s*Math.pow(10,-e.length+3))};return lt(e.length,t,i)},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return Un(Ln.basicOptionalMinutes,t);case"XX":return Un(Ln.basic,t);case"XXXX":return Un(Ln.basicOptionalSeconds,t);case"XXXXX":return Un(Ln.extendedOptionalSeconds,t);case"XXX":default:return Un(Ln.extended,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return Un(Ln.basicOptionalMinutes,t);case"xx":return Un(Ln.basic,t);case"xxxx":return Un(Ln.basicOptionalSeconds,t);case"xxxxx":return Un(Ln.extendedOptionalSeconds,t);case"xxx":default:return Un(Ln.extended,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return Mw(t)},set:function(t,e,n,r){return[new Date(n*1e3),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return Mw(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},Jx=Qx,Zx=10,eN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nN=/^'([^]*?)'?$/,rN=/''/g,iN=/\S/,sN=/[a-zA-Z]/;function oN(t,e,n,r){de(3,arguments);var i=String(t),s=String(e),o=r||{},a=o.locale||_w;if(!a.match)throw new RangeError("locale must contain match property");var u=a.options&&a.options.firstWeekContainsDate,l=u==null?1:ce(u),c=o.firstWeekContainsDate==null?l:ce(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=a.options&&a.options.weekStartsOn,f=h==null?0:ce(h),m=o.weekStartsOn==null?f:ce(o.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(s==="")return i===""?Ee(n):new Date(NaN);var p={firstWeekContainsDate:c,weekStartsOn:m,locale:a},E=[{priority:Zx,subPriority:-1,set:aN,index:0}],d,y=s.match(tN).map(function(v){var D=v[0];if(D==="p"||D==="P"){var G=Dw[D];return G(v,a.formatLong,p)}return v}).join("").match(eN),w=[];for(d=0;d<y.length;d++){var b=y[d];!o.useAdditionalWeekYearTokens&&Rw(b)&&il(b,s,t),!o.useAdditionalDayOfYearTokens&&Ow(b)&&il(b,s,t);var C=b[0],V=Jx[C];if(V){var S=V.incompatibleTokens;if(Array.isArray(S)){for(var x=void 0,T=0;T<w.length;T++){var A=w[T].token;if(S.indexOf(A)!==-1||A===C){x=w[T];break}}if(x)throw new RangeError("The format string mustn't contain `".concat(x.fullToken,"` and `").concat(b,"` at the same time"))}else if(V.incompatibleTokens==="*"&&w.length)throw new RangeError("The format string mustn't contain `".concat(b,"` and any other token at the same time"));w.push({token:C,fullToken:b});var L=V.parse(i,b,a.match,p);if(!L)return new Date(NaN);E.push({priority:V.priority,subPriority:V.subPriority||0,set:V.set,validate:V.validate,value:L.value,index:E.length}),i=L.rest}else{if(C.match(sN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");if(b==="''"?b="'":C==="'"&&(b=uN(b)),i.indexOf(b)===0)i=i.slice(b.length);else return new Date(NaN)}}if(i.length>0&&iN.test(i))return new Date(NaN);var O=E.map(function(v){return v.priority}).sort(function(v,D){return D-v}).filter(function(v,D,G){return G.indexOf(v)===D}).map(function(v){return E.filter(function(D){return D.priority===v}).sort(function(D,G){return G.subPriority-D.subPriority})}).map(function(v){return v[0]}),F=Ee(n);if(isNaN(F))return new Date(NaN);var J=bw(F,rl(F)),ke={};for(d=0;d<O.length;d++){var We=O[d];if(We.validate&&!We.validate(J,We.value,p))return new Date(NaN);var Ie=We.set(J,ke,We.value,p);Ie[0]?(J=Ie[0],Mx(ke,Ie[1])):J=Ie}return J}function aN(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function uN(t){return t.match(nN)[1].replace(rN,"'")}function $w(t,e){de(2,arguments);var n=Ee(t),r=ce(e),i=n.getFullYear(),s=n.getDate(),o=new Date(0);o.setFullYear(i,r,15),o.setHours(0,0,0,0);var a=Ux(o);return n.setMonth(r,Math.min(s,a)),n}function Tn(t,e){if(de(2,arguments),typeof e!="object"||e===null)throw new RangeError("values parameter must be an object");var n=Ee(t);return isNaN(n.getTime())?new Date(NaN):(e.year!=null&&n.setFullYear(e.year),e.month!=null&&(n=$w(n,e.month)),e.date!=null&&n.setDate(ce(e.date)),e.hours!=null&&n.setHours(ce(e.hours)),e.minutes!=null&&n.setMinutes(ce(e.minutes)),e.seconds!=null&&n.setSeconds(ce(e.seconds)),e.milliseconds!=null&&n.setMilliseconds(ce(e.milliseconds)),n)}function Fw(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return n.setHours(r),n}function Bw(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return n.setMilliseconds(r),n}function Vw(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return n.setMinutes(r),n}function jw(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return n.setSeconds(r),n}function lN(t,e){de(2,arguments);var n=Ee(t),r=ce(e);return isNaN(n.getTime())?new Date(NaN):(n.setFullYear(r),n)}function cN(t,e){de(2,arguments);var n=ce(e);return vw(t,-n)}function Nr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ff(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qw(t,e){if(t){if(typeof t=="string")return Ff(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ff(t,e):void 0}}function hN(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,r){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var s,o,a=[],u=!0,l=!1;try{for(i=i.call(n);!(u=(s=i.next()).done)&&(a.push(s.value),!r||a.length!==r);u=!0);}catch(c){l=!0,o=c}finally{try{u||i.return==null||i.return()}finally{if(l)throw o}}return a}}(t,e)||qw(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var fN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},dN=[ue("path",{d:"M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"},null,-1),ue("path",{d:"M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1),ue("path",{d:"M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1),ue("path",{d:"M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"},null,-1)],zo={render:function(t,e){return M(),Q("svg",fN,dN)}},pN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},mN=[ue("path",{d:"M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"},null,-1),ue("path",{d:"M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"},null,-1)],gN={render:function(t,e){return M(),Q("svg",pN,mN)}},yN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},vN=[ue("path",{d:"M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"},null,-1)],Hw={render:function(t,e){return M(),Q("svg",yN,vN)}},wN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},_N=[ue("path",{d:"M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"},null,-1)],Ww={render:function(t,e){return M(),Q("svg",wN,_N)}},bN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},TN=[ue("path",{d:"M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"},null,-1),ue("path",{d:"M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1)],ol={render:function(t,e){return M(),Q("svg",bN,TN)}},EN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},kN=[ue("path",{d:"M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"},null,-1)],Bf={render:function(t,e){return M(),Q("svg",EN,kN)}},IN={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},SN=[ue("path",{d:"M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"},null,-1)],Vf={render:function(t,e){return M(),Q("svg",IN,SN)}},$n=function(t){var e=6e4*t.getTimezoneOffset();return new Date(t.getTime()-e)},jf=function(t,e){var n=oN(t,e.slice(0,t.length),new Date);return jo(n)&&ww(n)?n:null},Pr=function(t){var e=new Date(JSON.parse(JSON.stringify(t)));return e=Fw(e,0),e=Vw(e,0),e=jw(e,0),e=Bw(e,0)},qf=function(t){return Array.isArray(t)?jo(t[0])&&(!t[1]||jo(t[1])):!!t&&jo(t)},Zt=function(t,e,n,r){var i=t?new Date(t):new Date;return(e||e===0)&&(i=Fw(i,+e)),(n||n===0)&&(i=Vw(i,+n)),(r||r===0)&&(i=jw(i,+r)),Bw(i,0)},CN=function(t){var e=er(t,1);return{month:mt(e),year:Et(e)}},wi=function(t,e,n){var r=t?new Date(t):new Date;return(e||e===0)&&(r=$w(r,e)),n&&(r=lN(r,n)),r},zw=function(t,e){return t?"HH:mm".concat(e?":ss":""):"hh:mm".concat(e?":ss":""," aa")},Kw=function(t,e,n,r,i,s){return t||(r?"MM/yyyy":i?zw(e,n):s?"MM/dd/yyyy, ".concat(zw(e,n)):"MM/dd/yyyy")},Hf=function(t){var e=t||new Date;return{hours:_n(e),minutes:bn(e),seconds:xr(e)}},Wf=function(t){return{month:mt(t),year:Et(t)}},zf=function(t){return Array.isArray(t)?[Hf(t[0]),Hf(t[1])]:Hf(t)},Kf=function(t,e,n){return n?xw(t,e,{locale:n}):xw(t,e)},al=function(t,e,n,r){return Array.isArray(t)?"".concat(Kf(t[0],e,n)," ").concat(r||"-"," ").concat(t[1]?Kf(t[1],e,n):""):Kf(t,e,n)},dn=function(t,e){return!(!t||!e)&&Nw(Pr(t),Pr(e))},en=function(t,e){return!(!t||!e)&&Pw(Pr(t),Pr(e))},gt=function(t,e){return!(!t||!e)&&jx(Pr(t),Pr(e))},Gf=function(t,e){return mw(Tn(new Date,t),e)},Yf=function(t,e){return Vx(Tn(new Date,t),e)},Xf=function(t){return Tn(new Date,{hours:_n(t),minutes:bn(t),seconds:xr(t)})},Gw=function(t){return Tn(new Date,{hours:+t.hours||0,minutes:+t.minutes||0,seconds:+t.seconds||0})},Qf=function(t,e,n){var r=!0;if(!t)return!0;var i=Array.isArray(t)?[t[0]?Xf(t[0]):null,t[1]?Xf(t[1]):null]:Xf(t);if(e){var s=Gw(e);r=Array.isArray(i)?(!i[0]||i[0].getTime()<=s.getTime())&&(!i[1]||i[1].getTime()<=s.getTime()):i.getTime()<=s.getTime()}if(n){var o=Gw(n);r=Array.isArray(i)?(!i[0]||i[0].getTime()>=o.getTime())&&(!i[1]||i[1].getTime()>=o.getTime())&&r:i.getTime()>=o.getTime()&&r}return r},Yw=function(t){var e=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds());return new Date(e).toISOString()};function _i(t){return function(e){if(Array.isArray(e))return Ff(e)}(t)||function(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||qw(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var AN=function(t,e,n,r){var i=[],s=new Date(e,t),o=new Date(e,t+1,0);return function a(u){var l=function(c,h,f){for(var m=new Date(JSON.parse(JSON.stringify(c))),p=[],E=0;E<7;E++){var d=gi(m,E),y=mt(d)!==h;p.push({text:f&&y?"":d.getDate(),value:d,current:!y})}return p}(u,t,r);i.push({days:l}),i[i.length-1].days.some(function(c){return gt(Pr(c.value),Pr(o))})||a(gi(u,7))}(gw(s,{weekStartsOn:n})),i},DN=function(t){return function(e){for(var n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=r.length,s=0;s<e;s++)n+=r.charAt(Math.floor(Math.random()*i));return n+t}(5)},pn=function(t){var e,n=k(t);return(e=n==null?void 0:n.$el)!==null&&e!==void 0?e:n},Xw=function(t){return Object.assign({open:"dp-open",close:"dp-close",next:"calendar-next",previous:"calendar-prev"},t)},ON=["aria-disabled","aria-readonly"],RN={key:1,class:"dp__input_wrap"},xN=["id","name","placeholder","disabled","readonly","required","value","autocomplete","onKeydown"],NN={key:4,class:"dp__clear_icon"},PN=Gt({props:{name:{type:String,default:null},inputValue:{type:String,default:""},placeholder:{type:String,default:""},hideInputIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},range:{type:Boolean,default:!1},state:{type:Boolean,default:null},inputClassName:{type:String,default:null},inline:{type:Boolean,default:!1},inlineWithInput:{type:Boolean,default:!1},textInput:{type:Boolean,default:!1},textInputOptions:{type:Object,default:function(){return null}},isMenuOpen:{type:Boolean,default:!1},autoApply:{type:Boolean,default:!1},pattern:{type:String,default:""},uid:{type:String,default:null},openMenuOnFocus:{type:Boolean,default:!0},required:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"}},emits:["clear","open","update:inputValue","setInputDate","close","selectDate","setEmptyDate"],setup:function(t,e){var n=e.expose,r=e.emit,i=t,s=Te(),o=Te(null),a=Te(!1),u=Sa(),l=K(function(){return Nr({dp__pointer:!i.disabled&&!i.readonly&&!i.textInput,dp__disabled:i.disabled,dp__input:!0,dp__input_icon_pad:!i.hideInputIcon,dp__input_valid:i.state,dp__input_invalid:i.state===!1,dp__input_focus:a.value||i.isMenuOpen},i.inputClassName,!!i.inputClassName)}),c=function(b){var C=b.target.value,V=i.textInputOptions,S=V.format,x=V.rangeSeparator;if(C!==""){if(i.range){var T=hN(C.split("".concat(x)),2),A=T[0],L=T[1];if(A&&L){var O=jf(A.trim(),S||i.pattern),F=jf(L.trim(),S||i.pattern);s.value=O&&F?[O,F]:null}}else s.value=jf(C,S||i.pattern);r("setInputDate",s.value)}else r("setInputDate",null),i.autoApply&&(r("setEmptyDate"),s.value=null);r("update:inputValue",C)},h=function(){var b,C;(b=i.textInputOptions)!==null&&b!==void 0&&b.enterSubmit&&qf(s.value)&&i.inputValue!==""?(r("setInputDate",s.value,!0),s.value=null):(C=i.textInputOptions)!==null&&C!==void 0&&C.enterSubmit&&i.inputValue===""&&(s.value=null,r("clear"))},f=function(){var b,C;(b=i.textInputOptions)!==null&&b!==void 0&&b.tabSubmit&&qf(s.value)&&i.inputValue!==""?(r("setInputDate",s.value,!0),s.value=null):(C=i.textInputOptions)!==null&&C!==void 0&&C.tabSubmit&&i.inputValue===""&&(s.value=null,r("clear")),r("close")},m=function(){i.inline||(a.value=!0,i.openMenuOnFocus&&!i.isMenuOpen?r("open"):i.isMenuOpen&&(w(),r("close")))},p=function(){var b;(!i.openMenuOnFocus||u["dp-input"]||u.trigger)&&(i.textInput&&(b=i.textInputOptions)!==null&&b!==void 0&&b.openMenu&&!i.isMenuOpen?r("open"):i.textInput||r("open"))},E=function(){a.value=!1,i.autoApply&&i.textInput&&s.value&&(r("setInputDate",s.value),r("selectDate"),s.value=null)},d=function(b){b.stopImmediatePropagation()},y=function(){r("clear")},w=function(){a.value=!1;var b=pn(o);b&&b.blur()};return n({unFocus:w}),function(b,C){return M(),Q("div",{onClick:p,"aria-label":"Datepicker input",role:"textbox","aria-multiline":"false","aria-disabled":t.disabled,"aria-readonly":t.readonly},[!b.$slots.trigger||b.$slots["dp-input"]||t.inline?$("",!0):fe(b.$slots,"trigger",{key:0}),b.$slots.trigger||t.inline&&!t.inlineWithInput?$("",!0):(M(),Q("div",RN,[!b.$slots["dp-input"]||b.$slots.trigger||t.inline?$("",!0):fe(b.$slots,"dp-input",{key:0,value:t.inputValue,onInput:c,onEnter:h,onTab:f,onClear:y}),b.$slots["dp-input"]?$("",!0):(M(),Q("input",{key:1,ref_key:"inputRef",ref:o,id:t.uid?"dp-input-".concat(t.uid):void 0,name:t.name,class:Fe(k(l)),placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,required:t.required,value:t.inputValue,autocomplete:t.autocomplete,onInput:c,onKeydown:[He(h,["enter"]),He(f,["tab"])],onBlur:E,onFocus:m},null,42,xN)),b.$slots["input-icon"]&&!t.hideInputIcon?(M(),Q("span",{key:2,class:"dp__input_icon",onClick:d},[fe(b.$slots,"input-icon")])):$("",!0),b.$slots["input-icon"]||t.hideInputIcon||b.$slots["dp-input"]?$("",!0):(M(),Pe(k(zo),{key:3,class:"dp__input_icon dp__input_icons",onClick:d})),b.$slots["clear-icon"]&&t.clearable&&!t.disabled&&!t.readonly?(M(),Q("span",NN,[fe(b.$slots,"clear-icon",{clear:y})])):$("",!0),!t.clearable||b.$slots["clear-icon"]||!t.inputValue||t.disabled||t.readonly?$("",!0):(M(),Pe(k(gN),{key:5,class:"dp__clear_icon dp__input_icons",onClick:nc(y,["stop","prevent"])},null,8,["onClick"]))]))],8,ON)}}}),MN={class:"db__calendar_header",role:"row"},LN={key:0,class:"dp__calendar_header_item",role:"gridcell"},UN=ue("div",{class:"dp__calendar_header_separator"},null,-1),$N={key:0,class:"dp__calendar",role:"grid","aria-label":"Calendar days"},FN={key:0,role:"gridcell",class:"dp__calendar_item dp__week_num"},BN={class:"dp__cell_inner"},VN=["aria-selected","aria-disabled","onClick","onKeydown","onMouseover"],jN=ue("div",{class:"dp__arrow_bottom_tp"},null,-1),qN=Gt({props:{locale:{type:String,default:"en-Us"},weekNumName:{type:String,default:"W"},weekStart:{type:[Number,String],default:1},weekNumbers:{type:Boolean,default:!1},mappedDates:{type:Array,default:function(){return[]}},monthYearComponent:{type:Object,default:null},range:{type:Boolean,default:!1},filters:{type:Object,default:function(){return{}}},customProps:{type:Object,default:null},calendarClassName:{type:String,default:null},monthPicker:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},disableMonthYearSelect:{type:Boolean,default:!1},getWeekNum:{type:Function,default:function(){return""}},instance:{type:Number,default:1},multiCalendars:{type:Number,default:0},multiCalendarsSolo:{type:Boolean,default:!1},years:{type:Array,default:function(){return[]}},months:{type:Array,default:function(){return[]}},month:{type:Number,default:0},year:{type:Number,default:0},modeHeight:{type:[Number,String],default:255},internalModelValue:{type:[Date,Array],default:null}},emits:["selectDate","setHoverDate","handleScroll","mount"],setup:function(t,e){var n=e.emit,r=t,i=Te(null),s=Te({bottom:"",left:"",transform:""}),o=Te([]),a=Te(!0),u=$t("transitions"),l=Te(""),c=Ss(r,"month"),h=Ss(r,"year"),f=Te(),m=Te(!1),p=K(function(){return function(S,x){var T,A,L=[1,2,3,4,5,6,7].map(function(J){return new Intl.DateTimeFormat(S,{weekday:"short",timeZone:"UTC"}).format(new Date("2017-01-0".concat(J,"T00:00:00+00:00"))).slice(0,2)}),O=L.slice(0,x),F=L.slice(x+1,L.length);return(T=(A=[L[x]]).concat.apply(A,_i(F))).concat.apply(T,_i(O))}(r.locale,+r.weekStart)});jn(function(){r.internalModelValue||(m.value=!0),f.value=wi(new Date,r.month,r.year),n("mount")});var E=K(function(){return r.monthPicker||r.timePicker});vn([c,h],function(){if(u!=null&&u.value){var S=wi(new Date,r.month,r.year);l.value=dn(wi(new Date,r.month,r.year),f.value)?u.value.next:u.value.previous,f.value=S,m.value&&(a.value=!1,xs(function(){a.value=!0}))}m.value||(m.value=!0)});var d=K(function(){return Nr({dp__calendar_wrap:!0},r.calendarClassName,!!r.calendarClassName)}),y=K(function(){return function(S){var x=function(T){return Object.assign({type:"dot"},T)}(S);return{dp__marker_dot:x.type==="dot",dp__marker_line:x.type==="line"}}}),w=K(function(){return function(S){return gt(S,i.value)}}),b=K(function(){return{dp__calendar:!0,dp__calendar_next:r.multiCalendars>0&&r.instance!==0}}),C=K(function(){return E.value?{height:"".concat(r.modeHeight,"px")}:null}),V=function(){i.value=null};return function(S,x){return M(),Q("div",{class:Fe(k(b))},[ue("div",{style:Fn(k(C))},[k(E)?$("",!0):(M(),Q("div",{key:0,class:Fe(k(d)),role:"grid","aria-label":"Calendar wrapper",onWheel:x[1]||(x[1]=nc(function(T){return S.$emit("handleScroll",T)},["prevent"]))},[ue("div",MN,[t.weekNumbers?(M(),Q("div",LN,vt(t.weekNumName),1)):$("",!0),(M(!0),Q(xe,null,Ct(k(p),function(T,A){return M(),Q("div",{class:"dp__calendar_header_item",role:"gridcell",key:A},[S.$slots["calendar-header"]?fe(S.$slots,"calendar-header",{key:0,day:T,index:A}):$("",!0),S.$slots["calendar-header"]?$("",!0):(M(),Q(xe,{key:1},[yn(vt(T),1)],64))])}),128))]),UN,Ze(Dn,{name:l.value,css:!!k(u)},{default:qe(function(){return[a.value?(M(),Q("div",$N,[(M(!0),Q(xe,null,Ct(t.mappedDates,function(T,A){return M(),Q("div",{class:"dp__calendar_row",role:"row",key:A},[t.weekNumbers?(M(),Q("div",FN,[ue("div",BN,vt(t.getWeekNum(T.days)),1)])):$("",!0),(M(!0),Q(xe,null,Ct(T.days,function(L,O){return M(),Q("div",{role:"gridcell",class:"dp__calendar_item",ref_for:!0,ref:function(F){F&&(o.value[O+A]=F)},key:O+A,"aria-selected":L.classData.dp__active_date||L.classData.dp__range_start||L.classData.dp__range_start,"aria-disabled":L.classData.dp__cell_disabled,tabindex:"0",onClick:function(F){return S.$emit("selectDate",L)},onKeydown:He(function(F){return S.$emit("selectDate",L)},["enter"]),onMouseover:function(F){return function(J,ke){var We,Ie;if(n("setHoverDate",J),(We=J.marker)!==null&&We!==void 0&&(Ie=We.tooltip)!==null&&Ie!==void 0&&Ie.length){var v=pn(o.value[ke]);if(v){var D=v.getBoundingClientRect(),G=D.width,Se=D.height;s.value={bottom:"".concat(Se,"px"),left:"".concat(G/2,"px"),transform:"translateX(-50%)"},i.value=J.value}}}(L,O+A)},onMouseleave:V},[ue("div",{class:Fe(["dp__cell_inner",L.classData])},[S.$slots.day?fe(S.$slots,"day",{key:0,day:+L.text,date:L.value}):$("",!0),S.$slots.day?$("",!0):(M(),Q(xe,{key:1},[yn(vt(L.text),1)],64)),L.marker?(M(),Q("div",{key:2,class:Fe(k(y)(L.marker)),style:Fn(L.marker.color?{backgroundColor:L.marker.color}:{})},null,6)):$("",!0),k(w)(L.value)?(M(),Q("div",{key:3,class:"dp__marker_tooltip",style:Fn(s.value)},[ue("div",{class:"dp__tooltip_content",onClick:x[0]||(x[0]=nc(function(){},["stop"]))},[(M(!0),Q(xe,null,Ct(L.marker.tooltip,function(F,J){return M(),Q("div",{key:J,class:"dp__tooltip_text"},[S.$slots["marker-tooltip"]?fe(S.$slots,"marker-tooltip",{key:0,tooltop:F,day:L.value}):$("",!0),S.$slots["marker-tooltip"]?$("",!0):(M(),Q(xe,{key:1},[ue("div",{class:"dp__tooltip_mark",style:Fn(F.color?{backgroundColor:F.color}:{})},null,4),ue("div",null,vt(F.text),1)],64))])}),128)),jN])],4)):$("",!0)],2)],40,VN)}),128))])}),128))])):$("",!0)]}),_:3},8,["name","css"])],34))],4)],2)}}});function Ko(t){return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ko(t)}var Qw=function(t,e){return e},bi=function(t){return Array.isArray(t)},En=function(t){return Array.isArray(t)},ul=function(t){return Array.isArray(t)&&t.length===2},Jw=function(t){return typeof t=="string"},HN={class:"dp__selection_preview"},WN={class:"dp__action_buttons"},zN=["onKeydown"],KN=Gt({props:{selectText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},internalModelValue:{type:[Date,Array],default:null},range:{type:Boolean,default:!1},previewFormat:{type:[String,Function],default:function(){return""}},inline:{type:Boolean,default:!1},monthPicker:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},multiCalendars:{type:Number,default:0},calendarWidth:{type:Number,default:0},menuMount:{type:Boolean,default:!1},customProps:{type:Object,default:null},minTime:{type:Object,default:null},maxTime:{type:Object,default:null},enableTimePicker:{type:Boolean,default:!0},minDate:{type:[Date,String],default:null},maxDate:{type:[Date,String],default:null},multiDates:{type:Boolean,default:!1}},emits:["closePicker","selectDate"],setup:function(t,e){var n=e.emit,r=t,i=$t("formatLocale"),s=K(function(){return{dp__action:!0,dp__select:!0,dp__action_disabled:!o.value||!a.value}}),o=K(function(){return!r.enableTimePicker||Qf(r.internalModelValue,r.maxTime,r.minTime)}),a=K(function(){return!r.monthPicker||(h=r.internalModelValue,f=r.minDate,m=r.maxDate,p=!0,f&&m&&(p=dn(new Date(h),new Date(f))&&en(new Date(h),new Date(m))),f&&(p=dn(new Date(h),new Date(f))),m&&(p=en(new Date(h),new Date(m))),p);var h,f,m,p}),u=function(h){return al(h,r.previewFormat,i==null?void 0:i.value)},l=K(function(){return r.internalModelValue&&r.menuMount?typeof r.previewFormat=="string"?bi(r.internalModelValue)?r.internalModelValue.length===2&&r.internalModelValue[1]?r.multiCalendars>0?"".concat(u(r.internalModelValue[0])," - ").concat(u(r.internalModelValue[1])):[u(r.internalModelValue[0]),u(r.internalModelValue[1])]:r.multiDates?r.internalModelValue.map(function(h){return"".concat(u(h))}):"".concat(u(r.internalModelValue[0])," -"):al(r.internalModelValue,r.previewFormat,i==null?void 0:i.value):r.timePicker?r.previewFormat(zf(r.internalModelValue)):r.monthPicker?r.previewFormat(Wf(r.internalModelValue)):r.previewFormat(r.internalModelValue):""}),c=function(){o.value&&a.value&&n("selectDate")};return function(h,f){return M(),Q("div",{class:"dp__action_row",style:Fn(t.calendarWidth?{width:"".concat(t.calendarWidth,"px")}:{})},[ue("div",HN,[h.$slots["action-preview"]?fe(h.$slots,"action-preview",{key:0,value:t.internalModelValue}):$("",!0),h.$slots["action-preview"]?$("",!0):(M(),Q(xe,{key:1},[Array.isArray(k(l))?$("",!0):(M(),Q(xe,{key:0},[yn(vt(k(l)),1)],64)),Array.isArray(k(l))?(M(!0),Q(xe,{key:1},Ct(k(l),function(m,p){return M(),Q("div",{key:p},vt(m),1)}),128)):$("",!0)],64))]),ue("div",WN,[h.$slots["action-select"]?fe(h.$slots,"action-select",{key:0,value:t.internalModelValue}):$("",!0),h.$slots["action-select"]?$("",!0):(M(),Q(xe,{key:1},[t.inline?$("",!0):(M(),Q("span",{key:0,class:"dp__action dp__cancel",tabindex:"0",onClick:f[0]||(f[0]=function(m){return h.$emit("closePicker")}),onKeydown:f[1]||(f[1]=He(function(m){return h.$emit("closePicker")},["enter"]))},vt(t.cancelText),33)),ue("span",{class:Fe(k(s)),tabindex:"0",onKeydown:He(c,["enter"]),onClick:c},vt(t.selectText),43,zN)],64))])],4)}}});function Zw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function e_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zw(Object(n),!0).forEach(function(r){Nr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var GN={class:"dp__overlay_container",role:"grid"},YN={class:"dp__selection_grid_header"},XN=["aria-selected","aria-disabled","onClick","onKeydown"],QN=["onKeydown"],Ti=Gt({props:{items:{type:Array,default:function(){return[]}},modelValue:{type:[String,Number],default:null},disabledValues:{type:Array,default:function(){return[]}},minValue:{type:[Number,String],default:null},maxValue:{type:[Number,String],default:null}},emits:["update:modelValue","selected","toggle","reset-flow"],setup:function(t,e){var n=e.emit,r=t,i=Te(!1),s=Te(null),o=Te(null),a=$t("autoApply",!1),u=$t("textInput",Te(!1));Bd(function(){s.value=null}),jn(function(){p();var y=pn(o);y&&(u.value||y.focus(),i.value=y.clientHeight<y.scrollHeight)});var l=K(function(){return{dp__overlay:!0}}),c=K(function(){return{dp__overlay_col:!0}}),h=K(function(){return r.items.map(function(y){return y.filter(function(w){return w}).map(function(w){var b=r.disabledValues.some(function(C){return C===w.value})||m(w.value);return e_(e_({},w),{},{className:{dp__overlay_cell_active:w.value===r.modelValue,dp__overlay_cell:w.value!==r.modelValue,dp__overlay_cell_disabled:b,dp__overlay_cell_active_disabled:b&&w.value===r.modelValue,dp__overlay_cell_pad:!0}})})})}),f=K(function(){return{dp__button:!0,dp__overlay_action:!0,dp__over_action_scroll:i.value,dp__button_bottom:a}}),m=function(y){var w=!!r.maxValue&&+y>+r.maxValue,b=!!r.minValue&&+y<+r.minValue;return w||b},p=function(){var y=pn(s);if(y){var w=pn(o);w&&(w.scrollTop=y.offsetTop-w.offsetTop-(w.getBoundingClientRect().height/2-y.getBoundingClientRect().height))}},E=function(y){r.disabledValues.some(function(w){return w===y})||r.minValue&&!(+r.minValue<=y)||r.maxValue&&!(+r.maxValue>=y)||(n("update:modelValue",y),n("selected"))},d=function(){n("toggle"),n("reset-flow")};return function(y,w){return M(),Q("div",{ref_key:"gridWrapRef",ref:o,class:Fe(k(l)),role:"dialog",tabindex:"0"},[ue("div",GN,[ue("div",YN,[fe(y.$slots,"header")]),(M(!0),Q(xe,null,Ct(k(h),function(b,C){return M(),Q("div",{class:"dp__overlay_row",key:k(DN)(C),role:"row"},[(M(!0),Q(xe,null,Ct(b,function(V){return M(),Q("div",{role:"gridcell",class:Fe(k(c)),key:V.value,"aria-selected":V.value===t.modelValue&&!t.disabledValues.includes(V.value),"aria-disabled":V.className.dp__overlay_cell_disabled,ref_for:!0,ref:function(S){V.value!==t.modelValue||t.disabledValues.includes(V.value)||(s.value=S)},tabindex:"0",onClick:function(S){return E(V.value)},onKeydown:He(function(S){return E(V.value)},["enter"])},[ue("div",{class:Fe(V.className)},[y.$slots.item?fe(y.$slots,"item",{key:0,item:V}):$("",!0),y.$slots.item?$("",!0):(M(),Q(xe,{key:1},[yn(vt(V.text),1)],64))],2)],42,XN)}),128))])}),128)),y.$slots["button-icon"]?(M(),Q("div",{key:0,role:"button","aria-label":"Toggle overlay",class:Fe(k(f)),tabindex:"0",onClick:d,onKeydown:He(d,["enter"])},[fe(y.$slots,"button-icon")],42,QN)):$("",!0)])],2)}}}),Jf=function(){var t=$t("transitions");return{transitionName:K(function(){return function(e){return t!=null&&t.value?e?t.value.open:t.value.close:""}}),showTransition:!(t==null||!t.value)}},JN={key:0,class:"dp__time_input"},ZN=["onKeydown"],eP=["onKeydown"],tP=["onKeydown"],nP={key:2},rP=["onKeydown"],iP=Gt({props:{hours:{type:Number,default:0},minutes:{type:Number,default:0},seconds:{type:Number,default:0},hoursGridIncrement:{type:[String,Number],default:1},minutesGridIncrement:{type:[String,Number],default:5},secondsGridIncrement:{type:[String,Number],default:5},hoursIncrement:{type:[Number,String],default:1},minutesIncrement:{type:[Number,String],default:1},secondsIncrement:{type:[Number,String],default:1},is24:{type:Boolean,default:!0},filters:{type:Object,default:function(){return{}}},noHoursOverlay:{type:Boolean,default:!1},noMinutesOverlay:{type:Boolean,default:!1},noSecondsOverlay:{type:Boolean,default:!1},enableSeconds:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["setHours","setMinutes","update:hours","update:minutes","update:seconds","reset-flow"],setup:function(t,e){var n=e.expose,r=e.emit,i=t,s=Te(!1),o=Te(!1),a=Te(!1),u=Te("AM"),l=Jf(),c=l.transitionName,h=l.showTransition,f=K(function(){return{dp__time_col:!0,dp__time_col_reg:!i.enableSeconds&&i.is24,dp__time_col_reg_with_button:!i.enableSeconds&&!i.is24,dp__time_col_sec:i.enableSeconds&&i.is24,dp__time_col_sec_with_button:i.enableSeconds&&!i.is24}}),m=K(function(){var T=S(i.hours);return{text:T<10?"0".concat(T):"".concat(T),value:T}}),p=K(function(){return{text:i.minutes<10?"0".concat(i.minutes):"".concat(i.minutes),value:i.minutes}}),E=K(function(){return{text:i.seconds<10?"0".concat(i.seconds):"".concat(i.seconds),value:i.seconds}}),d=function(T,A){return function(L,O){for(var F=[],J=0;J<L;J+=O)F.push({value:J,text:J<10?"0".concat(J):"".concat(J)});return function(ke){for(var We=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,Ie=[],v=0;v<ke.length;v+=We)Ie.push([ke[v],ke[v+1],ke[v+2]]);return Ie}(F)}(T,+A)},y=function(){i.noHoursOverlay||(s.value=!s.value)},w=function(){i.noMinutesOverlay||(o.value=!o.value)},b=function(){i.noSecondsOverlay||(a.value=!a.value)},C=function(T,A){return{hours:T==="hours"?_n(A?Gf({hours:+i.hours},{hours:+i.hoursIncrement}):Yf({hours:+i.hours},{hours:+i.hoursIncrement})):i.hours,minutes:T==="minutes"?bn(A?Gf({minutes:i.minutes},{minutes:+i.minutesIncrement}):Yf({minutes:i.minutes},{minutes:+i.minutesIncrement})):i.minutes,seconds:T==="seconds"?xr(A?Gf({seconds:i.seconds},{seconds:+i.secondsIncrement}):Yf({seconds:i.seconds},{seconds:+i.secondsIncrement})):i.seconds}},V=function(T){var A=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],L=C(T,A),O=L[T];r("update:".concat(T),O)},S=function(T){return i.is24?T:(u.value=T>=12?"PM":"AM",[12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11][T])},x=function(){u.value==="PM"?(u.value="AM",r("update:hours",i.hours-12)):(u.value="PM",r("update:hours",i.hours+12))};return n({openChildCmp:function(T){switch(T){case"hours":s.value=!0;break;case"minutes":o.value=!0;break;case"seconds":a.value=!0}}}),function(T,A){return t.disabled?$("",!0):(M(),Q("div",JN,[ue("div",{class:Fe(k(f))},[ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Increment hours",tabindex:"0",onKeydown:A[0]||(A[0]=He(function(L){return V("hours")},["enter"])),onClick:A[1]||(A[1]=function(L){return V("hours")})},[T.$slots["arrow-up"]?fe(T.$slots,"arrow-up",{key:0}):$("",!0),T.$slots["arrow-up"]?$("",!0):(M(),Pe(k(Bf),{key:1}))],32),ue("div",{role:"button","aria-label":"Open hours overlay",class:Fe(t.noHoursOverlay?"":"dp__time_display"),tabindex:"0",onKeydown:He(y,["enter"]),onClick:y},[T.$slots.hours?fe(T.$slots,"hours",{key:0,text:k(m).text,value:k(m).value}):$("",!0),T.$slots.hours?$("",!0):(M(),Q(xe,{key:1},[yn(vt(k(m).text),1)],64))],42,ZN),ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Decrement hours",tabindex:"0",onKeydown:A[2]||(A[2]=He(function(L){return V("hours",!1)},["enter"])),onClick:A[3]||(A[3]=function(L){return V("hours",!1)})},[T.$slots["arrow-down"]?fe(T.$slots,"arrow-down",{key:0}):$("",!0),T.$slots["arrow-down"]?$("",!0):(M(),Pe(k(Vf),{key:1}))],32)],2),ue("div",{class:Fe(k(f))},":",2),ue("div",{class:Fe(k(f))},[ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Increment minutes",tabindex:"0",onKeydown:A[4]||(A[4]=He(function(L){return V("minutes")},["enter"])),onClick:A[5]||(A[5]=function(L){return V("minutes")})},[T.$slots["arrow-up"]?fe(T.$slots,"arrow-up",{key:0}):$("",!0),T.$slots["arrow-up"]?$("",!0):(M(),Pe(k(Bf),{key:1}))],32),ue("div",{"aria-label":"Open minutes overlay",role:"button",class:Fe(t.noMinutesOverlay?"":"dp__time_display"),tabindex:"0",onKeydown:He(w,["enter"]),onClick:w},[T.$slots.minutes?fe(T.$slots,"minutes",{key:0,text:k(p).text,value:k(p).value}):$("",!0),T.$slots.minutes?$("",!0):(M(),Q(xe,{key:1},[yn(vt(k(p).text),1)],64))],42,eP),ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Decrement minutes",tabindex:"0",onKeydown:A[6]||(A[6]=He(function(L){return V("minutes",!1)},["enter"])),onClick:A[7]||(A[7]=function(L){return V("minutes",!1)})},[T.$slots["arrow-down"]?fe(T.$slots,"arrow-down",{key:0}):$("",!0),T.$slots["arrow-down"]?$("",!0):(M(),Pe(k(Vf),{key:1}))],32)],2),t.enableSeconds?(M(),Q("div",{key:0,class:Fe(k(f))},":",2)):$("",!0),t.enableSeconds?(M(),Q("div",{key:1,class:Fe(k(f))},[ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Increment seconds",tabindex:"0",onKeydown:A[8]||(A[8]=He(function(L){return V("seconds")},["enter"])),onClick:A[9]||(A[9]=function(L){return V("seconds")})},[T.$slots["arrow-up"]?fe(T.$slots,"arrow-up",{key:0}):$("",!0),T.$slots["arrow-up"]?$("",!0):(M(),Pe(k(Bf),{key:1}))],32),ue("div",{role:"button","aria-label":"Open seconds overlay",class:Fe(t.noSecondsOverlay?"":"dp__time_display"),tabindex:"0",onKeydown:He(b,["enter"]),onClick:b},[T.$slots.seconds?fe(T.$slots,"hours",{key:0,text:k(E).text,value:k(E).value}):$("",!0),T.$slots.seconds?$("",!0):(M(),Q(xe,{key:1},[yn(vt(k(E).text),1)],64))],42,tP),ue("div",{class:"dp__inc_dec_button",role:"button","aria-label":"Decrement seconds",tabindex:"0",onKeydown:A[10]||(A[10]=He(function(L){return V("seconds",!1)},["enter"])),onClick:A[11]||(A[11]=function(L){return V("seconds",!1)})},[T.$slots["arrow-down"]?fe(T.$slots,"arrow-down",{key:0}):$("",!0),T.$slots["arrow-down"]?$("",!0):(M(),Pe(k(Vf),{key:1}))],32)],2)):$("",!0),t.is24?$("",!0):(M(),Q("div",nP,[T.$slots["am-pm-button"]?fe(T.$slots,"am-pm-button",{key:0,toggle:x,value:u.value}):$("",!0),T.$slots["am-pm-button"]?$("",!0):(M(),Q("button",{key:1,class:"dp__pm_am_button",role:"button","aria-label":"Switch AM/PM mode",tabindex:"0",onClick:x,onKeydown:He(x,["enter"])},vt(u.value),41,rP))])),Ze(Dn,{name:k(c)(s.value),css:k(h)},{default:qe(function(){return[s.value?(M(),Pe(Ti,{key:0,items:d(t.is24?24:12,t.hoursGridIncrement),"disabled-values":t.filters.times.hours,"onUpdate:modelValue":A[12]||(A[12]=function(L){return T.$emit("update:hours",L)}),onSelected:y,onToggle:y,onResetFlow:A[13]||(A[13]=function(L){return T.$emit("reset-flow")})},Yt({"button-icon":qe(function(){return[T.$slots["clock-icon"]?fe(T.$slots,"clock-icon",{key:0}):$("",!0),T.$slots["clock-icon"]?$("",!0):(M(),Pe(k(ol),{key:1}))]}),_:2},[T.$slots["hours-overlay"]?{name:"item",fn:qe(function(L){var O=L.item;return[fe(T.$slots,"hours-overlay",{text:O.text,value:O.value})]})}:void 0]),1032,["items","disabled-values"])):$("",!0)]}),_:3},8,["name","css"]),Ze(Dn,{name:k(c)(o.value),css:k(h)},{default:qe(function(){return[o.value?(M(),Pe(Ti,{key:0,items:d(60,t.minutesGridIncrement),"disabled-values":t.filters.times.minutes,"onUpdate:modelValue":A[14]||(A[14]=function(L){return T.$emit("update:minutes",L)}),onSelected:w,onToggle:w,onResetFlow:A[15]||(A[15]=function(L){return T.$emit("reset-flow")})},Yt({"button-icon":qe(function(){return[T.$slots["clock-icon"]?fe(T.$slots,"clock-icon",{key:0}):$("",!0),T.$slots["clock-icon"]?$("",!0):(M(),Pe(k(ol),{key:1}))]}),_:2},[T.$slots["minutes-overlay"]?{name:"item",fn:qe(function(L){var O=L.item;return[fe(T.$slots,"minutes-overlay",{text:O.text,value:O.value})]})}:void 0]),1032,["items","disabled-values"])):$("",!0)]}),_:3},8,["name","css"]),Ze(Dn,{name:k(c)(a.value),css:k(h)},{default:qe(function(){return[a.value?(M(),Pe(Ti,{key:0,items:d(60,t.secondsGridIncrement),"disabled-values":t.filters.times.seconds,"onUpdate:modelValue":A[16]||(A[16]=function(L){return T.$emit("update:seconds",L)}),onSelected:b,onToggle:b,onResetFlow:A[17]||(A[17]=function(L){return T.$emit("reset-flow")})},Yt({"button-icon":qe(function(){return[T.$slots["clock-icon"]?fe(T.$slots,"clock-icon",{key:0}):$("",!0),T.$slots["clock-icon"]?$("",!0):(M(),Pe(k(ol),{key:1}))]}),_:2},[T.$slots["seconds-overlay"]?{name:"item",fn:qe(function(L){var O=L.item;return[fe(T.$slots,"seconds-overlay",{text:O.text,value:O.value})]})}:void 0]),1032,["items","disabled-values"])):$("",!0)]}),_:3},8,["name","css"])]))}}}),Go=[{name:"clock-icon",use:["time","calendar"]},{name:"arrow-left",use:["month-year","calendar"]},{name:"arrow-right",use:["month-year","calendar"]},{name:"arrow-up",use:["time","calendar"]},{name:"arrow-down",use:["time","calendar"]},{name:"calendar-icon",use:["month-year","time","calendar"]},{name:"day",use:["calendar"]},{name:"month-overlay",use:["calendar","month-year"]},{name:"year-overlay",use:["calendar","month-year"]},{name:"hours-overlay",use:["calendar","time"]},{name:"minutes-overlay",use:["calendar","time"]},{name:"seconds-overlay",use:["calendar","time"]},{name:"hours",use:["calendar","time"]},{name:"minutes",use:["calendar","time"]},{name:"month",use:["calendar","month-year"]},{name:"year",use:["calendar","month-year"]},{name:"action-select",use:["action"]},{name:"action-preview",use:["action"]},{name:"calendar-header",use:["calendar"]},{name:"marker-tooltip",use:["calendar"]},{name:"now-button",use:[]},{name:"time-picker-overlay",use:["calendar","time"]},{name:"am-pm-button",use:["calendar","time"]}],sP=[{name:"trigger"},{name:"input-icon"},{name:"clear-icon"},{name:"dp-input"}],oP={all:function(){return Go},monthYear:function(){return Go.filter(function(t){return t.use.includes("month-year")})},input:function(){return sP},timePicker:function(){return Go.filter(function(t){return t.use.includes("time")})},action:function(){return Go.filter(function(t){return t.use.includes("action")})},calendar:function(){return Go.filter(function(t){return t.use.includes("calendar")})}},Ei=function(t,e){var n=[];return oP[e]().forEach(function(r){t[r.name]&&n.push(r.name)}),n},aP={key:0,class:"dp__overlay"},uP={class:"dp__overlay_container"},lP={key:1,class:"dp__overlay_row"},cP=Gt({props:{hoursIncrement:{type:[Number,String],default:1},minutesIncrement:{type:[Number,String],default:1},secondsIncrement:{type:[Number,String],default:1},is24:{type:Boolean,default:!0},hoursGridIncrement:{type:[String,Number],default:1},minutesGridIncrement:{type:[String,Number],default:5},secondsGridIncrement:{type:[String,Number],default:5},range:{type:Boolean,default:!1},filters:{type:Object,default:function(){return{}}},timePicker:{type:Boolean,default:!1},hours:{type:[Number,Array],default:0},minutes:{type:[Number,Array],default:0},seconds:{type:[Number,Array],default:0},noHoursOverlay:{type:Boolean,default:!1},noMinutesOverlay:{type:Boolean,default:!1},noSecondsOverlay:{type:Boolean,default:!1},customProps:{type:Object,default:null},enableSeconds:{type:Boolean,default:!1},fixedStart:{type:Boolean,default:!1},fixedEnd:{type:Boolean,default:!1}},emits:["update:hours","update:minutes","update:seconds","mount","reset-flow"],setup:function(t,e){var n=e.expose,r=e.emit,i=t,s=Sa(),o=$t("autoApply",!1),a=Te(null),u=Jf(),l=u.transitionName,c=u.showTransition;jn(function(){r("mount")});var h=Te(!1),f=function(S){return{hours:Array.isArray(i.hours)?i.hours[S]:i.hours,minutes:Array.isArray(i.minutes)?i.minutes[S]:i.minutes,seconds:Array.isArray(i.seconds)?i.seconds[S]:i.seconds}},m=K(function(){var S=[];if(i.range)for(var x=0;x<2;x++)S.push(f(x));else S.push(f(0));return S}),p=function(S){var x=arguments.length>1&&arguments[1]!==void 0&&arguments[1],T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";x||r("reset-flow"),h.value=S,xs(function(){T!==""&&a.value&&a.value.openChildCmp(T)})},E=K(function(){return{dp__button:!0,dp__button_bottom:o}}),d=Ei(s,"timePicker"),y=K(function(){return{is24:i.is24,hoursGridIncrement:i.hoursGridIncrement,minutesGridIncrement:i.minutesGridIncrement,secondsGridIncrement:i.secondsGridIncrement,hoursIncrement:i.hoursIncrement,minutesIncrement:i.minutesIncrement,secondsIncrement:i.secondsIncrement,filters:i.filters,noHoursOverlay:i.noHoursOverlay,noMinutesOverlay:i.noMinutesOverlay,noSecondsOverlay:i.noSecondsOverlay,enableSeconds:i.enableSeconds}}),w=function(S,x,T){return i.range?x===0?[S,m.value[1][T]]:[m.value[0][T],S]:S},b=function(S){r("update:hours",S)},C=function(S){r("update:minutes",S)},V=function(S){r("update:seconds",S)};return n({toggleTimePicker:p}),function(S,x){return M(),Q("div",null,[t.timePicker?$("",!0):(M(),Q("div",{key:0,class:Fe(k(E)),role:"button","aria-label":"Open time picker",tabindex:"0",onKeydown:x[0]||(x[0]=He(function(T){return p(!0)},["enter"])),onClick:x[1]||(x[1]=function(T){return p(!0)})},[S.$slots["clock-icon"]?fe(S.$slots,"clock-icon",{key:0}):$("",!0),S.$slots["clock-icon"]?$("",!0):(M(),Pe(k(ol),{key:1}))],34)),Ze(Dn,{name:k(l)(h.value),css:k(c)},{default:qe(function(){return[h.value||t.timePicker?(M(),Q("div",aP,[ue("div",uP,[S.$slots["time-picker-overlay"]?fe(S.$slots,"time-picker-overlay",{key:0,range:t.range,hours:t.hours,minutes:t.minutes,seconds:t.seconds,setHours:b,setMinutes:C,setSeconds:V}):$("",!0),S.$slots["time-picker-overlay"]?$("",!0):(M(),Q("div",lP,[(M(!0),Q(xe,null,Ct(k(m),function(T,A){return M(),Pe(iP,cn({key:A,disabled:A===0?t.fixedStart:t.fixedEnd,hours:T.hours,minutes:T.minutes,seconds:T.seconds},k(y),{"onUpdate:hours":function(L){return b(w(L,A,"hours"))},"onUpdate:minutes":function(L){return C(w(L,A,"minutes"))},"onUpdate:seconds":function(L){return V(w(L,A,"seconds"))}}),Yt({_:2},[Ct(k(d),function(L,O){return{name:L,fn:qe(function(F){return[fe(S.$slots,L,Mr(sr(F)))]})}})]),1040,["disabled","hours","minutes","seconds","onUpdate:hours","onUpdate:minutes","onUpdate:seconds"])}),128))])),t.timePicker?$("",!0):(M(),Q("div",{key:2,class:Fe(k(E)),role:"button","aria-label":"Close time picker",tabindex:"0",onKeydown:x[2]||(x[2]=He(function(T){return p(!1)},["enter"])),onClick:x[3]||(x[3]=function(T){return p(!1)})},[S.$slots["calendar-icon"]?fe(S.$slots,"calendar-icon",{key:0}):$("",!0),S.$slots["calendar-icon"]?$("",!0):(M(),Pe(k(zo),{key:1}))],34))])])):$("",!0)]}),_:3},8,["name","css"])])}}}),hP=function(t,e){var n=function o(a,u){var l=a;return t.filters.months.includes(mt(l))?o(l=u?er(a,1):Wo(a,1),u):l},r=function o(a,u){var l=a;return t.filters.years.includes(Et(l))?o(l=u?vw(a,1):cN(a,1),u):l},i=function(o,a,u){return[new Date(t[o]),Tn(new Date,{month:a,year:u})]},s=function(o,a){e("update:month",o),e("update:year",a)};return{handleMonthYearChange:function(o){var a=Tn(new Date,{month:t.month,year:t.year}),u=o?er(a,1):Wo(a,1),l=mt(u),c=Et(u);t.filters.months.includes(l)&&(u=n(u,o),l=mt(u),c=Et(u)),t.filters.years.includes(c)&&(u=r(u,o),c=Et(u)),function(h,f){t.preventMinMaxNavigation&&(t.minDate||t.maxDate)?(t.maxDate&&(dn.apply(void 0,_i(i("maxDate",h,f)))||gt.apply(void 0,_i(i("maxDate",h,f))))&&s(h,f),(t.minDate&&en.apply(void 0,_i(i("minDate",h,f)))||gt.apply(void 0,_i(i("minDate",h,f))))&&s(h,f)):s(h,f)}(l,c)}}},fP={class:"dp__month_year_row"},dP={class:"dp__inner_nav",role:"button","aria-label":"Previous month"},pP=["onKeydown"],mP=["onKeydown"],gP={class:"dp__inner_nav",role:"button","aria-label":"Next month"},yP={class:"dp__month_picker_header"},vP={class:"dp__inner_nav",role:"button","aria-label":"Previous month"},wP=["onKeydown"],_P={class:"dp__inner_nav",role:"button","aria-label":"Next month"},bP=Gt({props:{months:{type:Array,default:function(){return[]}},years:{type:Array,default:function(){return[]}},year:{type:Number,default:0},month:{type:Number,default:0},filters:{type:Object,default:function(){return{}}},monthPicker:{type:Boolean,default:!1},instance:{type:Number,default:1},customProps:{type:Object,default:null},multiCalendars:{type:Number,default:0},multiCalendarsSolo:{type:Boolean,default:!1},minDate:{type:[Date,String],default:null},maxDate:{type:[Date,String],default:null},preventMinMaxNavigation:{type:Boolean,default:!1}},emits:["update:month","update:year","monthYearSelect","mount","reset-flow"],setup:function(t,e){var n=e.expose,r=e.emit,i=t,s=Jf(),o=s.transitionName,a=s.showTransition,u=Te(!1),l=Te(!1),c=hP(i,r).handleMonthYearChange;jn(function(){r("mount")});var h=function(O){r("update:month",O),r("monthYearSelect"),x(!0)},f=function(O){r("update:year",O),r("monthYearSelect",!0),T(!0)},m=K(function(){return i.minDate?Et(new Date(i.minDate)):null}),p=K(function(){return i.maxDate?Et(new Date(i.maxDate)):null}),E=K(function(){if(i.minDate&&m.value){if(m.value>i.year)return 12;if(m.value===i.year)return mt(new Date(i.minDate))}return null}),d=K(function(){if(i.maxDate&&p.value){if(p.value<i.year)return-1;if(p.value===i.year)return mt(new Date(i.maxDate))}return null}),y=function(O){for(var F=[],J=0;J<O.length;J+=3)F.push([O[J],O[J+1],O[J+2]]);return F},w=K(function(){var O=i.months.find(function(F){return F.value===i.month});return O||{text:"",value:0}}),b=K(function(){return y(i.months)}),C=K(function(){return y(i.years)}),V=K(function(){return!i.multiCalendars||!!i.multiCalendarsSolo||i.instance===0}),S=K(function(){return!i.multiCalendars||!!i.multiCalendarsSolo||i.instance===i.multiCalendars-1}),x=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];A(O),u.value=!u.value},T=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];A(O),l.value=!l.value},A=function(O){O||r("reset-flow")},L=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];r("update:year",O?i.year+1:i.year-1)};return n({toggleMonthPicker:x,toggleYearPicker:T}),function(O,F){return M(),Q("div",fP,[t.monthPicker?$("",!0):(M(),Q(xe,{key:0},[k(V)?(M(),Q("div",{key:0,class:"dp__month_year_col_nav",onClick:F[0]||(F[0]=function(J){return k(c)(!1)}),onKeydown:F[1]||(F[1]=He(function(J){return k(c)(!1)},["enter"])),tabindex:"0"},[ue("div",dP,[O.$slots["arrow-left"]?fe(O.$slots,"arrow-left",{key:0}):$("",!0),O.$slots["arrow-left"]?$("",!0):(M(),Pe(k(Hw),{key:1}))])],32)):$("",!0),ue("div",{class:"dp__month_year_select",onClick:x,onKeydown:He(x,["enter"]),role:"button","aria-label":"Open months overlay",tabindex:"0"},[O.$slots.month?fe(O.$slots,"month",{key:0,value:k(w).value,text:k(w).text}):$("",!0),O.$slots.month?$("",!0):(M(),Q(xe,{key:1},[yn(vt(k(w).text),1)],64))],40,pP),ue("div",{class:"dp__month_year_select",onClick:T,onKeydown:He(T,["enter"]),role:"button","aria-label":"Open years overlay",tabindex:"0"},[O.$slots.year?fe(O.$slots,"year",{key:0,year:t.year}):$("",!0),O.$slots.year?$("",!0):(M(),Q(xe,{key:1},[yn(vt(t.year),1)],64))],40,mP),Ze(Dn,{name:k(o)(u.value),css:k(a)},{default:qe(function(){return[u.value?(M(),Pe(Ti,cn({key:0},{modelValue:t.month,items:k(b),disabledValues:t.filters.months,minValue:k(E),maxValue:k(d)},{"onUpdate:modelValue":h,onToggle:x}),Yt({"button-icon":qe(function(){return[O.$slots["calendar-icon"]?fe(O.$slots,"calendar-icon",{key:0}):$("",!0),O.$slots["calendar-icon"]?$("",!0):(M(),Pe(k(zo),{key:1}))]}),_:2},[O.$slots["month-overlay"]?{name:"item",fn:qe(function(J){var ke=J.item;return[fe(O.$slots,"month-overlay",{text:ke.text,value:ke.value})]})}:void 0]),1040)):$("",!0)]}),_:3},8,["name","css"]),Ze(Dn,{name:k(o)(l.value),css:k(a)},{default:qe(function(){return[l.value?(M(),Pe(Ti,cn({key:0},{modelValue:t.year,items:k(C),disabledValues:t.filters.years,minValue:k(m),maxValue:k(p)},{"onUpdate:modelValue":f,onToggle:T}),Yt({"button-icon":qe(function(){return[O.$slots["calendar-icon"]?fe(O.$slots,"calendar-icon",{key:0}):$("",!0),O.$slots["calendar-icon"]?$("",!0):(M(),Pe(k(zo),{key:1}))]}),_:2},[O.$slots["year-overlay"]?{name:"item",fn:qe(function(J){var ke=J.item;return[fe(O.$slots,"year-overlay",{text:ke.text,value:ke.value})]})}:void 0]),1040)):$("",!0)]}),_:3},8,["name","css"]),k(S)?(M(),Q("div",{key:1,class:"dp__month_year_col_nav",onClick:F[2]||(F[2]=function(J){return k(c)(!0)}),onKeydown:F[3]||(F[3]=He(function(J){return k(c)(!0)},["enter"])),tabindex:"0"},[ue("div",gP,[O.$slots["arrow-right"]?fe(O.$slots,"arrow-right",{key:0}):$("",!0),O.$slots["arrow-right"]?$("",!0):(M(),Pe(k(Ww),{key:1}))])],32)):$("",!0)],64)),t.monthPicker?(M(),Pe(Ti,cn({key:1},{modelValue:t.month,items:k(b),disabledValues:t.filters.months,minValue:k(E),maxValue:k(d)},{"onUpdate:modelValue":h,onToggle:x}),Yt({header:qe(function(){return[ue("div",yP,[ue("div",{class:"dp__month_year_col_nav",tabindex:"0",onClick:F[4]||(F[4]=function(J){return L(!1)}),onKeydown:F[5]||(F[5]=He(function(J){return L(!1)},["enter"]))},[ue("div",vP,[O.$slots["arrow-left"]?fe(O.$slots,"arrow-left",{key:0}):$("",!0),O.$slots["arrow-left"]?$("",!0):(M(),Pe(k(Hw),{key:1}))])],32),ue("div",{class:"dp__pointer",role:"button","aria-label":"Open years overlay",tabindex:"0",onClick:T,onKeydown:He(T,["enter"])},[O.$slots.year?fe(O.$slots,"year",{key:0,year:t.year}):$("",!0),O.$slots.year?$("",!0):(M(),Q(xe,{key:1},[yn(vt(t.year),1)],64))],40,wP),ue("div",{class:"dp__month_year_col_nav",tabindex:"0",onClick:F[6]||(F[6]=function(J){return L(!0)}),onKeydown:F[7]||(F[7]=He(function(J){return L(!0)},["enter"]))},[ue("div",_P,[O.$slots["arrow-right"]?fe(O.$slots,"arrow-right",{key:0}):$("",!0),O.$slots["arrow-right"]?$("",!0):(M(),Pe(k(Ww),{key:1}))])],32)]),Ze(Dn,{name:k(o)(l.value),css:k(a)},{default:qe(function(){return[l.value?(M(),Pe(Ti,cn({key:0},{modelValue:t.year,items:k(C),disabledValues:t.filters.years,minValue:k(m),maxValue:k(p)},{"onUpdate:modelValue":f,onToggle:T}),Yt({"button-icon":qe(function(){return[O.$slots["calendar-icon"]?fe(O.$slots,"calendar-icon",{key:0}):$("",!0),O.$slots["calendar-icon"]?$("",!0):(M(),Pe(k(zo),{key:1}))]}),_:2},[O.$slots["year-overlay"]?{name:"item",fn:qe(function(J){var ke=J.item;return[fe(O.$slots,"year-overlay",{text:ke.text,value:ke.value})]})}:void 0]),1040)):$("",!0)]}),_:3},8,["name","css"])]}),_:2},[O.$slots["month-overlay"]?{name:"item",fn:qe(function(J){var ke=J.item;return[fe(O.$slots,"month-overlay",{text:ke.text,value:ke.value})]})}:void 0]),1040)):$("",!0)])}}}),TP=function(t,e,n){var r=Te(new Date),i=Te(),s=Te([{month:mt(new Date),year:Et(new Date)}]),o=Te(t.range?[_n(new Date),_n(new Date)]:_n(new Date)),a=Te(t.range?[bn(new Date),bn(new Date)]:bn(new Date)),u=Te(t.range?[0,0]:0);vn(s,function(){setTimeout(function(){t.openOnTop&&e("dpOpen")},0)},{deep:!0}),jn(function(){S(),d.value||(t.startDate&&(s.value[0].month=mt(new Date(t.startDate)),s.value[0].year=Et(new Date(t.startDate)),t.multiCalendars&&O(0)),t.startTime&&E())});var l=K(function(){return function(v){return s.value[v]?s.value[v].month:0}}),c=K(function(){return function(v){return s.value[v]?s.value[v].year:0}}),h=function(v,D,G){s.value[v].month=D,s.value[v].year=G},f=function(v,D){return s.value[v].month=D},m=function(v,D){return s.value[v].year=D},p=function(){var v=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return t.enableSeconds?Array.isArray(u.value)?v?u.value[0]:u.value[1]:u.value:0},E=function(){var v;t.startTime&&(v=t.startTime,Array.isArray(v)?(o.value=[+t.startTime[0].hours,+t.startTime[1].hours],a.value=[+t.startTime[0].minutes,+t.startTime[1].minutes],t.enableSeconds&&(u.value=[+t.startTime[0].seconds,+t.startTime[1].seconds])):(o.value=+t.startTime.hours,a.value=+t.startTime.minutes,t.enableSeconds&&(u.value=+t.startTime.seconds)))},d=K({get:function(){return t.internalModelValue},set:function(v){t.readonly||t.disabled||e("update:internalModelValue",v)}});vn(d,function(){return S()});var y=function(v){var D=!!t.maxDate&&dn($n(v),$n(new Date(t.maxDate))),G=!!t.minDate&&en($n(v),$n(new Date(t.minDate))),Se=typeof t.disabledDates=="function"?t.disabledDates(v):t.disabledDates.some(function(N){return gt($n(new Date(N)),$n(v))}),Ge=t.filters.months.length?t.filters.months.map(function(N){return+N}):[],ot=Ge.includes(mt(v)),tt=!!t.disabledWeekDays.length&&t.disabledWeekDays.some(function(N){return+N===Lx(v)}),yt=!!t.allowedDates.length&&!t.allowedDates.some(function(N){return gt($n(new Date(N)),$n(v))}),R=Et(v),ne=R<+t.yearRange[0]||R>+t.yearRange[1];return D||G||Se||ot||ne||tt||yt},w=function(v){return!!d.value&&!(t.hideOffsetDates&&!v.current)&&!t.range&&(t.multiDates&&Array.isArray(d.value)?d.value.some(function(D){return gt(D,v.value)}):gt(v.value,d.value?d.value:r.value))},b=function(v){if(f(0,mt(v)),m(0,Et(v)),t.multiCalendars)for(var D=1;D<t.multiCalendars;D++){var G=Tn(new Date,{month:l.value(D-1),year:c.value(D-1)}),Se=mw(G,{months:1});s.value.push({month:mt(Se),year:Et(Se)})}},C=function(v){b(v),o.value=_n(v),a.value=bn(v),u.value=xr(v)},V=function(){return Array.isArray(d.value)&&d.value.length?d.value[d.value.length-1]:null},S=function(){if(d.value)if(bi(d.value)){if(d.value.length!==2||t.multiDates){if(bi(d.value)&&t.multiDates){var v=d.value[d.value.length-1];v&&C(v)}}else b(d.value[0]),o.value=[_n(d.value[0]),d.value[1]?_n(d.value[1]):_n(new Date)],a.value=[bn(d.value[0]),d.value[1]?bn(d.value[1]):bn(new Date)],u.value=[xr(d.value[0]),d.value[1]?xr(d.value[1]):xr(new Date)];t.multiCalendars&&t.multiCalendarsSolo&&function(){if(Array.isArray(d.value)&&d.value.length===2){var D=new Date(d.value[1]?d.value[1]:er(d.value[0],1));mt(d.value[0])!==mt(d.value[1])&&t.multiCalendarsSolo&&(f(1,mt(D)),m(1,Et(D)))}}()}else C(d.value);else t.timePicker?(E(),t.range?En(o.value)&&En(a.value)&&(d.value=[Zt(new Date,o.value[0],a.value[0],p()),Zt(new Date,o.value[1],a.value[1],p(!1))]):d.value=Zt(new Date,o.value,a.value,p())):t.monthPicker?d.value=wi(new Date,l.value(0),c.value(0)):t.multiCalendars&&b(new Date)},x=function(v){var D=mt(new Date(v)),G=Et(new Date(v));if(f(0,D),m(0,G),t.multiCalendars>0)for(var Se=1;Se<t.multiCalendars;Se++){var Ge=CN(Tn(new Date(v),{year:l.value(Se-1),month:c.value(Se-1)}));f(Se,Ge.month),m(Se,Ge.year)}},T=function(v){if(d.value&&Array.isArray(d.value))if(d.value.some(function(G){return gt(v,G)})){var D=d.value.filter(function(G){return!gt(G,v)});d.value=D.length?D:null}else d.value.push(v);else d.value=[v]},A=function(v){if(Array.isArray(d.value)&&d.value[0]){var D=RR(v,d.value[0]),G=Math.abs(D<0?D+1:D-1);if(t.minRange&&t.maxRange)return G>=+t.minRange&&G<=+t.maxRange;if(t.minRange)return G>=+t.minRange;if(t.maxRange)return G<=+t.maxRange}return!0},L=function(v){return Array.isArray(d.value)&&d.value.length===2?t.fixedStart&&(dn(v,d.value[0])||gt(v,d.value[0]))?[d.value[0],v]:t.fixedEnd&&(en(v,d.value[1])||gt(v,d.value[1]))?[v,d.value[1]]:d.value:[]},O=function(v){for(var D=v-1;D>=0;D--){var G=Wo(Tn(new Date,{month:l.value(D+1),year:c.value(D+1)}),1);h(D,mt(G),Et(G))}for(var Se=v+1;Se<=t.multiCalendars-1;Se++){var Ge=er(Tn(new Date,{month:l.value(Se-1),year:c.value(Se-1)}),1);h(Se,mt(Ge),Et(Ge))}},F=function(v){return Zt(v,o.value,a.value,p())},J=function(v){bi(v)&&bi(d.value)&&En(o.value)&&En(a.value)?(v[0]&&d.value[0]&&(d.value[0]=Zt(v[0],o.value[0],a.value[0],p())),v[1]&&d.value[1]&&(d.value[1]=Zt(v[1],o.value[1],a.value[1],p(!1)))):t.multiDates&&Array.isArray(d.value)?d.value[d.value.length-1]=F(v):t.range||ul(v)||(d.value=F(v)),e("timeUpdate")},ke=function(v){return!(Qw(d.value,t.range)&&d.value[0]&&i.value)||(v?dn(i.value,d.value[0]):en(i.value,d.value[0]))},We=function(v){var D=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return t.range&&ul(d.value)?!(t.hideOffsetDates&&!v.current)&&gt(new Date(v.value),d.value[D?0:1]):!!t.range&&(gt(new Date(v.value),d.value&&Array.isArray(d.value)?D?d.value[0]||null:d.value[1]:null)&&(!D||!en(i.value||null,Array.isArray(d.value)?d.value[0]:null))||gt(v.value,Array.isArray(d.value)?d.value[0]:null)&&ke(D))},Ie=function(v,D){var G=Tn(new Date,{month:l.value(D),year:c.value(D)}),Se=v<0?er(G,1):Wo(G,1);h(D,mt(Se),Et(Se)),t.multiCalendars&&!t.multiCalendarsSolo&&O(D)};return{today:r,hours:o,minutes:a,seconds:u,month:l,year:c,monthYearSelect:function(){var v=arguments.length>0&&arguments[0]!==void 0&&arguments[0];t.autoApply&&t.monthPicker&&e("autoApply",v)},isDisabled:y,updateTime:function(v){var D=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],G=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Se=D?v:o.value,Ge=D||G?a.value:v,ot=G?v:u.value;if(t.range&&ul(d.value)&&En(Se)&&En(Ge)&&En(ot)){var tt=function(R){return Zt(d.value[R],Se[R],Ge[R],ot[R])};if(gt(d.value[0],d.value[1])&&(Nw(tt(0),d.value[1])||Pw(tt(1),d.value[0])))return}if(o.value=Se,a.value=Ge,u.value=ot,d.value)if(t.multiDates){var yt=V();yt&&J(yt)}else J(d.value);else t.timePicker&&J(t.range?[new Date,new Date]:new Date);n()},setHoverDate:function(v){!v.current&&t.hideOffsetDates||(i.value=v.value)},getWeekNum:function(v){var D=v.find(function(G){return G.current});return D?Fx(D.value):""},selectDate:function(v){var D=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!y(v.value)&&(v.current||!t.hideOffsetDates))if(t.range||En(o.value)||En(a.value)){if(En(o.value)&&En(a.value)&&!t.multiDates){var G=d.value?d.value.slice():[];G.length!==2||t.fixedStart||t.fixedEnd||(G=[]),t.autoRange?(D&&x(v.value),G=[new Date(v.value),gi(new Date(v.value),+t.autoRange)]):t.fixedStart||t.fixedEnd?G=L(new Date(v.value)):G[0]?A(new Date(v.value))&&(en(new Date(v.value),new Date(G[0]))?G.unshift(new Date(v.value)):G[1]=new Date(v.value)):G[0]=new Date(v.value),G[0]&&!G[1]?G[0]=Zt(G[0],o.value[0],a.value[0],p()):(G[0]=Zt(G[0],o.value[0],a.value[0],p()),G[1]=Zt(G[1],o.value[1],a.value[1],p(!1)),n()),d.value=G,G[0]&&G[1]&&t.autoApply&&e("autoApply")}}else{var Se=Zt(new Date(v.value),o.value,a.value,p());t.multiDates?T(Se):d.value=Se,n(),t.autoApply&&e("autoApply")}},rangeActive:function(v){return bi(d.value)&&d.value[0]&&d.value[1]?dn(v.value,d.value[0])&&en(v.value,d.value[1]):!!(bi(d.value)&&d.value[0]&&i.value)&&(dn(v.value,d.value[0])&&en(v.value,i.value)||en(v.value,d.value[0])&&dn(v.value,i.value))},isActiveDate:w,updateMonthYear:function(v,D){var G=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];G?f(v,D):m(v,D),t.multiCalendars&&!t.multiCalendarsSolo&&O(v),t.monthPicker&&(d.value?d.value=wi(d.value,l.value(0),c.value(0)):d.value=wi(new Date,l.value(0),c.value(0))),n()},isHoverRangeEnd:function(v){if(t.autoRange){if(i.value){if(t.hideOffsetDates&&!v.current)return!1;var D=gi(i.value,+t.autoRange);return gt(D,new Date(v.value))}return!1}return!1},isAutoRangeInBetween:function(v){if(t.autoRange){if(i.value){var D=gi(i.value,+t.autoRange);return!(t.hideOffsetDates&&!v.current)&&dn(v.value,i.value)&&en(v.value,D)}return!1}return!1},isAutoRangeStart:function(v){return!!t.autoRange&&!!i.value&&!(t.hideOffsetDates&&!v.current)&&gt(i.value,v.value)},clearHoverDate:function(){i.value=null},rangeActiveStartEnd:We,handleScroll:function(v,D){t.monthChangeOnScroll&&Ie(t.monthChangeOnScroll==="inverse"?-v.deltaY:v.deltaY,D)},getMarker:function(v){return t.markers.find(function(D){return gt($n(new Date(v.value)),$n(new Date(D.date)))})},handleArrow:function(v,D){t.monthChangeOnArrows&&Ie(v==="right"?-1:1,D)},selectCurrentDate:function(){t.range?Qw(d.value,t.range)&&(d.value&&d.value[0]?d.value=en(new Date,d.value[0])?[new Date,d.value[0]]:[d.value[0],new Date]:d.value=[new Date]):e("update:internalModelValue",new Date),t.autoApply&&e("selectDate")},isHoverDate:function(v,D){return(!Array.isArray(t.internalModelValue)||!t.internalModelValue.length)&&!(v||w(D)||!D.current&&t.hideOffsetDates||t.range&&(We(D)||We(D,!1)))},isHoverDateStartEnd:function(v,D,G){return!(!Array.isArray(t.internalModelValue)||!t.internalModelValue[0]||t.internalModelValue.length!==1)&&!v&&(G?dn(t.internalModelValue[0],D.value):en(t.internalModelValue[0],D.value))},presetDateRange:function(v){v.length&&v.length<=2&&t.range&&(d.value=v.map(function(D){return new Date(D)}),t.autoApply&&e("selectDate"))}}};function t_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ll(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t_(Object(n),!0).forEach(function(r){Nr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var Yo,EP=["id","onKeydown"],kP={key:0,class:"dp__preset_ranges"},IP=["onClick"],SP={key:1,class:"dp__now_wrap"},CP=Gt({props:{internalModelValue:{type:[Date,Array],default:null},weekNumbers:{type:Boolean,default:!1},weekStart:{type:[Number,String],default:1},disableMonthYearSelect:{type:Boolean,default:!1},menuClassName:{type:String,default:null},calendarClassName:{type:String,default:null},yearRange:{type:Array,default:function(){return[1970,2100]}},range:{type:Boolean,default:!1},multiCalendars:{type:Number,default:0},multiCalendarsSolo:{type:Boolean,default:!1},calendarCellClassName:{type:String,default:null},enableTimePicker:{type:Boolean,default:!0},is24:{type:Boolean,default:!0},hoursIncrement:{type:[String,Number],default:1},minutesIncrement:{type:[String,Number],default:1},secondsIncrement:{type:[String,Number],default:1},hoursGridIncrement:{type:[String,Number],default:1},secondsGridIncrement:{type:[String,Number],default:1},minutesGridIncrement:{type:[String,Number],default:5},minDate:{type:[Date,String],default:null},maxDate:{type:[Date,String],default:null},autoApply:{type:Boolean,default:!1},selectText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},previewFormat:{type:[String,Function],default:function(){return null}},locale:{type:String,default:"en-US"},weekNumName:{type:String,default:"W"},disabledDates:{type:[Array,Function],default:function(){return[]}},filters:{type:Object,default:function(){return{}}},minTime:{type:Object,default:null},maxTime:{type:Object,default:null},inline:{type:Boolean,default:!1},openOnTop:{type:Boolean,default:!1},monthPicker:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},monthNameFormat:{type:String,default:"short"},startDate:{type:[Date,String],default:null},startTime:{type:[Object,Array],default:null},monthYearComponent:{type:Object,default:null},timePickerComponent:{type:Object,default:null},actionRowComponent:{type:Object,default:null},customProps:{type:Object,default:null},hideOffsetDates:{type:Boolean,default:!1},autoRange:{type:[Number,String],default:null},noToday:{type:Boolean,default:!1},noHoursOverlay:{type:Boolean,default:!1},noMinutesOverlay:{type:Boolean,default:!1},noSecondsOverlay:{type:Boolean,default:!1},disabledWeekDays:{type:Array,default:function(){return[]}},allowedDates:{type:Array,default:function(){return[]}},showNowButton:{type:Boolean,default:!1},nowButtonLabel:{type:String,default:"Now"},monthChangeOnScroll:{type:[Boolean,String],default:!0},markers:{type:Array,default:function(){return[]}},uid:{type:String,default:null},modeHeight:{type:[Number,String],default:255},enableSeconds:{type:Boolean,default:!1},escClose:{type:Boolean,default:!0},spaceConfirm:{type:Boolean,default:!0},monthChangeOnArrows:{type:Boolean,default:!0},textInput:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},multiDates:{type:Boolean,default:!1},presetRanges:{type:Array,default:function(){return[]}},flow:{type:Array,default:function(){return[]}},preventMinMaxNavigation:{type:Boolean,default:!1},minRange:{type:[Number,String],default:null},maxRange:{type:[Number,String],default:null},fixedStart:{type:Boolean,default:!1},fixedEnd:{type:Boolean,default:!1}},emits:["update:internalModelValue","closePicker","selectDate","dpOpen","autoApply","timeUpdate","flow-step"],setup:function(t,e){var n=e.emit,r=t,i=Sa(),s=Te(null),o=Di({timePicker:!1,monthYearInput:!1,calendar:!1}),a=Te([]),u=Te(null),l=Te(null),c=Te(0),h=Te(!1),f=Te(0);jn(function(){var X;h.value=!0,(X=r.presetRanges)!==null&&X!==void 0&&X.length||g(),r.inline||xs(function(){return n("dpOpen")});var oe=pn(l);if(!oe||r.textInput||r.inline||oe.focus({preventScroll:!0}),oe){var he=function(be){be.stopImmediatePropagation(),be.stopPropagation()};oe.addEventListener("pointerdown",he),oe.addEventListener("mousedown",he)}document.addEventListener("resize",g)}),pa(function(){document.removeEventListener("resize",g)});var m=function(){f.value=-1},p=TP(r,n,function(){var X;(X=r.flow)!==null&&X!==void 0&&X.length&&f.value!==-1&&(f.value+=1,n("flow-step",f.value),je())}),E=p.updateTime,d=p.updateMonthYear,y=p.today,w=p.month,b=p.year,C=p.hours,V=p.minutes,S=p.seconds,x=p.isDisabled,T=p.isActiveDate,A=p.selectDate,L=p.getWeekNum,O=p.setHoverDate,F=p.isHoverRangeEnd,J=p.isAutoRangeInBetween,ke=p.isAutoRangeStart,We=p.rangeActive,Ie=p.clearHoverDate,v=p.rangeActiveStartEnd,D=p.monthYearSelect,G=p.handleScroll,Se=p.handleArrow,Ge=p.getMarker,ot=p.selectCurrentDate,tt=p.isHoverDateStartEnd,yt=p.isHoverDate,R=p.presetDateRange,ne=Ei(i,"calendar"),N=Ei(i,"action"),Y=Ei(i,"timePicker"),ye=Ei(i,"monthYear"),Ne=K(function(){return r.openOnTop?"dp__arrow_bottom":"dp__arrow_top"}),pe=K(function(){return function(X){for(var oe=[],he=+X[0];he<=+X[1];he++)oe.push({value:+he,text:"".concat(he)});return oe}(r.yearRange)}),ve=K(function(){return function(X,oe){var he=new Intl.DateTimeFormat(X,{month:oe,timeZone:"UTC"});return[1,2,3,4,5,6,7,8,9,10,11,12].map(function(be){var Ce=be<10?"0".concat(be):be;return new Date("2017-".concat(Ce,"-01T00:00:00+00:00"))}).map(function(be,Ce){return{text:he.format(be),value:Ce}})}(r.locale,r.monthNameFormat)}),g=function(){var X=pn(s);X&&(c.value=X.getBoundingClientRect().width)},_=K(function(){return function(X){return AN(w.value(X),b.value(X),+r.weekStart,r.hideOffsetDates)}}),I=K(function(){return r.multiCalendars>0&&r.range?_i(Array(r.multiCalendars).keys()):[0]}),U=K(function(){return function(X){return X===1}}),P=K(function(){return r.monthPicker||r.timePicker}),z=K(function(){return{dp__flex_display:r.multiCalendars>0}}),W=K(function(){return{dp__instance_calendar:r.multiCalendars>0}}),q=K(function(){return{dp__menu_disabled:r.disabled,dp__menu_readonly:r.readonly}}),H=K(function(){return function(X){return Z(_,X)}}),B=K(function(){return{locale:r.locale,weekNumName:r.weekNumName,weekStart:r.weekStart,weekNumbers:r.weekNumbers,enableTimePicker:r.enableTimePicker,disableMonthYearSelect:r.disableMonthYearSelect,monthPicker:r.monthPicker,timePicker:r.timePicker,range:r.range,filters:r.filters,minTime:r.minTime,maxTime:r.maxTime,minDate:r.minDate,maxDate:r.maxDate,customProps:r.customProps,calendarClassName:r.calendarClassName,specificMode:P.value,getWeekNum:L,multiCalendars:r.multiCalendars,months:ve.value,years:pe.value,multiCalendarsSolo:r.multiCalendarsSolo,modeHeight:r.modeHeight,internalModelValue:r.internalModelValue}}),ie=K(function(){var X;return Nr(X={dp__menu:!0},r.menuClassName,!!r.menuClassName),Nr(X,"dp__relative",r.inline),X}),Z=function(X,oe){return X.value(oe).map(function(he){return ll(ll({},he),{},{days:he.days.map(function(be){var Ce=x(be.value),tr=yt(Ce,be);return be.marker=Ge(be),be.classData=Nr({dp__cell_offset:!be.current,dp__pointer:!(Ce||!be.current&&r.hideOffsetDates),dp__active_date:!r.range&&T(be),dp__date_hover:tr,dp__date_hover_start:tt(tr,be,!0),dp__date_hover_end:tt(tr,be,!1),dp__range_between:!(!r.range||r.multiCalendars>0&&!be.current||Ce||!be.current&&r.hideOffsetDates||T(be))&&We(be),dp__today:!r.noToday&&gt(be.value,y.value),dp__cell_disabled:Ce,dp__cell_auto_range:J(be),dp__cell_auto_range_start:ke(be),dp__cell_auto_range_end:F(be),dp__range_start:r.multiCalendars>0?be.current&&v(be):v(be),dp__range_end:r.multiCalendars>0?be.current&&v(be,!1):v(be,!1)},r.calendarCellClassName,!!r.calendarCellClassName),be})})})},se=function(X){X.stopPropagation(),X.preventDefault(),X.stopImmediatePropagation()},ae=function(){r.escClose&&n("closePicker")},Re=function(X){X.stopImmediatePropagation(),X.preventDefault(),r.spaceConfirm&&n("selectDate")},Ye=function(X){var oe;(oe=r.flow)!==null&&oe!==void 0&&oe.length&&(o[X]=!0,Object.keys(o).filter(function(he){return!o[he]}).length||je())},je=function(){r.flow[f.value]==="month"&&a.value[0]&&a.value[0].toggleMonthPicker(!0),r.flow[f.value]==="year"&&a.value&&a.value[0].toggleYearPicker(!0),r.flow[f.value]==="calendar"&&u.value&&u.value.toggleTimePicker(!1,!0),r.flow[f.value]==="time"&&u.value&&u.value.toggleTimePicker(!0,!0);var X=r.flow[f.value];X!=="hours"&&X!=="minutes"&&X!=="seconds"||u.value&&u.value.toggleTimePicker(!0,!0,X)};return function(X,oe){return M(),Q("div",{id:t.uid?"dp-menu-".concat(t.uid):void 0,tabindex:"0",ref_key:"dpMenuRef",ref:l,role:"dialog","aria-label":"Datepicker menu",class:Fe(k(ie)),onMouseleave:oe[11]||(oe[11]=function(){return k(Ie)&&k(Ie).apply(void 0,arguments)}),onClick:se,onKeydown:[He(ae,["esc"]),He(Re,["space"]),oe[12]||(oe[12]=He(function(he){return k(Se)("left",0)},["left"])),oe[13]||(oe[13]=He(function(he){return k(Se)("right",0)},["right"]))]},[(t.disabled||t.readonly)&&t.inline?(M(),Q("div",{key:0,class:Fe(k(q))},null,2)):$("",!0),t.inline?$("",!0):(M(),Q("div",{key:1,class:Fe(k(Ne))},null,2)),ue("div",{class:Fe(t.presetRanges.length?"dp__menu_content_wrapper":null)},[t.presetRanges.length?(M(),Q("div",kP,[(M(!0),Q(xe,null,Ct(t.presetRanges,function(he,be){return M(),Q("div",{key:be,class:"dp__preset_range",onClick:function(Ce){return k(R)(he.range)}},vt(he.label),9,IP)}),128))])):$("",!0),ue("div",{class:"dp__instance_calendar",ref_key:"calendarWrapperRef",ref:s,role:"document"},[ue("div",{class:Fe(k(z))},[(M(!0),Q(xe,null,Ct(k(I),function(he,be){return M(),Q("div",{key:he,class:Fe(k(W))},[t.disableMonthYearSelect||t.timePicker?$("",!0):(M(),Pe(jl(t.monthYearComponent?t.monthYearComponent:bP),cn({key:0,ref_for:!0,ref:function(Ce){Ce&&(a.value[be]=Ce)}},{months:k(ve),years:k(pe),filters:t.filters,monthPicker:t.monthPicker,month:k(w)(he),year:k(b)(he),customProps:t.customProps,multiCalendars:t.multiCalendars,multiCalendarsSolo:t.multiCalendarsSolo,instance:he,minDate:t.minDate,maxDate:t.maxDate,preventMinMaxNavigation:t.preventMinMaxNavigation},{onMount:oe[0]||(oe[0]=function(Ce){return Ye("monthYearInput")}),onResetFlow:m,"onUpdate:month":function(Ce){return k(d)(he,Ce,!0)},"onUpdate:year":function(Ce){return k(d)(he,Ce,!1)},onMonthYearSelect:k(D)}),Yt({_:2},[Ct(k(ye),function(Ce,tr){return{name:Ce,fn:qe(function(kt){return[fe(X.$slots,Ce,Mr(sr(kt)))]})}})]),1040,["onUpdate:month","onUpdate:year","onMonthYearSelect"])),Ze(qN,cn(k(B),{"flow-step":f.value,"onUpdate:flow-step":oe[1]||(oe[1]=function(Ce){return f.value=Ce}),instance:he,"mapped-dates":k(H)(he),month:k(w)(he),year:k(b)(he),"month-year-component":t.monthYearComponent,onSelectDate:function(Ce){return k(A)(Ce,!k(U)(he))},onSetHoverDate:oe[2]||(oe[2]=function(Ce){return k(O)(Ce)}),onHandleScroll:function(Ce){return k(G)(Ce,he)},onMount:oe[3]||(oe[3]=function(Ce){return Ye("calendar")}),onResetFlow:m}),Yt({_:2},[Ct(k(ne),function(Ce,tr){return{name:Ce,fn:qe(function(kt){return[fe(X.$slots,Ce,Mr(sr(ll({},kt))))]})}})]),1040,["flow-step","instance","mapped-dates","month","year","month-year-component","onSelectDate","onHandleScroll"])],2)}),128))],2),ue("div",null,[t.enableTimePicker&&!t.monthPicker?(M(),Pe(jl(t.timePickerComponent?t.timePickerComponent:cP),cn({key:0,ref_key:"timePickerRef",ref:u},{is24:t.is24,hoursIncrement:t.hoursIncrement,minutesIncrement:t.minutesIncrement,hoursGridIncrement:t.hoursGridIncrement,secondsIncrement:t.secondsIncrement,minutesGridIncrement:t.minutesGridIncrement,secondsGridIncrement:t.secondsGridIncrement,noHoursOverlay:t.noHoursOverlay,noMinutesOverlay:t.noMinutesOverlay,noSecondsOverlay:t.noSecondsOverlay,range:t.range,filters:t.filters,timePicker:t.timePicker,hours:k(C),minutes:k(V),seconds:k(S),customProps:t.customProps,enableSeconds:t.enableSeconds,fixedStart:t.fixedStart,fixedEnd:t.fixedEnd},{onMount:oe[4]||(oe[4]=function(he){return Ye("timePicker")}),"onUpdate:hours":oe[5]||(oe[5]=function(he){return k(E)(he)}),"onUpdate:minutes":oe[6]||(oe[6]=function(he){return k(E)(he,!1)}),"onUpdate:seconds":oe[7]||(oe[7]=function(he){return k(E)(he,!1,!0)}),onResetFlow:m}),Yt({_:2},[Ct(k(Y),function(he,be){return{name:he,fn:qe(function(Ce){return[fe(X.$slots,he,Mr(sr(Ce)))]})}})]),1040)):$("",!0)])],512),t.showNowButton?(M(),Q("div",SP,[X.$slots["now-button"]?fe(X.$slots,"now-button",{key:0,selectCurrentDate:k(ot)}):$("",!0),X.$slots["now-button"]?$("",!0):(M(),Q("button",{key:1,type:"button",role:"button",class:"dp__now_button",onClick:oe[8]||(oe[8]=function(){return k(ot)&&k(ot).apply(void 0,arguments)})},vt(t.nowButtonLabel),1))])):$("",!0)],2),t.autoApply?$("",!0):(M(),Pe(jl(t.actionRowComponent?t.actionRowComponent:KN),cn({key:2},{calendarWidth:c.value,selectText:t.selectText,cancelText:t.cancelText,internalModelValue:t.internalModelValue,range:t.range,previewFormat:t.previewFormat,inline:t.inline,monthPicker:t.monthPicker,timePicker:t.timePicker,customProps:t.customProps,multiCalendars:t.multiCalendars,menuMount:h.value,maxTime:t.maxTime,minTime:t.minTime,enableTimePicker:t.enableTimePicker,minDate:t.minDate,maxDate:t.maxDate,multiDates:t.multiDates},{onClosePicker:oe[9]||(oe[9]=function(he){return X.$emit("closePicker")}),onSelectDate:oe[10]||(oe[10]=function(he){return X.$emit("selectDate")})}),Yt({_:2},[Ct(k(N),function(he,be){return{name:he,fn:qe(function(Ce){return[fe(X.$slots,he,Mr(sr(ll({},Ce))))]})}})]),1040))],42,EP)}}});(function(t){t.center="center",t.left="left",t.right="right"})(Yo||(Yo={}));var AP=function(t,e,n,r,i,s,o,a,u,l,c,h,f){var m=Te(""),p=Te();vn(p,function(){f("internalModelChange",p.value)});var E=function(){if(p.value)if(t&&typeof t!="string")m.value=t(e?zf(p.value):n?Wf(p.value):p.value);else{var d=Kw(t,s,a,n,e,o);Array.isArray(p.value)&&l?m.value=p.value.map(function(y){return al(y,d,u==null?void 0:u.value)}).join("; "):m.value=al(p.value,d,u==null?void 0:u.value,h.rangeSeparator)}else m.value=""};return{parseExternalModelValue:function(d){var y=null;d?e?function(w){return Array.isArray(w)&&w.length===2}(d)&&"hours"in d[0]&&"minutes"in d[0]?y=[Zt(null,+d[0].hours,+d[0].minutes,+d[0].seconds),Zt(null,+d[1].hours,+d[1].minutes,+d[1].seconds)]:function(w){return Ko(w)==="object"}(d)&&(y=Zt(null,+d.hours,+d.minutes,+d.seconds)):n?function(w){return Ko(w)==="object"}(d)&&"month"in d&&"year"in d&&(y=wi(null,+d.month,+d.year)):l&&Array.isArray(d)?y=d.map(function(w){return new Date(w)}):r?function(w,b){return b?Array.isArray(w):ul(w)}(d,i)&&(y=[new Date(d[0]),d[1]?new Date(d[1]):null]):function(w){return typeof w=="string"||Ko(w)==="object"}(d)&&(y=new Date(d)):y=null,qf(y)?(p.value=y,E()):(p.value=null,m.value="")},formatInputValue:E,internalModelValue:p,inputValue:m,emitModelValue:function(){if(n)f("update:modelValue",Wf(p.value));else if(e)f("update:modelValue",zf(p.value));else{p.value&&r&&i&&p.value.length===1&&p.value.push(null);var d=c?Array.isArray(p.value)?p.value.map(function(y){return y&&Yw(y)}):Yw(p.value):p.value;f("update:modelValue",d)}E()},checkBeforeEmit:function(){return!!p.value&&(r?i?p.value.length>=1:p.value.length===2:!!p.value)}}},DP=typeof window!="undefined"?window:void 0,Zf=function(){},OP=function(t,e,n,r){if(!t)return Zf;var i,s=Zf,o=vn(function(){return k(t)},function(u){s(),u&&(u.addEventListener(e,n,r),s=function(){u.removeEventListener(e,n,r),s=Zf})},{immediate:!0,flush:"post"}),a=function(){o(),s()};return i=a,w_()&&__(i),a};function n_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function RP(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n_(Object(n),!0).forEach(function(r){Nr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):n_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var xP=Gt({props:{uid:{type:String,default:null},name:{type:String,default:null},is24:{type:Boolean,default:!0},enableTimePicker:{type:Boolean,default:!0},locale:{type:String,default:"en-US"},range:{type:Boolean,default:!1},multiCalendars:{type:[Boolean,Number,String],default:null},multiCalendarsSolo:{type:Boolean,default:!1},modelValue:{type:[String,Date,Array,Object],default:null},position:{type:String,default:"center"},placeholder:{type:String,default:null},weekNumbers:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},hoursIncrement:{type:[String,Number],default:1},minutesIncrement:{type:[String,Number],default:1},secondsIncrement:{type:[String,Number],default:1},hoursGridIncrement:{type:[String,Number],default:1},minutesGridIncrement:{type:[String,Number],default:5},secondsGridIncrement:{type:[String,Number],default:5},minDate:{type:[Date,String],default:null},maxDate:{type:[Date,String],default:null},minTime:{type:Object,default:null},maxTime:{type:Object,default:null},weekStart:{type:[String,Number],default:1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},monthNameFormat:{type:String,default:"short"},weekNumName:{type:String,default:"W"},format:{type:[String,Function],default:function(){return null}},previewFormat:{type:[String,Function],default:function(){return null}},inputClassName:{type:String,default:null},menuClassName:{type:String,default:null},calendarClassName:{type:String,default:null},calendarCellClassName:{type:String,default:null},hideInputIcon:{type:Boolean,default:!1},state:{type:Boolean,default:null},clearable:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!1},autoApply:{type:Boolean,default:!1},filters:{type:Object,default:function(){return{}}},disableMonthYearSelect:{type:Boolean,default:!1},yearRange:{type:Array,default:function(){return[1900,2100]}},disabledDates:{type:[Array,Function],default:function(){return[]}},disabledWeekDays:{type:Array,default:function(){return[]}},inline:{type:Boolean,default:!1},inlineWithInput:{type:Boolean,default:!1},selectText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},autoPosition:{type:Boolean,default:!0},monthPicker:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},closeOnAutoApply:{type:Boolean,default:!0},textInput:{type:Boolean,default:!1},textInputOptions:{type:Object,default:function(){return{}}},teleport:{type:String,default:"body"},startDate:{type:[Date,String],default:null},startTime:{type:[Object,Array],default:null},monthYearComponent:{type:Object,default:null},timePickerComponent:{type:Object,default:null},actionRowComponent:{type:Object,default:null},customProps:{type:Object,default:null},hideOffsetDates:{type:Boolean,default:!1},autoRange:{type:[Number,String],default:null},noToday:{type:Boolean,default:!1},noHoursOverlay:{type:Boolean,default:!1},noMinutesOverlay:{type:Boolean,default:!1},noSecondsOverlay:{type:Boolean,default:!1},altPosition:{type:[Boolean,Function],default:!1},allowedDates:{type:Array,default:function(){return[]}},showNowButton:{type:Boolean,default:!1},nowButtonLabel:{type:String,default:"Now"},partialRange:{type:Boolean,default:!0},monthChangeOnScroll:{type:[Boolean,String],default:!0},markers:{type:Array,default:function(){return[]}},transitions:{type:Boolean,default:!0},modeHeight:{type:[Number,String],default:255},enableSeconds:{type:Boolean,default:!1},openMenuOnFocus:{type:Boolean,default:!0},escClose:{type:Boolean,default:!0},spaceConfirm:{type:Boolean,default:!0},monthChangeOnArrows:{type:Boolean,default:!0},formatLocale:{type:Object,default:null},autocomplete:{type:String,default:null},multiDates:{type:Boolean,default:!1},presetRanges:{type:Array,default:function(){return[]}},flow:{type:Array,default:function(){return[]}},preventMinMaxNavigation:{type:Boolean,default:!1},minRange:{type:[Number,String],default:null},maxRange:{type:[Number,String],default:null},fixedStart:{type:Boolean,default:!1},fixedEnd:{type:Boolean,default:!1},utc:{type:Boolean,default:!1}},emits:["update:modelValue","textSubmit","closed","cleared","open","focus","blur","internalModelChange","recalculatePosition","flow-step"],setup:function(t,e){var n=e.expose,r=e.emit,i=t,s=Sa(),o=Te(!1),a=Ss(i,"modelValue"),u=Te(null),l=Te(null);ir("autoApply",i.autoApply);var c=K(function(){return i.formatLocale});ir("formatLocale",c),ir("textInput",Ss(i,"textInput")),jn(function(){V(i.modelValue),i.inline||(window.addEventListener("scroll",v),window.addEventListener("resize",D)),i.inline&&(o.value=!0)}),pa(function(){i.inline||(window.removeEventListener("scroll",v),window.removeEventListener("resize",D))});var h=Ei(s,"all"),f=Ei(s,"input");vn(a,function(){V(a.value)},{deep:!0});var m=function(N,Y,ye,Ne,pe,ve){var g=Te({top:"0",left:"0",transform:"none"}),_=Te(!1),I=function(W){var q=W.getBoundingClientRect();return{left:q.left+window.scrollX,top:q.top+window.scrollY}},U=function(W){for(var q=0,H=0;W&&!isNaN(W.offsetLeft)&&!isNaN(W.offsetTop);)q+=W.offsetLeft-W.scrollLeft,H+=W.offsetTop-W.scrollTop,W=W.offsetParent;return{top:H,left:q}},P=function(){var W=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],q=pn(pe);if(Y&&typeof Y!="boolean")g.value=Y(q);else if(q){var H=q.getBoundingClientRect(),B=H.left,ie=H.width,Z=H.height,se=(Y?U(q):I(q)).top,ae={top:"".concat(Z+se+10,"px"),left:"",transform:"none"};N===Yo.left&&(ae.left="".concat(B,"px")),N===Yo.right&&(ae.left="".concat(B+ie,"px"),ae.transform="translateX(-100%)"),N===Yo.center&&(ae.left="".concat(B+ie/2,"px"),ae.transform="translateX(-50%)"),g.value=ae,W&&ye&&z()}},z=function(){var W=pn(pe);if(W&&ye){var q=W.getBoundingClientRect(),H=q.height,B=q.top,ie=(Y?U(W):I(W)).top,Z=window.innerHeight-B-H,se=pn(Ne);if(se){var ae=se.getBoundingClientRect().height,Re=ae+H;Re>B&&Re>Z?B<Z&&(P(!1),_.value=!1):Re>Z?(g.value.top="".concat(ie-ae-10,"px"),_.value=!0):(P(!1),_.value=!1)}}ve("recalculatePosition")};return{openOnTop:_,menuPosition:g,setMenuPosition:P,recalculatePosition:z}}(i.position,i.altPosition,i.autoPosition,u,l,r),p=m.openOnTop,E=m.menuPosition,d=m.setMenuPosition,y=m.recalculatePosition,w=AP(i.format,i.timePicker,i.monthPicker,i.range,i.partialRange,i.is24,i.enableTimePicker,i.enableSeconds,c,i.multiDates,i.utc,i.textInputOptions,r),b=w.internalModelValue,C=w.inputValue,V=w.parseExternalModelValue,S=w.emitModelValue,x=w.checkBeforeEmit,T=K(function(){return{dp__main:!0,dp__theme_dark:i.dark,dp__theme_light:!i.dark,dp__flex_display:i.inline,dp__flex_display_with_input:i.inlineWithInput}}),A=K(function(){return Jw(i.format)?i.format:Kw(null,i.is24,i.enableSeconds,i.monthPicker,i.timePicker,i.enableTimePicker)}),L=K(function(){return i.previewFormat?i.previewFormat:Jw(A.value)?A.value:i.format}),O=K(function(){return typeof i.transitions=="boolean"?!!i.transitions&&Xw({}):Xw(i.transitions)});ir("transitions",O);var F=K(function(){return i.dark?"dp__theme_dark":"dp__theme_light"}),J=K(function(){return Object.assign({enterSubmit:!0,tabSubmit:!0,openMenu:!0,rangeSeparator:" - "},i.textInputOptions)}),ke=K(function(){return N=i.filters,Object.assign({months:[],years:[],times:{hours:[],minutes:[],seconds:[]}},N);var N}),We=K(function(){var N=function(Y){var ye={hours:_n(new Date),minutes:bn(new Date),seconds:xr(new Date)};return Object.assign(ye,Y)};return i.range?i.startTime&&Array.isArray(i.startTime)?[N(i.startTime[0]),N(i.startTime[1])]:null:i.startTime&&!Array.isArray(i.startTime)?N(i.startTime):null}),Ie=K(function(){return i.multiCalendars===null?0:typeof i.multiCalendars=="boolean"?i.multiCalendars?2:0:+i.multiCalendars>=2?+i.multiCalendars:2}),v=function N(){o.value&&(i.closeOnScroll?yt():i.autoPosition?d():window.removeEventListener("scroll",N))},D=function(){o.value&&d()},G=function(){i.disabled||i.readonly||(d(),o.value=!o.value,o.value||tt(),o.value&&(r("open"),r("focus")),V(i.modelValue))},Se=function(){C.value="",tt(),r("update:modelValue",null),r("cleared"),yt()},Ge=function(){x()&&(S(),yt())},ot=function(){var N=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(i.autoApply){var Y=!i.enableTimePicker||Qf(b.value,i.maxTime,i.minTime);Y&&(S(),i.closeOnAutoApply&&!N&&yt())}},tt=function(){b.value=null},yt=function(){i.inline||(o.value&&(o.value=!1,r("closed"),r("blur")),tt(),l.value&&l.value.unFocus())},R=function(N,Y){N?(b.value=N,Y&&(Ge(),r("textSubmit"))):b.value=null},ne=function(){i.autoApply&&Qf(b.value,i.maxTime,i.minTime)&&S()};return function(N,Y,ye){var Ne=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},pe=Ne.window,ve=pe===void 0?DP:pe,g=Ne.event,_=g===void 0?"pointerdown":g;if(ve){var I=function(U){var P=pn(N),z=pn(Y);P&&z&&(P===U.target||U.composedPath().includes(P)||U.composedPath().includes(z)||ye(U))};OP(ve,_,I,{passive:!0})}}(u,l,yt),n({closeMenu:yt,selectDate:Ge,clearValue:Se,openMenu:G,onScroll:v}),function(N,Y){return M(),Q("div",{class:Fe(k(T))},[Ze(PN,cn({ref_key:"inputRef",ref:l},{placeholder:t.placeholder,hideInputIcon:t.hideInputIcon,readonly:t.readonly,disabled:t.disabled,inputClassName:t.inputClassName,clearable:t.clearable,state:t.state,inline:t.inline,inlineWithInput:t.inlineWithInput,textInput:t.textInput,textInputOptions:k(J),range:t.range,isMenuOpen:o.value,pattern:k(A),autoApply:t.autoApply,uid:t.uid,openMenuOnFocus:t.openMenuOnFocus,required:t.required,name:t.name,autocomplete:t.autocomplete},{"input-value":k(C),"onUpdate:input-value":Y[0]||(Y[0]=function(ye){return St(C)?C.value=ye:null}),onClear:Se,onOpen:G,onSetInputDate:R,onSetEmptyDate:k(S),onSelectDate:Ge,onClose:yt}),Yt({_:2},[Ct(k(f),function(ye,Ne){return{name:ye,fn:qe(function(pe){return[fe(N.$slots,ye,Mr(sr(pe)))]})}})]),1040,["input-value","onSetEmptyDate"]),o.value?(M(),Pe(M1,{key:0,to:t.teleport,disabled:t.inline},[o.value?(M(),Pe(CP,cn({key:0,ref_key:"dpMenuRef",ref:u,class:k(F),style:k(E)},{weekNumbers:t.weekNumbers,weekStart:t.weekStart,disableMonthYearSelect:t.disableMonthYearSelect,menuClassName:t.menuClassName,calendarClassName:t.calendarClassName,yearRange:t.yearRange,range:t.range,multiCalendars:k(Ie),multiCalendarsSolo:t.multiCalendarsSolo,calendarCellClassName:t.calendarCellClassName,enableTimePicker:t.enableTimePicker,is24:t.is24,hoursIncrement:t.hoursIncrement,minutesIncrement:t.minutesIncrement,hoursGridIncrement:t.hoursGridIncrement,minutesGridIncrement:t.minutesGridIncrement,minDate:t.minDate,maxDate:t.maxDate,autoApply:t.autoApply,selectText:t.selectText,cancelText:t.cancelText,previewFormat:k(L),locale:t.locale,weekNumName:t.weekNumName,disabledDates:t.disabledDates,filters:k(ke),minTime:t.minTime,maxTime:t.maxTime,inline:t.inline,openOnTop:k(p),monthPicker:t.monthPicker,timePicker:t.timePicker,monthNameFormat:t.monthNameFormat,startDate:t.startDate,startTime:k(We),monthYearComponent:t.monthYearComponent,timePickerComponent:t.timePickerComponent,actionRowComponent:t.actionRowComponent,customProps:t.customProps,hideOffsetDates:t.hideOffsetDates,autoRange:t.autoRange,noToday:t.noToday,noHoursOverlay:t.noHoursOverlay,noMinutesOverlay:t.noMinutesOverlay,disabledWeekDays:t.disabledWeekDays,allowedDates:t.allowedDates,showNowButton:t.showNowButton,nowButtonLabel:t.nowButtonLabel,monthChangeOnScroll:t.monthChangeOnScroll,markers:t.markers,uid:t.uid,modeHeight:t.modeHeight,enableSeconds:t.enableSeconds,secondsIncrement:t.secondsIncrement,secondsGridIncrement:t.secondsGridIncrement,noSecondsOverlay:t.noSecondsOverlay,escClose:t.escClose,spaceConfirm:t.spaceConfirm,monthChangeOnArrows:t.monthChangeOnArrows,textInput:t.textInput,disabled:t.disabled,readonly:t.readonly,multiDates:t.multiDates,presetRanges:t.presetRanges,flow:t.flow,preventMinMaxNavigation:t.preventMinMaxNavigation,minRange:t.minRange,maxRange:t.maxRange,fixedStart:t.fixedStart,fixedEnd:t.fixedEnd},{internalModelValue:k(b),"onUpdate:internalModelValue":Y[1]||(Y[1]=function(ye){return St(b)?b.value=ye:null}),onClosePicker:yt,onSelectDate:Ge,onDpOpen:k(y),onAutoApply:ot,onTimeUpdate:ne,onFlowStep:Y[2]||(Y[2]=function(ye){return N.$emit("flow-step",ye)})}),Yt({_:2},[Ct(k(h),function(ye,Ne){return{name:ye,fn:qe(function(pe){return[fe(N.$slots,ye,Mr(sr(RP({},pe))))]})}})]),1040,["class","style","internalModelValue","onDpOpen"])):$("",!0)],8,["to","disabled"])):$("",!0)],2)}}}),CM=function(){var t=xP;return t.install=function(e){e.component("Vue3DatePicker",t)},t}();export{ir as $,pT as A,ZP as B,WP as C,lM as D,gM as E,xe as F,zP as G,GP as H,yM as I,QP as J,hM as K,JP as L,YP as M,ZA as N,XP as O,KP as P,fM as Q,HP as R,jP as S,Dn as T,cM as U,qP as V,CM as W,LP as X,$t as Y,k as Z,UP as _,uM as a,PP as a0,$P as a1,pM as a2,mM as a3,wM as a4,Di as a5,vM as a6,nc as a7,rM as a8,yr as a9,aM as aa,Ri as ab,Ps as ac,M1 as ad,f1 as ae,xs as af,vn as ag,NP as ah,Fe as ai,VP as aj,nM as ak,iM as al,tM as am,BP as an,FP as ao,TM as ap,_M as aq,bM as ar,jn as b,pa as c,K as d,Gt as e,MP as f,EM as g,M as h,eM as i,Q as j,ue as k,Ze as l,dM as m,Ct as n,sM as o,Pe as p,yn as q,Te as r,oM as s,vt as t,SM as u,$ as v,qe as w,jl as x,IM as y,kM as z};
