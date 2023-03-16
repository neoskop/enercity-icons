import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.063 4.5a1.127 1.127 0 0 1 .796 1.92l-5.643 5.643 5.53 5.53a1.124 1.124 0 1 1-1.59 1.59L7.829 12.86a1.128 1.128 0 0 1 0-1.592l6.438-6.438c.22-.22.508-.33.796-.33Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronLeft;
