import{_ as c,r as e,o as p,c as i,a,b as l,d as t,w as d,e as n}from"./app-DOARXrL_.js";const g={},r=n(`<h1 id="статистика" tabindex="-1"><a class="header-anchor" href="#статистика"><span>Статистика</span></a></h1><p>Используется для настройки сбора статистики трафика Xray.</p><h2 id="statsobject" tabindex="-1"><a class="header-anchor" href="#statsobject"><span>StatsObject</span></a></h2><p><code>StatsObject</code> соответствует полю <code>stats</code> в конфигурационном файле.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В настоящее время для статистики не требуется никаких параметров.<br> Если поле <code>StatsObject</code> присутствует, внутренняя статистика включается.</p>`,6),u=n('<h2 id="получение-статистики" tabindex="-1"><a class="header-anchor" href="#получение-статистики"><span>Получение статистики</span></a></h2><p>Вы можете получить статистику с помощью соответствующих команд <code>xray api</code>.</p><p>В настоящее время доступна следующая статистика:</p><ul><li><p>Данные пользователя</p><ul><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>Исходящий трафик для определенного пользователя в байтах.</p></li><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>Входящий трафик для определенного пользователя в байтах.</p></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если для пользователя не указан email, статистика для него не будет собираться.</p></div><ul><li><p>Глобальные данные</p><ul><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>Исходящий трафик для определенного входящего подключения в байтах.</p></li><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>Входящий трафик для определенного входящего подключения в байтах.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>Исходящий трафик для определенного исходящего подключения в байтах.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>Входящий трафик для определенного исходящего подключения в байтах.</p></li></ul></li></ul>',6);function f(h,m){const s=e("I18nTip"),o=e("RouterLink");return p(),i("div",null,[a(s),r,l("p",null,[t("После включения статистики вам нужно только включить соответствующие параметры в разделе "),a(o,{to:"/ru/config/policy.html"},{default:d(()=>[t("Политики")]),_:1}),t(", чтобы начать сбор статистики.")]),u])}const b=c(g,[["render",f],["__file","stats.html.vue"]]);export{b as default};
