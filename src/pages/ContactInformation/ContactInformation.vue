<template>
  <view class="contact-infomation">
    <ContainerBox>
      <HeaderTitle title="联系方式"></HeaderTitle>
      <view v-for="item in contactList" :key="item.value" class="cell">
        <image class="icon" :src="item.img" />
        <text class="value">{{ item.value }}</text>
        <view class="copy-btn" @click="copy(item.value)">复制</view>
      </view>
    </ContainerBox>
  </view>
</template>

<script setup lang="ts">
const contactList = [
  { img: '/static/ContactInformation/phone.png', value: '15179773914' },
  { img: '/static/ContactInformation/email.png', value: '1826515410@qq.com' },
  { img: '/static/ContactInformation/wechat.png', value: '15179773914' },
  { img: '/static/ContactInformation/qq.png', value: '1826515410' }
]

const copy = (value: string) => {
  uni.setClipboardData({
    data: value
  })
}
</script>

<style lang="scss" scoped>
.contact-infomation {
  padding: $uni-padding-base;
}
.cell {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;

  .icon {
    width: 22px;
    height: 22px;
  }

  .value {
    flex: 1;
    margin-left: 10px;
  }

  .copy-btn {
    padding: 4px 12px;
    background-color: $uni-color-primary;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
  }
}
</style>
