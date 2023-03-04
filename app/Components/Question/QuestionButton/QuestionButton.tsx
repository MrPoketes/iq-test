import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import React from "react";
import { FocusUtility } from "~/Components/Utilities/FocusUtility";
import { useQuestionContext } from "../Context/QuestionContext";
import type { QuestionIdType } from "../Interfaces/QuestionInterfaces";

export type AnswerOptionType = "A" | "B" | "C" | "D";

export const ANSWER_OPTIONS: AnswerOptionType[] = ["A", "B", "C", "D"];

interface QuestionButtonProps {
  children?: React.ReactNode;
  containerClassName?: string;
  answerOption: AnswerOptionType;
}

export const QuestionButton: React.FC<QuestionButtonProps> = ({
  children,
  containerClassName,
  answerOption,
}) => {
  const { answers, setAnswer } = useQuestionContext();
  const id: QuestionIdType = useLoaderData();

  const isSelected = answers[id] === answerOption;

  return (
    <button
      onClick={() => setAnswer(id, answerOption)}
      type="button"
      className={clsx(
        "block rounded-md border-2 border-gray-300 p-2",
        FocusUtility.style,
        isSelected && "bg-gray-100"
      )}
    >
      <div className={containerClassName}>{children}</div>
      <span className="font-semibold text-gray-700">{answerOption}</span>
    </button>
  );
};
