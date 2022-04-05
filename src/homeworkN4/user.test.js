import { userInfo } from "./user";

describe("user", () => {
  it("user age", () => {
    expect(userInfo(23)).toStrictEqual({ name: "John", age: 23 });
  });
});
