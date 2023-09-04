export interface ITransaction {
  id: string;
  type: "expense" | "income";
  category: ITransactionInner;
  subcategory: string;
  value: number;
  description: string;
}

export interface ITransactionInner {
  id: string;
  name: string;
}

export type RootState = {
  transactions: ITransaction[];
};
