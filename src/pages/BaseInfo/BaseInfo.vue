<template>
  <view class="base-info">
    <UserInfo></UserInfo>
  </view>
</template>

<script setup lang="ts">
import UserInfo from './component/UserInfo.vue'
</script>

<style lang="scss">
page {
  background-color: $uni-bg-color;
}

.base-info {
  padding: $uni-padding-base;
}
</style>
