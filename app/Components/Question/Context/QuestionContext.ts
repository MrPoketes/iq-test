import React from "react";
import type { QuestionIdType } from "../Interfaces/QuestionInterfaces";
import type { AnswerOptionType } from "../QuestionButton/QuestionButton";

interface QuestionContextInterface {
  answers: AnswerType;
  setAnswer: (questionId: QuestionIdType, answer: AnswerOptionType) => void;
  isTimerPaused: boolean;
  setIsTimerPaused: (value: boolean) => void;
}

type AnswerType = {
  [key in QuestionIdType]: AnswerOptionType | null;
};

export const DEFAULT_ANSWER_VALUE = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null,
  18: null,
  19: null,
  20: null,
};

export const QuestionContext = React.createContext<QuestionContextInterface>({
  answers: DEFAULT_ANSWER_VALUE,
  setAnswer: () => {},
  isTimerPaused: true,
  setIsTimerPaused: () => {},
});

export const useQuestionContext = () => React.useContext(QuestionContext);
