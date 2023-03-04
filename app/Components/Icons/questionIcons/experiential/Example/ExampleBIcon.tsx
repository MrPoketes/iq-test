import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleBIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M54.8494 63.366L75 51.7321L95.1506 63.366V86.634L75 98.2679L54.8494 86.634V63.366Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
