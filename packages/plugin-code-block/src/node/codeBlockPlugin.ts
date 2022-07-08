import { path } from '@vuepress/utils'
import type { Plugin } from '@vuepress/core'
import type { CodeUserConfig, CodeLocaleConfig } from '../shared'
import { createPageCodeDepsHelper } from './utils'
import { prepareClientIframe, prepareVmiComponents } from './prepare'
import { vitePageHMR, vitePageProxy, vitePageIframe } from './plugins'
import {
  resolveOptions,
  resolveHtmlBlock,
  resolveScriptSetup,
  resolvePageHeaders,
} from './resolve'

/**
 * Options of @bfehub/vuepress-plugin-code-block
 */
export interface CodeBlockPluginOptions {
  name: string
  headers: boolean
  config: CodeUserConfig
  locales: CodeLocaleConfig
}

export const codeBlockPlugin = (
  config: Partial<CodeBlockPluginOptions> = {}
): Plugin => {
  const store = createPageCodeDepsHelper()

  const options = resolveOptions(config)

  return {
    name: '@bfehub/vuepress-plugin-code-block',

    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.js'),

    extendsMarkdown(md, app) {
      resolveHtmlBlock(md, app, store, options)
    },

    async extendsPage(page, app) {
      resolveScriptSetup(page, store)
      resolvePageHeaders(page, store, options.headers)
      app.pages && (await prepareVmiComponents(app, store))
    },

    async onInitialized(app) {
      await prepareClientIframe(app)
      await prepareVmiComponents(app, store)
    },

    extendsBundlerOptions(bundlerOptions, app) {
      if (app.options.bundler.name === '@vuepress/bundler-vite') {
        bundlerOptions.viteOptions ??= {}
        bundlerOptions.viteOptions.plugins ??= []
        bundlerOptions.viteOptions.plugins.push(
          vitePageHMR(app),
          vitePageProxy(app),
          vitePageIframe(app)
        )
      }
    },
  }
}
