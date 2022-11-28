<template>
  <view class="base-swiper">
    <swiper :indicator-dots="true" autoplay circular indicator-active-color="#7a7acd">
      <swiper-item v-for="img in imgList" :key="img" class="swiper-item">
        <image :src="img" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import one from '@/static/BaseInfo/swiper/one.jfif'
import two from '@/static/BaseInfo/swiper/two.jfif'
import three from '@/static/BaseInfo/swiper/three.jfif'

const imgList = ref([one, two, three])
</script>

<style scoped lang="scss">
.base-swiper {
  margin-top: 20px;
}
.swiper-item {
  width: 100%;
  height: 100px;
  border-radius: $uni-border-radius-lg;

  image {
    width: 100%;
  }
}
</style>
