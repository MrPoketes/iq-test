import type { MetaFunction } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => {
  return { title: "Terms of Participation" };
};

export default function TermsPage() {
  return <div>Terms</div>;
}
