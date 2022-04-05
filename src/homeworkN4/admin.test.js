import { adminInfo } from "./admin";

describe("admin", () => {
  it("role of admin", () => {
    expect(adminInfo()).toStrictEqual({ name: "John", age: 23, role: "admin" });
  });
});
