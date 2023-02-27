import type { IconProps } from "~/Components/Icons/Icon";

export const Q3DFirstIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="79" cy="64" r="5.5" stroke="black" />
    <rect x="92" y="58" width="12" height="12" fill="black" />
    <path d="M79 91L72.0718 79H85.9282L79 91Z" fill="black" />
    <rect x="92" y="79" width="12" height="12" fill="black" />
    <line x1="45" y1="74.5" x2="106" y2="74.5" stroke="black" strokeWidth="3" />
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

export const Q3DSecondIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="76.5" y1="125" x2="76.5" y2="25" stroke="black" strokeWidth="3" />
    <rect x="81" y="35" width="12" height="12" fill="black" />
    <circle cx="87" cy="110" r="5.5" stroke="black" />
    <path d="M66 47L59.0718 35H72.9282L66 47Z" fill="black" />
    <rect x="60.5" y="104.5" width="11" height="11" stroke="black" />
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
