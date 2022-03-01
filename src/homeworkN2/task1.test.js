import { bigger } from "./task1";

describe("nums", () => {
  it("biggest number", () => {
    expect(bigger(2, 3)).toBe(3);
    expect(bigger(8, 4)).toBe(8);
  });
});
