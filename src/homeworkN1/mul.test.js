import { a, b, c, d } from "./mul";

describe("mul", () => {
  it("mul and sum of nums", () => {
    expect(c).toBe(a * b);
    expect(d).toBe(a + b);
  });
});
