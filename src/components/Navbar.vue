<template>
  <div
    ref="navContainerRef"
    class="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    :class="{ 'floating-nav': currentScrollY > 0 }"
  >
    <header class="absolute top-1/2 w-full -translate-y-1/2">
      <nav class="flex size-full items-center justify-between p-4">
        <div class="flex items-center gap-7">
          <button
            id="home-button"
            class="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-colors hover:opacity-90 md:flex"
            aria-label="家"
            @click="scrollToTop"
          >
            <Icon icon="lucide:home" class="h-5 w-5" />
          </button>
        </div>

        <div class="flex h-full items-center">
          <div class="hidden md:block">
            <a
              v-for="(item, index) in navItems"
              :key="index"
              :href="`#${item.toLowerCase()}`"
              class="nav-hover-btn"
            >
              {{ item }}
            </a>
          </div>

          <button class="ml-10 flex items-center space-x-0.5" @click="toggleAudioIndicator">
            <audio
              ref="audioElementRef"
              class="hidden"
              src="/audio/loop.mp3"
              loop
            />
            <div
              v-for="bar in 4"
              :key="bar"
              class="indicator-line"
              :class="{ active: isIndicatorActive }"
              :style="{ animationDelay: `${bar * 0.1}s` }"
            />
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useWindowScroll } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const navItems = ['Prologue', 'About', 'Contact']

const isAudioPlaying = ref(false)
const isIndicatorActive = ref(false)
const audioElementRef = ref(null)
const navContainerRef = ref(null)

const { y: currentScrollY } = useWindowScroll()
const isNavVisible = ref(true)
const lastScrollY = ref(0)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleAudioIndicator = () => {
  isAudioPlaying.value = !isAudioPlaying.value
  isIndicatorActive.value = !isIndicatorActive.value
}

watch(isAudioPlaying, (val) => {
  if (!audioElementRef.value) return
  val ? audioElementRef.value.play() : audioElementRef.value.pause()
})

watch(currentScrollY, (y, oldY) => {
  if (y === 0) {
    isNavVisible.value = true
  } else if (y > lastScrollY.value) {
    isNavVisible.value = false
  } else if (y < lastScrollY.value) {
    isNavVisible.value = true
  }
  lastScrollY.value = y
}, { immediate: true })

watch(isNavVisible, (val) => {
  if (navContainerRef.value) {
    gsap.to(navContainerRef.value, {
      y: val ? 0 : -100,
      opacity: val ? 1 : 0,
      duration: 0.2,
    })
  }
})
</script>
