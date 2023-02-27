import type { IconProps } from "~/Components/Icons/Icon";

export const Q3AIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="112" y1="85.5" x2="22" y2="85.5" stroke="black" strokeWidth="3" />
    <line x1="68.5" y1="39" x2="68.5" y2="129" stroke="black" strokeWidth="3" />
    <line x1="23.5" y1="76" x2="23.5" y2="96" stroke="black" strokeWidth="3" />
    <line
      x1="58"
      y1="127.5"
      x2="78"
      y2="127.5"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="119"
      cy="86"
      r="8.5"
      transform="rotate(-180 119 86)"
      stroke="black"
      strokeWidth="3"
    />
    <circle
      cx="68"
      cy="32"
      r="8.5"
      transform="rotate(-180 68 32)"
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
