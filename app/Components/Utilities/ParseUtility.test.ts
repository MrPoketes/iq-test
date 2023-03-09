import { ParseUtility } from "./ParseUtility";

describe("ParseUtility", () => {
  it("should parse pathname correctly", () => {
    expect(ParseUtility.parse("/test/question/1")).toBe("1");
  });
});
