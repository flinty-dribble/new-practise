export function quadraticEquation(a, b, c) {
  if (a === 0) return "not a quadratic equation";
  const obj = {};
  const D = b * b - 4 * a * c;
  if (D < 0) return "no roots";
  obj.discriminant = D;
  if (D === 0) obj.roots = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    const arr = [];
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
    obj.roots = arr;
  }
  return obj;
}
