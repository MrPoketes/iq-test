import React from "react";
import clsx from "clsx";
import { FocusUtility } from "../Utilities/FocusUtility";
import { Link, useLocation } from "@remix-run/react";
import { ParseUtility } from "../Utilities/ParseUtility";
import { Icon } from "../Icons/Icon";

interface TestNavigationProps {
  currentPage: number;
  totalPages: number;
  items: { title: string; href: string }[];
}

export const TestNavigation: React.FC<TestNavigationProps> = ({
  totalPages,
  items,
}) => {
  const location = useLocation();
  const urlId = ParseUtility.parse(location.pathname);
  const currentPage = items.findIndex(
    ({ title }) => title === urlId.toUpperCase()
  );
  const nextPageUrl: string | undefined = items[currentPage + 1]?.href;

  const previousPageUrl: string | undefined = items[currentPage - 1]?.href;

  const getDisplayedItems = () => {
    if (totalPages <= 5) {
      return items;
    } else {
      if (currentPage <= 3) {
        return items.slice(0, 5);
      } else if (currentPage >= totalPages - 2) {
        return items.slice(totalPages - 5);
      }
      return items.slice(currentPage - 3, currentPage + 2);
    }
  };

  return (
    <div className="relative flex items-center justify-center space-x-4 rounded-md bg-gray-200">
      <Link
        to={previousPageUrl}
        prefetch={previousPageUrl ? "intent" : undefined}
        className={clsx(
          FocusUtility.style,
          "rounded-full p-2 text-gray-400 hover:text-gray-600 disabled:cursor-default disabled:text-gray-300"
        )}
      >
        <Icon.ChevronLeft className="h-4 w-4" />
      </Link>
      <div className="flex items-center justify-center space-x-3 overflow-x-auto p-1">
        {getDisplayedItems().map(({ title, href }, i) => (
          <Link
            key={i}
            prefetch="intent"
            to={href}
            className={clsx(
              "rounded-md p-2 text-sm",
              FocusUtility.style,
              title === urlId.toUpperCase()
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            )}
          >
            {title}
          </Link>
        ))}
      </div>
      <Link
        to={nextPageUrl}
        prefetch={nextPageUrl ? "intent" : undefined}
        className={clsx(
          FocusUtility.style,
          "rounded-full p-2 text-gray-400 hover:text-gray-600 disabled:cursor-default disabled:text-gray-300"
        )}
      >
        <Icon.ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
};
