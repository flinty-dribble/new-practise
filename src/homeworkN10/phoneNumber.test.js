import { phoneNum } from "./phoneNumber";

describe("number", () => {
  it("phone number", () => {
    expect(phoneNum("+7 999 999-99-99")).toBe(true);
    expect(phoneNum("7 999 999-99-99")).toBe(false);
    expect(phoneNum("+7 999 999- 99- 99")).toBe(false);
  });
});
