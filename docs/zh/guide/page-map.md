# 页面映射

通常在编写组件的文档的时候我们可能会把组件的文档直接和组件的实现放在一起，这时候 VuePress 不能很好的处理路径，如以下结构。

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

## 使用

```sh
npm i -D @bfehub/vuepress-plugin-page-map
```

```js
const { pageMapPlugin } = require('@bfehub/vuepress-plugin-page-map')

module.exports = {
  plugins: [pageMapPlugin()],
}
```

## 配置

```ts
export interface PageMapPluginOptions {
  /**
   * 匹配规则
   */
  patterns: string[]

  /**
   * 自定义路径替换
   */
  pathMapRule: (path: string) => string
}
```

### 查找范围

定义查找文件的路径从 `vuepress` 根配置开启，默认配置如下。

```js
patterns: [
  '../src/**/*.md',
  '../packages/**/*.md',
  '!../src/**/node_modules',
  '!../packages/**/node_modules',
],
```

### 路径处理

统一的路径映射处理，只需处理到想要的路径即可，多语言在内部处理。

```js
pathMapRule(path: string) {
  const paths = path.split('/')
  const len = paths.length

  // /User/project/path/button/index.md
  // -> components/button/index.md

  // /User/project/path/button/index.zh-CN.md
  // -> components/button/index.zh-CN.md

  // /User/project/path/button/docs/index.md
  // -> components/button/index.md

  // /User/project/path/button/docs/index.zh-CN.md
  // -> components/button/index.zh-CN.md

  return `components/${
    paths[len - 2] === 'docs' ? paths[len - 3] : paths[len - 2]
  }/${paths[len - 1]}`
}
```

## 多语言规则

支持多语言的路径映射，如配置了 `locales`。

```js
locales: {
  '/': {
    lang: 'en-US',
  },

  '/zh/': {
    lang: 'zh-CN',
  },
},
```

文件的名称加上对应 `lang` 的名称，会在最终路径前缀加上上语言的路径。

`components/button/index.md` -> `/components/button/index.md`

`components/button/index.en-US.md` -> `/components/button/index.md`

`components/button/index.zh-CN.md` -> `/zh/components/button/index.md`
