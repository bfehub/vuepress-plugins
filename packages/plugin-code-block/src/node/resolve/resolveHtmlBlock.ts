import type { App } from '@vuepress/core'
import type { Markdown, MarkdownEnv } from '@vuepress/markdown'
import type { CodeBlockPluginOptions } from '../index.js'
import type { PageCodeDepsHelper } from '../utils/index.js'
import { parseCodeBlock } from '../parse/index.js'

export const resolveHtmlBlock = (
  md: Markdown,
  app: App,
  store: PageCodeDepsHelper,
  options: CodeBlockPluginOptions
) => {
  const rawRule = md.renderer.rules.html_inline!

  md.renderer.rules.html_inline = function (
    tokens,
    idx,
    opts,
    env: MarkdownEnv,
    self
  ) {
    const content = tokens[idx].content

    if (content.startsWith(`<${options.name}`)) {
      tokens[idx].content = parseCodeBlock(
        app,
        store,
        options,
        content,
        env.filePath!
      )
    }

    return rawRule(tokens, idx, opts, env, self)
  }
}
