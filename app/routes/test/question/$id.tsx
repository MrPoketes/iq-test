import { useLoaderData } from "@remix-run/react";
import { json, redirect, type LoaderArgs } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { ComponentialImageQuestion } from "~/Components/Question/ComponentialQuestion/ComponentialImageQuestion";
import { useQuestionContext } from "~/Components/Question/Context/QuestionContext";
import { ExperientialImageQuestion } from "~/Components/Question/ExperientialQuestion/ExperientialImageQuestion";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
import { TextQuestion } from "~/Components/Question/TextQuestion";
import { QuestionUtility } from "~/Components/Question/Utilities/QuestionUtility";
import { getSession } from "~/session.server";

export const loader = async (requestArguments: LoaderArgs) => {
  const { params } = requestArguments;

  const session = await getSession(requestArguments.request);
  if (session.has("result")) {
    return redirect("/");
  }

  return json(params.id! as QuestionIdType);
};

export default function TestPage() {
  const { setIsTimerPaused } = useQuestionContext();

  const { isComponentialImageId, isExperientialImageId, isComponentialId } =
    QuestionUtility;
  const id = useLoaderData<typeof loader>();

  useEffect(() => {
    setIsTimerPaused(false);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  // Componential Question Section
  if (isComponentialId(id)) {
    // Componential Question Image section
    if (isComponentialImageId(id)) {
      return <ComponentialImageQuestion />;
    }
    // Componential Question Text section
    return <TextQuestion />;
  }
  // Experiential Question Section
  if (isExperientialImageId(id)) {
    // Experiential Question Image section
    return <ExperientialImageQuestion />;
  }
  // Experiential Question Text section
  return <TextQuestion />;
}
