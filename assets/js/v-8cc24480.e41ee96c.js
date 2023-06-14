"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[2475],{76115:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a={key:"v-8cc24480",path:"/en/config/inbounds/vmess.html",title:"VMess",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[{level:3,title:"ClientObject",slug:"clientobject",children:[]},{level:3,title:"DetourObject",slug:"detourobject",children:[]},{level:3,title:"DefaultObject",slug:"defaultobject",children:[]}]},{level:2,title:"VMess MD5 Authentication Tainting Mechanism",slug:"vmess-md5-authentication-tainting-mechanism",children:[]},{level:2,title:"VMess MD5 Authentication Elimination Mechanism",slug:"vmess-md5-authentication-elimination-mechanism",children:[]}],filePathRelative:"en/config/inbounds/vmess.md",git:{updatedTime:1686752227e3,contributors:[{name:"Winston2084",email:"126307318+Winston2084@users.noreply.github.com",commits:1},{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1},{name:"yuhan6665",email:"1588741+yuhan6665@users.noreply.github.com",commits:1}]}}},39030:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var a=t(66252);const s=(0,a._)("h1",{id:"vmess",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),(0,a.Uk)(" VMess")],-1),o=(0,a.Uk)("VMess"),i=(0,a.Uk)(" is an encrypted transport protocol that is commonly used as a bridge between Xray clients and servers."),c=(0,a.uE)('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>VMess relies on system time. Please ensure that the system UTC time used by Xray is within 90 seconds of the actual time, regardless of time zone. On Linux systems, you can install the <code>ntp</code> service to automatically synchronize the system time.</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;detour&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;disableInsecureEncryption&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>An array representing a group of users approved by the server.</p><p>Each item in the array is a user <a href="#clientobject">ClientObject</a>.</p><p>When this configuration is used for dynamic ports, Xray will automatically create users.</p><blockquote><p><code>detour</code>: <a href="#detourobject">DetourObject</a></p></blockquote><p>Indicates that another server should be used for the corresponding outbound protocol.</p><blockquote><p><code>default</code>: <a href="#defaultobject">DefaultObject</a></p></blockquote><p>Optional. The default configuration for clients. Only effective when used with <code>detour</code>.</p><blockquote><p><code>disableInsecureEncryption</code>: true | false</p></blockquote><p>Whether to disable the use of insecure encryption methods by clients. If set to true, the server will actively disconnect the connection when the client specifies the following encryption methods:</p><ul><li><code>&quot;none&quot;</code></li><li><code>&quot;aes-128-cfb&quot;</code></li></ul><p>The default value is <code>false</code>.</p><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID for VMess. It can be any string less than 30 bytes or a valid UUID.</p>',19),l={class:"custom-container tip"},r=(0,a._)("p",{class:"custom-container-title"},"Tip",-1),p=(0,a._)("p",null,"Custom strings and their corresponding UUIDs are equivalent, which means you can use either of the following in the configuration file to identify the same user:",-1),u=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,'"id": "我爱🍉老师1314"')]),(0,a._)("li",null,[(0,a._)("code",null,'"id": "5783a3e7-e373-51cd-8642-c83782b807c5"'),(0,a.Uk)(' (This UUID is the mapping of the string "我爱 🍉 老师 1314")')])],-1),d=(0,a.Uk)("The mapping standard is described in the "),h={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("VLESS UUID Mapping Standard: Mapping a Custom String to a UUIDv5"),b=(0,a.Uk)("."),k=(0,a._)("p",null,[(0,a.Uk)("You can use the command "),(0,a._)("code",null,'xray uuid -i "custom string"'),(0,a.Uk)(" to generate the UUID corresponding to a custom string.")],-1),f=(0,a._)("p",null,[(0,a.Uk)("You can also use the command "),(0,a._)("code",null,"xray uuid"),(0,a.Uk)(" to generate a random UUID. :::")],-1),v=(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a._)("code",null,"level"),(0,a.Uk)(": number")])],-1),g=(0,a.Uk)("The user level that the connection will use to determine the corresponding "),y=(0,a.Uk)("Local Policy"),q=(0,a.Uk)("."),_=(0,a.Uk)("The value of "),U=(0,a._)("code",null,"level",-1),j=(0,a.Uk)(" corresponds to the value of "),D=(0,a._)("code",null,"level",-1),M=(0,a.Uk)(" in the "),T=(0,a.Uk)("policy"),I=(0,a.Uk)(". If not specified, the default value is 0."),w=(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a._)("code",null,"alterId"),(0,a.Uk)(": number")])],-1),x=(0,a._)("p",null,"To further prevent detection, a user can generate additional IDs in addition to the main ID. Here, you only need to specify the number of additional IDs. The recommended value is 0, which means enabling VMessAEAD. The maximum value is 65535. This value cannot exceed the value specified on the server side.",-1),A=(0,a._)("p",null,"If not specified, the default value is 0.",-1),V=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"Tip"),(0,a._)("p",null,[(0,a.Uk)("Setting the client's AlterID to 0 means enabling VMessAEAD. The server automatically adapts to both clients with VMessAEAD enabled and disabled. Clients can force disable VMessAEAD by setting the environment variable "),(0,a._)("code",null,"Xray_VMESS_AEAD_DISABLED=true"),(0,a.Uk)(".")])],-1),E=(0,a.uE)('<blockquote><p><code>email</code>: string</p></blockquote><p>The user&#39;s email address, used to differentiate traffic from different users.</p><h3 id="detourobject" tabindex="-1"><a class="header-anchor" href="#detourobject" aria-hidden="true">#</a> DetourObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>to</code>: string</p></blockquote><p>The <code>tag</code> of an inbound that specifies the inbound using the VMess protocol.</p><h3 id="defaultobject" tabindex="-1"><a class="header-anchor" href="#defaultobject" aria-hidden="true">#</a> DefaultObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>level</code>: number</p></blockquote>',9),O=(0,a.Uk)("The user level that the connection will use to determine the corresponding "),C=(0,a.Uk)("Local Policy"),S=(0,a.Uk)("."),W=(0,a.Uk)("The value of "),L=(0,a._)("code",null,"level",-1),X=(0,a.Uk)(" corresponds to the value of "),P=(0,a._)("code",null,"level",-1),F=(0,a.Uk)(" in the "),H=(0,a.Uk)("policy"),Y=(0,a.Uk)(". If not specified, the default value is 0."),z=(0,a.uE)('<blockquote><p><code>alterId</code>: number</p></blockquote><p>The default <code>alterId</code> for dynamic ports. The default value is 0.</p><h2 id="vmess-md5-authentication-tainting-mechanism" tabindex="-1"><a class="header-anchor" href="#vmess-md5-authentication-tainting-mechanism" aria-hidden="true">#</a> VMess MD5 Authentication Tainting Mechanism</h2><p>To further combat possible detection and blocking, the server-side structure of each VMess authentication data includes a one-time writable taint status flag. The initial state is an untainted state. When the server detects replay attacks or the inbound connection encounters errors that result in incorrect verification data, the authentication data corresponding to that connection will be tainted.</p><p>Tainted authentication data cannot be used to establish a connection. When an attacker or client uses tainted authentication data to establish a connection, the server will output an error message containing <code>invalid user</code> and <code>ErrTainted</code>, and block the connection.</p><p>This mechanism has no impact on normal clients when the server is not subjected to replay attacks.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Malicious programs that have the server UUID and other connection data may launch denial-of-service attacks against the server based on this mechanism. Services that are targeted by such attacks can disable the server&#39;s security protection against such attacks by modifying the <code>atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 1)</code> statement in the <code>func (v *TimedUserValidator) BurnTaintFuse(userHash []byte) error</code> function in the <code>proxy/vmess/validator.go</code> file to <code>atomic.CompareAndSwapUint32(pair.taintedFuse, 0, 0)</code>. Clients using the VMessAEAD authentication mechanism are not affected by the VMess MD5 authentication tainting mechanism.</p></div><h2 id="vmess-md5-authentication-elimination-mechanism" tabindex="-1"><a class="header-anchor" href="#vmess-md5-authentication-elimination-mechanism" aria-hidden="true">#</a> VMess MD5 Authentication Elimination Mechanism</h2><p>The elimination mechanism for VMess MD5 authentication has been activated.</p><p>Starting from January 1, 2022, the server-side compatibility for MD5 authentication is disabled by default. Any client using MD5 authentication will be unable to connect to servers that have disabled VMess MD5 authentication.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>On the server side, you can disable the automatic disabling of MD5 authentication by setting the environment variable <code>xray.vmess.aead.forced=true</code>, or force enable compatibility with the MD5 authentication mechanism by setting <code>xray.vmess.aead.forced=false</code> (not affected by the automatic disabling mechanism in 2022).</p></div><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If there is no need to support old clients, the <code>&quot;alterID&quot;</code> parameter should be removed from the server-side configuration.</p></div>',12),B={render:function(e,n){const t=(0,a.up)("RouterLink"),B=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[(0,a.Wm)(t,{to:"/en/development/protocols/vmess.html"},{default:(0,a.w5)((()=>[o])),_:1}),i]),c,(0,a._)("div",l,[r,p,u,(0,a._)("p",null,[d,(0,a._)("a",h,[m,(0,a.Wm)(B)]),b]),k,f,v,(0,a._)("p",null,[g,(0,a.Wm)(t,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,a.w5)((()=>[y])),_:1}),q]),(0,a._)("p",null,[_,U,j,D,M,(0,a.Wm)(t,{to:"/en/config/policy.html#policyobject"},{default:(0,a.w5)((()=>[T])),_:1}),I]),w,x,A,V]),E,(0,a._)("p",null,[O,(0,a.Wm)(t,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,a.w5)((()=>[C])),_:1}),S]),(0,a._)("p",null,[W,L,X,P,F,(0,a.Wm)(t,{to:"/en/config/policy.html#policyobject"},{default:(0,a.w5)((()=>[H])),_:1}),Y]),z],64)}}}}]);