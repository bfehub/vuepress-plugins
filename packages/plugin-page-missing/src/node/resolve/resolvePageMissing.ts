import { path } from '@vuepress/utils'
import { resolvePageHtmlInfo } from '@vuepress/core'
import type { App, Page } from '@vuepress/core'

export const resolvePageMissing = async (app: App): Promise<Page[]> => {
  const locales = app.options.locales
  const langs = Object.keys(locales)

  const pages = app.pages
  const missing: Page[] = []

  for (const page of pages) {
    if (page.path === '/404.html') continue

    for (const lang of langs) {
      // 如果不是默认语言的页面不处理
      if (lang === '/') continue
      if (page.path.startsWith(lang)) continue

      // 查询是否已经存在对应的页面
      const localePath = path.join(lang, page.path)
      if (pages.find((page) => page.path === localePath)) continue

      // 不存在复制页面更改路径信息
      const { htmlFilePath, htmlFilePathRelative } = resolvePageHtmlInfo({
        app,
        path: localePath,
      })

      missing.push({
        ...page,

        key: `${page.key}-missing`,

        path: localePath,
        pathLocale: lang,
        pathInferred: localePath,

        filePath: page.filePath,
        filePathRelative: path.join(lang, page.filePathRelative),

        htmlFilePath,
        htmlFilePathRelative,
      })
    }
  }

  pages.push(...missing)

  return missing
}
