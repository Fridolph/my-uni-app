<template>
  <view class="relative w-full pb-[40%] overflow-hidden">
    <image
      class="absolute left-0 top-0 w-full h-full"
      src="https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/230902095822177.jpg?x-oss-process=image/crop,x_0,y_0,w_600,h_200"
    />
  </view>
  <view class="p-[24rpx]">
    <view class="mb-[24rpx]" v-for="item in 3" v-if="loadData">
      <uv-skeleton :loading="loadData" avatar avatarSize="40" rows="3"></uv-skeleton>
    </view>
    <view v-if="!loadData" class="flex gap-[32rpx] mb-[48rpx]">
      <uv-avatar src="https://via.placeholder.com/200x200.png/2878ff"></uv-avatar>
      <view>
        <view class="mb-[18rpx]">
          uv-ui
          破釜沉舟之兼容vue3+2、app、h5、小程序等多端基于uni-app和uView2.x的生态框架，支持单独导入，开箱即用，利剑出击。
        </view>
        <uv-album rowCount="2" :urls="urls" :multipleSize="size" space="20rpx"></uv-album>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const loadData = ref<boolean>(true)

const urls = ref([
  'https://via.placeholder.com/100x200.png/3c9cff/fff',
  'https://via.placeholder.com/200x200.png/3c9cff/fff',
  'https://via.placeholder.com/300x200.png/3c9cff/fff',
  'https://via.placeholder.com/280x200.png/3c9cff/fff',
])

const size = ref<number>(80)

onLoad(() => {
  const { screenWidth } = uni.getWindowInfo()
  // console.log(`uni.getWindowInfo() -->`, uni.getWindowInfo())
  size.value = (screenWidth - 48 - 32 - 20) / 2

  setTimeout(() => {
    loadData.value = false
  }, 1200)
})
</script>

<style lang="scss">
.my-page {
  .uni-scroll-view {
    scroll-behavior: smooth;
  }
}
</style>
