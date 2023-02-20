import React from "react";
import type { IconProps } from "~/Components/Icons/Icon";

export const Q1Icon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    width="150"
    height="150"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M63 114.5L87.5 107V67.5M87.5 67.5V28L63 21M87.5 67.5H63"
      stroke="black"
      stroke-width="3"
    />
    <rect
      x="1.5"
      y="1.5"
      width="147"
      height="147"
      stroke="black"
      stroke-width="3"
    />
  </svg>
);
