import { defineStore } from "pinia";
import { ITransaction, RootState } from "../types/types";
import { fetchTransactions } from "../api/fetchData";
import { addEmptyTransaction } from "../api/addEmptyTransaction";
import { deleteCategory } from "../api/deleteTransaction";
import { editTransaction } from "../api/editTransaction";

export const useTransactionStore = defineStore("Transaction", {
  state: () => {
    return {
      transactions: [],
    } as RootState;
  },

  actions: {
    async getData(date: Date) {
      const data = await fetchTransactions(date);

      this.transactions = data;
    },

    async editCategory(edited: ITransaction) {
      editTransaction(edited);
      this.transactions = this.transactions.map((category) =>
        category.id == edited.id ? edited : category
      );
    },

    async removeCategory(data: ITransaction) {
      deleteCategory(data);
      this.transactions = this.transactions.filter(
        (category) => category.id != data.id
      );
    },

    async addEmptyCategory(date: Date) {
      const newCategory = await addEmptyTransaction(date);

      this.transactions = [...this.transactions, newCategory];
    },
  },
});
