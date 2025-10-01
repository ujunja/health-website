<!-- pages/services.vue -->
<template>
  <div class="page-content">
    <!-- 페이지 타이틀 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">서비스 안내</h1>
        <p class="page-subtitle">어르신의 필요에 맞는 전문적인 돌봄 서비스</p>
      </div>
    </section>
    
    <!-- 방문요양 서비스 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">방문요양 서비스</h2>
        <p class="section-subtitle">
          어르신이 익숙한 자택에서 편안하고 안정적인 노후를 보내실 수 있도록 지원합니다
        </p>
        
        <div class="service-detail">
          <div class="service-content">
            <h3>서비스 내용</h3>
            <div class="service-list">
              <div class="service-item">
                <div class="item-icon">🤲</div>
                <div>
                  <h4>신체활동 지원</h4>
                  <p>세면, 구강 관리, 옷 갈아입기, 식사 도움, 체위 변경, 실내 이동 보조 등 어르신의 기본적인 신체 활동을 도와드립니다.</p>
                </div>
              </div>
              <div class="service-item">
                <div class="item-icon">🏠</div>
                <div>
                  <h4>가사활동 지원</h4>
                  <p>어르신과 관련된 식사 준비, 청소, 주변 정돈, 세탁 등 쾌적한 환경 유지를 위한 가사 활동을 지원합니다.</p>
                  <small>※ 가족을 위한 가사 활동은 포함되지 않습니다.</small>
                </div>
              </div>
              <div class="service-item">
                <div class="item-icon">💝</div>
                <div>
                  <h4>정서 지원</h4>
                  <p>말벗, 격려, 생활 상담을 통해 정서적 안정을 돕고, 외로움을 덜어드립니다.</p>
                </div>
              </div>
              <div class="service-item">
                <div class="item-icon">🧠</div>
                <div>
                  <h4>인지활동 지원</h4>
                  <p>치매 예방을 위한 간단한 인지 자극 활동과 기억력 향상 프로그램을 함께합니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="service-info-box">
            <h4>이용 대상</h4>
            <p>노인장기요양보험 1~5등급 판정을 받으신 어르신</p>
            
            <h4>서비스 시간</h4>
            <p>등급별 월 한도액 내에서 보호자와 협의하여 결정</p>
            <ul>
              <li>1~2등급: 1회 최대 4시간</li>
              <li>3~5등급: 1회 최대 3시간</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 방문목욕 서비스 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">방문목욕 서비스</h2>
        <p class="section-subtitle">
          전문 요양보호사 2명이 방문하여 안전하고 편안한 목욕 서비스를 제공합니다
        </p>
        
        <div class="bath-process">
          <h3 class="text-center mb-20">서비스 과정</h3>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h4>목욕 전</h4>
              <p>혈압, 체온 등 어르신의 건강 상태를 확인합니다</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h4>목욕 준비</h4>
              <p>목욕 차량 또는 이동식 욕조 설치, 적절한 온도의 목욕물을 준비합니다</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h4>목욕 실시</h4>
              <p>어르신의 신체 상태에 맞춰 안전하게 전신 입욕, 머리 감기, 몸 씻기를 진행합니다</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h4>목욕 후</h4>
              <p>몸 말리기, 옷 갈아입기 도움, 필요시 피부 보습 관리를 합니다</p>
            </div>
            <div class="process-step">
              <div class="step-number">5</div>
              <h4>정리</h4>
              <p>사용한 목욕 용품과 주변을 깨끗하게 정리합니다</p>
            </div>
          </div>
        </div>
        
        <div class="service-info-box mt-20">
          <h4>이용 대상</h4>
          <p>노인장기요양등급 판정을 받으신 어르신</p>
          
          <h4>이용 횟수</h4>
          <p>주 1회 이용 가능</p>
          
          <h4>서비스 인력</h4>
          <p>전문 교육을 이수한 요양보호사 2명이 1팀으로 방문</p>
        </div>
      </div>
    </section>
    
    <!-- 특화 서비스 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">특화 서비스</h2>
        <div class="grid grid-cols-1 grid-cols-3">
          <div class="card">
            <div class="card-icon">🧩</div>
            <h3>치매 전문 케어</h3>
            <p>치매 전문 교육을 받은 요양보호사가 맞춤형 인지 재활 프로그램과 함께 전문적인 돌봄을 제공합니다</p>
          </div>
          <div class="card">
            <div class="card-icon">🚶</div>
            <h3>재활 지원</h3>
            <p>물리치료사와 협업하여 일상생활 동작 훈련과 기능 회복을 위한 재활 프로그램을 지원합니다</p>
          </div>
          <div class="card">
            <div class="card-icon">🎨</div>
            <h3>정서 지원 프로그램</h3>
            <p>미술, 음악, 원예 등 다양한 활동을 통해 어르신의 정서적 안정과 삶의 질 향상을 돕습니다</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="section-title">서비스 이용 상담</h2>
        <p class="section-subtitle">어르신에게 가장 적합한 서비스를 안내해 드립니다</p>
        <div class="cta-buttons">
          <a :href="`tel:${phone}`" class="btn btn-primary">
            📞 전화 상담하기
          </a>
          <NuxtLink to="/guide" class="btn btn-secondary">
            이용 절차 확인하기
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '서비스 안내 - 김해 힐링 재가노인복지센터',
  meta: [
    { 
      name: 'description', 
      content: '방문요양, 방문목욕, 치매 전문 케어 등 어르신을 위한 전문적인 재가요양서비스를 제공합니다.' 
    }
  ]
})

const phone = '010-0000-0000'
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

.service-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .service-detail {
    grid-template-columns: 2fr 1fr;
    gap: 60px;
  }
}

.service-content h3 {
  font-size: 22px;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 600;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
}

.item-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.service-item h4 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 8px;
  font-weight: 600;
}

.service-item p {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.7;
}

.service-item small {
  display: block;
  margin-top: 8px;
  font-size: 13px;
  color: var(--warning-color);
}

.service-info-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 100px;
}

.service-info-box h4 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 600;
}

.service-info-box h4:not(:first-child) {
  margin-top: 20px;
}

.service-info-box p {
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 10px;
}

.service-info-box ul {
  list-style: none;
  padding: 0;
}

.service-info-box li {
  font-size: 14px;
  color: var(--text-light);
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.service-info-box li::before {
  content: '•';
  position: absolute;
  left: 5px;
  color: var(--secondary-color);
}

.bath-process {
  max-width: 1000px;
  margin: 0 auto;
}

.bath-process h3 {
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 600;
}

.process-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .process-steps {
    grid-template-columns: repeat(5, 1fr);
  }
}

.process-step {
  background: white;
  padding: 25px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 20px;
  font-weight: bold;
}

.process-step h4 {
  font-size: 17px;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 600;
}

.process-step p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.card-icon {
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

.cta-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #006655 100%);
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
  color: var(--secondary-color);
}

.cta-section .btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}
</style>