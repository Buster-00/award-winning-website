<template>
  <div :class="clipClass">
    <img :src="src" />
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  clipClass: { type: String, required: true },
})
</script>
