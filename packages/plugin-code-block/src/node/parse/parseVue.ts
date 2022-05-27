import type { Node } from 'posthtml-parser'
import type { PageCodeDep } from '../utils'
import { readSource } from './readSource'

export const parseVue = (node: Node, dep: PageCodeDep): Node => {
  if (typeof node !== 'object') {
    return node
  }

  const sources = readSource(dep.compPath, true)

  node.tag = 'VmiPreviewer'
  node.content = [
    {
      tag: 'VmiExample',
      content: [
        {
          tag: dep.compName,
        },
      ],
    },
    {
      tag: 'VmiSourceCode',
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
