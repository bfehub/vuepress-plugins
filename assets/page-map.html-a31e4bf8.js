import{_ as n,B as s,C as a,a7 as e}from"./framework-cb0d5945.js";const p={},t=e(`<h1 id="页面映射" tabindex="-1"><a class="header-anchor" href="#页面映射" aria-hidden="true">#</a> 页面映射</h1><p>通常在编写组件的文档的时候我们可能会把组件的文档直接和组件的实现放在一起，这时候 VuePress 不能很好的处理路径。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @bfehub/vuepress-plugin-page-map@1.60.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pageMapPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@bfehub/vuepress-plugin-page-map&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pageMapPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><p>如果有以下目录结构。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── docs
│   ├── README.md
│   ├── components // 介绍组件的文档
│   │   └── README.md
├── packages
│   ├── components
│   │   ├── npm-badge
│   │   │   ├── docs // 具体组件的文档
│   │   │   │   ├── index.md
│   │   │   │   └── index.zh-CN.md
│   │   │   ├── examples
│   │   │   │   └── basic.vue
│   │   │   └── src
│   │   │       └── npm-badge.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上组件的文档的 <em>访问路径</em> 和 <em>临时文件</em> 的路径就会被转换成。</p><p><code>/packages/components/npm-badge/docs/index.md</code> =&gt; <code>/components/npm-badge/index.md</code></p><p><code>/packages/components/npm-badge/docs/index.zh-CN.md</code> =&gt; <code>/zh/components/npm-badge/index.md</code></p><h2 id="多语言规则" tabindex="-1"><a class="header-anchor" href="#多语言规则" aria-hidden="true">#</a> 多语言规则</h2><p>首先需要配置 <code>vuepress</code> 的 <code>locales</code> 配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件的名称加上对应 <code>lang</code> 的名称，会在最终路径前缀加上语言的路径。</p><p><code>components/npm-badge/index.md</code> -&gt; <code>/components/npm-badge/index.md</code></p><p><code>components/npm-badge/index.en-US.md</code> -&gt; <code>/components/npm-badge/index.md</code></p><p><code>components/npm-badge/index.zh-CN.md</code> -&gt; <code>/zh/components/npm-badge/index.md</code></p><p>然后可以在 <code>sidebar</code> 配置中这样使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> en <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/components/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Intro&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/components/README.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Components&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/components/npm-badge/index.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> zh <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/zh/components/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;指引&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/zh/components/README.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;组件&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/zh/components/npm-badge/index.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageMapPluginOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 匹配规则
   */</span>
  patterns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/**
   * 自定义路径规则
   */</span>
  <span class="token function-variable function">pathMapRule</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找范围" tabindex="-1"><a class="header-anchor" href="#查找范围" aria-hidden="true">#</a> 查找范围</h3><p>定义查找文件的路径从 <code>vuepress</code> 根配置开启，默认配置从 <code>docs</code> 目录时如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">pageMapPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;../packages/**/*.md&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">!</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;../packages/**/node_modules&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径处理" tabindex="-1"><a class="header-anchor" href="#路径处理" aria-hidden="true">#</a> 路径处理</h3><p>统一的路径映射处理，只需处理到想要的路径即可，多语言在内部处理，默认配置如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">pageMapPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">pathMapRule</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> paths <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> paths<span class="token punctuation">.</span>length

    <span class="token comment">// /User/project/path/npm-badge/index.md</span>
    <span class="token comment">// -&gt; components/npm-badge/index.md</span>

    <span class="token comment">// /User/project/path/npm-badge/index.zh-CN.md</span>
    <span class="token comment">// -&gt; components/npm-badge/index.zh-CN.md</span>

    <span class="token comment">// /User/project/path/npm-badge/docs/index.md</span>
    <span class="token comment">// -&gt; components/npm-badge/index.md</span>

    <span class="token comment">// /User/project/path/npm-badge/docs/index.zh-CN.md</span>
    <span class="token comment">// -&gt; components/npm-badge/index.zh-CN.md</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">components/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
      paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;docs&#39;</span> <span class="token operator">?</span> paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">:</span> paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>paths<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","page-map.html.vue"]]);export{u as default};
