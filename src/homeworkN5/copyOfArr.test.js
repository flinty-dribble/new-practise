import { mulArr } from "./copyOfArr";

describe("copy", () => {
  it("copy of arr", () => {
    expect(mulArr([11, 5, 4])).toStrictEqual([22, 10, 8]);
  });
});
