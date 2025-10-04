<!-- pages/news.vue -->
<template>
  <div class="page-content">
    <!-- 페이지 타이틀 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">소식/활동</h1>
        <p class="page-subtitle">김해 힐링 재가노인복지센터의 따뜻한 일상을 공유합니다</p>
      </div>
    </section>
    
    <!-- 공지사항 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">공지사항</h2>
        
        <div class="notice-list">
          <article v-for="notice in notices" :key="notice.id" class="notice-item">
            <div class="notice-header">
              <span class="notice-badge" :class="{ important: notice.important }">
                {{ notice.important ? '중요' : '공지' }}
              </span>
              <h3 class="notice-title">{{ notice.title }}</h3>
            </div>
            <div class="notice-meta">
              <span>{{ notice.date }}</span>
              <span>조회 {{ notice.views }}</span>
            </div>
            <p class="notice-excerpt">{{ notice.excerpt }}</p>
            <button class="notice-more" @click="toggleNotice(notice.id)">
              {{ expandedNotices.includes(notice.id) ? '접기' : '자세히 보기' }}
            </button>
            <div v-if="expandedNotices.includes(notice.id)" class="notice-content">
              {{ notice.content }}
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <!-- 활동 사진 갤러리 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">활동 사진</h2>
        <p class="section-subtitle">어르신들과 함께한 행복한 순간들</p>
        
        <div class="gallery-tabs">
          <button 
            v-for="category in galleryCategories" 
            :key="category.id"
            class="tab-button"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
        
        <div class="gallery-grid">
          <div 
            v-for="photo in filteredPhotos" 
            :key="photo.id"
            class="gallery-item"
            @click="openPhoto(photo)"
          >
            <div class="gallery-image">
              <div class="image-placeholder">
                {{ photo.title }}
              </div>
              <div class="gallery-overlay">
                <span class="view-icon">🔍</span>
              </div>
            </div>
            <div class="gallery-info">
              <h4>{{ photo.title }}</h4>
              <p>{{ photo.date }}</p>
            </div>
          </div>
        </div>
        
        <div class="gallery-more">
          <button class="btn btn-secondary">더 많은 사진 보기</button>
        </div>
      </div>
    </section>
    
    <!-- 월간 소식지 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">월간 소식지</h2>
        <p class="section-subtitle">매월 발행되는 센터 소식지를 확인하세요</p>
        
        <div class="newsletter-grid">
          <article v-for="newsletter in newsletters" :key="newsletter.id" class="newsletter-card">
            <div class="newsletter-cover">
              <div class="cover-placeholder">
                <span class="cover-month">{{ newsletter.month }}</span>
                <span class="cover-year">{{ newsletter.year }}</span>
              </div>
            </div>
            <div class="newsletter-content">
              <h3>{{ newsletter.year }}년 {{ newsletter.month }}월호</h3>
              <ul class="newsletter-topics">
                <li v-for="topic in newsletter.topics" :key="topic">{{ topic }}</li>
              </ul>
              <button class="btn btn-primary btn-sm">
                PDF 다운로드
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <!-- 봉사활동 안내 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">함께해요, 봉사활동</h2>
        <p class="section-subtitle">어르신들과 함께 따뜻한 시간을 보내실 자원봉사자를 기다립니다</p>
        
        <div class="volunteer-info">
          <div class="volunteer-card">
            <div class="volunteer-icon">🤝</div>
            <h3>정기 봉사</h3>
            <p>매주 정기적으로 어르신들과 함께 시간을 보내실 봉사자</p>
            <ul>
              <li>말벗 봉사</li>
              <li>산책 도우미</li>
              <li>프로그램 보조</li>
            </ul>
          </div>
          
          <div class="volunteer-card">
            <div class="volunteer-icon">🎨</div>
            <h3>재능 기부</h3>
            <p>특별한 재능으로 어르신들께 기쁨을 드릴 봉사자</p>
            <ul>
              <li>음악 공연</li>
              <li>미술 활동</li>
              <li>건강 체조</li>
            </ul>
          </div>
          
          <div class="volunteer-card">
            <div class="volunteer-icon">📅</div>
            <h3>특별 행사</h3>
            <p>명절이나 특별한 날에 함께할 봉사자</p>
            <ul>
              <li>명절 행사</li>
              <li>생신 잔치</li>
              <li>나들이 활동</li>
            </ul>
          </div>
        </div>
        
        <div class="volunteer-cta">
          <p>봉사활동 문의: {{ phone }}</p>
          <NuxtLink to="/contact" class="btn btn-primary">봉사 신청하기</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: '소식/활동 - 김해 힐링 재가노인복지센터',
  meta: [
    { 
      name: 'description', 
      content: '김해 힐링 재가노인복지센터의 공지사항, 활동 사진, 월간 소식지를 확인하세요. 따뜻한 일상을 공유합니다.' 
    }
  ]
})

