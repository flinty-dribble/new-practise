export function func(s1, s2, s3) {
  const s11 = s1 * s1;
  const s22 = s2 * s2;
  const s33 = s3 * s3;
  if (s11 === s22 + s33) {
    return "rectangular";
  }
  if (s22 === s11 + s33) {
    return "rectangular";
  }
  if (s33 === s11 + s22) {
    return "rectangular";
  }
  return "not rectangular";
}
