import * as React from 'react';
import { SVGProps } from 'react';
const SvgFileX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.293 11.293a1 1 0 1 1 1.414 1.414L13.414 14l1.293 1.293a1 1 0 1 1-1.414 1.414L12 15.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L10.586 14l-1.293-1.293a1 1 0 1 1 1.414-1.414L12 12.586l1.293-1.293Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h7ZM7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h-3a2 2 0 0 1-2-2V4H7Zm8 3h1.586L15 5.414V7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFileX;
