export const formattedDate = (time) => {
  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const fortnightAway = new Date(time);
  const date = fortnightAway.getDate();
  const month = [
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
  ][fortnightAway.getMonth()];
  return `${date}${nth(date)} ${month} ${fortnightAway.getFullYear()}`;
};
