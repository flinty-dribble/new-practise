export function minutes(now) {
  const hrs = now.getHours();
  const mins = now.getMinutes();
  return hrs * 60 + mins;
}
