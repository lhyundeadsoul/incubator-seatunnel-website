"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6525],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2075:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="Neo4j",u={unversionedId:"connector-v2/sink/Neo4j",id:"connector-v2/sink/Neo4j",title:"Neo4j",description:"Neo4j sink connector",source:"@site/docs/connector-v2/sink/Neo4j.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Neo4j",permalink:"/zh-CN/docs/connector-v2/sink/Neo4j",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Neo4j.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/zh-CN/docs/connector-v2/sink/Mysql"},next:{title:"OssFile",permalink:"/zh-CN/docs/connector-v2/sink/OssFile"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_batch_sizeInteger",id:"max_batch_sizeinteger",level:3},{value:"write_mode",id:"write_mode",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"queryParamPosition object",id:"queryparamposition-object",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"common options",id:"common-options",level:3},{value:"WriteOneByOneExample",id:"writeonebyoneexample",level:2},{value:"WriteBatchExample",id:"writebatchexample",level:2}],c={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neo4j"},"Neo4j"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Neo4j sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write data to Neo4j."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"OneByOne")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bearer_token"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryParamPosition"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,i.kt)("td",{parentName:"tr",align:null},"Long"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Long"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,i.kt)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,i.kt)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,i.kt)("h3",{id:"username-string"},"username ","[string]"),(0,i.kt)("p",null,"username of the Neo4j"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"password of the Neo4j. required if ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," is provided"),(0,i.kt)("h3",{id:"max_batch_sizeinteger"},"max_batch_size","[Integer]"),(0,i.kt)("p",null,"max_batch_size refers to the maximum number of data entries that can be written in a single transaction when writing to a database."),(0,i.kt)("h3",{id:"write_mode"},"write_mode"),(0,i.kt)("p",null,'The default value is oneByOne, or set it to "Batch" if you want to have the ability to write in batches'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"unwind $ttt as row create (n:Label) set n.name = row.name,n.age = rw.age\n")),(0,i.kt)("p",null,'"ttt" represents a batch of data.,"ttt" can be any arbitrary string as long as it matches the configured "batch_data_variable".'),(0,i.kt)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,i.kt)("p",null,"base64 encoded bearer token of the Neo4j. for Auth."),(0,i.kt)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,i.kt)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,i.kt)("h3",{id:"database-string"},"database ","[string]"),(0,i.kt)("p",null,"database name."),(0,i.kt)("h3",{id:"query-string"},"query ","[string]"),(0,i.kt)("p",null,"Query statement. contain parameter placeholders that are substituted with the corresponding values at runtime"),(0,i.kt)("h3",{id:"queryparamposition-object"},"queryParamPosition ","[object]"),(0,i.kt)("p",null,"position mapping information for query parameters."),(0,i.kt)("p",null,"key name is parameter placeholder name."),(0,i.kt)("p",null,"associated value is position of field in input data row."),(0,i.kt)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,i.kt)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,i.kt)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,i.kt)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"writeonebyoneexample"},"WriteOneByOneExample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "neo4j://localhost:7687"\n    username = "neo4j"\n    password = "1234"\n    database = "neo4j"\n\n    max_transaction_retry_time = 10\n    max_connection_timeout = 10\n\n    query = "CREATE (a:Person {name: $name, age: $age})"\n    queryParamPosition = {\n        name = 0\n        age = 1\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"writebatchexample"},"WriteBatchExample"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The unwind keyword provided by cypher supports batch writing, and the default variable for a batch of data is batch. If you write a batch write statement, then you should declare cypher:unwind $batch as row to do someting"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "bolt://localhost:7687"\n    username = "neo4j"\n    password = "neo4j"\n    database = "neo4j"\n    max_batch_size = 1000\n    write_mode = "BATCH"\n'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'max_transaction_retry_time = 3\nmax_connection_timeout = 10\n\nquery = "unwind $batch as row  create(n:MyLabel) set n.name = row.name,n.age = row.age"\n')),(0,i.kt)("p",null,"  }\n}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n## Changelog\n\n### 2.2.0-beta 2022-09-26\n\n- Add Neo4j Sink Connector\n\n### issue ##4835\n\n- Sink supports batch write\n")))}d.isMDXComponent=!0}}]);