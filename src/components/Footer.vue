<template>
  <footer class="w-screen bg-[#5542ff] py-4 text-black">
    <div class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
      <p class="text-center text-sm font-light md:text-left">
        ©Nova 2024. All rights reserved
      </p>

      <div class="flex justify-center gap-4 md:justify-start">
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black transition-colors duration-500 ease-in-out hover:text-white"
        >
          <Icon :icon="link.icon" />
        </a>
      </div>

      <a
        href="#privacy-policy"
        class="text-center text-sm font-light hover:underline md:text-right"
      >
        Privacy Policy
      </a>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const socialLinks = [
  { href: 'https://discord.com', icon: 'fa-brands:discord' },
  { href: 'https://twitter.com', icon: 'fa-brands:twitter' },
  { href: 'https://youtube.com', icon: 'fa-brands:youtube' },
  { href: 'https://medium.com', icon: 'fa-brands:medium' },
]
</script>
