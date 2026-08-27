import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    slug: 'mobile-rpg-renewal',
    title: '프로젝트 타이틀 1',
    projectTitleName: '에픽 오리진 (Epic Origin)',
    category: '모바일 RPG UI 리뉴얼',
    englishCategory: 'Mobile RPG UI Renewal',
    cardImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85',
    period: '2025.03 - 2025.07 (5개월)',
    contribution: 'UI 기획 및 디자인 100%, 그래픽 리소스 100%, Unity UGUI 프리팹 80%',
    tools: ['Figma', 'Photoshop', 'Unity UGUI', 'Spine 2D'],
    badge: 'Mobile / RPG',
    accentColor: '#6366f1',
    overview: '출시 3년 차 모바일 턴제 수집형 RPG의 메인 로비, 영웅 성장 화면 및 전투 HUD를 전면 개편하여 유저 사용성과 정보 인지 속도를 대폭 개선한 프로젝트입니다.',
    purpose: '노후화된 UI 뎁스를 축소하여 핵심 콘텐츠(전투, 성장, 장비 합성)로의 진입 경로를 3클릭 이내로 단축하고, 모바일 한 손 파지 환경(Thumb Zone)에 최적화된 하단 내비게이션 독(Dock)을 구현하고자 했습니다.',
    challengesAndSolutions: [
      {
        challenge: '영웅 수 증가로 인한 룬/장비 교체 화면의 극심한 스크롤 피로도 및 탭 과다',
        solution: '장비 슬롯 프리셋 일괄 교체 시스템 및 필터링/정렬 다이얼로그의 모달 바텀시트화로 동선 40% 단축'
      },
      {
        challenge: '복잡한 버프/디버프 상태이상 20종 이상 중첩 시 전투 시인성 저하',
        solution: '중요 상태이상 우선순위 알고리즘 적용 및 터치 시 팝오버 상세 툴팁 노출 UI 도입'
      }
    ],
    highlights: [
      'Thumb Zone 중심의 하단 곡선 독(Dock) 인터랙션 바 설계',
      '전투 중 행동 순서(Action Order) 타임라인 바 가독성 강화',
      '9-슬라이스(9-Slice) 확장 버튼 및 텍스처 아틀라스 최적화(메모리 28% 절감)',
      '다크 판타지 골드 프레임과 현대적인 플랫 UI의 균형 잡힌 아트워크'
    ],
    designSpec: {
      aspectRatio: '19.5 : 9 (Mobile Portrait & Landscape)',
      resolution: '2778 x 1284 px (Figma Base: 844 x 390)',
      targetPlatform: 'iOS / Android',
      designSystemTokens: [
        { name: 'Primary Gold', value: '#F59E0B', color: '#F59E0B' },
        { name: 'Arcane Blue', value: '#6366F1', color: '#6366F1' },
        { name: 'Dark Slate BG', value: '#0F172A', color: '#0F172A' },
        { name: 'HP Danger Red', value: '#EF4444', color: '#EF4444' }
      ],
      keyFlows: ['로비 → 파티 편성 → 던전 입장 → 턴제 전투 HUD → 승리 보상 정산']
    },
    screens: [
      {
        id: 's1',
        title: '전투 인터페이스 (Battle HUD)',
        description: '파티원 4인의 상태와 스킬 쿨타임, 버프 상태를 한눈에 파악할 수 있는 인게임 뷰',
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
        tag: 'In-Game HUD'
      },
      {
        id: 's2',
        title: '영웅 성장 및 장비 관리 윈도우',
        description: '능력치 레이더 차트, 각성 단계, 스킬 레벨업을 직관적으로 조작하는 성장 대시보드',
        imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
        tag: 'Character UI'
      },
      {
        id: 's3',
        title: '승리 보상 및 MVP 정산 연출',
        description: '획득 아이템 등급별 림라이트 이펙트 및 레벨업 축하 인터랙션',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        tag: 'Result Screen'
      }
    ]
  },
  {
    id: 2,
    slug: 'pc-mmorpg-hud',
    title: '프로젝트 타이틀 2',
    projectTitleName: '크로노스 아크 (Chronos Ark)',
    category: 'PC MMORPG HUD 및 시스템 창 디자인',
    englishCategory: 'PC MMORPG HUD Design',
    cardImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=85',
    period: '2024.08 - 2024.12 (5개월)',
    contribution: 'HUD 레이아웃 기획 100%, 시스템 창 윈도우 100%, UMG 위젯 연동 90%',
    tools: ['Figma', 'Photoshop', 'Unreal Engine UMG', 'Illustrator'],
    badge: 'PC / MMORPG',
    accentColor: '#3b82f6',
    overview: '4K 고해상도 및 21:9 울트라와이드 모니터를 지원하는 차세대 PC MMORPG의 전투 HUD, 인벤토리, 스킬트리 및 미니맵 시스템 디자인입니다.',
    purpose: '레이드 및 대규모 공성전 시 화면 가림을 최소화하고, 플레이어가 커스터마이징할 수 있는 모듈러 HUD 위젯 아키텍처를 수립했습니다.',
    challengesAndSolutions: [
      {
        challenge: '모니터 비율(16:9, 16:10, 21:9)에 따른 위젯 앵커링 깨짐 및 4K DPI 스케일링 이슈',
        solution: '언리얼 UMG DPI 커브 가이드라인 및 비율별 안전 영역(Safe Zone) 앵커 프리셋 확립'
      },
      {
        challenge: '인벤토리 내 수백 개의 아이템 수납 시 렉 없는 렌더링 및 등급 식별',
        solution: '아이템 등급별 4단계 보더 프레임 쉐이더와 툴팁 실시간 능력치 비교(Diff) UI 개발'
      }
    ],
    highlights: [
      '스킬 쿨다운 원형 게이지 스윕(Sweep) 애니메이션 & 콤보 버스트 피드백',
      '드래그 앤 드롭 자유 배치 및 HUD 스케일 조정(80%~120%) 기능',
      '미니맵 입체 레이어(고저차 표시) 및 퀘스트 추적기(Tracker) 통합',
      '고급스러운 다크 메탈릭 브러시 텍스처와 사파이어 블루 악센트'
    ],
    designSpec: {
      aspectRatio: '16:9 & 21:9 (PC Wide)',
      resolution: '3840 x 2160 (4K UHD) / 2560 x 1440 (QHD)',
      targetPlatform: 'PC (Steam / Windows)',
      designSystemTokens: [
        { name: 'Metallic Dark', value: '#131822', color: '#131822' },
        { name: 'Mana Blue', value: '#3B82F6', color: '#3B82F6' },
        { name: 'Raid Orange', value: '#F97316', color: '#F97316' },
        { name: 'Legendary Gold', value: '#EAB308', color: '#EAB308' }
      ],
      keyFlows: ['전투 HUD → 퀵슬롯 단축키 조작 → 인벤토리 루팅 → 장비 스펙 비교 → 파티 레이드 보드']
    },
    screens: [
      {
        id: 's1',
        title: '메인 전투 HUD 및 퀵슬롯 바',
        description: '스킬 단축키, 체력/마나 게이지, 타겟 프레임 및 버프창이 배치된 전투 화면',
        imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80',
        tag: 'Combat HUD'
      },
      {
        id: 's2',
        title: '모듈형 인벤토리 & 장비 장착창',
        description: '무기/방어구 슬롯 및 가방 탭, 빠른 분해 및 자동 정렬 기능을 갖춘 시스템 창',
        imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80',
        tag: 'Inventory Window'
      }
    ]
  },
  {
    id: 3,
    slug: 'casual-survival-gui',
    title: '프로젝트 타이틀 3',
    projectTitleName: '픽셀 아일랜드 서바이버 (Pixel Island)',
    category: '캐주얼 서바이벌 게임 GUI',
    englishCategory: 'Casual Game GUI',
    cardImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    period: '2024.03 - 2024.06 (4개월)',
    contribution: '전체 GUI 비주얼 100%, UI 모션 가이드 100%, 폰트 타이포그래피 100%',
    tools: ['Illustrator', 'Photoshop', 'Unity 2D', 'After Effects'],
    badge: 'Mobile / Casual',
    accentColor: '#10b981',
    overview: '통통 튀는 캐주얼 로그라이트 서바이벌 게임의 전반적인 GUI 키 비주얼, 레벨업 카드 선택 팝업, 상점 및 전투 HUD를 구축했습니다.',
    purpose: '남녀노소 누구나 즉각적으로 룰을 인지할 수 있는 직관적인 심볼과 둥글고 생동감 넘치는 젤리 스타일 버튼 인터랙션을 구현했습니다.',
    challengesAndSolutions: [
      {
        challenge: '화면에 수백 마리의 몬스터가 등장할 때 UI 요소가 전투 흐름을 방해하지 않도록 처리',
        solution: '상단 EXP 바와 킬 카운터의 반투명 오버레이 처리 및 위급 시(HP 저하) 비네팅 경고 연출'
      },
      {
        challenge: '레벨업 카드 선택 시의 보상 감정 극대화',
        solution: '티어별(Common/Rare/Epic) 카드 반짝임 쉐이더 및 바운스 인터랙션 설계'
      }
    ],
    highlights: [
      '비비드한 파스텔 젤리 버튼 & 두꺼운 아웃라인 캐주얼 스타일',
      '레벨업 3지선다 카드 선택 UX 및 무기 합성 트리 시각화',
      '골드/보석 획득 파티클 애니메이션 모션 가이드 제작',
      '글로벌 원빌드 대응을 위한 다국어(한국어, 영어, 일본어, 중국어) 텍스트 박스 가변폭 설계'
    ],
    designSpec: {
      aspectRatio: '9:16 (Portrait Mobile)',
      resolution: '1080 x 1920 px',
      targetPlatform: 'Mobile (iOS / Android)',
      designSystemTokens: [
        { name: 'Juicy Emerald', value: '#10B981', color: '#10B981' },
        { name: 'Sunny Gold', value: '#FBBF24', color: '#FBBF24' },
        { name: 'Candy Pink', value: '#F43F5E', color: '#F43F5E' },
        { name: 'Sky Cyan', value: '#06B6D4', color: '#06B6D4' }
      ],
      keyFlows: ['메인 스타트 → 서바이벌 인게임 → 레벨업 카드 선택 → 보스 출현 경고 → 게임오버 / 결산']
    },
    screens: [
      {
        id: 's1',
        title: '레벨업 3지선다 카드 선택 팝업',
        description: '스킬 획득 및 진화 트리를 직관적으로 선택할 수 있는 팝업 모달',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        tag: 'Level Up Modal'
      },
      {
        id: 's2',
        title: '재화 상점 및 무기 합성 인벤토리',
        description: '일일 패키지 구매 및 무기 융합 시각 연출 화면',
        imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
        tag: 'Shop & Merge UI'
      }
    ]
  },
  {
    id: 4,
    slug: 'scifi-fps-concept',
    title: '프로젝트 타이틀 4',
    projectTitleName: '네뷸라 스트라이크 (Nebula Strike)',
    category: 'SF FPS Crosshair & 로비 UI',
    englishCategory: 'Sci-Fi FPS UI Concept',
    cardImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=85',
    period: '2023.09 - 2024.01 (5개월)',
    contribution: '크로스헤어 다이내믹 피드백 100%, 매치 로비 100%, 바이저 HUD 90%',
    tools: ['Figma', 'Photoshop', 'After Effects', 'Unreal Engine 5'],
    badge: 'PC / Console / FPS',
    accentColor: '#06b6d4',
    overview: '사이버펑크 미래 전장을 무대로 하는 택티컬 SF FPS 게임의 다이내믹 크로스헤어, 헬멧 바이저 HUD, 3D 매치메이킹 로비 콘셉트 디자인입니다.',
    purpose: '총기 반동, 집탄율, 탄약 잔여량 및 피격 방향 정보를 0.1초 내에 플레이어에게 직관적으로 전달하는 하이테크 HUD를 설계했습니다.',
    challengesAndSolutions: [
      {
        challenge: '밝은 배경(설원, 사막)과 어두운 배경(우주선 내부) 모두에서 크로스헤어 시인성 확보',
        solution: '스마트 다이내믹 아웃라인(외곽선 자동 대비 반전) 및 네온 시안/앰버 듀얼 컬러 모드 적용'
      },
      {
        challenge: '총기 커스터마이징 화면에서의 복잡한 파츠 스펙 수치 전달',
        solution: '3D 무기 모델 주위에 홀로그램 위젯 형태로 부착되는 인터랙티브 노드 UI 설계'
      }
    ],
    highlights: [
      '사격/전력질주/조준(ADS)/장전 상태별 실시간 가변 레티클(Reticle)',
      '곡면 헬멧 바이저(Curved Visor) 원근감 왜곡 셰이더 적용 HUD',
      '팀원 생체 신호(Vitality) 및 탄약 실시간 브로드캐스팅 패널',
      '네온 사이언 글로우 및 하이테크 그리드 인포그래픽스'
    ],
    designSpec: {
      aspectRatio: '16:9 (PC / Console)',
      resolution: '2560 x 1440 (QHD) / 1920 x 1080 (FHD)',
      targetPlatform: 'PC / PS5 / Xbox Series X',
      designSystemTokens: [
        { name: 'Neon Cyber Cyan', value: '#06B6D4', color: '#06B6D4' },
        { name: 'Warning Amber', value: '#F59E0B', color: '#F59E0B' },
        { name: 'Void Black', value: '#050B14', color: '#050B14' },
        { name: 'Shield Teal', value: '#14B8A6', color: '#14B8A6' }
      ],
      keyFlows: ['메인 로비 → 무기 무기고(Gunsmith) → 매치 큐 → 전투 바이저 HUD → 킬캠/결과']
    },
    screens: [
      {
        id: 's1',
        title: '다이내믹 크로스헤어 및 전술 바이저 HUD',
        description: '탄약 카운터, 나침반 헤딩, 피격 인디케이터 및 히트마커가 포함된 전투 화면',
        imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80',
        tag: 'Tactical Visor HUD'
      },
      {
        id: 's2',
        title: '3D 홀로그램 무기 개조(Gunsmith) 화면',
        description: '총기 파츠(스코프, 소음기, 탄창) 장착에 따른 반동/사거리 변화 실시간 그래프',
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
        tag: 'Gunsmith Mod UI'
      }
    ]
  },
  {
    id: 5,
    slug: 'anime-shop-ui',
    title: '프로젝트 타이틀 5',
    projectTitleName: '스텔라 메모리즈 (Stella Memories)',
    category: '서브컬처 수집형 RPG 상점 UI',
    englishCategory: 'Anime Style Shop UI',
    cardImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=85',
    period: '2023.04 - 2023.08 (5개월)',
    contribution: '가챠/상점 UI 연출 100%, 배너 템플릿 100%, 재화 흐름 UX 100%',
    tools: ['Figma', 'Photoshop', 'Spine 2D', 'Clip Studio'],
    badge: 'Mobile / Subculture',
    accentColor: '#ec4899',
    overview: '미소녀 수집형 서브컬처 RPG의 픽업 가챠(소환), 스텝업 패키지, 마일리지 상점 및 한정 이벤트 상품 UI 디자인입니다.',
    purpose: '캐릭터의 매력을 극대화하는 풀스크린 2.5D 일러스트 인터랙션과 소환 시의 긴장감 및 쾌감을 극대화하는 UX 연출을 목표로 제작했습니다.',
    challengesAndSolutions: [
      {
        challenge: '천장(Pity) 시스템 및 확률 공개 규제 준수와 화려한 비주얼 연출의 조화',
        solution: '소환 버튼 상단 천장 잔여 카운트 고정 및 원클릭 확률표 모달 팝업 가이드 표준화'
      },
      {
        challenge: '다양한 이벤트 배너 교체 시 UI 깨짐 및 그래픽 디자이너 작업 효율성',
        solution: 'Figma 오토레이아웃 기반 모듈형 배너 템플릿 컴포넌트 12종 제작'
      }
    ],
    highlights: [
      'SSR/UR 확정 연출 시의 황금빛 무지개 화면 전환 이펙트 가이드',
      '1회 소환 / 10회 연속 소환 버튼의 시각적 위계 및 재화 소모 명확화',
      '상점 카테고리(일반, 패키지, 스킨, 마일리지) 탭 인터랙션',
      '파스텔 핑크/바이올렛 그라데이션과 세련된 글래스모피즘 라이트 프레임'
    ],
    designSpec: {
      aspectRatio: '16:9 & 19.5:9 (Landscape Mobile)',
      resolution: '2436 x 1125 px',
      targetPlatform: 'Mobile (iOS / Android)',
      designSystemTokens: [
        { name: 'Starlight Pink', value: '#EC4899', color: '#EC4899' },
        { name: 'Cosmic Violet', value: '#8B5CF6', color: '#8B5CF6' },
        { name: 'Lustrous Gold', value: '#FCD34D', color: '#FCD34D' },
        { name: 'Deep Space Navy', value: '#1E1B4B', color: '#1E1B4B' }
      ],
      keyFlows: ['메인 로비 → 소환 배너 선택 → 10연차 소환 → SSR 연출 → 소환 결과창 → 마일리지 교환']
    },
    screens: [
      {
        id: 's1',
        title: '픽업 한정 소환(가챠) 메인 화면',
        description: '캐릭터 라이브 일러스트, 픽업 잔여 기간, 천장 카운트 및 10회 소환 버튼 인터페이스',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80',
        tag: 'Gacha Summon View'
      },
      {
        id: 's2',
        title: '시즌 한정 패키지 & 스킨 샵',
        description: '스킨 미리보기 3D 턴테이블 모드 및 패키지 구성품 툴팁 윈도우',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        tag: 'Package Shop'
      }
    ]
  },
  {
    id: 6,
    slug: 'dark-fantasy-icons',
    title: '프로젝트 타이틀 6',
    projectTitleName: '섀도우 렐름 아이콘 킷 (Shadow Realm)',
    category: '다크 판타지 UI 아이콘 세트',
    englishCategory: 'Dark Fantasy Icon Kit',
    cardImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    detailHeroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    period: '2023.01 - 2023.03 (3개월)',
    contribution: '아이콘 렌더링 100%, 등급별 프레임 시스템 100%, 에셋 패킹 100%',
    tools: ['Photoshop', 'Procreate', 'Illustrator', 'Figma'],
    badge: 'Assets / Icon Kit',
    accentColor: '#a855f7',
    overview: '정통 다크 판타지 RPG에 최적화된 마법 스킬, 전설 무기/방어구, 소모품 및 버프/디버프 아이콘 총 120종의 핸드페인팅 에셋 패키지입니다.',
    purpose: '어두운 배경에서도 각 아이콘의 실루엣과 속성(화염, 냉기, 번개, 암흑, 신성)이 한눈에 각인되도록 높은 대비와 디테일한 질감을 살렸습니다.',
    challengesAndSolutions: [
      {
        challenge: '64x64px 등 소형 해상도로 축소 시 복잡한 텍스처가 뭉개지는 현상',
        solution: '주요 실루엣 강조 및 핵심 하이라이트 레이어 분리 처리로 스케일별 가독성 보정'
      },
      {
        challenge: '아이템 등급(일반/고급/희귀/전설) 구분의 통일성 확보',
        solution: '4종의 메탈릭 보석 프레임 규격 및 모서리 룬 인그레이빙 디자인 시스템 정립'
      }
    ],
    highlights: [
      '스킬 40종, 장비 40종, 포션/재료 20종, 상태이상 20종 (총 120종)',
      '1024x1024px 원본 PSD 레이어 분리 에셋 및 Unity/Unreal 최적화 스프라이트 시트',
      '속성별(Fire, Frost, Lightning, Shadow, Holy) 통일된 광원 및 반사광 처리',
      '고급스러운 주물 금속 테두리와 마법 룬 각인 프레임'
    ],
    designSpec: {
      aspectRatio: '1:1 (Square Icons) & 4:3 Sheet',
      resolution: '1024 x 1024 px (Master) / 256, 128, 64 px Export',
      targetPlatform: 'Cross-Platform (PC / Mobile / Console)',
      designSystemTokens: [
        { name: 'Shadow Purple', value: '#A855F7', color: '#A855F7' },
        { name: 'Blood Crimson', value: '#DC2626', color: '#DC2626' },
        { name: 'Runed Gold', value: '#CA8A04', color: '#CA8A04' },
        { name: 'Frost Cyan', value: '#38BDF8', color: '#38BDF8' }
      ],
      keyFlows: ['스킬북 열람 → 룬 장착 → 핫키 슬롯 드래그 → 버프 발동 이펙트 피드백']
    },
    screens: [
      {
        id: 's1',
        title: '마법 원소 및 물리 스킬 아이콘 세트 (40종)',
        description: '화염구, 서리폭풍, 뇌전격, 암흑수확, 신성방벽 등 고밀도 이펙트 아이콘',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
        tag: 'Skill Icon Sheet'
      },
      {
        id: 's2',
        title: '전설 장비 및 아티팩트 보석 프레임 (40종)',
        description: '강화 단계별 이펙트 글로우 및 티어별 프레임 프리셋',
        imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80',
        tag: 'Equipment Frame Kit'
      }
    ]
  }
];

