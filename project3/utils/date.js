export const getFormattedDate = (date) => {
  return date;
};
export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
