export const parseDate = (date: Date): string => {
  return date.toJSON().split('T')[0];
};

export const getShortDateFormat = (date: string): string => {
  return new Date(date).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
