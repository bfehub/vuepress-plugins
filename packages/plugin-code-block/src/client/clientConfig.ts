import { defineClientConfig } from '@vuepress/client'
import Previewer from './components/Previewer.vue'
import Example from './components/Example.vue'
import SourceCode from './components/SourceCode.vue'
import SourceCodeItem from './components/SourceCodeItem.vue'

import './styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('VmiPreviewer', Previewer)
    app.component('VmiExample', Example)
    app.component('VmiSourceCode', SourceCode)
    app.component('VmiSourceCodeItem', SourceCodeItem)
  },
})
