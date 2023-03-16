import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.625 19.513a1.127 1.127 0 0 1-.796-1.92l5.642-5.643-5.53-5.53a1.124 1.124 0 1 1 1.591-1.59l6.327 6.324a1.128 1.128 0 0 1 0 1.592L9.42 19.184c-.22.22-.508.33-.796.33Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChevronRight;
