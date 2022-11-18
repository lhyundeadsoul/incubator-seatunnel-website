"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={slug:"2.1.0-Released-Apache-SeaTunnel-Incubating-First-Apache-Release-Refactors-Kernel-and-Supports-Flink-Overall",title:"2.1.0 Released! Apache SeaTunnel(Incubating) First Apache Release Refactors Kernel and Supports Flink Overall",tags:["2.1.0","Release"]},s="2.1.0 Released! Apache SeaTunnel(Incubating) First Apache Release Refactors Kernel and Supports Flink Overall",u={permalink:"/blog/2.1.0-Released-Apache-SeaTunnel-Incubating-First-Apache-Release-Refactors-Kernel-and-Supports-Flink-Overall",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-03-18-2-1-0-release.md",source:"@site/blog/2022-03-18-2-1-0-release.md",title:"2.1.0 Released! Apache SeaTunnel(Incubating) First Apache Release Refactors Kernel and Supports Flink Overall",description:"On December 9, 2021, Apache SeaTunnel(Incubating) entered the Apache Incubator, and after nearly four months of endeavor by the community contributors, we passed the first Apache version control in one go and released it on March 18, 2022. This means that version 2.1.0 is an official release that is safe for corporate and individual users to use, which has been voted on by the Apache SeaTunnel(Incubating) community and the Apache Incubator.",date:"2022-03-18T00:00:00.000Z",formattedDate:"March 18, 2022",tags:[{label:"2.1.0",permalink:"/blog/tags/2-1-0"},{label:"Release",permalink:"/blog/tags/release"}],readingTime:5.005,truncated:!1,authors:[],frontMatter:{slug:"2.1.0-Released-Apache-SeaTunnel-Incubating-First-Apache-Release-Refactors-Kernel-and-Supports-Flink-Overall",title:"2.1.0 Released! Apache SeaTunnel(Incubating) First Apache Release Refactors Kernel and Supports Flink Overall",tags:["2.1.0","Release"]},prevItem:{title:"Innovation of Data Integration Technology in the Intelligent Era",permalink:"/blog/Innovation of Data Integration Technology in the Intelligent Era"},nextItem:{title:"How to quickly import data from HDFS into ClickHouse",permalink:"/blog/hdfs-to-clickhouse"}},c={authorsImageUrls:[]},p=[{value:"Release Note",id:"release-note",level:2},{value:"Specific release notes\uff1a",id:"specific-release-notes",level:2},{value:"Features",id:"features",level:3},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Planning for the next few releases:",id:"planning-for-the-next-few-releases",level:2},{value:"Community Status",id:"community-status",level:2},{value:"Recent Development",id:"recent-development",level:3},{value:"Users of Apache SeaTunnel(Incubating)",id:"users-of-apache-seatunnelincubating",level:3},{value:"PPMC&#39;s Word",id:"ppmcs-word",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On December 9, 2021, Apache SeaTunnel(Incubating) entered the Apache Incubator, and after nearly four months of endeavor by the community contributors, we passed the first Apache version control in one go and released it on March 18, 2022. This means that version 2.1.0 is an official release that is safe for corporate and individual users to use, which has been voted on by the Apache SeaTunnel(Incubating) community and the Apache Incubator."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," A\xa0",(0,r.kt)("strong",{parentName:"p"},"software license"),"\xa0is a legal instrument governing the use or redistribution of software. A typical software license grants the\xa0licensee, typically an\xa0end-user, permission to use one or more copies of the software in ways where such a use would otherwise potentially constitute copyright infringement of the software owner's\xa0exclusive rights\xa0under copyright. Effectively, a software license is a contract between the software developer and the user that guarantees the user will not be sued within the scope of the license. "),(0,r.kt)("p",null,"Before and after entering the incubator, we spent a lot of time sorting through the external dependencies of the entire project to ensure compliance. It is important to note that the choice of License for open source software does not necessarily mean that the project itself is compliant. While the stringent version control process of ASF ensures compliance and legal distribution of the software license maximumly."),(0,r.kt)("h2",{id:"release-note"},"Release Note"),(0,r.kt)("p",null,"We bring the following ",(0,r.kt)("strong",{parentName:"p"},"key features"),"to this release:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The kernel of the microkernel plug-in architecture is overall optimized, which is mainly in Java. And a lot of improvements are made to command line parameter parsing, plug-in loading, etc. At the same time, the users (or contributors) can choose the language to develop plug-in extensions, which greatly reduces the development threshold of plug-ins."),(0,r.kt)("li",{parentName:"ol"},"Overall support for Flink, while the users are free to choose the underlying engine. This version also brings a large number of Flink plug-ins and welcomes anyone to contribute more."),(0,r.kt)("li",{parentName:"ol"},"Provide local development fast startup environment support (example), allow contributors or users quickly and smoothly start without changing any code to facilitate rapid local development debugging. This is certainly exciting news for contributors or users who need to customize their plugins. In fact, we've had a large number of contributors use this approach to quickly test the plugin in our pre-release testing."),(0,r.kt)("li",{parentName:"ol"},"With Docker container installation provided, users can deploy and install Apache SeaTunnel(Incubating) via Docker extremely fast, and we will iterate around Docker & K8s in the future, any interesting proposal on this is welcomed.")),(0,r.kt)("h2",{id:"specific-release-notes"},"Specific release notes\uff1a"),(0,r.kt)("h3",{id:"features"},"[Features]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use JCommander to do command line parameter parsing, making developers focus on the logic itself."),(0,r.kt)("li",{parentName:"ul"},"Flink is upgraded from 1.9 to 1.13.5, keeping compatibility with older versions and preparing for subsequent CDC."),(0,r.kt)("li",{parentName:"ul"},"Support for Doris, Hudi, Phoenix, Druid, and other Connector plugins, and you can find complete plugin support here ",(0,r.kt)("a",{parentName:"li",href:"%5Bhttps://github.com/apache/incubator-seatunnel#plugins-supported-by-seatunnel%5D(https://github.com/apache/incubator-seatunnel#plugins-supported-by-seatunnel)"},"plugins-supported-by-seatunnel"),"."),(0,r.kt)("li",{parentName:"ul"},"Local development extremely fast starts environment support. It can be achieved by using the example module without modifying any code, which is convenient for local debugging."),(0,r.kt)("li",{parentName:"ul"},"Support for installing and trying out Apache SeaTunnel(Incubating) via Docker containers."),(0,r.kt)("li",{parentName:"ul"},"SQL component supports SET statements and configuration variables."),(0,r.kt)("li",{parentName:"ul"},"Config module refactoring to facilitate understanding for the contributors while ensuring code compliance (License) of the project."),(0,r.kt)("li",{parentName:"ul"},"Project structure realigned to fit the new Roadmap."),(0,r.kt)("li",{parentName:"ul"},"CI&CD support, code quality automation control (more plans will be carried out to support CI&CD development).")),(0,r.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,r.kt)("p",null,"Thanks to the following contributors who participated in this version release (GitHub IDs, in no particular order)."),(0,r.kt)("p",null,"Al-assad, BenJFan, CalvinKirs, JNSimba, JiangTChen, Rianico, TyrantLucifer, Yves-yuan, ZhangchengHu0923, agendazhang, an-shi-chi-fan, asdf2014, bigdataf, chaozwn, choucmei, dailidong, dongzl, felix-thinkingdata, fengyuceNv, garyelephant, kalencaya, kezhenxu94, legendtkl, leo65535, liujinhui1994, mans2singh, marklightning, mosence, nielifeng, ououtt, ruanwenjun, simon824, totalo, wntp, wolfboys, wuchunfu, xbkaishui, xtr1993, yx91490, zhangbutao, zhaomin1423, zhongjiajie, zhuangchong, zixi0825."),(0,r.kt)("p",null,"Also sincere gratitude to our Mentors: Zhenxu Ke, Willem Jiang, William Guo, LiDong Dai, Ted Liu, Kevin, JB for their help!"),(0,r.kt)("h2",{id:"planning-for-the-next-few-releases"},"Planning for the next few releases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CDC support."),(0,r.kt)("li",{parentName:"ul"},"Support for the monitoring system."),(0,r.kt)("li",{parentName:"ul"},"UI system support."),(0,r.kt)("li",{parentName:"ul"},"More Connector and efficient Sink support, such as ClickHouse support will be available in the next release soon.\nThe follow-up ",(0,r.kt)("strong",{parentName:"li"},"Features")," are decided by the community consensus, and we sincerely appeal to more participation in the community construction.")),(0,r.kt)("p",null,"We need your attention and contributions:)"),(0,r.kt)("h2",{id:"community-status"},"Community Status"),(0,r.kt)("h3",{id:"recent-development"},"Recent Development"),(0,r.kt)("p",null,"Since entering the Apache incubator, the contributor group has grown from 13 to 55 and continues to grow, with the average weekly community commits remaining at 20+. "),(0,r.kt)("p",null,"Three contributors from different companies (Lei Xie, HuaJie Wang, Chunfu Wu) have been invited to become Committers on account of their contributions to the community. "),(0,r.kt)("p",null,"We held two Meetups, where instructors from Bilibili, OPPO, Vipshop, and other companies shared their large-scale production practices based on SeaTunnel in their companies (we will hold one meetup monthly in the future, and welcome SeaTunnel users or contributors to come and share their stories about SeaTunnel)."),(0,r.kt)("h3",{id:"users-of-apache-seatunnelincubating"},"Users of Apache SeaTunnel(Incubating)"),(0,r.kt)("p",null,"Note: Only registered users are included."),(0,r.kt)("p",null,"Registered users of Apache SeaTunnel(Incubating) are shown below. If you are also using Apache SeaTunnel(Incubating), too, welcome to register on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/686"},"Who is using SeaTunne"),"!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/image/20220321/1.png"})),(0,r.kt)("h2",{id:"ppmcs-word"},"PPMC's Word"),(0,r.kt)("p",null,"LiFeng Nie, PPMC of Apache SeaTunnel(Incubating), commented on the first Apache version release. "),(0,r.kt)("p",null,"From the first day entering Apache Incubating, we have been working hard to learn the Apache Way and various Apache policies. Although the first release took a lot of time (mainly for compliance), we think it was well worth it, and that's one of the reasons we chose to enter Apache. We need to give our users peace of mind, and Apache is certainly the best choice, with its almost demanding license control that allows users to avoid compliance issues as much as possible and ensure that the software is circulating reasonably and legally. In addition, its practice of the Apache Way, such as public service mission, pragmatism, community over code, openness and consensus decision-making, and meritocracy, can drive the Apache SeaTunnel(Incubating) community to become more open, transparent, and diverse."))}m.isMDXComponent=!0}}]);