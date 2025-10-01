<template>
  <div>
    <!-- 히어로 섹션 -->
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">센터 소개</h1>
        <p class="page-subtitle">어르신을 내 부모님처럼 모시겠습니다</p>
      </div>
    </div>

    <!-- 센터장 인사말 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">센터장 인사말</h2>
        <div class="about-content">
          <div class="about-text">
            <h2>내 부모님을 모시는 마음으로</h2>
            <p>안녕하십니까. 김해 힐링 재가노인복지센터 대표 이연일입니다.</p>
            <p>사랑과 배려 봉사로 어르신들을 안전하고 편안하게 지내시도록 도와드리겠습니다. 종사하시는 분들을 위해 투명하게 운영하며 신뢰받고 믿음이 가는 센터로 발전시키도록 하겠습니다.</p>
            <p>저희 센터를 방문하시는 모든 분들에게 감사드리며 가정에 건강과 행복이 충만하시길 기원드립니다.</p>
            <p><strong>센터장 이 연 일 드림</strong></p>
          </div>
          <div class="about-image">
            <div class="about-image-placeholder">
              센터 이미지 업로드 예정
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 미션과 비전 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">미션과 비전</h2>
        <p class="section-subtitle">우리가 추구하는 가치와 목표</p>
        <div class="service-cards">
          <article class="service-card">
            <div class="service-icon" aria-hidden="true">🎯</div>
            <h3>미션 (우리의 사명)</h3>
            <p>따뜻한 섬김과 전문적인 돌봄을 바탕으로 어르신이 존엄하고 행복한 노후를 누리실 수 있도록 돕는 든든한 동반자가 되겠습니다.</p>
          </article>
          <article class="service-card">
            <div class="service-icon" aria-hidden="true">🌟</div>
            <h3>비전 (우리의 미래상)</h3>
            <p>어르신과 가족, 그리고 지역사회가 함께 건강하고 활기찬 노년의 삶을 만들어가는 신뢰받는 노인복지 전문기관이 되겠습니다.</p>
          </article>
          <article class="service-card">
            <div class="service-icon" aria-hidden="true">❤️</div>
            <h3>핵심 가치</h3>
            <p>존중, 신뢰, 전문성을 바탕으로 어르신 한 분 한 분의 행복한 삶을 위해 최선을 다하겠습니다.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="section-title">더 궁금한 점이 있으신가요?</h2>
        <p class="section-subtitle">언제든 편하게 연락주세요</p>
        <div class="cta-buttons">
          <NuxtLink to="/services" class="btn btn-primary">서비스 안내 보기</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-secondary">문의하기</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '센터 소개 - 김해 힐링 재가노인복지센터',
  meta: [
    { 
      name: 'description', 
      content: '어르신을 내 부모님처럼 모시는 김해 힐링 재가노인복지센터입니다. 미션과 비전을 확인하세요.' 
    }
  ]
})
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, #002244 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

@media (min-width: 768px) {
  .page-header {
    padding: 80px 0;
  }
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .page-title {
    font-size: 40px;
  }
}

.page-subtitle {
  font-size: 18px;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .page-subtitle {
    font-size: 20px;
  }
}

.bg-light {
  background: var(--bg-light);
}

.text-center {
  text-align: center;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
}

.about-text h2 {
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .about-text h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
}

@media (min-width: 1024px) {
  .about-text h2 {
    font-size: 32px;
  }
}

.about-text p {
  font-size: 16px;
  color: var(--text-light);
  margin-bottom: 15px;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .about-text p {
    font-size: 17px;
    margin-bottom: 20px;
    line-height: 1.8;
  }
}

@media (min-width: 1024px) {
  .about-text p {
    font-size: 18px;
  }
}

.about-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  order: -1;
}

@media (min-width: 768px) {
  .about-image {
    order: 0;
  }
}

.about-image-placeholder {
  background: linear-gradient(135deg, var(--bg-light) 0%, white 100%);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--text-light);
}

@media (min-width: 768px) {
  .about-image-placeholder {
    height: 400px;
    font-size: 24px;
  }
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, #002244 100%);
  color: white;
}

.cta-section .section-title {
  color: white;
}

.cta-section .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background: white;
  color: var(--primary-color);
}

.cta-section .btn-primary:hover {
  background: var(--bg-light);
}

.cta-section .btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-section .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
