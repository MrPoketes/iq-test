import {
  type AnswerType,
  CORRECT_ANSWERS,
} from "~/Components/Question/Context/QuestionContext";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
import { MathUtility } from "~/Components/Utilities/MathUtility";
import { prisma } from "~/db.server";

/**
 * It takes an object of answers, and returns the number of correct answers.
 */
const getAllScores = async () => {
  const scores = await prisma.users.findMany({
    select: {
      score: true,
    },
  });
  return scores;
};

const getRawScore = (answers: AnswerType) => {
  return Object.entries(answers).filter(([questionId, option]) => {
    return option === CORRECT_ANSWERS[questionId as QuestionIdType];
  }).length;
};

/**
 * It takes an array of answers, calculates the raw score, then calculates the standard score based on
 * the raw score and the mean and standard deviation of all the scores in the database.
 */
const getScore = async (answers: AnswerType) => {
  const allScores = await getAllScores();

  const totalRawScore = 20;
  const rawScore = getRawScore(answers);
  if (rawScore === 0) {
    return 0;
  }

  if (allScores.length === 0) {
    return Math.round((rawScore / totalRawScore) * 100);
  }
  const meanRawScore = MathUtility.calculateMean(
    allScores.map((score) => score.score)
  );
  const std = MathUtility.calculateStandardDeviation(
    allScores.map((score) => score.score)
  );

  return Math.round(100 + 15 * ((rawScore - meanRawScore) / std));
};

/**
 * It creates a user record, then creates a bunch of question records, each of which has a foreign key
 * to the user record
 */
export const createAnswer = async (answers: AnswerType, timeLeft: number) => {
  const score = await getScore(answers);
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
