<template>
  <view class="flex mb-[8rpx] sm:flex-row justify-between" :class="{ 'flex-col': isWrap }">
    <template v-if="type === 'labelText'">
      <view
        class="label min-w-[160rpx] mr-[24rpx]"
        :class="[labelBold ? 'font-bold' : '', isTitle ? 'text-lg' : 'text-sm']"
        :style="`${labelWidth ? `min-width:${labelWidth}px` : ''}`"
      >
        {{ label }}
      </view>
      <view class="flex-1 text-left min-w-[360rpx]" :class="{ 'sm:text-right': isWrap }">
        <text v-if="link" :href="text" class="text-[var(--link)]" target="_blank">{{ text }}</text>
        <text v-else>
          {{ text }}
        </text>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
interface IRowContent {
  type?: string
  isWrap?: boolean
  label: string
  text: string
  link?: boolean
  align?: string
  labelWidth?: number
  labelBold?: boolean
  isTitle?: boolean
  textWidth?: number
}

withDefaults(defineProps<IRowContent>(), {
  type: 'labelText',
  link: false,
  align: 'left',
  labelBold: false,
  isWrap: false,
  isTitle: false,
  labelWidth: 100,
})
</script>
