import type { App } from '@vuepress/core'
import type { Plugin } from 'vite'

export const vitePageProxy = (app: App): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-code-block:proxy',
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (req.originalUrl?.match(/^\/~(\w+)\.html/)) {
            // 这里的 req.url 已经被重定向过了，所以以 ~ 开头的改回原始的后续继续交给 vite 处理。
            req.url = req.originalUrl
          }
          await next()
        })
      }
    },
  }
}
