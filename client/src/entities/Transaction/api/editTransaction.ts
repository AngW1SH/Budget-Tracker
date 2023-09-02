import { authorizedFetch } from "@/shared/utils";
import { ITransaction } from "..";

export const editTransaction = async (Transaction: ITransaction) => {
  const result = await authorizedFetch("/api/edittransaction", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Transaction: Transaction,
    }),
  }).then((response) => response.status);

  return result;
};
