import { mulSum } from "./mul";

describe("mul", () => {
  it("mul and sum of nums", () => {
    jest.spyOn(console, "log");

    mulSum(3, 4);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(7, 12);
  });
});
