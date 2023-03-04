import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleCIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M56.7559 60.4508L75 51.6649L93.2441 60.4508L97.7501 80.1926L85.1247 96.0242H64.8753L52.2499 80.1926L56.7559 60.4508Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
