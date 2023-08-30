export const formatDateForURL = (date: Date) => {
  const day = (date.getDate() > 9 ? "" : "0") + date.getDate();
  const month = date.getMonth() > 8 ? "" : "0" + (date.getMonth() + 1);

  return date.getFullYear() + "-" + month + "-" + day;
};
