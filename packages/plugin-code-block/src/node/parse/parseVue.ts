import type { App } from '@vuepress/core'
import type { Node } from 'posthtml-parser'
import type { PageCodeDep } from '../utils'
import { readSource } from './readSource'
import { markdownText } from '../utils/highlight'

export const parseVue = (app: App, node: Node, dep: PageCodeDep): Node => {
  if (typeof node !== 'object') {
    return node
  }

  const sources = readSource(dep.compPath, true, true)

  const iframeSrc = dep.compAttrs.demoUrl
    ? dep.compAttrs.demoUrl
    : `${app.options.base}-iframe.html#/${dep.compAttrs.id}`

  node.tag = 'VmiPreviewer'
  node.attrs = {}
  node.content = [
    {
      tag: 'VmiExample',
      attrs: {
        id: dep.compAttrs.id,
        iframe: dep.compAttrs.iframe,
        iframeSrc,
        transform: dep.compAttrs.transform,
      },
      content: [
        {
          tag: dep.compName,
        },
      ],
    },
    dep.compAttrs.title
      ? {
          tag: 'div',
          attrs: {
            class: 'vmi-previewer-title',
          },
          content: [
            {
              tag: 'a',
              attrs: {
                href: `#${dep.compAttrs.title}`,
                class: 'header-anchor',
              },
              content: dep.compAttrs.title,
            },
          ],
        }
      : null,
    dep.compAttrs.desc
      ? {
          tag: 'div',
          attrs: {
            class: 'vmi-previewer-desc',
          },
          content: markdownText(dep.compAttrs.desc),
        }
      : null,
    {
      tag: 'VmiSourceCode',
      attrs: {
        id: dep.compAttrs.id,
        iframe: dep.compAttrs.iframe,
        iframeSrc,
        defaultShowCode: dep.compAttrs.defaultShowCode,
        hideActions: dep.compAttrs.hideActions as unknown as string,
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
