import { path, hash } from '@vuepress/utils'
import { Node, parser } from 'posthtml-parser'
import { render } from 'posthtml-render'
import type { App } from '@vuepress/core'
import type { CodeBlockPluginOptions } from '../index.js'
import type { PageCodeDep, PageCodeDepsHelper } from '../utils/index.js'
import type { CodeNodeConfig } from '../../shared/index.js'
import { parseNodeAttrs } from './parseNodeAttrs.js'
import { parseVue } from './parseVue.js'
import { parseInline } from './parseInline.js'
import { parseRaw } from './parseRaw.js'

export const parseCodeBlock = (
  app: App,
  store: PageCodeDepsHelper,
  options: CodeBlockPluginOptions,
  content: string,
  pagePath: string
): string => {
  const html: Node[] = parser(content)

  let i = -1
  for (const node of html) {
    i++

    if (typeof node !== 'object') {
      continue
    }

    if (node.tag !== options.name) {
      continue
    }

    if (typeof node.attrs?.src !== 'string') {
      continue
    }

    const props = (node.attrs = parseNodeAttrs(
      options.config,
      node.attrs
    )) as unknown as CodeNodeConfig

    const isRaw = Reflect.has(props, 'raw')
    const isInline = Reflect.has(props, 'inline')
    const isDebug = Reflect.has(props, 'debug')
    const isExternalIframe = Reflect.has(props, 'demoUrl')
    const isBuild = app.env.isBuild
    const isVueCode = /^\.(vue|jsx|tsx)$/.test(path.extname(props.src))

    const dep = {} as PageCodeDep
    const dirName = path.dirname(pagePath)

    dep.pagePath = pagePath
    dep.compPath = path.resolve(dirName, props.src)
    dep.compHash = hash(dep.compPath)
    dep.compName = `VmiV${dep.compHash}`
    dep.compAttrs = props

    props.id = dep.compHash
    props.src = dep.compPath

    if (isDebug && isBuild) {
      html[i] = ''
      continue
    }

    if (isInline && isVueCode) {
      html[i] = parseInline(node, dep)

      store.add(dep)

      continue
    }

    if (!isRaw && isVueCode) {
      html[i] = parseVue(app, node, dep)

      dep.isGenerateIframe = true
      !isExternalIframe && store.add(dep)

      continue
    }

    html[i] = parseRaw(node, dep)
  }

  return render(html)
}
