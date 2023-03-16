import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 0h38a3 3 0 0 1 3 3v57.956a3 3 0 0 1-3 3H13c-1.656 0-3-1.344-3-3V3a3 3 0 0 1 3-3Zm38 60.956H13V3h38v57.956Zm-3-36H16V6h32v18.956Zm-3-3H19V9h26v12.956Zm-26 33h6v-3h-6v3Zm6-21h-6v-3h6v3Zm-6 7h6v-3h-6v3Zm6 7h-6v-3h6v3Zm14 7h6v-3h-6v3Zm6-21h-6v-3h6v3Zm-6 7h6v-3h-6v3Zm6 7h-6v-3h6v3Zm-16 7h6v-3h-6v3Zm6-21h-6v-3h6v3Zm-6 7h6v-3h-6v3Zm6 7h-6v-3h6v3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCalculator;
