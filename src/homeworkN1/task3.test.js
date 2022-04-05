import { sumOfNums } from "./task3";

describe("sum", () => {
  it("sum of nums", () => {
    jest.spyOn(console, "log");

    sumOfNums(123);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(6);
  });
});
