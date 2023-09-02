export interface IDayInMonth {
  id: string;
  date: string;
}

export type MonthWithData = WeekWithData[];

export type WeekWithData = DayWithData[];

export type DayWithData = {
  value: string | null;
  data: IDayInMonth | null;
};
