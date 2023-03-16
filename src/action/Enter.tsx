import * as React from 'react';
import { SVGProps } from 'react';
const SvgEnter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.995 5.904a.938.938 0 0 0-.933-.841h-4.125l-.095.004A.938.938 0 0 0 15 6l.005.096a.938.938 0 0 0 .932.841h3.188v5.625H5.382L7.99 9.837l.063-.073A.938.938 0 0 0 6.635 8.54L2.51 12.852l-.061.07a.938.938 0 0 0 .06 1.226l4.126 4.313.07.066a.937.937 0 0 0 1.255-.037l.066-.07a.938.938 0 0 0-.036-1.255l-2.61-2.727h14.681l.096-.005A.938.938 0 0 0 21 13.5V6l-.005-.096Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEnter;
