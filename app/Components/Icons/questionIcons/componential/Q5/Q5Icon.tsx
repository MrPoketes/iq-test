import type { IconProps } from "~/Components/Icons/Icon";

export const Q5Icon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="33" cy="75" r="10.875" stroke="black" strokeWidth="2.25" />
    <circle cx="117" cy="75" r="10.875" stroke="black" strokeWidth="2.25" />
    <circle
      cx="75"
      cy="117"
      r="10.875"
      transform="rotate(-90 75 117)"
      stroke="black"
      strokeWidth="2.25"
    />
    <circle
      cx="75"
      cy="33"
      r="10.875"
      transform="rotate(-90 75 33)"
      stroke="black"
      strokeWidth="2.25"
    />
    <line
      x1="44.25"
      y1="74.625"
      x2="105.75"
      y2="74.625"
      stroke="black"
      strokeWidth="2.25"
    />
    <line
      x1="75.375"
      y1="105.75"
      x2="75.375"
      y2="44.25"
      stroke="black"
      strokeWidth="2.25"
    />
    <path
      d="M40.125 67.875L25.875 82.125L25.5 83.25L26.625 84L28.875 85.125L31.5 85.5H34.875L37.125 84.75L39.75 82.875L41.625 80.625L42.75 78.75L43.125 76.875V74.625L42.75 72L42 70.125L40.125 67.875Z"
      fill="black"
      stroke="black"
      strokeWidth="0.75"
    />
    <path
      d="M107.074 74.5366H127.226L128.287 74.0063L128.022 72.6805L127.226 70.294L125.635 68.1727L123.249 65.7862L121.128 64.7255L117.946 64.1952L115.029 64.4603L112.908 64.9907L111.317 66.0513L109.726 67.6423L108.135 69.7636L107.339 71.6198L107.074 74.5366Z"
      fill="black"
      stroke="black"
      strokeWidth="0.75"
    />
    <path
      d="M64.3713 115.834H84.5238L85.5845 115.304L85.3193 113.978L84.5238 111.591L82.9329 109.47L80.5464 107.084L78.425 106.023L75.2431 105.493L72.3263 105.758L70.2049 106.288L68.6139 107.349L67.023 108.94L65.432 111.061L64.6365 112.917L64.3713 115.834Z"
      fill="black"
      stroke="black"
      strokeWidth="0.75"
    />
    <path
      d="M82.125 25.5L67.875 39.75L67.5 40.875L68.625 41.625L70.875 42.75L73.5 43.125H76.875L79.125 42.375L81.75 40.5L83.625 38.25L84.75 36.375L85.125 34.5V32.25L84.75 29.625L84 27.75L82.125 25.5Z"
      fill="black"
      stroke="black"
      strokeWidth="0.75"
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
