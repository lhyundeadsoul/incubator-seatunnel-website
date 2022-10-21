"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[601],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48685:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],o={},u="InfluxDB",p={unversionedId:"connector-v2/source/InfluxDB",id:"connector-v2/source/InfluxDB",title:"InfluxDB",description:"InfluxDB source connector",source:"@site/docs/connector-v2/source/InfluxDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/InfluxDB",permalink:"/docs/connector-v2/source/InfluxDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/InfluxDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/docs/connector-v2/source/Iceberg"},next:{title:"IoTDB",permalink:"/docs/connector-v2/source/IoTDB"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url",id:"url",level:3},{value:"sql string",id:"sql-string",level:3},{value:"fields string",id:"fields-string",level:3},{value:"database string",id:"database-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"split_column string",id:"split_column-string",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"epoch string",id:"epoch-string",level:3},{value:"query_timeout_sec int",id:"query_timeout_sec-int",level:3},{value:"connect_timeout_ms long",id:"connect_timeout_ms-long",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"influxdb"},"InfluxDB"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"InfluxDB source connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Read external data source data through InfluxDB."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,r.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sql"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lower_bound"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upper_bound"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partition_num"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"split_column"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"epoch"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"15000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_timeout_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("h3",{id:"url"},"url"),(0,r.kt)("p",null,"the url to connect to influxDB e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://influxdb-host:8086\n")),(0,r.kt)("h3",{id:"sql-string"},"sql ","[string]"),(0,r.kt)("p",null,"The query sql used to search data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select name,age from test\n")),(0,r.kt)("h3",{id:"fields-string"},"fields ","[string]"),(0,r.kt)("p",null,"the fields of the InfluxDB when you select"),(0,r.kt)("p",null,"the field type is SeaTunnel field type ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.table.type.SqlType")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fields{\n    name=STRING\n    age=INT\n    }\n")),(0,r.kt)("h3",{id:"database-string"},"database ","[string]"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"influxDB")," database"),(0,r.kt)("h3",{id:"username-string"},"username ","[string]"),(0,r.kt)("p",null,"the username of the influxDB when you select"),(0,r.kt)("h3",{id:"password-string"},"password ","[string]"),(0,r.kt)("p",null,"the password of the influxDB when you select"),(0,r.kt)("h3",{id:"split_column-string"},"split_column ","[string]"),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"split_column")," of the influxDB when you select"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"influxDB tags is not supported as a segmented primary key because the type of tags can only be a string"),(0,r.kt)("li",{parentName:"ul"},"influxDB time is not supported as a segmented primary key because the time field cannot participate in mathematical calculation"),(0,r.kt)("li",{parentName:"ul"},"Currently, ",(0,r.kt)("inlineCode",{parentName:"li"},"split_column")," only supports integer data segmentation, and does not support ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"date")," and other types."))),(0,r.kt)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,r.kt)("p",null,"upper bound of the ",(0,r.kt)("inlineCode",{parentName:"p"},"split_column"),"column"),(0,r.kt)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,r.kt)("p",null,"lower bound of the ",(0,r.kt)("inlineCode",{parentName:"p"},"split_column")," column"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'     split the $split_column range into $partition_num parts\n     if partition_num is 1, use the whole `split_column` range\n     if partition_num < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, partition_num = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test where ($split_column >= 1 and $split_column < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test where ($split_column >= 6 and $split_column < 11) and (  age > 0 and age < 10 )\n\n')),(0,r.kt)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"partition_num")," of the InfluxDB when you select"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: Ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"upper_bound")," minus ",(0,r.kt)("inlineCode",{parentName:"p"},"lower_bound")," is divided ",(0,r.kt)("inlineCode",{parentName:"p"},"bypartition_num"),", otherwise the query results will overlap")),(0,r.kt)("h3",{id:"epoch-string"},"epoch ","[string]"),(0,r.kt)("p",null,"returned time precision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Optional values: H, m, s, MS, u, n"),(0,r.kt)("li",{parentName:"ul"},"default value: n")),(0,r.kt)("h3",{id:"query_timeout_sec-int"},"query_timeout_sec ","[int]"),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout")," of the InfluxDB when you select, in seconds"),(0,r.kt)("h3",{id:"connect_timeout_ms-long"},"connect_timeout_ms ","[long]"),(0,r.kt)("p",null,"the timeout for connecting to InfluxDB, in milliseconds "),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Example of multi parallelism and multi partition scanning "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        upper_bound = 100\n        lower_bound = 1\n        partition_num = 4\n        split_column = "value"\n        fields {\n            label = STRING\n            value = INT\n            rt = STRING\n            time = BIGINT\n            }\n    }\n\n}\n\n')),(0,r.kt)("p",null,"Example of not using partition scan "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        fields {\n            label = STRING\n            value = INT\n            rt = STRING\n            time = BIGINT\n            }\n    }\n\n}\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add InfluxDB Source Connector")))}m.isMDXComponent=!0}}]);