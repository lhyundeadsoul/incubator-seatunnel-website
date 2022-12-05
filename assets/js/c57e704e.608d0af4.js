"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8921],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=o,p=h["".concat(c,".").concat(d)]||h[d]||f[d]||a;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88137:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return f},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={sidebar_position:2},c="Intro to config file",l={unversionedId:"concept/config",id:"concept/config",title:"Intro to config file",description:"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data",source:"@site/docs/concept/config.md",sourceDirName:"concept",slug:"/concept/config",permalink:"/docs/concept/config",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Set Up with Kubernetes",permalink:"/docs/start-v2/kubernetes/"},next:{title:"Intro To Connector V2 Features",permalink:"/docs/concept/connector-v2-features"}},u={},f=[{value:"Example",id:"example",level:2},{value:"Config file structure",id:"config-file-structure",level:2},{value:"env",id:"env",level:3},{value:"source",id:"source",level:3},{value:"transform",id:"transform",level:3},{value:"sink",id:"sink",level:3},{value:"Other",id:"other",level:3},{value:"What&#39;s More",id:"whats-more",level:2}],h={toc:f};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro-to-config-file"},"Intro to config file"),(0,a.kt)("p",null,"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data\nsynchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to\nconfigure the Config file."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before you read on, you can find config file\nexamples ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/config"},"here")," and in distribute package's\nconfig directory."),(0,a.kt)("h2",{id:"config-file-structure"},"Config file structure"),(0,a.kt)("p",null,"The Config file will be similar to the one below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    field_name = "name,age"\n  }\n}\n\ntransform {\n  sql {\n    sql = "select name,age from fake"\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name"]\n    username = "default"\n    password = ""\n  }\n}\n')),(0,a.kt)("p",null,"As you can see, the Config file contains several sections: env, source, transform, sink. Different modules\nhave different functions. After you understand these modules, you will understand how SeaTunnel works."),(0,a.kt)("h3",{id:"env"},"env"),(0,a.kt)("p",null,"Used to add some engine optional parameters, no matter which engine (Spark or Flink), the corresponding\noptional parameters should be filled in here."),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"source is used to define where SeaTunnel needs to fetch data, and use the fetched data for the next step.\nMultiple sources can be defined at the same time. The supported source at now\ncheck ",(0,a.kt)("a",{parentName:"p",href:"../connector-v2/source"},"Source of SeaTunnel"),". Each source has its own specific parameters to define how to\nfetch data, and SeaTunnel also extracts the parameters that each source will use, such as\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"result_table_name")," parameter, which is used to specify the name of the data generated by the current\nsource, which is convenient for follow-up used by other modules."),(0,a.kt)("h3",{id:"transform"},"transform"),(0,a.kt)("p",null,"When we have the data source, we may need to further process the data, so we have the transform module. Of\ncourse, this uses the word 'may', which means that we can also directly treat the transform as non-existent,\ndirectly from source to sink. Like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},"transform {\n  // no thing on here\n}\n")),(0,a.kt)("p",null,"Like source, transform has specific parameters that belong to each module. The supported source at now check.\nThe supported transform at now check ",(0,a.kt)("a",{parentName:"p",href:"../transform"},"Transform of SeaTunnel")),(0,a.kt)("h3",{id:"sink"},"sink"),(0,a.kt)("p",null,"Our purpose with SeaTunnel is to synchronize data from one place to another, so it is critical to define how\nand where data is written. With the sink module provided by SeaTunnel, you can complete this operation quickly\nand efficiently. Sink and source are very similar, but the difference is reading and writing. So go check out\nour ",(0,a.kt)("a",{parentName:"p",href:"../connector-v2/sink"},"supported sinks"),"."),(0,a.kt)("h3",{id:"other"},"Other"),(0,a.kt)("p",null,"You will find that when multiple sources and multiple sinks are defined, which data is read by each sink, and\nwhich is the data read by each transform? We use ",(0,a.kt)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"source_table_name")," two key\nconfigurations. Each source module will be configured with a ",(0,a.kt)("inlineCode",{parentName:"p"},"result_table_name")," to indicate the name of the\ndata source generated by the data source, and other transform and sink modules can use ",(0,a.kt)("inlineCode",{parentName:"p"},"source_table_name")," to\nrefer to the corresponding data source name, indicating that I want to read the data for processing. Then\ntransform, as an intermediate processing module, can use both ",(0,a.kt)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"source_table_name"),"\nconfigurations at the same time. But you will find that in the above example Config, not every module is\nconfigured with these two parameters, because in SeaTunnel, there is a default convention, if these two\nparameters are not configured, then the generated data from the last module of the previous node will be used.\nThis is much more convenient when there is only one source."),(0,a.kt)("h2",{id:"whats-more"},"What's More"),(0,a.kt)("p",null,"If you want to know the details of this format configuration, Please\nsee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}d.isMDXComponent=!0}}]);