const phone = '010-9396-8496'

// 공지사항 데이터
const notices = ref([
  {
    id: 1,
    title: '2025년 설 연휴 운영 안내',
    date: '2025.01.25',
    views: 152,
    important: true,
    excerpt: '2025년 설 연휴 기간 센터 운영에 대해 안내드립니다.',
    content: '안녕하십니까. 2025년 설 연휴 기간 (2월 9일~12일) 센터 운영 일정을 안내드립니다. 연휴 기간에도 가족요양 서비스는 정상 운영되며, 긴급 상황 발생 시 24시간 비상 연락망을 통해 대응하겠습니다.'
  },
  {
    id: 2,
    title: '요양보호사 정기 교육 실시',
    date: '2025.01.20',
    views: 89,
    important: false,
    excerpt: '서비스 질 향상을 위한 요양보호사 정기 교육을 실시합니다.',
    content: '더 나은 서비스 제공을 위해 요양보호사 대상 정기 교육을 실시합니다. 이번 교육에서는 치매 케어 전문 과정과 응급 상황 대처법을 중점적으로 다룰 예정입니다.'
  },
  {
    id: 3,
    title: '신규 프로그램 안내 - 음악 치료',
    date: '2025.01.15',
    views: 124,
    important: false,
    excerpt: '어르신들의 정서 안정을 위한 음악 치료 프로그램을 시작합니다.',
    content: '전문 음악 치료사와 함께하는 음악 치료 프로그램을 새롭게 시작합니다. 매주 화요일 오후 2시에 진행되며, 참여를 원하시는 분은 센터로 문의 바랍니다.'
  }
])

const expandedNotices = ref([])

const toggleNotice = (id) => {
  const index = expandedNotices.value.indexOf(id)
  if (index > -1) {
    expandedNotices.value.splice(index, 1)
  } else {
    expandedNotices.value.push(id)
  }
}

// 갤러리 카테고리
const galleryCategories = [
  { id: 'all', name: '전체' },
  { id: 'daily', name: '일상 활동' },
  { id: 'program', name: '프로그램' },
  { id: 'event', name: '특별 행사' },
  { id: 'volunteer', name: '봉사 활동' }
]

const activeCategory = ref('all')

// 갤러리 사진 데이터
const photos = ref([
  {
    id: 1,
    category: 'daily',
    title: '오늘의 산책',
    date: '2025.01.24',
    image: 'daily1.jpg'
  },
  {
    id: 2,
    category: 'program',
    title: '미술 치료 시간',
    date: '2025.01.23',
    image: 'program1.jpg'
  },
  {
    id: 3,
    category: 'event',
    title: '1월 생신 잔치',
    date: '2025.01.20',
    image: 'event1.jpg'
  },
  {
    id: 4,
    category: 'volunteer',
    title: '대학생 봉사단 방문',
    date: '2025.01.18',
    image: 'volunteer1.jpg'
  },
  {
    id: 5,
    category: 'daily',
    title: '즐거운 점심 시간',
    date: '2025.01.17',
    image: 'daily2.jpg'
  },
  {
    id: 6,
    category: 'program',
    title: '건강 체조 프로그램',
    date: '2025.01.16',
    image: 'program2.jpg'
  }
])

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'all') {
    return photos.value
  }
  return photos.value.filter(photo => photo.category === activeCategory.value)
})

