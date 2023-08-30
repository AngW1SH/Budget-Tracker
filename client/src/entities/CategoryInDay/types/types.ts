export interface ICategoryInDay {
  id: string;
  category: ICategoryInDayInner;
  subcategory: string;
  value: number;
  description: string;
}

export interface ICategoryInDayInner {
  id: string;
  name: string;
}

export type RootState = {
  categories: ICategoryInDay[];
};
