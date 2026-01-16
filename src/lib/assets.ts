/**
 * [ ⚠️ 중요: 이미지를 영구적으로 고정하는 방법 ]
 * 
 * 아래 DEFAULT_IMAGES의 각 항목 따옴표("") 안에 본인의 이미지 주소를 직접 넣었습니다.
 * 여기에 주소를 직접 적어야만 브라우저를 청소하거나 기기를 바꿔도 이미지가 바뀌지 않습니다.
 */

export const DEFAULT_IMAGES: Record<string, string> = {
  // 1. 메인 화면 최상단 배경 이미지
  heroBackground: "https://wooban.co.kr/wp-content/uploads/2026/01/sss-1536x652.png",
  
  // 2. '우리 지역에서...' 섹션 (Philosophy) 이미지
  philosophy: "https://wooban.co.kr/wp-content/uploads/2026/01/unnamed.jpg",
  
  // 3. '특별한 3가지 약속' 섹션 이미지
  systemFeatures: "https://wooban.co.kr/wp-content/uploads/2026/01/%EA%B0%80%EA%B2%A9%EC%95%88%EB%82%B42_%EB%B3%B5%EC%82%AC%EB%B3%B8-_8_-004.png",
  
  // 4. 핵심 가치 카드 01 (지역의 연결)
  card1: "https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2070&auto=format&fit=crop", 
  
  // 5. 핵심 가치 카드 02 (검증된 만남)
  card2: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop", 
  
  // 6. 핵심 가치 카드 03 (프라이빗 매칭)
  card3: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  
  // 7. 진행 방식 1단계 (신청서 작성)
  processStep1: "https://wooban.co.kr/wp-content/uploads/2026/01/001.png",
  
  // 8. 진행 방식 2단계 (2차 설문)
  processStep2: "https://wooban.co.kr/wp-content/uploads/2026/01/002.png",
  
  // 9. 진행 방식 3단계 (카톡 상담)
  processStep3: "https://wooban.co.kr/wp-content/uploads/2026/01/003.png",
  
  // 10. 진행 방식 4단계 (매칭/차단)
  processStep4: "https://wooban.co.kr/wp-content/uploads/2026/01/004.png",
  
  // 11. 진행 방식 5단계 (프로필 제공)
  processStep5: "https://wooban.co.kr/wp-content/uploads/2026/01/005.png",
  
  // 12. 진행 방식 6단계 (만남 확정)
  processStep6: "https://wooban.co.kr/wp-content/uploads/2026/01/006.png",
  
  // 13. 진행 방식 7단계 (피드백)
  processStep7: "https://wooban.co.kr/wp-content/uploads/2026/01/007.png",
  
  // 14. 푸터 하단 텍스처 이미지
  footerTexture: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
};

// --- 관리 로직 (수정하지 마세요) ---

let cachedCustomImages: Record<string, string> = {};

export const refreshAssets = () => {
    try {
        const stored = localStorage.getItem('EUM_CUSTOM_IMAGES');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed === 'object') {
                cachedCustomImages = { ...parsed };
            }
        }
    } catch (e) {
        cachedCustomImages = {};
    }
};

refreshAssets();

export const IMAGES = new Proxy(DEFAULT_IMAGES, {
  get: (target, prop: string | symbol) => {
    if (typeof prop === 'string') {
        const customValue = cachedCustomImages[prop];
        if (customValue && typeof customValue === 'string' && customValue.trim() !== '') {
            return customValue;
        }
        return target[prop as keyof typeof DEFAULT_IMAGES];
    }
    return undefined;
  }
});

export type ImageKey = keyof typeof DEFAULT_IMAGES;
export const getImageKeys = () => Object.keys(DEFAULT_IMAGES) as ImageKey[];