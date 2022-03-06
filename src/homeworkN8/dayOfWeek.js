export function date(str) {
  const time = Date.parse(str);
  const data = new Date(time);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[data.getDay(time)];
}
