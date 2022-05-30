import { components } from '@internal/pagesVmiComponents'
import { computed, defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Demo rendered content
 */
export const Vuepress = defineComponent({
  name: 'Vuepress',
  setup() {
    const route = useRoute()
    const component = computed(() => components[route.params.name as string])
    return () =>
      component.value
        ? // use page component
          h(component.value)
        : // fallback content
          h(
            'div',
            __VUEPRESS_DEV__
              ? 'Page does not exist. This is a fallback content.'
              : '404 Not Found'
          )
  },
})
