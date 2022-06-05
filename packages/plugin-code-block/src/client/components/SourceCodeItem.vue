<template>
  <div class="vmi-previewer-source-item">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  rawCode: String,
})
</script>
