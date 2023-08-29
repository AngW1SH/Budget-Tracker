import { ICategoryInDay } from "..";

export const fetchCategories = async () => {
  const result: ICategoryInDay[] = await fetch("/api/categoriesinday").then(
    (data) => data.json()
  );

  return result;
};
