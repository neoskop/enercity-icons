import * as React from 'react';
import { SVGProps } from 'react';
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8.992h12V1.5H6v7.492ZM6 22.5h12V18H6v4.5Zm-.75-9h-1.5a.752.752 0 0 1-.75-.75c0-.412.337-.75.75-.75h1.5c.42 0 .75.338.75.75s-.33.75-.75.75ZM21 8.992h-1.5V.75c0-.412-.33-.75-.75-.75H5.25a.752.752 0 0 0-.75.75v8.242H3c-1.65 0-3 1.343-3 3v8.258c0 .413.338.75.75.75H4.5v2.25c0 .413.338.75.75.75h13.5c.42 0 .75-.337.75-.75V21h3.75c.42 0 .75-.337.75-.75v-8.258a3 3 0 0 0-3-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPrinter;
