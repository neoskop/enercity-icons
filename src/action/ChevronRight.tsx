import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.78 19.507a1.127 1.127 0 0 1-.796-1.92l5.643-5.643-5.53-5.53a1.124 1.124 0 1 1 1.591-1.591l6.327 6.325a1.13 1.13 0 0 1 0 1.591l-6.438 6.438c-.22.22-.508.33-.796.33"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;
