import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { Navigation } from "~/Components/Navigation/Navigation";
import {
  DEFAULT_ANSWER_VALUE,
  QuestionContext,
} from "~/Components/Question/Context/QuestionContext";
import { TestNavigation } from "~/Components/TestNavigation/TestNavigation";
import { Timer } from "~/Components/Timer/Timer";

export default function QuestionPage() {
  const [answers, setAnswers] = useState(DEFAULT_ANSWER_VALUE);
  const [isTimerPaused, setIsTimerPaused] = useState(true);
  const items = [
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
      <Navigation items={[]}>
        {/* TODO: Change this to 20 - 25min??? */}
        <Timer initialTime={2000} />
      </Navigation>
      <main className="flex items-center justify-center p-3 px-5">
        <div className="lg:w-1/2">
          <div className="space-y-3">
            <Outlet />
          </div>
          <TestNavigation
            items={items}
            totalPages={items.length}
            currentPage={5}
          />
        </div>
      </main>
    </QuestionContext.Provider>
  );
}
