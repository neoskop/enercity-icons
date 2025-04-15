import * as React from 'react';
import { SVGProps } from 'react';
const SvgTownhall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.833 10.665a1.5 1.5 0 0 1 1.5-1.5h37.334a1.5 1.5 0 0 1 1.5 1.5v6.5h6.499a1.5 1.5 0 0 1 0 3H57.5v34.333h1.166a1.5 1.5 0 1 1 0 3H43.07a2 2 0 0 1-.14 0H32.07a2 2 0 0 1-.14 0H21.07a2 2 0 0 1-.14 0H5.333a1.5 1.5 0 0 1 0-3H6.5V20.165H5.333a1.5 1.5 0 1 1 0-3h6.5zM22.5 54.498V44a1.5 1.5 0 0 0-3 0v10.498h-10V20.165h45v34.333h-10V44a1.5 1.5 0 0 0-3 0v10.498h-8V44a1.5 1.5 0 0 0-3 0v10.498zm26.667-42.333v5H14.832v-5zM32 25.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M23.5 31a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0m10-2a1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 0-3h-.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTownhall;
