import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleDIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="1.5"
      width="147"
      height="147"
      stroke="black"
      strokeWidth="3"
    />
    <rect
      x="6.12132"
      y="75"
      width="97"
      height="97"
      transform="rotate(-45 6.12132 75)"
      stroke="black"
      strokeWidth="3"
    />
    <path
      d="M58.4704 58.4704L75 51.6236L91.5296 58.4704L98.3764 75L91.5296 91.5296L75 98.3764L58.4704 91.5296L51.6236 75L58.4704 58.4704Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
