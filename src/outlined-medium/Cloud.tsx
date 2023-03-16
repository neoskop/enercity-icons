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
      d="M4.5 12.75c-1.655 0-3 1.345-3 3 0 1.654 1.345 3 3 3H18c2.482 0 4.5-2.018 4.5-4.5s-2.018-4.5-4.5-4.5a4.56 4.56 0 0 0-1.098.14.74.74 0 0 1-.574-.088.746.746 0 0 1-.339-.473 5.219 5.219 0 0 0-5.114-4.079 5.257 5.257 0 0 0-5.25 5.25c0 .447.062.906.186 1.364a.75.75 0 0 1-.842.935c-.155-.024-.309-.049-.469-.049Zm13.5 7.5H4.5a4.504 4.504 0 0 1-4.5-4.5 4.506 4.506 0 0 1 4.17-4.488 6.531 6.531 0 0 1-.045-.762 6.757 6.757 0 0 1 6.75-6.75 6.706 6.706 0 0 1 6.379 4.549C20.907 7.832 24 10.697 24 14.25c0 3.308-2.692 6-6 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCloud;
