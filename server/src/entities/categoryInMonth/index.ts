export interface ICategoryInMonth {
  id: string;
  category: ICategoryInMonthInner | null;
  goal: number | null;
  readonly spent: number;
  description: string;
}

export interface ICategoryInMonthInner {
  id: string;
  name: string;
}
