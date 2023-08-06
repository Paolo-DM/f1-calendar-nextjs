export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

export const formatDateWithHours = (date, hours) => {
  if (!date || !hours) return null;
  const d = new Date(date + " " + hours);
  let localeDate = d.toLocaleString();
  let time = localeDate.split(",")[1].trim();

  if (time.length === 8) {
    // to remove seconds if time is like this: "13:00:00"
    localeDate = localeDate.slice(0, -3);
  }
  return localeDate;
};
