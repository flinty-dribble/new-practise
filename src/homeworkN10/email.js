export function emailAddress(str) {
  const reg = /[\da-z.]+@[\da-z]+\.[a-z]+/;
  return reg.test(str);
}
