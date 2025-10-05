<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">우리가 제공하는 서비스</h2>
      <p class="section-subtitle">어르신의 편안한 일상을 위한 전문 케어 서비스</p>
      <div class="service-cards">
        <ServiceCard 
          icon="🏠"
          title="방문요양"
          description="전문 요양보호사가 자택으로 방문하여 신체활동, 가사활동, 정서지원 등 일상생활을 도와드립니다"
        />
        <ServiceCard 
          icon="🛁"
          title="가족요양"
          description="가족이 어르신을 돌보실 수 있도록 지원합니다."
        />
        <ServiceCard 
          icon="💝"
          title="치매 전문 케어"
          description="치매 어르신을 위한 특별한 인지 활동과 전문적인 돌봄 서비스를 제공합니다"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
</script>
