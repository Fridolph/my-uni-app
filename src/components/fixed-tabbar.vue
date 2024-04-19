<template>
  <uv-tabbar :value="value" @change="(index: number) => (value = index)">
    <uv-tabbar-item text="主页" icon="home"></uv-tabbar-item>
    <uv-tabbar-item text="学习" icon="file-text"></uv-tabbar-item>
    <uv-tabbar-item text="项目" icon="grid"></uv-tabbar-item>
    <uv-tabbar-item text="爱好" icon="heart"></uv-tabbar-item>
    <uv-tabbar-item text="简历" icon="chat"></uv-tabbar-item>
  </uv-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped></style>
