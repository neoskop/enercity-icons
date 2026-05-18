import * as React from 'react';
import { SVGProps } from 'react';
const SvgCold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.625 3.375v11.363a5.25 5.25 0 0 1-4.5 9.142 5.25 5.25 0 0 1-2.25-9.15V3.375a3.375 3.375 0 1 1 6.75 0ZM7.5 12.435v4.597a1.875 1.875 0 1 0 1.5 0v-4.597H7.5Zm6.75-2.685h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCold;
