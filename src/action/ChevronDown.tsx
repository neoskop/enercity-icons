import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.337 9.787a1.127 1.127 0 0 1 1.92-.796l5.643 5.643 5.53-5.53a1.124 1.124 0 1 1 1.59 1.59l-6.324 6.327a1.128 1.128 0 0 1-1.591 0l-6.438-6.438c-.22-.22-.33-.508-.33-.796Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronDown;
