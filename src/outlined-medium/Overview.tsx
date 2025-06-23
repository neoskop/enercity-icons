import * as React from 'react';
import { SVGProps } from 'react';
const SvgOverview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 9H1.5V1.5H9V9ZM.75 10.5h9a.75.75 0 0 0 .75-.75v-9A.75.75 0 0 0 9.75 0h-9A.75.75 0 0 0 0 .75v9c0 .415.335.75.75.75ZM22.509 9h-7.5V1.5h7.5V9Zm-8.25 1.5h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v9c0 .415.335.75.75.75ZM1.5 22.5H9V15H1.5v7.5ZM9.75 24h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Zm12.759-1.5h-7.5V15h7.5v7.5Zm-8.25 1.5h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v9c0 .415.335.75.75.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgOverview;
