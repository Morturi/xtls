"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[9886],{36544:(e,n,o)=>{o.r(n),o.d(n,{data:()=>s});const s={key:"v-64e47ef4",path:"/en/config/outbounds/blackhole.html",title:"Blackhole",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[{level:3,title:"ResponseObject",slug:"responseobject",children:[]}]}],filePathRelative:"en/config/outbounds/blackhole.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},16798:(e,n,o)=>{o.r(n),o.d(n,{default:()=>u});var s=o(66252);const a=(0,s._)("h1",{id:"blackhole",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#blackhole","aria-hidden":"true"},"#"),(0,s.Uk)(" Blackhole")],-1),t=(0,s.Uk)("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),c=(0,s.Uk)("路由配置"),l=(0,s.Uk)(" 一起使用，可以达到禁止访问某些网站的效果。"),p=(0,s.uE)('<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>response</code>: <a href="#responseobject">ResponseObject</a></p></blockquote><p>配置黑洞的响应数据。</p><p>Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接，待转发的数据将被丢弃。 如不指定此项，Blackhole 将直接关闭连接。</p><h3 id="responseobject" tabindex="-1"><a class="header-anchor" href="#responseobject" aria-hidden="true">#</a> ResponseObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: &quot;http&quot; | &quot;none&quot;</p></blockquote><p>当 <code>type</code> 为 <code>&quot;none&quot;</code>（默认值）时，Blackhole 将直接关闭连接。</p><p>当 <code>type</code> 为 <code>&quot;http&quot;</code> 时，Blackhole 会发回一个简单的 HTTP 403 数据包，然后关闭连接。</p>',10),u={render:function(e,n){const o=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,(0,s._)("p",null,[t,(0,s.Wm)(o,{to:"/en/config/routing.html"},{default:(0,s.w5)((()=>[c])),_:1}),l]),p],64)}}}}]);