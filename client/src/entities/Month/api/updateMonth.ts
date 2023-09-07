import { authorizedFetch } from "@/shared/utils";
import { IMonth } from "../types/types";

export const saveMonthToDB = async (month: IMonth | null) => {
  if (!month) return;
  const result = await authorizedFetch("/api/month/edit", false, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      month: month,
    }),
  }).then((response) => response.status);

  return result;
};
