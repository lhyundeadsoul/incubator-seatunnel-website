"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[86324],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(n),m=l,c=k["".concat(s,".").concat(m)]||k[m]||d[m]||r;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32875:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},s="Redis",p={unversionedId:"connector-v2/sink/Redis",id:"connector-v2/sink/Redis",title:"Redis",description:"Redis sink connector",source:"@site/docs/connector-v2/sink/Redis.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Redis",permalink:"/docs/connector-v2/sink/Redis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rabbitmq",permalink:"/docs/connector-v2/sink/Rabbitmq"},next:{title:"RocketMQ",permalink:"/docs/connector-v2/sink/RocketMQ"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"key string",id:"key-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"user string",id:"user-string",level:3},{value:"auth string",id:"auth-string",level:3},{value:"mode string",id:"mode-string",level:3},{value:"nodes list",id:"nodes-list",level:3},{value:"format string",id:"format-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"next version",id:"next-version",level:3}],k={toc:d};function m(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis"},"Redis"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Redis sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to write data to Redis."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"single")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"yes when mode=cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"host-string"},"host ","[string]"),(0,r.kt)("p",null,"Redis host"),(0,r.kt)("h3",{id:"port-int"},"port ","[int]"),(0,r.kt)("p",null,"Redis port"),(0,r.kt)("h3",{id:"key-string"},"key ","[string]"),(0,r.kt)("p",null,"The value of key you want to write to redis."),(0,r.kt)("p",null,"For example, if you want to use value of a field from upstream data as key, you can assign it to the field name."),(0,r.kt)("p",null,"Upstream data is the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"data"),(0,r.kt)("th",{parentName:"tr",align:null},"success"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"get success"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"internal error"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"If you assign field name to ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and data_type to ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", two data will be written to redis:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"200 -> {code: 200, message: true, data: get success}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"500 -> {code: 500, message: false, data: internal error}"))),(0,r.kt)("p",null,"If you assign field name to ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and data_type to ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", only one data will be written to redis because ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is not existed in upstream data's fields:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"value -> {code: 500, message: false, data: internal error}"))),(0,r.kt)("p",null,"Please see the data_type section for specific writing rules."),(0,r.kt)("p",null,"Of course, the format of the data written here I just take json as an example, the specific or user-configured ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," prevails."),(0,r.kt)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,r.kt)("p",null,"Redis data types, support ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("inlineCode",{parentName:"p"},"zset")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"key")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each data from upstream will be updated to the configured key, which means the later data will overwrite the earlier data, and only the last data will be stored in the key.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hash")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each data from upstream will be split according to the field and written to the hash key, also the data after will overwrite the data before.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured list key.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured set key.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zset")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured zset key with a weight of 1. So the order of data in zset is based on the order of data consumption.")),(0,r.kt)("h3",{id:"user-string"},"user ","[string]"),(0,r.kt)("p",null,"redis authentication user, you need it when you connect to an encrypted cluster"),(0,r.kt)("h3",{id:"auth-string"},"auth ","[string]"),(0,r.kt)("p",null,"Redis authentication password, you need it when you connect to an encrypted cluster"),(0,r.kt)("h3",{id:"mode-string"},"mode ","[string]"),(0,r.kt)("p",null,"redis mode, ",(0,r.kt)("inlineCode",{parentName:"p"},"single")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster"),", default is ",(0,r.kt)("inlineCode",{parentName:"p"},"single")),(0,r.kt)("h3",{id:"nodes-list"},"nodes ","[list]"),(0,r.kt)("p",null,"redis nodes information, used in cluster mode, must like as the following format:"),(0,r.kt)("p",null,'["host1:port1", "host2:port2"]'),(0,r.kt)("h3",{id:"format-string"},"format ","[string]"),(0,r.kt)("p",null,"The format of upstream data, now only support ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," will be supported later, default ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"When you assign format is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", for example:"),(0,r.kt)("p",null,"Upstream data is the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"data"),(0,r.kt)("th",{parentName:"tr",align:null},"success"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"get success"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"Connector will generate data as the following and write it to redis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  "true"}\n\n')),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"Redis {\n  host = localhost\n  port = 6379\n  key = age\n  data_type = list\n}\n")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Redis Sink Connector")),(0,r.kt)("h3",{id:"next-version"},"next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Support redis cluster mode connection and user authentication ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3188"},"3188"))))}m.isMDXComponent=!0}}]);