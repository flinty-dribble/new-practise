import { date } from "./dayOfWeek";

describe("day of week", () => {
  it("day of date", () => {
    expect(date("11.10.20")).toBe("Tuesday");
  });
});
