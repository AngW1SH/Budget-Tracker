import { authorizedFetch } from "@/shared/utils";
import { ICategoryInDay } from "..";

export const editCategoryInDay = async (categoryInDay: ICategoryInDay) => {
  const result = await authorizedFetch("/api/editcategoryinday", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoryInDay: categoryInDay,
    }),
  }).then((response) => response.status);

  return result;
};
