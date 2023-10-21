import { IDayShort } from "@/entities/day";

export interface ITransaction {
  id: string;
  type: string; //"expense" | "income";
  category: ITransactionInner | null;
  subcategory: string | null;
  value: number;
  description: string;
  dayId: string;
}

export interface ITransactionInner {
  id: string;
  name: string;
}

export type RootState = {
  transactions: ITransaction[];
};

export interface ITransactionWithDay {
  id: string;
  type: string; //"expense" | "income";
  category: ITransactionInner | null;
  subcategory: string | null;
  value: number;
  description: string;
  day: IDayShort;
  dayId: string;
}
