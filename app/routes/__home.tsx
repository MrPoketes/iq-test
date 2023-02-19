import { Outlet } from "@remix-run/react";
import { Navigation } from "~/Components/Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation
        items={[
          { link: "/home", title: "Home" },
          { link: "/terms", title: "Terms of Participation" },
          { link: "/contact", title: "Contact" },
        ]}
      />
      <main className="flex items-center justify-center p-3 px-5">
        <Outlet />
      </main>
    </div>
  );
}
