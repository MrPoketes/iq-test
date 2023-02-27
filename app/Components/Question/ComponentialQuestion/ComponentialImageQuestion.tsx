import type { ComponentialImageIdType } from "../Interfaces/QuestionInterfaces";
import { ComponentialUtility } from "./Utilities/ComponentialUtility";

interface ComponentialImageQuestionProps {
  id: ComponentialImageIdType;
}

export const ComponentialImageQuestion: React.FC<
  ComponentialImageQuestionProps
> = ({ id }) => {
  const iconStyles = "h-16 w-16 md:h-32 md:w-32";
  const ComponentialQuestionIcons = ComponentialUtility.getQuestionIcons(id);

  const QuestionPairs = [
    [ComponentialQuestionIcons.A, ComponentialQuestionIcons.B],
    [ComponentialQuestionIcons.C, ComponentialQuestionIcons.D],
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center">
        <ComponentialQuestionIcons.Question className={iconStyles} />
      </div>
      <div className="grid grid-rows-2 justify-center space-y-3">
        {QuestionPairs.map((QuestionPair, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-4"
          >
            {QuestionPair.map((QuestionIcons, index) => (
              <button
                key={index}
                type="button"
                className="flex items-center space-x-3"
              >
                {QuestionIcons.map((QuestionIcon, index) => (
                  <QuestionIcon key={index} className={iconStyles} />
                ))}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
