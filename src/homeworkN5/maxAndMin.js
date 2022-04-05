export function maxMin(arr) {
  const maxNum = Math.max.apply(null, arr);
  const minNum = Math.min.apply(null, arr);
  const newArr = [];
  newArr.push(maxNum);
  newArr.push(minNum);
  return newArr;
}
