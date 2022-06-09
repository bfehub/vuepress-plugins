import{J as n,K as s,L as a,M as e}from"./clientConfigs.3223cc12.js";const p={},t=e(`<h1 id="\u9875\u9762\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6620\u5C04" aria-hidden="true">#</a> \u9875\u9762\u6620\u5C04</h1><p>\u901A\u5E38\u5728\u7F16\u5199\u7EC4\u4EF6\u7684\u6587\u6863\u7684\u65F6\u5019\u6211\u4EEC\u53EF\u80FD\u4F1A\u628A\u7EC4\u4EF6\u7684\u6587\u6863\u76F4\u63A5\u548C\u7EC4\u4EF6\u7684\u5B9E\u73B0\u653E\u5728\u4E00\u8D77\uFF0C\u8FD9\u65F6\u5019 VuePress \u4E0D\u80FD\u5F88\u597D\u7684\u5904\u7406\u8DEF\u5F84\uFF0C\u5982\u4EE5\u4E0B\u7ED3\u6784\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 README.md
\u2502   \u251C\u2500\u2500 components // \u4ECB\u7ECD\u7EC4\u4EF6\u7684\u6587\u6863
\u2502   \u2502   \u2514\u2500\u2500 README.md
\u251C\u2500\u2500 packages
\u2502   \u251C\u2500\u2500 components
\u2502   \u2502   \u251C\u2500\u2500 npm-badge
\u2502   \u2502   \u2502   \u251C\u2500\u2500 docs // \u5177\u4F53\u7EC4\u4EF6\u7684\u6587\u6863
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 index.md
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.zh-CN.md
\u2502   \u2502   \u2502   \u251C\u2500\u2500 examples
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 basic.vue
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 npm-badge.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D @bfehub/vuepress-plugin-page-map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> pageMapPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@bfehub/vuepress-plugin-page-map&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">pageMapPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageMapPluginOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u5339\u914D\u89C4\u5219
   */</span>
  patterns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/**
   * \u81EA\u5B9A\u4E49\u8DEF\u5F84\u66FF\u6362
   */</span>
  <span class="token function-variable function">pathMapRule</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u627E\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u8303\u56F4" aria-hidden="true">#</a> \u67E5\u627E\u8303\u56F4</h3><p>\u5B9A\u4E49\u67E5\u627E\u6587\u4EF6\u7684\u8DEF\u5F84\u4ECE <code>vuepress</code> \u6839\u914D\u7F6E\u5F00\u542F\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;../src/**/*.md&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;../packages/**/*.md&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;!../src/**/node_modules&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;!../packages/**/node_modules&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u5F84\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84\u5904\u7406" aria-hidden="true">#</a> \u8DEF\u5F84\u5904\u7406</h3><p>\u7EDF\u4E00\u7684\u8DEF\u5F84\u6620\u5C04\u5904\u7406\uFF0C\u53EA\u9700\u5904\u7406\u5230\u60F3\u8981\u7684\u8DEF\u5F84\u5373\u53EF\uFF0C\u591A\u8BED\u8A00\u5728\u5185\u90E8\u5904\u7406\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">pathMapRule</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">path</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> paths<span class="token punctuation">.</span>length

  <span class="token comment">// /User/project/path/button/index.md</span>
  <span class="token comment">// -&gt; components/button/index.md</span>

  <span class="token comment">// /User/project/path/button/index.zh-CN.md</span>
  <span class="token comment">// -&gt; components/button/index.zh-CN.md</span>

  <span class="token comment">// /User/project/path/button/docs/index.md</span>
  <span class="token comment">// -&gt; components/button/index.md</span>

  <span class="token comment">// /User/project/path/button/docs/index.zh-CN.md</span>
  <span class="token comment">// -&gt; components/button/index.zh-CN.md</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">components/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
    paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;docs&#39;</span> <span class="token operator">?</span> paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">:</span> paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u8BED\u8A00\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u89C4\u5219" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u89C4\u5219</h2><p>\u652F\u6301\u591A\u8BED\u8A00\u7684\u8DEF\u5F84\u6620\u5C04\uFF0C\u5982\u914D\u7F6E\u4E86 <code>locales</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u7684\u540D\u79F0\u52A0\u4E0A\u5BF9\u5E94 <code>lang</code> \u7684\u540D\u79F0\uFF0C\u4F1A\u5728\u6700\u7EC8\u8DEF\u5F84\u524D\u7F00\u52A0\u4E0A\u4E0A\u8BED\u8A00\u7684\u8DEF\u5F84\u3002</p><p><code>components/button/index.md</code> -&gt; <code>/components/button/index.md</code></p><p><code>components/button/index.en-US.md</code> -&gt; <code>/components/button/index.md</code></p><p><code>components/button/index.zh-CN.md</code> -&gt; <code>/zh/components/button/index.md</code></p>`,21),i=[t];function o(c,l){return s(),a("div",null,i)}var d=n(p,[["render",o],["__file","page-map.html.vue"]]);export{d as default};
