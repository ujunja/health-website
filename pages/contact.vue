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
            <p class="contact-main">경상남도 김해시 봉황로</p>
            <p>지하철 2호선 강남역 5번 출구</p>
            <p>사전 예약 권장</p>
            <NuxtLink to="#location" class="btn btn-primary">오시는 길 보기</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 온라인 문의 양식 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">온라인 문의</h2>
        <p class="section-subtitle">아래 양식을 작성해주시면 빠르게 연락드리겠습니다</p>
        
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">이름 <span class="required">*</span></label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="성함을 입력해주세요"
              />
            </div>
            
            <div class="form-group">
              <label for="phone">연락처 <span class="required">*</span></label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                placeholder="010-0000-0000"
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="email">이메일</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="이메일 주소를 입력해주세요"
              />
            </div>
            
            <div class="form-group">
              <label for="service">문의 서비스</label>
              <select id="service" v-model="form.service">
                <option value="">선택해주세요</option>
                <option value="방문요양">방문요양</option>
                <option value="방문목욕">방문목욕</option>
                <option value="치매케어">치매 전문 케어</option>
                <option value="기타">기타 문의</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="message">문의 내용 <span class="required">*</span></label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              placeholder="문의하실 내용을 자세히 작성해주세요"
            ></textarea>
          </div>
          
          <div class="form-checkbox">
            <input
              type="checkbox"
              id="privacy"
              v-model="form.privacy"
              required
            />
            <label for="privacy">
              개인정보 수집 및 이용에 동의합니다 <span class="required">*</span>
            </label>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-lg">
              문의 보내기
            </button>
          </div>
        </form>
      </div>
    </section>
    
    <!-- 오시는 길 -->
    <section id="location" class="section">
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
                <p>2호선 강남역 5번 출구에서 도보 5분</p>
              </div>
              <div class="transport-item">
                <strong>🚌 버스</strong>
                <p>간선: 140, 144, 145</p>
                <p>지선: 3412, 4412</p>
                <p>정류장: 강남역 12번 출구</p>
              </div>
            </div>
            
            <div class="info-section">
              <h3>자가용</h3>
              <p>건물 내 주차장 이용 가능</p>
              <p>방문 상담 시 2시간 무료 주차</p>
            </div>
          </div>
          
          <div class="map-container">
            <div class="map-placeholder">
              <p>지도 영역</p>
              <p class="map-notice">실제 운영 시 네이버/카카오 지도 API 연동</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
const address = '경상남도 김해시 봉황로'

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  privacy: false
})

const handleSubmit = () => {
  // 실제 구현 시 여기에 폼 제출 로직 추가
  alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  
  // 폼 리셋
  form.value = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    privacy: false
  }
}

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

/* 폼 스타일 */
.contact-form {
  max-width: 800px;
  margin: 40px auto 0;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 8px;
  font-weight: 500;
}

.required {
  color: var(--accent-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: white;
  transition: var(--transition);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(0, 150, 136, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0;
}

.form-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.form-checkbox label {
  font-size: 15px;
  color: var(--text-light);
  cursor: pointer;
}

.form-actions {
  text-align: center;
  margin-top: 30px;
}

.btn-lg {
  padding: 18px 50px;
  font-size: 18px;
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

.map-placeholder {
  height: 400px;
  background: linear-gradient(135deg, var(--bg-light) 0%, white 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--text-light);
}

.map-notice {
  font-size: 14px;
  margin-top: 10px;
  opacity: 0.7;
}

@media (min-width: 768px) {
  .map-placeholder {
    height: 500px;
  }
}
</style>