<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>김해 힐링 재가노인복지센터</h3>
          <p>어르신의 행복한 노후를 함께하는<br>든든한 동반자</p>
        </div>
        <div class="footer-section">
          <h3>빠른 메뉴</h3>
          <ul>
            <li><NuxtLink to="/services">서비스 안내</NuxtLink></li>
            <li><NuxtLink to="/guide">이용 안내</NuxtLink></li>
            <li><NuxtLink to="/contact">문의하기</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>연락처</h3>
          <p>📞 010-9396-8496</p>
          <p>📧 lyni84@naver.com</p>
          <p>📍 경상남도 김해시 봉황로</p>
        </div>
        <div class="footer-section">
          <h3>운영 시간</h3>
          <p>평일: 09:00 - 18:00</p>
          <p>토요일: 09:00 - 13:00</p>
          <p>일요일/공휴일: 휴무</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 김해 힐링 재가노인복지센터. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
footer {
  background: var(--primary-color);
  color: white;
  padding: 40px 0 80px;
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  footer {
    padding: 40px 0 20px;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 30px;
}

@media (min-width: 640px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .footer-section h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
}

.footer-section p,
.footer-section li {
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .footer-section p,
  .footer-section li {
    font-size: 16px;
    line-height: 1.8;
  }
}

.footer-section ul {
  list-style: none;
}

.footer-section a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: var(--transition);
}

.footer-section a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 13px;
  opacity: 0.8;
}

@media (min-width: 768px) {
  .footer-bottom {
    font-size: 14px;
  }
}
</style>
