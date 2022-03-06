import { minutes } from "./minutes";

describe("mins", () => {
  it("mins in day", () => {
    expect(minutes(new Date())).toBe(1234);
  });
});
