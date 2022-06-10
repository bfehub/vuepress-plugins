---
headers: false
---

# 组件演示

在开发组件的时候提供组件效果的演示，以下展示的组件全部来自 `element-plus` 的使用示例。

## 使用

```sh
npm i -D @bfehub/vuepress-plugin-code-block
```

```js
const { codeBlockPlugin } = require('@bfehub/vuepress-plugin-code-block')

module.exports = {
  plugins: [codeBlockPlugin()],
}
```

## 配置

```js
export interface CodeBlockPluginOptions {
  name: string
  headers: boolean
  config: CodeUserConfig
  locales: CodeLocaleConfig
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
