/**
 * It takes a number of seconds and returns a string in the format of minutes:seconds.
 */
const formatTime = (time: number): string => {
  if (time < 0) throw new Error("Time cannot be negative.");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const TimeUtility = { formatTime };
