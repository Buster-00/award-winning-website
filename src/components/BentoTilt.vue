<template>
  <div
    ref="itemRef"
    :style="{ transform: transformStyle }"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const transformStyle = ref('')
const itemRef = ref(null)

const handleMouseMove = (event) => {
  if (!itemRef.value) return

  const { left, top, width, height } = itemRef.value.getBoundingClientRect()
  const relativeX = (event.clientX - left) / width
  const relativeY = (event.clientY - top) / height
  const tiltX = (relativeY - 0.5) * 5
  const tiltY = (relativeX - 0.5) * -5
  transformStyle.value = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
}

const handleMouseLeave = () => {
  transformStyle.value = ''
}
</script>
