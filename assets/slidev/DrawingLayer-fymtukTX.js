import{d as u,t as c,a8 as m,E as d,G as p,o as _,b as f,i as g}from"../modules/vue-YaVktaKr.js";import{u as v}from"./context-gA2AcAw9.js";import{u as w}from"./DrawingPreview-CO81vS7Q.js";import{b}from"../index-DFnjCIaU.js";import"../modules/shiki-0PMYCnkF.js";const E=u({__name:"DrawingLayer",setup(i,{expose:r}){r();const{drauu:e,drawingEnabled:n,loadCanvas:t}=w(),a=v().$scale,o=c();m(()=>{e.mount(o.value,o.value.parentElement),d(a,l=>e.options.coordinateScale=1/l,{immediate:!0}),t()}),p(()=>{e.unmount()});const s={drauu:e,drawingEnabled:n,loadCanvas:t,scale:a,svg:o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function h(i,r,e,n,t,a){return _(),f("svg",{ref:"svg",class:g(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const k=b(E,[["render",h],["__file","/home/runner/work/2024-mutation-testing/2024-mutation-testing/presentation/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{k as default};