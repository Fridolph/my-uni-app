<template>
  <view class="w-full flex justify-center items-center mx-auto mt-5 flex-col">
    <uv-image
      class="ring-2"
      src="/static/resume/avatar.jpg"
      width="300rpx"
      height="300rpx"
      shape="circle"
      :lazy-load="true"
    >
      <template v-slot:loading>
        <uv-loading-icon color="gray"></uv-loading-icon>
      </template>
    </uv-image>
  </view>
  <view class="my-[40rpx] text-center">
    <view
      class="py-[6rpx] font-bold transition-bg duration-700"
    >
      <text>热爱Coding，生命不息，折腾不止</text>
    </view>
    <view
      class="py-[6rpx] font-bold bg-gradient-to-r transition-all duration-700 from-sky-200 to-violet-300 cursor-progress"
    >
      <text>羽毛球爱好者，快乐挥拍，球场飞翔</text>
    </view>
  </view>
</template>
