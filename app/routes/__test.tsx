import { Outlet } from "@remix-run/react";
import { Navigation } from "~/Components/Navigation/Navigation";

export default function TestPage() {
  return (
    <div>
      <Navigation items={[]} />
      <main className="flex items-center justify-center p-3 px-5">
        <Outlet />
      </main>
    </div>
  );
}
