import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@bfehub/vuepress-theme-vmi'
import { pageMapPlugin } from '@bfehub/vuepress-plugin-page-map'
import { codeBlockPlugin } from '@bfehub/vuepress-plugin-code-block'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },

    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },

  theme: defaultTheme({
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
      },

      '/zh/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,

        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),

  plugins: [
    // @bfehub/vuepress-plugin-page-map
    pageMapPlugin(),

    // @bfehub/vuepress-plugin-code-block
    codeBlockPlugin(),
  ],
})
