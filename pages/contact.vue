<!-- pages/contact.vue -->
<template>
  <div class="page-content">
    <!-- 페이지 타이틀 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">문의하기</h1>
        <p class="page-subtitle">언제든 편하게 연락주세요</p>
      </div>
    </section>
    
    <!-- 연락처 정보 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">연락처 정보</h2>
        <p class="section-subtitle">전화, 이메일, 카카오톡으로 문의하실 수 있습니다</p>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">📞</div>
            <h3>전화 상담</h3>
            <p class="contact-main">{{ phone }}</p>
            <p>평일 09:00 - 18:00</p>
            <p>토요일 09:00 - 13:00</p>
            <a :href="`tel:${phone}`" class="btn btn-primary">전화 걸기</a>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>이메일</h3>
            <p class="contact-main">{{ email }}</p>
            <p>24시간 접수 가능</p>
            <p>업무일 기준 24시간 이내 답변</p>
            <a :href="`mailto:${email}`" class="btn btn-primary">이메일 보내기</a>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <h3>카카오톡 상담</h3>
            <p class="contact-main">@행복재가요양</p>
            <p>실시간 상담 가능</p>
            <p>빠른 답변 보장</p>
            <button class="btn btn-primary" @click="openKakao">카카오톡 추가</button>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">📍</div>
            <h3>방문 상담</h3>
            <p class="contact-main">{{ address }}</p>
            <p>봉황대공원 주차장 이용 가능</p>
            <NuxtLink to="#location" class="btn btn-primary">오시는 길 보기</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 오시는 길 -->
    <section id="location" class="section bg-light">
      <div class="container">
        <h2 class="section-title">오시는 길</h2>
        
        <div class="location-wrapper">
          <div class="location-info">
            <div class="info-section">
              <h3>주소</h3>
              <p>{{ address }}</p>
              <p>행복빌딩 3층</p>
            </div>
            
            <div class="info-section">
              <h3>대중교통</h3>
              <div class="transport-item">
                <strong>🚇 지하철</strong>
                <p>김해시 수로왕릉역 하차</p>
                <p>도보 약 10분 거리</p>
              </div>
              <div class="transport-item">
                <strong>🚌 버스</strong>
                <p>간선: 58, 59, 128</p>
                <p>지선: 김해 3, 10번</p>
                <p>정류장: 봉황동 사거리</p>
              </div>
            </div>
            
            <div class="info-section">
              <h3>자가용</h3>
              <p>건물 내 주차장 이용 가능</p>
              <p>방문 상담 시 2시간 무료 주차</p>
            </div>
          </div>
          
          <div class="map-container">
            <KakaoMap />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="section-title">어르신의 행복한 노후, 함께 시작하세요</h2>
        <p class="section-subtitle">전문 상담사가 친절하게 안내해 드립니다</p>
        <div class="cta-buttons">
          <a :href="`tel:${phone}`" class="btn btn-primary">
            📞 전화 상담하기
          </a>
          <a :href="`mailto:${email}`" class="btn btn-secondary">
            📧 이메일 문의하기
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '문의하기 - 김해 힐링 재가노인복지센터',
  meta: [
    { 
      name: 'description', 
      content: '김해 힐링 재가노인복지센터 문의하기. 전화, 이메일, 카카오톡, 방문 상담 등 다양한 방법으로 연락주세요.' 
    }
  ]
})

const phone = '010-0000-0000'
const email = 'sample@email.kr'
const address = '경상남도 김해시 분성로272번길 2-10'

const openKakao = () => {
  // 실제 구현 시 카카오톡 채널 연결
  window.open('https://pf.kakao.com/', '_blank')
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.contact-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 28px;
  color: white;
}

.contact-card h3 {
  font-size: 20px;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.contact-main {
  font-size: 18px;
  color: var(--text-color);
  font-weight: 500;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.contact-card .btn {
  margin-top: 15px;
  width: 100%;
}

/* 오시는 길 */
.location-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .location-wrapper {
    grid-template-columns: 1fr 2fr;
    gap: 60px;
  }
}

.location-info {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
}

.info-section {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
}

.info-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-section h3 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.info-section p {
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 5px;
  line-height: 1.6;
}

.transport-item {
  margin-bottom: 15px;
}

.transport-item:last-child {
  margin-bottom: 0;
}

.transport-item strong {
  display: block;
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 5px;
}

.map-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

/* CTA 섹션 */
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
