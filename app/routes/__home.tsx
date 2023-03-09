import { Outlet, useLoaderData } from "@remix-run/react";
import { json, type LoaderArgs } from "@remix-run/server-runtime";
import { Navigation } from "~/Components/Navigation/Navigation";
import { getSession } from "~/session.server";

export const loader = async (requestArguments: LoaderArgs) => {
  const session = await getSession(requestArguments.request);
  if (session.has("result")) {
    return json(true);
  }
  return json(false);
};

export default function Home() {
  const hasTakenTest = useLoaderData<typeof loader>();
  const items = hasTakenTest
    ? [
        { link: "/home", title: "Home" },
        { link: "/terms", title: "Terms" },
        { link: "/contact", title: "Contact" },
        { link: "/literature", title: "Literature" },
        { link: "/results", title: "Results" },
      ]
    : [
        { link: "/home", title: "Home" },
        { link: "/terms", title: "Terms" },
        { link: "/literature", title: "Literature" },
        { link: "/contact", title: "Contact" },
      ];
  return (
    <div>
      <Navigation items={items} />
      <main className="flex items-center justify-center p-3 px-5">
        <Outlet />
      </main>
    </div>
  );
}
