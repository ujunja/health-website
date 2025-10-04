<!-- pages/guide.vue -->
<template>
  <div class="page-content">
    <!-- 페이지 타이틀 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">이용 안내</h1>
        <p class="page-subtitle">서비스 이용 절차와 비용을 안내해 드립니다</p>
      </div>
    </section>
    
    <!-- 이용 절차 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">이용 절차</h2>
        <p class="section-subtitle">장기요양등급 신청부터 서비스 시작까지</p>
        
        <div class="process-timeline">
          <div class="timeline-item">
            <div class="timeline-number">1</div>
            <div class="timeline-content">
              <h3>장기요양 인정 신청</h3>
              <p>국민건강보험공단에 '장기요양 인정 신청서'를 제출합니다.</p>
              <ul>
                <li>온라인: 노인장기요양보험 홈페이지</li>
                <li>방문: 가까운 건강보험공단 지사</li>
                <li>팩스/우편: 신청서 작성 후 전송</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-number">2</div>
            <div class="timeline-content">
              <h3>방문 조사</h3>
              <p>공단 직원이 자택으로 방문하여 어르신의 심신 상태를 확인합니다.</p>
              <ul>
                <li>일상생활 수행능력 평가</li>
                <li>인지기능 검사</li>
                <li>간호처치 필요도 확인</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-number">3</div>
            <div class="timeline-content">
              <h3>등급 판정</h3>
              <p>의사소견서 등을 바탕으로 등급판정위원회에서 장기요양 등급을 결정합니다.</p>
              <ul>
                <li>1~5등급, 인지지원등급</li>
                <li>신청일로부터 30일 이내 통보</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-number">4</div>
            <div class="timeline-content">
              <h3>인정서 수령</h3>
              <p>장기요양인정서와 표준장기요양이용계획서를 수령합니다.</p>
              <ul>
                <li>등급 및 유효기간 확인</li>
                <li>월 한도액 확인</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-number">5</div>
            <div class="timeline-content">
              <h3>서비스 기관 선택 및 계약</h3>
              <p>저희 김해 힐링 재가노인복지센터과 상담 후 서비스 계약을 체결합니다.</p>
              <ul>
                <li>무료 상담 및 욕구 사정</li>
                <li>맞춤형 서비스 계획 수립</li>
                <li>계약서 작성</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-number">6</div>
            <div class="timeline-content">
              <h3>서비스 시작</h3>
              <p>어르신의 상태와 필요에 맞는 요양보호사를 배정하고 서비스를 시작합니다.</p>
              <ul>
                <li>전담 요양보호사 배정</li>
                <li>서비스 일정 협의</li>
                <li>정기적인 모니터링</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 이용 비용 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">이용 비용</h2>
        <p class="section-subtitle">투명한 비용 안내로 부담 없이 이용하실 수 있습니다</p>
        
        <div class="cost-tables">
          <div class="cost-table">
            <h3>본인부담금 비율</h3>
            <table>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>본인부담률</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>일반</td>
                  <td><strong>15%</strong></td>
                </tr>
                <tr>
                  <td>감경 대상 (중위소득 50% 이하)</td>
                  <td><strong>9%</strong></td>
                </tr>
                <tr>
                  <td>감경 대상 (차상위계층)</td>
                  <td><strong>6%</strong></td>
                </tr>
                <tr>
                  <td>기초생활수급자</td>
                  <td><strong>무료</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
        
        <div class="cost-notice">
          <p>
            <strong>※ 주의사항</strong><br>
            • 야간(18:00~22:00) 서비스: 20% 가산<br>
            • 심야(22:00~06:00) 및 공휴일 서비스: 30% 가산<br>
            • 실제 본인부담금은 이용 시간과 서비스 종류에 따라 달라질 수 있습니다
          </p>
        </div>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">자주 묻는 질문</h2>
        <p class="section-subtitle">궁금하신 사항을 빠르게 확인하세요</p>
        
        <div class="faq-list">
          <FAQItem
            v-for="(item, index) in faqItems"
            :key="index"
            :question="item.question"
            :answer="item.answer"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="section-title">지금 바로 상담 받으세요</h2>
        <p class="section-subtitle">복잡한 절차도 친절하게 도와드립니다</p>
        <div class="cta-buttons">
          <a :href="`tel:${phone}`" class="btn btn-primary">
            📞 전화 상담하기
          </a>
          <NuxtLink to="/contact" class="btn btn-secondary">
            온라인 문의하기
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '이용 안내 - 김해 힐링 재가노인복지센터',
  meta: [
    { 
      name: 'description', 
      content: '장기요양등급 신청부터 서비스 이용까지의 절차와 비용을 자세히 안내합니다. 자주 묻는 질문도 확인하세요.' 
    }
  ]
})

