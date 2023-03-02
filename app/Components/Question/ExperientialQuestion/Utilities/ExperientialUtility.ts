import { ExperientialIcon } from "~/Components/Icons/questionIcons/experiential/ExperientialIcon";
import type {
  ExperientialImageIdType,
  ExperientialTextIdType,
} from "../../Interfaces/QuestionInterfaces";

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

const getTextQuestions = (id: ExperientialTextIdType) => {
  return {
    16: {
      Question: ["Head", "Neck", "Wrist", "Bracelet"],
      A: "Artist",
      B: "Shoulder",
      C: "Toe",
      D: "Ring",
    },
    17: {
      Question: ["Great Grandfather", "Grandfather", "Father", "Mother"],
      A: "Granddaughter",
      B: "Daughter",
      C: "Grandmother",
      D: "Child",
    },
    18: {
      Question: ["Animal", "Mammal", "Dog", "Reptile"],
      A: "Pig",
      B: "Bird",
      C: "Snake",
      D: "Frog",
    },
    19: {
      Question: ["Impossible", "Unlikely", "Possible", "Maybe"],
      A: "Never",
      B: "Probably",
      C: "Uncertain",
      D: "Unknown",
    },
    20: {
      Question: ["Measure", "Mix", "Bake", "Eat"],
      A: "Digest",
      B: "Stove",
      C: "Cool",
      D: "Pan",
    },
  }[id];
};

export const ExperientialUtility = {
  getQuestionIcons,
  getTextQuestions,
};
