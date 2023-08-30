import { ICategoryInDay } from "..";

export const addEmptyCategoryInDay = async () => {
  const result: ICategoryInDay = await fetch(
    "/api/insertemptycategoryinday"
  ).then((data) => data.json());

  return result.category
    ? result
    : { ...result, category: { id: "0", name: "" } };
};
