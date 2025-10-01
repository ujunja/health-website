<template>
  <article class="service-card">
    <div class="service-icon" :aria-hidden="true">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* 스타일은 main.css에 정의되어 있음 */
</style>
