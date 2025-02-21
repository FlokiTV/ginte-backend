export const formatDate = (date: Date = new Date()) => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
};
