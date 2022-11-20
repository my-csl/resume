<template>
  <view class="content">
    <text>{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello123')
</script>

<style scoped lang="scss">
.content {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
