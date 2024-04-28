<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="shidaoganxie" />
      </template>
      <template #title>
        <text class="ganxie">致谢</text>
      </template>
    </uv-cell>

    <view class="resume-list p-[32rpx] min-h-[calc(100vh-356rpx)]">
      <view>我是付寅生 ^_^ 一个喜欢羽毛球、动漫和音乐的前端工程师。</view>
      <view>期待能有机会加入您的团队！再次感谢您的关注与信任！</view>
      <view>感谢您花时间阅读我的简历！</view>
    </view>

    <uv-gap height="24rpx" bgColor="#eee" />
  </uv-cell-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const str = ref<string>('hello uni-app')
</script>

<style scoped></style>
