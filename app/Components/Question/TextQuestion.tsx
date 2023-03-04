import { useLoaderData } from "@remix-run/react";
import { Icon } from "~/Components/Icons/Icon";
import { ComponentialUtility } from "./ComponentialQuestion/Utilities/ComponentialUtility";
import { ExperientialUtility } from "./ExperientialQuestion/Utilities/ExperientialUtility";
import type { QuestionTextIdType } from "./Interfaces/QuestionInterfaces";
import {
  QuestionButton,
  ANSWER_OPTIONS,
} from "./QuestionButton/QuestionButton";
import { QuestionUtility } from "./Utilities/QuestionUtility";

export const TextQuestion: React.FC = () => {
  const id: QuestionTextIdType = useLoaderData();
  const { Question, A, B, C, D } = QuestionUtility.isComponentialId(id)
    ? ComponentialUtility.getTextQuestions(id)
    : ExperientialUtility.getTextQuestions(id);
  return (
    <div className="rows-2 grid items-center justify-center space-y-3">
      <div className="flex items-center justify-center">
        {Question.map((question, index) => {
          const containerStyles =
            "flex items-center md:text-2xl font-semibold text-gray-700";
          if (index === Question.length - 2) {
            return (
              <div key={index} className={containerStyles}>
                <p>{question}</p>
                <Icon.DoubleChevronRight className="h-6 w-6 md:h-10 md:w-10" />
              </div>
            );
          }
          return (
            <div key={index} className={containerStyles}>
              <span>{question}</span>
              <Icon.ChevronRight className="h-6 w-6 md:h-10 md:w-10" />
            </div>
          );
        })}
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-2 items-center justify-center gap-2">
        {[A, B, C, D].map((answer, index) => (
          <QuestionButton answerOption={ANSWER_OPTIONS[index]} key={index}>
            <p className="text-sm text-gray-700 md:text-xl">{answer}</p>
          </QuestionButton>
        ))}
      </div>
    </div>
  );
};
