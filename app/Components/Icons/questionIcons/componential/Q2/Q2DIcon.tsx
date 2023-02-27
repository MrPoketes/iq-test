import type { IconProps } from "~/Components/Icons/Icon";

export const Q2DFirstIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M59.3631 112.5L14.6069 35.5L91.1369 35.5L135.893 112.5H59.3631Z"
      stroke="black"
      strokeWidth="3"
    />
    <circle cx="111" cy="69" r="4" fill="black" />
    <circle cx="96" cy="112" r="4" fill="black" />
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

export const Q2DSecondIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="28.5"
      y="26.5"
      width="97"
      height="97"
      stroke="black"
      strokeWidth="3"
    />
    <circle cx="78" cy="27" r="4" fill="black" />
    <circle cx="78" cy="123" r="4" fill="black" />
    <circle cx="28" cy="75" r="4" fill="black" />
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
