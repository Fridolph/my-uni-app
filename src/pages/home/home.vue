<template>
  <view class="content">
    <image class="logo" src="/static/logo.jpg" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <!-- 直接从 store 中访问 state -->
      <text>Current Count: {{ count }}</text>
    </view>
    <view class="flex justify-center items-center w-full h-[200rpx] bg-blue-300">
      <text>Hello Tailwind CSS</text>
    </view>
    <view>
      <uv-button type="primary" text="uv-ui按钮" @click="increment">add</uv-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useCounterStore } from '../../stores/counter'

const title = ref('Hello')
const store = useCounterStore()
const { count } = toRefs(store)
const { increment } = store
</script>

<style scoped lang="postcss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}
</style>
