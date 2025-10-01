<template>
  <div class="faq-item" :class="{ active: isOpen }">
    <button 
      class="faq-question" 
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <span>{{ question }}</span>
      <span class="faq-toggle" aria-hidden="true">+</span>
    </button>
    <div class="faq-answer" :aria-hidden="!isOpen">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  background: white;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

@media (min-width: 768px) {
  .faq-item {
    margin-bottom: 20px;
  }
}

.faq-question {
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
  user-select: none;
  background: none;
  border: none;
  text-align: left;
}

@media (min-width: 768px) {
  .faq-question {
    padding: 20px 25px;
    font-size: 18px;
  }
}

.faq-question:hover {
  background: var(--bg-light);
}

.faq-answer {
  padding: 0 20px;
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.7;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

@media (min-width: 768px) {
  .faq-answer {
    padding: 0 25px;
    font-size: 16px;
    line-height: 1.8;
  }
}

.faq-item.active .faq-answer {
  padding: 0 20px 20px;
  max-height: 500px;
}

@media (min-width: 768px) {
  .faq-item.active .faq-answer {
    padding: 0 25px 20px;
  }
}

.faq-toggle {
  font-size: 20px;
  transition: transform 0.3s;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .faq-toggle {
    font-size: 24px;
  }
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}
</style>
