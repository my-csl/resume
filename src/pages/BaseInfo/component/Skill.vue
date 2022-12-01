<template>
  <view class="skill">
    <HeaderTitle title="技能"></HeaderTitle>
    <view class="tags">
      <Tag v-for="tag in tags" :key="tag" class="tag" :value="tag"></Tag>
    </view>
  </view>
</template>

<script setup lang="ts">
import Tag from '@/components/Tag/Tag.vue'

const tags = [
  'HTML',
  'CSS',
  'JavaScript',
  'VUE',
  'Uni-App',
  'ES6',
  'Webpack',
  'Vite',
  'Scss',
  'Git',
  'npm'
]
</script>

<style scoped lang="scss">
.skill {
  background-color: $uni-bg-color-white;
  padding: $uni-padding-base;
  border-radius: $uni-border-radius-lg;
}
.tags {
  display: flex;
  flex-wrap: wrap;

  .tag {
    margin: 10px 5px 0 0;
  }
}
</style>
