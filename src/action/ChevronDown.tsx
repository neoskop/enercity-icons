import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.493 8.78a1.127 1.127 0 0 1 1.92-.796l5.643 5.643 5.53-5.53a1.124 1.124 0 1 1 1.591 1.591l-6.325 6.327a1.13 1.13 0 0 1-1.591 0L4.823 9.577c-.22-.22-.33-.508-.33-.796"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
