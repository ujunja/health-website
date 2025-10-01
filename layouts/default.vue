<template>
  <div id="app">
    <AppHeader />
    
    <!-- 페이지 컨텐츠 -->
    <main id="main">
      <slot />
    </main>
    
    <AppFooter />
    <MobileQuickContact />
  </div>
</template>

<script setup>
// 로딩 상태 관리 등
</script>