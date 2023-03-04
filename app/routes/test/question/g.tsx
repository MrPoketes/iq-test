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
  return <div>Guide</div>;
}
