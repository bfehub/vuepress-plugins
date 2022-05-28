<template>
  <ElRow class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </ElRow>

  <ElDivider />

  <DemoDisabled />
</template>

<script setup>
import { ElRow, ElDivider } from 'element-plus'
import DemoDisabled from './demo-disabled.vue'
</script>