const openPhoto = (photo) => {
  // 실제 구현 시 라이트박스나 모달로 큰 이미지 표시
  console.log('Opening photo:', photo.title)
}

// 월간 소식지 데이터
const newsletters = ref([
  {
    id: 1,
    year: '2025',
    month: '1',
    topics: [
      '새해 인사 및 계획',
      '겨울철 건강 관리법',
      '1월 프로그램 안내'
    ]
  },
  {
    id: 2,
    year: '2023',
    month: '12',
    topics: [
      '한 해를 돌아보며',
      '연말 특별 행사',
      '감사 인사'
    ]
  },
  {
    id: 3,
    year: '2023',
    month: '11',
    topics: [
      '가을 나들이 후기',
      '독감 예방 안내',
      '11월 활동 보고'
    ]
  }
])
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

/* 공지사항 */
.notice-list {
  max-width: 900px;
  margin: 40px auto 0;
}

.notice-item {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.notice-item:hover {
  box-shadow: var(--shadow-md);
}

.notice-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.notice-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: var(--bg-light);
  color: var(--text-light);
}

.notice-badge.important {
  background: var(--accent-color);
  color: white;
}

.notice-title {
  font-size: 18px;
  color: var(--text-color);
  font-weight: 600;
  flex: 1;
}

@media (min-width: 768px) {
  .notice-title {
    font-size: 20px;
  }
}

.notice-meta {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 15px;
}

.notice-excerpt {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 15px;
}

.notice-more {
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 0;
  transition: var(--transition);
}

.notice-more:hover {
  color: var(--primary-color);
}

.notice-content {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.8;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 갤러리 */
.gallery-tabs {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 20px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 25px;
  font-size: 15px;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
}

.tab-button:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.tab-button.active {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

.gallery-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.gallery-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-light) 0%, white 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--text-light);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.view-icon {
  font-size: 32px;
  color: white;
}

.gallery-info {
  padding: 15px;
}

.gallery-info h4 {
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 5px;
  font-weight: 500;
}

.gallery-info p {
  font-size: 14px;
  color: var(--text-light);
}

.gallery-more {
  text-align: center;
}

/* 월간 소식지 */
.newsletter-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .newsletter-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .newsletter-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.newsletter-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.newsletter-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.newsletter-cover {
  height: 150px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #002244 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-placeholder {
  text-align: center;
  color: white;
}

.cover-month {
  display: block;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
}

.cover-year {
  display: block;
  font-size: 18px;
  margin-top: 5px;
}

.newsletter-content {
  padding: 20px;
}

.newsletter-content h3 {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.newsletter-topics {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.newsletter-topics li {
  font-size: 14px;
  color: var(--text-light);
  padding: 5px 0;
  padding-left: 15px;
  position: relative;
}

.newsletter-topics li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.btn-sm {
  padding: 10px 20px;
  font-size: 14px;
}

/* 봉사활동 */
.volunteer-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .volunteer-info {
    grid-template-columns: repeat(3, 1fr);
  }
}

.volunteer-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.volunteer-icon {
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

.volunteer-card h3 {
  font-size: 20px;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.volunteer-card p {
  font-size: 15px;
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.volunteer-card ul {
  list-style: none;
  padding: 0;
}

.volunteer-card li {
  font-size: 14px;
  color: var(--text-light);
  padding: 5px 0;
}

.volunteer-cta {
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: white;
  border-radius: 12px;
}

.volunteer-cta p {
  font-size: 18px;
  color: var(--text-color);
  margin-bottom: 20px;
}
</style>