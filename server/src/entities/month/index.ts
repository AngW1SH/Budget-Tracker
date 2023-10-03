export interface IMonth {
  id: string;
  date: Date;
  goal: number;
  spent: number;
}

export interface IMonthDTO {
  id: string;
  date: string;
  goal: number;
  spent: number;
}
