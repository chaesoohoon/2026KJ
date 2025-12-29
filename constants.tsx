
import { RevenueData, CompetitorData } from './types';

// 2026년 공식 목표: 매출 22.36억(223,600만원), 순이익 6억
export const GOALS_2026 = {
  REVENUE: 22.36,
  PROFIT: 6.0,
  TOTAL_STUDENTS: 2432, // 모집인원 합계
  HIGH_SCHOOL_STUDENTS: 120 
};

// 원고 기반 경쟁기관 분석 데이터
export const MARKET_PERFORMANCE: CompetitorData[] = [
  { name: '광산그린컴퓨터아트학원', region: '광산', mainField: '건축/디자인', revenue2025: 0, recruitment2025: 0, revenue2024: 0, recruitment2024: 0, achievement: 0 },
  { name: '광주컴퓨터기술학원', region: '광산', mainField: '정보처리/단기실무', revenue2025: 0, recruitment2025: 0, revenue2024: 0, recruitment2024: 0, achievement: 0 },
  { name: '한울전산세무회계학원', region: '광산', mainField: '회계/사무', revenue2025: 0, recruitment2025: 0, revenue2024: 0, recruitment2024: 0, achievement: 0 },
];

export const REVENUE_PLAN: RevenueData[] = [
  { category: '일반고', capacity: 174, rate: '70%', targetCount: 120, sessions: 6, rev2025: 66413, rev2026: 100798 },
  { category: '장기과정', capacity: 148, rate: '60%', targetCount: 60, sessions: 5, rev2025: 25339, rev2026: 41121 },
  { category: '단기과정', capacity: 500, rate: '60%', targetCount: 400, sessions: 60, rev2025: 56247, rev2026: 71681 },
  { category: '외부사업', capacity: 210, rate: '100%', targetCount: 210, sessions: 12, rev2025: 5000, rev2026: 10000 },
];
