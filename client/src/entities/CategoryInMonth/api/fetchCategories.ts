import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { ICategoryInMonth } from "../types/types";

export const fetchCategories = async (date: Date) => {
  const result: ICategoryInMonth[] = await authorizedFetch(
    "/api/categoryinmonth/bymonth/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.map(
    (category) =>
      category.category
        ? category
        : { ...category, category: { id: "0", name: " " } }
    // The logic for handling new categories will be on the backend, so we don't really care here
  );
};
