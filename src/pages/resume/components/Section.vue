<template>
  <view class="w-full h-fit px-4 mb-5">
    <text v-if="anchor" :id="anchor" class="my-section-title hover:text-[var(--text)]">
      <Iconfont :name="icon" :size="30" />
      <text class="align-middle font-bold ml-1 text-lg">{{ title }}</text>
    </text>
    <view v-else :href="`#${anchor}`" class="my-section-title">
      <Iconfont :name="icon" :size="30" />
      <text class="align-middle font-bold ml-1 text-lg">{{ title }}</text>
    </view>
    <slot name="default"></slot>
  </view>
</template>

<script setup lang="ts">
import Iconfont from './Iconfont.vue'

interface ISection {
  title: string
  icon: string
  isTitle?: boolean
  anchor?: string
}

defineProps<ISection>()
</script>
