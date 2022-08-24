"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7044],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},u="Feishu",c={unversionedId:"connector-v2/sink/Feishu",id:"connector-v2/sink/Feishu",title:"Feishu",description:"Feishu sink connector",source:"@site/docs/connector-v2/sink/Feishu.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Feishu",permalink:"/zh-CN/docs/connector-v2/sink/Feishu",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Feishu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Enterprise WeChat",permalink:"/zh-CN/docs/connector-v2/sink/Enterprise-WeChat"},next:{title:"FtpFile",permalink:"/zh-CN/docs/connector-v2/sink/FtpFile"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"headers Map",id:"headers-map",level:3},{value:"Example",id:"example",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feishu"},"Feishu"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Feishu sink connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to launch feishu web hooks using data. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,o.kt)("inlineCode",{parentName:"p"},"age: 12, name: tyrantlucifer"),"]",", the body content is the following: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"age": 12, "name": "tyrantlucifer"}'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tips: Feishu sink only support ",(0,o.kt)("inlineCode",{parentName:"strong"},"post json")," webhook and the data from source will be treated as body content in web hook.")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"url"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"headers"),(0,o.kt)("td",{parentName:"tr",align:null},"Map"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"url-string"},"url ","[string]"),(0,o.kt)("p",null,"Feishu webhook url"),(0,o.kt)("h3",{id:"headers-map"},"headers ","[Map]"),(0,o.kt)("p",null,"Http request headers"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'Feishu {\n        url = "https://www.feishu.cn/flow/api/trigger-webhook/108bb8f208d9b2378c8c7aedad715c19"\n    }\n')))}m.isMDXComponent=!0}}]);