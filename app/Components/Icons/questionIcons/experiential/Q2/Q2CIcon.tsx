import type { IconProps } from "~/Components/Icons/Icon";

export const Q2CIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="26.5"
      y="26.5"
      width="97"
      height="97"
      stroke="black"
      strokeWidth="3"
    />
    <rect x="25" y="25" width="100" height="90" fill="black" />
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
