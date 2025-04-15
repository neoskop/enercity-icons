import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 0h38a3 3 0 0 1 3 3v57.956a3 3 0 0 1-3 3H13c-1.656 0-3-1.344-3-3V3a3 3 0 0 1 3-3m38 60.956H13V3h38zm-3-36H16V6h32zm-3-3H19V9h26zm-26 33h6v-3h-6zm6-21h-6v-3h6zm-6 7h6v-3h-6zm6 7h-6v-3h6zm14 7h6v-3h-6zm6-21h-6v-3h6zm-6 7h6v-3h-6zm6 7h-6v-3h6zm-16 7h6v-3h-6zm6-21h-6v-3h6zm-6 7h6v-3h-6zm6 7h-6v-3h6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculator;
