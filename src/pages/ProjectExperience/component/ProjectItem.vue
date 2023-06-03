<template>
  <view class="project-item">
    <ContainerBox custom-style="height: 100%;overflow: auto;">
      <view class="time-name">
        <text>2022.05-至今</text>
        <Tag value="线上睡眠管理"></Tag>
      </view>
      <view class="box description">
        <view class="title">项目描述：</view>
        <view class="content">
          线上睡眠管理小程序是公司自研的CBTI系统的患者端，可以给患者下发方案任务、电子病历、记录睡眠、记录服药、记录运动，和检测仪以及手环绑定；
          患者通过在小程序上完成相应的任务可以有效的给医生提供数据改善睡眠方案
        </view>
      </view>
      <view class="box description">
        <view class="title">技术栈：</view>
        <view class="tags content">
          <Tag value="uni-app" bg-color="#53c21d"></Tag>
          <Tag value="vuex" bg-color="#53c21d"></Tag>
          <Tag value="uview组件库" bg-color="#53c21d"></Tag>
        </view>
      </view>
      <view class="box duty">
        <view class="title">项目负责：</view>
        <view class="content">
          <HeaderTitle :border="false" title="项目整体框架搭建"></HeaderTitle>
          <HeaderTitle :border="false" title="完成整个项目页面和接口对接"></HeaderTitle>
          <HeaderTitle :border="false" title="把控整个项目的进度和交付时间点"></HeaderTitle>
        </view>
      </view>
      <view class="box skill">
        <view class="title">技术要点：</view>
        <view class="content">
          <HeaderTitle :border="false" title="兼容H5"></HeaderTitle>
          <HeaderTitle
            :border="false"
            title="实现核心量表功能的样式自定义，以便作为h5网页提供给第三方使用"
          ></HeaderTitle>
          <HeaderTitle :border="false" title="量表核心逻辑跳题逻辑、继续作答逻辑编写"></HeaderTitle>
        </view>
      </view>
    </ContainerBox>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.project-item {
  font-size: 14px;
  padding: $uni-padding-base 0 $uni-padding-base $uni-padding-base;
  box-sizing: border-box;
  height: calc(100% - $uni-padding-base * 2);
}
.time-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-weight: bold;
}

.box {
  margin-top: 5px;
  .content {
    line-height: 22px;
    font-size: 13px;
    margin: 5px 0 10px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    tag {
      margin-left: 5px;
      font-size: 12px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
