import { youngOld } from "./users";

describe(" younger or older", () => {
  it("users", () => {
    expect(youngOld("07.02.2007", "29.05.1972")).toBe("first user is younger");
    expect(youngOld("11.10.1957", "12.10.1958")).toBe("second user is younger");
  });
});
