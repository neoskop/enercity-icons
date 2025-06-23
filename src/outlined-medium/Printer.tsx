import * as React from 'react';
import { SVGProps } from 'react';
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 17.248v2.25h3v-7.507c0-.827-.673-1.5-1.5-1.5h-2.235l-.008.001-.007.002H5.25c-.003 0-.005 0-.007-.002a.024.024 0 0 0-.008-.001H3c-.827 0-1.5.673-1.5 1.5v7.507h3v-2.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75ZM6 22.498h12v-4.5H6v4.5ZM18 8.991H6V1.5h12v7.49Zm1.5 0H21c1.654 0 3 1.345 3 3v8.257a.75.75 0 0 1-.75.75H19.5v2.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-2.25H.75a.75.75 0 0 1-.75-.75v-8.257c0-1.655 1.346-3 3-3h1.5V.75A.75.75 0 0 1 5.25 0h13.5a.75.75 0 0 1 .75.75v8.24ZM3.75 11.997h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 1 1 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPrinter;
