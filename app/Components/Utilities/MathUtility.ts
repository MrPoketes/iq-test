/**
 * Given an array of numbers, return the average of those numbers.
 */
const calculateMean = (values: number[]) => {
  const sum = values.reduce((a, b) => a + b, 0);
  return sum / values.length;
};

/**
 * We take the mean of the values, subtract the mean from each value, square the differences, take the
 * mean of the squared differences, and then take the square root of the mean of the squared
 * differences.
 */
const calculateStandardDeviation = (values: number[]) => {
  const mean = calculateMean(values);
  const squareDiffs = values.map((value) => {
    const diff = value - mean;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });
  const avgSquareDiff = calculateMean(squareDiffs);
  const stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
};

export const MathUtility = { calculateMean, calculateStandardDeviation };
