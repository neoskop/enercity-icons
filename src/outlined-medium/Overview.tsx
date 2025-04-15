import * as React from 'react';
import { SVGProps } from 'react';
const SvgOverview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 9H1.5V1.5H9zM.75 10.5h9a.75.75 0 0 0 .75-.75v-9A.75.75 0 0 0 9.75 0h-9A.75.75 0 0 0 0 .75v9c0 .415.335.75.75.75M22.509 9h-7.5V1.5h7.5zm-8.25 1.5h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v9c0 .415.335.75.75.75M1.5 22.5H9V15H1.5zM9.75 24h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75m12.759-1.5h-7.5V15h7.5zm-8.25 1.5h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v9c0 .415.335.75.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOverview;
