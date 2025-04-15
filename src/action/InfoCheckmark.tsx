import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfoCheckmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12a12 12 0 0 0 12-12m-6.834-4.5 1.458 1.458-8.485 8.486-.032-.033-.084.084-4.773-4.773 1.458-1.458 3.347 3.347z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoCheckmark;
