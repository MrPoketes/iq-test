import { Link } from "@remix-run/react";
import clsx from "clsx";
import React from "react";
import { FocusUtility } from "../Utilities/FocusUtility";

export interface NavigationItemProps {
  link: string;
  title: string;
}

interface NavigationItemComponentProps extends NavigationItemProps {
  selectedLink: string;
}

export const NavigationItem: React.FC<NavigationItemComponentProps> = ({
  link,
  title,
  selectedLink,
}) => {
  const selected = selectedLink === link;
  return (
    <Link
      to={link}
      prefetch="intent"
      className={clsx(
        "rounded p-2 hover:bg-gray-600",
        selected && "bg-gray-600",
        FocusUtility.style
      )}
    >
      {title}
    </Link>
  );
};
