import type { Plugin } from '@vuepress/core'
import { resolveOptions, resolvePages } from './resolve'
import { watchPageFiles } from './watch'

/**
 * Options of @bfehub/vuepress-plugin-page-map
 */
export interface PageMapPluginOptions {
  /**
   * 匹配规则
   */
  patterns: string[]

  /**
   * 自定义路径替换
   */
  pathMapRule: (path: string) => string
}

export const pageMapPlugin = (
  config: Partial<PageMapPluginOptions> = {}
): Plugin => {
  const options = resolveOptions(config)

  return {
    name: '@bfehub/vuepress-plugin-page-map',

    async onInitialized(app) {
      app.pages.push(...(await resolvePages(app, options)))
    },

    onWatched: (app, watchers) => {
      watchers.push(...watchPageFiles(app, options))
    },
  }
}
