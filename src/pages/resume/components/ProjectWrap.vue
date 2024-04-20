<template>
  <view class="flex flex-col mb-2">
    <TitleDesc :title="title" :show-icon="showIcon" :icon="icon" :description="description" />

    <template v-if="showLib">
      <view class="h-[60px] sm:h-auto flex flex-wrap my-1 mb-3 px-3">
        <button class="my-btn primary">{{ btnLabel }}</button>
        <slot name="lib"></slot>
      </view>
    </template>

    <slot></slot>
    <slot name="extra"></slot>
  </view>
</template>

<script setup lang="ts">
import TitleDesc from '../TitleDesc/TitleDesc.vue'

interface IProjectWrap {
  title: string
  description?: string
  icon?: string
  showIcon?: boolean
  showLib?: boolean
  btnLabel?: string
}

withDefaults(defineProps<IProjectWrap>(), {
  showIcon: true,
  icon: 'xiangmu',
  showLib: true,
  btnLabel: '技术栈',
})
</script>

<style scoped></style>
