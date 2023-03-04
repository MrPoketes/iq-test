import React, { useEffect, useState } from "react";
import { useQuestionContext } from "../Question/Context/QuestionContext";

interface TimerProps {
  initialTime: number;
}

export const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const { isTimerPaused } = useQuestionContext();

  useEffect(() => {
    if (time > 0 && !isTimerPaused) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isTimerPaused]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return <p>{formatTime(time)}</p>;
};
