<template>
  <uv-cell>
    <template #title>
      <view class="mb-[12rpx] font-bold">EDR 终端威胁侦测与响应平台</view>
      <view class="text-7 text-sm">
        该项目通过探针实时监控用户终端的进程和文件，并实时上报汇总到服务端，最后统一在Web端展示给安全专员查看。实现了恶意代码预警和预测，极大地提高了客户的安全级别。
      </view>

      <view class="resume-list-title">开发时间</view>
      <view class="resume-list">
        <view>
          <text class="text-primary">v2</text>
          2017.10 —— 2018.06
        </view>
        <view>
          <text class="text-primary">v3</text>
          2018.09 —— 2021.08
        </view>
        <view>
          <text class="text-primary">v4</text>
          2022.04 —— 2024.01
        </view>
      </view>
      <view class="flex flex-wrap mt-[24rpx] gap-[16rpx]">
        <uv-button size="small" type="primary" text="技术栈" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="Vue3" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="vue-i18n" />
        <uv-button size="small" :plain="true" :hairline="true" text="iView" />
        <uv-button size="small" :plain="true" :hairline="true" text="Webpack" />
        <uv-button size="small" :plain="true" :hairline="true" text="axios" />
        <uv-button size="small" :plain="true" :hairline="true" text="Echarts" />
        <uv-button size="small" :plain="true" :hairline="true" text="vxe-table" />
        <uv-button size="small" type="primary" :plain="true" :hairline="true" text="D3.js" />
      </view>
    </template>
    <template #label>
      <view class="resume-list-title">主要贡献</view>
      <view class="resume-list">
        <view>
          1.
          负责该项目前端架构，包括完善了基础模块、utils，编写了详细的文档和示例代码，引导团队遵循最佳实践和开发流程；
        </view>
        <view>2. 实现首页安全概览及可配置化展示，提高了用户体验和客户满意度；</view>
        <view>
          3. 完成资产详情页面，通过 Websocket 获取并展示在线终端相关信息，提高了性能和实时性；
        </view>
        <view>4. 封装了接口请求、高级搜索、过滤器、PowerShell 等业务组件，提高开发效率；</view>
        <view>
          5. 为告警、进程等页面请求大量数据时设计了前端过滤和预缓存方案，提升了页面加载速度和性能；
        </view>
        <view>6. 自定义页面及 html、pdf、excel 导出功能；</view>
        <view>7. 负责了该 ToB 项目私有部署方案及相关性能优化。</view>
      </view>

      <view class="resume-list-title">项目难点</view>
      <view class="resume-list">
        <view>
          1.
          高级搜索和筛选器（表单项较多，需数据联动，还需考虑安全性，屏蔽敏感数据）设计时有复杂度；
        </view>
        <view>
          2.
          使用vxe-table实现复杂表格（接口信息量大、展示内容较多、列数多，用户操作密集）并为用户定制化table列与其他数据的展示；
        </view>
        <view>
          3. 单个告警接口数据过多时（超过 k 条），考虑二次处理之后的展示和渲染，使用Web
          Worker并行处理提高性能。
        </view>
      </view>
    </template>
  </uv-cell>
</template>

<script setup lang="ts"></script>

<style scoped></style>
