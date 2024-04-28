<template>
  <view class="w-full min-h-max dark:bg-[var(--dark-page-bg)] dark-transition">
    <view
      class="relative sm:w-full md:w-full max-w-[1600px] flex flex-col md:flex-row justify-center align-middle text-color shadow-inner sm:shadow-2xl dark:shadow-neutral-700"
    >
      <Avatar />

      <view class="mb-8 flex justify-center">
        <uv-button
          class="w-1/3"
          size="large"
          type="primary"
          text="动漫"
          @click="toDetail(HobbyEnum.anime)"
        />
      </view>
      <view class="mb-8 flex justify-center">
        <uv-button
          class="w-1/3"
          size="large"
          type="primary"
          text="小说"
          @click="toDetail(HobbyEnum.novel)"
        />
      </view>
      <view class="flex justify-center">
        <uv-button
          class="w-1/3"
          size="large"
          type="primary"
          text="游戏世界"
          @click="toDetail(HobbyEnum.game)"
        />
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

function toDetail(type: HobbyEnum) {
  uni.navigateTo({
    url: `/pages/hobby-${type}/index`,
  })
}
</script>

<style scoped></style>
