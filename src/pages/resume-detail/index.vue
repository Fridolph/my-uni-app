<template>
  <uv-loading-page
    v-if="loadPage"
    :loading="loadPage"
    loading-mode="spinner"
    loading-text="Never give up!"
    image="/static/logo.jpg"
    icon-size="100rpx"
  ></uv-loading-page>

  <view v-else class="resume-detail bg-slate-500 overflow-hidden">
    <uv-notice-bar
      class="h-[36.5rpx]"
      text="欢迎访问我的简历项目。除了小程序您还可以在我的在线域名访问到，https://resume.fridolph.top 喜欢的话可以点个赞并收藏哦"
      direction="row"
      icon="integral"
    ></uv-notice-bar>

    <uv-vtabs
      class="my-resume-tab"
      :chains="true"
      :height="tabHeight"
      :list="list"
      :barItemBadgeStyle="{ right: '6rpx', top: '42rpx' }"
      barWidth="160rpx"
      hdHeight="74rpx"
      @change="clickTabItem"
    >
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="0"
        key="基本信息"
        name="基本信息"
        keyName="基本信息"
      >
        <Baseinfo />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="1"
        key="联系方式"
        name="联系方式"
        keyName="联系方式"
      >
        <Contact />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="2"
        key="专业技能"
        name="专业技能"
        keyName="专业技能"
      >
        <Skill />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="3"
        key="工作经历"
        name="工作经历"
        keyName="工作经历"
      >
        <Experience />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="4"
        key="项目经历"
        name="项目经历"
        keyName="项目经历"
      >
        <Program />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="5"
        key="其他参与"
        name="其他参与"
        keyName="其他参与"
      >
        <Others />
      </uv-vtabs-item>
      <uv-vtabs-item
        :barItemStyle="{ height: '50rpx' }"
        index="6"
        key="致谢"
        name="致谢"
        keyName="致谢"
      >
        <Thanks />
      </uv-vtabs-item>
    </uv-vtabs>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Baseinfo from './1baseinfo.vue'
import Contact from './2contact.vue'
import Skill from './3skill.vue'
import Experience from './4experience.vue'
import Program from './5program/index.vue'
import Others from './6others.vue'
import Thanks from './7thanks.vue'
import { onReady } from '@dcloudio/uni-app'

/* ------- 页面初始化与加载 ------- */
const loadPage = ref<boolean>(true)
const loadData = ref<boolean>(true)
const skeleton = ref([
  {
    type: 'line',
    num: 3,
    gap: '20rpx',
  },
])
// 模拟请求接口数据
onReady(() => {
  setTimeout(() => {
    list.value = getList
    loadPage.value = false
  }, 666)
})

// tabbar相关
const list = ref<any>([])
const currentTab = ref<number>(0)
const tabHeight = computed(() => {
  // 这里因为要转rpx 所以在原有px基础上 * 2
  return uni.getSystemInfoSync().windowHeight - uni.upx2px(74)
})

function clickTabItem(index: any) {
  console.log('选项改变：', index)
  currentTab.value = index
}

const getList = [
  {
    name: '基本信息',
  },
  {
    name: '联系方式',
  },
  {
    name: '专业技能',
  },
  {
    name: '工作经历',
    badge: {
      isDot: true,
    },
  },
  {
    name: '项目经历',
  },
  {
    name: '其他参与',
  },
  {
    name: '致谢',
  },
]
</script>

<style lang="postcss">
.resume-detail {
  .uv-list-item {
    margin-top: 12rpx;
    font-size: 14px;
  }
}
</style>
