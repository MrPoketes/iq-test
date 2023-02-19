import { Form, Link } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import { Button } from "~/Components/Button/Button";
import { Checkbox } from "~/Components/Checkbox/Checkbox";
import { IntroductionCheck } from "~/Components/IntroductionCheck/IntroductionCheck";

export const action = async () => {
  return redirect("/test");
};

export default function IntroductionPage() {
  return (
    <Form method="post">
      <div className="space-y-5">
        <p className="text-center text-2xl font-semibold">
          Ready to get started?
        </p>
        <IntroductionCheck description="Before starting the test, make sure you are in a place that allows you to concentrate on!" />
        <IntroductionCheck description="The test consists of 30 questions, gradually increasing in difﬁculty. Maximum test duration is 40 minutes." />
        <IntroductionCheck description="Evaluate questions from top to down. Choose the appropriate answer (A, B, C, D)" />
        <IntroductionCheck description="Please do not use any reference materials or the help of anyone else in solving these problems!" />
        <Checkbox name="terms">
          <span>I have read, understood and agree to the </span>
          <Link
            prefetch="intent"
            to="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms of Participation!
          </Link>
        </Checkbox>
        <Button shrink={false}>Start the test</Button>
      </div>
    </Form>
  );
}
