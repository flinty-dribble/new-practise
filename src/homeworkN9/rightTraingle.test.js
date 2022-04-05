import { func } from "./rightTraingle";

describe("right triangle", () => {
  it("three sides", () => {
    expect(func(5, 10, 7)).toBe("not rectangular");
    expect(func(3, 4, 5)).toBe("rectangular");
  });
});
