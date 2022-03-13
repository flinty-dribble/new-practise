export function phoneNum(str) {
  const reg =
    /\+\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/;
  return reg.test(str);
}