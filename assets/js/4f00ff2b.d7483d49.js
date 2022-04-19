"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[270],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(2182),r=n(9028),l=(n(9496),n(9613)),i=["components"],o={sidebar_position:0},c="\u54cd\u5e94\u5f0f\u66f4\u65b0",p={unversionedId:"base/reactive",id:"base/reactive",title:"\u54cd\u5e94\u5f0f\u66f4\u65b0",description:"\u54cd\u5e94\u5f0f\u66f4\u65b0\u662f\u6307\u5f53\u67d0\u4e9b\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4e0e\u4e4b\u76f8\u5173\u7684\u89c6\u56fe\u4f1a\u968f\u4e4b\u66f4\u65b0\uff0c\u800c\u4e0d\u9700\u8981\u7528\u6237\u624b\u52a8\u64cd\u4f5c DOM\u3002\u54cd\u5e94\u5f0f\u66f4\u65b0\u662f\u589e\u5f3a Web Components \u7684\u91cd\u8981\u65b9\u5411\u4e4b\u4e00\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u4f7f\u7528 Web Components \u5f00\u53d1\u7ec4\u4ef6\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002",source:"@site/docs/base/reactive.md",sourceDirName:"base",slug:"/base/reactive",permalink:"/pwc/docs/base/reactive",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/base/reactive.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docs",previous:{title:"\u5217\u8868\u6e32\u67d3",permalink:"/pwc/docs/template/list"},next:{title:"attribute \u53cd\u5c04",permalink:"/pwc/docs/base/attribute"}},s={},u=[{value:"\u76d1\u542c\u6570\u636e",id:"\u76d1\u542c\u6570\u636e",level:2},{value:"\u66f4\u65b0\u6d41\u7a0b",id:"\u66f4\u65b0\u6d41\u7a0b",level:2},{value:"\u5b9a\u70b9\u66f4\u65b0",id:"\u5b9a\u70b9\u66f4\u65b0",level:2},{value:"APIs",id:"apis",level:2},{value:"nextTick",id:"nexttick",level:3},{value:"toRaw",id:"toraw",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u54cd\u5e94\u5f0f\u66f4\u65b0"},"\u54cd\u5e94\u5f0f\u66f4\u65b0"),(0,l.kt)("p",null,"\u54cd\u5e94\u5f0f\u66f4\u65b0\u662f\u6307\u5f53\u67d0\u4e9b\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4e0e\u4e4b\u76f8\u5173\u7684\u89c6\u56fe\u4f1a\u968f\u4e4b\u66f4\u65b0\uff0c\u800c\u4e0d\u9700\u8981\u7528\u6237\u624b\u52a8\u64cd\u4f5c DOM\u3002\u54cd\u5e94\u5f0f\u66f4\u65b0\u662f\u589e\u5f3a Web Components \u7684\u91cd\u8981\u65b9\u5411\u4e4b\u4e00\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u4f7f\u7528 Web Components \u5f00\u53d1\u7ec4\u4ef6\u7684\u6210\u672c\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u5728 PWC \u4e2d\uff0c\u54cd\u5e94\u5f0f\u5c5e\u6027\u9700\u8981\u5305\u88f9 ",(0,l.kt)("inlineCode",{parentName:"p"},"reactive")," \u88c5\u9970\u5668\u5e76\u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"accessor")," \u8bbf\u95ee\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class CustomElement extends HTMLElement {\n  @reactive\n  accessor data = {};   // data \u7684\u66f4\u65b0\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\n\n  @reactive\n  accessor #privateData = {}; // #privateData \u7684\u66f4\u65b0\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\n}\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347\u6548\u7387\uff0cPWC \u6784\u5efa\u5668\u4f1a\u81ea\u52a8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".pwc")," \u6587\u4ef6\u4e2d\u53c2\u4e0e\u89c6\u56fe\u66f4\u65b0\u7684\u5c5e\u6027\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@reactive accessor"),"\u3002"),(0,l.kt)("h2",{id:"\u76d1\u542c\u6570\u636e"},"\u76d1\u542c\u6570\u636e"),(0,l.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u6848\u6765\u76d1\u542c\u6570\u636e\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxy")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"Object.defineProperty"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65b9\u6848"),(0,l.kt)("th",{parentName:"tr",align:null},"\u76d1\u542c\u6548\u679c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6027\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u517c\u5bb9\u6027"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object.defineProperty"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Proxy")," \u76f8\u6bd4\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u76d1\u542c\u6548\u679c\u597d\uff0c\u6027\u80fd\u597d\uff0c\u4f46\u662f\u5728\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u4e0a\uff0c\u4e0d\u652f\u6301 IOS 9\uff0c\u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u9009\u62e9\u76d1\u542c\u65b9\u6848\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://caniuse.com/proxy"},"Proxy \u517c\u5bb9\u6027"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01bH2nN11HTfMgxDYLK_!!6000000000759-0-tps-1374-588.jpg",alt:null})),(0,l.kt)("p",null,"\u5728\u76d1\u542c\u6548\u679c\u4e0a\uff0c\u4e24\u8005\u5b58\u5728\u533a\u522b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Object.defineProperty")," \u65b9\u6848\u65f6\uff0c\u4e0d\u80fd\u76d1\u542c\u5bf9\u8c61\u7684\u65b0\u589e\u5c5e\u6027\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class CustomElement extends HTMLElement {\n  @reactive\n  accessor #data = {};\n\n  handleChange() {\n    this.#data.count = 0; // \u4f7f\u7528 Object.defineProperty \u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1\u66f4\u65b0\n  }\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Object.defineProperty")," \u65b9\u6848\u65f6\uff0c\u5bf9\u8c61\u5c5e\u6027\u7684\u76f4\u63a5\u8d4b\u503c\u4f1a\u5bfc\u81f4\u76d1\u542c\u529f\u80fd\u4e22\u5931\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class CustomElement extends HTMLElement {\n  @reactive\n  accessor #data = {\n    someObject: {\n      count: 0\n    }\n  };\n\n  handleChange() {\n    const newObject = {\n      count: 0\n    };\n    this.#data.someObject = newObject;  // \u4f7f\u7528 Object.defineProperty \u65f6\uff0c someObject \u4e0a\u7684\u54cd\u5e94\u5f0f\u4f1a\u4e22\u5931\n  }\n}\n")),(0,l.kt)("p",null,"// TODO \u589e\u52a0\u65b9\u6848\u9009\u62e9\u914d\u7f6e\u7684\u4f8b\u5b50"),(0,l.kt)("h2",{id:"\u66f4\u65b0\u6d41\u7a0b"},"\u66f4\u65b0\u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01XBI2yI1UswDxSEXvH_!!6000000002574-2-tps-786-420.png",alt:"flow"})),(0,l.kt)("p",null,"\u66f4\u65b0\u662f\u5f02\u6b65\u7684\u3002\u5f53\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u4f1a\u5728\u66f4\u65b0\u4efb\u52a1\u5217\u8868\u4e2d\u585e\u5165\u5f53\u524d\u7ec4\u4ef6\u7684\u66f4\u65b0\u4efb\u52a1\u3002\u82e5\u67d0\u4e2a\u7ec4\u4ef6\u53d1\u751f\u591a\u6b21\u66f4\u65b0\u65f6\uff0c\u53ea\u4f1a\u4fdd\u7559\u4e00\u4e2a\u66f4\u65b0\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"\u5728\u4e0b\u4e00\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"tick")," \u4e2d\uff0c\u4f1a\u6279\u91cf\u6267\u884c\u4efb\u52a1\u5217\u8868\u4e2d\u7684\u66f4\u65b0\u4efb\u52a1\uff0c\u5373\u5b8c\u6210\u7ec4\u4ef6\u89c6\u56fe\u7684\u66f4\u65b0\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u70b9\u66f4\u65b0"},"\u5b9a\u70b9\u66f4\u65b0"),(0,l.kt)("p",null,"\u5728 PWC \u4e2d\uff0c\u6ca1\u6709 Virtual DOM\uff0c\u4e5f\u6ca1\u6709 VDOM Diff \u66f4\u65b0\u7b97\u6cd5\uff0c\u6211\u4eec\u91c7\u7528\u6548\u7387\u66f4\u9ad8\u7684\u70b9\u5bf9\u70b9\u66f4\u65b0\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01eiouCX29Chx4antxE_!!6000000008032-2-tps-758-720.png",alt:"diff"})),(0,l.kt)("p",null,"\u6a21\u677f\u88ab\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a\u9759\u6001\u6a21\u677f\u548c\u6570\u636e\u3002\u9759\u6001\u6a21\u677f\u662f\u4fdd\u6301\u4e0d\u53d8\u7684\uff0c\u53ea\u6709\u6570\u636e\u4f1a\u53d1\u751f\u53d8\u5316\u5e76\u89e6\u53d1\u89c6\u56fe\u7684\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u89c6\u56fe\u4e2d\u6bcf\u4e00\u4e2a\u586b\u5145\u4e86\u6570\u636e\u7684\u4f4d\u7f6e\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u52a8\u6001\u70b9\u4f4d\uff0c\u5728\u6570\u636e\u66f4\u65b0\u540e\uff0c\u4f1a\u901a\u8fc7\u6bd4\u5bf9\u8fd9\u4e9b\u52a8\u6001\u70b9\u4f4d\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u5982\u679c\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5219\u8be5\u70b9\u4f4d\u4f1a\u8fdb\u884c\u66f4\u65b0\u3002"),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("h3",{id:"nexttick"},"nextTick"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function nextTick(callback?: () => void): Promise<void>\n")),(0,l.kt)("p",null,"\u5982\u524d\u6587\u6240\u4ecb\u7ecd\uff0c\u5728 PWC \u4e2d\uff0c\u4ece\u6570\u636e\u66f4\u65b0\u5230\u89c6\u56fe\u66f4\u65b0\u7684\u8fc7\u7a0b\u662f\u5f02\u6b65\u7684\u3002\u5728\u6700\u8fd1\u4e00\u6b21\u89c6\u56fe\u66f4\u65b0\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"nextTick")," \u5c31\u4f1a\u88ab\u6267\u884c\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6216\u7b49\u5f85 ",(0,l.kt)("inlineCode",{parentName:"p"},"nextTick")," \u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u6267\u884c\u5b8c\u6210\u6765\u76d1\u542c\u89c6\u56fe\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div @click={{this.handleClick}}>{{this.#count}}</div>\n</template>\n\n\n<script>\n\nimport { reactive, nextTick } from 'pwc';\n\nexport class CustomElement extends HTMLElement {\n  @reactive\n  accessor #count = 0;\n\n  handleClick() {\n    this.#count++;\n    console.log('\u6570\u636e\u5df2\u66f4\u65b0\uff0c\u89c6\u56fe\u672a\u66f4\u65b0');\n    nextTick(() => {\n      console.log('\u89c6\u56fe\u5df2\u66f4\u65b0');\n    });\n  }\n}\n<\/script>\n")),(0,l.kt)("h3",{id:"toraw"},"toRaw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function toRaw<T>(proxy: T): T\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Proxy")," \u65b9\u6848\u4e2d\uff0c\u590d\u6742\u7c7b\u578b\u7684\u54cd\u5e94\u5f0f\u5c5e\u6027\u4f1a\u88ab\u8f6c\u53d8\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Proxy")," \u5bf9\u8c61\uff0c\u5982\u679c\u60f3\u8981\u5f97\u5230\u539f\u59cb\u5c5e\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"toRaw")," \u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div @click={{this.handleClick}}>{{this.#data.count}}</div>\n</template>\n\n\n<script>\n\nimport { reactive, toRaw } from 'pwc';\n\nclass CustomElement extends HTMLElement {\n  @reactive\n  accessor #data = {\n    count: 0\n  };\n\n  handleClick() {\n    console.log(this.#data); // proxy \u5bf9\u8c61\n    const originCount = toRaw(this.#data);\n    console.log(this.#data); // { count: 0 }\n  }\n}\n<\/script>\n")))}d.isMDXComponent=!0}}]);