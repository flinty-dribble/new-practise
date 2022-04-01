import { monthNums } from "./months";

describe("months", () => {
  it("months of year", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "3");

    expect(monthNums()).toBe("March");
  });
});
