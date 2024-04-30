<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="zhuanye" />
      </template>
      <template #title>
        <text class="text-base">专业技能</text>
      </template>
    </uv-cell>

    <view class="resume-list px-[40rpx] py-[24rpx]">
      <view>
        1. 掌握 HTML、CSS、 JavaScript 、 ES6 及
        <text class="text-primary">TypeScript</text>
        语法，熟悉 HTTP 协议；
      </view>
      <view>
        2. 熟悉 Vue 全家桶，ElementUI、iView、NaiveUI、
        <text class="text-primary">TailWindCSS</text>
        ，熟悉
        <text class="text-primary">Vue3</text>
        新特性及 Composition API ；
      </view>
      <view>
        3. 熟悉 Webpack 、 Vite 常规配置、loader、plugin 及
        <text class="text-primary">性能优化</text>
        相关配置；
      </view>
      <view>
        4. 熟悉前端单元测试；严格遵守Angular提交规范及Recommend代码规范，熟悉
        <text class="text-primary">Code Review</text>
        审查流程；
      </view>
      <view>
        5. 做政府项目，对于
        <text class="text-primary">Web 安全</text>
        有比较严格和全面的实践；
      </view>
      <view>
        6. 熟悉
        <text class="text-primary">响应式设计</text>
        ，对 移动端 及 PC 端各尺寸下的响应式设计有比较深入的理解；
      </view>
      <view>7. 熟悉Git工作流程， Linux开发环境及常见命令；</view>
      <view>
        8. 了解 Node.js ，能用 Koa 、
        <text class="text-primary">NestJS</text>
        做基础的服务端开发；
      </view>
      <view>
        9. 了解
        <text class="text-primary">Gitlab CI</text>
        流程配置，并配合 Jenkins 完成前端项目的 部署 和 上线 工作。
      </view>
    </view>

    <uv-gap height="24rpx" bgColor="#eee" />
  </uv-cell-group>
</template>
