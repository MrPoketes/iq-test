import {
  type AnswerType,
  CORRECT_ANSWERS,
} from "~/Components/Question/Context/QuestionContext";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
import { prisma } from "~/db.server";

export const createAnswer = async (answers: AnswerType, timeLeft: number) => {
  const userRecord = await prisma.user.create({
    data: {
      timeLeft,
    },
  });
  const userId = userRecord.id;
  const score = 100;
  await prisma.score.create({
    data: {
      score: 100,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  const answerRecords = Object.entries(answers).map(([questionId, option]) => {
    return {
      correct: option === CORRECT_ANSWERS[questionId as QuestionIdType],
      questionId: parseInt(questionId),
      userId,
    };
  });

  await prisma.question.createMany({
    data: answerRecords,
  });
  return score;
};
