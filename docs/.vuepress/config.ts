import * as path from 'path'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@bfehub/vuepress-theme-vmi'
import { pageMapPlugin } from '@bfehub/vuepress-plugin-page-map'
import { pageMissingPlugin } from '@bfehub/vuepress-plugin-page-missing'
import { codeBlockPlugin } from '@bfehub/vuepress-plugin-code-block'
import { searchPlugin } from '@vuepress/plugin-search'
import { navbar, sidebar } from './configs/index.js'

export default defineUserConfig({
  base: '/vmi/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vmi',
      description: 'Vuepress plug-ins and themes',
    },

    '/zh/': {
      lang: 'zh-CN',
      title: 'Vmi',
      description: '用于组件开发场景的 VuePress 的插件和主题',
    },
  },

  theme: defaultTheme({
    logo: '/images/hero.png',

    repo: 'https://github.com/bfehub/vmi',

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
    pageMapPlugin({
      patterns: [
        `${path.resolve(process.cwd(), '../packages/components/**/*.md')}`,
        `!${path.resolve(
          process.cwd(),
          '../packages/components/**/node_modules'
        )}`,
      ],
    }),

    // @bfehub/vuepress-plugin-page-missing
    pageMissingPlugin(),

    // @bfehub/vuepress-plugin-code-block
    codeBlockPlugin({
      config: {
        baseDemoUrl: 'https://v2.vuepress.vuejs.org',
      },
    }),

    // @vuepress/plugin-search
    searchPlugin(),
  ],
})
