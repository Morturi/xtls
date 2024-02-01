import{_ as a,r as s,o as n,c,a as o,b as t,d as r,w as l,e}from"./app-CHJBK7iu.js";const p={},d=e(`<h1 id="traffic-statistics" tabindex="-1"><a class="header-anchor" href="#traffic-statistics"><span>Traffic Statistics</span></a></h1><p>Used to configure traffic statistics for Xray.</p><h2 id="statsobject" tabindex="-1"><a class="header-anchor" href="#statsobject"><span>StatsObject</span></a></h2><p>The <code>StatsObject</code> corresponds to the <code>stats</code> item in the configuration file.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Currently, no parameters are required for traffic statistics, and internal statistics will be enabled as long as the <code>StatsObject</code> item exists.</p>`,6),f=e('<h2 id="retrieving-traffic-statistics" tabindex="-1"><a class="header-anchor" href="#retrieving-traffic-statistics"><span>Retrieving Traffic Statistics</span></a></h2><p>You can use the <code>xray api</code> command to retrieve traffic statistics.</p><p>The current traffic statistics are as follows:</p><ul><li><p>User Data</p><ul><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific user, in bytes.</p></li><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific user, in bytes.</p></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If the corresponding user does not have an email specified, statistics will not be enabled.</p></div><ul><li><p>Global Data</p><ul><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific inbound, in bytes.</p></li><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific inbound, in bytes.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific outbound, in bytes.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific outbound, in bytes.</p></li></ul></li></ul>',6);function g(u,h){const i=s("RouterLink");return n(),c("div",null,[d,o("p",null,[t("After statistics are enabled, you only need to enable the corresponding items in the "),r(i,{to:"/en/config/policy.html"},{default:l(()=>[t("Policy")]),_:1}),t(" to collect the corresponding data.")]),f])}const m=a(p,[["render",g],["__file","stats.html.vue"]]);export{m as default};
