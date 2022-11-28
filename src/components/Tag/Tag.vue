<template>
  <view class="tag">{{ props.value }}</view>
</template>

<script setup lang="ts">
interface Props {
  value: string
  color?: string
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  color: '#fff',
  bgColor: '#7a7acd'
})
</script>

<style scoped lang="scss">
.tag {
  border-radius: $uni-border-radius-base;
  background-color: v-bind(bgColor);
  color: v-bind(color);
  padding: 3px 5px;
  font-size: 12px;
  box-sizing: border-box;
}
</style>
