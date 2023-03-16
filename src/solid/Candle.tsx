import * as React from 'react';
import { SVGProps } from 'react';
const SvgCandle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 23.25c0 .413-.337.75-.75.75H5.25a.752.752 0 0 1-.75-.75c0-.413.338-.75.75-.75h1.5V12c0-2.07 1.68-3.75 3.75-3.75h.75V7.5c0-.03.015-.06.015-.09C10.072 7.155 9 6.293 9 4.875 9 3.623 10.178 0 12 0s3 3.623 3 4.875c0 1.418-1.072 2.28-2.265 2.535 0 .03.015.06.015.09v.75h.75c2.07 0 3.75 1.68 3.75 3.75v10.5h1.5c.413 0 .75.337.75.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCandle;
