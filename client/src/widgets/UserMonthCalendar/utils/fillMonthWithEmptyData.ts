import { Month } from "@/shared/utils";
import { MonthWithData } from "../types/types";

export const fillMonthWithEmptyData = (month: Month) => {
  const monthResult: MonthWithData = month.map((week) =>
    week.map((day) => ({
      value: day,
      data: null,
    }))
  );

  return monthResult;
};
