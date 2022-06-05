# 组件演示

在开发组件的时候提供组件效果的演示。

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

## 渲染模式

以下展示的组件全部来自 `element-plus` 的使用示例。

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

### defaultShowCode

用于控制当前 demo 的包裹容器是否默认展开源代码显示。

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

### 展示子文件

如果是 `vue` 组件，并且组件内导入了 _相对路径_ 的文件也一并展示。支持自动补全 `['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']` 后缀的文件。

```html
<demo src="./demos/demo-tabs.vue"></demo>
```

渲染效果如下

<demo src="./demos/demo-tabs.vue"></demo>
