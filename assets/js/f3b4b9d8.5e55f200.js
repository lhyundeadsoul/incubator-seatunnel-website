"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31382],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],c={},i="Hbase",u={unversionedId:"connector-v2/source/Hbase",id:"connector-v2/source/Hbase",title:"Hbase",description:"Hbase source connector",source:"@site/docs/connector-v2/source/Hbase.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hbase",permalink:"/docs/connector-v2/source/Hbase",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Hbase.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/connector-v2/source/Greenplum"},next:{title:"HdfsFile",permalink:"/docs/connector-v2/source/HdfsFile"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"query_columns list",id:"query_columns-list",level:3},{value:"schema config",id:"schema-config",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hbase"},"Hbase"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hbase source connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Read data from Apache Hbase."),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"table"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query_columns"),(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,o.kt)("p",null,'The zookeeper cluster host of hbase, example: "hadoop001:2181,hadoop002:2181,hadoop003:2181"'),(0,o.kt)("h3",{id:"table-string"},"table ","[string]"),(0,o.kt)("p",null,'The table name you want to write, example: "seatunnel"'),(0,o.kt)("h3",{id:"query_columns-list"},"query_columns ","[list]"),(0,o.kt)("p",null,'The column name which you want to query in the table. If you want to query the rowkey column, please set "rowkey" in query_columns.\nOther column format should be: columnFamily:columnName, example: ','["rowkey", "columnFamily1:column1", "columnFamily1:column1", "columnFamily2:column1"]'),(0,o.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,o.kt)("p",null,"Hbase uses byte arrays for storage. Therefore, you need to configure data types for each column in a table. For more information, see: ",(0,o.kt)("a",{parentName:"p",href:"/docs/concept/schema-feature#how-to-declare-type-supported"},"guide"),"."),(0,o.kt)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,o.kt)("p",null,"The extra configuration of hbase"),(0,o.kt)("h3",{id:"common-options"},"common options"),(0,o.kt)("p",null,"Source plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n  Hbase {\n      zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181"\n      table = "seatunnel_test"\n      query_columns=["rowkey", "columnFamily1:column1", "columnFamily1:column1", "columnFamily2:column1"]\n      schema = {\n            columns = [\n                  {\n                     name = rowkey\n                     type = string\n                  },\n                  {\n                     name = "columnFamily1:column1"\n                     type = boolean\n                  },\n                  {\n                     name = "columnFamily1:column1"\n                     type = double\n                  },\n                  {\n                     name = "columnFamily2:column1"\n                     type = bigint\n                  }\n            ]\n      }\n  }\n}\n')),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"next-version"},"next version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Hbase Source Connector")))}d.isMDXComponent=!0}}]);