import type {
  ITransaction,
  ITransactionInner,
  RootState,
  ITransactionWithDay,
} from "./types";

import { staticTransactions, staticTransactionsWithDays } from "./static";

export type { ITransaction, ITransactionInner, RootState, ITransactionWithDay };
export { staticTransactions, staticTransactionsWithDays };
