<template>
  <view class="w-full min-h-[100vh-88rpx] dark:bg-[var(--dark-page-bg)] dark-transition">
    <view class="waterfall">
      <uv-tabs :list="tabList" @click="changeTab"></uv-tabs>
      <uv-waterfall ref="waterfall">
        <!-- 瀑布流数据 -->
      </uv-waterfall>

      <!-- 加载更多组件 -->
      <uv-load-more :status="loadStatus"></uv-load-more>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loadStatus = ref<string>('加载更多 ...')

const tabList = ref([
  {
    name: '动漫',
  },
  {
    name: '选项二',
  },
])
function changeTab(item: any) {
  console.log(`changeTab -->`, item)
}

const list = ref([])
</script>

<style scoped></style>
