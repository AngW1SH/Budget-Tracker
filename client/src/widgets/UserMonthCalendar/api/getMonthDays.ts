import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { IDayInMonth } from "../types/types";

export const getMonthDays = async (date: Date) => {
  const result: IDayInMonth[] = await authorizedFetch(
    "/api/monthdays/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result;
};
