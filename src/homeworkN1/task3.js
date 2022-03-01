export function sumOfNums(num) {
  const digit3 = num % 10;
  const digit1 = (num - (num % 100)) / 100;
  const digit2 = (num - digit1 * 100 - digit3) / 10;
  return digit1 + digit2 + digit3;
}
