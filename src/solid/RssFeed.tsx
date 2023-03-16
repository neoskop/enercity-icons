import * as React from 'react';
import { SVGProps } from 'react';
const SvgRssFeed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 3a.75.75 0 0 0-.75.75V6c0 .415.335.75.75.75 7.444 0 13.5 6.056 13.5 13.5 0 .415.335.75.75.75h2.25a.75.75 0 0 0 .75-.75C21 10.738 13.262 3 3.75 3Zm0 6a.75.75 0 0 0-.75.75V12c0 .415.335.75.75.75 4.136 0 7.5 3.364 7.5 7.5 0 .415.335.75.75.75h2.25a.75.75 0 0 0 .75-.75C15 14.047 9.953 9 3.75 9ZM3 18.375a2.628 2.628 0 0 1 2.625-2.625 2.628 2.628 0 0 1 2.625 2.625A2.628 2.628 0 0 1 5.625 21 2.628 2.628 0 0 1 3 18.375Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRssFeed;
