import { authorizedFetch } from "@/shared/utils";
import { ICategoryInMonth } from "../types/types";

export const editCategory = async (categoryInMonth: ICategoryInMonth) => {
  const result = await authorizedFetch("/api/categoryinmonth/edit", false, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoryInMonth: categoryInMonth,
    }),
  }).then((response) => response.status);

  return result;
};
