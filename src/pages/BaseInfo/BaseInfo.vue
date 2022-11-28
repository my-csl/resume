<template>
  <view class="base-info">
    <UserInfo></UserInfo>
    <view class="box">
      <EducationalExperience></EducationalExperience>
    </view>
  </view>
</template>

<script setup lang="ts">
import UserInfo from './component/UserInfo.vue'
import EducationalExperience from './component/EducationalExperience.vue'
</script>

<style lang="scss">
page {
  background-color: $uni-bg-color;
}

.base-info {
  padding: $uni-padding-base;
}

.box {
  margin-top: 16px;
}
</style>
