<template>
  <view class="w-full min-h-max dark:bg-[var(--dark-page-bg)] dark-transition">
    <view
      class="relative sm:w-full md:w-full max-w-[1600px] flex flex-col md:flex-row justify-center align-middle text-color shadow-inner sm:shadow-2xl dark:shadow-neutral-700"
    >
      <Avatar />

      <view class="mb-4 flex justify-center">
        <uv-button class="w-1/3" type="success" text="羽毛球" @click="toDetail('ymq/ymq')" />
      </view>
      <view class="mb-4 flex justify-center">
        <uv-button class="w-1/3" type="error" text="游戏" @click="toDetail('hobby-game/index')" />
      </view>
      <view class="mb-4 flex justify-center">
        <uv-button class="w-1/3" type="warning" text="动漫" @click="toDetail('hobby-anime/index')" />
      </view>
      <view class="mb-4 flex justify-center">
        <uv-button class="w-1/3" type="primary" text="简历" @click="toDetail('resume-detail/index')" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const ANIME = 'anime'
const NOVEL = 'novel'
const GAME = 'game'

enum HobbyEnum {
  anime = ANIME,
  novel = NOVEL,
  game = GAME,
}

function toDetail(path: string) {
  uni.switchTab({
    url: `/pages/${path}`,
  })
}
</script>

<style scoped></style>
