<template>
  <section class="about-section section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>내 부모님을 모시는 마음으로 전문 요양보호사 선생님이 댁의 가정을 방문하여 어르신을 돌보아 드립니다.</h2>
          <p>저희 김해 힐링 재가노인복지센터은 '내 부모님을 모신다'는 마음가짐으로 어르신 한 분 한 분을 정성껏 섬기고 있습니다.</p>
          <p>어르신의 손과 발이 되어 편안한 노후를 보내실 수 있도록, 그리고 가족분들의 정신적, 육체적 부담을 덜어드릴 수 있도록 최선을 다하겠습니다.</p>
          <NuxtLink to="/about" class="btn btn-primary mt-20">센터 소개 보기</NuxtLink>
        </div>
        <div class="about-image">
          <img src="~/assets/img/01_center.jpg" alt="김해 힐링 재가노인복지센터 전경" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// AboutPreview component
</script>

<style scoped>
.about-section {
  background: var(--bg-light);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
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

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mt-20 {
  margin-top: 20px;
}
</style>
