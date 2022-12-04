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
          @click="onClick(item)"
        ></ExperienceItem>
      </view>
    </ContainerBox>
  </view>
  <ResumePopup v-model:show="show" mode="bottom">
    <view class="work-detail">
      <view class="title">{{ nowItem?.name }}</view>
      <view v-for="value in nowItem?.duty" :key="value" class="line">
        <text class="circle"></text>
        <text class="text">{{ value }}</text>
      </view>
    </view>
  </ResumePopup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExperienceItem from './component/ExperienceItem.vue'

const show = ref(false)
const list = [
  {
    date: '2022.04-至今',
    name: '柏斯速眠科技有限公司',
    skill: '小程序、h5',
    job: '小程序、h5组长',
    duty: [
      '参与项目需求分析、参与研讨项目可实行方案',
      '搭建适合团队的uni-app框架',
      '把握小程序项目的进度，保证项目及时交付，合理分配每个组员的模块',
      '协助并快速定位及解决开发、运行过程中的技术问题、交互问题以及用户体验问题',
      '能按计划有效且高质量的完成分配的任务'
    ]
  },
  {
    date: '2020.06-2022.03',
    name: '南昌耀启科技有限公司',
    skill: 'h5、app、后台管理系统',
    job: '前端开发',
    duty: [
      '参与项目需求分析、参与研讨项目可实行方案',
      '配合后端开发同事实现产品交互功能',
      '实现电商系统页面布局，优化前端页面效果',
      '协助并快速定位及解决开发、运行过程中的技术问题、交互问题以及用户体验问题',
      '能按计划有效且高质量的完成分配的任务',
      '基于产品经理的需求，完成产品 Web 前端的开发工作，包括界面和交互功能的实现'
    ]
  }
]

type Item = typeof list[0]

const nowItem = ref<Item | null>(null)

const onClick = (item: Item) => {
  show.value = true
  nowItem.value = item
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

.work-detail {
  padding: $uni-padding-base;

  .title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .line {
    color: rgb(82, 82, 82);
    line-height: 25px;
    margin-top: 5px;
    font-size: 14px;
    .circle {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: rgb(66, 66, 66);
      margin-right: 5px;
      vertical-align: middle;
    }

    .text {
      word-break: break-all;
    }
  }
}
</style>
