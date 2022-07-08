import { fs } from '@vuepress/utils'
import type { App } from '@vuepress/core'
import type { Plugin } from 'vite'

export const vitePageIframe = (app: App): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-code-block:iframe',
    async config(config) {
      const input = config.build.rollupOptions.input
      const inputs: string[] = []

      if (typeof input === 'string') {
        inputs.push(input)
      } else if (typeof input === 'object') {
        inputs.push(...Object.values(input))
      } else if (Array.isArray(input)) {
        inputs.push(...(input as any[]))
      }
      inputs.push(app.dir.temp('vite-root/-iframe.html'))

      config.build.rollupOptions.input = inputs

      await app.writeTemp(
        'vite-root/-iframe.html',
        fs
          .readFileSync(
            app.env.isBuild
              ? app.options.templateBuild
              : app.options.templateDev
          )
          .toString()
          .replace(
            /<\/body>/,
            `\
<script type="module">
import '@bfehub/vuepress-plugin-code-block/lib/client-iframe/app'
</script>
</body>`
          )
      )
    },
  }
}
