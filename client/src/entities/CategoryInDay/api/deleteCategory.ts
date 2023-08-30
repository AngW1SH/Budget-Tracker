import { authorizedFetch } from "@/shared/utils";
import { ICategoryInDay } from "..";

export const deleteCategory = async (categoryInDay: ICategoryInDay) => {
  const result: number = await authorizedFetch(
    "/api/deletecategoryinday/" + categoryInDay.id
  ).then((data) => data.status);

  return result;
};
