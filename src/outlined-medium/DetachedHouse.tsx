import * as React from 'react';
import { SVGProps } from 'react';
const SvgDetachedHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 21h-6v-6a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 15v6H3v-9h4.5a.752.752 0 0 0 .335-.079L12 9.84l4.165 2.082A.752.752 0 0 0 16.5 12H21v9Zm-7.5 0v-5.25h-3V21h3ZM4.04 6h15.92l2.11 4.5h-5.393l-4.342-2.171a.753.753 0 0 0-.67 0L7.323 10.5H1.93L4.04 6ZM6 4.5h.75V3H6v1.5Zm17.929 6.431-2.813-6a.75.75 0 0 0-.678-.431H8.25V2.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75V4.5h-.937a.75.75 0 0 0-.68.431l-2.812 6A.75.75 0 0 0 .75 12h.75v9.75c0 .415.335.75.75.75h19.5a.75.75 0 0 0 .75-.75V12h.75a.75.75 0 0 0 .679-1.069ZM5.25 14.25a.75.75 0 1 0 0 1.5h1.5a.75.75 0 1 0 0-1.5h-1.5Zm13.5 1.5h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5Zm-12 1.5h-1.5a.75.75 0 1 0 0 1.5h1.5a.75.75 0 1 0 0-1.5Zm10.5 0h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 1 1 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDetachedHouse;
