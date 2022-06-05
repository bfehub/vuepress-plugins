import type { Node } from 'posthtml-parser'
import type { PageCodeDep } from '../utils'
import { readSource } from './readSource'

export const parseRaw = (node: Node, dep: PageCodeDep): Node => {
  if (typeof node !== 'object') {
    return node
  }

  const sources = readSource(dep.compPath, false, false)

  if (sources.length === 1) {
    return sources[0].highlightCode
  }

  node.tag = 'CodeGroup'
  node.attrs = {}
  node.content = sources.map((source) => {
    return {
      tag: 'CodeGroupItem',
      attrs: {
        title: source.name,
      },
      content: source.highlightCode,
    }
  })

  return node
}
