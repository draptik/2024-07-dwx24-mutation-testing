import{a7 as x,b as C,am as $,an as V}from"../index-DFnjCIaU.js";import{d as k,a8 as w,au as z,F as I,o as B,c as G,at as M,v as o,aw as m,ax as D,l as F,aj as j}from"../modules/vue-YaVktaKr.js";import{u as E}from"./context-gA2AcAw9.js";const L=k({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(d,{expose:a}){a();const i=d,{$clicksContext:l}=E(),c=x();let n=+i.size;Number.isNaN(n)&&(console.warn(`[slidev] Invalid size for VClickGap: ${i.size}`),n=1),w(()=>{const u=l.currentOffset+n-1;l.register(c,{max:u,delta:n})}),z(()=>{l.unregister(c)});const t={props:i,clicks:l,id:c,get delta(){return n},set delta(u){n=u},Fragment:I};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function O(d,a,i,l,c,n){return B(),G(l.Fragment)}const T=C(L,[["render",O],["__file","/home/runner/work/2024-mutation-testing/2024-mutation-testing/presentation/node_modules/@slidev/client/builtin/VClickGap.vue"]]),A=["ul","ol"],q=k({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var N,b;const d=+this.every,a=$(this.at),i=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const l=M("click"),c=(s,e)=>j(s,[[l,e,"",{hide:this.hide,fade:this.fade}]]),n=s=>s.flatMap(e=>m(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?n(e.children):[e]);let t=(b=(N=this.$slots).default)==null?void 0:b.call(N);if(!t)return;t=n(V(t));const u=(s,e=1)=>n(s).map(r=>{if(!m(r))return r;if(A.includes(r.type)&&Array.isArray(r.children)){const p=f(r.children,e+1);return o(r,{},p)}return o(r)});let g=1,h=0;const f=(s,e=1)=>n(s).map(r=>{if(!m(r)||r.type===D)return r;const p=+a+Math.ceil(g++/d)-1;let v;e<+this.depth&&Array.isArray(r.children)?v=o(r,{},u(r.children,e)):v=o(r);const _=p-h;return h=p,c(v,i?_>=0?`+${_}`:`${_}`:p)}),y=()=>F(T,{size:+a+Math.ceil((g-1)/d)-1-h});if(this.handleSpecialElements){if(t.length===1&&A.includes(t[0].type)&&Array.isArray(t[0].children))return o(t[0],{},[...f(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const s=t[0];if(Array.isArray(s.children))return o(s,{},s.children.map(e=>m(e)?e.type==="tbody"&&Array.isArray(e.children)?o(e,{},[...f(e.children),y()]):o(e):e))}}return[...f(t),y()]}});export{q as _};