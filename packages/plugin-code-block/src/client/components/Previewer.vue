<template>
  <div class="vmi-previewer" :class="`vmi-previewer-${props.direction}`">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'vertical',
  },
})
</script>
