<template>
  <view class="w-full h-max overflow-hidden">
    <view class="fixed left-0 top-0 w-full h-[460rpx] overflow-hidden">
      <!-- #ifdef MP-WEIXIN -->
      <!-- <video
        id="video"
        class="w-full h-full"
        object-fit="cover"
        :src="videoList[currentIndex].src"
        @error="videoErrorCallback"
        controls
      ></video> -->
      <image class="left-0 top-0 w-full" width="100%" :src="videoList[currentIndex].thumb" />

      <!-- #endif -->
      <!-- #ifdef H5 -->
      <iframe
        width="100%"
        height="100%"
        :src="videoList[currentIndex].src"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      ></iframe>
      <!-- #endif -->
    </view>
    <view
      class="fixed left-0 top-[460rpx] w-full h-[calc(100vh-460rpx)] box-border p-[32rpx] overflow-hidden overflow-y-auto"
    >
      <uv-list>
        <uv-list-item
          v-for="(item, idx) in videoList"
          class="mb-[24rpx]"
          :key="item.title"
          :title="item.title"
          :note="item.description"
          :thumb="item.thumb"
          thumb-size="lg"
          :clickable="true"
          @click="changeVideo(item, idx)"
        ></uv-list-item>
        <!-- <uv-list-item
          title="列表左侧带略缩图"
          note="列表描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uv-list-item> -->
      </uv-list>
      <uv-load-more :line="true" :status="status" />
    </view>
    <uv-toast ref="toastRef"></uv-toast>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UvToast from '@/uni_modules/uv-toast/components/uv-toast/uv-toast.vue'

interface VideoListItem {
  title: string
  description: string
  src: string
  thumb: string
  page: string
}

const status = ref<string>('nomore')
const videoList = ref<VideoListItem[]>([
  {
    title: '20240302 和老哥的精彩集锦',
    description: '和老哥的精彩集锦 ~ 19分惜败',
    page: '/pages/video/20240302_1',
    src: 'https://www.bilibili.com/video/BV1DE421G7zK',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20240302_dan.jpg',
  },
  {
    title: '20240302 和路总的多拍',
    description: '和路总的多拍，我最爱的p9200给磨破了 …',
    page: '/pages/video/20240302_2',
    src: 'https://player.bilibili.com/player.html?aid=1204240953&bvid=BV11f421U7qw&cid=1532065505&p=1',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20240302_lu.jpg',
  },
  {
    title: '20240201 再战森森 ~ 提高1分',
    description: '仅仅1分，对比下面的，真的进步不少！~ 他怎么这么猛',
    page: '/pages/video/20240201_sen',
    src: 'https://player.bilibili.com/player.html?aid=1650160163&bvid=BV137421T7mZ&cid=1428696958&p=1',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20240201.jpg',
  },
  {
    title: '20240106 和杜总的多拍',
    description: '24年1月第二周和杜总的多拍记录，也是累死个人',
    page: '/pages/video/20240106_du',
    src: 'https://player.bilibili.com/player.html?aid=836707240&bvid=BV1dg4y127U2&cid=1417839425&p=1',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20240113.jpg',
  },
  {
    title: '记2024年第一场羽毛球单打第一颗多拍',
    page: '/pages/video/20240106_bin',
    description: '和斌斌的一场单打，大比分落后 ~ 拿下这一球后居然逆转了，羽毛球运动的魅力！',
    src: 'https://player.bilibili.com/player.html?aid=241107074&bvid=BV1Ve411v7FB&cid=1400172854&p=1',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20240106.jpg',
  },
  {
    title: '羽毛球单打整局，求大佬指点进步',
    description: '20230714，和森森的一场单打记录，依旧被虐 ORZ...',
    page: '/pages/video/20230714_sen',
    src: 'https://player.bilibili.com/player.html?aid=913420830&bvid=BV11M4y1x7GH&cid=1196218185&p=1',
    thumb: 'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/20230714.jpg',
  },
])
const currentIndex = ref<number>(0)

const toBilibili = () => {
  uni.switchTab({ url: '/pages/' })
}

const toastRef = ref<InstanceType<typeof UvToast>>()
const videoErrorCallback = (e: any) => {
  uni.showModal({
    content: e.target.errMsg,
    showCancel: false,
  })
}

const changeVideo = (item: VideoListItem, idx: number) => {
  console.log('changeVideo', item, idx)
  if (idx === currentIndex.value) return

  toastRef.value!.show({
    type: 'loading',
    title: '正在加载',
    message: '正在加载',
    duration: 500,
  })

  setTimeout(() => {
    currentIndex.value = idx
    uni.navigateTo({
      url: `${item.page}`,
    })
  }, 200)
}
</script>

<style scoped></style>
