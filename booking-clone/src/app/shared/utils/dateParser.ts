export const parseDate = (date: Date): string => {
  return date.toJSON().split('T')[0];
};
