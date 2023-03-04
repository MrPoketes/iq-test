import { useEffect } from "react";
import { useQuestionContext } from "~/Components/Question/Context/QuestionContext";

export default function ThirdExplanation() {
  const { setIsTimerPaused } = useQuestionContext();
  useEffect(() => {
    setIsTimerPaused(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
  return <div>Explanation 3</div>;
}
