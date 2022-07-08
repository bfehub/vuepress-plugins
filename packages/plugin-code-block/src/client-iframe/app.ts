import { clientConfigs } from '@internal/clientConfigs'
import { clientIframeConfigs } from '@internal/clientIframeConfigs'
import { createApp, h } from 'vue'
import { RouterView } from 'vue-router'
import type { CreateVueAppFunction } from '@vuepress/client'
import { siteData } from './composables'
import { createVueRouter } from './router'

export const createVueApp: CreateVueAppFunction = async () => {
  // create vue app
  const app = createApp({
    name: 'VuepressApp',

    setup() {
      // invoke all client setup
      for (const clientConfig of clientIframeConfigs) {
        clientConfig.setup?.()
      }

      return () => [
        h(RouterView),
        ...clientConfigs
          .concat(clientIframeConfigs)
          .flatMap(({ rootComponents = [] }) =>
            rootComponents.map((component) => h(component))
          ),
      ]
    },
  })

  // create vue-router instance
  const router = createVueRouter()

  // setup devtools in dev mode
  // if (__VUEPRESS_DEV__ || __VUE_PROD_DEVTOOLS__) {
  //   setupDevtools(app, globalComputed)
  // }

  // invoke all client enhance
  for (const clientConfig of clientConfigs.concat(clientIframeConfigs)) {
    await clientConfig.enhance?.({ app, router, siteData })
  }

  // vue-router will start to initialize once it is installed
  // via `app.use()`, but users might make some modifications
  // to router in client enhance, so we install it after that.
  // this can also avoid the `scrollBehavior` issue on initial
  // navigation.
  app.use(router)

  return {
    app,
    router,
  }
}

// mount app in client bundle
if (!__VUEPRESS_SSR__) {
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount('#app')
    })
  })
}
