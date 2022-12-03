<template>
  <text :class="classList" :style="style"></text>
</template>

<script setup lang="ts">
type Props = {
  name: string
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '12',
  color: '#000'
})

const classList = ['resume', `resume-${props.name}`]
const style = {
  color: props.color,
  fontSize: props.size + 'px'
}
</script>

<style></style>