export const DESIGNER_INFO = {
  name: '홍길동',
  role: 'Game UI / UX Designer',
  email: 'gildong.design@example.com',
  location: 'Seoul, Republic of Korea',
  experience: '6+ Years in Game Industry',
  bio: '플레이어의 몰입감을 극대화하는 게임 UI/UX 디자인을 연구합니다. 모바일 RPG부터 4K PC MMORPG, 택티컬 FPS까지 플랫폼과 장르에 구애받지 않고 탄탄한 디자인 시스템과 유려한 인터랙션을 설계합니다.',
  skills: [
    { name: 'Figma', level: 'Expert', desc: '디자인 시스템, 컴포넌트, 인터랙티브 프로토타이핑' },
    { name: 'Adobe Photoshop', level: 'Expert', desc: '게임 UI 텍스처 렌더링, 2D 에셋 제작, 아이콘 드로잉' },
    { name: 'Unity UGUI', level: 'Advanced', desc: '캔버스 레이아웃, 9-슬라이스, 애니메이션, 프리팹 구성' },
    { name: 'Unreal UMG', level: 'Intermediate', desc: '위젯 블루프린트, DPI 스케일링, 바인딩' },
    { name: 'Spine 2D', level: 'Intermediate', desc: 'UI 모션 이펙트, 캐릭터 팝업 연출' },
    { name: 'Illustrator', level: 'Advanced', desc: '벡터 심볼, 로고, 인포그래픽스' }
  ],
  awards: [
    '2024 Korea Game Awards UI/UX Design Excellence Mention',
    'Unity Game Interface Showcase Featured Designer'
  ]
};
