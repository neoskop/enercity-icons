import * as React from 'react';
import { SVGProps } from 'react';
const SvgCandle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 22.5V12c0-1.24 1.01-2.25 2.25-2.25h3c1.24 0 2.25 1.01 2.25 2.25v10.5h-7.5ZM10.5 4.875c0-1.124 1.027-3.234 1.474-3.378.498.144 1.526 2.254 1.526 3.378C13.5 5.765 12.518 6 12 6s-1.5-.235-1.5-1.125ZM18.75 22.5h-1.5V12a3.754 3.754 0 0 0-3.75-3.75h-.75V7.5c0-.03-.014-.057-.017-.087C13.929 7.159 15 6.293 15 4.875 15 3.622 13.822 0 12 0S9 3.622 9 4.875c0 1.418 1.071 2.284 2.267 2.538-.003.03-.017.056-.017.087v.75h-.75A3.754 3.754 0 0 0 6.75 12v10.5h-1.5a.75.75 0 1 0 0 1.5h13.5a.75.75 0 1 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCandle;
