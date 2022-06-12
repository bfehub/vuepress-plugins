import type { Plugin } from '@vuepress/core'
import { resolvePageMissing } from './resolve'

export const pageMissingPlugin = (): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-page-missing',

    async onInitialized(app) {
      await resolvePageMissing(app)
    },
  }
}
