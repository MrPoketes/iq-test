import { Outlet } from "@remix-run/react";
import { TestNavigation } from "~/Components/TestNavigation/TestNavigation";

export default function QuestionPage() {
  const items = [
    { title: "E1", href: "/test/question/e1" },
    { title: "1", href: "/test/question/1" },
    { title: "2", href: "/test/question/2" },
    { title: "3", href: "/test/question/3" },
    { title: "4", href: "/test/question/4" },
    { title: "5", href: "/test/question/5" },
    { title: "6", href: "/test/question/6" },
    { title: "7", href: "/test/question/7" },
    { title: "8", href: "/test/question/8" },
    { title: "9", href: "/test/question/9" },
    { title: "10", href: "/test/question/10" },
    { title: "E2", href: "/test/question/e2" },
    { title: "11", href: "/test/question/11" },
    { title: "12", href: "/test/question/12" },
    { title: "13", href: "/test/question/13" },
    { title: "14", href: "/test/question/14" },
    { title: "15", href: "/test/question/15" },
    { title: "16", href: "/test/question/16" },
    { title: "17", href: "/test/question/17" },
    { title: "18", href: "/test/question/18" },
    { title: "19", href: "/test/question/19" },
    { title: "20", href: "/test/question/20" },
  ];
  return (
    <div className="lg:w-1/2">
      <div className="space-y-3">
        <Outlet />
      </div>
      <div>
        <TestNavigation
          items={items}
          totalPages={items.length}
          currentPage={5}
        />
      </div>
    </div>
  );
}