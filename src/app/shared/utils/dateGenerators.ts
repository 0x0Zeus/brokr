export const getNowDate = (): Date => {
  return new Date(Date.now());
};

export const getTomorrowDate = (): Date => {
  return new Date(new Date(Date.now()).setDate(getNowDate().getDate() + 1));
};
