import { ComponentialIcon } from "~/Components/Icons/questionIcons/componential/ComponentialIcon";
import type {
  ComponentialImageIdType,
  ComponentialTextIdType,
} from "../../Interfaces/QuestionInterfaces";

const getQuestionIcons = (id: ComponentialImageIdType) => {
  return {
    1: {
      Question: ComponentialIcon.Q1.Q1,
      A: ComponentialIcon.Q1.Q1A,
      B: ComponentialIcon.Q1.Q1B,
      C: ComponentialIcon.Q1.Q1C,
      D: ComponentialIcon.Q1.Q1D,
    },
    2: {
      Question: ComponentialIcon.Q2.Q2,
      A: ComponentialIcon.Q2.Q2A,
      B: ComponentialIcon.Q2.Q2B,
      C: ComponentialIcon.Q2.Q2C,
      D: ComponentialIcon.Q2.Q2D,
    },
    3: {
      Question: ComponentialIcon.Q3.Q3,
      A: ComponentialIcon.Q3.Q3A,
      B: ComponentialIcon.Q3.Q3B,
      C: ComponentialIcon.Q3.Q3C,
      D: ComponentialIcon.Q3.Q3D,
    },
    4: {
      Question: ComponentialIcon.Q4.Q4,
      A: ComponentialIcon.Q4.Q4A,
      B: ComponentialIcon.Q4.Q4B,
      C: ComponentialIcon.Q4.Q4C,
      D: ComponentialIcon.Q4.Q4D,
    },
    5: {
      Question: ComponentialIcon.Q5.Q5,
      A: ComponentialIcon.Q5.Q5A,
      B: ComponentialIcon.Q5.Q5B,
      C: ComponentialIcon.Q5.Q5C,
      D: ComponentialIcon.Q5.Q5D,
    },
  }[id];
};

const getTextQuestions = (id: ComponentialTextIdType) => {
  return {
    6: {
      Question: ["Spouse", "Husband", "Sibling"],
      A: "Father",
      B: "Uncle",
      C: "Brother",
      D: "Son",
    },
    7: {
      Question: ["Water", "Ice", "Rain"],
      A: "Cyclone",
      B: "Hail",
      C: "Fire",
      D: "Dry Ice",
    },
    8: {
      Question: ["Gold", "Mine", "Pearl"],
      A: "Oyster",
      B: "Clam",
      C: "Mine",
      D: "River",
    },
    9: {
      Question: ["Greek", "Greek", "Roman"],
      A: "Indo-European",
      B: "Latin",
      C: "Mediterranean",
      D: "Romanish",
    },
    10: {
      Question: ["Alcohol", "Liver", "Cigarettes"],
      A: "Kidneys",
      B: "Lungs",
      C: "Feet",
      D: "Spleen",
    },
  }[id];
};

export const ComponentialUtility = {
  getQuestionIcons,
  getTextQuestions,
};
