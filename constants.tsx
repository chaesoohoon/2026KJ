
import { RevenueData, CompetitorData } from './types';

// 2026년 공식 목표: 매출 22.3억, 순이익 6.6억, 총원 1,456명
export const GOALS_2026 = {
  REVENUE: 22.3,
  PROFIT: 6.6,
  TOTAL_STUDENTS: 1456,
  HIGH_SCHOOL_STUDENTS: 120 // 96 -> 120 수정
};

// 경쟁사 실적 데이터
export const MARKET_PERFORMANCE: CompetitorData[] = [
  { name: '국제첨단점(자사)', region: '첨단', mainField: '종합', revenue2025: 835590364, recruitment2025: 995, revenue2024: 0, recruitment2024: 0, achievement: 100 },
  { name: '그린광산점', region: '광산', mainField: 'IT/디자인', revenue2025: 642023080, recruitment2025: 818, revenue2024: 0, recruitment2024: 0, achievement: 80 },
  { name: '광주컴퓨터 기술학원', region: '광산', mainField: 'IT', revenue2025: 395182560, recruitment2025: 861, revenue2024: 0, recruitment2024: 0, achievement: 50 },
  { name: '한울전산세무 회계학원', region: '광산', mainField: '회계', revenue2025: 149418580, recruitment2025: 129, revenue2024: 0, recruitment2024: 0, achievement: 20 },
];

export const REVENUE_PLAN: RevenueData[] = [
  { category: '일반고', capacity: 150, rate: '80%', targetCount: 120, sessions: 6, rev2025: 66413, rev2026: 80640 }, // 120명 수정
  { category: '국기/장기', capacity: 150, rate: '64%', targetCount: 96, sessions: 10, rev2025: 55000, rev2026: 62000 }, // 96명 수정
  { category: '단기/일반', capacity: 1600, rate: '68%', targetCount: 1090, sessions: 100, rev2025: 56247, rev2026: 70360 }, // 총원 1,456 유지를 위한 조정
  { category: '외부사업', capacity: 150, rate: '100%', targetCount: 150, sessions: 15, rev2025: 5000, rev2026: 10000 },
];

export const TEACHER_GOALS = [
  { name: '강민기', role: '교사', field: '멀티미디어', m2025: 2354, m2026: 3500 },
  { name: '채수훈', role: '교사', field: 'AI특강', m2025: 1757, m2026: 3000 },
  { name: '염 숙', role: '교사', field: '회계', m2025: 1098, m2026: 3500 },
  { name: '최규남', role: '교사', field: '건축설계', m2025: 0, m2026: 3500 },
];
