import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.76 9.221H8.409V5.176A3.68 3.68 0 0 1 12.085 1.5a3.68 3.68 0 0 1 3.676 3.676V9.22Zm-3.01 9.265a.75.75 0 0 1-1.5 0v-3.75a.75.75 0 1 1 1.5 0v3.75ZM18.3 9.22h-1.04V5.176A5.182 5.182 0 0 0 12.086 0a5.182 5.182 0 0 0-5.177 5.176V9.22H5.7a2.703 2.703 0 0 0-2.7 2.7v9.38C3 22.79 4.211 24 5.7 24h12.6c1.489 0 2.7-1.21 2.7-2.7v-9.377c0-1.49-1.211-2.7-2.7-2.7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
