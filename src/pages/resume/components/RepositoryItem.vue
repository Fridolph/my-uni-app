<template>
  <view
    class="group overflow-hidden relative ring-1 ring-[var(--border)] dark:ring-[var(--dark-border)] rounded p-2 transition-all hover:ring-[var(--focus-border)] hover:ring-2 dark:hover:ring-[var(--dark-focus-border)]"
  >
    <view class="group flex flex-col">
      <a :href="link" target="_blank">
        <view class="text-base font-bold block text-slate-400">{{ name }}</view>
        <view class="text-slate-300 block text-sm">{{ link }}</view>
      </a>
      <view>{{ description }}</view>
    </view>

    <view
      class="absolute w-full h-full p-2 z-10 left-0 right-0 top-0 bottom-0 rounded bg-[var(--card-bg)] dark:bg-[var(--dark-card-bg)]"
      :class="{
        'hobby-fromBottom': transitionType === TransitionType.fromBottom,
        'hobby-fromTop': transitionType === TransitionType.fromTop,
        'hobby-fromLeft': transitionType === TransitionType.fromLeft,
        'hobby-fromRight': transitionType === TransitionType.fromRight,
        'hobby-fadeIn': transitionType === TransitionType.fadeIn,
      }"
    >
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
enum TransitionType {
  fromBottom,
  fromTop,
  fromLeft,
  fromRight,
  fadeIn,
}

interface IRepositoryItem {
  name: string
  description: string
  link?: string
  transitionType?: TransitionType
}

withDefaults(defineProps<IRepositoryItem>(), {
  transitionType: 0,
})
</script>
