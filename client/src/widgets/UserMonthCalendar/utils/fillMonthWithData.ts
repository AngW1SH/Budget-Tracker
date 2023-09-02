import { Month } from "@/shared/utils";
import { IDayInMonth, MonthWithData } from "../types/types";

export const fillMonthWithData = (month: Month, daysData: IDayInMonth[]) => {
  const monthResult: MonthWithData = month.map((week) =>
    week.map((day) => ({
      value: day,
      data: null,
    }))
  );

  if (!daysData.length) return monthResult;

  // Will be used to count the week number for a post
  let firstWeekDay = 0;
  for (let i = 0; i < month[0].length; i++) {
    if (month[0][i] != null) {
      firstWeekDay = i;
      break;
    }
  }

  daysData.forEach((day) => {
    const dayDate = new Date(day.date);

    const weekIndex = Math.floor((firstWeekDay + dayDate.getDate() - 1) / 7);

    monthResult[weekIndex][(firstWeekDay + dayDate.getDate() - 1) % 7].data =
      day;
  });

  return monthResult;
};
