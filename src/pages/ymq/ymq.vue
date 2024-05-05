<template>
  <view class="w-full min-h-max overflow-hidden overflow-y-scroll">
    <uv-swiper
      :list="list"
      height="200"
      previousMargin="30"
      nextMargin="30"
      circular
      :autoplay="true"
      radius="5"
    ></uv-swiper>

    <view class="mt-[32rpx] px-4">
      <uv-button type="primary" size="large" text="个人精彩集锦" @click="toVideo"></uv-button>
    </view>

    <view class="mt-[32rpx] px-4 py-4">
      <uv-read-more show-height="500rpx" :toggle="true">
        <view class="title font-bold">
          走出赛场走进球馆。丹麦羽毛球明星球员赞成都：运动氛围好、球迷热情
        </view>
        <view class="my-[24rpx]">

          <uv-image width="100%" src="https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/hz.jpeg"  />
        </view>
        <view class="content text-sm text-6">
          <view class="mb-[48rpx]">
            成都2024汤尤杯进入最终的决赛环节，不少球队也即将结束成都之行。昨日（5月4日），丹麦羽毛球国家队部分球员在结束比赛之后，来到位于成都高新区环球中心的羽毛球场馆，与羽毛球爱好者们现场互动，感受汤尤杯比赛场馆以外，成都高新区浓厚的羽毛球运动氛围。
          </view>

          <view class="mb-[48rpx]">
            “没想到除了成都2024汤尤杯的比赛场地以外，成都还有这么棒的羽毛球馆，成都高新区的羽毛球氛围很好，球迷们都很热情。”丹麦羽毛球队球星安德斯·安东森说道。
          </view>

          <view class="mb-[48rpx]">
            当天，包括安东森、马格纳斯·约翰内森在内的多位丹麦羽毛球队队员来到成都高新区的羽毛球馆，这不仅给了球迷们一个近距离接触世界级羽毛球运动员的机会，也进一步推动了羽毛球运动在成都的普及与发展。
          </view>

          <view class="mb-[48rpx]">
            丹麦羽毛球国家队队员在成都高新区打球
            活动现场，丹麦羽毛球队的运动员们与市民亲切互动，分享他们的羽毛球故事和经验，还现场展示了精湛的球技，赢得现场观众的阵阵掌声和欢呼。大家合影后，安东森还为热情的球迷一一签名留念。
          </view>

          <view class="mb-[48rpx]">
            见到了自己喜欢的羽毛球运动员，球迷们非常高兴，纷纷表示感受到了羽毛球运动的独特魅力，也让大家对成都2024汤尤杯有了更深的了解和关注。羽毛球馆相关负责人表示，“羽毛球在成都拥有深厚的群众基础，成都2024汤尤杯的举办无疑为这座城市的羽毛球氛围再添一把火。希望通过这次活动，让更多市民感受到羽毛球运动的乐趣，激发大家参与运动的热情。”
          </view>
        </view>
      </uv-read-more>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/lindan.jpeg',
  'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/top3.jpeg',
  'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/chen.jpeg',
  'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/syq.jpeg',
  'https://fridolph.oss-rg-china-mainland.aliyuncs.com/my-uni-app/lzw.jpeg',
])

const swiperList = ref([
  'integral',
  'kefuv-ermai',
  'coupon',
  'gift',
  'scan',
  'pause-circle',
  'volume-off',
  'email',
  'list',
])

function toVideo() {
  uni.navigateTo({
    url: `/pages/ymq/ymq-video`,
  })
}
</script>
