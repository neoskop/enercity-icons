import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.5 18.286 3 1.5V12c0-.163.052-.32.15-.45l5.85-7.8h-15l5.85 7.8c.097.13.15.287.15.45zm3.75 3.464a.75.75 0 0 1-.335-.079l-4.5-2.25A.75.75 0 0 1 9 18.75v-6.5l-6.6-8.8a.75.75 0 0 1 .6-1.2h18a.75.75 0 0 1 .6 1.2l-6.6 8.8V21a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;
