import { authorizedFetch } from "@/shared/utils";
import { ICategory } from "../types/types";

export const deleteCategory = async (category: ICategory) => {
  const result: number = await authorizedFetch(
    "/api/category/delete/" + category.id,
    false,
    { method: "DELETE" }
  ).then((data) => data.status);

  return result;
};
