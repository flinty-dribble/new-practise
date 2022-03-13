export function mulArr(arr) {
  const newArr = arr.map((el) => {
    let val = 0;
    val = el * 2;
    return val;
  });
  return newArr;
}
