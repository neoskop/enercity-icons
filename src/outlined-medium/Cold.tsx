import * as React from 'react';
import { SVGProps } from 'react';
const SvgCold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.625 14.738V3.375a3.375 3.375 0 0 0-6.75 0v11.363a5.25 5.25 0 0 0 2.25 9.142 5.25 5.25 0 0 0 4.5-9.142Zm-1.012 6.93a3.75 3.75 0 0 1-3.188.75 3.75 3.75 0 0 1-1.357-6.668l.307-.225V3.375a1.875 1.875 0 0 1 3.75 0v12.113l.315.225a3.749 3.749 0 0 1 .173 5.955Z"
      fill="currentColor"
    />
    <path
      d="M9 17.033v-4.598H7.5v4.598a1.875 1.875 0 1 0 1.5 0ZM20.25 9.75h-4.5a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCold;
