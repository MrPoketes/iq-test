import type { MetaFunction } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => {
  return { title: "Contact" };
};

export default function ContactPage() {
  return <div>Contact Page</div>;
}
