---
headers: false
---

# 组件演示

在开发组件的时候提供组件效果的演示，以下展示的组件全部来自 `element-plus` 的使用示例。

## 安装

```sh
npm i -D @bfehub/vuepress-plugin-code-block@1.60.x
```

```js
import { codeBlockPlugin } from '@bfehub/vuepress-plugin-code-block'

export default {
  plugins: [
    codeBlockPlugin(),
  ],
}
```

## 配置

```js
export interface CodeBlockPluginOptions {
  name: string
  headers: boolean
  config: CodeUserConfig
}
```

### name

编写 `demo` 使用的标签，默认 `demo` 标签。

```html
<demo src="xxx.vue"></demo>
<!-- 如果改成 name = 'code' -->
<code src="xxx.vue"></code>
```

### headers

使用 `demo` 的 `title` 属性覆盖页面的导航菜单，默认 `false`。可以通过页面的 `frontmatter` 的 `headers` 配置覆盖全局配置。

```yaml
---
headers: true
---
```

### config

配置 `demo` 全局属性，都可以在具体的 `demo` 标签上覆盖。

```ts
export interface CodeUserConfig {
  /**
   * 用于控制 Demo 预览器部分功能按钮的隐藏
   * @default []
   */
  hideActions?: Array<'EXTERNAL'>

  /**
   * 用于控制当前 demo 的包裹容器是否默认展开源代码显示。
   * @default false
   */
  defaultShowCode?: boolean

  /**
   * 用户控制 Demo 的排列方向
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal'

  /**
   * 用于设置 demo 的基础路径，用于给 demoUrl 添加统一的前缀
   */
  baseDemoUrl?: string
}
```

## 渲染模式

### basic

使用 `src` 指定当前 `demo` 组件的路径地址。

```html
<demo src="./demos/demo-basic.vue"></demo>
```

渲染效果如下

<demo src="./demos/demo-basic.vue"></demo>

### inline

使用 `inline` 模式用于指示该 `demo` 为自由 `demo`，将会直接在文档中嵌入渲染，不会被 `demo` 容器包裹，用户也无法查看源代码。

```html
<demo src="./demos/demo-inline.vue" inline></demo>
```

渲染效果如下

<demo src="./demos/demo-inline.vue" inline></demo>

### raw

使用 `raw` 模式用于指示该 `demo` 为源代码，将会把内容当做代码块渲染不会渲染效果。

```html
<demo src="./demos/demo-raw.vue" raw></demo>
```

渲染效果如下

<demo src="./demos/demo-raw.vue" raw></demo>

### iframe

使用 `iframe` 模式渲染当前 demo，对于渲染 layout 型的 demo 非常有用，当我们传递数值时可以控制 iframe 的高度。

```html
<demo src="./demos/demo-iframe.vue" iframe></demo>
```

渲染效果如下

<demo src="./demos/demo-iframe.vue" iframe></demo>

### debug

标记当前 `demo` 为调试 `demo`，这意味着在生产模式下该 `demo` 是不可见的；另外，调试 `demo` 在开发环境下也会展示一个 `DEV ONLY` 的标记，以便开发者将其和其他 `demo` 区分开来。

```html
<demo src="./demos/demo-debug.vue" debug></demo>
```

渲染效果如下

<demo src="./demos/demo-debug.vue" debug></demo>

<demo src="./demos/demo-debug.vue" data-debug></demo>

## 控制渲染

### title

用于配置 `demo` 的标题，配置后会在 `demo` 预览器中显示。

```html
<demo src="./demos/demo-title.vue" title="这是标题"></demo>
```

渲染效果如下

<demo src="./demos/demo-title.vue" title="这是标题"></demo>

### desc

用于配置 `demo` 的简介，配置后会在 `demo` 预览器中显示，支持 `Markdown` 语法。

```html
<demo src="./demos/demo-desc.vue" title="这是简介标题" desc="这是 `demo` 的简介。"></demo>
```

渲染效果如下

<demo src="./demos/demo-desc.vue" title="这是简介标题" desc="这是 `demo` 的简介。"></demo>

### demoUrl

用于指定该 `demo` 的访问链接，通常在默认渲染的 `demo` 无法满足展示需要时使用。

