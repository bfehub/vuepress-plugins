<template>
  <div class="vmi-previewer-example">
    <iframe
      v-if="props.iframe"
      width="100%"
      :height="height"
      :src="props.iframeSrc"
      frameborder="0"
    ></iframe>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  id: String,
  iframe: {
    type: [Boolean, String, Number],
    default: false,
  },
  iframeSrc: {
    type: String,
    default: '',
  },
})

const height = computed(() => {
  return typeof props.iframe === 'boolean' ? '150' : props.iframe
})
</script>
