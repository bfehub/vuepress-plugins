# 翻译缺失

将默认语言的文档作为未翻译语言的兜底文档。

::: tip
此插件目前只在 `onInitialized` 钩子调用，它不会创建真实的文件只是复制当前页面的信息创建一个新的页面。
:::

## 安装

```sh
npm i -D @bfehub/vuepress-plugin-page-missing
```

```js
import { pageMissingPlugin } from '@bfehub/vuepress-plugin-page-missing'

export default {
  plugins: [
    pageMissingPlugin(),
  ],
}
```

## 如何使用

首先需要配置 `vuepress` 的 `locales` 配置。

```js
module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
    },

    '/zh/': {
      lang: 'zh-CN',
    },
  },
}
```

如果有以下目录结构。

```sh
├── docs
│   ├── guide
│   │   └── page-missing.md
│   └── zh
│   │   └── guide
│   │       ├── # 缺失的 page-missing.md 页面
│   components
│   ├── npm-badge
│   │   ├── docs
│   │   │   ├── index.md
│   │   │   └── # 如果使用 *页面映射* 插件同样支持生成 index.zh-CN.md 页面
```

那么就会自动生成 `/zh/guide/page-missing.html` 和 `/zh/components/npm-badge/index.html`。
