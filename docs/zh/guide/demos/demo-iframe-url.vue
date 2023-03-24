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
// 只作为代码块展示不会真实的解析，如下导入一个不存在的模块时并不会解析错误。
// @ts-expect-error
import utils from '@/utils'
</script>
