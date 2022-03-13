import { quadraticEquation } from "./equation";

describe("quadratic equation", () => {
  it("odds", () => {
    expect(quadraticEquation(5, 16, 3)).toStrictEqual({
      discriminant: 196,
      roots: [-0.2, -3],
    });
    expect(quadraticEquation(16, 5, 3)).toBe("no roots");
    expect(quadraticEquation(0, 5, 3)).toBe("not a quadratic equation");
  });
});
