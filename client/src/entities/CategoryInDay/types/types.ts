export interface ICategoryInDay {
  id: string;
  category: ICategoryInDayInner;
  subcategory?: string;
  value: number;
}

export interface ICategoryInDayInner {
  name: string;
}

export type RootState = {
  categories: ICategoryInDay[];
};
