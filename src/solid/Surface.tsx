import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurface = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.255 3a.75.75 0 0 1-.75-.75V.75a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm14.242 2.248v13.5c0 .42-.337.75-.75.75h-13.5c-.42 0-.75-.33-.75-.75v-13.5c0-.413.33-.75.75-.75h13.5c.413 0 .75.337.75.75ZM17.996 2.25a.75.75 0 1 0 1.5 0V.75a.75.75 0 1 0-1.5 0v1.5ZM5.255 24a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm12.74-.75a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 1 0-1.5 0v1.5ZM23.25 6.005h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5Zm-1.5 13.49h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5ZM2.25 6.005H.75a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5Zm-1.5 13.49h1.5a.75.75 0 1 0 0-1.5H.75a.75.75 0 1 0 0 1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSurface;
