export function average(N) {
  let num = 0;
  let num2 = 0;
  for (let i = 1; i < N; i += 2) {
    num += i;
    num2 += 1;
  }
  return num / num2;
}
