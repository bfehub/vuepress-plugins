import{K as n,L as s,M as a,N as e}from"./chunk-X6HE2CCA.21a3c316.js";const i={},p=e(`<h1 id="翻译缺失" tabindex="-1"><a class="header-anchor" href="#翻译缺失" aria-hidden="true">#</a> 翻译缺失</h1><p>将默认语言的文档作为未翻译语言的兜底文档。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>此插件目前只在 <code>onInitialized</code> 钩子调用，它不会创建真实的文件只是复制当前页面的信息创建一个新的页面。</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @bfehub/vuepress-plugin-page-missing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pageMissingPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@bfehub/vuepress-plugin-page-missing&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">pageMissingPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><p>首先需要配置 <code>vuepress</code> 的 <code>locales</code> 配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有以下目录结构。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── docs
│   ├── guide
│   │   └── page-missing.md
│   └── zh
│   │   └── guide
│   │       ├── <span class="token comment"># 缺失的 page-missing.md 页面</span>
│   components
│   ├── npm-badge
│   │   ├── docs
│   │   │   ├── index.md
│   │   │   └── <span class="token comment"># 如果使用 *页面映射* 插件同样支持生成 index.zh-CN.md 页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么就会自动生成 <code>/zh/guide/page-missing.html</code> 和 <code>/zh/components/npm-badge/index.html</code>。</p>`,12),t=[p];function l(c,o){return s(),a("div",null,t)}const r=n(i,[["render",l],["__file","page-missing.html.vue"]]);export{r as default};
