import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleIcon: React.FC<IconProps> = ({ className }) => (
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
    <path
      d="M34.2968 98.5L75 28L115.703 98.5H34.2968Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
