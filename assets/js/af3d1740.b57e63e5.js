"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4204],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},u="TDengine",s={unversionedId:"connector-v2/source/TDengine",id:"connector-v2/source/TDengine",title:"TDengine",description:"TDengine source connector",source:"@site/docs/connector-v2/source/TDengine.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/TDengine",permalink:"/docs/connector-v2/source/TDengine",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/TDengine.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"StarRocks",permalink:"/docs/connector-v2/source/StarRocks"},next:{title:"Source Common Options",permalink:"/docs/connector-v2/source/common-options"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"stable string",id:"stable-string",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"Example",id:"example",level:2},{value:"source",id:"source",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tdengine"},"TDengine"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TDengine source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through TDengine."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection"))),(0,l.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lower_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upper_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"the url of the TDengine when you select the TDengine"),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"jdbc:TAOS-RS://localhost:6041/\n")),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"the username of the TDengine when you select"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"the password of the TDengine when you select"),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"the database of the TDengine when you select"),(0,l.kt)("h3",{id:"stable-string"},"stable ","[string]"),(0,l.kt)("p",null,"the stable of the TDengine when you select"),(0,l.kt)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,l.kt)("p",null,"the lower_bound of the migration period"),(0,l.kt)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,l.kt)("p",null,"the upper_bound of the migration period"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"source"},"source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n        TDengine {\n          url : "jdbc:TAOS-RS://localhost:6041/"\n          username : "root"\n          password : "taosdata"\n          database : "power"\n          stable : "meters"\n          lower_bound : "2018-10-03 14:38:05.000"\n          upper_bound : "2018-10-03 14:38:16.800"\n          result_table_name = "tdengine_result"\n        }\n}\n')))}m.isMDXComponent=!0}}]);