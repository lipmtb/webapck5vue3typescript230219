"use strict";(self.webpackChunkvue3webpack5_2022100601=self.webpackChunkvue3webpack5_2022100601||[]).push([[530],{3387:function(e,t,o){var n=o(4783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},1381:function(e,t,o){var n=o(4783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},7530:function(e,t,o){o.r(t),o.d(t,{default:function(){return G}});var n=o(6252);const r={class:"helloAlgo"},l=(0,n._)("h1",null,"helloAlgo",-1),i={class:"centerTree"};var s=o(2262);const c=(e,t)=>{const o=e.length;t>=0&&t<o&&(console.log("递归遍历数组",e[t]),c(e,t+1))},u=(e,t,o)=>{const n=e[o];e[o]=e[t],e[t]=n},a=(e,t,o,n=!1)=>{const r=((e,t,o,n)=>{let r=t,l=o;for(;r<l;)if(n){for(;r<l&&e[l]<=e[t];)l--;for(;r<l&&e[r]>=e[t];)r++;u(e,r,l)}else{for(;r<l&&e[l]>=e[t];)l--;for(;r<l&&e[r]<=e[t];)r++;u(e,r,l)}return u(e,r,t),r})(e,t,o,n);t<=r-1&&a(e,t,r-1,n),r+1<=o&&a(e,r+1,o,n)},h=e=>{let t=0;const o=e.length;for(let n=0;n<o;n++)if(null!==e[n]){t=n;break}for(let n=0;n<o;n++){const o=e[n],r=e[t];null!==o&&null!==r&&o<r&&(t=n)}let n=e[t];return e[t]=null,n};class d{data;next;constructor(e,t){this.data=e,this.next=t??null}}const g=e=>{e&&(console.log("遍历",e.data),e.next&&g(e.next))},f=e=>e?.next?f(e.next):e,p=(e,t)=>{e&&(p(e.next,t),console.log("root item:",e),e.next?e.next.next=e:t?.push?.(e))};class k{data;left;right;constructor(e){this.data=e,this.left=null,this.right=null}}const C=(e,t)=>{e&&(t||(t=[]),t.push(e.data),C(e.left,t),C(e.right,t))},b=(e,t)=>{e&&(t||(t=[]),b(e.left,t),t.push(e.data),b(e.right,t))},w=(e,t)=>{e&&(t||(t=[]),w(e.left,t),w(e.right,t),t.push(e.data))},v=(e,t)=>{if(!e||!t)return;const o=e[0],n=new k(o),r=t.indexOf(o);let l=t.slice(0,r),i=e.slice(1).split(""),s=0,c=!1;i.forEach((e=>{c||(l.includes(e)&&l.includes(i[s+1])?s++:c=!0)}));let u=i.slice(0,s+1).join("");u&&l&&(n.left=v(u,l));let a=t.slice(r+1),h="",d=a.length;for(let e=0;e<i.length-d+1;e++){if(h)return;let t=i.slice(e,e+d);t.every((e=>a.includes(e)))&&(h=t.join(""))}return h&&a&&(n.right=v(h,a)),n},A=(e,t)=>{if(!e&&!t)return!0;if(e===t)return!0;if(!e&&t||!t&&e)return!1;const o=A(e?.left,t?.left),n=A(e?.right,t?.right);return o&&n&&e?.data===t?.data};var _=o(3577);const T={class:"treeShowStage"},R={class:"tree-data"},S={class:"child-list"};var D=(0,n.aZ)({props:["treeRoot","deepCount"],name:"TreeShow",setup(){return console.log("this.props",this),{}}}),m=(o(1381),o(3744)),x=(0,m.Z)(D,[["render",function(e,t,o,r,l,i){const s=(0,n.up)("TreeShow");return(0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",R,(0,_.zw)(e.treeRoot.data),1),(0,n._)("div",S,[e.treeRoot.left?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,_.C_)(["child-item child-left",[`child-left-${e.deepCount}`]])},[(0,n.Wm)(s,{treeRoot:e.treeRoot.left,deepCount:e.deepCount+1},null,8,["treeRoot","deepCount"])],2)):(0,n.kq)("",!0),e.treeRoot.right?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,_.C_)(["child-item child-right",[`child-right-${e.deepCount}`]])},[(0,n.Wm)(s,{treeRoot:e.treeRoot.right,deepCount:e.deepCount+1},null,8,["treeRoot","deepCount"])],2)):(0,n.kq)("",!0)])])}]]),F=(0,n.aZ)({setup(){const e=new d("1"),t=new d("a"),o=new d("b"),n=new d("c");e.next=t,t.next=o,o.next=n;const r=new k("A"),l=new k("B"),i=new k("C"),_=new k("D"),T=new k("E"),R=new k("F"),S=new k("G"),D=new k("H"),m=new k("I"),x=new k("J"),F=(0,s.iH)(r);r.left=l,r.right=i,l.left=_,l.right=T,i.left=R,i.right=S,R.left=D,D.left=m,D.right=x;const G=()=>{const e=[],t=v("ACFGBDE","FCGADBE");return w(t,e),console.log(e.join("")),F.value=t,t},j=e=>{const t=[];let o=[];return e.split("").forEach(((e,n)=>{o.push(e),"("===o[0]?")"===e&&o.filter((e=>"("===e)).length===o.filter((e=>")"===e)).length&&(t.push([...o]),o=[]):(t.push([e]),o=[])})),t},y=e=>{if(e.indexOf("(")>-1){if("("===e[0]&&")"===e[e.length-1]&&e.length>2){const t=e.slice(1,e.length-1);return t.indexOf("(")>-1?[...[...j(t)].reverse()].map((e=>y(e.join("")))).join(""):t.split("").reverse().join("")}return[...j(e)].map((e=>y(e.join("")))).join("")}return e},E=e=>{if(!e?.length)return;let t=[];for(let o=0;o<e.length;o++)console.log(e[o]),e[o].left&&(t=[...t,e[o].left]),e[o].right&&(t=[...t,e[o].right]);t.length&&E(t)};return{plainSortA:e=>{(e=>{const t=new Array(e.length);for(let o=0;o<e.length;o++)t[o]=h(e);console.log("result",t)})(e)},quickSort:e=>{a(e,0,e.length-1),console.log("result",e)},arr1:[5,6,8,7,4,1,3,2,9],arr2:[9,8,7,6,5,4,3,2,1],reverseQuickSort:e=>{a(e,0,e.length-1,!0),console.log("result",e)},bubbleSortArray:e=>{((e,t=!1)=>{for(let o=e.length-1;o>=1;o--)for(let n=0;n<o;n++)t?e[n]<e[n+1]&&u(e,n,n+1):e[n]>e[n+1]&&u(e,n,n+1)})(e),console.log("result",e)},bubbleSortArrayA:e=>{((e,t=!1)=>{const o=e.length;for(let n=0;n<o-1;n++)for(let r=o-1;r>n;r--)t?e[r]>e[r-1]&&u(e,r,r-1):e[r]<e[r-1]&&u(e,r,r-1)})(e,!0),console.log("resultA",e)},linkNodeTackDeep:()=>{g(e)},recurGetArrTest:e=>{c(e,0)},reverseLinkAndGetRoot:()=>{g(e);const t=[];p(e,t),e.next=null,console.log("result",e,t),t&&g(t?.[0])},getLastNodeDeep:()=>{f(e)},firstMidTrace:()=>{const e=[];C(r,e),console.log("先根：",e)},leftMidTrace:()=>{const e=[];b(r,e),console.log("中根：",e)},afterRootTrace:()=>{const e=[];w(r,e),console.log("后根：",e)},getFirstByMidAndAfterTreeTest:G,treeDataRef:F,stringOnly:()=>{const e=[];return"aaabbbccddddddddeeefghiiiij".split("").forEach((t=>{e[0]&&e[e.length-1]===t||e.push(t)})),console.log("result",e.join("")),e.join("")},stringReverseWithGap:()=>{console.log(y("1(32)4(kj(hgfe(dcb)a)i)"))},largetFirstTrace:()=>{const e=G();E([e])},comparetTwoTree:()=>{const e=v("ACFGBDE","FCGADBE"),t=v("ACFGBDE","FCGADBE"),o=v("ACFBDE","FCADBE"),n=A(e,t),r=A(e,o);console.log("isSameisSameisSameisSame",n,r)}}},method(){},components:{TreeShow:x}});o(3387);var G=(0,m.Z)(F,[["render",function(e,t,o,s,c,u){const a=(0,n.up)("TreeShow");return(0,n.wg)(),(0,n.iD)("div",r,[l,(0,n._)("div",null,[(0,n._)("button",{onClick:t[0]||(t[0]=t=>e.plainSortA(e.arr1))},"最小值排序"),(0,n._)("button",{onClick:t[1]||(t[1]=t=>e.quickSort(e.arr1))},"快速排序1"),(0,n._)("button",{onClick:t[2]||(t[2]=t=>e.quickSort(e.arr2))},"快速排序2"),(0,n._)("button",{onClick:t[3]||(t[3]=t=>e.reverseQuickSort(e.arr1))},"快速排序2"),(0,n._)("button",{onClick:t[4]||(t[4]=t=>e.bubbleSortArray(e.arr1))},"冒泡排序"),(0,n._)("button",{onClick:t[5]||(t[5]=t=>e.bubbleSortArrayA(e.arr1))},"冒泡排序a"),(0,n._)("button",{onClick:t[6]||(t[6]=t=>e.recurGetArrTest(e.arr1))},"递归遍历数组"),(0,n._)("button",{onClick:t[7]||(t[7]=t=>e.linkNodeTackDeep())},"递归遍历链表"),(0,n._)("button",{onClick:t[8]||(t[8]=t=>e.getLastNodeDeep())},"递归遍历链表最后一个"),(0,n._)("button",{onClick:t[9]||(t[9]=t=>e.reverseLinkAndGetRoot())},"链表逆置"),(0,n._)("button",{onClick:t[10]||(t[10]=t=>e.firstMidTrace())},"先根遍历"),(0,n._)("button",{onClick:t[11]||(t[11]=t=>e.leftMidTrace())},"中根遍历"),(0,n._)("button",{onClick:t[12]||(t[12]=t=>e.afterRootTrace())},"后根遍历"),(0,n._)("button",{onClick:t[13]||(t[13]=t=>e.afterRootTrace())},"后根遍历"),(0,n._)("button",{onClick:t[14]||(t[14]=t=>e.getFirstByMidAndAfterTreeTest())}," 中后输出先序，并构建输出二叉树 "),(0,n._)("button",{onClick:t[15]||(t[15]=t=>e.largetFirstTrace())},"广度优先遍历"),(0,n._)("button",{onClick:t[16]||(t[16]=t=>e.comparetTwoTree())},"二叉树比较")]),(0,n._)("div",null,[(0,n._)("button",{onClick:t[17]||(t[17]=t=>e.stringOnly())},"字符串去重"),(0,n._)("button",{onClick:t[18]||(t[18]=t=>e.stringReverseWithGap())},"字符串括号反转")]),(0,n._)("div",i,[(0,n.Wm)(a,{treeRoot:e.treeDataRef,deepCount:0},null,8,["treeRoot"])])])}]])}}]);
//# sourceMappingURL=530.vuerootbundle.js.map