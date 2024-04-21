<template>
  <view class="w-full min-h-screen dark:bg-[var(--dark-page-bg)] dark-transition">
    <view
      class="relative sm:w-full md:w-full max-w-[1600px] flex flex-col md:flex-row justify-center align-middle text-color shadow-inner sm:shadow-2xl dark:shadow-neutral-700"
    >
      <!-- <AnchorTool /> -->
      <!-- <DownloadTool /> -->
      <!-- <ThemeChange /> -->

      <Avatar />

      <view class="flex justify-center">
        <uv-button class="w-1/3" size="large" type="primary" text="查看详情" @click="toDetail" />
      </view>
      <!-- <Baseinfo /> -->
      <!-- <Contact /> -->
      <!-- <Hobby /> -->

      <!-- <Main>
        <Education />
        <Skill />
        <Experience />
        <Personal />
        <Thanks />
      </Main> -->
    </view>
  </view>
  <!-- <uv-loading-icon text="加载中..." color="#0889cd" text-color="#0889cd"></uv-loading-icon> -->
</template>

<script setup lang="ts">
// import AnchorTool from './components/PageTool/AnchorTool/AnchorTool.vue'
// import DownloadTool from './components/PageTool/Down_Lang/index.vue'
// import ThemeChange from './components/PageTool/ThemeChange/ThemeChange.vue'
// ----------------------------------------------
import Avatar from './views/1avatar.vue'
// import Baseinfo from './views/2baseinfo.vue'
// import Contact from './views/Contact/Contact.vue'
// import Hobby from './views/Hobby/Hobby.vue'
// -------------------------------------------
// import Main from './components/Layouts/Main.vue'
// import Education from './views/Education/Education.vue'
// import Skill from './views/Skill/Skill.vue'
// import Experience from './views/Experience/Experience.vue'
// import Personal from './views/Personal/Personal.vue'
// import Thanks from './views/Thanks/Thanks.vue'

// import { ref } from 'vue'

// const str = ref<string>('hello uni-app')

function toDetail() {
  // uni.showLoading({
  //   title: '加载中',
  // })

  // setTimeout(function () {
  // uni.hideLoading()
  uni.navigateTo({
    url: '/pages/resume-detail/index?id=1&name=uniapp',
  })
  // }, 300)
}
</script>

<style scoped></style>
