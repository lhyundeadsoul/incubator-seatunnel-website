"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="S3File",s={unversionedId:"connector-v2/sink/S3File",id:"connector-v2/sink/S3File",title:"S3File",description:"S3 file sink connector",source:"@site/docs/connector-v2/sink/S3File.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/S3File",permalink:"/docs/connector-v2/sink/S3File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/S3File.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/docs/connector-v2/sink/Redis"},next:{title:"Sentry",permalink:"/docs/connector-v2/sink/Sentry"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"hadoop_s3_properties map",id:"hadoop_s3_properties-map",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"file_format string",id:"file_format-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3file"},"S3File"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"S3 file sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to aws s3 file system."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tips: We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to S3 and this connector need some hadoop dependencies.\nIt's only support hadoop version ",(0,i.kt)("strong",{parentName:"p"},"2.6.5+"),".\nUse this connector, you need add hadoop-aws.jar and hadoop-client.jar to the plugin directory.")),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bucket"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"access_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hadoop_s3_properties"),(0,i.kt)("td",{parentName:"tr",align:null},"map"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${transactionId}"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"text"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"'\\001'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"\\n"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"The target dir path is required."),(0,i.kt)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,i.kt)("p",null,"The bucket address of s3 file system, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"s3n://seatunnel-test"),", if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"s3a")," protocol, this parameter should be ",(0,i.kt)("inlineCode",{parentName:"p"},"s3a://seatunnel-test"),"."),(0,i.kt)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,i.kt)("p",null,"The access key of s3 file system."),(0,i.kt)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,i.kt)("p",null,"The access secret of s3 file system."),(0,i.kt)("h3",{id:"hadoop_s3_properties-map"},"hadoop_s3_properties ","[map]"),(0,i.kt)("p",null,"If you need to add a other option, you could add it here and refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"link")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'     hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n      }\n')),(0,i.kt)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("h3",{id:"file_format-string"},"file_format ","[string]"),(0,i.kt)("p",null,"We supported as the following file types:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"text")," ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,i.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,i.kt)("inlineCode",{parentName:"p"},"json")),(0,i.kt)("p",null,"Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,i.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,i.kt)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,i.kt)("p",null,"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,i.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between columns in a row of data. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,i.kt)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between rows in a file. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,i.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.kt)("p",null,"Partition data based on selected fields"),(0,i.kt)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,i.kt)("p",null,"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,i.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,i.kt)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be written into data file."),(0,i.kt)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,i.kt)("p",null,"Which columns need be written to file, default value is all the columns get from ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,i.kt)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("p",null,"Only support ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," now."),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For text file format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/text"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format="text"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,i.kt)("p",null,"For parquet file format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/parquet"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format="parquet"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,i.kt)("p",null,"For orc file format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'\n  S3File {\n    access_key = "xxxxxxxxxxxxxxxxx"\n    secret_key = "xxxxxxxxxxxxxxxxx"\n    bucket = "s3a://seatunnel-test"\n    tmp_path = "/tmp/seatunnel"\n    path="/seatunnel/orc"\n    row_delimiter="\\n"\n    partition_dir_expression="${k0}=${v0}"\n    is_partition_field_write_in_file=true\n    file_name_expression="${transactionId}_${now}"\n    file_format="orc"\n    filename_time_format="yyyy.MM.dd"\n    is_enable_transaction=true\n    hadoop_s3_properties {\n       "fs.s3a.aws.credentials.provider" = "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"\n    }\n  }\n\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add S3File Sink Connector")),(0,i.kt)("h3",{id:"next-version"},"Next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3258"},"3258"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,i.kt)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,i.kt)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,i.kt)("li",{parentName:"ul"},"[Feature]"," Support S3A protocol (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3632"},"3632"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allow user to add additional hadoop-s3 parameters"),(0,i.kt)("li",{parentName:"ul"},"Allow the use of the s3a protocol"),(0,i.kt)("li",{parentName:"ul"},"Decouple hadoop-aws dependencies")))))}k.isMDXComponent=!0}}]);