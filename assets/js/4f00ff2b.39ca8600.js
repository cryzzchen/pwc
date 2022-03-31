"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[270],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(2182),a=n(9028),i=(n(9496),n(9613)),o=["components"],c={sidebar_position:4},l="\u54cd\u5e94\u5f0f\u66f4\u65b0",s={unversionedId:"base/reactive",id:"base/reactive",title:"\u54cd\u5e94\u5f0f\u66f4\u65b0",description:"PWC \u7ec4\u4ef6\u5c06\u5916\u90e8\u8f93\u5165\u548c\u81ea\u8eab\u72b6\u6001\u4f5c\u4e3a\u81ea\u8eab\u7684\u5c5e\u6027\u3002\u5176\u4e2d\uff0c\u54cd\u5e94\u5f0f\u5c5e\u6027\u662f\u5f53\u5176\u53d1\u751f\u66f4\u65b0\u65f6\uff0c\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u89c6\u56fe\u66f4\u65b0\u7684\u5c5e\u6027\u3002",source:"@site/docs/base/reactive.md",sourceDirName:"base",slug:"/base/reactive",permalink:"/pwc/docs/base/reactive",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/base/reactive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u7ed1\u5b9a",permalink:"/pwc/docs/base/event"},next:{title:"\u751f\u547d\u5468\u671f",permalink:"/pwc/docs/base/lifecycle"}},p={},u=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5b9a\u4e49\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027",id:"\u5b9a\u4e49\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027",level:3},{value:"\u53cd\u5c04\u5230 Attributes \u4e0a",id:"\u53cd\u5c04\u5230-attributes-\u4e0a",level:3},{value:"\u4f7f\u7528\u8303\u56f4",id:"\u4f7f\u7528\u8303\u56f4",level:2},{value:"\u516c\u5171\u5c5e\u6027\u548c\u79c1\u6709\u5c5e\u6027",id:"\u516c\u5171\u5c5e\u6027\u548c\u79c1\u6709\u5c5e\u6027",level:3},{value:"\u516c\u5171\u5c5e\u6027\u7684\u9650\u5236",id:"\u516c\u5171\u5c5e\u6027\u7684\u9650\u5236",level:3},{value:"\u89c6\u56fe\u66f4\u65b0",id:"\u89c6\u56fe\u66f4\u65b0",level:2},{value:"\u5982\u4f55\u66f4\u65b0",id:"\u5982\u4f55\u66f4\u65b0",level:3},{value:"nextTick",id:"nexttick",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u54cd\u5e94\u5f0f\u66f4\u65b0"},"\u54cd\u5e94\u5f0f\u66f4\u65b0"),(0,i.kt)("p",null,"PWC \u7ec4\u4ef6\u5c06\u5916\u90e8\u8f93\u5165\u548c\u81ea\u8eab\u72b6\u6001\u4f5c\u4e3a\u81ea\u8eab\u7684\u5c5e\u6027\u3002\u5176\u4e2d\uff0c\u54cd\u5e94\u5f0f\u5c5e\u6027\u662f\u5f53\u5176\u53d1\u751f\u66f4\u65b0\u65f6\uff0c\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u89c6\u56fe\u66f4\u65b0\u7684\u5c5e\u6027\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u5b9a\u4e49\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027"},"\u5b9a\u4e49\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027"),(0,i.kt)("p",null,"\u5728 PWC \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"reactive")," \u88c5\u9970\u5668\uff0c\u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"accessor")," \u4f7f\u7528\uff0c\u5373\u53ef\u5c06\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u54cd\u5e94\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { reactive } from 'pwc';\n\nclass CustomElement extends HTMLElement {\n  @reactive\n  accessor data = { name: 'Tom' }; // \u516c\u5171\u5c5e\u6027, \u7f3a\u7701\u503c\u4e3a { name: 'Tom' }\n\n  @reactive\n  accessor #privateData = {}; // \u79c1\u6709\u5c5e\u6027\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Q: \u5173\u952e\u5b57 ",(0,i.kt)("inlineCode",{parentName:"p"},"accessor")," \u662f\u4ec0\u4e48\uff1f"),(0,i.kt)("p",{parentName:"div"},"A: \u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"accessor")," \u5173\u952e\u5b57\u7684\u5c5e\u6027\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"setter")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"getter"),"\u3002 \u4e86\u89e3\u8be6\u60c5\u8bf7\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"proposal-decorators")))),(0,i.kt)("h3",{id:"\u53cd\u5c04\u5230-attributes-\u4e0a"},"\u53cd\u5c04\u5230 Attributes \u4e0a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { reactive } from 'pwc';\n\nclass CustomElement extends HTMLElement {\n  @reactive\n  @attribute('attr-data')\n  accessor data = 'custom';\n}\n")),(0,i.kt)("p",null,"\u6e32\u67d3\u540e\u7684\u89c6\u56fe\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<custom-element attr-data="custom"></custom-element>\n')),(0,i.kt)("p",null,"// TODO \u7c7b\u578b\u4ecb\u7ecd"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u8303\u56f4"},"\u4f7f\u7528\u8303\u56f4"),(0,i.kt)("h3",{id:"\u516c\u5171\u5c5e\u6027\u548c\u79c1\u6709\u5c5e\u6027"},"\u516c\u5171\u5c5e\u6027\u548c\u79c1\u6709\u5c5e\u6027"),(0,i.kt)("p",null,"\u516c\u5171\u5c5e\u6027\u662f\u6307\u7ec4\u4ef6\u53ef\u63a5\u6536\u7684\u3001\u4ece\u5916\u90e8\u4f20\u5165\u7684\u5c5e\u6027\uff0c\u662f\u7236\u5b50\u7ec4\u4ef6\u901a\u4fe1\u7684\u91cd\u8981\u9014\u5f84\u3002\u5bf9\u4e8e\u4e00\u4e2a\u7ec4\u4ef6\u6765\u8bf4\uff0c\u5176\u516c\u5171\u5c5e\u6027\u5e94\u5f53\u662f\u53ea\u8bfb\u7684\uff0c\u5176\u503c\u53ea\u7531\u5916\u90e8\u73af\u5883\u6240\u51b3\u5b9a\u3002\u516c\u5171\u5c5e\u6027\u4e0e\u8282\u70b9\u7684 Attributes \u5f62\u6210\u53d1\u5c04\u5173\u7cfb\u3002"),(0,i.kt)("p",null,"\u79c1\u6709\u5c5e\u6027\u662f\u6307\u7ec4\u4ef6\u5185\u90e8\u6240\u7ba1\u7406\u7684\u7ec4\u4ef6\u72b6\u6001\uff0c\u5176\u503c\u53ea\u7531\u7ec4\u4ef6\u672c\u8eab\u6240\u51b3\u5b9a\u3002\u5728 PWC \u4e2d\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields"},"\u4ee5 # \u4e3a\u524d\u7f00")," \u7684\u7ec4\u4ef6\u5c5e\u6027\u6807\u8bc6\u4e3a\u8be5\u7ec4\u4ef6\u7684\u79c1\u6709\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u516c\u5171\u5c5e\u6027\u548c\u79c1\u6709\u5c5e\u6027\u5747\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u54cd\u5e94\u5f0f\u5c5e\u6027\u3002"),(0,i.kt)("h3",{id:"\u516c\u5171\u5c5e\u6027\u7684\u9650\u5236"},"\u516c\u5171\u5c5e\u6027\u7684\u9650\u5236"),(0,i.kt)("p",null,"\u6b63\u5982\u524d\u9762\u6240\u8bf4\uff0c\u516c\u5171\u5c5e\u6027\u662f\u7ec4\u4ef6\u5c06\u5916\u90e8\u8f93\u5165\u4f5c\u4e3a\u81ea\u8eab\u5c5e\u6027\u7684\uff0c\u800c\u4e00\u4e2a HTML \u8282\u70b9\u672c\u8eab\u5b58\u5728\u82e5\u5e72\u5c5e\u6027\uff0c\u56e0\u6b64\u5728\u81ea\u5b9a\u4e49\u516c\u5171\u5c5e\u6027\u65f6\uff0c\u5e94\u5f53\u6ce8\u610f\u907f\u514d\u53d6\u540d\u51b2\u7a81\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},"Element")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," \u8868\u793a\u5176\u8282\u70b9\u7684\u7c7b\u540d\uff0c\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u5e94\u5f53\u907f\u514d\u521b\u5efa\u540c\u540d\u516c\u5171\u5c5e\u6027\u3002"),(0,i.kt)("h2",{id:"\u89c6\u56fe\u66f4\u65b0"},"\u89c6\u56fe\u66f4\u65b0"),(0,i.kt)("h3",{id:"\u5982\u4f55\u66f4\u65b0"},"\u5982\u4f55\u66f4\u65b0"),(0,i.kt)("p",null,"\u5728 PWC \u4e2d\uff0c\u4efb\u4f55\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u90fd\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"requestUpdate")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4f1a\u628a\u5f53\u524d\u7ec4\u4ef6\u63a8\u5165\u5230\u66f4\u65b0\u961f\u5217\u4e2d\u3002\u66f4\u65b0\u5e76\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u800c\u662f\u4e0b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"tick")," \u624d\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\u3002\u4e5f\u5c31\u662f\u8bf4 PWC \u7ec4\u4ef6\u7684\u89c6\u56fe\u66f4\u65b0\u4f1a\u5408\u5e76\u5728\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"tick")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u5728 PWC \u4e2d\uff0c\u89c6\u56fe\u662f\u4ee5\u70b9\u5bf9\u70b9\u5f62\u5f0f\u66f4\u65b0\u7684\uff0c\u5373\u4e00\u4e2a\u5c5e\u6027\u7684\u53d8\u5316\u53ea\u4f1a\u5f71\u54cd\u4e0e\u5176\u76f8\u5173\u7684\u89c6\u56fe\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"// TODO \u8865\u5145\u6d41\u7a0b\u56fe"),(0,i.kt)("h3",{id:"nexttick"},"nextTick"),(0,i.kt)("p",null,"\u5982\u679c\u7528\u6237\u9700\u8981\u76d1\u542c\u89c6\u56fe\u66f4\u65b0\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nextTick")," \u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <p>{{#count}}</p>\n  <button @click={{handlClick}}>click</button>\n</template>\n\n<script>\nimport { reactive, nextTick } from 'pwc';\nclass CustomElement extends HTMLElement {\n  @reactive\n  accessor #count = 0;\n\n  handlClick() {\n    this.#count ++;\n    nextTick(() => {\n      console.log('count \u5df2\u66f4\u65b0');\n    });\n  }\n}\n<\/script>\n")))}d.isMDXComponent=!0}}]);