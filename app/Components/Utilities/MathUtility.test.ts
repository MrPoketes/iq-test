import { MathUtility } from "./MathUtility";

describe("MathUtility", () => {
  it("should calculate the mean of an array of numbers", () => {
    const values = [1, 2, 3, 4, 5];
    const mean = MathUtility.calculateMean(values);
    expect(mean).toBe(3);
  });

  it("should calculate the standard deviation of an array of numbers", () => {
    const values = [1, 2, 3, 4, 5];
    const stdDev = MathUtility.calculateStandardDeviation(values);
    expect(stdDev).toBe(1.4142135623730951);
  });
});
