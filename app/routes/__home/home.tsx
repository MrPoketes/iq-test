import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import type { MetaFunction } from "@remix-run/server-runtime";
import { Button } from "~/Components/Button/Button";
import { Icon } from "~/Components/Icons/Icon";
import { Checkbox } from "~/Components/Checkbox/Checkbox";
import { Terms } from "~/Components/Terms/Terms";

export const meta: MetaFunction = () => {
  return { title: "Home" };
};

export const action = async () => {
  return redirect("/test");
};

export default function HomePage() {
  return (
    <Form method="post" className="lg:w-1/2">
      <div className="-mt-14 flex items-center justify-center -space-x-7">
        <p className="text-2xl font-semibold">Welcome to</p>
        <Icon.Logo className="h-36 w-36" />
      </div>
      <div className="-mt-8 space-y-3">
        <h2 className="text-lg">
          This IQ test was designed and developed by Armintas Zadeika as part of
          his final year Computer Science project at the University of York.
        </h2>
        <Terms />
        <Checkbox
          className="ml-1"
          name="terms"
          label="I have read, understood and agree to the Terms of Participation!"
        />
        <div className="flex justify-center">
          <Button color="green">Begin the test</Button>
        </div>
      </div>
    </Form>
  );
}