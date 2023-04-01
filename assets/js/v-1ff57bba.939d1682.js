"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5890],{16075:(e,o,a)=>{a.r(o),a.d(o,{data:()=>s});const s={key:"v-1ff57bba",path:"/config/transports/websocket.html",title:"WebSocket",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"WebSocketObject",slug:"websocketobject",children:[]},{level:2,title:"Browser Dialer",slug:"browser-dialer",children:[]}],filePathRelative:"config/transports/websocket.md",git:{updatedTime:1680362439e3,contributors:[{name:"Jim Han",email:"50871214+JimhHan@users.noreply.github.com",commits:4},{name:"JimhHan",email:"50871214+JimhHan@users.noreply.github.com",commits:4},{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1},{name:"picklefan",email:"34882095+picklefan@users.noreply.github.com",commits:1}]}}},63074:(e,o,a)=>{a.r(o),a.d(o,{default:()=>b});var s=a(66252);const n=(0,s.uE)('<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h1><p>使用标准的 WebSocket 来传输数据。</p><p>WebSocket 连接可以被其它 HTTP 服务器（如 Nginx）分流，也可以被 VLESS fallbacks path 分流。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Websocket 会识别 HTTP 请求的 X-Forwarded-For 头来覆写流量的源地址，优先级高于 PROXY protocol。</p></div><h2 id="websocketobject" tabindex="-1"><a class="header-anchor" href="#websocketobject" aria-hidden="true">#</a> WebSocketObject</h2><p><code>WebSocketObject</code> 对应传输配置的 <code>wsSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;acceptProxyProtocol&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>acceptProxyProtocol</code>: true | false</p></blockquote><p>仅用于 inbound，指示是否接收 PROXY protocol。</p>',9),t={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("PROXY protocol"),r=(0,s.Uk)(" 专用于传递请求的真实来源 IP 和端口，"),p=(0,s._)("strong",null,"若你不了解它，请先忽略该项",-1),l=(0,s.Uk)("。"),i=(0,s.uE)('<p>常见的反代软件（如 HAProxy、Nginx）都可以配置发送它，VLESS fallbacks xver 也可以发送它。</p><p>填写 <code>true</code> 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭。</p><blockquote><p><code>path</code>: string</p></blockquote><p>WebSocket 所使用的 HTTP 协议路径，默认值为 <code>&quot;/&quot;</code>。</p><p>如果路径中包含 <code>ed</code> 参数，将会启用 <code>Early Data</code> 以降低延迟，其值为首包长度阈值。如果首包长度超过此值，就不会启用 <code>Early Data</code>。建议的值为 2048。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>Early Data</code> 使用 <code>Sec-WebSocket-Protocol</code> 头承载数据。如果你遇到兼容性问题，可以尝试调低阈值。</p></div><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。</p><p>默认值为空。</p><h2 id="browser-dialer" tabindex="-1"><a class="header-anchor" href="#browser-dialer" aria-hidden="true">#</a> Browser Dialer</h2>',10),u=(0,s.Uk)("使用浏览器处理 TLS，详见 "),d=(0,s.Uk)("Browser Dialer"),b={render:function(e,o){const a=(0,s.up)("OutboundLink"),b=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s._)("p",null,[(0,s._)("a",t,[c,(0,s.Wm)(a)]),r,p,l]),i,(0,s._)("p",null,[u,(0,s.Wm)(b,{to:"/config/features/browser_dialer.html"},{default:(0,s.w5)((()=>[d])),_:1})])],64)}}}}]);