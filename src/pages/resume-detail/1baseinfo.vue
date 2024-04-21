<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="mingpian" />
      </template>
      <template #title>
        <text class="text-base">个人信息</text>
      </template>
    </uv-cell>
    <uv-cell title="姓名" value="付寅生"></uv-cell>
    <uv-cell title="工作年限" value="8年"></uv-cell>
    <uv-cell title="学历" value="全日制本科"></uv-cell>
  </uv-cell-group>

  <uv-gap height="24rpx" bgColor="#eee" />

  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="jiaoyu" />
      </template>
      <template #title>
        <text class="text-base text-3">教育经历</text>
      </template>
    </uv-cell>

    <uv-cell title="毕业院校" value="四川大学锦江学院"></uv-cell>
    <uv-cell title="专业" value="通信工程"></uv-cell>
    <uv-cell title="就读时间" value="2012.9 —— 2016.7"></uv-cell>

  </uv-cell-group>
</template>

<script setup lang="ts"></script>

<style scoped></style>
