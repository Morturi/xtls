"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8551],{4457:(o,e,n)=>{n.r(e),n.d(e,{data:()=>s});const s={key:"v-72afc2d2",path:"/en/config/inbounds/dokodemo.html",title:"Dokodemo-Door",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[]},{level:2,title:"透明代理配置样例",slug:"透明代理配置样例",children:[]}],filePathRelative:"en/config/inbounds/dokodemo.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},5851:(o,e,n)=>{n.r(e),n.d(e,{default:()=>_});var s=n(6252);const t=(0,s.uE)('<h1 id="dokodemo-door" tabindex="-1"><a class="header-anchor" href="#dokodemo-door" aria-hidden="true">#</a> Dokodemo-Door</h1><p>Dokodemo door（任意门）可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.8.8.8&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;followRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>将流量转发到此地址。可以是一个 IP 地址，形如 <code>&quot;1.2.3.4&quot;</code>，或者一个域名，形如 <code>&quot;xray.com&quot;</code>。字符串类型。</p><p>当 <code>followRedirect</code>（见下文）为 <code>true</code> 时，<code>address</code> 可为空。</p><blockquote><p><code>port</code>: number</p></blockquote><p>将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型。必填参数。</p><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>可接收的网络协议类型。比如当指定为 <code>&quot;tcp&quot;</code> 时，仅会接收 TCP 流量。默认值为 <code>&quot;tcp&quot;</code>。</p><blockquote><p><code>timeout</code>: number</p></blockquote><p>连接空闲的时间限制。单位为秒。默认值为 <code>300</code>。处理一个连接时，如果在 <code>timeout</code> 时间内，没有任何数据被传输，则中断该连接。</p><blockquote><p><code>followRedirect</code>: true | false</p></blockquote><p>当值为 <code>true</code> 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。</p>',15),a=(0,s.Uk)("可参考 "),p=(0,s.Uk)("传输配置"),c=(0,s.Uk)(" 中的 "),l=(0,s._)("code",null,"tproxy",-1),u=(0,s.Uk)(" 设置。"),r=(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s._)("code",null,"userLevel"),(0,s.Uk)(": number")])],-1),d=(0,s.Uk)("用户等级，连接会使用这个用户等级对应的 "),i=(0,s.Uk)("本地策略"),k=(0,s.Uk)("。"),b=(0,s.Uk)("userLevel 的值, 对应 "),m=(0,s.Uk)("policy"),q=(0,s.Uk)(" 中 "),h=(0,s._)("code",null,"level",-1),f=(0,s.Uk)(" 的值. 如不指定, 默认为 0。"),g=(0,s._)("h2",{id:"透明代理配置样例",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#透明代理配置样例","aria-hidden":"true"},"#"),(0,s.Uk)(" 透明代理配置样例")],-1),y=(0,s._)("p",null,[(0,s.Uk)("此部分请参考"),(0,s._)("a",{href:"../../document/level-2/tproxy"},"透明代理（TProxy）配置教程"),(0,s.Uk)("。")],-1),_={render:function(o,e){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[a,(0,s.Wm)(n,{to:"/en/config/transport.html#sockoptobject"},{default:(0,s.w5)((()=>[p])),_:1}),c,l,u]),r,(0,s._)("p",null,[d,(0,s.Wm)(n,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,s.w5)((()=>[i])),_:1}),k]),(0,s._)("p",null,[b,(0,s.Wm)(n,{to:"/en/config/policy.html#policyobject"},{default:(0,s.w5)((()=>[m])),_:1}),q,h,f]),g,y],64)}}}}]);