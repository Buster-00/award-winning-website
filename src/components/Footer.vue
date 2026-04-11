<template>
  <footer class="w-screen bg-white py-4 text-black">
    <div class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
      <p class="text-center text-sm font-light md:text-left">
        ©QinGen 2026. All rights reserved
      </p>

      <a
        href="#privacy-policy"
        class="text-center text-sm font-light hover:underline md:text-right"
      >
        
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
