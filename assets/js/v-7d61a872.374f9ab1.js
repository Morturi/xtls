"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8813],{73872:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-7d61a872",path:"/en/config/outbounds/trojan.html",title:"Trojan",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[{level:3,title:"ServerObject",slug:"serverobject",children:[]}]}],filePathRelative:"en/config/outbounds/trojan.md",git:{updatedTime:1686752227e3,contributors:[{name:"yuhan6665",email:"1588741+yuhan6665@users.noreply.github.com",commits:3},{name:"Winston2084",email:"126307318+Winston2084@users.noreply.github.com",commits:1},{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},11049:(n,s,e)=>{e.r(s),e.d(s,{default:()=>g});var a=e(66252);const o=(0,a._)("h1",{id:"trojan",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#trojan","aria-hidden":"true"},"#"),(0,a.Uk)(" Trojan")],-1),t={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("Trojan"),r=(0,a.Uk)(" protocol"),l=(0,a.uE)('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Trojan is designed to work with correctly configured encrypted TLS tunnels.</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array representing a list of servers, where each item is a <a href="#serverobject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>The server address, which can be an IPv4, IPv6, or domain name. Required.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The server port, usually the same port that the server is listening on.</p><blockquote><p><code>password</code>: string</p></blockquote><p>The password for authentication. Required. It can be any string.</p><blockquote><p><code>email</code>: string</p></blockquote><p>The email address, optional, used to identify the user.</p><blockquote><p><code>level</code>: number</p></blockquote>',16),c=(0,a.Uk)("The user level. Connections will use the corresponding "),u=(0,a.Uk)("local policy"),i=(0,a.Uk)(" associated with this user level."),d=(0,a.Uk)("The "),b=(0,a._)("code",null,"level",-1),k=(0,a.Uk)(" value corresponds to the "),m=(0,a._)("code",null,"level",-1),h=(0,a.Uk)(" value in the "),q=(0,a.Uk)("policy"),v=(0,a.Uk)(". If not specified, the default value is 0."),g={render:function(n,s){const e=(0,a.up)("OutboundLink"),g=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[(0,a._)("a",t,[p,(0,a.Wm)(e)]),r]),l,(0,a._)("p",null,[c,(0,a.Wm)(g,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,a.w5)((()=>[u])),_:1}),i]),(0,a._)("p",null,[d,b,k,m,h,(0,a.Wm)(g,{to:"/en/config/policy.html#policyobject"},{default:(0,a.w5)((()=>[q])),_:1}),v])],64)}}}}]);