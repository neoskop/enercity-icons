import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.366 3.75H6.748v9l-.003.025c3.624.26 5.251 2.479 5.251 7.1 0 .62.505 1.125 1.125 1.125s1.124-.505 1.124-1.125V13.5a.75.75 0 0 1 .75-.75h6.757c.275 0 .46-.172.544-.276.166-.202.238-.466.203-.657zM4.5 3H2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75H4.5a.75.75 0 0 0 .75-.75v-9A.75.75 0 0 0 4.5 3m18.954 10.429a2.21 2.21 0 0 1-1.701.821h-6.006v5.625A2.63 2.63 0 0 1 13.12 22.5a2.627 2.627 0 0 1-2.624-2.625c0-4.59-1.657-5.583-4.337-5.621-.412.454-1 .746-1.662.746H2.25C1.01 15 0 13.99 0 12.75v-9C0 2.51 1.009 1.5 2.25 1.5h2.249c.662 0 1.252.293 1.665.75h14.202c.712 0 1.33.507 1.46 1.16l2.133 8.073a2.38 2.38 0 0 1-.506 1.946"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbsDown;
