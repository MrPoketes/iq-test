import { type LoaderArgs, redirect } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { useQuestionContext } from "~/Components/Question/Context/QuestionContext";
import { getSession } from "~/session.server";

export const loader = async (requestArguments: LoaderArgs) => {
  const session = await getSession(requestArguments.request);
  if (session.has("result")) {
    return redirect("/");
  }

  return null;
};

export default function GuidePage() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  return (
    <div className="space-y-3 text-gray-700">
      <h2 className="text-center text-2xl font-semibold">Guide</h2>
      <h3 className="text-xl font-medium">
        Main information for completing the test:
      </h3>
      <ul className="ml-3 list-disc space-y-2">
        <li>
          Top navigation has 3 items: information button, "Finish" button and
          the timer
        </li>
        <li>
          Hovering or clicking, if you are on mobile, on information button will
          show a list of unanswered questions
        </li>
        <li>
          The "Finish" button will only be clickable when all questions are
          answered
        </li>
        <li>
          When all questions are answered, the "Finish" button will light up
          green
        </li>
        <li>
          At the bottom of the screen there is a navigation bar, you can use it
          to navigate through the questions either by clicking question numbers
          or using the navigation arrows
        </li>
        <li>
          Each section has an explanation page, marked E1, E2 and so on, on the
          bottom navigation
        </li>
        <li>
          When visiting these pages, including this one, the timer will be
          paused, so you can take your time reading the information
        </li>
      </ul>
    </div>
  );
}
