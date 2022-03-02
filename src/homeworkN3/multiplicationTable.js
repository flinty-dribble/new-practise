const arr = [];
export function func() {
  for (let i = 1; i < 10; i += 1) {
    let num = 0;
    num = 7 * i;
    arr.push(`${7} * ${i} = ${num}`);
    num = 0;
  }
  return arr;
}
