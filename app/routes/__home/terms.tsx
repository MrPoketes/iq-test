import type { MetaFunction } from "@remix-run/server-runtime";
import { Terms } from "~/Components/Terms/Terms";

export const meta: MetaFunction = () => {
  return { title: "Terms of Participation" };
};

export default function TermsPage() {
  return (
    <div className="space-y-3 text-gray-700 lg:w-1/2">
      <Terms />
    </div>
  );
}
