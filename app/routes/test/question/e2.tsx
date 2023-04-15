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

export default function SecondExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  return (
    <div className="mb-20 space-y-3 text-gray-700">
      <h2 className="text-center text-2xl font-semibold">
        Section 2 explanation
      </h2>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <ul className="ml-3 list-disc space-y-2">
        <li>This section of the test will cover verbal analogy problems</li>
        <li>
          You will be shown a textual question of the form X {">"} Y {">>"} Z
          {" >"}
        </li>
        <li>
          Read the analogy carefully: Make sure you understand the analogy
          completely before attempting to solve it.
        </li>
        <li>
          Identify the relationship: Determine the relationship between the two
          terms in the first part of the analogy.
        </li>
        <li>
          Find the missing term: Using the relationship you identified, try to
          find a term that completes the analogy with the same relationship to
          the second term.
        </li>
        <li>
          Check your answer: Once you have identified a possible answer, check
          to make sure that the relationship between the terms in the analogy
          remains consistent.
        </li>
      </ul>
    </div>
  );
}
