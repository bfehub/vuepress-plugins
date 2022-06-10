<template>
  <div class="vmi-previewer-sources-item">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  rawCode: String,
})
</script>
