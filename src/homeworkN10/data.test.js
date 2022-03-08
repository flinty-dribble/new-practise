import { date } from "./data";

describe("date", () => {
  it("data", () => {
    expect(date("23.05.1996")).toBe(true);
    expect(date("23.05.96")).toBe(true);
    expect(date("2.05.96")).toBe(true);
    expect(date("23.0567.11")).toBe(false);
    expect(date("122344.45664")).toBe(false);
  });
});
