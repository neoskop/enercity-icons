import * as React from 'react';
import { SVGProps } from 'react';
const SvgTownhall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.833 10.665a1.5 1.5 0 0 1 1.5-1.5h37.334a1.5 1.5 0 0 1 1.5 1.5v6.5h6.499a1.5 1.5 0 0 1 0 3H57.5v34.333h1.166a1.5 1.5 0 1 1 0 3H43.07a1.494 1.494 0 0 1-.14 0H32.07a1.618 1.618 0 0 1-.14 0H21.07a1.494 1.494 0 0 1-.14 0H5.333a1.5 1.5 0 0 1 0-3H6.5V20.165H5.333a1.5 1.5 0 1 1 0-3h6.5v-6.5ZM22.5 54.498V44a1.5 1.5 0 0 0-3 0v10.498h-10V20.165h45v34.333h-10V44a1.5 1.5 0 0 0-3 0v10.498h-8V44a1.5 1.5 0 0 0-3 0v10.498h-8Zm26.666-42.333v5H14.834v-5h34.334ZM32 25.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM23.5 31a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Zm10-2a1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 0-3h-.5V29Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTownhall;
