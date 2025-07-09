import * as React from 'react';
import { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.625 6H3.375a1.125 1.125 0 1 1 0-2.25h17.25a1.125 1.125 0 1 1 0 2.25m0 7.125H3.375a1.125 1.125 0 1 1 0-2.25h17.25a1.125 1.125 0 1 1 0 2.25M3.375 20.25h17.25a1.125 1.125 0 1 0 0-2.25H3.375a1.125 1.125 0 1 0 0 2.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenu;
