import { defineClientConfig } from '@vuepress/client'
import { VpNpmBadge } from '@bfehub/vuepress-components'

export default defineClientConfig({
  enhance({ app }) {
    app.component(VpNpmBadge.name, VpNpmBadge)
  },
})
