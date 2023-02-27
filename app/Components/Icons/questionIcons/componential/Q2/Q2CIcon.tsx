import type { IconProps } from "~/Components/Icons/Icon";

export const Q2CFirstIcon: React.FC<IconProps> = ({ className }) => (
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
    <circle cx="123" cy="27" r="4" fill="black" />
    <circle cx="27" cy="123" r="4" fill="black" />
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

export const Q2CSecondIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M117.502 51.25L75.5 124L33.4978 51.25L117.502 51.25Z"
      stroke="black"
      strokeWidth="3"
    />
    <path
      d="M113 52C113 49.7909 114.791 48 117 48C119.209 48 121 49.7909 121 52C121 54.2091 119.209 56 117 56C114.791 56 113 54.2091 113 52Z"
      fill="black"
    />
    <circle
      cx="76"
      cy="123"
      r="4"
      transform="rotate(-180 76 123)"
      fill="black"
    />
    <circle cx="34" cy="52" r="4" transform="rotate(-180 34 52)" fill="black" />
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
