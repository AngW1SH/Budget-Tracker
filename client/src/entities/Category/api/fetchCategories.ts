import { ICategory } from "../types/types";

export const fetchCategories = async () => {
  const result: ICategory[] = await fetch("/api/categories").then((data) =>
    data.json()
  );

  return result;
};
