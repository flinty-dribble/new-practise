export function youngOld(u1, u2) {
  const time1 = Date.parse(u1);
  const time2 = Date.parse(u2);
  if (time1 < time2) {
    return "second user is younger";
  }
  return "first user is younger";
}
