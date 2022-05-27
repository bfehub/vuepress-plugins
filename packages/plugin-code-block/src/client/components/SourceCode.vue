<template>
  <div class="vmi-previewer-actions">
    <div class="vmi-previewer-actions-left">
      <span class="vmi-previewer-actions-button">
        <!-- <Copy /> -->
        <CopySuccess />
      </span>
      <span class="vmi-previewer-actions-button">
        <!-- <Expand /> -->
        <UnExpand />
      </span>
    </div>
    <div class="vmi-previewer-actions-right">
      <span class="vmi-previewer-actions-button">
        <Copy />
        <!-- <CopySuccess /> -->
      </span>
      <span class="vmi-previewer-actions-button">
        <Expand />
        <!-- <UnExpand /> -->
      </span>
    </div>
  </div>
  <div class="vmi-previewer-sources">
    <div class="vmi-previewer-tabs">
      <div class="vmi-previewer-tabs-tab">
        <File />
        <span>index.jsx</span>
      </div>
      <div class="vmi-previewer-tabs-tab">
        <File />
        <span>content.jsx</span>
      </div>
      <div class="vmi-previewer-tabs-tab">
        <File />
        <span>modal.less</span>
      </div>
      <div class="vmi-previewer-tabs-bar" style="left: 0; width: 110px"></div>
    </div>
    <component :is="slots.default()[0]"></component>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import Expand from '../icons/Expand.vue'
import UnExpand from '../icons/UnExpand.vue'
import Copy from '../icons/Copy.vue'
import CopySuccess from '../icons/CopySuccess.vue'
import File from '../icons/File.vue'

const slots = useSlots()
</script>
