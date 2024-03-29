"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[71349],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54219:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},l="Speed Control",p={unversionedId:"concept/speed-limit",id:"concept/speed-limit",title:"Speed Control",description:"Introduction",source:"@site/docs/concept/speed-limit.md",sourceDirName:"concept",slug:"/concept/speed-limit",permalink:"/docs/concept/speed-limit",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/speed-limit.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JobEnvConfig",permalink:"/docs/concept/JobEnvConfig"},next:{title:"Event Listener",permalink:"/docs/concept/event-listener"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"speed-control"},"Speed Control"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The SeaTunnel provides a powerful speed control feature that allows you to manage the rate at which data is synchronized.\nThis functionality is essential when you need to ensure efficient and controlled data transfer between systems.\nThe speed control is primarily governed by two key parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second"),".\nThis document will guide you through the usage of these parameters and how to leverage them effectively."),(0,i.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,i.kt)("br",null),"\nFlink",(0,i.kt)("br",null),"\nSpark",(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use the speed control feature, you need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second")," parameters in your job config."),(0,i.kt)("p",null,"Example env config in your config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"env {\n    job.mode=STREAMING\n    job.name=SeaTunnel_Job\n    read_limit.bytes_per_second=7000000\n    read_limit.rows_per_second=400\n}\nsource {\n    MySQL-CDC {\n      // ignore...\n    }\n}\ntransform {\n}\nsink {\n    Console {\n    }\n}\n")),(0,i.kt)("p",null,"We have placed ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," parameters, completing the speed control configuration.\nYou can configure both of these parameters simultaneously or choose to configure only one of them. The value of each ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," represents the maximum rate at which each thread is restricted.\nTherefore, when configuring the respective values, please take into account the parallelism of your tasks."))}f.isMDXComponent=!0}}]);