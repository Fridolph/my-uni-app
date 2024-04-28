<template>
  <view
    class="waterfall w-full min-h-fit bg-[#f1f1f1] dark:bg-[var(--dark-page-bg)] dark-transition"
  >
    <!-- tab粘性布局 -->
    <uv-sticky bgColor="#fff">
      <uv-tabs  :list="tabList" @change="changeTab">
        <template v-slot:right>
          <view class="pr-1" @tap="toast">
            <uv-icon name="list" size="21" bold></uv-icon>
          </view>
        </template>
      </uv-tabs>
    </uv-sticky>

    <!-- 瀑布流布局及相关数据 -->
    <view v-if="loadData" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <uv-loading-icon text="加载中" textSize="30rpx"></uv-loading-icon>
    </view>
    <uv-waterfall
      v-else
      ref="waterfall"
      v-model="list"
      :add-time="10"
      :left-gap="0"
      :right-gap="0"
      :column-gap="0"
      @changeList="changeList"
    >
      <!-- 第一列数据 -->
      <!-- 为了磨平部分平台的BUG，必须套一层view -->
      <template #list1>
        <view class="pl-[24rpx] pr-[12rpx] py-[32rpx]">
          <view
            v-for="item in list1"
            :key="item.id"
            class="overflow-hidden rounded mb-[24rpx] shadow-md"
          >
            <view class="relative overflow-hidden w-[calc(50vw-36rpx)] pb-[60%]">
              <image class="absolute left-0 top-0 w-full h-full" :src="item.image"></image>
            </view>
            <view class="p-[16rpx] bg-[#fff] break-all text-justify">
              <view class="mb-[12rpx] font-bold">
                <text class="value">{{ item.title }}</text>
              </view>
              <view class="text-6">
                <text class="value">{{ item.desc }}</text>
              </view>
            </view>
          </view>
        </view>
      </template>

      <!-- 为了磨平部分平台的BUG，必须套一层view -->
      <!-- 第二列数据 -->
      <template #list2>
        <view class="pl-[12rpx] pr-[24rpx] py-[32rpx]">
          <view
            v-for="item in list2"
            :key="item.id"
            class="overflow-hidden rounded mb-[24rpx] shadow-md"
          >
            <view class="relative overflow-hidden w-[calc(50vw-36rpx)] pb-[60%]">
              <image class="absolute left-0 top-0 w-full h-full" :src="item.image"></image>
            </view>
            <view class="p-[16rpx] bg-[#fff] break-all text-justify">
              <view class="mb-[12rpx] font-bold">
                <text class="value">{{ item.title }}</text>
              </view>
              <view class="text-6">
                <text class="value">{{ item.desc }}</text>
              </view>
            </view>
          </view>
        </view>
      </template>
    </uv-waterfall>

    <!-- 加载更多组件 -->
    <!-- <uv-load-more :status="loadStatus"></uv-load-more> -->
  </view>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from 'vue'
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import type { IListItem } from './types'
import { TabNameEnum } from './types'
import { useListLove1, useListLove2 } from './hooks/useListLove'
import { useListHot1, useListHot2 } from './hooks/useListHot'
import { useListSport1, useListSport2 } from './hooks/useListSport'
import { useListClassic1, useListClassic2 } from './hooks/useListClassic'
import { useListOther1, useListOther2 } from './hooks/useListOther'

/* ------------ 初始页面数据加载 ------------ */
const loadData = ref<boolean>(true)

onLoad(async () => {
  const love1 = await useListLove1()
  const love2 = await useListLove2()
  console.log(`love1 -->`, love1)
  console.log(`love2 -->`, love2)

  list1.value = love1 as unknown as IListItem[]
  list2.value = love2 as unknown as IListItem[]

  loadData.value = false
})

onPullDownRefresh(() => {
  console.log(`onPullDownRefresh -->`)
  // waterfall.value?.clear()
})

// const loadStatus = ref<string>('加载更多 ...')
/* ------------ Tab 粘性布局及切换相关 ------------ */
const tabList = ref([
  {
    name: TabNameEnum.love,
  },
  {
    name: TabNameEnum.hot,
  },
  {
    name: TabNameEnum.sport,
  },
  {
    name: TabNameEnum.classic,
    badge: {
      isDot: true,
    },
  },
  {
    name: TabNameEnum.other,
  },
])

async function changeTab(item: any) {
  loadData.value = true
  let { name } = item

  if (name === TabNameEnum.love) {
    const love1 = await useListLove1()
    const love2 = await useListLove2()
    list1.value = love1 as unknown as IListItem[]
    list2.value = love2 as unknown as IListItem[]
  } else if (name === TabNameEnum.hot) {
    const hot1 = await useListHot1()
    const hot2 = await useListHot2()
    list1.value = hot1 as unknown as IListItem[]
    list2.value = hot2 as unknown as IListItem[]
  } else if (name === TabNameEnum.sport) {
    const sport1 = await useListSport1()
    const sport2 = await useListSport2()
    list1.value = sport1 as unknown as IListItem[]
    list2.value = sport2 as unknown as IListItem[]
  } else if (name === TabNameEnum.classic) {
    const classic1 = await useListClassic1()
    const classic2 = await useListClassic2()
    list1.value = classic1 as unknown as IListItem[]
    list2.value = classic2 as unknown as IListItem[]
  } else if (name === TabNameEnum.other) {
    const other1 = await useListOther1()
    const other2 = await useListOther2()
    list1.value = other1 as unknown as IListItem[]
    list2.value = other2 as unknown as IListItem[]
  }
  loadData.value = false
}
/* ------------ 插槽相关 ------------ */
// 插槽被点击
function toast() {
  uni.showToast({
    icon: 'none',
    title: '插槽被点击',
  })
}

/* ------------ 瀑布流布局及相关数据 ------------ */
const waterfall = ref(null)
// 瀑布流全部数据
let list = ref<IListItem[]>([])
// 瀑布流第一列数据
let list1 = ref<IListItem[]>([])
// 瀑布流第二列数据
let list2 = ref<IListItem[]>([])
// 这点非常重要：e.name在这里返回是list1或list2
// 要手动将数据追加到相应列
function changeList(e: any) {
  console.log(`changeList -->`, e)
}
</script>
