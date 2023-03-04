import { type LoaderArgs, redirect } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { Icon } from "~/Components/Icons/Icon";
import { ExperientialExampleIcons } from "~/Components/Icons/questionIcons/experiential/Example/ExperientialExampleIcons";
import { useQuestionContext } from "~/Components/Question/Context/QuestionContext";
import { ANSWER_OPTIONS } from "~/Components/Question/QuestionButton/QuestionButton";
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
  const iconStyles = "w-[4.5rem] h-[4.5rem]";
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
      {/* Example */}
      <h3 className="text-xl font-medium">Example:</h3>
      <div className="rows-2 grid items-center justify-center space-y-10">
        <div className="flex items-center justify-center">
          {ExperientialExampleIcons.Example.map((ExampleIcon, index) => {
            if (index === ExperientialExampleIcons.Example.length - 1) {
              return <ExampleIcon key={index} className={iconStyles} />;
            }
            if (index === ExperientialExampleIcons.Example.length - 2) {
              return (
                <div key={index} className="flex items-center">
                  <ExampleIcon className={iconStyles} />
                  <Icon.DoubleChevronRight className="h-6 w-6 text-gray-700 md:h-10 md:w-10" />
                </div>
              );
            }
            return (
              <div key={index} className="flex items-center">
                <ExampleIcon className={iconStyles} />
                <Icon.ChevronRight className="h-6 w-6 text-gray-700 md:h-10 md:w-10" />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center space-x-4">
          {[
            ExperientialExampleIcons.A,
            ExperientialExampleIcons.B,
            ExperientialExampleIcons.C,
            ExperientialExampleIcons.D,
          ].map((ExampleIcon, index) => (
            <div
              key={index}
              className="block rounded-md border-2 border-gray-300 p-2 text-center"
            >
              <ExampleIcon className={iconStyles} />
              <span>{ANSWER_OPTIONS[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-medium">Correct Answer: D</h3>
      <h3 className="text-xl font-medium">Explanation:</h3>
      <p>
        The series follows a pattern of progressively adding a new shape inside
        the previous one in each image. Image 1 is a circle, image 2 has a
        square inside the circle, image 3 has a triangle inside the square, and
        image 4 has a diamond inside the triangle. To complete the series, the
        fifth image should have a new shape inside the diamond.
      </p>
      <p>
        Option A, B, and C do not fit the pattern of the series. Option A adds a
        different shape altogether, while options B and C add shapes in a
        different configuration. Therefore, the correct answer is D.
      </p>
    </div>
  );
}
