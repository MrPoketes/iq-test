import { useLocation } from "@remix-run/react";
import React from "react";
import { Icon } from "../Icons/Icon";
import type { NavigationItemProps } from "./NavigationItem";
import { NavigationItem } from "./NavigationItem";

interface NavigationProps {
  items?: NavigationItemProps[];
  children?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({
  items = [],
  children,
}) => {
  const location = useLocation();

  return (
    <div className="relative z-[11] h-12 w-full">
      <div className="fixed inset-x-0 flex h-12 items-center bg-gray-700 px-2 text-white">
        <Icon.Logo className="h-32 w-32" />
        <div className="space-x-3">
          {items.map((item, index) => (
            <NavigationItem
              key={index}
              {...item}
              selectedLink={location.pathname}
            />
          ))}
        </div>
        <div className="flex-1" />
        <div className="pr-8 text-lg font-semibold">{children}</div>
      </div>
    </div>
  );
};
