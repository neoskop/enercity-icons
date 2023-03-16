import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.125 10.875h-6v-6a1.125 1.125 0 1 0-2.25 0v6h-6a1.125 1.125 0 1 0 0 2.25h6v6a1.125 1.125 0 1 0 2.25 0v-6h6a1.125 1.125 0 1 0 0-2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlus;
