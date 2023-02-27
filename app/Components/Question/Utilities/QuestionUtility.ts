import type {
  ComponentialIdType,
  ComponentialImageIdType,
  ExperientialIdType,
  ExperientialImageIdType,
  QuestionIdType,
} from "../Interfaces/QuestionInterfaces";

const isComponentialId = (id: QuestionIdType): id is ComponentialIdType => {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(id);
};

const isComponentialImageId = (
  id: ComponentialIdType
): id is ComponentialImageIdType => {
  return ["1", "2", "3", "4", "5"].includes(id);
};

const isExperientialImageId = (
  id: ExperientialIdType
): id is ExperientialImageIdType => {
  return ["11", "12", "13", "14", "15"].includes(id);
};

export const QuestionUtility = {
  isComponentialId,
  isComponentialImageId,
  isExperientialImageId,
};
