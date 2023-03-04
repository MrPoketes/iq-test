import { useLoaderData } from "@remix-run/react";
import { json, redirect, type LoaderArgs } from "@remix-run/server-runtime";
import { getSession } from "~/session.server";

export const loader = async (requestArguments: LoaderArgs) => {
  const session = await getSession(requestArguments.request);
  if (session.has("result")) {
    return json(session.get("result"));
  }
  return redirect("/");
};

export default function ResultPage() {
  const result = useLoaderData<typeof loader>();
  return <div>Your result {result}</div>;
}
