<template>
  <ContainerBox>
    <HeaderTitle title="基本信息"></HeaderTitle>
    <view class="detail">
      <view v-for="(item, index) in info" :key="index" class="cell">
        <text class="text">{{ item.text }}</text>
        <text class="value">{{ item.value }}</text>
      </view>
    </view>
  </ContainerBox>
</template>

<script setup lang="ts">
const info = [
  { text: '学历', value: '大专' },
  { text: '地址', value: '深圳' },
  { text: '工作年限', value: '2年以上' },
  { text: '籍贯', value: '广东' },
  { text: '求职岗位', value: '前端开发工程师' }
]
</script>

<style scoped lang="scss">
.cell {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  color: $uni-text-color-grey;
}
</style>
