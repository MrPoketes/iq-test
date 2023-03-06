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
  return (
    <div className="space-y-3 text-gray-700 lg:w-1/2">
      <h1 className="text-center text-xl font-medium">
        Thank you for participating!
      </h1>
      <h3 className="text-center text-lg">
        Your result is: <span className="font-medium">{result}</span>
      </h3>
      <p className="text-center text-sm">
        {"("}Please note that the score you have received may not represent your
        actual IQ. The score should only be used for entertainment purposes{")"}
      </p>
    </div>
  );
}
