import { minutes } from "./minutes";

describe("mins", () => {
  it("mins in day", () => {
    expect(minutes(new Date("December 17, 1995 03:24:00"))).toBe(204);
  });
});
