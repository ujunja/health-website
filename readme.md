# 김해 힐링 재가노인복지센터 웹사이트

어르신과 가족을 위한 접근성 높은 재가노인요양원 웹사이트입니다.

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.x-00DC82?style=flat-square&logo=nuxt.js)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

## 🌐 웹사이트 주소

**배포된 사이트**: [https://YOUR-USERNAME.github.io/lee-health-website/](https://YOUR-USERNAME.github.io/lee-health-website/)

> 배포 후 위 링크를 실제 GitHub 주소로 업데이트하세요.

## 📋 프로젝트 소개

이 프로젝트는 재가노인요양원을 위한 정적 웹사이트로, 어르신과 보호자 모두가 쉽게 사용할 수 있도록 설계되었습니다.

### 핵심 가치
- **신뢰성**: 투명한 정보 제공
- **접근성**: WCAG AA 기준 충족
- **사용편의성**: 어르신 친화적 UI/UX

## ✨ 주요 기능

- 📱 완벽한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ♿ 웹 접근성 준수 (WCAG AA 기준)
- 🎨 어르신 친화적 UI (큰 글씨, 높은 명도 대비)
- 📞 빠른 연락 기능 (모바일 하단 바)
- 📄 서비스 안내 (방문요양, 가족요양)
- ❓ FAQ 섹션
- 📍 오시는 길 안내

## 🛠 기술 스택

- **Framework**: Nuxt.js 3 (Vue.js 3)
- **Styling**: CSS3 (CSS Variables, Flexbox, Grid)
- **Font**: Noto Sans KR (Google Fonts)
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 🚀 시작하기

### 필요 사항

- Node.js 18.0.0 이상
- npm 8.0.0 이상

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/YOUR-USERNAME/lee-health-website.git
cd lee-health-website
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인합니다.

## 📦 빌드 및 배포

### 로컬 빌드

```bash
# 정적 사이트 생성
npm run generate

# 빌드된 사이트 미리보기
npm run preview
```

### GitHub Pages 자동 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

1. `main` 브랜치에 코드를 푸시하면 자동으로 배포가 시작됩니다
2. GitHub Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
3. 배포 완료 후 `https://YOUR-USERNAME.github.io/lee-health-website/`에서 확인 가능합니다

## 📁 프로젝트 구조

```
lee-health-website-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 배포 설정
├── assets/
│   └── css/
│       └── main.css          # 전역 스타일
├── components/               # Vue 컴포넌트
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   ├── ServiceCard.vue
│   ├── AboutPreview.vue
│   ├── ContactSection.vue
│   ├── FAQItem.vue
│   └── MobileQuickContact.vue
├── layouts/
│   └── default.vue           # 기본 레이아웃
├── pages/                    # 페이지 컴포넌트
│   ├── index.vue             # 홈
│   ├── about.vue             # 센터 소개
│   ├── services.vue          # 서비스 안내
│   ├── guide.vue             # 이용 안내
│   ├── contact.vue           # 문의하기
│   └── news.vue              # 소식/활동
├── public/                   # 정적 파일
│   ├── favicon.ico
│   └── robots.txt
├── app.vue                   # 루트 컴포넌트
├── nuxt.config.ts            # Nuxt 설정
├── package.json              # 프로젝트 메타데이터
└── README.md                 # 프로젝트 문서
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: `#003366` (진한 남색)
- **Secondary**: `#009688` (청록색)
- **Accent**: `#FF7043` (주황색)
- **Text**: `#1A1A1A` (검정)
- **Background**: `#FFFFFF` (흰색)
- **Background Light**: `#F4F4F4` (연한 회색)

### 반응형 브레이크포인트

- 모바일: `< 640px`
- 태블릿: `640px ~ 1024px`
- 데스크톱: `≥ 1024px`

## ♿ 접근성

이 웹사이트는 WCAG 2.1 AA 기준을 준수합니다:

- 적절한 색상 대비 (최소 4.5:1)
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 의미있는 HTML 구조
- ARIA 레이블 사용
