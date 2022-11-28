<template>
  <view class="educational-experience">
    <HeaderTitle title="教育经历" :border="true"></HeaderTitle>
    <view class="info">
      <text>2017.06-2020.06</text>
      <text class="school">浙江工贸职业技术学院</text>
      <text class="bold">大专</text>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.educational-experience {
  border-radius: $uni-border-radius-lg;
  background-color: $uni-bg-color-white;
  padding: $uni-padding-base;
  box-shadow: 0 0 15px $uni-bg-color;

  .info {
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    color: $uni-text-color-grey;

    .school {
      flex: 1;
      text-align: center;
    }

    .bold {
      font-weight: bold;
    }
  }
}
</style>
