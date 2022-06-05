import type { Node } from 'posthtml-parser'
import type { PageCodeDep } from '../utils'

export const parseInline = (node: Node, dep: PageCodeDep): Node => {
  if (typeof node !== 'object') {
    return node
  }

  node.tag = dep.compName
  node.attrs = {}

  return node
}
