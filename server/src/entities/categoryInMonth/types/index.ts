export interface CategoryInMonth {
  id: string;
  category: CategoryInMonthInner | null;
  goal: number | null;
  readonly spent: number;
  description: string;
}

export interface CategoryInMonthInner {
  id: string;
  name: string;
}

export type CategoryInMonthToCreate = Omit<CategoryInMonth, "id">;
