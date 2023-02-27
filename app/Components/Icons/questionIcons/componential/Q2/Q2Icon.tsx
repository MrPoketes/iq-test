import React from "react";
import type { IconProps } from "~/Components/Icons/Icon";

export const Q2Icon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4679 114.5L55.4117 37.5H136.407L92.1322 114.5H15.4679Z"
      stroke="black"
      strokeWidth="3"
    />
    <circle cx="55" cy="37" r="4" fill="black" />
    <circle cx="93" cy="113" r="4" fill="black" />
    <circle cx="15" cy="113" r="4" fill="black" />
    <rect
      x="1.5"
      y="1.5"
      width="147"
      height="147"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
