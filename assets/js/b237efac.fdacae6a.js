"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8178],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="Enterprise WeChat",p={unversionedId:"connector-v2/sink/Enterprise-WeChat",id:"connector-v2/sink/Enterprise-WeChat",title:"Enterprise WeChat",description:"Enterprise WeChat sink connector",source:"@site/docs/connector-v2/sink/Enterprise-WeChat.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Enterprise-WeChat",permalink:"/docs/connector-v2/sink/Enterprise-WeChat",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Enterprise-WeChat.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/docs/connector-v2/sink/Email"},next:{title:"Feishu",permalink:"/docs/connector-v2/sink/Feishu"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"mentioned_list array",id:"mentioned_list-array",level:3},{value:"mentioned_mobile_list array",id:"mentioned_mobile_list-array",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enterprise-wechat"},"Enterprise WeChat"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Enterprise WeChat sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A sink plugin which use Enterprise WeChat robot send message"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,i.kt)("inlineCode",{parentName:"p"},'"alarmStatus": "firing", "alarmTime": "2022-08-03 01:38:49"\uff0c"alarmContent": "The disk usage exceeds the threshold"'),"]",", the output content to WeChat Robot is the following:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"alarmStatus: firing \nalarmTime: 2022-08-03 01:38:49\nalarmContent: The disk usage exceeds the threshold\n")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tips: WeChat sink only support ",(0,i.kt)("inlineCode",{parentName:"strong"},"string")," webhook and the data from source will be treated as body content in web hook."))),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mentioned_list"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mentioned_mobile_list"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"url-string"},"url ","[string]"),(0,i.kt)("p",null,"Enterprise WeChat webhook url format is ",(0,i.kt)("a",{parentName:"p",href:"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX%EF%BC%88string%EF%BC%89"},"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX\uff08string\uff09")),(0,i.kt)("h3",{id:"mentioned_list-array"},"mentioned_list ","[array]"),(0,i.kt)("p",null,"A list of userids to remind the specified members in the group (@ a member), @ all means to remind everyone. If the developer can't get the userid, he can use called",(0,i.kt)("em",{parentName:"p"}," mobile")," list"),(0,i.kt)("h3",{id:"mentioned_mobile_list-array"},"mentioned_mobile_list ","[array]"),(0,i.kt)("p",null,"Mobile phone number list, remind the group member corresponding to the mobile phone number (@ a member), @ all means remind everyone"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n    }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n        mentioned_list=["wangqing","@all"]\n        mentioned_mobile_list=["13800001111","@all"]\n    }\n')))}d.isMDXComponent=!0}}]);