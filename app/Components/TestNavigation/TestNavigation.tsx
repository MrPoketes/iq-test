import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FocusUtility } from "../Utilities/FocusUtility";
import { Link, useLocation } from "@remix-run/react";
import { ParseUtility } from "../Utilities/ParseUtility";
import { Icon } from "../Icons/Icon";

interface TestNavigationProps {
  totalPages: number;
  items: { title: string; href: string }[];
}

export const TestNavigation: React.FC<TestNavigationProps> = ({
  totalPages,
  items,
}) => {
  const location = useLocation();
  const [breakpoint, setBreakpoint] = useState<"desktop" | "mobile">("mobile");
  const urlId = ParseUtility.parse(location.pathname);
  const currentPage = items.findIndex(
    ({ title }) => title === urlId.toUpperCase()
  );
  const nextPageUrl: string | undefined = items[currentPage + 1]?.href;

  const previousPageUrl: string | undefined = items[currentPage - 1]?.href;

  const getDisplayedItems = () => {
    const itemsPerPage = breakpoint === "desktop" ? 9 : 5;
    let startIndex = Math.max(currentPage - 3, 0);
    if (totalPages - currentPage < 6) {
      startIndex = Math.max(totalPages - itemsPerPage, 0);
    }
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    return items.slice(startIndex, endIndex);
  };

  const getAriaLabel = (title: string) => {
    if (title.includes("G")) {
      return "Guide Page";
    }
    if (title.includes("E")) {
      if (title.includes("1")) {
        return "Explanation Page 1";
      }
      if (title.includes("2")) {
        return "Explanation Page 2";
      }
      if (title.includes("3")) {
        return "Explanation Page 3";
      }
      return "Explanation Page 4";
    }
    return `Question ${title}`;
  };

  useEffect(() => {
    if (window.innerWidth > 1022) {
      setBreakpoint("desktop");
      return;
    }
    setBreakpoint("mobile");
  }, []);

  const navigationButtonStyles = (pageUrl?: string) =>
    clsx(
      FocusUtility.style,
      !pageUrl
        ? "cursor-not-allowed text-gray-400"
        : "text-gray-500 hover:text-gray-600",
      "rounded-md p-2"
    );

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 transform">
      <div className="relative flex items-center justify-center space-x-1 rounded-md bg-gray-200 px-1 lg:mx-24">
        <Link
          aria-label="Previous Page"
          to={previousPageUrl}
          prefetch={previousPageUrl ? "intent" : undefined}
          className={navigationButtonStyles(previousPageUrl)}
        >
          <Icon.ChevronLeft className="h-4 w-4" />
        </Link>
        <div className="flex items-center justify-center space-x-3 overflow-x-auto p-1">
          {getDisplayedItems().map(({ title, href }, i) => (
            <Link
              aria-label={getAriaLabel(title)}
              key={i}
              prefetch="intent"
              to={href}
              className={clsx(
                "rounded-md p-2 text-sm",
                FocusUtility.style,
                title === urlId.toUpperCase()
                  ? "bg-gray-100 font-semibold text-gray-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              )}
            >
              {title}
            </Link>
          ))}
        </div>
        <Link
          aria-label="Next Page"
          to={nextPageUrl}
          prefetch={nextPageUrl ? "intent" : undefined}
          className={navigationButtonStyles(nextPageUrl)}
        >
          <Icon.ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
