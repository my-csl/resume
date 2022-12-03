<template>
  <ContainerBox>
    <HeaderTitle title="教育经历" :border="true"></HeaderTitle>
    <view class="info">
      <text>2017.06-2020.06</text>
      <text class="school">浙江工贸职业技术学院</text>
      <text class="bold">大专</text>
    </view>
  </ContainerBox>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.info {
  display: flex;
  font-size: 14px;
  margin-top: 10px;
  color: $uni-text-color-grey;

  .school {
    flex: 1;
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }
}
</style>
