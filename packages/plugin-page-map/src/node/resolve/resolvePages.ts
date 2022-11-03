import { debug, globby } from '@vuepress/utils'
import { createPage } from '../utils/index.js'
import type { App, Page } from '@vuepress/core'
import type { PageMapPluginOptions } from '../index.js'

const log = debug('vuepress:page-page/resolve')

/**
 * Resolve pages for vuepress app
 */
export const resolvePages = async (
  app: App,
  options: PageMapPluginOptions
): Promise<Page[]> => {
  log('resolvePages start')

  // resolve page absolute file paths according to the page patterns
  const pageFilePaths = await globby(options.patterns, {
    absolute: true,
    // cwd: app.dir.source(),
  })

  // create pages from files
  const pages = await Promise.all(
    pageFilePaths.map((filePath) => {
      return createPage(app, options, filePath)
    })
  )

  log('resolvePages finish')

  return pages
}
