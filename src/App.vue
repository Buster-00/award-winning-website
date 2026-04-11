<template>
  <div class="relative min-h-screen w-screen overflow-x-hidden">
    <NavBar />
    <router-view class="size-full" />
    <Footer />
  </div>
</template>

<script setup>
import About from './components/About.vue'
import Hero from './components/Hero.vue'
import NavBar from './components/Navbar.vue'
import Features from './components/Features.vue'
import Story from './components/Story.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
