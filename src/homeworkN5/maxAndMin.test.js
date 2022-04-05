import { maxMin } from "./maxAndMin";

describe("max min", () => {
  it("max num and min num", () => {
    expect(maxMin([23, 4, 7, 13])).toStrictEqual([23, 4]);
  });
});
