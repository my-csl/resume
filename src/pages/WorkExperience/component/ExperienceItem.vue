<template>
  <view class="experience-item" @click="emit('click')">
    <view class="line">
      <text class="date">{{ props.date }}</text>
      <text class="name">{{ props.name }}</text>
    </view>
    <view class="line">
      <text class="skill">{{ props.skill }}</text>
      <text class="job">{{ props.job }}</text>
      <ResumeIcon name="jiantouyou"></ResumeIcon>
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

const emit = defineEmits<{
  (type: 'click'): void
}>()
</script>

<style scoped lang="scss">
.line {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 25px;

  .job {
    flex: 1;
    text-align: right;
    margin-right: 4px;
  }
}
</style>
