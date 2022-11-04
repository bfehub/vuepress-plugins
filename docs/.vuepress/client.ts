import { defineClientConfig } from '@vuepress/client'
import { VpNpmBadge } from '@bfehub/vuepress-components'
// import { ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(VpNpmBadge)
    // app.use(ElButton)
  },
})
