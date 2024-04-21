<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" class="bg-cell" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="xiangmuguanli" />
      </template>
      <template #title>
        <text class="text-base">项目经历</text>
      </template>
    </uv-cell>

    <PrjAdmin />

    <uv-gap height="12rpx" bgColor="#eee" />

    <PrjEdr />

    <uv-gap height="12rpx" bgColor="#eee" />

    <PrjLgscreen />

    <uv-gap height="12rpx" bgColor="#eee" />

    <PrjLiyi />
  </uv-cell-group>
  <uv-gap height="24rpx" bgColor="#eee" />
</template>

<script setup lang="ts">
import PrjAdmin from './prj-admin.vue'
import PrjEdr from './prj-edr.vue'
import PrjLgscreen from './prj-lgscreen.vue'
import PrjLiyi from './prj-liyi.vue'
</script>
