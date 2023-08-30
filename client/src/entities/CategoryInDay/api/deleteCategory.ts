import { ICategoryInDay } from "..";

export const deleteCategory = async (categoryInDay: ICategoryInDay) => {
  const result: number = await fetch(
    "/api/deletecategoryinday/" + categoryInDay.id
  ).then((data) => data.status);

  return result;
};
