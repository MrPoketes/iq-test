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

export default function FirstExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="mb-20 space-y-3 text-gray-700">
      <h2 className="text-center text-2xl font-semibold">
        Section 1 explanation
      </h2>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <ul className="ml-3 list-disc space-y-2">
        <li>
          This section of the test will cover figural classification problems.
        </li>
        <li>
          You will be shown a single image and then 4 sets of 2 images each.
        </li>
        <li>
          Look at the single image: Observe the single image given in the
          question carefully and try to identify its features.
        </li>
        <li>
          Identify the common feature: Once you have looked at the single image,
          try to identify the common feature that connects the two images in
          each answer option. The common feature could be shape, size,
          orientation etc.
        </li>
        <li>
          Determine the correct pair: Using the common feature you have
          identified, try to determine which pair of images best fits the single
          image given in the question.
        </li>
        <li>
          Check your answer: Once you have determined the correct pair, check
          your answer by verifying that the common feature between the pair of
          images in each answer option matches the common feature in the single
          image given in the question.
        </li>
      </ul>
    </div>
  );
}
