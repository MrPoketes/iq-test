import { TimeUtility } from "./TimeUtility";

describe("TimeUtility", () => {
  it("should format time correctly", () => {
    expect(TimeUtility.formatTime(2200)).toBe("36:40");
  });

  it("should throw error when time is negative", () => {
    expect(() => TimeUtility.formatTime(-1)).toThrowError(
      "Time cannot be negative."
    );
  });
});