```html
<demo src="./demos/demo-iframe.vue" iframe="200" demoUrl="https://v2.vuepress.vuejs.org/zh/"></demo>
```

渲染效果如下

<demo src="./demos/demo-iframe.vue" iframe="200" demoUrl="https://v2.vuepress.vuejs.org/zh/"></demo>

### transform

用于控制 `demo` 的包裹容器是否设置 `transform` 的 `CSS` 值以控制 `position: fixed`; 的元素相对于 `demo` 容器定位。

```html
<demo src="./demos/demo-transform.vue" transform></demo>
```

渲染效果如下

<demo src="./demos/demo-transform.vue" transform></demo>

### hideActions

用于控制 `demo` 预览器部分功能按钮的隐藏。

- `EXTERNAL`: 隐藏『在新窗口打开』的按钮

```html
<!-- 注意，单引号为必备，要确保值为有效 JSON 字符串 -->
<demo src="./demos/demo-basic.vue" hideActions='["EXTERNAL"]'></demo>
```

渲染效果如下

<demo src="./demos/demo-basic.vue" hideActions='["EXTERNAL"]'></demo>

### defaultShowCode

用于控制当前 `demo` 的包裹容器是否默认展开源代码显示。

```html
<demo src="./demos/demo-basic.vue" defaultShowCode></demo>
```

渲染效果如下

<demo src="./demos/demo-basic.vue" defaultShowCode></demo>

### direction

用户控制 `demo` 的排列方向，可选值有 `horizontal` 水平排列，可以用来展示移动端组件。

```html
<demo src="./demos/demo-basic.vue" direction="horizontal" defaultShowCode></demo>
```

渲染效果如下

<demo src="./demos/demo-basic.vue" direction="horizontal" defaultShowCode></demo>

### baseDemoUrl

当需要设置统一的 `demoUrl` 前缀时，可以通过指定 `baseDemoUrl` 来实现。

```js
plugins: [
  codeBlockPlugin({
    config: {
      baseDemoUrl: 'https://v2.vuepress.vuejs.org',
    }
  }),
],
```

对于不是完整 URL 的 `demoUrl`，会自动拼接 `baseDemoUrl`，例如

```html
<demo src="./demos/demo-iframe.vue" iframe="200" demoUrl="/zh/"></demo>
```

实际会解析成

```html
<demo src="./demos/demo-iframe.vue" iframe="200" demoUrl="https://v2.vuepress.vuejs.org/zh/"></demo>
```

展示效果如下
<demo src="./demos/demo-iframe.vue" iframe="200" demoUrl="/zh/"></demo>

## 其他特性

### 任意类型文件

如果文件是非 `.vue`、`.jsx`、`.tsx` 后缀的文件，将显示源代码相当于指定 `raw` 模式。

```html
<demo src="./demos/demo-file.json"></demo>
```

```html
<demo src="./demos/demo-file.d.ts"></demo>
```

渲染效果如下

<demo src="./demos/demo-file.json"></demo>

<demo src="./demos/demo-file.d.ts"></demo>

### 展示组件子文件

如果是 `vue` 组件，并且组件内导入了 _相对路径_ 的文件也一并展示。支持自动补全 `['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']` 后缀的文件。

```html
<demo src="./demos/demo-tabs.vue"></demo>
```

渲染效果如下

<demo src="./demos/demo-tabs.vue"></demo>

### 客户端配置文件(iframe)

如果想往 `iframe` 页面单独添加一些客户端代码，需要说明的是 `iframe` 默认包含所有的客户端配置文件。

比如像 `vuepress` 的 [客户端配置文件](https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6) 一样，那么往 `iframe` 中添加也有一个约定的文件，这个文件的配置与默认的一样。

关于客户端配置文件的路径约定（按照优先顺序）：

- 当前工作目录 `cwd` 下：

  - `vuepress.client-iframe.ts`
  - `vuepress.client-iframe.js`
  - `vuepress.client-iframe.mjs`

- 源文件目录 `sourceDir` 下：
  - `.vuepress/client-iframe.ts`
  - `.vuepress/client-iframe.js`
  - `.vuepress/client-iframe.mjs`

需要注意的是，客户端配置文件需要使用 ESM 格式：

```ts
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```
