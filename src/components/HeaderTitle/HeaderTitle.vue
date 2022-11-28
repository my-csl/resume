<template>
  <view class="header-title" :class="{ border: props.border }">
    <view class="circle"></view>
    <text class="title">
      {{ props.title }}
    </text>
  </view>
</template>

<script setup lang="ts">
interface Props {
  title: string
  border: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  border: true
})
</script>

<style scoped lang="scss">
.header-title {
  display: flex;
  align-items: center;

  &.border {
    padding-bottom: 5px;
    border-bottom: 1px solid #f5f5f5;
  }
}
.circle {
  width: 5px;
  height: 5px;
  background-color: $uni-color-primary;
  border-radius: 50%;
  margin-right: 6px;
}
</style>
