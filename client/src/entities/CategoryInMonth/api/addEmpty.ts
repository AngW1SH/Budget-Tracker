import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { ICategoryInMonth } from "../types/types";

export const addEmpty = async (date: Date) => {
  const result: ICategoryInMonth = await authorizedFetch(
    "/api/categoryinmonth/addempty/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.category
    ? result
    : { ...result, category: { id: "0", name: "", type: "expense" } };
};
