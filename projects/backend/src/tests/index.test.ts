import { sum, main } from "../App/index";

test("1+2 equals 3", () => {
  return expect(sum(1, 2)).toBe(3);
});

test("main", async () => {
  const a = await main();
  return;
});
