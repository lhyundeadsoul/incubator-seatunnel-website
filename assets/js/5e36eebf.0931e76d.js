"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[90966],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6366:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="SQL Server CDC",p={unversionedId:"connector-v2/source/SqlServer-CDC",id:"connector-v2/source/SqlServer-CDC",title:"SQL Server CDC",description:"Sql Server CDC source connector",source:"@site/docs/connector-v2/source/SqlServer-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SqlServer-CDC",permalink:"/docs/connector-v2/source/SqlServer-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/SqlServer-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/docs/connector-v2/source/Socket"},next:{title:"SQL Server",permalink:"/docs/connector-v2/source/SqlServer"}},u={},d=[{value:"Support SQL Server Version",id:"support-sql-server-version",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:4},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Enable Sql Server CDC",id:"enable-sql-server-cdc",level:3},{value:"Task Example",id:"task-example",level:2},{value:"initiali read Simple",id:"initiali-read-simple",level:3},{value:"increment read Simple",id:"increment-read-simple",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql-server-cdc"},"SQL Server CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sql Server CDC source connector")),(0,l.kt)("h2",{id:"support-sql-server-version"},"Support SQL Server Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"server:2019 (Or later version for information only)")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.kt)("br",null),"\nFlink ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The Sql Server CDC connector allows for reading snapshot data and incremental data from SqlServer database. This document\ndescribes how to setup the Sql Server CDC connector to run SQL queries against SqlServer databases."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SqlServer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null," server:2019 (Or later version for information only)")),(0,l.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433;databaseName=column_type_test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))))),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,l.kt)("h4",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.kt)("h4",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SQLserver Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR",(0,l.kt)("br",null),"VARCHAR",(0,l.kt)("br",null),"NCHAR",(0,l.kt)("br",null),"NVARCHAR",(0,l.kt)("br",null),"TEXT",(0,l.kt)("br",null),"NTEXT",(0,l.kt)("br",null),"XML"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY",(0,l.kt)("br",null),"VARBINARY",(0,l.kt)("br",null),"IMAGE"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER",(0,l.kt)("br",null),"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT",(0,l.kt)("br",null),"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT(1~24)",(0,l.kt)("br",null),"REAL"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.kt)("br",null),"FLOAT(>24)"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(p,s)",(0,l.kt)("br",null),"DECIMAL(p,s)",(0,l.kt)("br",null),"MONEY",(0,l.kt)("br",null),"SMALLMONEY"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME(s)",(0,l.kt)("br",null),"DATETIME2(s)",(0,l.kt)("br",null),"DATETIMEOFFSET(s)",(0,l.kt)("br",null),"SMALLDATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN",(0,l.kt)("br",null),"BIT",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")))),(0,l.kt)("h2",{id:"source-options"},"Source Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name is a combination of schema name and table name (databaseName.schemaName.tableName).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names-config"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys":','["key1"]',"}]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'URL has to be with database, like "jdbc:sqlserver://localhost:1433;databaseName=test".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL"),(0,l.kt)("td",{parentName:"tr",align:null},'Optional startup mode for SqlServer CDC consumer, valid enumerations are "initial", "earliest", "latest" and "specific".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified epoch timestamp (in milliseconds).",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when")," the ",(0,l.kt)("strong",{parentName:"td"},'"startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file name. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file position.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER"),(0,l.kt)("td",{parentName:"tr",align:null},'Optional stop mode for SqlServer CDC consumer, valid enumerations are "never".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified epoch timestamp (in milliseconds). ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file name.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file position.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"incremental.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of parallel readers in the incremental phase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096"),(0,l.kt)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshotof table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC"),(0,l.kt)("td",{parentName:"tr",align:null},"The session time zone in database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30s"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The connection pool size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium.*"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from SqlServer server.",(0,l.kt)("br",null),"See more about",(0,l.kt)("br",null),"the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/debezium/debezium/blob/1.6/documentation/modules/ROOT/pages/connectors/sqlserver.adoc#connector-properties"},"Debezium's SqlServer Connector properties"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},'Optional output format for SqlServer CDC, valid enumerations are "DEFAULT"\u3001"COMPATIBLE_DEBEZIUM_JSON".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,l.kt)("h3",{id:"enable-sql-server-cdc"},"Enable Sql Server CDC"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Check whether the CDC Agent is enabled")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"EXEC xp_servicecontrol N'querystate', N'SQLServerAGENT'; ",(0,l.kt)("br",null),"\nIf the result is running, prove that it is enabled. Otherwise, you need to manually enable it")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Enable the CDC Agent")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"/opt/mssql/bin/mssql-conf setup")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"The result is as follows")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1) Evaluation (free, no production use rights, 180-day limit)\n2) Developer (free, no production use rights)\n3) Express (free)\n4) Web (PAID)\n5) Standard (PAID)\n6) Enterprise (PAID)\n7) Enterprise Core (PAID)\n8) I bought a license through a retail sales channel and have a product key to enter.")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Set the CDC at the library level\nSet the library level below to enable CDC. At this level, all tables under the libraries of the enabled CDC automatically enable CDC")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"USE TestDB; -- Replace with the actual database name ",(0,l.kt)("br",null),"\nEXEC sys.sp_cdc_enable_db;",(0,l.kt)("br",null),"\nSELECT name, is_tracked_by_cdc  FROM sys.tables  WHERE name = 'table'; -- table Replace with the name of the table you want to check")),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"initiali-read-simple"},"initiali read Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is a stream mode cdc initializes read table data will be read incrementally after successful read The following sql DDL is for reference only")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  SqlServer-CDC {\n    result_table_name = "customers"\n    username = "sa"\n    password = "Y.sa123456"\n    startup.mode="initial"\n    database-names = ["column_type_test"]\n    table-names = ["column_type_test.dbo.full_types"]\n    base-url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n  }\n}\n\ntransform {\n}\n\nsink {\n  console {\n    source_table_name = "customers"\n  }\n')),(0,l.kt)("h3",{id:"increment-read-simple"},"increment read Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is an incremental read that reads the changed data for printing")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  SqlServer-CDC {\n   # Set up accurate one read\n    exactly_once=true \n    result_table_name = "customers"\n    username = "sa"\n    password = "Y.sa123456"\n    startup.mode="latest"\n    database-names = ["column_type_test"]\n    table-names = ["column_type_test.dbo.full_types"]\n    base-url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n  }\n}\n\ntransform {\n}\n\nsink {\n  console {\n    source_table_name = "customers"\n  }\n')),(0,l.kt)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  SqlServer-CDC {\n    base-url = "jdbc:sqlserver://localhost:1433;databaseName=column_type_test"\n    username = "sa"\n    password = "Y.sa123456"\n    database-names = ["column_type_test"]\n    \n    table-names = ["column_type_test.dbo.simple_types", "column_type_test.dbo.full_types"]\n    table-names-config = [\n      {\n        table = "column_type_test.dbo.full_types"\n        primaryKeys = ["id"]\n      }\n    ]\n  }\n}\n\nsink {\n  console {\n  }\n')))}c.isMDXComponent=!0}}]);