"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99054],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},850:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},s="JDBC",p={unversionedId:"connector-v2/sink/Jdbc",id:"connector-v2/sink/Jdbc",title:"JDBC",description:"JDBC sink connector",source:"@site/docs/connector-v2/sink/Jdbc.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Jdbc",permalink:"/docs/connector-v2/sink/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Jdbc.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/connector-v2/sink/IoTDB"},next:{title:"Kafka",permalink:"/docs/connector-v2/sink/Kafka"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"compatible_mode string",id:"compatible_mode-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"primary_keys array",id:"primary_keys-array",level:3},{value:"support_upsert_by_query_primary_key_exist boolean",id:"support_upsert_by_query_primary_key_exist-boolean",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"max_retriesint",id:"max_retriesint",level:3},{value:"batch_sizeint",id:"batch_sizeint",level:3},{value:"is_exactly_onceboolean",id:"is_exactly_onceboolean",level:3},{value:"generate_sink_sqlboolean",id:"generate_sink_sqlboolean",level:3},{value:"xa_data_source_class_namestring",id:"xa_data_source_class_namestring",level:3},{value:"max_commit_attemptsint",id:"max_commit_attemptsint",level:3},{value:"transaction_timeout_secint",id:"transaction_timeout_secint",level:3},{value:"auto_commit boolean",id:"auto_commit-boolean",level:3},{value:"field_ide String",id:"field_ide-string",level:3},{value:"properties",id:"properties",level:3},{value:"common options",id:"common-options",level:3},{value:"schema_save_mode Enum",id:"schema_save_mode-enum",level:3},{value:"data_save_mode Enum",id:"data_save_mode-enum",level:3},{value:"custom_sql String",id:"custom_sql-string",level:3},{value:"enable_upsert boolean",id:"enable_upsert-boolean",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],c={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"JDBC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the jdbc driver jar package has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.kt)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the jdbc driver jar package has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compatible_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_ide"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"APPEND_DATA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_upsert"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,l.kt)("h3",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"userName"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Use this sql write upstream input datas to database. e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT ...")),(0,l.kt)("h3",{id:"compatible_mode-string"},"compatible_mode ","[string]"),(0,l.kt)("p",null,"The compatible mode of database, required when the database supports multiple compatible modes. For example, when using OceanBase database, you need to set it to 'mysql' or 'oracle'."),(0,l.kt)("p",null,"Postgres 9.5 version or below,please set it to ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresLow")," to support cdc"),(0,l.kt)("h3",{id:"database-string"},"database ","[string]"),(0,l.kt)("p",null,"Use this ",(0,l.kt)("inlineCode",{parentName:"p"},"database")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,l.kt)("p",null,"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"database")," and this ",(0,l.kt)("inlineCode",{parentName:"p"},"table-name")," auto-generate sql and receive upstream input datas write to database."),(0,l.kt)("p",null,"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," and has a higher priority."),(0,l.kt)("p",null,"The table parameter can fill in the name of an unwilling table, which will eventually be used as the table name of the creation table, and supports variables (",(0,l.kt)("inlineCode",{parentName:"p"},"${table_name}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"${schema_name}"),"). Replacement rules: ",(0,l.kt)("inlineCode",{parentName:"p"},"${schema_name}")," will replace the SCHEMA name passed to the target side, and ",(0,l.kt)("inlineCode",{parentName:"p"},"${table_name}")," will replace the name of the table passed to the table at the target side."),(0,l.kt)("p",null,"mysql sink for example:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"test",(0,l.kt)("em",{parentName:"li"},"${schema_name}"),"${table_name}_test"),(0,l.kt)("li",{parentName:"ol"},"sink_sinktable"),(0,l.kt)("li",{parentName:"ol"},"ss_${table_name}")),(0,l.kt)("p",null,"pgsql (Oracle Sqlserver ...) Sink for example:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"${schema_name}.${table_name} _test"),(0,l.kt)("li",{parentName:"ol"},"dbo.tt_${table_name} _sink"),(0,l.kt)("li",{parentName:"ol"},"public.sink_table")),(0,l.kt)("p",null,"Tip: If the target database has the concept of SCHEMA, the table parameter must be written as ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.xxx")),(0,l.kt)("h3",{id:"primary_keys-array"},"primary_keys ","[array]"),(0,l.kt)("p",null,"This option is used to support operations such as ",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," when automatically generate sql."),(0,l.kt)("h3",{id:"support_upsert_by_query_primary_key_exist-boolean"},"support_upsert_by_query_primary_key_exist ","[boolean]"),(0,l.kt)("p",null,"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupported upsert syntax.\n",(0,l.kt)("strong",{parentName:"p"},"Note"),": that this method has low performance"),(0,l.kt)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,l.kt)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,l.kt)("h3",{id:"max_retriesint"},"max_retries","[int]"),(0,l.kt)("p",null,"The number of retries to submit failed (executeBatch)"),(0,l.kt)("h3",{id:"batch_sizeint"},"batch_size","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffered records reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval"),"\n, the data will be flushed into the database"),(0,l.kt)("h3",{id:"is_exactly_onceboolean"},"is_exactly_once","[boolean]"),(0,l.kt)("p",null,"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to\nset ",(0,l.kt)("inlineCode",{parentName:"p"},"xa_data_source_class_name"),"."),(0,l.kt)("h3",{id:"generate_sink_sqlboolean"},"generate_sink_sql","[boolean]"),(0,l.kt)("p",null,"Generate sql statements based on the database table you want to write to"),(0,l.kt)("h3",{id:"xa_data_source_class_namestring"},"xa_data_source_class_name","[string]"),(0,l.kt)("p",null,"The xa data source class name of the database Driver, for example, mysql is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.MysqlXADataSource"),", and\nplease refer to appendix for other data sources"),(0,l.kt)("h3",{id:"max_commit_attemptsint"},"max_commit_attempts","[int]"),(0,l.kt)("p",null,"The number of retries for transaction commit failures"),(0,l.kt)("h3",{id:"transaction_timeout_secint"},"transaction_timeout_sec","[int]"),(0,l.kt)("p",null,"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect\nexactly-once semantics"),(0,l.kt)("h3",{id:"auto_commit-boolean"},"auto_commit ","[boolean]"),(0,l.kt)("p",null,"Automatic transaction commit is enabled by default"),(0,l.kt)("h3",{id:"field_ide-string"},"field_ide ","[String]"),(0,l.kt)("p",null,'The field "field_ide" is used to identify whether the field needs to be converted to uppercase or lowercase when\nsynchronizing from the source to the sink. "ORIGINAL" indicates no conversion is needed, "UPPERCASE" indicates\nconversion to uppercase, and "LOWERCASE" indicates conversion to lowercase.'),(0,l.kt)("h3",{id:"properties"},"properties"),(0,l.kt)("p",null,"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,l.kt)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.kt)("h3",{id:"schema_save_mode-enum"},"schema_save_mode ","[Enum]"),(0,l.kt)("p",null,"Before the synchronous task is turned on, different treatment schemes are selected for the existing surface structure of the target side.",(0,l.kt)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1aWill create when the table does not exist, delete and rebuild when the table is saved",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1aWill Created when the table does not exist, skipped when the table is saved",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1aError will be reported when the table does not exist"),(0,l.kt)("h3",{id:"data_save_mode-enum"},"data_save_mode ","[Enum]"),(0,l.kt)("p",null,"Before the synchronous task is turned on, different processing schemes are selected for data existing data on the target side.",(0,l.kt)("br",{parentName:"p"}),"\n","Option introduction\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a Preserve database structure and delete data",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1aPreserve database structure, preserve data",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1aUser defined processing",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1aWhen there is data, an error is reported"),(0,l.kt)("h3",{id:"custom_sql-string"},"custom_sql ","[String]"),(0,l.kt)("p",null,"When data_save_mode selects CUSTOM_PROCESSING, you should fill in the CUSTOM_SQL parameter. This parameter usually fills in a SQL that can be executed. SQL will be executed before synchronization tasks."),(0,l.kt)("h3",{id:"enable_upsert-boolean"},"enable_upsert ","[boolean]"),(0,l.kt)("p",null,"Enable upsert by primary_keys exist, If the task has no key duplicate data, setting this parameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," can speed up data import"),(0,l.kt)("h2",{id:"tips"},"tips"),(0,l.kt)("p",null,'In the case of is_exactly_once = "true", Xa transactions are used. This requires database support, and some databases require some setup :\n1 postgres needs to set ',(0,l.kt)("inlineCode",{parentName:"p"},"max_prepared_transactions > 1")," such as ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM set max_prepared_transactions to 10"),".\n2 mysql version need >= ",(0,l.kt)("inlineCode",{parentName:"p"},"8.0.29")," and Non-root users need to grant ",(0,l.kt)("inlineCode",{parentName:"p"},"XA_RECOVER_ADMIN")," permissions. such as ",(0,l.kt)("inlineCode",{parentName:"p"},"grant XA_RECOVER_ADMIN on test_db.* to 'user1'@'%'"),".\n3 mysql can try to add ",(0,l.kt)("inlineCode",{parentName:"p"},"rewriteBatchedStatements=true")," parameter in url for better performance."),(0,l.kt)("h2",{id:"appendix"},"appendix"),(0,l.kt)("p",null,"there are some reference value for params above."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"driver"),(0,l.kt)("th",{parentName:"tr",align:null},"url"),(0,l.kt)("th",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.kt)("th",{parentName:"tr",align:null},"maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.MysqlXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.xa.PGXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DM"),(0,l.kt)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,l.kt)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmdbXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Phoenix"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.phoenix.queryserver.client.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,l.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,l.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@localhost:1521/xepdb1"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle.jdbc.xa.OracleXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqlite"),(0,l.kt)("td",{parentName:"tr",align:null},"org.sqlite.JDBC"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlite:test.db"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"},"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GBase8a"),(0,l.kt)("td",{parentName:"tr",align:null},"com.gbase.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:gbase://e2e_gbase8aDb:5258/test"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"},"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StarRocks"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db2"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:db2://localhost:50000/testdb"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2XADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"},"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"saphana"),(0,l.kt)("td",{parentName:"tr",align:null},"com.sap.db.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sap://localhost:39015"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"},"https://mvnrepository.com/artifact/com.sap.cloud.db.jdbc/ngdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Doris"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"teradata"),(0,l.kt)("td",{parentName:"tr",align:null},"com.teradata.jdbc.TeraDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:teradata://localhost/DBS_PORT=1025,DATABASE=test"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"},"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,l.kt)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc42.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/testdb"),(0,l.kt)("td",{parentName:"tr",align:null},"com.amazon.redshift.xa.RedshiftXADataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,l.kt)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vertica"),(0,l.kt)("td",{parentName:"tr",align:null},"com.vertica.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:vertica://localhost:5433"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"},"https://repo1.maven.org/maven2/com/vertica/jdbc/vertica-jdbc/12.0.3-0/vertica-jdbc-12.0.3-0.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kingbase"),(0,l.kt)("td",{parentName:"tr",align:null},"com.kingbase8.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:kingbase8://localhost:54321/db_test"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/cn/com/kingbase/kingbase8/8.6.0/kingbase8-8.6.0.jar"},"https://repo1.maven.org/maven2/cn/com/kingbase/kingbase8/8.6.0/kingbase8-8.6.0.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OceanBase"),(0,l.kt)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2881"),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"},"https://repo1.maven.org/maven2/com/oceanbase/oceanbase-client/2.4.3/oceanbase-client-2.4.3.jar"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'jdbc {\n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n}\n\n')),(0,l.kt)("p",null,"Exactly-once"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'jdbc {\n\n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n\n    max_retries = 0\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n\n    is_exactly_once = "true"\n\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n}\n')),(0,l.kt)("p",null,"CDC(Change data capture) event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        \n        database = "sink_database"\n        table = "sink_table"\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,l.kt)("p",null,"Add saveMode function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        \n        database = "sink_database"\n        table = "sink_table"\n        primary_keys = ["key1", "key2", ...]\n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode="APPEND_DATA"\n    }\n}\n')),(0,l.kt)("p",null,"Postgresql 9.5 version below support CDC(Change data capture) event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:postgresql://localhost:5432"\n        driver = "org.postgresql.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode="postgresLow"\n        database = "sink_database"\n        table = "sink_table"\n        support_upsert_by_query_primary_key_exist = true\n        generate_sink_sql = true\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Console Sink Connector")),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix JDBC split exception (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2904"},"2904"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Phoenix JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2499"},"2499"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support SQL Server JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2646"},"2646"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Oracle JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2550"},"2550"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support StarRocks JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3060"},"3060"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support DB2 JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2410"},"2410"),")")),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/issues/3378"},"3378"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Teradata JDBC\u3000Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3362"},"3362"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Sqlite JDBC Sink (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3089"},"3089"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/issues/3378"},"3378"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Doris JDBC Sink"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Redshift JDBC Sink(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3615"},"#3615"),")"),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Add config item enable upsert by query(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3708"},"#3708"),")"),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Add database field to sink config(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4199"},"#4199"),")"),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Add Vertica connector(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4303"},"#4303"),")")))}u.isMDXComponent=!0}}]);