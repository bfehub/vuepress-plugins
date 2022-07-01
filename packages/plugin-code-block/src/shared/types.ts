import { LocaleConfig } from '@vuepress/shared'

export type CodeLocaleConfig = LocaleConfig<CodeLocaleData>

export interface CodeLocaleData {
  /**
   * hide text
   * @default ''
   */
  hideText: string
  /**
   * show text
   * @default ''
   */
  showText: string
  /**
   * copy text
   * @default ''
   */
  copyText: string
  /**
   * copy success text
   * @default ''
   */
  copySuccessText: string
}

export interface CodeSource {
  /**
   * 源代码的文件名称
   */
  name: string

  /**
   * 源代码字符串 - 用于复制
   */
  rawCode: string

  /**
   * 高亮后代码字符串 - 用于展示
   */
  highlightCode: string
}

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
}

export interface CodeNodeConfig extends CodeUserConfig {
  /**
   * demo 的唯一标识通过路径 hash 得到。
   */
  id: string

  /**
   * 当前 demo 组件的路径地址。
   * @default ''
   */
  src: string

  /**
   * 用于指示该 demo 为源代码，将会把内容当做代码块渲染不会渲染效果
   * @default false
   */
  raw?: boolean

  /**
   * 用于指示该 demo 为自由 demo，将会直接在文档中嵌入渲染，不会被 demo 容器包裹，用户也无法查看源代码。
   * @default false
   */
  inline?: boolean

  /**
   * 使用 iframe 模式渲染当前 demo，对于渲染 layout 型的 demo 非常有用，当我们传递数值时可以控制 iframe 的高度。
   * @default false
   */
  iframe?: boolean | number

  /**
   * 标记当前 demo 为调试 demo，这意味着在生产模式下该 demo 是不可见的；另外，调试 demo 在开发环境下也会展示一个 DEV ONLY 的标记，以便开发者将其和其他 demo 区分开来。
   * @default false
   */
  debug?: boolean

  /**
   * 用于配置 demo 的标题，配置后会在 demo 预览器中显示。
   * @default ''
   */
  title?: string

  /**
   * 用于配置 demo 的简介，配置后会在 demo 预览器中显示，支持 Markdown 语法。
   * @default ''
   */
  desc?: string

  /**
   * 用于指定该 demo 的访问链接，通常在默认渲染的 demo 无法满足展示需要时使用。
   * @default false
   */
  demoUrl?: string

  /**
   * 用于控制 demo 的包裹容器是否设置 transform 的 CSS 值以控制 position: fixed; 的元素相对于 demo 容器定位。
   * @default false
   */
  transform?: boolean
}
