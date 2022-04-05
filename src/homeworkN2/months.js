export function monthNums() {
  const input = +prompt("write a month");

  if (input === 1) {
    return "January";
  }
  if (input === 2) {
    return "February";
  }
  if (input === 3) {
    return "March";
  }
  if (input === 4) {
    return "April";
  }
  if (input === 5) {
    return "May";
  }
  if (input === 6) {
    return "June";
  }
  if (input === 7) {
    return "July";
  }
  if (input === 8) {
    return "August";
  }
  if (input === 9) {
    return "September";
  }
  if (input === 10) {
    return "October";
  }
  if (input === 11) {
    return "November";
  }
  return "December";
}
