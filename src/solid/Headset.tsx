import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeadset = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 12c0 2.7-2.01 4.942-4.612 5.31v1.515a3.707 3.707 0 0 1-3.706 3.697h-.495A2.215 2.215 0 0 1 13.103 24h-2.212a2.227 2.227 0 0 1-2.228-2.228c0-1.222.997-2.22 2.228-2.22h2.212c.96 0 1.777.615 2.084 1.47h.495a2.203 2.203 0 0 0 2.206-2.197V7.387A5.893 5.893 0 0 0 12 1.5c-3.248 0-5.894 2.64-5.894 5.887v9.225c0 .413-.331.75-.75.75A5.365 5.365 0 0 1 0 12a5.364 5.364 0 0 1 4.642-5.31C4.995 2.947 8.16 0 12 0s6.997 2.947 7.35 6.69C21.968 7.042 24 9.285 24 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeadset;
