<template>
  <ContainerBox>
    <view class="info">
      <image class="avatar" src="/static/avatar.jfif"></image>
      <view class="content">
        <view class="name-year">
          <text class="name"> 陈石林 </text>
          <Tag value="两年前端开发经验" bg-color="#3c9cff"></Tag>
        </view>
        <view class="gender-age">
          <text>男</text>
          <text class="separator"> / </text>
          <text>{{ getAge() }}岁</text>
          <text class="separator"> / </text>
          <!-- <text>全日制专科</text> -->
        </view>
      </view>
    </view>

    <BaseSwiper></BaseSwiper>
  </ContainerBox>
</template>

<script setup lang="ts">
import BaseSwiper from './BaseSwiper.vue'

const getAge = (birthday: Date | string = '1998-08-12') => {
  const nowYear = new Date().getFullYear()
  let year = 0
  if (typeof birthday === 'string') {
    const reg = /\d{4}-\d{2}-\d{2}/
    if (reg.test(birthday)) {
      year = new Date(birthday).getFullYear()
    } else {
      throw new Error('出生年月格式不对，格式应该为：yyyy-MM-dd')
    }
  } else {
    year = birthday.getFullYear()
  }
  return nowYear - year
}
</script>

<style scoped lang="scss">
.info {
  display: flex;
  align-items: center;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: $uni-border-radius-lg;
    margin-right: 10px;
  }

  .name-year {
    display: flex;
    align-items: center;
    font-size: 14px;

    .name {
      margin-right: 5px;
    }
  }

  .gender-age {
    font-size: 12px;
    color: $uni-text-color-grey;
    margin-top: 7px;

    .separator {
      margin: 0 4px;
    }
  }
}
</style>
