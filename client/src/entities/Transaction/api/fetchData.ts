import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { ITransaction } from "..";

export const fetchTransactions = async (date: Date) => {
  const result: ITransaction[] = await authorizedFetch(
    "/api/transactions/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.map(
    (category) =>
      category.category
        ? category
        : { ...category, category: { id: "0", name: " " } }
    // The logic for handling new categories will be on the backend, so we don't really care here
  );
};
