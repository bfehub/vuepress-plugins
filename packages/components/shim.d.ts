declare module '*.vue' {
  import type { App, ComponentOptions } from 'vue'

  const component: ComponentOptions & {
    static install(app: App): void
  }

  export default component
}
