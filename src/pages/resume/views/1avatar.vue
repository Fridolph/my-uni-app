<template>
  <view class="w-full flex justify-center items-center mx-auto mt-5 flex-col">
    <!-- <view class="relative rounded-full w-[300rpx] pb-[300rpx] overflow-hidden ring-2">
      <image
        class="absolute left-1/2 -translate-x-1/2 w-full h-full"
        src="/static/resume/avatar.jpg"
      />
    </view> -->
    <uv-image
      class="ring-2"
      src="/static/resume/avatar.jpg"
      width="300rpx"
      height="300rpx"
      shape="circle"
      :lazy-load="true"
    >
      <template v-slot:loading>
        <uv-loading-icon color="gray"></uv-loading-icon>
      </template>
    </uv-image>
  </view>
  <view class="my-[40rpx] text-center">
    <view
      class="py-[6rpx] font-bold bg-gradient-to-r transition-all duration-700 from-yellow-200 to-rose-300 cursor-help"
    >
      <text>热爱Coding，生命不息，折腾不止</text>
    </view>
    <view
      class="py-[6rpx] font-bold bg-gradient-to-r transition-all duration-700 from-sky-200 to-violet-300 cursor-progress"
    >
      <text>羽毛球爱好者，快乐挥拍，球场飞翔</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import useResumeStore from '@/stores/resume'

const store = useResumeStore()
const { intro1, intro2 } = store
</script>

<style scoped></style>
