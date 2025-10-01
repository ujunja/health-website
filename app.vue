<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// SEO 및 메타 태그 설정
useHead({
  htmlAttrs: {
    lang: 'ko',
  },
  bodyAttrs: {
    class: 'elderly-care-website'
  }
})

// 페이지 전환 시 스크롤 위치 초기화
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>

<style>
/* 전역 스타일은 assets/css/main.css에서 관리 */
</style>