import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.855 3.6 2.122 8.025c.18.922-.525 1.875-1.47 1.875H15.75v6.375a1.876 1.876 0 0 1-3.75 0c0-2.25-.188-3.84-.84-4.875-.66-1.035-1.785-1.5-3.66-1.5a.752.752 0 0 1-.75-.75v-9c0-.413.337-.75.75-.75h13.62c.36 0 .667.255.735.6ZM.75 2.25H4.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H.75A.75.75 0 0 1 0 13.5V3a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgThumbsDown;
