import { isWord } from "./isWord";

describe("is word", () => {
  it("true or false", () => {
    expect(isWord("hello")).toBe(true);
    expect(isWord("hello John")).toBe(false);
  });
});
