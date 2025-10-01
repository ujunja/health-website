<template>
  <header id="header" :class="{ scrolled: isScrolled }">
    <div class="header-top">
      <div class="container">
        <div class="header-info">
          <div class="header-contact">
            <span>📞 전화: 010-0000-0000</span>
            <span>⏰ 상담시간: 평일 09:00-18:00</span>
          </div>
          <div>
            <span>📧 care@happycare.kr</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <nav role="navigation">
          <NuxtLink to="/" class="logo" aria-label="김해 힐링 재가노인복지센터 홈">
            🏠 <span class="logo-text">
              <span class="logo-full">김해 힐링 재가노인복지센터</span>
              <span class="logo-short">행복재가요양</span>
            </span>
          </NuxtLink>
          
          <ul class="nav-menu" role="menu">
            <li role="menuitem"><NuxtLink to="/" :class="{ active: route.path === '/' }">홈</NuxtLink></li>
            <li role="menuitem"><NuxtLink to="/about" :class="{ active: route.path === '/about' }">센터 소개</NuxtLink></li>
            <li role="menuitem"><NuxtLink to="/services" :class="{ active: route.path === '/services' }">서비스 안내</NuxtLink></li>
            <li role="menuitem"><NuxtLink to="/guide" :class="{ active: route.path === '/guide' }">이용 안내</NuxtLink></li>
            <li role="menuitem"><NuxtLink to="/contact" :class="{ active: route.path === '/contact' }">문의하기</NuxtLink></li>
          </ul>
          
          <button 
            class="mobile-menu-toggle" 
            :class="{ active: isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="메뉴 열기"
          >
            ☰
          </button>
        </nav>
      </div>
    </div>
  </header>

  <div 
    class="mobile-nav-overlay" 
    :class="{ active: isMobileMenuOpen }"
    @click="closeMobileMenu"
  ></div>
  
  <nav 
    class="mobile-nav" 
    :class="{ active: isMobileMenuOpen }"
    role="navigation" 
    aria-label="모바일 메뉴"
  >
    <div class="mobile-nav-header">
      <div class="mobile-logo">
        <span class="mobile-logo-icon">🏠</span>
        <div class="mobile-logo-text">
          <strong>행복재가요양</strong>
          <small>어르신의 든든한 동반자</small>
        </div>
      </div>
      <button 
        class="mobile-nav-close" 
        @click="closeMobileMenu"
        aria-label="메뉴 닫기"
      >×</button>
    </div>
    <ul class="mobile-nav-menu" role="menu">
      <li role="menuitem">
        <NuxtLink to="/" :class="{ active: route.path === '/' }" @click="closeMobileMenu">
          <span class="menu-icon">🏠</span>
          <span>홈</span>
        </NuxtLink>
      </li>
      <li role="menuitem">
        <NuxtLink to="/about" :class="{ active: route.path === '/about' }" @click="closeMobileMenu">
          <span class="menu-icon">ℹ️</span>
          <span>센터 소개</span>
        </NuxtLink>
      </li>
      <li role="menuitem">
        <NuxtLink to="/services" :class="{ active: route.path === '/services' }" @click="closeMobileMenu">
          <span class="menu-icon">💝</span>
          <span>서비스 안내</span>
        </NuxtLink>
      </li>
      <li role="menuitem">
        <NuxtLink to="/guide" :class="{ active: route.path === '/guide' }" @click="closeMobileMenu">
          <span class="menu-icon">📋</span>
          <span>이용 안내</span>
        </NuxtLink>
      </li>
      <li role="menuitem">
        <NuxtLink to="/contact" :class="{ active: route.path === '/contact' }" @click="closeMobileMenu">
          <span class="menu-icon">📞</span>
          <span>문의하기</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (process.client) {
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  if (process.client) {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
header {
  background: var(--bg-color);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: var(--transition);
}

header.scrolled {
  box-shadow: var(--shadow-md);
}

.header-top {
  background: var(--primary-color);
  color: white;
  padding: 8px 0;
  font-size: 14px;
  display: none;
}

@media (min-width: 768px) {
  .header-top {
    display: block;
    font-size: 15px;
    padding: 10px 0;
  }
}

.header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.header-contact {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .header-contact {
    gap: 30px;
  }
}

.header-main {
  padding: 12px 0;
}

@media (min-width: 768px) {
  .header-main {
    padding: 20px 0;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition);
}

@media (min-width: 768px) {
  .logo {
    font-size: 24px;
    gap: 10px;
  }
}

.logo:hover {
  transform: translateY(-1px);
}

/* 로고 텍스트 반응형 처리 */
.logo-text {
  display: inline;
}

.logo-full {
  display: none;
}

.logo-short {
  display: inline;
}

@media (min-width: 480px) {
  .logo-full {
    display: inline;
  }
  
  .logo-short {
    display: none;
  }
}

.nav-menu {
  display: none;
  list-style: none;
}

@media (min-width: 1024px) {
  .nav-menu {
    display: flex;
    gap: 20px;
  }
}

@media (min-width: 1200px) {
  .nav-menu {
    gap: 40px;
  }
}

.nav-menu a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  padding: 10px;
  transition: var(--transition);
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: width 0.3s ease;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
  width: 80%;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--secondary-color);
}

.mobile-menu-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  min-width: 44px;
  min-height: 44px;
  color: var(--primary-color);
  transition: var(--transition);
}

@media (min-width: 1024px) {
  .mobile-menu-toggle {
    display: none;
  }
}

.mobile-menu-toggle:hover {
  background: var(--bg-light);
  border-radius: 8px;
}

.mobile-menu-toggle.active {
  transform: rotate(90deg);
}

.mobile-nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-nav-overlay.active {
  display: block;
  opacity: 1;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 320px;
  height: 100%;
  background: white;
  box-shadow: -5px 0 20px rgba(0,0,0,0.15);
  transition: right 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-nav.active {
  right: 0;
}

/* 모바일 메뉴 헤더 */
.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-light);
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.mobile-logo-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.mobile-logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-logo-text strong {
  font-size: 16px;
  color: var(--primary-color);
  line-height: 1.2;
}

.mobile-logo-text small {
  font-size: 11px;
  color: var(--text-light);
  line-height: 1.2;
}

.mobile-nav-close {
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  flex-shrink: 0;
  border-radius: 8px;
  transition: var(--transition);
}

.mobile-nav-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* 모바일 메뉴 항목 */
.mobile-nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.mobile-nav-menu a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: var(--transition);
  border-left: 3px solid transparent;
}

.mobile-nav-menu a:hover {
  background: var(--bg-light);
}

.mobile-nav-menu a.active {
  background: var(--bg-light);
  color: var(--secondary-color);
  border-left-color: var(--secondary-color);
}

.menu-icon {
  font-size: 20px;
  flex-shrink: 0;
  width: 24px;
  text-align: center;
}
</style>
