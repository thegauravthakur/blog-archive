export const convertTimestampToDate = (lastUpdated) => {
  let index = 0,
    sec = "";
  for (let i = 0; i < lastUpdated.length; i++)
    if (lastUpdated[i] === ",") index = i;
  for (let i = 18; i < index; i++) sec += lastUpdated[i];
  const a = new Date(parseInt(sec) * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  return { year, month, date };
};
