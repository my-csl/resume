<template>
  <view class="container-box" :style="props.customStyle">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  customStyle: {
    type: [Object, String],
    default: ''
  }
})
</script>

<style scoped lang="scss">
.container-box {
  background-color: $uni-bg-color-white;
  padding: $uni-padding-base;
  border-radius: $uni-border-radius-lg;
  box-shadow: 0 0 15px $uni-bg-color;
}
</style>
