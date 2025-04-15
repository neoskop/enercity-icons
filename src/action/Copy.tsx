import * as React from 'react';
import { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.625 16.5A1.124 1.124 0 0 1 1.5 15.375V2.625c0-.622.502-1.125 1.125-1.125h12.728c.622 0 1.124.502 1.124 1.125L16.5 15.36a1.124 1.124 0 0 1-1.125 1.125zM3.75 3.75v10.5h10.5l-.015-10.5z"
    />
    <path
      fill="currentColor"
      d="M8.625 22.5A1.124 1.124 0 0 1 7.5 21.375v-2.25c0-.622.502-1.125 1.125-1.125s1.125.503 1.125 1.125v1.125h10.5l-.015-10.5h-1.102a1.123 1.123 0 0 1-1.125-1.125c0-.623.502-1.125 1.125-1.125h2.227c.623 0 1.125.502 1.125 1.125l.023 12.735a1.124 1.124 0 0 1-1.125 1.125l-12.75.015z"
    />
  </svg>
);
export default SvgCopy;
