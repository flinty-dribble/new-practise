import { average } from "./average";

describe("average", () => {
  it("average of N", () => {
    expect(average(10)).toBe(5);
    expect(average(12)).toBe(6);
    expect(average(20)).toBe(10);
  });
});
