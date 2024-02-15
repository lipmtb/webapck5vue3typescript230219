"use strict";(self.webpackChunkvue3webpack5_2022100601=self.webpackChunkvue3webpack5_2022100601||[]).push([[629,364],{8953:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},9166:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},9639:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},8080:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},3233:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},9513:function(e,t,o){var a=o(4783)(e.id,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},7629:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var a=o(6252);const n={class:"chat-learn-layout"};var s=o(2262),i=o(4949),l=o(1223),r=o(4468);const c={class:"login-header"},u={key:0,class:"login-btn"};var d=(0,a.aZ)({props:{userName:{type:String,require:!1}},setup(e,t){return{userName:(0,s.Vh)(e,"userName")}},methods:{openlogin(){this.$emit("loginOpen")}}}),p=(o(9639),o(3744)),m=(0,p.Z)(d,[["render",function(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("div",c,[e.userName?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("button",{onClick:t[0]||(t[0]=(...t)=>e.openlogin&&e.openlogin(...t)),class:"login-regist-btn"},"登录")]))])}],["__scopeId","data-v-35a30560"]]),v=o(3577),g=o(9963);const h={class:"chat-wrapper"},f={key:0,class:"page-welcome"},b={class:"default-page",ref:"defaultPageRef"},w={ref:"firstEle",style:{"{opacity":"0,height:0}"}},y={class:"chat-send-footer",ref:"footerSendRef"},C=["disabled"],I={class:"voiceList"},_=["textContent"],D=(0,a.Uk)(),R=["src"],k={class:"confirm-name"};var L=o(9286);const V={key:0,class:"chat-owner"},A={class:"send-time"},N={class:"from-user"},S={key:1,class:"chat-from"},H={class:"from-user"},Z={class:"send-time"},M={key:2,class:"content-owner"},K={class:"content-desc"},T={class:"botContentList"};var x=(0,a.aZ)({name:"chatDetail",props:{chatItem:{type:Object,default:{}},userId:String},setup(e){const t=(0,s.Vh)(e,"chatItem"),o=(0,s.Vh)(e,"userId"),n=(0,a.Fl)((()=>{if("assistant"===t?.value?.userId){const e=t?.value?.content;return e.split(/```|。|：/).map((e=>({splitContent:e})))}return[]}));return{chatItemData:t,userIdRef:o,botContentArray:n,copyTextToSnipase:e=>{console.log("event",e);const t=e?.target;if(!t)return;const o=(e=>{if("ul"===e?.nodeName)return e;let t=e;for(;t?.parentElement&&(t=t?.parentElement,console.log("resultElement?.nodeName ",t?.nodeName),"UL"!==t?.nodeName););return t})(t);(e=>{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(o.innerText),alert("复制成功")}}}});o(9166);var U=(0,p.Z)(x,[["render",function(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,v.C_)(["chat-detail-item",{assistant:"assistant"===e.chatItemData.userId}])},[e.userIdRef===e.chatItemData.userId?((0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("span",A,(0,v.zw)(e.chatItemData.time),1),(0,a._)("span",N,(0,v.zw)(e.chatItemData.userName),1)])):((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("span",H,(0,v.zw)(e.chatItemData.userName),1),(0,a._)("span",Z,(0,v.zw)(e.chatItemData.time),1)])),e.userIdRef===e.chatItemData.userId?((0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("span",K,(0,v.zw)(e.chatItemData.content),1)])):((0,a.wg)(),(0,a.iD)("div",{key:3,class:"content-other",onClick:t[0]||(t[0]=(...t)=>e.copyTextToSnipase&&e.copyTextToSnipase(...t))},[(0,a._)("ul",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.botContentArray,(e=>((0,a.wg)(),(0,a.iD)("li",null,[(0,a._)("span",null,(0,v.zw)(e.splitContent),1)])))),256))])]))],2)}],["__scopeId","data-v-6d5a2999"]]),j=o(6184),O=()=>{const e=(0,l.oR)(),t=(0,s.iH)(),o=(0,s.qj)({loading:!1,chatList:[]}),n=(0,a.Fl)((()=>e.getters["userArea/getUserId"])),i=(0,a.Fl)((()=>e.getters["userArea/getUserName"]));return{...o||{},socketRef:t,onSubmitChat:async(e,t)=>{o.loading=!0,o.chatList.push({userId:n?.value,userName:i?.value,time:(new Date).toLocaleTimeString(),content:e});try{const s=(await(a={userId:n?.value,content:e,apiKey:t},j.Z.post("/chatai/gptai",{...a})))?.choices?.[0]?.message?.content;o.chatList.push({userId:"assistant",userName:"bot",time:(new Date).toLocaleTimeString(),content:s??""})}catch(e){console.error("发送失败",e)}finally{o.loading=!1}var a},userId:n}},q=(0,a.aZ)({name:"ChatMain",props:{userName:String},setup(e){const t=(0,l.oR)(),{userId:o,loading:n,chatList:i,onSubmitChat:r}=O(),{openApiModal:c,closeApiModal:u,apiKeyVisible:d,apiKey:p,onApiConfirm:m,onApiReset:v}=(()=>{const e=(0,l.oR)(),t=(0,s.iH)(),o=(0,s.iH)(!1);return{apiKey:t,setApiKey:e=>{t.value=e},apiKeyVisible:o,openApiModal:()=>{o.value=!0},closeApiModal:()=>{o.value=!1},onApiReset:()=>{t.value=""},onApiConfirm:()=>{t?.value&&(e.dispatch("apiKeyArea/saveApiKeyAction",{key:t.value}),o.value=!1)}}})(),g=(0,s.iH)(),h=(0,s.iH)(),f=(0,s.iH)(),b=(0,s.iH)(),{calcScrollHeight:w}=((e,t)=>{const o=(0,s.iH)(0);return(0,a.m0)((()=>{e?.value||(o.value=0);const a=e?.value?.getBoundingClientRect?.(),n=t?.value?.getBoundingClientRect?.();o.value=Number(a?.top||0)-Number(n?.top||0)})),{calcScrollHeight:o}})(g,h),y=(0,a.Fl)((()=>t.getters["apiKeyArea/getApiKey"])),C=(0,s.iH)(),I=(0,a.Fl)((()=>!C?.value||n||!o?.value)),_=(0,s.Vh)(e,"userName");(0,a.m0)((()=>{const e=i.find((e=>"assistant"===e?.userId));(0,a.Y3)((()=>{const t=f?.value,o=b?.value;if(!t||!e)return;const a=t.querySelectorAll(".assistant"),n=a?.[a.length-1];if(!n||!o)return;const s=n.getBoundingClientRect?.()?.top-o?.getBoundingClientRect?.()?.top;t.scrollTo({top:s})}))}));const{startVoice:D,endVoice:R,voiceList:k}=(()=>{const e=(0,s.qj)([]),t=(0,s.iH)(null);return{startVoice:()=>{},startVoiceOnlyHttp:()=>{window.navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((o=>{t.value=new MediaRecorder(o),t.value.start(),console.log("录音开始",t.value),t.value.ondataavailable=t=>{var o=t.data,a=URL.createObjectURL(o);console.log("录音完成后的回调blob",o,a),e.push({time:(new Date).toLocaleTimeString(),voiceUrl:a,originFile:o})}})).catch((function(e){console.log("访问麦克风失败",e)}))},endVoice:()=>{console.log("录音结束",t.value)},voiceList:e,removeVoice:t=>{e.splice(t,0)}}})();return{userName:_,userInText:C,handleSubmit:async()=>{o?.value?n?alert("请稍等"):C?.value?y?.value?(await r(C?.value,y?.value),C.value=""):c():alert("请先输入问题"):alert("请先登录")},btnDisabled:I,chatList:i,userId:o,apiKey:p,apiKeyVisible:d,onApiConfirm:m,closeApiModal:u,onApiReset:v,footerSendRef:g,defaultPageRef:h,calcScrollHeight:w,scrollLine:f,firstEle:b,startVoice:D,endVoice:R,voiceList:k}},components:{ChatDetail:U,Modal:L.Z}});o(8953);var z=(0,p.Z)(q,[["render",function(e,t,o,n,s,i){const l=(0,a.up)("ChatDetail"),r=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",h,[e.userName?((0,a.wg)(),(0,a.iD)("p",f,"你好！"+(0,v.zw)(e.userName),1)):(0,a.kq)("",!0),(0,a._)("div",b,[(0,a._)("div",{ref:"scrollLine",class:"chat-scroll-list",style:(0,v.j5)({height:e.calcScrollHeight+"px"})},[(0,a._)("div",w,null,512),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.chatList,(t=>((0,a.wg)(),(0,a.j4)(l,{"chat-item":t,"user-id":e.userId,key:t.time},null,8,["chat-item","user-id"])))),128))],4),(0,a._)("div",y,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.userInText=t),class:"input-area",placeholder:"请输入您的问题",cols:"2",onSubmit:t[1]||(t[1]=(...t)=>e.handleSubmit&&e.handleSubmit(...t))},null,544),[[g.nr,e.userInText]]),(0,a._)("button",{class:(0,v.C_)(["chat-submit-btn",e.btnDisabled?"disalbed-btn":""]),onClick:t[2]||(t[2]=(...t)=>e.handleSubmit&&e.handleSubmit(...t)),disabled:e.btnDisabled},"发送",10,C),(0,a._)("button",{class:"chat-voice-btn",onTouchstart:t[3]||(t[3]=(0,g.iM)(((...t)=>e.startVoice&&e.startVoice(...t)),["prevent"])),onTouchend:t[4]||(t[4]=(0,g.iM)(((...t)=>e.endVoice&&e.endVoice(...t)),["prevent"]))},"语音输入",32),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.voiceList,((e,t)=>((0,a.wg)(),(0,a.iD)("ul",I,[(0,a._)("li",null,[(0,a._)("span",{textContent:(0,v.zw)(t)},null,8,_),D,(0,a._)("audio",{src:e.voiceUrl,controls:""},null,8,R)])])))),256))],512)],512),e.apiKeyVisible?((0,a.wg)(),(0,a.j4)(r,{key:1,"on-close":e.closeApiModal},{"modal-content":(0,a.w5)((()=>[(0,a._)("div",k,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"请输入apiKey","onUpdate:modelValue":t[5]||(t[5]=t=>e.apiKey=t)},null,512),[[g.nr,e.apiKey]])])])),"modal-bottom":(0,a.w5)((()=>[(0,a._)("button",{onClick:t[6]||(t[6]=(...t)=>e.onApiConfirm&&e.onApiConfirm(...t))},"确定"),(0,a._)("button",{onClick:t[7]||(t[7]=(...t)=>e.onApiReset&&e.onApiReset(...t))},"重置")])),_:1},8,["on-close"])):(0,a.kq)("",!0)])}],["__scopeId","data-v-47435b98"]]),F=o(2364),W=(0,a.aZ)({setup(){const e=(0,l.oR)(),t=(0,i.tv)(),o=(0,s.iH)(!1);return{userObj:(0,a.Fl)((()=>({userName:e.getters["userArea/getUserName"]}))),loginOpen:()=>{o.value=!0},loginVisible:o,onCloseLogin:()=>{o.value=!1},toDownloadPage:()=>{t.push("/chatLearn/downloadPage")}}},components:{PopupLayout:r.Z,LoginHeaderVue:m,ChatMain:z,Login:F.default}}),E=(0,p.Z)(W,[["render",function(e,t,o,s,i,l){const r=(0,a.up)("LoginHeaderVue"),c=(0,a.up)("ChatMain"),u=(0,a.up)("Login"),d=(0,a.up)("router-view"),p=(0,a.up)("PopupLayout");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(p,null,{children:(0,a.w5)((()=>[(0,a.Wm)(r,{"user-name":e.userObj?.userName,onLoginOpen:e.loginOpen},null,8,["user-name","onLoginOpen"]),(0,a.Wm)(c,{"user-name":e.userObj?.userName},null,8,["user-name"]),(0,a.Wm)(u,{visible:e.loginVisible,"on-close":e.onCloseLogin},null,8,["visible","on-close"]),(0,a.Wm)(d)])),_:1})])}]])},4468:function(e,t,o){o.d(t,{Z:function(){return i}});var a=o(6252);const n={class:"scroll-layout"};var s=(0,a.aZ)({setup(e,t){}});o(8080);var i=(0,o(3744).Z)(s,[["render",function(e,t,o,s,i,l){return(0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a._)("div",n,[(0,a.WI)(e.$slots,"children")])])}]])},9286:function(e,t,o){o.d(t,{Z:function(){return r}});var a=o(6252);const n={class:"modal-view-popup"},s={class:"pop-up-content"},i={class:"modal-bottom"};var l=(0,a.aZ)({props:["onClose"],setup(e,t){return{closeModal:()=>{e.onClose?.()}}}});o(3233);var r=(0,o(3744).Z)(l,[["render",function(e,t,o,l,r,c){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",{class:"modal-header",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))},"x"),(0,a.WI)(e.$slots,"modal-content",{},void 0,!0),(0,a._)("div",i,[(0,a.WI)(e.$slots,"modal-bottom",{},void 0,!0)])])])}],["__scopeId","data-v-3af3bdd6"]])},2364:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var a=o(6252),n=o(9963);const s={class:"login-view"},i={class:"confirm-form"};var l=o(6184),r=o(2557),c=o(2262),u=o(1223),d=o(9286),p=(0,a.aZ)({name:"login",props:{visible:{type:Boolean,required:!0,default:!1},onClose:Function},setup(e){const t=(0,c.Vh)(e,"visible"),o=(0,u.oR)(),a=(0,c.iH)(),n=(0,c.iH)(),s=()=>{e?.onClose?.()};return{modalVisible:t,onClose:s,nameRef:a,pswRef:n,onConfirm:async()=>{try{const e=await((e={username:"",userpassword:""})=>l.Z.post("/login",{...e}))({username:a.value,userpassword:n.value});if(console.log("loginRes",e),e.errCode)return(0,r.x)("用户名或密码错误",5e3);o.dispatch("userArea/saveUserAction",{userName:a.value,userId:e?.userInfo?.userId}),localStorage.setItem("userInfo",JSON.stringify({userName:a.value,userId:e?.userInfo?.userId,ticket:e?.jjccToken})),setTimeout((()=>{s()}),1e3)}catch(e){console.error("登录失败",e)}},reset:()=>{a.value="",n.value=""}}},components:{Modal:d.Z}});o(9513);var m=(0,o(3744).Z)(p,[["render",function(e,t,o,l,r,c){const u=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",s,[e.modalVisible?((0,a.wg)(),(0,a.j4)(u,{key:0,onClose:e.onClose},{"modal-content":(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"请输入姓名","onUpdate:modelValue":t[0]||(t[0]=t=>e.nameRef=t)},null,512),[[n.nr,e.nameRef]]),(0,a.wy)((0,a._)("input",{type:"password",placeholder:"请输入密码","onUpdate:modelValue":t[1]||(t[1]=t=>e.pswRef=t)},null,512),[[n.nr,e.pswRef]])])])),"modal-bottom":(0,a.w5)((()=>[(0,a._)("button",{onClick:t[2]||(t[2]=(...t)=>e.onConfirm&&e.onConfirm(...t))},"确定"),(0,a._)("button",{onClick:t[3]||(t[3]=(...t)=>e.reset&&e.reset(...t))},"重置")])),_:1},8,["onClose"])):(0,a.kq)("",!0)])}],["__scopeId","data-v-8c361692"]])}}]);
//# sourceMappingURL=629.vuerootbundle.js.map