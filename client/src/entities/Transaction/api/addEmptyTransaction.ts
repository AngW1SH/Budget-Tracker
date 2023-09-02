import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { ITransaction } from "..";

export const addEmptyTransaction = async (date: Date) => {
  const result: ITransaction = await authorizedFetch(
    "/api/insertemptytransaction/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.category
    ? result
    : { ...result, category: { id: "0", name: "" } };
};
