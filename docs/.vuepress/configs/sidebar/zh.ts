import type { SidebarConfig } from '@bfehub/vuepress-theme-vmi'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: ['/zh/guide/README.md', '/zh/guide/getting-started.md'],
    },
  ],
  '/zh/components/': [
    {
      text: '介绍',
      children: ['/zh/components/README.md'],
    },
    {
      text: '组件',
      children: ['/zh/components/npm-badge/index.md'],
    },
  ],
}
