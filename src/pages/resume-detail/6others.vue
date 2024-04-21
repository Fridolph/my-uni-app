<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="jiyukaiyuanjishudajian" />
      </template>
      <template #title>
        <text class="text-base">其他参与</text>
      </template>
    </uv-cell>

    <view class="prj-list">
      <view class="prj-title">参与项目</view>
      <view
        class="prj-item mt-[24rpx] mb-[12rpx]"
        v-for="item in projectList"
        :key="item.projectName"
      >
        <view class="mb-[12rpx]">
          <uv-link :href="item.url" :text="item.projectName" :under-line="true" />
        </view>
        <view class="text-6 text-sm">
          {{ item.desc }}
        </view>
      </view>

      <!-- <view class="prj-item">
        <view class="mb-[16rpx]">
          <uv-link
            href="https://github.com/Fridolph/my-element-plus"
            text="my-element-plus"
            :under-line="true"
          />
        </view>
        <view class="text-6 text-sm">
          封装个人的ElementPlus组件库，参考源码使用 Vue3 + Vite + TS4实现简易版组件库
        </view>
      </view> -->
    </view>

    <uv-gap height="12rpx" bgColor="#eee" />

    <view class="prj-list">
      <view class="prj-title">最近文章</view>
      <view
        class="prj-item mt-[24rpx] mb-[12rpx]"
        v-for="item in articleList"
        :key="item.projectName"
      >
        <view class="mb-[12rpx]">
          <uv-link :href="item.url" :text="item.projectName" :under-line="true" />
        </view>
        <view class="text-6 text-sm">
          {{ item.desc }}
        </view>
      </view>
    </view>

  </uv-cell-group>
  <uv-gap height="24rpx" bgColor="#eee" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IListItem {
  projectName: string
  url: string
  desc: string
}

const projectList = ref<IListItem[]>([
  {
    projectName: 'my-resume',
    url: 'https://github.com/Fridolph/my-resume',
    desc: '个人简历，Vue3+TypeScript +Tailwind CSS + i18n全新版本',
  },
  {
    projectName: 'my-uni-app',
    url: 'https://github.com/Fridolph/my-uni-app',
    desc: 'uni-app，Vue3+TS+Tailwind多端适配，上面的简历项目也囊括其中',
  },
  {
    projectName: 'FE-prepare-interview',
    url: 'https://github.com/Fridolph/FE-prepare-interview',
    desc: '前端综合知识体系相关整理，在线 vitepress 文档',
  },
  {
    projectName: 'my-element-plus',
    url: 'https://github.com/Fridolph/my-element-plus',
    desc: '封装个人的ElementPlus组件库，参考源码使用 Vue3 + Vite + TS4实现简易版组件库',
  },
  {
    projectName: 'my-program',
    url: 'https://github.com/Fridolph/my-program',
    desc: '上述学习仓库的一些实际案例，主要展示了一些较为简单的 CSS、JavaScript 效果的细节实现',
  },
])

const articleList = ref<IListItem[]>([
  {
    projectName: '学习TailWindCSS顺便打造个性化在线简历项目',
    url: 'https://juejin.cn/post/7334929489195909170',
    desc: '笔者以实际项目为例，带着读者学习TailwindCSS，并运用到项目中，举一反三，进行优化实践。Vite+Vue3+TS+TailWindCSS打造个性化在线简历项目。',
  },

  {
    projectName: 'Vue关于keep-alive的相关整理',
    url: 'https://juejin.cn/post/7342337684646051879',
    desc: '最近参加面试，面试官问到了关于 keep-alive 的问题。面向面试写作之 keep-alive，相关知识点梳理。',
  },

  {
    projectName: '使用 VitePress 打造个人专属的前端知识体系',
    url: 'https://juejin.cn/post/7346888998487310390',
    desc: '本文的核心是通过VitePress构建和完善在线文档，帮助大家系统化地搭建属于自己的前端知识体系。分享我在学习过程中的方法论及面试复盘经验，以期助力自己及准备找工作的你更高效地找到心仪的工作。',
  },

  {
    projectName: '【源码学习】Radash（一）Typed 类型判断',
    url: 'https://juejin.cn/post/7353572109949550619',
    desc: 'Radash这个新兴的工具库，以其现代化的设计和对 TypeScript 的原生支持，迅速吸引了开发者的注意。大家都说好用，而且支持TS，那么我们就来一探究竟吧！',
  },
])
</script>

<style scoped></style>
