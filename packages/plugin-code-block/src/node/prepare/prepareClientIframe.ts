import { fs, path } from '@vuepress/utils'
import type { App } from '@vuepress/core'

/**
 * Generate iframe client temp file
 */
export const prepareClientIframe = async (app: App) => {
  const cwd = process.cwd()
  const source = app.dir.source()

  const clientPath = [
    path.resolve(cwd, 'vuepress.client-iframe.ts'),
    path.resolve(cwd, 'vuepress.client-iframe.js'),
    path.resolve(cwd, 'vuepress.client-iframe.mjs'),
    path.resolve(source, '.vuepress/client-iframe.ts'),
    path.resolve(source, '.vuepress/client-iframe.js'),
    path.resolve(source, '.vuepress/client-iframe.mjs'),
  ].find((item) => fs.pathExistsSync(item))

  let content = ''
  if (clientPath) {
    content = `\
import clientConfig0 from '${clientPath}'

export const clientIframeConfigs = [
  clientConfig0,
]
`
  } else {
    content = `\
export const clientIframeConfigs = []
`
  }

  await app.writeTemp('internal/clientIframeConfigs.js', content)
}
