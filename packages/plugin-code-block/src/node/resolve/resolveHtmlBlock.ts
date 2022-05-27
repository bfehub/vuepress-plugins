import type * as MarkdownIt from 'markdown-it'
import type { MarkdownEnv } from '@vuepress/markdown'
import type { CodeBlockPluginOptions } from '..'
import type { PageCodeDepsHelper } from '../utils'
import { parseCodeBlock } from '../parse'

export const resolveHtmlBlock = (
  md: MarkdownIt,
  store: PageCodeDepsHelper,
  options: CodeBlockPluginOptions
) => {
  const rawRule = md.renderer.rules.html_block!

  md.renderer.rules.html_block = function (
    tokens,
    idx,
    opts,
    env: MarkdownEnv,
    self
  ) {
    const content = tokens[idx].content

    if (content.startsWith(`<${options.name}`)) {
      tokens[idx].content = parseCodeBlock(
        store,
        options,
        content,
        env.filePath!
      )
    }

    return rawRule(tokens, idx, opts, env, self)
  }
}
