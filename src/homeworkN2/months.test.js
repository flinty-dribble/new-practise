import { monthNums } from "./months";

describe("months", () => {
  it("months of year", () => {
    expect(monthNums(1)).toBe("January");
    expect(monthNums(2)).toBe("February");
    expect(monthNums(3)).toBe("March");
    expect(monthNums(4)).toBe("April");
    expect(monthNums(5)).toBe("May");
    expect(monthNums(6)).toBe("June");
    expect(monthNums(7)).toBe("July");
    expect(monthNums(8)).toBe("August");
    expect(monthNums(9)).toBe("September");
    expect(monthNums(10)).toBe("October");
    expect(monthNums(11)).toBe("November");
    expect(monthNums(12)).toBe("December");
  });
});
