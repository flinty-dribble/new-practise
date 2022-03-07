import { radius } from "./radius";

describe("rad", () => {
  it("circumference and area of the circle", () => {
    expect(radius(8)).toStrictEqual([50.24, 200.96]);
  });
});
