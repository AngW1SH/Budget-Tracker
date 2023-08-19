const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

// !Starts from Monday!
export const getWeekDay = (day: number, month: number, year: number) => {
  const weekDay = new Date(year + "-" + (month + 1) + "-" + day).getDay();
  return weekDay == 0 ? 6 : weekDay - 1;
};

const pushEmptyWeek = (month: (string | null)[][]) => {
  month.push([null, null, null, null, null, null, null]);
};

export const generateMonth = (month: number, year: number) => {
  if (month < 0 || month > 11 || year < 0) return [];

  const result: string[][] = [];
  const daysTotal = daysInMonth(month + 1, year);

  pushEmptyWeek(result);

  let currentWeek = 0;
  for (let i = 1; i < daysTotal + 1; i++) {
    const weekDay = getWeekDay(i, month, year);
    result[currentWeek][weekDay] = "" + i;

    if (weekDay == 6) {
      currentWeek += 1;
      pushEmptyWeek(result);
    }
  }

  return result;
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
