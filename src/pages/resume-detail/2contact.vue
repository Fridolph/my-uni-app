<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="lianxi" />
      </template>
      <template #title>
        <text class="text-base">联系方式</text>
      </template>
    </uv-cell>


    <uv-cell title="手机" value="16602835945"></uv-cell>
    <uv-cell title="邮箱" value="249121486@qq.com"></uv-cell>
    <uv-cell title="Github">
      <template #value>
        <uv-link href="https://github.com/fridolph" text="github.com/fridolph" :under-line="true" />
      </template>
      <template #right-icon>
        <uv-icon size="30rpx" name="arrow-right"></uv-icon>
      </template>
    </uv-cell>
    <uv-cell title="个人主页">
      <template #value>
        <uv-link href="https://fridolph.github.io" text="fridolph.github.io" :under-line="true" />
      </template>
      <template #right-icon>
        <uv-icon size="30rpx" name="arrow-right"></uv-icon>
      </template>
    </uv-cell>
    <uv-cell title="技术博客">
      <template #value>
        <uv-link href="https://blog.fridolph.top" text="blog.fridolph.top" :under-line="true" />
      </template>
      <template #right-icon>
        <uv-icon size="30rpx" name="arrow-right"></uv-icon>
      </template>
    </uv-cell>
  </uv-cell-group>
  <uv-gap height="24rpx" bgColor="#eee" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const str = ref<string>('hello uni-app')
</script>

<style scoped></style>
