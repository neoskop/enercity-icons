import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.366 20.25H6.748v-9c0-.009-.003-.017-.003-.025 3.624-.26 5.251-2.479 5.251-7.1 0-.62.505-1.125 1.125-1.125s1.124.505 1.124 1.125V10.5c0 .415.336.75.75.75h6.757c.275 0 .46.172.544.276.166.202.238.466.203.657l-2.133 8.067ZM4.5 21H2.25a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75H4.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Zm18.954-10.429a2.209 2.209 0 0 0-1.701-.821h-6.006V4.125A2.628 2.628 0 0 0 13.12 1.5a2.627 2.627 0 0 0-2.624 2.625c0 4.59-1.657 5.583-4.337 5.621A2.234 2.234 0 0 0 4.498 9H2.25C1.01 9 0 10.01 0 11.25v9c0 1.24 1.009 2.25 2.25 2.25h2.248c.663 0 1.253-.293 1.665-.75h14.203c.712 0 1.33-.507 1.46-1.16l2.133-8.073a2.38 2.38 0 0 0-.506-1.946Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgThumbsUp;
