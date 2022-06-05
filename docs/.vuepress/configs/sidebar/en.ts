import type { SidebarConfig } from '@bfehub/vuepress-theme-vmi'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: ['/guide/README.md'],
    },
  ],
  '/components/': [
    {
      text: 'Intro',
      children: ['/components/README.md'],
    },
    {
      text: 'Components',
      children: ['/components/npm-badge/index.md'],
    },
  ],
}
