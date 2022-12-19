"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[3091],{6431:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-255a6ebf",path:"/en/config/inbounds/vless.html",title:"VLESS",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[{level:3,title:"ClientObject",slug:"clientobject",children:[]}]}],filePathRelative:"en/config/inbounds/vless.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},6678:(n,s,a)=>{a.r(s),a.d(s,{default:()=>z});var e=a(6252);const t=(0,e._)("h1",{id:"vless",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#vless","aria-hidden":"true"},"#"),(0,e.Uk)(" VLESS")],-1),o=(0,e._)("div",{class:"custom-container danger"},[(0,e._)("p",{class:"custom-container-title"},"DANGER"),(0,e._)("p",null,"目前 VLESS 没有自带加密，请用于可靠信道，如 TLS。 目前 VLESS 不支持分享。")],-1),l=(0,e._)("p",null,"VLESS 是一个无状态的轻量传输协议，它分为入站和出站两部分，可以作为 Xray 客户端和服务器之间的桥梁。",-1),p=(0,e.Uk)("与 "),c=(0,e.Uk)("VMess"),u=(0,e.Uk)(" 不同，VLESS 不依赖于系统时间，认证方式同样为 UUID，但不需要 alterId。"),r=(0,e.uE)('<h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;decryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户 <a href="#clientobject">ClientObject</a>。</p><blockquote><p><code>decryption</code>: &quot;none&quot;</p></blockquote><p>现阶段需要填 <code>&quot;none&quot;</code>，不能留空。 若未正确设置 decryption 的值，使用 Xray 或 -test 时会收到错误信息。</p><p>注意这里是 decryption，和 clients 同级。 decryption 和 vmess 协议的 encryption 的位置不同，是因为若套一层约定加密，服务端需要先解密才能知道是哪个用户。</p>',8),i=(0,e._)("code",null,"fallbacks",-1),d=(0,e.Uk)(": [ "),k=(0,e.Uk)("FallbackObject"),b=(0,e.Uk)(" ]"),m=(0,e.Uk)("一个数组，包含一系列强大的回落分流配置（可选）。 fallbacks 的具体配置请点击 "),q=(0,e.Uk)("FallbackObject"),g=(0,e.uE)('<h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>VLESS 的用户 ID，可以是任意小于 30 字节的字符串, 也可以是一个合法的 UUID. 自定义字符串和其映射的 UUID 是等价的, 这意味着你将可以这样在配置文件中写 id 来标识同一用户,即</p><ul><li>写 <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>或写 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (此 UUID 是 <code>我爱🍉老师1314</code> 的 UUID 映射)</li></ul>',5),U=(0,e.Uk)("其映射标准在 "),f={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("VLESS UUID 映射标准：将自定义字符串映射为一个 UUIDv5"),h=(0,e._)("p",null,[(0,e.Uk)("你可以使用命令 "),(0,e._)("code",null,'xray uuid -i "自定义字符串"'),(0,e.Uk)(" 生成自定义字符串所映射的的 UUID。")],-1),y=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("也可以使用命令 "),(0,e._)("code",null,"xray uuid"),(0,e.Uk)(" 生成随机的 UUID.")])],-1),v=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e._)("code",null,"level"),(0,e.Uk)(": number")])],-1),x=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),S=(0,e.Uk)("本地策略"),j=(0,e.Uk)("。"),D=(0,e.Uk)("level 的值, 对应 "),E=(0,e.Uk)("policy"),w=(0,e.Uk)(" 中 "),L=(0,e._)("code",null,"level",-1),I=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),C=(0,e.uE)("<blockquote><p><code>email</code>: string</p></blockquote><p>用户邮箱，用于区分不同用户的流量（会体现在日志、统计中）。</p><blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前入站协议中有以下流控模式可选：</p><ul><li><code>xtls-rprx-origin</code>：最初的流控模式，此时客户端仅可选择 <code>xtls-rprx-origin</code> 和 <code>xtls-rprx-origin-udp443</code> 这两种流控模式。该模式纪念价值大于实际使用价值。</li><li><code>xtls-rprx-direct</code>：<strong>推荐</strong>，所有平台皆可使用的典型流控方式，此时客户端可选择任何流控模式</li></ul>",6),O={class:"custom-container warning"},V=(0,e._)("p",{class:"custom-container-title"},"注意",-1),X=(0,e.Uk)("当 "),W=(0,e._)("code",null,"flow",-1),T=(0,e.Uk)(" 被指定时，还需要将该入站协议的 "),P=(0,e._)("code",null,"streamSettings.security",-1),R=(0,e.Uk)(" 一项指定为 "),A=(0,e._)("code",null,"xtls",-1),F=(0,e.Uk)("，"),B=(0,e._)("code",null,"tlsSettings",-1),G=(0,e.Uk)(" 改为 "),H=(0,e._)("code",null,"xtlsSettings",-1),K=(0,e.Uk)("。详情请参考 "),M=(0,e.Uk)("streamSettings"),N=(0,e.Uk)("。"),Y=(0,e._)("p",null,"此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。",-1),z={render:function(n,s){const a=(0,e.up)("RouterLink"),z=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,o,l,(0,e._)("p",null,[p,(0,e.Wm)(a,{to:"/en/config/inbounds/vmess.html"},{default:(0,e.w5)((()=>[c])),_:1}),u]),r,(0,e._)("blockquote",null,[(0,e._)("p",null,[i,d,(0,e.Wm)(a,{to:"/en/config/features/fallback.html"},{default:(0,e.w5)((()=>[k])),_:1}),b])]),(0,e._)("p",null,[m,(0,e.Wm)(a,{to:"/en/config/features/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE"},{default:(0,e.w5)((()=>[q])),_:1})]),g,(0,e._)("p",null,[U,(0,e._)("a",f,[_,(0,e.Wm)(z)])]),h,y,v,(0,e._)("p",null,[x,(0,e.Wm)(a,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[S])),_:1}),j]),(0,e._)("p",null,[D,(0,e.Wm)(a,{to:"/en/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[E])),_:1}),w,L,I]),C,(0,e._)("div",O,[V,(0,e._)("p",null,[X,W,T,P,R,A,F,B,G,H,K,(0,e.Wm)(a,{to:"/en/config/transport.html#streamsettingsobject"},{default:(0,e.w5)((()=>[M])),_:1}),N])]),Y],64)}}}}]);