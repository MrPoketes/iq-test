import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleFirstIcon: React.FC<IconProps> = ({ className }) => (
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
    <circle cx="75" cy="75" r="48.5" stroke="black" strokeWidth="3" />
  </svg>
);

export const ExampleSecondIcon: React.FC<IconProps> = ({ className }) => (
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
    <circle cx="75" cy="75" r="48.5" stroke="black" strokeWidth="3" />
    <rect
      x="51.5"
      y="51.5"
      width="47"
      height="47"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
export const ExampleThirdIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M55.9474 86L75 53L94.0526 86H55.9474Z"
      stroke="black"
      strokeWidth="3"
    />
    <rect
      x="26.5"
      y="26.5"
      width="97"
      height="97"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);

export const ExampleFourthIcon: React.FC<IconProps> = ({ className }) => (
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
      x="42.1213"
      y="85"
      width="47"
      height="47"
      transform="rotate(-45 42.1213 85)"
      stroke="black"
      strokeWidth="3"
    />
    <path
      d="M7.7929 126.446L75.1785 24.7211L142.215 126.446H7.7929Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
