import * as React from 'react';
import { SVGProps } from 'react';
const SvgDetachedHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 21h-6v-6a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 15v6H3v-9h4.5a.75.75 0 0 0 .335-.078L12 9.839l4.165 2.083A.76.76 0 0 0 16.5 12H21zm-10.5 0h3v-5.25h-3zM4.04 6h15.92l2.11 4.5h-5.393l-4.342-2.171a.75.75 0 0 0-.67 0L7.323 10.5H1.93zM6 4.5h.75V3H6zm17.929 6.431-2.813-6a.75.75 0 0 0-.678-.431H8.25V2.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75V4.5h-.937a.75.75 0 0 0-.68.431l-2.812 6A.75.75 0 0 0 .75 12h.75v9.75c0 .415.335.75.75.75h19.5a.75.75 0 0 0 .75-.75V12h.75a.75.75 0 0 0 .679-1.069M5.25 14.25a.75.75 0 1 0 0 1.5h1.5a.75.75 0 1 0 0-1.5zm13.5 1.5h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5m-13.5 1.5a.75.75 0 1 0 0 1.5h1.5a.75.75 0 1 0 0-1.5zm12 0h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 1 1 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDetachedHouse;
