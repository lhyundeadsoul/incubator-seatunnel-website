"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2810],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45621:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="StarRocks",p={unversionedId:"connector-v2/sink/StarRocks",id:"connector-v2/sink/StarRocks",title:"StarRocks",description:"StarRocks sink connector",source:"@site/docs/connector-v2/sink/StarRocks.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/StarRocks",permalink:"/docs/connector-v2/sink/StarRocks",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/StarRocks.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/docs/connector-v2/sink/Socket"},next:{title:"Tablestore",permalink:"/docs/connector-v2/sink/Tablestore"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"labelPrefix string",id:"labelprefix-string",level:3},{value:"batch_max_rows long",id:"batch_max_rows-long",level:3},{value:"batch_max_bytes int",id:"batch_max_bytes-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"sink.properties.*  starrocks stream load config",id:"sinkproperties--starrocks-stream-load-config",level:3},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],c={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"starrocks"},"StarRocks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"StarRocks sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to send data to StarRocks. Both support streaming and batch mode.\nThe internal implementation of StarRocks sink connector is cached and imported by stream load in batches."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"labelPrefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"5 ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,l.kt)("td",{parentName:"tr",align:null},"starrocks stream load config"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," cluster address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},'["fe_ip:fe_http_port", ...]')),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," user username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")," user password"),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"The name of StarRocks database"),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"The name of StarRocks table"),(0,l.kt)("h3",{id:"labelprefix-string"},"labelPrefix ","[string]"),(0,l.kt)("p",null,"The prefix of StarRocks stream load label"),(0,l.kt)("h3",{id:"batch_max_rows-long"},"batch_max_rows ","[long]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,l.kt)("h3",{id:"batch_max_bytes-int"},"batch_max_bytes ","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,l.kt)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the StarRocks"),(0,l.kt)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,l.kt)("p",null,"The number of retries to flush failed"),(0,l.kt)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,l.kt)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,l.kt)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,l.kt)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,l.kt)("inlineCode",{parentName:"p"},"StarRocks")),(0,l.kt)("h3",{id:"sinkproperties--starrocks-stream-load-config"},"sink.properties.*  ","[starrocks stream load config]"),(0,l.kt)("p",null,"The parameter of the stream load ",(0,l.kt)("inlineCode",{parentName:"p"},"data_desc"),"\nThe way to specify the parameter is to add the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"sink.properties.")," to the original stream load parameter name\nFor example, the way to specify ",(0,l.kt)("inlineCode",{parentName:"p"},"strip_outer_array")," is: ",(0,l.kt)("inlineCode",{parentName:"p"},"sink.properties.strip_outer_array")),(0,l.kt)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,l.kt)("p",null,"The supported formats include CSV and JSON. Default value: CSV"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Use JSON format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    StarRocks {\n        nodeUrls = ["e2e_starRocksdb:8030"]\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        batch_max_rows = 10\n        sink.properties.format = "JSON"\n        sink.properties.strip_outer_array = true\n    }\n}\n\n')),(0,l.kt)("p",null,"Use CSV format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    StarRocks {\n        nodeUrls = ["e2e_starRocksdb:8030"]\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        batch_max_rows = 10\n        sink.properties.format = "CSV"\n        sink.properties.column_separator = "\\x01"\n        sink.properties.row_delimiter = "\\x02"\n    }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add StarRocks Sink Connector")))}u.isMDXComponent=!0}}]);