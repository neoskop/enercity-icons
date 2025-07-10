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
      d="M11.622 14.738V3.375A3.374 3.374 0 0 0 8.245 0 3.377 3.377 0 0 0 4.87 3.375v11.363a5.25 5.25 0 0 0 2.25 9.142 5.254 5.254 0 0 0 6.05-3.333 5.25 5.25 0 0 0-1.547-5.81m-1.013 6.93a3.75 3.75 0 0 1-3.189.75 3.751 3.751 0 0 1-1.358-6.668l.308-.225V3.375a1.875 1.875 0 0 1 3.751 0v12.113l.315.225a3.75 3.75 0 0 1 .173 5.955m-1.613-4.635v-4.598h-1.5v4.598a1.875 1.875 0 1 0 1.5 0m6.752-7.283h4.502a.75.75 0 0 1 0 1.5h-4.502a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCold;
