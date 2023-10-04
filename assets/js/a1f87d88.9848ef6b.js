"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31094],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74095:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],s={sidebar_position:7},i=void 0,u={unversionedId:"seatunnel-engine/rest-api",id:"seatunnel-engine/rest-api",title:"rest-api",description:"----------------",source:"@site/docs/seatunnel-engine/rest-api.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api",permalink:"/docs/seatunnel-engine/rest-api",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/rest-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"checkpoint-storage",permalink:"/docs/seatunnel-engine/checkpoint-storage"},next:{title:"tcp",permalink:"/docs/seatunnel-engine/tcp"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Returns an overview over all jobs and their current state.",id:"returns-an-overview-over-all-jobs-and-their-current-state",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Return details of a job.",id:"return-details-of-a-job",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Returns system monitoring information.",id:"returns-system-monitoring-information",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Submit Job.",id:"submit-job",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Stop Job.",id:"stop-job",level:3},{value:"Body",id:"body-1",level:4},{value:"Responses",id:"responses-4",level:4}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"SeaTunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent\ncompleted jobs. The monitoring API is a REST-ful API that accepts HTTP requests and responds with JSON data."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The monitoring API is backed by a web server that runs as part of the node, each node member can provide rest api capability.\nBy default, this server listens at port 5801, which can be configured in hazelcast.yaml like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("h3",{id:"returns-an-overview-over-all-jobs-and-their-current-state"},"Returns an overview over all jobs and their current state."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("code",null,"GET")," ",(0,o.kt)("code",null,(0,o.kt)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,o.kt)("code",null,"(Returns an overview over all jobs and their current state.)")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"responses"},"Responses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"return-details-of-a-job"},"Return details of a job."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("code",null,"GET")," ",(0,o.kt)("code",null,(0,o.kt)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,o.kt)("code",null,"(Return details of a job.)")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("blockquote",null,(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"data type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobId"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"job id"))))),(0,o.kt)("h4",{id:"responses-1"},"Responses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "envOptions": {\n  },\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false,\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  }\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"returns-system-monitoring-information"},"Returns system monitoring information."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("code",null,"GET")," ",(0,o.kt)("code",null,(0,o.kt)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,o.kt)("code",null,"(Returns system monitoring information.)")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("h4",{id:"responses-2"},"Responses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"submit-job"},"Submit Job."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("code",null,"POST")," ",(0,o.kt)("code",null,(0,o.kt)("b",null,"/hazelcast/rest/maps/submit-job"))," ",(0,o.kt)("code",null,"(Returns jobId and jobName if job submitted successfully.)")),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("blockquote",null,(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"data type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobId"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"job id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobName"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"job name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,o.kt)("h4",{id:"body"},"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "job.mode": "batch"\n    },\n    "source": [\n        {\n            "plugin_name": "FakeSource",\n            "result_table_name": "fake",\n            "row.num": 100,\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int",\n                    "card": "int"\n                }\n            }\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Console",\n            "source_table_name": ["fake"]\n        }\n    ]\n}\n')),(0,o.kt)("h4",{id:"responses-3"},"Responses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "jobName": "rest_api_test"\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stop-job"},"Stop Job."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("code",null,"POST")," ",(0,o.kt)("code",null,(0,o.kt)("b",null,"/hazelcast/rest/maps/stop-job"))," ",(0,o.kt)("code",null,"(Returns jobId if job stoped successfully.)")),(0,o.kt)("h4",{id:"body-1"},"Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "isStopWithSavePoint": false # if job is stopped with save point\n}\n')),(0,o.kt)("h4",{id:"responses-4"},"Responses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"jobId": 733584788375666689\n}\n'))))}d.isMDXComponent=!0}}]);