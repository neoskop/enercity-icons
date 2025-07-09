import * as React from 'react';
import { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.459 13.882.046.066c.055.082.114.162.173.25l6.618 9.366c.193.273.51.436.848.436.339 0 .655-.163.848-.436l6.604-9.36q.094-.132.185-.25l.04-.06a8.9 8.9 0 0 0 1.374-6.154 8.97 8.97 0 0 0-3.059-5.535A9.22 9.22 0 0 0 12.143 0a9.22 9.22 0 0 0-5.994 2.205A8.97 8.97 0 0 0 3.091 7.74a8.9 8.9 0 0 0 1.373 6.154zm7.685-8.623a3.81 3.81 0 0 1 3.52 2.315 3.71 3.71 0 0 1-.827 4.09 3.85 3.85 0 0 1-4.15.814 3.75 3.75 0 0 1-2.353-3.466c0-2.073 1.705-3.753 3.81-3.753"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
