import * as React from 'react';
import { SVGProps } from 'react';
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8.993h12V1.5H6zM6 22.5h12V18H6zm-.75-9h-1.5a.75.75 0 0 1-.75-.75c0-.412.337-.75.75-.75h1.5c.42 0 .75.338.75.75s-.33.75-.75.75M21 8.993h-1.5V.75c0-.412-.33-.75-.75-.75H5.25a.75.75 0 0 0-.75.75v8.243H3c-1.65 0-3 1.342-3 3v8.257c0 .413.338.75.75.75H4.5v2.25c0 .413.338.75.75.75h13.5c.42 0 .75-.337.75-.75V21h3.75c.42 0 .75-.337.75-.75v-8.257a3 3 0 0 0-3-3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPrinter;
