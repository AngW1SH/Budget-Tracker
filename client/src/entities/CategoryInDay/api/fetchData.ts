import { formatDateForURL } from "@/shared/utils";
import { ICategoryInDay } from "..";

export const fetchCategories = async (date: Date) => {
  const result: ICategoryInDay[] = await fetch(
    "/api/categoriesinday/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.map(
    (category) =>
      category.category
        ? category
        : { ...category, category: { id: "0", name: " " } }
    // The logic for handling new categories will be on the backend, so we don't really care here
  );
};
