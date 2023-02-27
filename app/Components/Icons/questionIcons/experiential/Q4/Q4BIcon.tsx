import type { IconProps } from "~/Components/Icons/Icon";

export const Q4BIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="75" cy="75" r="23.5" stroke="black" strokeWidth="3" />
    <line x1="75.5" y1="51" x2="75.5" y2="99" stroke="black" strokeWidth="3" />
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
