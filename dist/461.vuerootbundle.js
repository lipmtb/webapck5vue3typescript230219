"use strict";(self.webpackChunkvue3webpack5_2022100601=self.webpackChunkvue3webpack5_2022100601||[]).push([[461],{9828:function(e,t,n){var i=n(4783)(e.id,{locals:!1});e.hot.dispose(i),e.hot.accept(void 0,i)},2406:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(6252);const o={class:"fire-wrapper"},r={width:"0",height:"0",class:"fire-background",ref:"fireBackPlace"};var c=n(2262),a=n(4468);class u{fireConfig;ctx;constructor(e){this.ctx=e.getContext("2d");const t=e.width||100,n=e.height||100;this.fireConfig={fireX:-60+Math.floor(61*Math.random())+.5*t,fireY:0,fireBackground:{width:t,height:n}}}boomFire(){}fillOneStep(e,t){const n=this.ctx;n?.save(),n?.translate(e,t),n?.restore()}randomStart(){this.ctx&&this.fillOneStep(this.fireConfig.fireX,this.fireConfig.fireY)}}var s=(0,i.aZ)({setup(){const e=(0,c.iH)(null),t=t=>{"Space"===t.code&&(console.log("发出一个烟花"),(()=>{const t=e?.value;t&&new u(t).randomStart()})())};return(0,i.bv)((()=>{if(e?.value){const t=e?.value;t.width=document.body.clientWidth+document.documentElement.clientWidth,t.height=document.defaultView?.innerHeight?document.defaultView?.innerHeight:0}document.addEventListener("keyup",t)})),(0,i.Ah)((()=>{document.removeEventListener("keyup",t)})),{fireBackPlace:e}},components:{PopupLayout:a.Z}});n(9828);var d=(0,n(3744).Z)(s,[["render",function(e,t,n,c,a,u){const s=(0,i.up)("PopupLayout");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(s,null,{children:(0,i.w5)((()=>[(0,i._)("canvas",r,null,512)])),_:1})])}]])}}]);
//# sourceMappingURL=461.vuerootbundle.js.map