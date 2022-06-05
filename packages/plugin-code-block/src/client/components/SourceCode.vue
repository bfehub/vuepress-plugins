<template>
  <div class="vmi-previewer-actions">
    <div class="vmi-previewer-actions-left">
      <span class="vmi-previewer-actions-button" @click="openIframe">
        <Open />
      </span>
    </div>
    <div class="vmi-previewer-actions-right">
      <span class="vmi-previewer-actions-button" @click="handleCopy">
        <Copy v-show="!state.isCopy" />
        <CopySuccess v-show="state.isCopy" />
      </span>
      <span class="vmi-previewer-actions-button" @click="handleExpand">
        <Expand v-show="!state.isExpand" />
        <UnExpand v-show="state.isExpand" />
      </span>
    </div>
  </div>
  <div v-show="state.isExpand" class="vmi-previewer-sources">
    <div v-if="components.length > 1" class="vmi-previewer-tabs">
      <div
        v-for="(component, index) of components"
        :key="index"
        :class="{ active: state.active === index }"
        class="vmi-previewer-tabs-tab"
        @click="handleTabClick(index)"
      >
        <File />
        <span>{{ component.props.name }}</span>
      </div>
    </div>
    <component :is="components[state.active]" :key="state.active"></component>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, ref, reactive } from 'vue'
import { useClipboard } from '@vueuse/core'
import Expand from '../icons/Expand.vue'
import UnExpand from '../icons/UnExpand.vue'
import Copy from '../icons/Copy.vue'
import CopySuccess from '../icons/CopySuccess.vue'
import File from '../icons/File.vue'
import Open from '../icons/Open.vue'

/**
 * Props define
 */
const props = defineProps({
  iframeSrc: {
    type: String,
    default: '',
  },
  defaultShowCode: {
    type: Boolean,
    default: false,
  },
})

/**
 * Get slots
 */
const slots = useSlots()
const components = slots.default()

/**
 * Code status
 */
const state = reactive({
  active: 0,
  isCopy: false,
  isExpand: props.defaultShowCode,
})

const handleExpand = () => {
  state.isExpand = !state.isExpand
}

const handleTabClick = (index) => {
  state.active = index
}

/**
 * Copy raw code
 */
const rawCode = ref('')
const { copy } = useClipboard({ source: rawCode })
const handleCopy = async () => {
  rawCode.value = decodeURIComponent(components[state.active].props.rawCode)

  await copy()

  state.isCopy = true

  setTimeout(() => {
    state.isCopy = false
  }, 1000)
}

/**
 * Extended functions
 */
const openIframe = () => {
  window.open(props.iframeSrc)
}
</script>
