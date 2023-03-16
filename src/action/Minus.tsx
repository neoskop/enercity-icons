import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.125 12.75H4.875a1.125 1.125 0 1 1 0-2.25h14.25a1.125 1.125 0 1 1 0 2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMinus;
