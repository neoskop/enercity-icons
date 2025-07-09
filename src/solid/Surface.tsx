import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurface = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.255 3a.75.75 0 0 1-.75-.75V.75a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-.75.75m14.242 2.248v13.5c0 .42-.337.75-.75.75h-13.5c-.42 0-.75-.33-.75-.75v-13.5c0-.413.33-.75.75-.75h13.5c.413 0 .75.337.75.75M17.996 2.25a.75.75 0 1 0 1.5 0V.75a.75.75 0 1 0-1.5 0zM5.255 24a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-.75.75m12.74-.75a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 1 0-1.5 0zM23.25 6.005h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5m-1.5 13.49h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5M2.25 6.005H.75a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5m-1.5 13.49h1.5a.75.75 0 1 0 0-1.5H.75a.75.75 0 1 0 0 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSurface;
