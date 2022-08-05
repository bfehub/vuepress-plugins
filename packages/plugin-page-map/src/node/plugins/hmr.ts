import { handlePageChange as handlePageMapPageChange } from '../dev'
import type { App } from '@vuepress/core'
import type { Plugin, HmrContext } from 'vite'

// https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
export const vitePageHMR = (app: App): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-page-map:hmr',
    enforce: 'post',
    async handleHotUpdate(ctx: HmrContext) {
      for (const module of ctx.modules) {
        for (const importer of module.importers) {
          const tempPath = importer.file
          if (tempPath.endsWith('.html.vue')) {
            await handlePageChange(app, tempPath)
          }
        }
      }
    },
  }
}

async function handlePageChange(app: App, tempPath: string) {
  for (const page of app.pages) {
    if (page.componentFilePath === tempPath) {
      // _PageMapPluginOptions from plugin-page-map/src/node/utils/createPage.ts
      if ((page as any)._PageMapPluginOptions) {
        await handlePageMapPageChange(
          app,
          (page as any)._PageMapPluginOptions,
          page.filePath
        )
      } else {
        // await handleVuePressPageChange(app, page.filePath)
      }
    }
  }
}
