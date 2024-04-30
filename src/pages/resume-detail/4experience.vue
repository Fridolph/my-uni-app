<template>
  <uv-cell-group>
    <uv-cell :cellStyle="{ backgroundColor: '#e7f2f9' }" class="bg-cell" :border="false">
      <template v-slot:icon>
        <Iconfont size="20" class="-translate-x-[2px]" name="lvli" />
      </template>
      <template #title>
        <text class="text-base">工作经历</text>
      </template>
    </uv-cell>

    <uv-cell>
      <template #title>
        <view class="font-bold text-sm">成都一蟹科技有限公司</view>
      </template>
      <template #label>
        <view class="text-sm text-9 mt-[8rpx]">2024.3 —— 至今</view>
      </template>
    </uv-cell>
    <uv-cell>
      <template #title>担任角色</template>
      <template #label>
        <view class="text-sm text-3 font-bold mt-[8rpx]">前端主管</view>
      </template>
    </uv-cell>

    <uv-cell>
      <template #title>
        <view class="mb-[8rpx]">岗位职责</view>
      </template>
      <template #label>
        <view class="resume-list">
          <view class="mt-[16rpx]">1. 待完善</view>
          <view class="mt-[16rpx]">2. 待完善</view>
          <view class="mt-[16rpx]">3. 待完善</view>
        </view>
      </template>
    </uv-cell>

    <uv-gap height="12rpx" bgColor="#eee" />

    <uv-cell>
      <template #title>
        <view class="font-bold text-sm">成都网思科平科技有限公司</view>
      </template>
      <template #label>
        <view class="mt-[8rpx] text-sm text-9">2017.7 —— 2024.1</view>
      </template>
    </uv-cell>
    <uv-cell>
      <template #title>担任角色</template>
      <template #label>
        <view class="text-sm text-3 font-bold mt-[8rpx]">前端组长</view>
      </template>
    </uv-cell>

    <uv-cell>
      <template #title>
        <view class="font-bold mb-[16rpx]">岗位职责</view>
      </template>
      <template #label>
        <view class="resume-list">
          <view>1. 负责项目前端架构搭建，确定技术框架，明确团队开发规范；</view>
          <view>2. 整理产品需求文档，编写前端开发文档；</view>
          <view>3. 配合设计人员进行前端开发，高效完成产品与客户的需求与功能；</view>
          <view>4. 与后端工程师共同协商约定数据接口，完成前后台数据交互；</view>
          <view>5. 进行单元测试 和 Code Review，及时反馈测试相关问题；</view>
          <view>6. 作为团队 Leader，参与团队建设与资源共享。</view>
        </view>
      </template>
    </uv-cell>

    <uv-gap height="12rpx" bgColor="#eee" />

    <uv-cell>
      <template #title>
        <view class="font-bold text-sm">四川爱礼科技有限公司</view>
      </template>
      <template #label>
        <view class="text-sm text-9 mt-[8rpx]">2016.1 —— 2017.7</view>
      </template>
    </uv-cell>
    <uv-cell>
      <template #title>担任角色</template>
      <template #label>
        <view class="text-sm text-3 font-bold mt-[8rpx]">web前端开发</view>
      </template>
    </uv-cell>

    <uv-cell>
      <template #title>
        <view class="font-bold mb-[16rpx]">岗位职责</view>
      </template>
      <template #label>
        <view class="resume-list">
          <view>1. 参与公司主项目界面开发和爱礼官网页面开发</view>
          <view>2. 根据提供的设计图进行高精度还原，确保前端页面与设计图的一致性</view>
          <view>3. 将页面各子模块拆分为可复用的组件，提高开发效率和代码可维护性</view>
          <view>4. 针对主流移动端设备进行前端页面的响应式适配</view>
          <view>5. 与后台开发团队紧密协作，完成前端页面与后台接口的对接工作</view>
        </view>
      </template>
    </uv-cell>

  </uv-cell-group>
  <uv-gap height="24rpx" bgColor="#eee" />
</template>
