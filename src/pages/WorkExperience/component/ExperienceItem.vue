<template>
  <view class="experience-item">
    <view class="line">
      <text class="date">{{ props.date }}</text>
      <text class="name">{{ props.name }}</text>
    </view>
    <view class="line">
      <text class="skill">{{ props.skill }}</text>
      <text class="job">{{ props.job }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  date: string
  name: string
  skill: string
  job: string
}

const props = withDefaults(defineProps<Props>(), {
  date: '',
  name: '',
  skill: '',
  job: ''
})
</script>

<style scoped lang="scss">
.line {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 25px;
}
</style>
