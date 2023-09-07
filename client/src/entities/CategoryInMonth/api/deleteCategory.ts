import { authorizedFetch } from "@/shared/utils";
import { ICategoryInMonth } from "../types/types";

export const deleteCategory = async (categoryInMonth: ICategoryInMonth) => {
  const result: number = await authorizedFetch(
    "/api/categoryinmonth/delete/" + categoryInMonth.id
  ).then((data) => data.status);

  return result;
};
