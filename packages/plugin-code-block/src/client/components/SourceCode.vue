<template>
  <div class="vmi-previewer-actions">
    <div class="vmi-previewer-actions-left">
      <span
        v-if="!hideActions.includes('EXTERNAL')"
        title="Open demo in new tab"
        class="vmi-previewer-actions-button"
        @click="openIframe"
      >
        <Open />
      </span>
      <span
        v-if="props.iframe"
        title="Reload demo iframe page"
        class="vmi-previewer-actions-button"
        @click="refreshIframe"
      >
        <Refresh />
      </span>
      <span
        v-if="props.filePath"
        title="Open demo file in editor"
        class="vmi-previewer-actions-button"
        @click="openEditor"
      >
        <Edit />
      </span>
    </div>
    <div class="vmi-previewer-actions-right">
      <span
        class="vmi-previewer-actions-button"
        title="Copy source code"
        @click="handleCopy"
      >
        <Copy v-show="!state.isCopy" />
        <CopySuccess v-show="state.isCopy" />
      </span>
      <span
        class="vmi-previewer-actions-button"
        title="Toggle source code panel"
        @click="handleExpand"
      >
        <Expand v-show="!state.isExpand" />
        <UnExpand v-show="state.isExpand" />
      </span>
    </div>
  </div>
  <div v-show="state.isExpand" class="vmi-previewer-sources">
    <div v-if="$slots.default?.().length > 1" class="vmi-previewer-tabs">
      <div
        v-for="(component, index) of $slots.default?.()"
        :key="index"
        :class="{ active: state.active === index }"
        class="vmi-previewer-tabs-tab"
        @click="handleTabClick(index)"
      >
        <File />
        <span>{{ component.props.name }}</span>
      </div>
    </div>
    <component :is="$slots.default?.()[state.active]"></component>
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
import Refresh from '../icons/Refresh.vue'
import Edit from '../icons/Edit.vue'

/**
 * Props define
 */
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
  defaultShowCode: {
    type: Boolean,
    default: false,
  },
  hideActions: {
    type: String,
    default: '',
  },
  filePath: {
    type: String,
    default: '',
  },
})

/**
 * Get slots
 */
const slots = useSlots()

/**
 * Parse props
 */
const hideActions = ref<string[]>([])
try {
  if (props.hideActions) {
    hideActions.value = JSON.parse(props.hideActions)
  }
} catch (error) {}

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
  const components = slots.default()
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

const refreshIframe = (e: MouseEvent) => {
  const iframe = (
    e.target as HTMLElement
  ).parentNode.parentNode.parentNode.parentNode.querySelector('iframe')
  iframe.src = iframe.getAttribute('src')
}

const openEditor = () => {
  fetch(`/__open-in-editor?file=${props.filePath}`)
}
</script>