const phone = '010-9396-8496'

const faqItems = [
  {
    question: 'Q. 본인부담금은 얼마나 되나요?',
    answer: '장기요양급여 비용의 15%가 일반적인 본인부담금입니다. 단, 소득 수준에 따라 6% 또는 9%로 경감될 수 있으며, 기초생활수급자는 본인부담금이 없습니다. 정확한 비용은 어르신의 등급과 이용 시간에 따라 달라지므로, 상담 시 자세히 안내해 드립니다.'
  },
  {
    question: 'Q. 하루에 몇 시간까지 서비스를 받을 수 있나요?',
    answer: '1, 2등급 어르신은 1회 최대 4시간, 3~5등급 어르신은 1회 최대 3시간까지 이용 가능합니다. 필요에 따라 하루 여러 번 서비스를 나누어 이용할 수도 있습니다.'
  },
  {
    question: 'Q. 주말이나 공휴일에도 서비스 이용이 가능한가요?',
    answer: '네, 가능합니다. 다만, 야간(오후 6시~10시)에는 20%, 심야(오후 10시~오전 6시) 및 공휴일에는 30%의 가산 비용이 발생합니다.'
  },
  {
    question: 'Q. 요양보호사가 마음에 들지 않으면 교체할 수 있나요?',
    answer: '네, 가능합니다. 어르신과 가장 잘 맞는 요양보호사를 만나는 것이 중요하므로, 불편함이 있으시면 언제든 센터에 말씀해주세요. 충분한 상담을 통해 다른 분으로 교체해 드립니다.'
  },
  {
    question: 'Q. 65세 미만도 서비스를 받을 수 있나요?',
    answer: '네, 65세 미만이라도 치매, 뇌혈관성 질환, 파킨슨병 등 노인성 질병으로 인해 일상생활이 어려운 경우, 장기요양등급을 받으면 서비스를 이용하실 수 있습니다.'
  },
  {
    question: 'Q. 장기요양등급 신청은 어떻게 하나요?',
    answer: '국민건강보험공단 홈페이지에서 온라인으로 신청하거나, 가까운 건강보험공단 지사를 방문하여 신청할 수 있습니다. 필요 서류는 장기요양인정신청서, 의사소견서 등이며, 저희 센터에서도 신청 절차를 도와드립니다.'
  }
]
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

.process-timeline {
  max-width: 800px;
  margin: 50px auto 0;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 25px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: var(--border-color);
  display: none;
}

@media (min-width: 768px) {
  .process-timeline::before {
    display: block;
  }
}

.timeline-item {
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-number {
  width: 50px;
  height: 50px;
  background: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-content {
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
}

.timeline-content h3 {
  font-size: 20px;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 600;
}

.timeline-content p {
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 15px;
  line-height: 1.7;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  font-size: 14px;
  color: var(--text-light);
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.timeline-content li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-color);
}

.cost-tables {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .cost-tables {
    grid-template-columns: 1fr;
  }
}

.cost-table {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.cost-table h3 {
  font-size: 20px;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: var(--bg-light);
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: var(--primary-color);
  border-bottom: 2px solid var(--border-color);
}

td {
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-light);
}

tr:last-child td {
  border-bottom: none;
}

.cost-notice {
  background: #FFF3E0;
  border-left: 4px solid var(--warning-color);
  padding: 20px;
  margin-top: 30px;
  border-radius: 8px;
}

.cost-notice p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.8;
  margin: 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
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

.cta-section .btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}
</style>