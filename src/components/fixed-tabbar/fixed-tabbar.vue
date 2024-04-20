<template>
  <uv-tabbar :value="currentTab" @change="switchTabPage">
    <uv-tabbar-item
      v-for="item in tabList"
      :name="item.name"
      :text="item.text"
      :icon="item.icon"
    ></uv-tabbar-item>
  </uv-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabbarEnum } from './types'
import type { ITabItem } from './types'

const tabList = ref<ITabItem[]>([
  {
    name: TabbarEnum.home,
    text: '主页',
    icon: 'home',
  },
  {
    name: TabbarEnum.uv,
    text: 'UVui',
    icon: 'home',
  },
  {
    name: TabbarEnum.demo,
    text: 'Demo',
    icon: 'home',
  },
  {
    name: TabbarEnum.hobby,
    text: '兴趣',
    icon: 'heart',
  },
  {
    name: TabbarEnum.resume,
    text: '简历',
    icon: 'chat',
  },
])

const currentTab = ref<TabbarEnum>(TabbarEnum.home)
function switchTabPage(name: TabbarEnum) {
  currentTab.value = name
  uni.switchTab({
    url: `/pages/${name}/${name}`,
  })
}
</script>

<style scoped></style>
