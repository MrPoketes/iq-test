import { ExperientialIcon } from "~/Components/Icons/questionIcons/experiential/ExperientialIcon";
import type { ExperientialImageIdType } from "../../Interfaces/QuestionInterfaces";

const getQuestionIcons = (id: ExperientialImageIdType) => {
  return {
    11: {
      Question: ExperientialIcon.Q1.Q1,
      A: ExperientialIcon.Q1.Q1A,
      B: ExperientialIcon.Q1.Q1B,
      C: ExperientialIcon.Q1.Q1C,
      D: ExperientialIcon.Q1.Q1D,
    },
    12: {
      Question: ExperientialIcon.Q2.Q2,
      A: ExperientialIcon.Q2.Q2A,
      B: ExperientialIcon.Q2.Q2B,
      C: ExperientialIcon.Q2.Q2C,
      D: ExperientialIcon.Q2.Q2D,
    },
    13: {
      Question: ExperientialIcon.Q3.Q3,
      A: ExperientialIcon.Q3.Q3A,
      B: ExperientialIcon.Q3.Q3B,
      C: ExperientialIcon.Q3.Q3C,
      D: ExperientialIcon.Q3.Q3D,
    },
    14: {
      Question: ExperientialIcon.Q4.Q4,
      A: ExperientialIcon.Q4.Q4A,
      B: ExperientialIcon.Q4.Q4B,
      C: ExperientialIcon.Q4.Q4C,
      D: ExperientialIcon.Q4.Q4D,
    },
    15: {
      Question: ExperientialIcon.Q5.Q5,
      A: ExperientialIcon.Q5.Q5A,
      B: ExperientialIcon.Q5.Q5B,
      C: ExperientialIcon.Q5.Q5C,
      D: ExperientialIcon.Q5.Q5D,
    },
  }[id];
};

export const ExperientialUtility = {
  getQuestionIcons,
};
