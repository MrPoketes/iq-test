import { useLoaderData } from "@remix-run/react";
import { json, type LoaderArgs } from "@remix-run/server-runtime";
import { ComponentialImageQuestion } from "~/Components/Question/ComponentialQuestion/ComponentialImageQuestion";
import { ExperientialImageQuestion } from "~/Components/Question/ExperientialQuestion/ExperientialImageQuestion";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
import { TextQuestion } from "~/Components/Question/TextQuestion";
import { QuestionUtility } from "~/Components/Question/Utilities/QuestionUtility";

export const loader = async (requestArguments: LoaderArgs) => {
  const { params } = requestArguments;

  return json(params.id! as QuestionIdType);
};

export default function TestPage() {
  const { isComponentialImageId, isExperientialImageId, isComponentialId } =
    QuestionUtility;
  const id = useLoaderData<typeof loader>();
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
