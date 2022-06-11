import { createPage as _createPage, inferPagePath } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { App, Page } from '@vuepress/core'
import { PageMapPluginOptions } from '..'

export const createPage = async (
  app: App,
  options: PageMapPluginOptions,
  filePath: string
): Promise<Page> => {
  // components/npm-badge/index.md
  // components/npm-badge/index.zh-CN.md
  const pathMap = options.pathMapRule(filePath)

  // index.md
  // index.zh-CN.md
  const name = path.basename(pathMap)
  const ext = path.extname(name)
  const lang = path.extname(name.slice(0, -ext.length)).slice(1)

  // {
  //   '/': {
  //     lang: 'en-US',
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN',
  //   },
  // }
  let langPrefix = '/'
  Object.entries(app.siteData.locales).forEach(([key, value]) => {
    if (value.lang === lang) {
      langPrefix = key
    }
  })

  // components/npm-badge/index.md -> /components/npm-badge/index.md
  // components/npm-badge/index.zh-CN.md -> /zh/components/npm-badge/index.md
  const relativePath = `${langPrefix}${
    lang ? pathMap.replace(`.${lang}`, '') : pathMap
  }`.slice(1)

  // infer page path according to file path
  const { pathInferred, pathLocale } = inferPagePath({
    app,
    filePathRelative: relativePath,
  })

  // create page use @vuepress/core
  const page = await _createPage(app, {
    path: pathInferred || relativePath,
    filePath,
  })

  // override attribute
  page.lang = app.siteData.locales?.[langPrefix]?.lang || app.siteData.lang
  page.pathLocale = pathLocale
  page.pathInferred = pathInferred
  page.filePathRelative = relativePath

  page.data.lang = page.lang
  ;(page.data as any).filePathRelative = page.filePathRelative
  ;(page as any)._PageMapPluginOptions = options

  return page
}
