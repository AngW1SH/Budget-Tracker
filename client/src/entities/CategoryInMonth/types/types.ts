export interface ICategoryInMonth {
  id: string;
  category: ICategoryInMonthInner;
  goal: number;
  readonly spent: number;
  description: string;
}

export interface ICategoryInMonthInner {
  id: string;
  name: string;
}
