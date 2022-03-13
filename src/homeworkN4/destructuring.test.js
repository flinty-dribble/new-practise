import { destruct } from "./destructuring";

describe("destruct", () => {
  it("destruct object", () => {
    expect(destruct()).toBe("John, 23, admin");
  });
});
