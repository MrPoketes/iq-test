import type { IconProps } from "~/Components/Icons/Icon";

export const Q3CIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="120" y1="76.5" x2="30" y2="76.5" stroke="black" strokeWidth="3" />
    <line x1="76.5" y1="30" x2="76.5" y2="120" stroke="black" strokeWidth="3" />
    <line x1="66" y1="31.5" x2="86" y2="31.5" stroke="black" strokeWidth="3" />
    <line
      x1="66"
      y1="118.5"
      x2="86"
      y2="118.5"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="127"
      cy="77"
      r="8.5"
      transform="rotate(-180 127 77)"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="23"
      cy="77"
      r="8.5"
      transform="rotate(-180 23 77)"
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
