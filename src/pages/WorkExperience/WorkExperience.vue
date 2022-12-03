<template>
  <view class="work-experience">
    <ContainerBox>
      <HeaderTitle title="工作经历"></HeaderTitle>
      <view v-for="item in list" :key="item.name" class="item">
        <ExperienceItem
          :date="item.date"
          :name="item.name"
          :skill="item.skill"
          :job="item.job"
          @click="onClick($event)"
        ></ExperienceItem>
      </view>
    </ContainerBox>
  </view>
</template>

<script setup lang="ts">
import ExperienceItem from './component/ExperienceItem.vue'

const list = [
  {
    date: '2022.04-至今',
    name: '柏斯速眠科技有限公司',
    skill: '小程序、h5',
    job: '小程序、h5组长'
  },
  {
    date: '2020.06-2022.03',
    name: '南昌耀启科技有限公司',
    skill: 'h5、app、后台管理系统',
    job: '前端开发'
  }
]

const onClick = (e: any) => {
  console.log(e)
}
</script>

<style scoped lang="scss">
.work-experience {
  padding: $uni-padding-base;

  .item {
    margin-top: 15px;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
}
</style>
