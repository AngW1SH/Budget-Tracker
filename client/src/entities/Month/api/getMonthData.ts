import { authorizedFetch, formatDateForURL } from "@/shared/utils";
import { IMonth } from "../types/types";

export const getMonthData = async (date: Date) => {
  const result: IMonth = await authorizedFetch(
    "/api/month/getdata/" + formatDateForURL(date)
  ).then((data) => data.json());

  return result;
};
