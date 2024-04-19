<template>
  <view>
    new uni page
    <view>{{ str }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const str = ref<string>('hello uni-app')
</script>

<style scoped></style>
