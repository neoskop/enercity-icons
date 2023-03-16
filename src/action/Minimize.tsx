import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.167 20.73A10.5 10.5 0 1 0 17.833 3.27 10.5 10.5 0 0 0 6.167 20.73Zm1.25-15.59a8.25 8.25 0 1 1 9.166 13.72A8.25 8.25 0 0 1 7.417 5.14Zm-.292 7.985h9.75a1.125 1.125 0 1 0 0-2.25h-9.75a1.125 1.125 0 1 0 0 2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMinimize;
