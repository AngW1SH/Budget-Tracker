import { authorizedFetch } from "@/shared/utils";
import { ICategory } from "../types/types";

export const addEmptyCategory = async () => {
  const result: ICategory = await authorizedFetch("/api/category/add", false, {
    method: "POST",
  }).then((data) => data.json());

  return result;
};
