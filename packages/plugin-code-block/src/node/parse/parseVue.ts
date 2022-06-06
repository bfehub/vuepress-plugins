import type { App } from '@vuepress/core'
import type { Node } from 'posthtml-parser'
import type { PageCodeDep } from '../utils'
import { readSource } from './readSource'

export const parseVue = (app: App, node: Node, dep: PageCodeDep): Node => {
  if (typeof node !== 'object') {
    return node
  }

  const sources = readSource(dep.compPath, true, true)
  const iframeSrc = `${app.options.base}-iframe.html#/${dep.compAttrs.id}`

  node.tag = 'VmiPreviewer'
  node.attrs = {}
  node.content = [
    {
      tag: 'VmiExample',
      attrs: {
        id: dep.compAttrs.id,
        iframe: dep.compAttrs.iframe,
        iframeSrc,
      },
      content: [
        {
          tag: dep.compName,
        },
      ],
    },
    {
      tag: 'VmiSourceCode',
      attrs: {
        iframeSrc,
        defaultShowCode: dep.compAttrs.defaultShowCode,
      },
      content: sources.map((source) => {
        return {
          tag: 'VmiSourceCodeItem',
          attrs: {
            name: source.name,
            rawCode: encodeURIComponent(source.rawCode),
          },
          content: source.highlightCode,
        }
      }),
    },
  ]

  return node
}
