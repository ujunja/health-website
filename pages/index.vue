<!-- pages/index.vue -->
<template>
  <div>
    <!-- 히어로 섹션 -->
    <HeroSection />

    <!-- 주요 서비스 섹션 -->
    <section class="section" aria-labelledby="services-title">
      <div class="container">
        <h2 id="services-title" class="section-title">우리가 제공하는 서비스</h2>
        <p class="section-subtitle">어르신의 편안한 일상을 위한 전문 케어 서비스</p>
        
        <div class="service-cards">
          <ServiceCard
            icon="🏠"
            title="가족요양"
            description="전문 요양보호사가 신체활동, 가사활동, 정서지원 등 일상생활을 도와드립니다"
          />
          <ServiceCard
            icon="🛁"
            title="방문목욕"
            description="2명의 전문 요양보호사가 방문하여 안전하고 편안한 목욕 서비스를 제공합니다"
          />
          <ServiceCard
            icon="💝"
            title="치매 전문 케어"
            description="치매 어르신을 위한 특별한 인지 활동과 전문적인 돌봄 서비스를 제공합니다"
          />
        </div>
      </div>
    </section>

    <!-- About Preview 섹션 -->
    <AboutPreview />

    <!-- 연락처 섹션 -->
    <ContactSection />
  </div>
</template>

<script setup>
// SEO 메타 태그
useHead({
  title: '김해 힐링 재가노인복지센터 - 어르신의 든든한 동반자',
  meta: [
    { 
      name: 'description', 
      content: '어르신의 행복한 노후를 함께하는 전문 재가요양서비스. 가족요양, 방문목욕, 치매 전문 케어 서비스를 제공합니다.' 
    }
  ]
})
</script>
