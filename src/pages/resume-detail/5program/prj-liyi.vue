<template>
  <uv-cell>
    <template #title>
      <view class="mb-[12rpx] font-bold">环球礼仪知识平台</view>
      <view class="text-7 text-sm">
        传统内容型社区综合网站，类似简书、小红书。传统多页面开发模式：jQuery +
        BootStrap+各种jQuery插件。16 年底为优化平台内容，进行架构升级。尤其是前端进行大重构：
      </view>
      <view class="resume-list-title">开发时间</view>
      <view class="resume-list">2017.01 —— 2017.07</view>

      <view class="flex flex-wrap mt-[24rpx] gap-[16rpx]">
        <uv-button size="small" type="primary" text="技术栈" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="jQuery" />
        <uv-button size="small" :plain="true" :hairline="true" text="wangEditor" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="React" />
        <uv-button size="small" :plain="true" :hairline="true" text="Webpack" />
        <uv-button size="small" :plain="true" :hairline="true" text="BootStrap" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="Redux" />
      </view>
    </template>
    <template #label>
      <view class="resume-list-title">主要贡献</view>
      <view class="resume-list">
        <view>负责静态页面及相关样式的编码工作，确保页面在视觉效果和用户体验上均达到高标准</view>
        <view>
          封装了一系列实用的工具模块，如滚动效果、全屏特效、工具栏、动画和过渡相关的 mixin 等
        </view>
        <view>通过响应式设计和兼容性处理，实现不同设备和浏览器上的无缝切换和一致体验</view>
      </view>

      <view class="resume-list-title">难点与收获</view>
      <view class="resume-list">
        <view>由于底层框架的变更，面临了大量的代码改动、结构调整和技术适应</view>
        <view>引入 JSX 和 Redux 带来了全新的开发模式和思维转变</view>
        <view>早期 React 与 jQuery 的集成并不顺畅，需解决两者之间的冲突和兼容性问题</view>
        <view>前端工程化开发模式的转变： 从传统静态页面开发模式过渡到前端工程化开发模式</view>
        <view>深入学习 BootStrap 框架，掌握了其栅格系统、组件样式和响应式设计等核心特性</view>
        <view>熟练掌握了响应式布局的原理和实现方式，为用户提供更好的视觉与交互体验</view>
        <view>改变了传统 DOM 操作的思维方式，开始理解并实践状态改变视图的核心思想</view>
      </view>
    </template>
  </uv-cell>
</template>
