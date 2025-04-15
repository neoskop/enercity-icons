import * as React from 'react';
import { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 20.25a3 3 0 1 1 0-6v-4.5a7.5 7.5 0 0 1 4.503-6.877l.01-.15a3 3 0 0 1 5.984.15A7.5 7.5 0 0 1 19.5 9.75v4.5a3 3 0 1 1 0 6h-3.75a3.75 3.75 0 1 1-7.5 0zm9.75 0h-4.5a2.25 2.25 0 0 0 4.5 0M12 1.5A1.5 1.5 0 0 0 10.5 3v.939A6 6 0 0 0 6 9.75v6H4.5a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3H18v-6a6 6 0 0 0-4.5-5.81V3A1.5 1.5 0 0 0 12 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;
