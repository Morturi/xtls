"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[6971],{32861:(n,s,a)=>{a.r(s),a.d(s,{data:()=>o});const o={key:"v-5ab92300",path:"/en/config/inbound.html",title:"入站代理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundObject",slug:"inboundobject",children:[{level:3,title:"SniffingObject",slug:"sniffingobject",children:[]},{level:3,title:"AllocateObject",slug:"allocateobject",children:[]}]}],filePathRelative:"en/config/inbound.md",git:{updatedTime:1631879584e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1},{name:"xqzr",email:"34030394+xqzr@users.noreply.github.com",commits:1}]}}},26300:(n,s,a)=>{a.r(s),a.d(s,{default:()=>T});var o=a(66252);const e=(0,o._)("h1",{id:"入站代理",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#入站代理","aria-hidden":"true"},"#"),(0,o.Uk)(" 入站代理")],-1),t=(0,o.Uk)("入站连接用于接收发来的数据，可用的协议请见"),p=(0,o.Uk)("inbound protocols"),c=(0,o.Uk)("。"),l=(0,o.uE)('<h2 id="inboundobject" tabindex="-1"><a class="header-anchor" href="#inboundobject" aria-hidden="true">#</a> InboundObject</h2><p><code>InboundObject</code> 对应配置文件中 <code>inbounds</code> 项的一个子元素。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;协议名称&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标识&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;allocate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p><code>listen</code>: address</p></blockquote><p>监听地址，IP 地址或 Unix domain socket，默认值为 <code>&quot;0.0.0.0&quot;</code>，表示接收所有网卡上的连接.</p><p>可以指定一个系统可用的 IP 地址。</p>',6),u=(0,o.Uk)("支持填写 Unix domain socket，格式为绝对路径，形如 "),r=(0,o._)("code",null,'"/dev/shm/domain.socket"',-1),i=(0,o.Uk)("，可在开头加 "),d=(0,o._)("code",null,"@",-1),b=(0,o.Uk)(" 代表 "),k={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},q=(0,o.Uk)("abstract"),m=(0,o.Uk)("，"),g=(0,o._)("code",null,"@@",-1),f=(0,o.Uk)(" 则代表带 padding 的 abstract。"),h=(0,o.uE)("<p>填写 Unix domain socket 时，<code>port</code> 和 <code>allocate</code> 将被忽略，协议目前可选 VLESS、VMess、Trojan，传输方式可选 TCP、WebSocket、HTTP/2。</p><blockquote><p><code>port</code>: number | &quot;env:variable&quot; | string</p></blockquote><p>端口。接受的格式如下:</p><ul><li>整型数值：实际的端口号。</li><li>环境变量：以 <code>&quot;env:&quot;</code> 开头，后面是一个环境变量的名称，如 <code>&quot;env:PORT&quot;</code>。Xray 会以字符串形式解析这个环境变量。</li><li>字符串：可以是一个数值类型的字符串，如 <code>&quot;1234&quot;</code>；或者一个数值范围，如 <code>&quot;5-10&quot;</code> 表示端口 5 到端口 10，这 6 个端口。</li></ul><p>当只有一个端口时，Xray 会在此端口监听入站连接。当指定了一个端口范围时，取决于 <code>allocate</code> 设置。</p><blockquote><p><code>protocol</code>: string</p></blockquote>",6),y=(0,o.Uk)("连接协议名称，可选的协议类型见 "),j=(0,o.Uk)("inbound protocols"),v=(0,o.Uk)("。"),_=(0,o._)("blockquote",null,[(0,o._)("p",null,[(0,o._)("code",null,"settings"),(0,o.Uk)(": InboundConfigurationObject")])],-1),U=(0,o._)("p",null,[(0,o.Uk)("具体的配置内容，视协议不同而不同。详见每个协议中的 "),(0,o._)("code",null,"InboundConfigurationObject"),(0,o.Uk)("。")],-1),O=(0,o._)("code",null,"streamSettings",-1),x=(0,o.Uk)(": "),S=(0,o.Uk)("StreamSettingsObject"),w=(0,o.uE)('<p>底层传输方式（transport）是当前 Xray 节点和其它节点对接的方式</p><blockquote><p><code>tag</code>: string 此入站连接的标识，用于在其它的配置中定位此连接。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>当其不为空时，其值必须在所有 <code>tag</code> 中<strong>唯一</strong>。</p></div><blockquote><p><code>sniffing</code>: <a href="#sniffingobject">SniffingObject</a></p></blockquote><p>流量探测主要作用于在透明代理等用途. 比如一个典型流程如下:</p><ol><li>如有一个设备上网,去访问 abc.com,首先设备通过 DNS 查询得到 abc.com 的 IP 是 1.2.3.4,然后设备会向 1.2.3.4 去发起连接.</li><li>如果不设置嗅探,Xray 收到的连接请求是 1.2.3.4,并不能用于域名规则的路由分流.</li><li>当设置了 sniffing 中的 enable 为 true,Xray 处理此连接的流量时,会从流量的数据中,嗅探出域名,即 abc.com</li><li>Xray 会把 1.2.3.4 重置为 abc.com.路由就可以根据域名去进行路由的域名规则的分流</li></ol><p>因为变成了一个向 abc.com 请求的连接, 就可以做更多的事情, 除了路由域名规则分流, 还能重新做 DNS 解析等其他工作.</p><p>当设置了 sniffing 中的 enable 为 true, 还能嗅探出 bittorrent 类型的流量, 然后可以在路由中配置&quot;protocol&quot;项来设置规则处理 BT 流量, 比如服务端用来拦截 BT 流量, 或客户端固定转发 BT 流量到某个 VPS 去等.</p><blockquote><p><code>allocate</code>: <a href="#allocateobject">AllocateObject</a></p></blockquote><p>当设置了多个 port 时, 端口分配的具体设置</p><h3 id="sniffingobject" tabindex="-1"><a class="header-anchor" href="#sniffingobject" aria-hidden="true">#</a> SniffingObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;metadataOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>是否开启流量探测。</p><blockquote><p><code>destOverride</code>: [&quot;http&quot; | &quot;tls&quot; | &quot;fakedns&quot; ]</p></blockquote><p>当流量为指定类型时，按其中包括的目标地址重置当前连接的目标。</p><blockquote><p><code>metadataOnly</code>: true | false</p></blockquote><p>当启用时，将仅使用连接的元数据嗅探目标地址。此时，<code>http</code> 与 <code>tls</code> 将不能使用。</p><h3 id="allocateobject" tabindex="-1"><a class="header-anchor" href="#allocateobject" aria-hidden="true">#</a> AllocateObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>strategy</code>: &quot;always&quot; | &quot;random&quot;</p></blockquote><p>端口分配策略。</p><ul><li><code>&quot;always&quot;</code> 表示总是分配所有已指定的端口，<code>port</code> 中指定了多少个端口，Xray 就会监听这些端口。</li><li><code>&quot;random&quot;</code> 表示随机开放端口，每隔 <code>refresh</code> 分钟在 <code>port</code> 范围中随机选取 <code>concurrency</code> 个端口来监听。</li></ul><blockquote><p><code>refresh</code>: number</p></blockquote><p>随机端口刷新间隔，单位为分钟。最小值为 <code>2</code>，建议值为 <code>5</code>。这个属性仅当 <code>strategy</code> 设置为 <code>&quot;random&quot;</code> 时有效。</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>随机端口数量。最小值为 <code>1</code>，最大值为 <code>port</code> 范围的三分之一。建议值为 <code>3</code>。</p>',27),T={render:function(n,s){const a=(0,o.up)("RouterLink"),T=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e,(0,o._)("p",null,[t,(0,o.Wm)(a,{to:"/en/config/inbounds/"},{default:(0,o.w5)((()=>[p])),_:1}),c]),l,(0,o._)("p",null,[u,r,i,d,b,(0,o._)("a",k,[q,(0,o.Wm)(T)]),m,g,f]),h,(0,o._)("p",null,[y,(0,o.Wm)(a,{to:"/en/config/inbounds/"},{default:(0,o.w5)((()=>[j])),_:1}),v]),_,U,(0,o._)("blockquote",null,[(0,o._)("p",null,[O,x,(0,o.Wm)(a,{to:"/en/config/transport.html#streamsettingsobject"},{default:(0,o.w5)((()=>[S])),_:1})])]),w],64)}}}}]);