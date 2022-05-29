import { createRouter, createWebHashHistory, Router } from 'vue-router'
import { removeEndingSlash } from '@vuepress/shared'
import { Vuepress } from './components'
import { siteData } from './composables'

/**
 * Create vue-router instance
 */
export const createVueRouter = (): Router => {
  const router = createRouter({
    history: createWebHashHistory(removeEndingSlash(siteData.value.base)),
    routes: [
      {
        path: '/:name',
        component: Vuepress,
      },
    ],
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash }
      return { top: 0 }
    },
  })

  return router
}
