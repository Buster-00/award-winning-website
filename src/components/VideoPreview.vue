<template>
  <section
    ref="sectionRef"
    class="absolute z-50 size-full overflow-hidden rounded-lg"
    style="perspective: 500px"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @mousemove="handleMouseMove"
  >
    <div
      ref="contentRef"
      class="origin-center rounded-lg"
      style="transform-style: preserve-3d"
    >
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'

const isHovering = ref(false)
const sectionRef = ref(null)
const contentRef = ref(null)

const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
  const rect = currentTarget.getBoundingClientRect()
  const xOffset = clientX - (rect.left + rect.width / 2)
  const yOffset = clientY - (rect.top + rect.height / 2)

  if (isHovering.value) {
    gsap.to(sectionRef.value, {
      x: xOffset,
      y: yOffset,
      rotationY: xOffset / 2,
      rotationX: -yOffset / 2,
      transformPerspective: 500,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to(contentRef.value, {
      x: -xOffset,
      y: -yOffset,
      duration: 1,
      ease: 'power1.out',
    })
  }
}

watch(isHovering, (val) => {
  if (!val) {
    gsap.to(sectionRef.value, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: 'power1.out',
    })

    gsap.to(contentRef.value, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power1.out',
    })
  }
})
</script>
