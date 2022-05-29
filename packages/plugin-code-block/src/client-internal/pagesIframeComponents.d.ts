import type { ComponentOptions } from 'vue'

declare module '@internal/pagesIframeComponents' {
  export const components: Record<string, ComponentOptions>
}
