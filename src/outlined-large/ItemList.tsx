import * as React from 'react';
import { SVGProps } from 'react';
const SvgItemList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 16V9h7l.002 7zm0 3h7c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3H9C7.346 6 6 7.346 6 9v7c0 1.654 1.346 3 3 3m47.5-8h-32a1.5 1.5 0 0 1 0-3h32a1.5 1.5 0 0 1 0 3m-14 6h-18a1.5 1.5 0 0 1 0-3h18a1.5 1.5 0 0 1 0 3m14 32h-32a1.5 1.5 0 0 1 0-3h32a1.5 1.5 0 0 1 0 3m-32 6h13a1.5 1.5 0 0 0 0-3h-13a1.5 1.5 0 0 0 0 3M9 47v7h7.002L16 47zm7 10H9c-1.654 0-3-1.346-3-3v-7c0-1.654 1.346-3 3-3h7c1.654 0 3 1.346 3 3v7c0 1.654-1.346 3-3 3m8.5-27h28a1.5 1.5 0 0 0 0-3h-28a1.5 1.5 0 0 0 0 3m23 6h-23a1.5 1.5 0 0 1 0-3h23a1.5 1.5 0 0 1 0 3M9 35v-7h7l.002 7zm0 3h7c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3H9c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgItemList;
