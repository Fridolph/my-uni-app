<template>
  <view
    class="w-full min-h-screen md:flex md:justify-center md:align-middle p-0 bg-[var(--page-bg)] md:py-[5vh] md:px-[5vw] dark:bg-[var(--dark-page-bg)] dark-transition"
  >
    <view
      class="relative sm:w-full md:w-full max-w-[1600px] flex flex-col md:flex-row justify-center align-middle text-color shadow-inner sm:shadow-2xl dark:shadow-neutral-700"
    >
      <!-- <AnchorTool /> -->
      <!-- <DownloadTool /> -->
      <!-- <ThemeChange /> -->

      <Aside>
        <Avatar />
        <!-- <view class="scrollbar overflow-x-hidden overflow-y-auto pr-[12px] hover:pr-[6px]">
          <Baseinfo />
          <Contact />
          <Hobby />
        </view> -->
      </Aside>

      <!-- <Main>
        <Education />
        <Skill />
        <Experience />
        <Personal />
        <Thanks />
      </Main> -->
    </view>
  </view>
</template>

<script setup lang="ts">
// import AnchorTool from './components/PageTool/AnchorTool/AnchorTool.vue'
// import DownloadTool from './components/PageTool/Down_Lang/index.vue'
// import ThemeChange from './components/PageTool/ThemeChange/ThemeChange.vue'
// ----------------------------------------------
import Avatar from './views/1avatar.vue'
// import Aside from './components/Layouts/Aside.vue'
// import Baseinfo from './views/Baseinfo/Baseinfo.vue'
// import Contact from './views/Contact/Contact.vue'
// import Hobby from './views/Hobby/Hobby.vue'
// -------------------------------------------
// import Main from './components/Layouts/Main.vue'
// import Education from './views/Education/Education.vue'
// import Skill from './views/Skill/Skill.vue'
// import Experience from './views/Experience/Experience.vue'
// import Personal from './views/Personal/Personal.vue'
// import Thanks from './views/Thanks/Thanks.vue'

import { ref } from 'vue'

const str = ref<string>('hello uni-app')
</script>

<style scoped></style>
