import type { MetaFunction } from "@remix-run/server-runtime";
import { ListItem } from "~/Components/List/ListItem";

export const meta: MetaFunction = () => {
  return { title: "Contact" };
};

export default function ContactPage() {
  return (
    <div className="space-y-3 lg:w-1/2">
      <h1 className="text-center text-xl font-medium">Contacts</h1>
      <ListItem description="Any questions or suggestions can be sent to az778@york.ac.uk" />
    </div>
  );
}
