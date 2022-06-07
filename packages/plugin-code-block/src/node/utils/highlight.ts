import { createMarkdown } from '@vuepress/markdown'
import { resolveHighlighter } from '@vuepress/plugin-prismjs'

export const highlight = (
  code: string,
  lang = 'text',
  noLineNumbers = true
): string => {
  return createMarkdown({
    highlight: resolveHighlighter(lang),
  }).render(
    '```' +
      lang +
      (noLineNumbers ? ':no-line-numbers' : '') +
      '\n' +
      code +
      '```'
  )
}

export const markdownText = (text: string) => {
  return createMarkdown().render(text)
}
