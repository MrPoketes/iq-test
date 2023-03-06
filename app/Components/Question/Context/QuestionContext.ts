import React from "react";
import type { QuestionIdType } from "../Interfaces/QuestionInterfaces";
import type { AnswerOptionType } from "../QuestionButton/QuestionButton";

interface QuestionContextInterface {
  answers: AnswerType;
  setAnswer: (questionId: QuestionIdType, answer: AnswerOptionType) => void;
  isTimerPaused: boolean;
  setIsTimerPaused: (value: boolean) => void;
}

export type AnswerType = {
  [key in QuestionIdType]: AnswerOptionType | undefined;
};

export const CORRECT_ANSWERS = {
  1: "C",
  2: "C",
  3: "B",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "A",
  9: "B",
  10: "B",
  11: "D",
  12: "C",
  13: "D",
  14: "C",
  15: "A",
  16: "D",
  17: "B",
  18: "C",
  19: "B",
  20: "A",
};

export const DEFAULT_ANSWER_VALUE: AnswerType = {
  // 1: "A",
  // 2: "B",
  // 3: "C",
  // 4: "D",
  // 5: "A",
  // 6: "B",
  // 7: "C",
  // 8: "D",
  // 9: "A",
  // 10: "B",
  // 11: "C",
  // 12: "D",
  // 13: "A",
  // 14: "B",
  // 15: "C",
  // 16: "D",
  // 17: "A",
  // 18: "B",
  // 19: "C",
  // 20: "D",
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined,
  9: undefined,
  10: undefined,
  11: undefined,
  12: undefined,
  13: undefined,
  14: undefined,
  15: undefined,
  16: undefined,
  17: undefined,
  18: undefined,
  19: undefined,
  20: undefined,
};

export const QuestionContext = React.createContext<QuestionContextInterface>({
  answers: DEFAULT_ANSWER_VALUE,
  setAnswer: () => {},
  isTimerPaused: true,
  setIsTimerPaused: () => {},
});

export const useQuestionContext = () => React.useContext(QuestionContext);
