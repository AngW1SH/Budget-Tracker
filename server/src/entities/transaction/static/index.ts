import { ITransaction, ITransactionWithDay } from "..";

export const staticTransactions: ITransaction[] = [
  {
    id: "1",
    type: "expense",
    category: {
      id: "1",
      name: "Food",
    },
    subcategory: "Lenta",
    value: 2000,
    description: "Spent a bunch",
  },
  {
    id: "2",
    type: "expense",
    category: {
      id: "2",
      name: "Tech",
    },
    subcategory: "Ozon",
    value: 599,
    description: "Bought a mousepad",
  },
  {
    id: "3",
    type: "income",
    category: {
      id: "3",
      name: "Salary",
    },
    subcategory: "",
    value: 10,
    description: "",
  },
];

export const staticTransactionsWithDays: ITransactionWithDay[] = [
  {
    id: "1",
    type: "expense",
    category: {
      id: "1",
      name: "Food",
    },
    subcategory: "Lenta",
    day: {
      id: "1",
      date: new Date("2023-10-05"),
    },
    dayId: "1",
    value: 2000,
    description: "Spent a bunch",
  },
  {
    id: "2",
    type: "expense",
    category: {
      id: "2",
      name: "Tech",
    },
    day: {
      id: "1",
      date: new Date("2023-10-05"),
    },
    dayId: "1",
    subcategory: "Ozon",
    value: 599,
    description: "Bought a mousepad",
  },
  {
    id: "3",
    type: "income",
    category: {
      id: "3",
      name: "Salary",
    },
    day: {
      id: "2",
      date: new Date("2023-10-06"),
    },
    dayId: "2",
    subcategory: "",
    value: 10,
    description: "",
  },
];
