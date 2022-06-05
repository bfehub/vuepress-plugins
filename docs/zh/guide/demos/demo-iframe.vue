<template>
  <ul>
    <li v-for="i in 100" :key="i">
      Scroll down to see the bottom-right button.
    </li>
  </ul>
  <ElBacktop :right="20" :bottom="20" />
</template>

<script lang="ts" setup>
import { ElBacktop } from 'element-plus'
</script>
