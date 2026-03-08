<template>
  <div class="relative h-dvh w-screen overflow-x-hidden">
    <div
      v-if="loading"
      class="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50"
    >
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>

    <div
      id="video-frame"
      class="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      <div>
        <div class="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <VideoPreview>
            <div
              class="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              @click="handleMiniVdClick"
            >
              <video
                ref="nextVdRef"
                :src="getVideoSrc((currentIndex % totalVideos) + 1)"
                loop
                muted
                id="current-video"
                class="size-64 origin-center scale-150 object-cover object-center"
                @loadeddata="handleVideoLoad"
              />
            </div>
          </VideoPreview>
        </div>

        <video
          ref="nextVdRef"
          :src="getVideoSrc(currentIndex)"
          loop
          muted
          id="next-video"
          class="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          @loadeddata="handleVideoLoad"
        />
        <video
          :src="getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)"
          autoplay
          loop
          muted
          class="absolute left-0 top-0 size-full object-cover object-center"
          @loadeddata="handleVideoLoad"
        />
      </div>

      <h1 class="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        G<b>A</b>MING
      </h1>

      <div class="absolute left-0 top-0 z-40 size-full">
        <div class="mt-24 px-5 sm:px-10">
          <h1 class="special-font hero-heading text-blue-100">
            redefi<b>n</b>e
          </h1>

          <p class="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>

          <Button
            id="watch-trailer"
            title="Watch trailer"
            container-class="bg-yellow-300 flex-center gap-1"
          >
            <template #left-icon>
              <Icon icon="ti:location-arrow" />
            </template>
          </Button>
        </div>
      </div>
    </div>

    <h1 class="special-font hero-heading absolute bottom-5 right-5 text-black">
      G<b>A</b>MING
    </h1>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Icon } from '@iconify/vue'
import Button from './Button.vue'
import VideoPreview from './VideoPreview.vue'

gsap.registerPlugin(ScrollTrigger)

const currentIndex = ref(1)
const hasClicked = ref(false)
const loading = ref(true)
const loadedVideos = ref(0)
const totalVideos = 4
const nextVdRef = ref(null)

const getVideoSrc = (index) => `/videos/hero-${index}.mp4`

const handleVideoLoad = () => {
  loadedVideos.value++
}

const handleMiniVdClick = () => {
  hasClicked.value = true
  currentIndex.value = (currentIndex.value % totalVideos) + 1
}

watch(loadedVideos, (val) => {
  if (val === totalVideos - 1) {
    loading.value = false
  }
})

watch([hasClicked, currentIndex], () => {
  if (!hasClicked.value) return

  gsap.set('#next-video', { visibility: 'visible' })
  gsap.to('#next-video', {
    transformOrigin: 'center center',
    scale: 1,
    width: '100%',
    height: '100%',
    duration: 1,
    ease: 'power1.inOut',
    onStart: () => nextVdRef.value?.play(),
  })
  gsap.from('#current-video', {
    transformOrigin: 'center center',
    scale: 0,
    duration: 1.5,
    ease: 'power1.inOut',
  })
})

onMounted(() => {
  gsap.set('#video-frame', {
    clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
    borderRadius: '0% 0% 40% 10%',
  })
  gsap.from('#video-frame', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    borderRadius: '0% 0% 0% 0%',
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '#video-frame',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    },
  })
})
</script>
