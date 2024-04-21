<template>
  <text
    :class="`iconfont icon-${name} inline-block align-middle`"
    :style="`font-size: ${size}px; color: ${color}`" />
</template>

<script setup lang="ts">
interface IconProps {
  name: string
  color?: string
  size?: number | string
}

withDefaults(defineProps<IconProps>(), {
  size: 14,
  color: 'currentColor'
})
</script>

<style scoped>
.iconfont {
  font-family: 'iconfont' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
