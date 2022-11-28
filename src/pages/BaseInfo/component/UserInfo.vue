<template>
  <view class="user-info">
    <view class="info">
      <image class="avatar" src="/static/avatar.jfif"></image>
      <view class="content">
        <view class="name-year">
          <text class="name"> 陈石林 </text>
          <Tag value="两年前端开发经验" bg-color="#3c9cff"></Tag>
        </view>
        <view class="gender-age">
          <text>男</text>
          <text class="separator"> / </text>
          <text>24岁</text>
          <text class="separator"> / </text>
          <!-- <text>全日制专科</text> -->
        </view>
      </view>
    </view>

    <BaseSwiper></BaseSwiper>
  </view>
</template>

<script setup lang="ts">
import BaseSwiper from './BaseSwiper.vue'
</script>

<style scoped lang="scss">
.user-info {
  background-color: $uni-bg-color-white;
  border-radius: $uni-border-radius-lg;
  padding: $uni-padding-base;
  box-shadow: 0 0 15px $uni-bg-color;
}

.info {
  display: flex;
  align-items: center;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: $uni-border-radius-lg;
    margin-right: 10px;
  }

  .name-year {
    display: flex;
    align-items: center;
    font-size: 14px;

    .name {
      margin-right: 5px;
    }
  }

  .gender-age {
    font-size: 12px;
    color: $uni-text-color-grey;
    margin-top: 7px;

    .separator {
      margin: 0 4px;
    }
  }
}
</style>
