import { useLoaderData } from "@remix-run/react";
import {
  QuestionButton,
  QUESTION_OPTIONS,
} from "~/Components/Question/QuestionButton/QuestionButton";
import { Icon } from "../../Icons/Icon";
import type { ExperientialImageIdType } from "../Interfaces/QuestionInterfaces";
import { ExperientialUtility } from "./Utilities/ExperientialUtility";

export const ExperientialImageQuestion: React.FC = () => {
  const id: ExperientialImageIdType = useLoaderData();
  const iconStyles = "h-16 w-16 md:h-32 md:w-32";
  const QuestionIcons = ExperientialUtility.getQuestionIcons(id);

  const QuestionAnswers = [
    QuestionIcons.A,
    QuestionIcons.B,
    QuestionIcons.C,
    QuestionIcons.D,
  ];
  return (
    <div className="rows-2 grid items-center justify-center space-y-3">
      <div className="flex items-center justify-center">
        {QuestionIcons.Question.map((QuestionIcon, index) => {
          if (index === QuestionIcons.Question.length - 1) {
            return <QuestionIcon key={index} className={iconStyles} />;
          }
          if (index === QuestionIcons.Question.length - 2) {
            return (
              <div key={index} className="flex items-center">
                <QuestionIcon className={iconStyles} />
                <Icon.DoubleChevronRight className="h-6 w-6 text-gray-700 md:h-10 md:w-10" />
              </div>
            );
          }
          return (
            <div key={index} className="flex items-center">
              <QuestionIcon className={iconStyles} />
              <Icon.ChevronRight className="h-6 w-6 text-gray-700 md:h-10 md:w-10" />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {QuestionAnswers.map((QuestionAnswer, index) => (
          <QuestionButton key={index} questionOption={QUESTION_OPTIONS[index]}>
            <QuestionAnswer className={iconStyles} />
          </QuestionButton>
        ))}
      </div>
    </div>
  );
};
