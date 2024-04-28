<template>
  <view class="relative w-full pb-[40vw] overflow-hidden">
    <image
      class="absolute left-0 top-0 w-full h-full"
      src="https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/230902095822177.jpg?x-oss-process=image/crop,x_0,y_0,w_600,h_200"
    />
  </view>
  <view
    class="left-0 w-full h-[calc(100vh-40vw)] box-border overflow-x-hidden overflow-y-auto p-[24rpx]"
  >
    <view class="mb-[24rpx]" v-for="item in 3" v-if="loadData">
      <uv-skeleton :loading="loadData" avatar avatarSize="40" rows="3"></uv-skeleton>
    </view>
    <view v-if="!loadData">
      <view v-for="item in list" :key="item.name" class="flex gap-[32rpx] mb-[48rpx]">
        <uv-avatar :src="item.avatar"></uv-avatar>
        <view>
          <view class="mb-[12rpx] font-bold">
            {{ item.name }}
          </view>
          <view class="mb-[24rpx] text-6">
            {{ item.desc }}
          </view>
          <uv-album rowCount="2" :urls="item.images" :multipleSize="size" space="20rpx"></uv-album>
        </view>
      </view>

      <!-- <view class="flex gap-[32rpx] mb-[48rpx]">
        <uv-avatar src="https://via.placeholder.com/200x200.png/2878ff"></uv-avatar>
        <view>
          <view class="mb-[18rpx]">
            uv-ui
            破釜沉舟之兼容vue3+2、app、h5、小程序等多端基于uni-app和uView2.x的生态框架，支持单独导入，开箱即用，利剑出击。
          </view>
          <uv-album rowCount="2" :urls="urls" :multipleSize="size" space="20rpx"></uv-album>
        </view>
      </view> -->

      <view class="wrap">
        <uv-load-more
          loadmoreText="点击加载更多"
          loadingText="数据正在加载"
          :status="status"
          :line="true"
          @loadmore="loadMore"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { data, data2, data3 } from './mock'
import type { IData } from './mock'

const loadData = ref<boolean>(true)
const status = ref<string>('loadmore')
const size = ref<number>(80)
const page = ref<number>(1)
const list = ref<IData[]>([])

onLoad(() => {
  const { screenWidth } = uni.getWindowInfo()
  // console.log(`uni.getWindowInfo() -->`, uni.getWindowInfo())
  size.value = (screenWidth - 48 - 32 - 20) / 2

  setTimeout(() => {
    list.value = data
    loadData.value = false
  }, 999)
})

function loadMore() {
  status.value = 'loading'

  setTimeout(() => {
    if (page.value === 1) {
      page.value = page.value + 1
      list.value = [...list.value, ...data2]
      status.value = 'loadmore'
    } else if (page.value === 2) {
      page.value = page.value + 1
      list.value = [...list.value, ...data3]
      status.value = 'loadmore'
    } else {
      status.value = 'nomore'
    }
  }, 1500)
  // console.log(`loadMore -->`)
}
// onReachBottom(() => {
//   if (page.value >= 2) return
//   status.value = 'loading'
//   page.value = ++page.value
//   setTimeout(() => {
//     if (page.value >= 3) status.value = 'nomore'
//     else status.value = 'loading'
//   }, 2000)
// })
</script>

<style lang="scss">
.my-page {
  .uni-scroll-view {
    scroll-behavior: smooth;
  }
}
</style>
