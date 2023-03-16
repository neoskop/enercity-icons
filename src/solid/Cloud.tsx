import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.254 8.3a6.705 6.705 0 0 0-6.38-4.55 6.757 6.757 0 0 0-6.749 6.75c0 .252.016.507.046.762A4.507 4.507 0 0 0 0 15.75c0 2.481 2.019 4.5 4.5 4.5H18c3.308 0 6-2.691 6-6 0-3.554-3.092-6.418-6.746-5.95Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCloud;
