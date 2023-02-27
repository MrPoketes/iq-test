import type { IconProps } from "~/Components/Icons/Icon";

export const Q3BIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="73.5" y1="120" x2="73.5" y2="30" stroke="black" strokeWidth="3" />
    <line x1="120" y1="76.5" x2="30" y2="76.5" stroke="black" strokeWidth="3" />
    <line x1="31.5" y1="87" x2="31.5" y2="67" stroke="black" strokeWidth="3" />
    <line
      x1="118.5"
      y1="87"
      x2="118.5"
      y2="67"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="73"
      cy="127"
      r="8.5"
      transform="rotate(-90 73 127)"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="73"
      cy="23"
      r="8.5"
      transform="rotate(-90 73 23)"
      stroke="black"
      strokeWidth="3"
    />
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
