import { emailAddress } from "./email";

describe("E-mail", () => {
  it("E-mail address", () => {
    expect(emailAddress("john@gmail.com")).toBe(true);
    expect(emailAddress("johngmailcom")).toBe(false);
    expect(emailAddress("john34@gmail.ru")).toBe(true);
  });
});
