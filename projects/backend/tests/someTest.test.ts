import { sum } from "../src/index";

test("1+2 equals 3", () => {
  return expect(sum(1, 2)).toBe(3);
});
