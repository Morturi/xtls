import{_ as r,r as o,o as d,c as i,a as n,b as e,d as t,w as u,e as a}from"./app-tScPpTI1.js";const h={},T=e("h1",{id:"splithttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#splithttp"},[e("span",null,"SplitHTTP")])],-1),k=a(`<p>使用HTTP分块传输编码流式响应处理下载，使用多个HTTP POST请求进行上传。</p><p>可以通过不支持WebSocket的CDN上，但仍有一些要求：</p><ul><li>CDN必须支持HTTP分块传输，且支持流式响应而不会缓冲，核心将会发送 <code>X-Accel-Buffering: no</code> 以及 <code>Content-Type: text/event-stream</code> 以告知CDN，但是需要CDN遵守此标头。如果中间盒不支持流式响应而导致连接被挂起，则该传输很可能无法工作。</li></ul><p>目的与V2fly Meek相同，由于使用了流式响应处理下载，下行速率更为优秀，上行也经过优化但仍非常有限，也因此对 HTTP 中间盒要求更高（见上）。</p><p><code>SplitHTTP</code> 也接受 <code>X-Forwarded-For</code> header。</p><h2 id="splithttpobject" tabindex="-1"><a class="header-anchor" href="#splithttpobject"><span>SplitHttpObject</span></a></h2><p>The <code>SplitHttpObject</code> 对应传输配置的 <code>splithttpSettings</code> 项。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxUploadSize&quot;</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxConcurrentUploads&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minUploadIntervalMs&quot;</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>path</code>: string</p></blockquote><p>SplitHTTP 所使用的 HTTP 协议路径，默认值为 <code>&quot;/&quot;</code>。</p><blockquote><p><code>host</code>: string</p></blockquote><p>SplitHTTP 的HTTP请求中所发送的host，默认值为空。若服务端值为空时，不验证客户端发送来的host值。</p><p>当在服务端指定该值，或在 <code>headers</code> 中指定host，将会校验与客户端请求host是否一致。</p><p>客户端选择发送的host优先级 <code>host</code> &gt; <code>headers</code> &gt; <code>address</code></p><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。</p><blockquote><p><code>maxUploadSize</code>: int/string</p></blockquote><p>上传分块的最大大小，单位为字节，客户端默认为 1MB, 服务端默认为 2MB .</p><p>客户端设置的大小必须低于该值，否则当发送的 POST 请求大于服务端设置的值时，请求会被拒绝。</p><p>这个值应该小于CDN或其他HTTP反向代理所允许的最大请求体，否则将抛出 HTTP 413 错误。</p><p>也可以是字符串 &quot;1000000-2000000&quot; 的形式，核心每次会在范围内随机选择一个值，以减少指纹。</p><blockquote><p><code>maxConcurrentUploads</code>: int/string</p></blockquote><p>单个连接上传post的最大并发数，客户端默认为100, 服务端默认为200。</p><p>客户端实际发起的数量必须低于服务端。(实际情况下并发数量一般不会超过20，很难达到上限，所以实际上客户端设置的值可以超过服务端，但不建议这么做)</p><p>也可以是字符串 &quot;100-200&quot; 的形式，核心每次会在范围内随机选择一个值，以减少指纹。</p><blockquote><p>&#39;minUploadIntervalMs&#39;: int/string</p></blockquote><p>仅客户端，若上传缓冲区未满，则核心会在该间隔后直接发送缓冲区内数据避免长时间积压小流量数据。默认值为 30.</p><p>也可以是字符串 &quot;30-60&quot; 的形式，核心每次会在范围内随机选择一个值，以减少指纹。</p><h2 id="http-版本" tabindex="-1"><a class="header-anchor" href="#http-版本"><span>HTTP 版本</span></a></h2><h3 id="客户端行为" tabindex="-1"><a class="header-anchor" href="#客户端行为"><span>客户端行为</span></a></h3><p>默认情况下，客户端将会默认在未启用 TLS 时使用 http/1.1, 启用 TLS 时，使用 h2.</p><p>当启用 TLS 时，允许在 TLS 设置的 alpn 数组内设置 http/1.1 h2 h3 来指定具体的http版本(仅当该数组只有一个元素时生效，若填入多个元素则返回默认行为)</p><h3 id="服务端行为" tabindex="-1"><a class="header-anchor" href="#服务端行为"><span>服务端行为</span></a></h3><p>默认情况下，客户端将会默认监听 TCP, 此时可以处理 http/1.1 和 h2 流量。</p><p>当启用 TLS 时，允许在 TLS 设置的 alpn 数组内设置 h3, 此时服务端将改为监听 UDP 端口, 处理 h3 流量。</p><h3 id="小提示" tabindex="-1"><a class="header-anchor" href="#小提示"><span>小提示</span></a></h3><p>由于该协议为标准的 HTTP 请求，所以对于 HTTP 版本的转换并不敏感，各种中间盒都可能转换 HTTP 版本。</p><p>列如：你希望使用 h3 连接 Cloudflare, 但是Cloudflare 不会使用 h3 回源, 而是使用 http/1.1 或 h2 回源，此时客户端 alpn 应为 h3, 而服务端就不应为 h3, 因为发往服务端的请求不是 h3.</p><h2 id="browser-dialer" tabindex="-1"><a class="header-anchor" href="#browser-dialer"><span>Browser Dialer</span></a></h2>`,39),b=e("h2",{id:"协议细节",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#协议细节"},[e("span",null,"协议细节")])],-1),q={href:"https://github.com/XTLS/Xray-core/pull/3412",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/XTLS/Xray-core/pull/3462",target:"_blank",rel:"noopener noreferrer"},_=a("<ol><li><p>使用 <code>GET /&lt;UUID&gt;</code> 开始下载。服务器立即回复 <code>200 OK</code> 和 <code>Transfer Encoding:chunked</code> , 并立即发送一个两字节的有效负载，以强制HTTP中间盒刷新标头。</p></li><li><p>使用 <code>POST /&lt;UUID&gt;/&lt;seq&gt;</code> 开始发送上行数据. <code>seq</code> 作用类似于 TCP 序列号，从0开始，数据包可以被同时发送，服务端必须按序列号将数据重组。序列号不应重置。</p><p>客户端可以以任意决定打开上行与下行请求的顺序，任何一种都可以启动会话，但是必须要在30秒内打开 <code>GET</code> 连接，否则会话将被终止。</p></li><li><p><code>GET</code> 请求将一直保持在打开状态直到连接被终止，服务端和客户端都可以关闭连接。具体行为取决于HTTP版本。</p></li></ol><p>建议:</p><ul><li><p>不要期望CDN会正确传输所有标头，这个协议的目的是为了穿透不支持WS的CDN，而这些CDN的行为通常不怎么友好。</p></li><li><p>应当假设所有HTTP连接都不支持流式请求，所以上行连接发送的的每个包的大小应该基于延迟、吞吐量以及中间盒本身的限制考虑(类似TCP的MTU与纳格算法)。</p></li></ul>",3);function v(g,P){const p=o("I18nTip"),c=o("Badge"),l=o("RouterLink"),s=o("ExternalLinkIcon");return d(),i("div",null,[n(p),T,n(c,{text:"v1.8.16+",type:"warning"}),k,e("p",null,[t("如果使用HTTPS，该传输还支持 "),n(l,{to:"/config/features/browser_dialer.html"},{default:u(()=>[t("Browser Dialer")]),_:1})]),b,e("p",null,[t("讨论详见 "),e("a",q,[t("#3412"),n(s)]),t(" 和 "),e("a",m,[t("#3462"),n(s)]),t(" 以下是简述和简要兼容实现要求")]),_])}const H=r(h,[["render",v],["__file","splithttp.html.vue"]]);export{H as default};
