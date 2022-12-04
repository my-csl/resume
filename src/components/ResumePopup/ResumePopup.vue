<template>
  <view v-if="_show" class="resume-popup">
    <view v-if="props.overlay" class="mask" @click="maskClick"></view>
    <view class="containr" :style="style" :class="classList">
      <slot></slot>
      <view v-if="props.closeable" class="close" @click="close">
        <ResumeIcon name="guanbi2" size="20" color="#ccc"></ResumeIcon>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue'

interface Prpos {
  show: boolean
  mode?: 'center' | 'top' | 'bottom' | 'left' | 'right'
  round?: string | number
  overlay?: boolean
  closeable?: boolean
  bgColor?: string
  // 点击遮罩是否关闭弹窗
  closeOnClickOverlay?: boolean
  // 是否留出底部安全距离
  safeAreaInsetBottom?: boolean
}

const emit = defineEmits(['update:show'])
const props = withDefaults(defineProps<Prpos>(), {
  mode: 'bottom',
  round: 10,
  overlay: true,
  bgColor: '#fff',
  closeable: true,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: false
})

const borderRadius = computed(() => {
  let value = '0'
  switch (props.mode) {
    case 'top':
      value = `0 0 ${props.round}px ${props.round}px`
      break
    case 'right':
      value = `${props.round}px 0 0 ${props.round}px`
      break
    case 'bottom':
      value = `${props.round}px ${props.round}px 0 0`
      break
    case 'left':
      value = `0 ${props.round}px ${props.round}px 0`
      break
    case 'center':
      value = `${props.round}px`
      break
  }
  return value
})
const style = computed(() => {
  let styles = `border-radius: ${borderRadius.value};background-color: ${props.bgColor};`
  if (props.safeAreaInsetBottom) {
    styles += `padding-bottom: constant(safe-area-inset-bottom);padding-bottom: env(safe-area-inset-bottom);`
  }
  return styles
})

const classList = [props.mode]
const animateList = reactive({
  center: ['zoomIn', 'zoomOut'],
  top: ['fadeInDown', 'fadeOutUp'],
  right: ['fadeInRight', 'fadeOutRight'],
  bottom: ['fadeInUp', 'fadeOutDown'],
  left: ['fadeInLeft', 'fadeOutLeft']
})
const animateName = ref('fadeInDown')
const maskAnimateName = ref('fadeIn')
const _show = ref(false)

const close = () => {
  emit('update:show', false)
}
const maskClick = () => {
  if (props.closeOnClickOverlay) {
    emit('update:show', false)
  }
}

watchEffect(() => {
  const animate = animateList[props.mode]
  animateName.value = props.show ? animate[0] : animate[1]
  maskAnimateName.value = props.show ? 'fadeIn' : 'fadeOut'
  if (props.show) {
    _show.value = true
  } else {
    setTimeout(() => {
      _show.value = false
    }, 500)
  }
})
</script>

<style scoped lang="scss">
.mask {
  background-color: rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  z-index: 999;
  inset: 0;
  animation: v-bind(maskAnimateName);
  animation-duration: 0.5s;
}

.containr {
  background-color: $uni-bg-color-white;
  position: fixed;
  z-index: 9999;
  animation: v-bind(animateName);
  animation-duration: 0.5s;

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.bottom {
    width: 100%;
    bottom: 0;
  }

  &.top {
    width: 100%;
    top: 0;
  }

  &.right {
    height: 100%;
    top: 0;
    right: 0;
  }

  &.left {
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
