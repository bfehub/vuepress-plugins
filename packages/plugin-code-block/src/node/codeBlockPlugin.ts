import { path } from '@vuepress/utils'
import type { Plugin } from '@vuepress/core'
import type { CodeUserConfig, CodeLocaleConfig } from '../shared'
import { createPageCodeDepsHelper } from './utils'
import { prepareIframeComponents } from './prepare'
import { resolveOptions, resolveHtmlBlock, resolveScriptSetup } from './resolve'
import { vitePageHMR, vitePageProxy, vitePageIframe } from './plugins'

/**
 * Options of @bfehub/vuepress-plugin-code-block
 */
export interface CodeBlockPluginOptions {
  name: string
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

    extendsMarkdown(md) {
      resolveHtmlBlock(md, store, options)
    },

    extendsPage(page, app) {
      resolveScriptSetup(page, store)
      app.pages && prepareIframeComponents(app, store)
    },

    onInitialized(app) {
      prepareIframeComponents(app, store)
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
