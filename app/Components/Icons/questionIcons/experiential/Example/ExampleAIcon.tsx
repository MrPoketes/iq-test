import type { IconProps } from "~/Components/Icons/Icon";

export const ExampleAIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M52.9869 67.8475L75 51.8541L97.0131 67.8475L88.6048 93.7254H61.3952L52.9869 67.8475Z"
      stroke="black"
      strokeWidth="3"
    />
  </svg>
);
