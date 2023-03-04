import { useEffect } from "react";
import { useQuestionContext } from "~/Components/Question/Context/QuestionContext";

export default function FirstExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return <div>Explanation 1</div>;
}
