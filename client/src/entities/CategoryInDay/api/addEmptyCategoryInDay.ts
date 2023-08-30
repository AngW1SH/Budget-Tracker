import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { ICategoryInDay } from "..";

export const addEmptyCategoryInDay = async (date: Date) => {
  const result: ICategoryInDay = await authorizedFetch(
    "/api/insertemptycategoryinday/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result.category
    ? result
    : { ...result, category: { id: "0", name: "" } };
};
