export function isWord(str) {
  const arr = str.split(" ");
  if (arr.length >= 2) {
    return false;
  }
  return true;
}
