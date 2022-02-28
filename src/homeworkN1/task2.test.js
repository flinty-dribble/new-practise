import { first, second, totalLength } from "./task2";

describe("strings", () => {
  it("length of strings", () => {
    expect(totalLength).toBe(first.length + second.length);
  });
});
