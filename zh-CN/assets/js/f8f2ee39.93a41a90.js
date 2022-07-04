"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1747],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),k=a,d=f["".concat(c,".").concat(k)]||f[k]||u[k]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53443:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return k}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},c="Flink SQL Kafka Connector",s={unversionedId:"connector/flink-sql/Kafka",id:"version-2.1.2/connector/flink-sql/Kafka",title:"Flink SQL Kafka Connector",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/flink-sql/Kafka.md",sourceDirName:"connector/flink-sql",slug:"/connector/flink-sql/Kafka",permalink:"/zh-CN/docs/2.1.2/connector/flink-sql/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/flink-sql/Kafka.md",tags:[],version:"2.1.2",frontMatter:{}},p={},u=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"1. kafka prepare",id:"1-kafka-prepare",level:3},{value:"2. prepare seatunnel configuration",id:"2-prepare-seatunnel-configuration",level:3},{value:"3. start flink local cluster",id:"3-start-flink-local-cluster",level:3},{value:"4. start Flink SQL job",id:"4-start-flink-sql-job",level:3},{value:"5. verify result",id:"5-verify-result",level:3}],f={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flink-sql-kafka-connector"},"Flink SQL Kafka Connector"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"With kafka connector, we can read data from kafka and write data to kafka using Flink SQL. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/"},"Kafka connector")," for more details."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let us have a brief example to show how to use the connector from end to end."),(0,o.kt)("h3",{id:"1-kafka-prepare"},"1. kafka prepare"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart"},"Kafka QuickStart")," to prepare kafka environment and produce data like following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/kafka-console-producer.sh --topic <topic-name> --bootstrap-server localhost:9092\n")),(0,o.kt)("p",null,"After executing the command, we will come to the interactive mode. Print the following message to send data to kafka."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"id":1,"name":"abc"}\n>{"id":2,"name":"def"}\n>{"id":3,"name":"dfs"}\n>{"id":4,"name":"eret"}\n>{"id":5,"name":"yui"}\n')),(0,o.kt)("h3",{id:"2-prepare-seatunnel-configuration"},"2. prepare seatunnel configuration"),(0,o.kt)("p",null,"Here is a simple example of seatunnel configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET table.dml-sync = true;\n\nCREATE TABLE events (\n    id INT,\n    name STRING\n) WITH (\n    'connector' = 'kafka',\n    'topic'='<topic-name>',\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'properties.group.id' = 'testGroup',\n    'scan.startup.mode' = 'earliest-offset',\n    'format' = 'json'\n);\n\nCREATE TABLE print_table (\n    id INT,\n    name STRING\n) WITH (\n    'connector' = 'print',\n    'sink.parallelism' = '1'\n);\n\nINSERT INTO print_table SELECT * FROM events;\n")),(0,o.kt)("h3",{id:"3-start-flink-local-cluster"},"3. start flink local cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ${FLINK_HOME}/bin/start-cluster.sh\n")),(0,o.kt)("h3",{id:"4-start-flink-sql-job"},"4. start Flink SQL job"),(0,o.kt)("p",null,"Execute the following command in seatunnel home path to start the Flink SQL job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-seatunnel-sql.sh -c config/kafka.sql.conf\n")),(0,o.kt)("h3",{id:"5-verify-result"},"5. verify result"),(0,o.kt)("p",null,"After the job submitted, we can see the data printing by connector 'print' in taskmanager's log ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"+I[1, abc]\n+I[2, def]\n+I[3, dfs]\n+I[4, eret]\n+I[5, yui]\n")))}k.isMDXComponent=!0}}]);