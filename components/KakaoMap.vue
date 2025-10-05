<template>
  <div ref="mapContainer" class="kakao-map"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mapContainer = ref(null)
const config = useRuntimeConfig()

// 카카오맵 스크립트 로드
useHead({
  script: [
    {
      src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${config.public.kakaoMapKey}&autoload=false&libraries=services`,
      defer: true
    }
  ]
})

onMounted(() => {
  if (process.client) {
    loadKakaoMap()
  }
})

const loadKakaoMap = () => {
  // 카카오맵 로딩 대기
  const checkKakao = setInterval(() => {
    if (window.kakao && window.kakao.maps) {
      clearInterval(checkKakao)
      initMap()
    }
  }, 100)
}

const initMap = () => {
  window.kakao.maps.load(() => {
    const geocoder = new window.kakao.maps.services.Geocoder()
    
    // 주소로 좌표 검색
    geocoder.addressSearch('경남 김해시 분성로272번길 2-10', (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)
        
        // 지도 옵션
        const mapOption = {
          center: coords,
          level: 3 // 확대 레벨 (숫자가 작을수록 더 확대됨)
        }
        
        // 지도 생성
        const map = new window.kakao.maps.Map(mapContainer.value, mapOption)
        
        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: coords,
          map: map
        })
        
        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:8px 12px;font-size:14px;font-weight:600;white-space:nowrap;">행복한 재가노인요양원</div>',
          removable: false
        })
        
        // 인포윈도우 표시
        infowindow.open(map, marker)
        
        // 줌 컨트롤 추가 (우측에 +/- 버튼)
        const zoomControl = new window.kakao.maps.ZoomControl()
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
      }
    })
  })
}
</script>

<style scoped>
.kakao-map {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
}

@media (min-width: 768px) {
  .kakao-map {
    height: 500px;
  }
}
</style>
