import {
  type AnswerType,
  CORRECT_ANSWERS,
} from "~/Components/Question/Context/QuestionContext";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
import { prisma } from "~/db.server";

export const createAnswer = async (answers: AnswerType, timeLeft: number) => {
  const score = 100;
  const userRecord = await prisma.users.create({
    data: {
      score: score,
      timeLeft,
    },
  });
  const userId = userRecord.id;

  const answerRecords = Object.entries(answers).map(([questionId, option]) => {
    return {
      correct: option === CORRECT_ANSWERS[questionId as QuestionIdType],
      questionId: parseInt(questionId),
      userId,
    };
  });

  await prisma.questions.createMany({
    data: answerRecords,
  });
  return score;
};
