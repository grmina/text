export interface ProjectDetailScreen {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

export interface DesignSpec {
  aspectRatio: string;
  resolution: string;
  targetPlatform: string;
  designSystemTokens: {
    name: string;
    value: string;
    color?: string;
  }[];
  keyFlows: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string; // e.g. "프로젝트 타이틀 1"
  projectTitleName: string; // e.g. "에픽 오리진 (Epic Origin)"
  category: string; // e.g. "모바일 RPG UI 리뉴얼"
  englishCategory: string; // e.g. "Mobile RPG UI Renewal"
  cardImage: string;
  detailHeroImage: string;
  period: string; // e.g. "2025.03 - 2025.07 (5개월)"
  contribution: string; // e.g. "UI 기획 및 디자인 100%, Unity UGUI 연동 80%"
  tools: string[]; // ['Figma', 'Photoshop', 'Unity UGUI', 'Spine 2D']
  overview: string;
  purpose: string; // 기획 의도
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  highlights: string[];
  screens: ProjectDetailScreen[];
  designSpec: DesignSpec;
  accentColor: string;
  badge: string;
}

export type CategoryFilter = 'all' | 'mobile' | 'pc' | 'casual' | 'fps' | 'subculture' | 'icon';
