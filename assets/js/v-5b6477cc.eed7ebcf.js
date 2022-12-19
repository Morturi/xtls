"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5745],{515:(e,l,a)=>{a.r(l),a.d(l,{data:()=>r});const r={key:"v-5b6477cc",path:"/en/document/level-1/work.html",title:"Xray 的工作模式",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"单服务器模式",slug:"单服务器模式",children:[]},{level:2,title:"桥接模式",slug:"桥接模式",children:[]},{level:2,title:"工作原理",slug:"工作原理",children:[]}],filePathRelative:"en/document/level-1/work.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},5950:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});var r=a(6252);const n=(0,r._)("h1",{id:"xray-的工作模式",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#xray-的工作模式","aria-hidden":"true"},"#"),(0,r.Uk)(" Xray 的工作模式")],-1),i=(0,r._)("h2",{id:"单服务器模式",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#单服务器模式","aria-hidden":"true"},"#"),(0,r.Uk)(" 单服务器模式")],-1),u=(0,r._)("p",null,"与其它的网络代理工具一样，你需要一台配置了 Xray 的服务器，然后在自己的设备上安装并配置 Xray 客户端，然后即可流畅地访问互联网。",-1),t=(0,r._)("p",null,"一个 Xray 服务器可同时支持多台设备使用不同的代理协议访问。同时，经过合理的配置，Xray 可以识别并区分需要代理以及不需要代理的流量，直连的流量不需要绕路。",-1),d=(0,r._)("h2",{id:"桥接模式",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#桥接模式","aria-hidden":"true"},"#"),(0,r.Uk)(" 桥接模式")],-1),A=(0,r._)("p",null,"如果你不想在每一台设备上都配置路由，你也可以设置一台中转服务器，用于接收客户端发来的所有流量，然后在服务器中进行转发判断。",-1),E=(0,r._)("h2",{id:"工作原理",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#工作原理","aria-hidden":"true"},"#"),(0,r.Uk)(" 工作原理")],-1),h=(0,r._)("p",null,"在配置 Xray 之前，不妨先来看一下 Xray 的工作原理，以下是单个 Xray 进程的内部结构示意图。多个 Xray 之间相互独立，互不影响。",-1),o=(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Uk)("需要配置至少一个入站连接（Inbound）和一个出站连接（Outbound）才可以正常工作。 "),(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Uk)("入站连接负责与客户端（如浏览器）通信： "),(0,r._)("ul",null,[(0,r._)("li",null,"入站连接通常可以配置用户认证，如 ID 和密码等；"),(0,r._)("li",null,"入站连接收到数据之后，会交给分发器（Dispatcher）进行分发；")])]),(0,r._)("li",null,"出站连接负责将数据发给服务器，如另一台主机上的 Xray。")])]),(0,r._)("li",null,[(0,r.Uk)("当有多个出站连接时，可以配置路由（Routing）来指定某一类流量由某一个出站连接发出。 "),(0,r._)("ul",null,[(0,r._)("li",null,"路由会在必要时查询 DNS 以获取更多信息来进行判断。")])])],-1),c={render:function(e,l){const a=(0,r.up)("Mermaid");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,i,u,(0,r.Wm)(a,{identifier:"mermaid_1a962853",graph:"graph%20LR;%0AA(PC)%20-.-%20B(%E9%98%B2%E7%81%AB%E5%A2%99);%0AB%20-.-%3E%20C(%E5%A2%99%E5%A4%96%E7%BD%91%E7%AB%99);%0AA%20--%3E%20D(Xray/VPS);%0AD%20--%3E%20C;%0AA%20--%3E%20E(%E5%A2%99%E5%86%85%E7%BD%91%E7%AB%99);%0A"}),t,d,A,(0,r.Wm)(a,{identifier:"mermaid_382ee14e",graph:"graph%20LR;%0AA(PC)%20-.-%3E%20B(%E9%98%B2%E7%81%AB%E5%A2%99);%0AB%20-.-%3E%20C(%E5%A2%99%E5%A4%96%E7%BD%91%E7%AB%99);%0AA%20--%3E%20D(%E5%A2%99%E5%86%85%20VPS);%0AD%20--%3E%20E(%E5%A2%99%E5%A4%96%20VPS);%0AE%20--%3E%20C;%0AD%20--%3E%20F(%E5%A2%99%E5%86%85%E7%BD%91%E7%AB%99);%0A"}),E,h,(0,r.Wm)(a,{identifier:"mermaid_382ee16a",graph:"graph%20LR;%0AA1(inbound)%20--%3E%20D(Dispatcher%20/%20Router%20/%20DNS);%0AA2(inbound)%20--%3E%20D;%0AA3(inbound)%20--%3E%20D;%0AA4(inbound)%20--%3E%20D;%0AD%20--%3E%20B1(outbound);%0AD%20--%3E%20B2(outbound);%0AD%20--%3E%20B3(outbound);%0AD%20--%3E%20B4(outbound);%0A"}),o],64)}}}}]);