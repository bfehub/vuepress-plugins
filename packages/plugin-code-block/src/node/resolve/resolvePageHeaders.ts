import type { Page } from '@vuepress/core'
import type { PageHeader } from '@vuepress/shared'
import type { PageCodeDepsHelper } from '../utils'
import { slugify } from '@mdit-vue/shared'

export const resolvePageHeaders = (
  page: Page,
  store: PageCodeDepsHelper,
  titleToHeader: boolean
) => {
  if (titleToHeader) {
    if (page.frontmatter.headers === false) {
      return false
    }
  } else {
    if (page.frontmatter.headers !== true) {
      return false
    }
  }

  const deps = store.get(page.filePath!)
  const headers: PageHeader[] = []

  for (const dep of deps) {
    if (dep.compAttrs.title) {
      headers.push({
        level: 2,
        title: dep.compAttrs.title,
        slug: slugify(dep.compAttrs.title),
        children: [],
      })
    }
  }

  page.data.headers = headers
}
