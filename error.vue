<!-- error.vue -->
<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1 class="error-code">{{ error.statusCode }}</h1>
        <h2 class="error-message">{{ errorMessage }}</h2>
        <p class="error-description">{{ errorDescription }}</p>
        
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary">
            홈으로 돌아가기
          </NuxtLink>
          <button @click="handleError" class="btn btn-secondary">
            다시 시도
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: Object
})

const errorMessage = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return '페이지를 찾을 수 없습니다'
    case 500:
      return '서버 오류가 발생했습니다'
    case 403:
      return '접근 권한이 없습니다'
    default:
      return '오류가 발생했습니다'
  }
})

const errorDescription = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return '요청하신 페이지가 존재하지 않거나 이동되었습니다.'
    case 500:
      return '일시적인 서버 오류입니다. 잠시 후 다시 시도해주세요.'
    case 403:
      return '이 페이지에 접근할 수 있는 권한이 없습니다.'
    default:
      return '예기치 않은 오류가 발생했습니다. 불편을 드려 죄송합니다.'
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-light) 0%, white 100%);
  padding: 40px 20px;
}

.error-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .error-code {
    font-size: 150px;
  }
}

.error-message {
  font-size: 28px;
  color: var(--text-color);
  margin-bottom: 15px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .error-message {
    font-size: 36px;
  }
}

.error-description {
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: 40px;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>