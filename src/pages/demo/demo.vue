<template>
  <view class="w-full min-h-screen dark:bg-[var(--dark-page-bg)] dark-transition">
    <view
      class="relative sm:w-full md:w-full max-w-[1600px] flex flex-col md:flex-row justify-center align-middle text-color shadow-inner sm:shadow-2xl dark:shadow-neutral-700"
    >
      <Avatar />

      <view class="flex justify-center">
        <uv-button class="w-1/3" size="large" :disabled="true" type="primary" text="项目TODO" @click="toDetail" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
function toDetail() {
  uni.navigateTo({
    url: '/pages/resume-detail/index?id=1&name=uniapp',
  })
}
</script>

<style scoped></style>
