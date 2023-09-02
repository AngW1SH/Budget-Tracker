import { authorizedFetch } from "@/shared/utils";
import { ITransaction } from "..";

export const deleteCategory = async (Transaction: ITransaction) => {
  const result: number = await authorizedFetch(
    "/api/deletetransaction/" + Transaction.id
  ).then((data) => data.status);

  return result;
};
