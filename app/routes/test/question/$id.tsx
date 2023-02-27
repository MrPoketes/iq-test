import { useLoaderData } from "@remix-run/react";
import { json, type LoaderArgs } from "@remix-run/server-runtime";
import { ComponentialQuestion } from "~/Components/Question/ComponentialQuestion/ComponentialQuestion";
import { ExperientialQuestion } from "~/Components/Question/ExperientialQuestion/ExperientialQuestion";
import type { QuestionIdType } from "~/Components/Question/Interfaces/QuestionInterfaces";
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
      return <ComponentialQuestion.Image id={id} />;
    }
    // Componential Question Text section
    return <div>Componential Text</div>;
  }
  // Experiential Question Section
  if (isExperientialImageId(id)) {
    // Experiential Question Image section
    return <ExperientialQuestion.Image id={id} />;
  }
  // Experiential Question Text section
  return <div>Experiential text</div>;
}
