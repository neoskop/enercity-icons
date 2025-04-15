import * as React from 'react';
import { SVGProps } from 'react';
const SvgCold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.625 3.375v11.363a5.25 5.25 0 0 1-4.5 9.142 5.25 5.25 0 0 1-2.25-9.15V3.375a3.375 3.375 0 1 1 6.75 0M7.5 12.435v4.597a1.875 1.875 0 1 0 1.5 0v-4.597zm6.75-2.685h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCold;
