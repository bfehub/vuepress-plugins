# 页面映射

通常在编写组件的文档的时候我们可能会把组件的文档直接和组件的实现放在一起，这时候 VuePress 不能很好的处理路径。

## 安装

```sh
npm i -D @bfehub/vuepress-plugin-page-map
```

```js
const { pageMapPlugin } = require('@bfehub/vuepress-plugin-page-map')

module.exports = {
  plugins: [pageMapPlugin()],
}
```

## 如何使用

如果有以下目录结构。

```sh
├── docs
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
```

以上组件的文档的 _访问路径_ 和 _临时文件_ 的路径就会被转换成。

`/packages/components/npm-badge/docs/index.md` => `/components/npm-badge/index.md`

`/packages/components/npm-badge/docs/index.zh-CN.md` => `/zh/components/npm-badge/index.md`

## 多语言规则

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

文件的名称加上对应 `lang` 的名称，会在最终路径前缀加上语言的路径。

`components/npm-badge/index.md` -> `/components/npm-badge/index.md`

`components/npm-badge/index.en-US.md` -> `/components/npm-badge/index.md`

`components/npm-badge/index.zh-CN.md` -> `/zh/components/npm-badge/index.md`

然后可以在 `sidebar` 配置中这样使用。

```js
export const en = {
  '/components/': [
    {
      text: 'Intro',
      children: ['/components/README.md'],
    },
    {
      text: 'Components',
      children: ['/components/npm-badge/index.md'],
    },
  ],
}
```

```js
export const zh = {
  '/zh/components/': [
    {
      text: '指引',
      children: ['/zh/components/README.md'],
    },
    {
      text: '组件',
      children: ['/zh/components/npm-badge/index.md'],
    },
  ],
}
```

## 自定义配置

```ts
export interface PageMapPluginOptions {
  /**
   * 匹配规则
   */
  patterns: string[]

  /**
   * 自定义路径规则
   */
  pathMapRule: (path: string) => string
}
```

### 查找范围

定义查找文件的路径从 `vuepress` 根配置开启，默认配置从 `docs` 目录时如下。

```js
pageMapPlugin({
  patterns: [
    `${path.resolve(process.cwd(), '../packages/**/*.md')}`,
    `!${path.resolve(process.cwd(), '../packages/**/node_modules')}`,
  ],
})
```

### 路径处理

统一的路径映射处理，只需处理到想要的路径即可，多语言在内部处理，默认配置如下。

```js
pageMapPlugin({
  pathMapRule(path) {
    const paths = path.split('/')
    const len = paths.length

    // /User/project/path/npm-badge/index.md
    // -> components/npm-badge/index.md

    // /User/project/path/npm-badge/index.zh-CN.md
    // -> components/npm-badge/index.zh-CN.md

    // /User/project/path/npm-badge/docs/index.md
    // -> components/npm-badge/index.md

    // /User/project/path/npm-badge/docs/index.zh-CN.md
    // -> components/npm-badge/index.zh-CN.md

    return `components/${
      paths[len - 2] === 'docs' ? paths[len - 3] : paths[len - 2]
    }/${paths[len - 1]}`
  },
})
```
