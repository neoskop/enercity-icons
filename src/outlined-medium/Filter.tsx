import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.5 18.286 3 1.5V12c0-.163.052-.32.15-.45l5.85-7.8h-15l5.85 7.8c.097.13.15.287.15.45v6.286Zm3.75 3.464a.754.754 0 0 1-.335-.079l-4.5-2.25A.75.75 0 0 1 9 18.75v-6.5l-6.6-8.8a.75.75 0 0 1 .6-1.2h18a.75.75 0 0 1 .6 1.2l-6.6 8.8V21a.75.75 0 0 1-.75.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
