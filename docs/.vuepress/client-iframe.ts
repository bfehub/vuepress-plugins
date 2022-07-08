import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    console.log('This is a iframe.')
  },
})
