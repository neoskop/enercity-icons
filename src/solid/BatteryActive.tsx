import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryActive = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.63 13.11-3.136 4.582a.68.68 0 0 1-.764.277.695.695 0 0 1-.48-.666V14.25H8.947a.684.684 0 0 1-.607-.375.702.702 0 0 1 .03-.736l3.135-4.581a.673.673 0 0 1 .765-.278c.285.09.48.36.48.667V12h2.302c.255 0 .487.143.607.375a.701.701 0 0 1-.03.735Zm1.994-10.86H16.5V1.125C16.5.502 15.997 0 15.374 0h-6.75C8.003 0 7.5.502 7.5 1.125V2.25H6.375C5.34 2.25 4.5 3.09 4.5 4.125v18C4.5 23.159 5.34 24 6.375 24h11.25c1.034 0 1.874-.84 1.874-1.875v-18c0-1.035-.84-1.875-1.875-1.875Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBatteryActive;
