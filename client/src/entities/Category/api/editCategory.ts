import { authorizedFetch } from "@/shared/utils";
import { ICategory } from "../types/types";

export const editCategory = async (category: ICategory) => {
  const result = await authorizedFetch("/api/category/edit", false, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  }).then((response) => response.status);

  return result;
};
