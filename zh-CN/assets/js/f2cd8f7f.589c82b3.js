"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[70437],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=l,c=k["".concat(p,".").concat(u)]||k[u]||d[u]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},96808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],o={},p="ObsFile",s={unversionedId:"connector-v2/sink/ObsFile",id:"connector-v2/sink/ObsFile",title:"ObsFile",description:"Obs file sink connector",source:"@site/docs/connector-v2/sink/ObsFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/ObsFile",permalink:"/zh-CN/docs/connector-v2/sink/ObsFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/ObsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Neo4j",permalink:"/zh-CN/docs/connector-v2/sink/Neo4j"},next:{title:"OceanBase",permalink:"/zh-CN/docs/connector-v2/sink/OceanBase"}},m={},d=[{value:"Support those engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Required Jar List",id:"required-jar-list",level:2},{value:"Options",id:"options",level:2},{value:"Tips",id:"tips",level:3},{value:'<span id="file_name_expression"> file_name_expression </span>',id:"-file_name_expression-",level:4},{value:'<span id="filename_time_format"> filename_time_format </span>',id:"-filename_time_format-",level:4},{value:'<span id="file_format_type"> file_format_type </span>',id:"-file_format_type-",level:4},{value:'<span id="partition_dir_expression"> partition_dir_expression </span>',id:"-partition_dir_expression-",level:4},{value:'<span id="is_partition_field_write_in_file"> is_partition_field_write_in_file </span>',id:"-is_partition_field_write_in_file-",level:4},{value:'<span id="sink_columns"> sink_columns </span>',id:"-sink_columns-",level:4},{value:'<span id="is_enable_transaction"> is_enable_transaction </span>',id:"-is_enable_transaction-",level:4},{value:'<span id="batch_size"> batch_size </span>',id:"-batch_size-",level:4},{value:'<span id="compress_codec"> compress_codec </span>',id:"-compress_codec-",level:4},{value:'<span id="common_options"> common options </span>',id:"-common-options-",level:4},{value:"Task Example",id:"task-example",level:2},{value:"text file",id:"text-file",level:3},{value:"parquet file",id:"parquet-file",level:3},{value:"orc file",id:"orc-file",level:3},{value:"json file",id:"json-file",level:3},{value:"excel file",id:"excel-file",level:3},{value:"csv file",id:"csv-file",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],k={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"obsfile"},"ObsFile"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Obs file sink connector")),(0,i.kt)("h2",{id:"support-those-engines"},"Support those engines"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Spark"),(0,i.kt)("p",{parentName:"blockquote"},"Flink"),(0,i.kt)("p",{parentName:"blockquote"},"Seatunnel Zeta")),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to huawei cloud obs file system."),(0,i.kt)("p",null,"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,i.kt)("p",null,"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,i.kt)("p",null,"We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to OBS and this connector need some hadoop dependencies.\nIt only supports hadoop version ",(0,i.kt)("strong",{parentName:"p"},"2.9.X+"),"."),(0,i.kt)("h2",{id:"required-jar-list"},"Required Jar List"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"jar"),(0,i.kt)("th",{parentName:"tr",align:null},"supported versions"),(0,i.kt)("th",{parentName:"tr",align:null},"maven"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hadoop-huaweicloud"),(0,i.kt)("td",{parentName:"tr",align:null},"support version >= 3.1.1.29"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://repo.huaweicloud.com/repository/maven/huaweicloudsdk/org/apache/hadoop/hadoop-huaweicloud/"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"esdk-obs-java"),(0,i.kt)("td",{parentName:"tr",align:null},"support version >= 3.19.7.3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://repo.huaweicloud.com/repository/maven/huaweicloudsdk/com/huawei/storage/esdk-obs-java/"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okhttp"),(0,i.kt)("td",{parentName:"tr",align:null},"support version >= 3.11.0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okio"),(0,i.kt)("td",{parentName:"tr",align:null},"support version >= 1.14.0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/squareup/okio/okio/"},"Download"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy them to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory."),(0,i.kt)("p",{parentName:"blockquote"},"And copy all jars to $SEATNUNNEL_HOME/lib/")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The target dir path.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bucket"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The bucket address of obs file system, for example: ",(0,i.kt)("inlineCode",{parentName:"td"},"obs://obs-bucket-name"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The access key of obs file system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The access secret of obs file system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The endpoint of obs file system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom_filename"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether you need custom the filename.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,i.kt)("td",{parentName:"tr",align:null},"Describes the file expression which will be created into the ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),". Only used when custom_filename is true. ",(0,i.kt)("a",{parentName:"td",href:"#file_name_expression"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the time format of the ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),". Only used when custom_filename is true. ",(0,i.kt)("a",{parentName:"td",href:"#filename_time_format"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_format_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"csv"'),(0,i.kt)("td",{parentName:"tr",align:null},"Supported file types. ",(0,i.kt)("a",{parentName:"td",href:"#file_format_type"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"'\\001'"),(0,i.kt)("td",{parentName:"tr",align:null},"The separator between columns in a row of data.Only used when file_format is text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"\\n"'),(0,i.kt)("td",{parentName:"tr",align:null},"The separator between rows in a file. Only needed by ",(0,i.kt)("inlineCode",{parentName:"td"},"text")," file format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"have_partition"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Partition data based on selected fields. Only used then have_partition is true.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true.",(0,i.kt)("a",{parentName:"td",href:"#partition_dir_expression"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true.",(0,i.kt)("a",{parentName:"td",href:"#is_partition_field_write_in_file"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns.",(0,i.kt)("a",{parentName:"td",href:"#sink_columns"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#is_enable_transaction"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1000000"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#batch_size"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#compress_codec"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common_options"},"Tips"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"When File Format is Excel,The maximum number of data items that can be cached in the memory.Only used when file_format is excel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sheet_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,i.kt)("td",{parentName:"tr",align:null},"Writer the sheet of the workbook. Only used when file_format is excel.")))),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("h4",{id:"-file_name_expression-"},(0,i.kt)("span",{id:"file_name_expression"}," file_name_expression ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,i.kt)("p",{parentName:"blockquote"},"We can add the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),","),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format"),".")),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("h4",{id:"-filename_time_format-"},(0,i.kt)("span",{id:"filename_time_format"}," filename_time_format ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",{parentName:"blockquote"},"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("h4",{id:"-file_format_type-"},(0,i.kt)("span",{id:"file_format_type"}," file_format_type ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We supported as the following file types:"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"text")," ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,i.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,i.kt)("inlineCode",{parentName:"p"},"excel"))),(0,i.kt)("p",null,"Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,i.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,i.kt)("h4",{id:"-partition_dir_expression-"},(0,i.kt)("span",{id:"partition_dir_expression"}," partition_dir_expression ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",{parentName:"blockquote"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,i.kt)("p",{parentName:"blockquote"},"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,i.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field.")),(0,i.kt)("h4",{id:"-is_partition_field_write_in_file-"},(0,i.kt)("span",{id:"is_partition_field_write_in_file"}," is_partition_field_write_in_file ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,i.kt)("p",{parentName:"blockquote"},"For example, if you want to write a Hive Data File, Its value should be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("h4",{id:"-sink_columns-"},(0,i.kt)("span",{id:"sink_columns"}," sink_columns ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Which columns need be written to file, default value is all the columns get from ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written.")),(0,i.kt)("h4",{id:"-is_enable_transaction-"},(0,i.kt)("span",{id:"is_enable_transaction"}," is_enable_transaction ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,i.kt)("p",{parentName:"blockquote"},"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file. Only support ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," now.")),(0,i.kt)("h4",{id:"-batch_size-"},(0,i.kt)("span",{id:"batch_size"}," batch_size ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger.")),(0,i.kt)("h4",{id:"-compress_codec-"},(0,i.kt)("span",{id:"compress_codec"}," compress_codec ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The compress codec of files and the details that supported as the following shown:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"txt: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"json: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"csv: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"orc: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zlib")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"parquet: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip")," ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")))),(0,i.kt)("p",null,"Please note that excel type does not support any compression format"),(0,i.kt)("h4",{id:"-common-options-"},(0,i.kt)("span",{id:"common_options"}," common options ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details.")),(0,i.kt)("h2",{id:"task-example"},"Task Example"),(0,i.kt)("h3",{id:"text-file"},"text file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For text file format with ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sink_columns"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path="/seatunnel/text"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n  }\n\n')),(0,i.kt)("h3",{id:"parquet-file"},"parquet file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For parquet file format with ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sink_columns"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/parquet"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    file_format_type = "parquet"\n    sink_columns = ["name","age"]\n  }\n\n')),(0,i.kt)("h3",{id:"orc-file"},"orc file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For orc file format simple config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path="/seatunnel/orc"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "obs.xxxxx.myhuaweicloud.com"\n    file_format_type = "orc"\n  }\n\n')),(0,i.kt)("h3",{id:"json-file"},"json file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For json file format simple config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcocn"},'\n   ObsFile {\n       path = "/seatunnel/json"\n       bucket = "obs://obs-bucket-name"\n       access_key = "xxxxxxxxxxx"\n       access_secret = "xxxxxxxxxxx"\n       endpoint = "obs.xxxxx.myhuaweicloud.com"\n       file_format_type = "json"\n   }\n\n')),(0,i.kt)("h3",{id:"excel-file"},"excel file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For excel file format simple config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcocn"},'\n   ObsFile {\n       path = "/seatunnel/excel"\n       bucket = "obs://obs-bucket-name"\n       access_key = "xxxxxxxxxxx"\n       access_secret = "xxxxxxxxxxx"\n       endpoint = "obs.xxxxx.myhuaweicloud.com"\n       file_format_type = "excel"\n   }\n\n')),(0,i.kt)("h3",{id:"csv-file"},"csv file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For csv file format simple config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcocn"},'\n   ObsFile {\n       path = "/seatunnel/csv"\n       bucket = "obs://obs-bucket-name"\n       access_key = "xxxxxxxxxxx"\n       access_secret = "xxxxxxxxxxx"\n       endpoint = "obs.xxxxx.myhuaweicloud.com"\n       file_format_type = "csv"\n   }\n\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"next-version"},"next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Obs Sink Connector")))}u.isMDXComponent=!0}}]);