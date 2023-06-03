<template>
  <page-meta page-style="overflow: hidden;"></page-meta>
  <view class="project-experience">
    <swiper class="swiper" next-margin="32px" previous-margin="16px" @change="swiperChange">
      <swiper-item>
        <view class="box">
          <ProjectItem></ProjectItem>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="box">
          <ProjectItem></ProjectItem>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="box">
          <ProjectItem></ProjectItem>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ProjectItem from './component/ProjectItem.vue'

const current = ref(0)

const swiperChange = (event: any) => {
  current.value = event.detail.current
}
</script>

<style scoped lang="scss">
.project-experience {
  height: 100vh;

  .swiper,
  .box {
    height: 100%;
  }
}
</style>
