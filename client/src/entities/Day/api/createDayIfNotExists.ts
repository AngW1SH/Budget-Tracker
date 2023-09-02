import { formatDateForURL } from "@/shared/utils";

export const createDayIfNotExists = async (date: Date) => {
  const result = await fetch(
    "/api/day/createifnotexists/" + formatDateForURL(date)
  ).then((data) => data.status);

  return result;
};
