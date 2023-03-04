import { useLoaderData } from "@remix-run/react";
import {
  QuestionButton,
  ANSWER_OPTIONS,
} from "~/Components/Question/QuestionButton/QuestionButton";
import type { ComponentialImageIdType } from "../Interfaces/QuestionInterfaces";
import { ComponentialUtility } from "./Utilities/ComponentialUtility";

export const ComponentialImageQuestion: React.FC = () => {
  const id: ComponentialImageIdType = useLoaderData();
  const iconStyles = "h-16 w-16 md:h-32 md:w-32";
  const ComponentialQuestionIcons = ComponentialUtility.getQuestionIcons(id);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center">
        <ComponentialQuestionIcons.Question className={iconStyles} />
      </div>
      <div className="grid grid-rows-2 justify-center space-y-3">
        <div className="flex items-center justify-center space-x-4">
          {[ComponentialQuestionIcons.A, ComponentialQuestionIcons.B].map(
            (QuestionIcons, index) => (
              <QuestionButton
                answerOption={ANSWER_OPTIONS[index]}
                key={index}
                containerClassName="flex items-center space-x-3"
              >
                {QuestionIcons.map((QuestionIcon, questionIconIndex) => (
                  <QuestionIcon
                    key={questionIconIndex}
                    className={iconStyles}
                  />
                ))}
              </QuestionButton>
            )
          )}
        </div>
        <div className="flex items-center justify-center space-x-4">
          {[ComponentialQuestionIcons.C, ComponentialQuestionIcons.D].map(
            (QuestionIcons, index) => (
              <QuestionButton
                answerOption={ANSWER_OPTIONS[index + 2]}
                key={index}
                containerClassName="flex items-center space-x-3"
              >
                {QuestionIcons.map((QuestionIcon, questionIconIndex) => (
                  <QuestionIcon
                    key={questionIconIndex}
                    className={iconStyles}
                  />
                ))}
              </QuestionButton>
            )
          )}
        </div>
      </div>
    </div>
  );
};
