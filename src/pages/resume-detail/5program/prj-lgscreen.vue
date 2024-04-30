<template>
  <uv-cell>
    <template #title>
      <view class="mb-[12rpx] font-bold">LC 安全大屏</view>
      <view class="text-7 text-sm">
        安全可视化项目。通过结合EDR项目的数据，利用大数据分析和机器学习等技术对资产、告警和终端信息进行深度处理和分析，用户可以通过大屏快速了解安全态势，发现潜在威胁，并做出及时响应，从而提高企业的整体安全防护能力。
      </view>
      <view class="resume-list-title">开发时间</view>
      <view class="resume-list">2022.08 —— 2023.06</view>

      <view class="flex flex-wrap mt-[24rpx] gap-[16rpx]">
        <uv-button size="small" type="primary" text="技术栈" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="Vue3" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="TypeScript" />
        <uv-button size="small" :plain="true" :hairline="true" text="Vite" />
        <uv-button size="small" :plain="true" :hairline="true" text="Echarts" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="响应式设计" />
        <uv-button size="small" :plain="true" :hairline="true" text="D3.js" />
        <uv-button size="small" :plain="true" :hairline="true" text="axios" />
      </view>
    </template>
    <template #label>
      <view class="resume-list-title">主要贡献</view>
      <view class="resume-list">
        <view>
          <text class="font-bold">性能优化：</text>
          为减少加载时间，减少图片使用，采用 CSS 绘制和 SVG 来呈现
        </view>
        <view>
          <text class="font-bold">ATT&CK 热力图实现：</text>
          同时考虑到小屏提供了 simple 模式展示
        </view>
        <view>
          <text class="font-bold">响应式设计：</text>
          针对lg尺寸屏幕，对非核心展示元素进行缩略化处理，既保证页面的简洁性，又保留核心信息，得到客户好评
        </view>
      </view>

      <view class="resume-list-title">项目难点</view>
      <view class="resume-list">
        <view>1. 首屏加载，白屏优化，相关性能优化</view>
        <view>2. ECharts、d3 绘制各个子模块</view>
        <view>3. 数据响应式，各图表渲染实时更新</view>
        <view>4. 响应式设计，从平板、PC 到大屏设备展示支持</view>
      </view>
    </template>
  </uv-cell>
</template>
