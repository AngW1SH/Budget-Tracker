import { authorizedFetch } from "@/shared/utils";
import { ITransaction } from "..";

export const editTransaction = async (transaction: ITransaction) => {
  const result = await authorizedFetch("/api/transaction/edit", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      transaction: transaction,
    }),
  }).then((response) => response.status);

  return result;
};
