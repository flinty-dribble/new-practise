export function diff(a, b) {
  if (a < b) {
    return b - a;
  }
  return a - b;
}
