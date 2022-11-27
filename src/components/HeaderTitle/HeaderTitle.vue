<template>
  <view class="header-title">
    <view class="circle" />
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

<style scoped></style>
