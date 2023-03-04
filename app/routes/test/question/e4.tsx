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

export default function FourthExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  return (
    <div className="mb-20 space-y-3 text-gray-700">
      <h2 className="text-center text-2xl font-semibold">
        Section 4 explanation
      </h2>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <ul className="ml-3 list-disc space-y-2">
        <li>
          This section of the test will cover verbal series completion problems.
        </li>
        <li>
          You will be shown a textual question of the form A {">"} B {">"} C{" "}
          {">>"} D {">"}.
        </li>
        <li>
          Read the series carefully: Read the series of words given in the
          question carefully and try to identify the pattern or relationship
          between the left hand side {"(before >>)"}.
        </li>
        <li>
          Identify the rule: Once you have read the series carefully, identify
          the rule that governs the series.
        </li>
        <li>
          Determine the missing term: Using the pattern or rule you have
          identified, try to determine the missing term that would complete the
          series.
        </li>
        <li>
          Check your answer: Once you have determined the missing term, check
          your answer by verifying that the relationship between the terms in
          the series remains consistent.
        </li>
      </ul>
      {/* Example */}
      <h3 className="text-xl font-medium">Example:</h3>
      <div className="flex items-center justify-center">
        <p>
          Baby {">"} Toddler {">"} Child {">>"} Seedling {">"}
        </p>
      </div>
      <div className="grid grid-rows-2 justify-center space-y-3">
        <div className="flex items-center justify-center space-x-4">
          <div className="block min-w-[80px] rounded-md border-2 border-gray-300 p-2 text-center">
            <p>Leaf</p>
            <span>A</span>
          </div>
          <div className="block min-w-[80px] rounded-md border-2 border-gray-300 p-2 text-center">
            <p>Branch</p>
            <span>B</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="block min-w-[80px] rounded-md border-2 border-gray-300 p-2 text-center">
            <p>Tree</p>
            <span>C</span>
          </div>
          <div className="block min-w-[80px] rounded-md border-2 border-gray-300 p-2 text-center">
            <p>Bark</p>
            <span>D</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-medium">Correct Answer: C</h3>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <p>
        A baby, as it grows older, becomes a toddler and then a child; a
        seedling becomes a tree
      </p>
    </div>
  );
}
