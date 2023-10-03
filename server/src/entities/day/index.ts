import { ITransaction } from "@/entities/transaction";

export interface IDayDTO {
  id: string;
  categories: ITransaction[];
  userId: string;
  date: Date;
}

export interface IDay {
  id: string;
  categories: ITransaction[];
  userId: string;
  date: string;
  active: boolean;
}

export interface IDayShort {
  id: string;
  date: Date;
}
