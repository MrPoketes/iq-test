import { Outlet, useFetcher } from "@remix-run/react";
import { type ActionArgs } from "@remix-run/server-runtime";
import { useState, useEffect } from "react";
import { Button } from "~/Components/Button/Button";
import { Icon } from "~/Components/Icons/Icon";
import { Navigation } from "~/Components/Navigation/Navigation";
import {
  DEFAULT_ANSWER_VALUE,
  QuestionContext,
} from "~/Components/Question/Context/QuestionContext";
import { TestNavigation } from "~/Components/TestNavigation/TestNavigation";
import { Tooltip } from "~/Components/Tooltip/Tooltip";
import { TimeUtility } from "~/Components/Utilities/TimeUtility";
import { createAnswer } from "~/models/question.server";
import { createUserSession } from "~/session.server";

const ITEMS = [
  { title: "G", href: "/test/question/g" },
  { title: "E1", href: "/test/question/e1" },
  { title: "1", href: "/test/question/1" },
  { title: "2", href: "/test/question/2" },
  { title: "3", href: "/test/question/3" },
  { title: "4", href: "/test/question/4" },
  { title: "5", href: "/test/question/5" },
  { title: "E2", href: "/test/question/e2" },
  { title: "6", href: "/test/question/6" },
  { title: "7", href: "/test/question/7" },
  { title: "8", href: "/test/question/8" },
  { title: "9", href: "/test/question/9" },
  { title: "10", href: "/test/question/10" },
  { title: "E3", href: "/test/question/e3" },
  { title: "11", href: "/test/question/11" },
  { title: "12", href: "/test/question/12" },
  { title: "13", href: "/test/question/13" },
  { title: "14", href: "/test/question/14" },
  { title: "15", href: "/test/question/15" },
  { title: "E4", href: "/test/question/e4" },
  { title: "16", href: "/test/question/16" },
  { title: "17", href: "/test/question/17" },
  { title: "18", href: "/test/question/18" },
  { title: "19", href: "/test/question/19" },
  { title: "20", href: "/test/question/20" },
];

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const answers: any = {};
  for (const [key, value] of formData) {
    if (key !== "timeLeft") {
      answers[key] = value;
    }
  }
  const timeLeft = formData.get("timeLeft") as string;
  const result = await createAnswer(answers, Number(timeLeft));

  return createUserSession({ request, redirectTo: "/results", result });
};

export default function QuestionPage() {
  const fetcher = useFetcher();

  const [answers, setAnswers] = useState(DEFAULT_ANSWER_VALUE);
  const [isTimerPaused, setIsTimerPaused] = useState(true);

  const [time, setTime] = useState(1080);

  useEffect(() => {
    if (time > 0 && !isTimerPaused) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    if (time === 0) {
      fetcher.submit({ ...answers, timeLeft: time.toString() } as any, {
        method: "post",
      });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [time, isTimerPaused]);

  /**
   * It takes an object of answers and returns an array of unanswered questions
   */
  const getUnansweredQuestions = () => {
    const unansweredQuestions: string[] = [];
    Object.entries(answers).forEach(([key, value]) => {
      if (value === undefined) {
        unansweredQuestions.push(key);
      }
    });
    return unansweredQuestions;
  };

  const unansweredQuestions = getUnansweredQuestions();
  return (
    <QuestionContext.Provider
      value={{
        answers: answers,
        isTimerPaused: isTimerPaused,
        setIsTimerPaused: (value) => setIsTimerPaused(value),
        setAnswer: (id, answer) => {
          setAnswers((currentAnswers) => ({
            ...currentAnswers,
            [id]: answer,
          }));
        },
      }}
    >
      <Navigation>
        <div className="flex items-center space-x-5">
          <Tooltip
            content={
              unansweredQuestions.length === 0 ? (
                <p>All questions answered</p>
              ) : (
                <ul>
                  <li>Unanswered: </li>
                  {unansweredQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              )
            }
          >
            <div>
              <Icon.Info className="h-5 w-5" />
            </div>
          </Tooltip>
          <Button
            aria-label="Finish Test"
            aria-disabled={unansweredQuestions.length > 0}
            loading={fetcher.state === "submitting"}
            type="submit"
            disabled={unansweredQuestions.length > 0}
            onClick={() =>
              fetcher.submit({ ...answers, timeLeft: time.toString() } as any, {
                method: "post",
              })
            }
            color="green"
          >
            Finish
          </Button>
          <p>{TimeUtility.formatTime(time)}</p>
        </div>
      </Navigation>
      <main className="flex items-center justify-center p-3 px-5">
        <div className="lg:w-1/2">
          <Outlet />
          <TestNavigation items={ITEMS} totalPages={ITEMS.length} />
        </div>
      </main>
    </QuestionContext.Provider>
  );
}
