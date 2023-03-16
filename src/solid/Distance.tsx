import * as React from 'react';
import { SVGProps } from 'react';
const SvgDistance = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 3c.825 0 1.5.675 1.5 1.5S20.325 6 19.5 6 18 5.325 18 4.5 18.675 3 19.5 3Zm0-3C17.017 0 15 1.95 15 4.35c0 3.225 3.915 5.91 4.08 6.023a.767.767 0 0 0 .833.007l.01-.007c.278-.188 4.077-2.76 4.077-5.94C24 1.986 21.983 0 19.5 0Zm-15 13.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5S3 15.825 3 15s.675-1.5 1.5-1.5Zm0 7.5a.753.753 0 0 0 .412-.12l.011-.007C5.201 20.685 9 18.113 9 14.933 9 12.487 6.982 10.5 4.5 10.5S0 12.488 0 14.932c0 3.182 3.8 5.753 4.077 5.94l.01.008c.128.082.27.12.413.12Zm15-7.5h-5.625c-1.034 0-1.875.84-1.875 1.875 0 1.034.84 1.875 1.875 1.875h3a3.38 3.38 0 0 1 3.375 3.375A3.38 3.38 0 0 1 16.875 24H4.5a.75.75 0 1 1 0-1.5h12.375c1.034 0 1.875-.84 1.875-1.875 0-1.034-.84-1.875-1.875-1.875h-3a3.38 3.38 0 0 1-3.375-3.375A3.38 3.38 0 0 1 13.875 12H19.5a.75.75 0 1 1 0 1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDistance;
