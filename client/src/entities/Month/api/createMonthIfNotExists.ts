import { formatDateForURL } from "@/shared/utils";

export const createMonthIfNotExists = async (date: Date) => {
  const result = await fetch(
    "/api/month/createifnotexists/" + formatDateForURL(date)
  ).then((data) => data.status);

  return result;
};
