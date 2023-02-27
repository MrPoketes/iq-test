import { Link } from "@remix-run/react";
import { Button } from "~/Components/Button/Button";

export default function GuidePage() {
  return (
    <div className="lg:w-1/2">
      <div className="space-y-3">
        <h2 className="text-center text-2xl font-semibold">Guide</h2>
        <p>
          Nostrud sint consequat in laborum sunt. Ex proident laborum
          reprehenderit nulla. Qui esse ipsum duis exercitation magna deserunt.
          Consectetur reprehenderit ad tempor occaecat dolore labore magna.
          Nulla laboris excepteur ex cupidatat aliqua ex laboris. Sit culpa
          aliqua nulla magna cillum minim cillum culpa et eu proident non ex et.
          Dolore cillum cillum aliquip eiusmod officia deserunt mollit elit sunt
          nulla commodo.
        </p>
      </div>
      <div className="flex justify-center">
        <Button as={Link} to="/test/question/1" prefetch="intent" color="green">
          Begin the test
        </Button>
      </div>
    </div>
  );
}
