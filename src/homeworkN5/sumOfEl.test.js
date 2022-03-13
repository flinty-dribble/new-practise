import { sumOfEl } from "./sumOfEl";

describe("sum", () => {
  it("sum of elements", () => {
    expect(sumOfEl([23, 12, 4])).toBe(39);
  });
});
