<template>
  <div
    class="vmi-previewer-sources-item"
    v-html="decodeURIComponent(props.highlightCode || '')"
  ></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String,
  rawCode: String,
  highlightCode: String,
})
</script>
