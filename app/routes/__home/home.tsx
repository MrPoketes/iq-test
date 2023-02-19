import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/server-runtime";
import { Button } from "~/Components/Button/Button";
import { Icon } from "~/Components/Icons/Icon";

export const meta: MetaFunction = () => {
  return { title: "Home" };
};

export default function HomePage() {
  return (
    <div>
      <div className="-mt-14 flex items-center justify-center -space-x-7">
        <p className="text-2xl font-semibold">Welcome to</p>
        <Icon.Logo className="h-36 w-36" />
      </div>
      <div>
        <p>
          Aliquip consectetur laborum magna et in ut eu incididunt minim do.
          Cillum commodo exercitation laboris aliqua minim eiusmod nisi ipsum
          culpa proident deserunt est consequat sint. Esse nulla sunt cupidatat
          deserunt tempor quis dolore irure irure veniam irure magna dolor ex.
          Sit magna duis nulla nisi veniam ea proident laborum sint. Deserunt do
          nisi tempor velit adipisicing labore deserunt sunt non quis. Aute non
          in ad reprehenderit nostrud aliqua consequat incididunt. Dolor est
          nostrud sit ullamco. Et dolor est est eu nulla sit deserunt. Consequat
          cupidatat enim dolor non nisi est deserunt in mollit cupidatat tempor.
          Incididunt aliquip aute voluptate veniam duis velit elit veniam.
          Laboris cupidatat Lorem excepteur mollit do consequat eiusmod.
        </p>
      </div>
      <Button shrink={false} as={Link} to="/intro" prefetch="intent">
        Begin the test
      </Button>
    </div>
  );
}
