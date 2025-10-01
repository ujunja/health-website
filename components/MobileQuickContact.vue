<!-- components/MobileQuickContact.vue -->
<template>
  <div class="mobile-quick-contact no-print">
    <a :href="`tel:${phone}`" class="quick-contact-btn">
      <span>📞</span>
      <span>전화하기</span>
    </a>
    <button class="quick-contact-btn" @click="scrollToTop">
      <span>⬆</span>
      <span>위로가기</span>
    </button>
    <NuxtLink to="/contact" class="quick-contact-btn">
      <span>💬</span>
      <span>문의하기</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const phone = '010-0000-0000'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.mobile-quick-contact {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 900;
  border-top: 1px solid var(--border-color);
}

@media (min-width: 1024px) {
  .mobile-quick-contact {
    display: none;
  }
}

.quick-contact-btn {
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  transition: var(--transition);
  text-decoration: none;
}

.quick-contact-btn:hover {
  background: var(--bg-light);
}

.quick-contact-btn span:first-child {
  font-size: 20px;
}

.no-print {
  /* 인쇄 시 숨김 */
}
</style>