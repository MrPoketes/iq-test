import React from "react";
import type { IconProps } from "~/Components/Icons/Icon";

export const Q3Icon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="25" y1="73.5" x2="125" y2="73.5" stroke="black" strokeWidth="3" />
    <circle cx="75" cy="45" r="6" fill="black" />
    <path d="M68.9378 65.5L75 55L81.0622 65.5H68.9378Z" stroke="black" />
    <path d="M81.0622 84.5L75 95L68.9378 84.5H81.0622Z" stroke="black" />
    <circle cx="75" cy="105" r="6" fill="black" />
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
