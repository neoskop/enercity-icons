import * as React from 'react';
import { SVGProps } from 'react';
const SvgCity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 22.5H18v-2.189h4.5V22.5Zm-15-12v12h9v-12h-9Zm-1.5 3v9H1.5v-9H6Zm11.25-6V9H6.75V7.5h10.5Zm5.25-2.25h-9.75V6H18a.75.75 0 0 1 .75.75v.75h3.75V5.25Zm0-1.5h-9.75V1.5h9.75v2.25Zm0 15.061H18V16.5h4.5v2.313Zm0-3.812H18v-2.25h4.5V15Zm-3.75-6v.75a.75.75 0 0 1-.75.75v.75h4.5V9h-3.75ZM12 0h11.25a.75.75 0 0 1 .75.75v22.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75v-10.5A.75.75 0 0 1 .75 12H6v-1.5a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 6 6h5.25V.75A.75.75 0 0 1 12 0ZM3 15.75a.75.75 0 1 1 1.5 0v.75a.75.75 0 1 1-1.5 0v-.75Zm.75 3a.75.75 0 0 0-.75.75v.75a.75.75 0 1 0 1.5 0v-.75a.75.75 0 0 0-.75-.75ZM9 13.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5A.75.75 0 0 1 9 13.5Zm.75 2.25a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5h-4.5ZM9 19.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5A.75.75 0 0 1 9 19.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCity;
