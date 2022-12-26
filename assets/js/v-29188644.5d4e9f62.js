"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[4316],{4293:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-29188644",path:"/en/config/inbounds/trojan.html",title:"Trojan",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[{level:3,title:"ClientObject",slug:"clientobject",children:[]}]}],filePathRelative:"en/config/inbounds/trojan.md",git:{updatedTime:1672024157e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1},{name:"yuhan6665",email:"1588741+yuhan6665@users.noreply.github.com",commits:1}]}}},5541:(n,s,a)=>{a.r(s),a.d(s,{default:()=>A});var e=a(6252);const t=(0,e._)("h1",{id:"trojan",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),(0,e.Uk)(" Trojan")],-1),o={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Trojan"),p=(0,e.Uk)(" 协议"),c=(0,e.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Trojan 被设计工作在正确配置的加密 TLS 隧道</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户 <a href="#clientobject">ClientObject</a>。</p>',6),r=(0,e._)("code",null,"fallbacks",-1),u=(0,e.Uk)(": [ "),i=(0,e.Uk)("FallbackObject"),b=(0,e.Uk)(" ]"),k=(0,e.Uk)("一个数组，包含一系列强大的回落分流配置（可选）。 fallbacks 的具体配置请点击"),d=(0,e.Uk)("FallbackObject"),m=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Xray 的 Trojan 有完整的 fallbacks 支持，配置方式完全一致。 触发回落的条件也与 VLESS 类似：首包长度 &lt; 58 或第 57 个字节不为 <code>\\r</code>（因为 Trojan 没有协议版本）或身份认证失败。</p></div><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>password</code>: string</p></blockquote><p>必填，任意字符串。</p><blockquote><p><code>email</code>: string</p></blockquote><p>邮件地址，可选，用于标识用户</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>如果存在多个 ClientObject, 请注意 email 不可以重复。</p></div><blockquote><p><code>level</code>: number</p></blockquote>',9),g=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),q=(0,e.Uk)("本地策略"),h=(0,e.Uk)("。"),f=(0,e.Uk)("userLevel 的值, 对应 "),j=(0,e.Uk)("policy"),_=(0,e.Uk)(" 中 "),y=(0,e._)("code",null,"level",-1),v=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),x=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("code",null,"flow"),(0,e.Uk)(": string")])],-1),U=(0,e._)("p",null,"流控模式，用于选择 XTLS 的算法。",-1),w=(0,e._)("p",null,"目前入站协议中有以下流控模式可选：",-1),T=(0,e._)("code",null,"xtls-rprx-origin",-1),C=(0,e.Uk)("：最初的流控模式，此时客户端仅可选择 "),O=(0,e._)("code",null,"xtls-rprx-origin",-1),D=(0,e.Uk)(" 和 "),E=(0,e._)("code",null,"xtls-rprx-origin-udp443",-1),L=(0,e.Uk)(" 这两种流控模式。该模式纪念价值大于实际使用价值。"),S=(0,e._)("code",null,"xtls-rprx-direct",-1),W=(0,e.Uk)("："),X=(0,e._)("strong",null,"推荐",-1),P=(0,e.Uk)("，所有平台皆可使用的典型流控方式，此时客户端可选择任何流控模式 "),R=(0,e._)("p",null,"此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。",-1),A={render:function(n,s){const a=(0,e.up)("OutboundLink"),A=(0,e.up)("RouterLink"),I=(0,e.up)("Badge");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e._)("a",o,[l,(0,e.Wm)(a)]),p]),c,(0,e._)("blockquote",null,[(0,e._)("p",null,[r,u,(0,e.Wm)(A,{to:"/en/config/examples/fallback.html"},{default:(0,e.w5)((()=>[i])),_:1}),b])]),(0,e._)("p",null,[k,(0,e.Wm)(A,{to:"/en/config/examples/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE"},{default:(0,e.w5)((()=>[d])),_:1})]),m,(0,e._)("p",null,[g,(0,e.Wm)(A,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[q])),_:1}),h]),(0,e._)("p",null,[f,(0,e.Wm)(A,{to:"/en/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[j])),_:1}),_,y,v]),x,U,w,(0,e._)("ul",null,[(0,e._)("li",null,[T,C,O,D,E,L,(0,e.Wm)(I,{text:"Deprecated",type:"warning"})]),(0,e._)("li",null,[S,W,X,P,(0,e.Wm)(I,{text:"Deprecated",type:"warning"})])]),R],64)}}}}]);