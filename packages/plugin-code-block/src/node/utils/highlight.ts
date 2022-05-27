import { createMarkdown } from '@vuepress/markdown'
import { resolveHighlighter } from '@vuepress/plugin-prismjs'

export const highlight = (code: string, lang = 'text'): string => {
  return createMarkdown({
    highlight: resolveHighlighter(lang),
  }).render('```' + lang + '\n' + code + '\n' + '```')
}
