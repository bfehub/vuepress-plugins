<template>
  <ElTabs type="border-card">
    <ElTabPane label="Task">
      <Task />
    </ElTabPane>
    <ElTabPane label="User">
      <User />
    </ElTabPane>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane } from 'element-plus'
import Task from './demo-tabs-task'
import User from './demo-tabs-user.vue'
</script>
