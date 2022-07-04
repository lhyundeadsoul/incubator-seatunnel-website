"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7967],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97818:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Clickhouse",d={unversionedId:"connector/sink/Clickhouse",id:"version-2.1.2/connector/sink/Clickhouse",title:"Clickhouse",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/sink/Clickhouse.md",sourceDirName:"connector/sink",slug:"/connector/sink/Clickhouse",permalink:"/docs/2.1.2/connector/sink/Clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/sink/Clickhouse.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/docs/2.1.2/category/sink"},next:{title:"ClickhouseFile",permalink:"/docs/2.1.2/connector/sink/ClickhouseFile"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"bulk_size number",id:"bulk_size-number",level:3},{value:"database string",id:"database-string",level:3},{value:"fields array",id:"fields-array",level:3},{value:"host string",id:"host-string",level:3},{value:"password string",id:"password-string",level:3},{value:"retry number",id:"retry-number",level:3},{value:"retry_codes array",id:"retry_codes-array",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"clickhouse string",id:"clickhouse-string",level:3},{value:"split_mode boolean",id:"split_mode-boolean",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"ClickHouse type comparison table",id:"clickhouse-type-comparison-table",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse"},"Clickhouse"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," to correspond the data source according to the field name and write it into ClickHouse. The corresponding data table needs to be created in advance before use"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Clickhouse"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Clickhouse")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bulk_size"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"20000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_codes"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sharding_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"bulk_size-number"},"bulk_size ","[number]"),(0,l.kt)("p",null,"The number of rows written through ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," each time, the ",(0,l.kt)("inlineCode",{parentName:"p"},"default is 20000")," ."),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"database name"),(0,l.kt)("h3",{id:"fields-array"},"fields ","[array]"),(0,l.kt)("p",null,"The data field that needs to be output to ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse")," , if not configured, it will be automatically adapted according to the data ",(0,l.kt)("inlineCode",{parentName:"p"},"schema")," ."),(0,l.kt)("h3",{id:"host-string"},"host ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse user password")," . This field is only required when the permission is enabled in ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse")," ."),(0,l.kt)("h3",{id:"retry-number"},"retry ","[number]"),(0,l.kt)("p",null,"The number of retries, the default is 1"),(0,l.kt)("h3",{id:"retry_codes-array"},"retry_codes ","[array]"),(0,l.kt)("p",null,"When an exception occurs, the ClickHouse exception error code of the operation will be retried. For a detailed list of error codes, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/blob/master/clickhouse-jdbc/src/main/java/ru/yandex/clickhouse/except/ClickHouseErrorCode.java"},"ClickHouseErrorCode")),(0,l.kt)("p",null,"If multiple retries fail, this batch of data will be discarded, use with caution! !"),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"table name"),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user username, this field is only required when permission is enabled in ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHouse")),(0,l.kt)("h3",{id:"clickhouse-string"},"clickhouse ","[string]"),(0,l.kt)("p",null,"In addition to the above mandatory parameters that must be specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," , users can also specify multiple optional parameters, which cover all the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/blob/master/clickhouse-jdbc/src/main/java/ru/yandex/clickhouse/settings/ClickHouseProperties.java"},"parameters")," provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," ."),(0,l.kt)("p",null,"The way to specify the parameter is to add the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse.")," to the original parameter name. For example, the way to specify ",(0,l.kt)("inlineCode",{parentName:"p"},"socket_timeout")," is: ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse.socket_timeout = 50000")," . If these non-essential parameters are not specified, they will use the default values given by ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc"),"."),(0,l.kt)("h3",{id:"split_mode-boolean"},"split_mode ","[boolean]"),(0,l.kt)("p",null,"This mode only support clickhouse table which engine is 'Distributed'.And ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will be\ncounted."),(0,l.kt)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,l.kt)("p",null,"When use split_mode, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only\nworked when 'split_mode' is true."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.1.2/connector/sink/common-options"},"common options")," for details"),(0,l.kt)("h2",{id:"clickhouse-type-comparison-table"},"ClickHouse type comparison table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Convert plugin conversion goal type"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL conversion expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd"),"\xa0Format string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string()"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"),"\xa0Format string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int8"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int16"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint16"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Float32"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Float64"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"double()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decimal(P, S)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"CAST(source AS DECIMAL(P, S))"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal32(S), Decimal64(S), Decimal128(S)\xa0Can be used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Array(T)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nullable(T)"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on T"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on T"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LowCardinality(T)"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on T"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on T"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse {\n    host = "localhost:8123"\n    clickhouse.socket_timeout = 50000\n    database = "nginx"\n    table = "access_msg"\n    fields = ["date", "datetime", "hostname", "http_code", "data_size", "ua", "request_time"]\n    username = "username"\n    password = "password"\n    bulk_size = 20000\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ClickHouse {\n    host = "localhost:8123"\n    database = "nginx"\n    table = "access_msg"\n    fields = ["date", "datetime", "hostname", "http_code", "data_size", "ua", "request_time"]\n    username = "username"\n    password = "password"\n    bulk_size = 20000\n    retry_codes = [209, 210]\n    retry = 3\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In case of network timeout or network abnormality, retry writing 3 times")))}k.isMDXComponent=!0}}]);