import { sum } from "./sum";

describe("sum", () => {
  it("sum of num", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
