export function formula(sircle, square) {
  const side = Math.sqrt(square);
  const b = sircle / 3.14;
  const c = Math.sqrt(b);
  const diam = c * 2;
  if (side > diam) {
    return "fit";
  }
  return "not fit";
}
