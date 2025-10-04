<template>
  <section class="contact-section section">
    <div class="container">
      <h2 class="section-title">빠른 상담 문의</h2>
      <p class="section-subtitle">언제든 편하게 연락주세요</p>
      
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">📞</div>
          <h3>전화 상담</h3>
          <p><strong>010-9396-8496</strong></p>
          <p>평일 09:00 - 18:00</p>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">📧</div>
          <h3>이메일</h3>
          <p><a href="mailto:lyni84@naver.com">lyni84@naver.com</a></p>
          <p>24시간 접수 가능</p>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">📍</div>
          <h3>방문 상담</h3>
          <p>김해시 분성로272번길 2-10</p>
          <p>경전철 수로왕릉역 김해도서관 방향 5분 거리</p>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">💬</div>
          <h3>카카오톡 상담</h3>
          <p>@행복재가요양</p>
          <p>실시간 상담 가능</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ContactSection component
</script>

<style scoped>
.contact-section {
  background: white;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (min-width: 1024px) {
  .contact-info {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}

.contact-item {
  text-align: center;
  padding: 25px 20px;
  background: var(--bg-light);
  border-radius: 12px;
  transition: var(--transition);
}

@media (min-width: 768px) {
  .contact-item {
    padding: 30px;
  }
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 22px;
  color: white;
}

@media (min-width: 768px) {
  .contact-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    font-size: 24px;
  }
}

.contact-item h3 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 8px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .contact-item h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
}

.contact-item p {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .contact-item p {
    font-size: 16px;
  }
}

.contact-item a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
  text-decoration: underline;
}
</style>
