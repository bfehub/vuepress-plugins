import { defineClientConfig } from '@vuepress/client'
import { ElButton } from 'element-plus'
import { VpNpmBadge } from '@bfehub/vuepress-components'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElButton)
    app.use(VpNpmBadge)
  },
})
