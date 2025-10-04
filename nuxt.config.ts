// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // SPA 모드 (GitHub Pages용)
  ssr: false,
  
  app: {
    // GitHub Pages용 baseURL 설정 - 저장소 이름과 일치해야 함
    baseURL: process.env.NODE_ENV === 'production' ? '/health-website/' : '/',
    buildAssetsDir: '/assets/',
    
    head: {
      title: '행복한 재가노인요양원 - 어르신의 든든한 동반자',
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
        { name: 'description', content: '어르신의 행복한 노후를 함께하는 전문 재가요양서비스. 가족요양, 방문목욕 서비스 제공' },
        { name: 'keywords', content: '재가요양, 가족요양, 방문목욕, 노인요양, 장기요양' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/health-website/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap' 
        }
      ]
    }
  },
  
  css: ['~/assets/css/main.css'],
  
  // 정적 사이트 생성 설정
  nitro: {
    preset: 'static',
    output: {
      publicDir: '.output/public'
    }
  },
  
  // 런타임 환경 변수
  runtimeConfig: {
    public: {
      kakaoMapKey: process.env.NUXT_PUBLIC_KAKAO_MAP_KEY || ''
    }
  },
  
  // 라우트 생성
  generate: {
    routes: ['/']
  }
})
