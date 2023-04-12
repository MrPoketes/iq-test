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
  // const iconStyles = "w-[4.5rem] h-[4.5rem]";
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
      {/* Example */}
      {/* <h3 className="text-xl font-medium">Example:</h3>
      <div className="flex items-center justify-center">
        <ComponentialExampleIcons.Example className={iconStyles} />
      </div>
      <div className="grid grid-rows-2 justify-center space-y-3">
        <div className="flex items-center justify-center space-x-4">
          {[
            ComponentialExampleIcons.ExampleA,
            ComponentialExampleIcons.ExampleB,
          ].map((ExampleIcons, index) => (
            <div
              key={index}
              className="block rounded-md border-2 border-gray-300 p-2 text-center"
            >
              <div className="flex items-center space-x-3">
                {ExampleIcons.map((ExampleIcon, iconIndex) => (
                  <ExampleIcon key={iconIndex} className={iconStyles} />
                ))}
              </div>
              <span>{ANSWER_OPTIONS[index]}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-4">
          {[
            ComponentialExampleIcons.ExampleC,
            ComponentialExampleIcons.ExampleD,
          ].map((ExampleIcons, index) => (
            <div
              key={index}
              className="block rounded-md border-2 border-gray-300 p-2 text-center"
            >
              <div className="flex items-center space-x-3">
                {ExampleIcons.map((ExampleIcon, iconIndex) => (
                  <ExampleIcon key={iconIndex} className={iconStyles} />
                ))}
              </div>
              <span>{ANSWER_OPTIONS[index + 2]}</span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-xl font-medium">Correct Answer: B</h3>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <p>
        The single image is a triangle, which is a shape with three sides. The
        correct pair in answer option B is a rectangle and a square, which are
        also shapes with four sides. The common feature in this pair is the
        number of sides, which matches the single image. The pairs in answer
        options A, C, and D do not share this common feature.
      </p> */}
    </div>
  );
}
