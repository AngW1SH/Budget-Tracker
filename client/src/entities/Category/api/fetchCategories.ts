import { authorizedFetch } from "@/shared/utils";
import { ICategory } from "../types/types";

export const fetchCategories = async () => {
  const result: ICategory[] = await authorizedFetch("/api/category/all").then(
    (data) => data.json()
  );

  return result;
};
