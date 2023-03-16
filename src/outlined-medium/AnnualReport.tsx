import * as React from 'react';
import { SVGProps } from 'react';
const SvgAnnualReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 18.75c0 .413-.337.75-.75.75H6.75a.752.752 0 0 1-.75-.75V2.25c0-.413.337-.75.75-.75h13.5c.413 0 .75.337.75.75v16.5Zm-3 3a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h.75v14.25C4.5 19.99 5.51 21 6.75 21H18v.75ZM20.25 0H6.75C5.51 0 4.5 1.01 4.5 2.25V3h-.75C2.51 3 1.5 4.01 1.5 5.25v16.5C1.5 22.99 2.51 24 3.75 24h13.5c1.24 0 2.25-1.01 2.25-2.25V21h.75c1.24 0 2.25-1.01 2.25-2.25V2.25C22.5 1.01 21.49 0 20.25 0Zm-1.5 3H8.25a.75.75 0 1 0 0 1.5h10.5a.75.75 0 1 0 0-1.5ZM13.5 6.02a.75.75 0 1 1 0 1.5H8.25a.75.75 0 1 1 0-1.5h5.25Zm3.375 7.105h-3v-3a.375.375 0 0 0-.375-.375 3.754 3.754 0 0 0-3.75 3.75 3.754 3.754 0 0 0 3.75 3.75 3.754 3.754 0 0 0 3.75-3.75.375.375 0 0 0-.375-.375ZM14.627 9c0-.207.167-.375.374-.375a3.377 3.377 0 0 1 3.374 3.373.375.375 0 0 1-.375.375l-3 .002a.375.375 0 0 1-.375-.375l.002-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAnnualReport;
