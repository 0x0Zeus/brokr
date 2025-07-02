export const parseDate = (date: Date): string => {
  return date.toJSON().split('T')[0];
};

export const parseTime = (date: Date): string => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const getShortDateFormat = (date: string): string => {
  return new Date(date).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getFullDateFormat = (date: string): string => {
  return new Date(date).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};
