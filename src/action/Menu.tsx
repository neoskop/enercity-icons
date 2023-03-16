import * as React from 'react';
import { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.625 6H3.375a1.125 1.125 0 1 1 0-2.25h17.25a1.125 1.125 0 1 1 0 2.25Zm0 7.125H3.375a1.125 1.125 0 1 1 0-2.25h17.25a1.125 1.125 0 1 1 0 2.25ZM3.375 20.25h17.25a1.125 1.125 0 1 0 0-2.25H3.375a1.125 1.125 0 1 0 0 2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMenu;
