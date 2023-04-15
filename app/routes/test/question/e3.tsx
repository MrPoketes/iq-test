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

export default function ThirdExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  return (
    <div className="mb-20 space-y-3 text-gray-700">
      <h2 className="text-center text-2xl font-semibold">
        Section 3 explanation
      </h2>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <ul className="ml-3 list-disc space-y-2">
        <li>
          This section of the test will cover figural series completion
          problems.
        </li>
        <li>You will be shown a series of images</li>
        <li>
          Look at the series carefully: Observe the images in the series
          carefully and try to identify any patterns or relationships between
          the left hand side images {"(before >>)"}.
        </li>
        <li>
          Identify the rule: Once you have looked at the series, try to identify
          the rule that governs the relationship between the images.
        </li>
        <li>
          Determine the missing image: Using the pattern or rule you have
          identified, try to determine what the missing image should look like.
        </li>
        <li>
          Check your answer: Once you have determined the missing image, check
          your answer by verifying that the relationship between the images in
          the series remains consistent.
        </li>
      </ul>
    </div>
  );
}
