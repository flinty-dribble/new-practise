export function date(str) {
  const reg = /\d{1,2}[.]\d{2}[.]\d{2,4}/;
  return reg.test(str);
}
