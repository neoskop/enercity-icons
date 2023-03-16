import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.599 3.45-6.6 8.797V21a.747.747 0 0 1-.75.75.65.65 0 0 1-.33-.082l-4.5-2.25A.74.74 0 0 1 9 18.75v-6.502L2.4 3.45a.749.749 0 0 1-.067-.788.739.739 0 0 1 .666-.412h18c.285 0 .549.158.676.413a.749.749 0 0 1-.075.787Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
