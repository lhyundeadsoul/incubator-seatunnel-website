"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65308],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=r,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(67294),l=t(72389),o=t(65450),i=t(86010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,k=e.groupId,d=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),y=v.tabGroupChoices,N=v.setTabGroupChoices,T=(0,r.useState)(g),w=T[0],E=T[1],S=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=y[k];null!=I&&I!==w&&h.some((function(e){return e.value===I}))&&E(I)}var x=function(e){var n=e.currentTarget,t=S.indexOf(n),a=h[t].value;a!==w&&(O(n),E(a),null!=k&&N(k,a))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},d)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},33443:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return k},default:function(){return f}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(9877),i=t(58215),u=["components"],s={sidebar_position:4},p="Set Up with Kubernetes",c={unversionedId:"start-v2/kubernetes",id:"start-v2/kubernetes",title:"Set Up with Kubernetes",description:"This section provides a quick guide to using SeaTunnel with Kubernetes.",source:"@site/docs/start-v2/kubernetes.mdx",sourceDirName:"start-v2",slug:"/start-v2/kubernetes",permalink:"/docs/start-v2/kubernetes",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/kubernetes.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Set Up with Docker",permalink:"/docs/start-v2/docker"},next:{title:"Intro to config file",permalink:"/docs/concept/config"}},m={},k=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"SeaTunnel docker image",id:"seatunnel-docker-image",level:3},{value:"Deploying the operator",id:"deploying-the-operator",level:3},{value:"Run SeaTunnel Application",id:"run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:k};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-up-with-kubernetes"},"Set Up with Kubernetes"),(0,l.kt)("p",null,"This section provides a quick guide to using SeaTunnel with Kubernetes."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"We assume that you have a local installations of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/quickstart/"},"helm"))),(0,l.kt)("p",null,"So that the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," commands are available on your local system."),(0,l.kt)("p",null,"For kubernetes ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," is our choice, at the time of writing this we are using version v1.23.3. You can start a cluster with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --kubernetes-version=v1.23.3\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"seatunnel-docker-image"},"SeaTunnel docker image"),(0,l.kt)("p",null,"To run the image with SeaTunnel, first create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM flink:1.13\n\nENV SEATUNNEL_VERSION="2.3.0-beta"\nENV SEATUNNEL_HOME = "/opt/seatunnel"\n\nRUN mkdir -p $SEATUNNEL_HOME\n\nRUN wget https://archive.apache.org/dist/incubator/seatunnel/${SEATUNNEL_VERSION}/apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz\nRUN tar -xzvf apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz\n\nRUN cp -r apache-seatunnel-incubating-${SEATUNNEL_VERSION}/* $SEATUNNEL_HOME/\nRUN rm -rf apache-seatunnel-incubating-${SEATUNNEL_VERSION}*\nRUN rm -rf $SEATUNNEL_HOME/connectors/seatunnel\n')),(0,l.kt)("p",null,"Then run the following commands to build the image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t seatunnel:2.3.0-beta-flink-1.13 -f Dockerfile .\n")),(0,l.kt)("p",null,"Image ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel:2.3.0-beta-flink-1.13")," need to be present in the host (minikube) so that the deployment can take place."),(0,l.kt)("p",null,"Load image to minikube via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube image load seatunnel:2.3.0-beta-flink-1.13\n")))),(0,l.kt)("h3",{id:"deploying-the-operator"},"Deploying the operator"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("p",null,"The steps below provide a quick walk-through on setting up the Flink Kubernetes Operator."),(0,l.kt)("p",null,"Install the certificate manager on your Kubernetes cluster to enable adding the webhook component (only needed once per Kubernetes cluster):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.yaml\n")),(0,l.kt)("p",null,"Now you can deploy the latest stable Flink Kubernetes Operator version using the included Helm chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add flink-operator-repo https://downloads.apache.org/flink/flink-kubernetes-operator-0.1.0/\n\nhelm install flink-kubernetes-operator flink-operator-repo/flink-kubernetes-operator\n")),(0,l.kt)("p",null,"You may verify your installation via ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\nNAME                                                   READY   STATUS    RESTARTS      AGE\nflink-kubernetes-operator-5f466b8549-mgchb             1/1     Running   3 (23h ago)   16d\n\n")))),(0,l.kt)("h2",{id:"run-seatunnel-application"},"Run SeaTunnel Application"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Run Application:"),": SeaTunnel already providers out-of-the-box ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/config"},"configurations"),"."),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("p",null,"In this guide we are going to use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/dev/config/flink.streaming.conf.template"},"flink.streaming.conf"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'env {\n execution.parallelism = 1\n}\n\nsource {\n   FakeSourceStream {\n     result_table_name = "fake"\n     field_name = "name,age"\n   }\n}\n\ntransform {\n   sql {\n     sql = "select name,age from fake"\n   }\n}\n\nsink {\n ConsoleSink {}\n}\n')),(0,l.kt)("p",null,"This configuration need to be present when we are going to deploy the application (SeaTunnel) to Flink cluster (on Kubernetes), we also need to configure a Pod to Use a PersistentVolume for Storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create ",(0,l.kt)("inlineCode",{parentName:"li"},"/mnt/data")," on your Node. Open a shell to the single Node in your cluster. How you open a shell depends on how you set up your cluster. For example, in our case weare using Minikube, you can open a shell to your Node by entering ",(0,l.kt)("inlineCode",{parentName:"li"},"minikube ssh"),".\nIn your shell on that Node, create a /mnt/data directory:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'minikube ssh\n\n# This assumes that your Node uses "sudo" to run commands\n# as the superuser\nsudo mkdir /mnt/data\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy application (SeaTunnel) configuration files to your Node.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube cp flink.streaming.conf /mnt/data/flink.streaming.conf\n")),(0,l.kt)("p",null,"Once the Flink Kubernetes Operator is running as seen in the previous steps you are ready to submit a Flink (SeaTunnel) job:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create ",(0,l.kt)("inlineCode",{parentName:"li"},"seatunnel-flink.yaml")," FlinkDeployment manifest:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flink.apache.org/v1alpha1\nkind: FlinkDeployment\nmetadata:\n  namespace: default\n  name: seatunnel-flink-streaming-example\nspec:\n  image: seatunnel:2.3.0-beta-flink-1.13\n  flinkVersion: v1_14\n  flinkConfiguration:\n    taskmanager.numberOfTaskSlots: "2"\n  serviceAccount: flink\n  jobManager:\n    replicas: 1\n    resource:\n      memory: "2048m"\n      cpu: 1\n  taskManager:\n    resource:\n      memory: "2048m"\n      cpu: 2\n  podTemplate:\n    spec:\n      containers:\n        - name: flink-main-container\n          volumeMounts:\n            - mountPath: /data\n              name: config-volume\n      volumes:\n        - name: config-volume\n          hostPath:\n            path: "/mnt/data"\n            type: Directory\n\n  job:\n    jarURI: local:///opt/seatunnel/lib/seatunnel-flink-starter.jar\n    entryClass: org.apache.seatunnel.core.starter.flink.SeatunnelFlink\n    args: ["--config", "/data/flink.streaming.conf"]\n    parallelism: 2\n    upgradeMode: stateless\n\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the example application:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f seatunnel-flink.yaml\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See The Output")),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("p",null,"You may follow the logs of your job, after a successful startup (which can take on the order of a minute in a fresh environment, seconds afterwards) you can:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f deploy/seatunnel-flink-streaming-example\n")),(0,l.kt)("p",null,"To expose the Flink Dashboard you may add a port-forward rule:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/seatunnel-flink-streaming-example-rest 8081\n")),(0,l.kt)("p",null,"Now the Flink Dashboard is accessible at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8081"},"localhost:8081"),"."),(0,l.kt)("p",null,"Or launch ",(0,l.kt)("inlineCode",{parentName:"p"},"minikube dashboard")," for a web-based Kubernetes user interface."),(0,l.kt)("p",null,"The content printed in the TaskManager Stdout log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs \\\n-l 'app in (seatunnel-flink-streaming-example), component in (taskmanager)' \\\n--tail=-1 \\\n-f\n")),(0,l.kt)("p",null,"looks like the below (your content may be different since we use ",(0,l.kt)("inlineCode",{parentName:"p"},"FakeSourceStream")," to automatically generate random stream data):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"+I[Kid Xiong, 1650316786086]\n+I[Ricky Huo, 1650316787089]\n+I[Ricky Huo, 1650316788089]\n+I[Ricky Huo, 1650316789090]\n+I[Kid Xiong, 1650316790090]\n+I[Kid Xiong, 1650316791091]\n+I[Kid Xiong, 1650316792092]\n")),(0,l.kt)("p",null,"To stop your job and delete your FlinkDeployment you can simply:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f seatunnel-flink.yaml\n")))),(0,l.kt)("p",null,"Happy SeaTunneling!"),(0,l.kt)("h2",{id:"whats-more"},"What's More"),(0,l.kt)("p",null,"For now, you are already taking a quick look at SeaTunnel, you could see ",(0,l.kt)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all source and sink SeaTunnel supported.\nOr see ",(0,l.kt)("a",{parentName:"p",href:"/docs/deployment"},"deployment")," if you want to submit your application in another kind of your engine cluster."))}f.isMDXComponent=!0}}]);