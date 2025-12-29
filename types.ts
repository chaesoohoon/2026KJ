
export interface RevenueData {
  category: string;
  capacity: number;
  rate: string;
  targetCount: number;
  sessions: number;
  rev2025: number;
  rev2026: number;
}

export interface OccupationalGoal {
  name: string;
  type: string;
  targetCount: number;
  targetRevenue: number;
  prevGoalCount: number;
  prevGoalRevenue: number;
  prevActualCount: number;
  prevActualRevenue: number;
}

export interface CompetitorData {
  name: string;
  region: string;
  mainField: string;
  revenue2025: number;
  recruitment2025: number;
  revenue2024: number;
  recruitment2024: number;
  achievement: number;
}
