<template>
  <div ref="containerRef" :class="['animated-title', containerClass]">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
    >
      <span
        v-for="(word, idx) in line.split(' ')"
        :key="idx"
        class="animated-word"
        v-html="word"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  title: { type: String, required: true },
  containerClass: String,
})

const containerRef = ref(null)
const lines = computed(() => props.title.split('<br />'))

let ctx
onMounted(() => {
  ctx = gsap.context(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: '100 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reverse',
      },
    })

    titleAnimation.to(
      '.animated-word',
      {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      },
      0
    )
  }, containerRef.value)
})

onUnmounted(() => ctx?.revert())
</script>
