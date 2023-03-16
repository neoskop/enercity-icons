import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48.5 25H45v-8.47C45 8.94 39.29 3 32 3S19 8.94 19 16.53V25h-3.5a5.51 5.51 0 0 0-5.5 5.5v25c0 3.03 2.47 5.5 5.5 5.5h33c3.03 0 5.5-2.47 5.5-5.5v-25c0-3.03-2.47-5.5-5.5-5.5ZM22 16.53C22 10.63 26.39 6 32 6s10 4.62 10 10.53V25H22v-8.47ZM51 55.5a2.5 2.5 0 0 1-2.5 2.5h-33a2.5 2.5 0 0 1-2.5-2.5v-25a2.5 2.5 0 0 1 2.5-2.5h33a2.5 2.5 0 0 1 2.5 2.5v25Z"
      fill="currentColor"
    />
    <path
      d="M32 33.93c-2.76 0-5 2.24-5 5 0 2.23 1.48 4.1 3.5 4.74v5.83c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.83c2.02-.64 3.5-2.51 3.5-4.74 0-2.76-2.24-5-5-5Zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
