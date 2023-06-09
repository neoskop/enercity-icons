import * as React from 'react';
import { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 20.25a3 3 0 1 1 0-6v-4.5a7.504 7.504 0 0 1 4.503-6.877l.01-.15a3 3 0 0 1 5.984.15A7.504 7.504 0 0 1 19.5 9.75v4.5a3 3 0 1 1 0 6h-3.75a3.75 3.75 0 1 1-7.5 0H4.5Zm9.75 0h-4.5a2.25 2.25 0 0 0 4.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBell;
