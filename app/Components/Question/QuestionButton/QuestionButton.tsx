import { useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import React from "react";
import { FocusUtility } from "~/Components/Utilities/FocusUtility";
import type { QuestionIdType } from "../Interfaces/QuestionInterfaces";

type QuestionOptionType = "A" | "B" | "C" | "D";

export const QUESTION_OPTIONS: QuestionOptionType[] = ["A", "B", "C", "D"];

interface QuestionButtonProps {
  children?: React.ReactNode;
  containerClassName?: string;
  questionOption: QuestionOptionType;
}

export const QuestionButton: React.FC<QuestionButtonProps> = ({
  children,
  containerClassName,
  questionOption,
}) => {
  const id: QuestionIdType = useLoaderData();

  // TODO: Add logic to check if the questionOption is selected
  const isSelected = false;

  return (
    <button
      type="button"
      className={clsx(
        "block rounded-md border-2 border-gray-300 p-2",
        FocusUtility.style,
        isSelected && "bg-gray-100"
      )}
    >
      <div className={containerClassName}>{children}</div>
      <span className="font-semibold text-gray-700">{questionOption}</span>
    </button>
  );
};
