import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfoX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12a12 12 0 0 0 12-12m-7.956-5.502 1.458 1.458L13.458 12l4.044 4.044-1.458 1.458L12 13.458l-4.044 4.044-1.458-1.458L10.542 12 6.498 7.956l1.458-1.458L12 10.542z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoX;
