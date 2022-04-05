import { formula } from "./sircleAndSquare";

describe("sircle and square", () => {
  it("S of sircle and square", () => {
    expect(formula(25, 25)).toBe("not fit");
    expect(formula(30, 49)).toBe("fit");
    expect(formula(49, 30)).toBe("not fit");
  });
});
