"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40419:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={slug:"spark-execute-tidb",title:"How to use Spark to do OLAP analysis on TiDB",tags:["Spark","TiDB"]},s="How to use Spark to do OLAP analysis on TiDB",u={permalink:"/blog/spark-execute-tidb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-spark-execute-tidb.md",source:"@site/blog/2021-12-30-spark-execute-tidb.md",title:"How to use Spark to do OLAP analysis on TiDB",description:"TiDB is a fusion database product targeting online transaction processing/online analytical processing. Distributed transactions, real-time OLAP and other important features.",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Spark",permalink:"/blog/tags/spark"},{label:"TiDB",permalink:"/blog/tags/ti-db"}],readingTime:6.705,truncated:!1,authors:[],frontMatter:{slug:"spark-execute-tidb",title:"How to use Spark to do OLAP analysis on TiDB",tags:["Spark","TiDB"]},prevItem:{title:"How to quickly write data to Elasticsearch using Spark",permalink:"/blog/spark-execute-elasticsearch"},nextItem:{title:"How to support Spark StructuredStreaming",permalink:"/blog/spark-structured-streaming"}},p={authorsImageUrls:[]},c=[{value:"Operating TiDB with Seatunnel",id:"operating-tidb-with-seatunnel",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Ready to work",id:"ready-to-work",level:4},{value:"1. Introduction to TiDB table structure",id:"1-introduction-to-tidb-table-structure",level:5},{value:"2. Install Seatunnel",id:"2-install-seatunnel",level:5},{value:"Implement the Seatunnel processing flow",id:"implement-the-seatunnel-processing-flow",level:3},{value:"Input (TiDB)",id:"input-tidb",level:5},{value:"Filter",id:"filter",level:5},{value:"Output (TiDB)",id:"output-tidb",level:5},{value:"Spark",id:"spark",level:5},{value:"Run Seatunnel",id:"run-seatunnel",level:4},{value:"test result",id:"test-result",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Contract us",id:"contract-us",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://download.pingcap.com/images/tidb-planet.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb"},"TiDB")," is a fusion database product targeting online transaction processing/online analytical processing. Distributed transactions, real-time OLAP and other important features."),(0,i.kt)("p",null,"TiSpark is a product launched by PingCAP to solve the complex OLAP needs of users. It uses the Spark platform and integrates the advantages of TiKV distributed clusters."),(0,i.kt)("p",null,"Completing OLAP operations with TiSpark directly requires knowledge of Spark and some development work. So, are there some out-of-the-box tools that can help us use TiSpark to complete OLAP analysis on TiDB more quickly?"),(0,i.kt)("p",null,"At present, there is a tool ",(0,i.kt)("strong",{parentName:"p"},"Seatunnel")," in the open source community, the project address ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel"),", which can be based on Spark, Quickly implement TiDB data reading and OLAP analysis based on TiSpark."),(0,i.kt)("h2",{id:"operating-tidb-with-seatunnel"},"Operating TiDB with Seatunnel"),(0,i.kt)("p",null,"We have such a requirement online. Read the website access data of a certain day from TiDB, count the number of visits of each domain name and the status code returned by the service, and finally write the statistical results to another table in TiDB. Let's see how Seatunnel implements such a function."),(0,i.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," is a very easy-to-use, high-performance, real-time data processing product that can deal with massive data. It is built on Spark. Seatunnel has a very rich set of plugins that support reading data from TiDB, Kafka, HDFS, Kudu, perform various data processing, and then write the results to TiDB, ClickHouse, Elasticsearch or Kafka."),(0,i.kt)("h4",{id:"ready-to-work"},"Ready to work"),(0,i.kt)("h5",{id:"1-introduction-to-tidb-table-structure"},"1. Introduction to TiDB table structure"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input")," (table where access logs are stored)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE access_log (\n    domain VARCHAR(255),\n    datetime VARCHAR(63),\n    remote_addr VARCHAR(63),\n    http_ver VARCHAR(15),\n    body_bytes_send INT,\n    status INT,\n    request_time FLOAT,\n    url TEXT\n)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------------+--------------+------+------+---------+-------+\n| Field           | Type         | Null | Key  | Default | Extra |\n+-----------------+--------------+------+------+---------+-------+\n| domain          | varchar(255) | YES  |      | NULL    |       |\n| datetime        | varchar(63)  | YES  |      | NULL    |       |\n| remote_addr     | varchar(63)  | YES  |      | NULL    |       |\n| http_ver        | varchar(15)  | YES  |      | NULL    |       |\n| body_bytes_send | int(11)      | YES  |      | NULL    |       |\n| status          | int(11)      | YES  |      | NULL    |       |\n| request_time    | float        | YES  |      | NULL    |       |\n| url             | text         | YES  |      | NULL    |       |\n+-----------------+--------------+------+------+---------+-------+\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output")," (table where result data is stored)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE access_collect (\n    date VARCHAR(23),\n    domain VARCHAR(63),\n    status INT,\n    hit INT\n)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+--------+-------------+------+------+---------+-------+\n| Field  | Type        | Null | Key  | Default | Extra |\n+--------+-------------+------+------+---------+-------+\n| date   | varchar(23) | YES  |      | NULL    |       |\n| domain | varchar(63) | YES  |      | NULL    |       |\n| status | int(11)     | YES  |      | NULL    |       |\n| hit    | int(11)     | YES  |      | NULL    |       |\n+--------+-------------+------+------+---------+-------+\n")),(0,i.kt)("h5",{id:"2-install-seatunnel"},"2. Install Seatunnel"),(0,i.kt)("p",null,"After we have the input and output tables of TiDB, we need to install Seatunnel. The installation is very simple, and there is no need to configure system environment variables"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare the Spark environment"),(0,i.kt)("li",{parentName:"ol"},"Install Seatunnel"),(0,i.kt)("li",{parentName:"ol"},"Configure Seatunnel")),(0,i.kt)("p",null,"The following are simple steps, the specific installation can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Download and install Spark\ncd /usr/local\nwget https://archive.apache.org/dist/spark/spark-2.1.0/spark-2.1.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.1.0/spark-2.1.0-bin-hadoop2.7.tgz\nwget\n# Download and install seatunnel\nhttps://github.com/InterestingLab/seatunnel/releases/download/v1.2.0/seatunnel-1.2.0.zip\nunzip seatunnel-1.2.0.zip\ncd seatunnel-1.2.0\n\nvim config/seatunnel-env.sh\n# Specify the Spark installation path\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.1.0-bin-hadoop2.7}\n")),(0,i.kt)("h3",{id:"implement-the-seatunnel-processing-flow"},"Implement the Seatunnel processing flow"),(0,i.kt)("p",null,"We only need to write a Seatunnel configuration file to read, process, and write data."),(0,i.kt)("p",null,"The Seatunnel configuration file consists of four parts, ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," part is used to specify the input source of the data, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," part is used to define various data processing and aggregation, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," part is responsible for writing the processed data to the specified database or message queue."),(0,i.kt)("p",null,"The whole processing flow is ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),", which constitutes the processing flow (Pipeline) of Seatunnel."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following is a specific configuration, which is derived from an online practical application, but simplified for demonstration.")),(0,i.kt)("h5",{id:"input-tidb"},"Input (TiDB)"),(0,i.kt)("p",null,"This part of the configuration defines the input source. The following is to read data from a table in TiDB."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'input {\n    tidb {\n        database = "nginx"\n        pre_sql = "select * from nginx.access_log"\n        table_name = "spark_nginx_input"\n    }\n}\n')),(0,i.kt)("h5",{id:"filter"},"Filter"),(0,i.kt)("p",null,"In the Filter section, here we configure a series of transformations, most of the data analysis requirements are completed in the Filter. Seatunnel provides a wealth of plug-ins enough to meet various data analysis needs. Here we complete the data aggregation operation through the SQL plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'filter {\n    sql {\n        table_name = "spark_nginx_log"\n        sql = "select count(*) as hit, domain, status, substring(datetime, 1, 10) as date from spark_nginx_log where substring(datetime, 1, 10)=\'2019-01-20\' group by domain, status, substring(datetime, 1, 10)"\n    }\n}\n')),(0,i.kt)("h5",{id:"output-tidb"},"Output (TiDB)"),(0,i.kt)("p",null,"Finally, we write the processed results to another table in TiDB. TiDB Output is implemented through JDBC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'output {\n    tidb {\n        url = "jdbc:mysql://127.0.0.1:4000/nginx?useUnicode=true&characterEncoding=utf8"\n        table = "access_collect"\n        user = "username"\n        password = "password"\n        save_mode = "append"\n    }\n}\n')),(0,i.kt)("h5",{id:"spark"},"Spark"),(0,i.kt)("p",null,"This part is related to Spark configuration. It mainly configures the resource size required for Spark execution and other Spark configurations."),(0,i.kt)("p",null,"Our TiDB Input plugin is implemented based on TiSpark, which relies on TiKV cluster and Placement Driver (PD). So we need to specify PD node information and TiSpark related configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"spark.tispark.pd.addresses")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spark.sql.extensions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel-tidb"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  # Set for TiSpark\n  spark.tispark.pd.addresses = "localhost:2379"\n  spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n')),(0,i.kt)("h4",{id:"run-seatunnel"},"Run Seatunnel"),(0,i.kt)("p",null,"We combine the above four parts into our final configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/tidb.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'spark {\n    spark.app.name = "seatunnel-tidb"\n    spark.executor.instances = 2\n    spark.executor.cores = 1\n    spark.executor.memory = "1g"\n    # Set for TiSpark\n    spark.tispark.pd.addresses = "localhost:2379"\n    spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\ninput {\n    tidb {\n        database = "nginx"\n        pre_sql = "select * from nginx.access_log"\n        table_name = "spark_table"\n    }\n}\nfilter {\n    sql {\n        table_name = "spark_nginx_log"\n        sql = "select count(*) as hit, domain, status, substring(datetime, 1, 10) as date from spark_nginx_log where substring(datetime, 1, 10)=\'2019-01-20\' group by domain, status, substring(datetime, 1, 10)"\n    }\n}\noutput {\n    tidb {\n        url = "jdbc:mysql://127.0.0.1:4000/nginx?useUnicode=true&characterEncoding=utf8"\n        table = "access_collect"\n        user = "username"\n        password = "password"\n        save_mode = "append"\n    }\n}\n')),(0,i.kt)("p",null,"Execute the command, specify the configuration file, and run Seatunnel to implement our data processing logic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Local")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode client --master 'local","[2]","'")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"yarn-client")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode client --master yarn")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"yarn-cluster")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"./bin/start-seatunnel.sh --config config/tidb.conf --deploy-mode cluster -master yarn")),(0,i.kt)("p",null,"If it is a local test and verification logic, you can use the local mode (Local). Generally, in the production environment, the ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn-client")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn-cluster")," mode is used."),(0,i.kt)("h4",{id:"test-result"},"test result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select * from access_collect;\n+------------+--------+--------+------+\n| date       | domain | status | hit  |\n+------------+--------+--------+------+\n| 2019-01-20 | b.com  |    200 |   63 |\n| 2019-01-20 | a.com  |    200 |   85 |\n+------------+--------+--------+------+\n2 rows in set (0.21 sec)\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we introduced how to use Seatunnel to read data from TiDB, do simple data processing and write it to another table in TiDB. Data can be imported quickly with only one configuration file without writing any code."),(0,i.kt)("p",null,"In addition to supporting TiDB data sources, Seatunnel also supports Elasticsearch, Kafka, Kudu, ClickHouse and other data sources."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"At the same time, we are developing an important function, which is to use the transaction features of TiDB in Seatunnel to realize streaming data processing from Kafka to TiDB, and support Exactly-Once data from end (Kafka) to end (TiDB). consistency. ")),(0,i.kt)("p",null,"If you want to know more functions and cases of Seatunnel combined with TiDB, ClickHouse, Elasticsearch and Kafka, you can go directly to the official website ",(0,i.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,i.kt)("h2",{id:"contract-us"},"Contract us"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mailing list : ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Send anything to ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org")," and subscribe to the mailing list according to the replies."),(0,i.kt)("li",{parentName:"ul"},"Slack: Send a ",(0,i.kt)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," email to the mailing list (",(0,i.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), and we will invite you to join (please make sure you are registered with Slack before doing so)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"bilibili B station video"))),(0,i.kt)("p",null,"-- Power by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}m.isMDXComponent=!0}}]);