import type { SidebarConfig } from '@bfehub/vuepress-theme-vmi'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/page-map.md',
        '/zh/guide/code-block.md',
        '/zh/guide/theme-vmi.md',
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '指引',
      children: ['/zh/components/README.md'],
    },
    {
      text: '组件',
      children: ['/zh/components/npm-badge/index.md'],
    },
  ],
}
