import { ICategoryInDay } from "..";

export const fetchCategories = async () => {
  const result: ICategoryInDay[] = await fetch("/api/categoriesinday").then(
    (data) => data.json()
  );

  return result.map(
    (category) =>
      category.category
        ? category
        : { ...category, category: { id: "0", name: " " } }
    // The logic for handling new categories will be on the backend, so we don't really care here
  );
};
