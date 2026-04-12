<template>
  <div id="contact" class="my-20 min-h-96 w-screen px-10">
    <div class="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
      <div class="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
        <ImageClipBox src="/img/kfc.png" clip-class="contact-clip-path-1" />
        <ImageClipBox
          src="/img/nhk.jpg"
          clip-class="contact-clip-path-2 ©lg:translate-y-40 translate-y-60"
        />
      </div>

      <div class="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        <ImageClipBox src="/img/johnwalker.png" clip-class="absolute md:scale-125" />
      </div>

      <div class="flex flex-col items-center text-center">
        <p class="mb-10 font-general text-[10px] uppercase">
          让我们在海边相见吧
        </p>

        <AnimatedTitle
          title="让我们<br/>在没有黑暗的</br>地方</br>相见"
          container-class="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
        />

        <Button title="再见" container-class="mt-10 cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
import Button from './Button.vue'
import ImageClipBox from './ImageClipBox.vue'
</script>
