import * as React from 'react';
import { SVGProps } from 'react';
const SvgSunMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.1 3.083a.75.75 0 0 1-.75-.75V.75a.75.75 0 1 1 1.5 0v1.583a.75.75 0 0 1-.75.75m.003 8.984a3.969 3.969 0 0 0 0-7.935A3.964 3.964 0 0 0 4.136 8.1c0 2.19 1.77 3.967 3.967 3.967M17.5 23.962a6.46 6.46 0 0 0 6.457-6.457c0-2.655-1.59-5.01-4.057-5.993a.748.748 0 0 0-.93 1.066 5 5 0 0 1 .637 2.438 4.97 4.97 0 0 1-4.957 4.956c-.638 0-1.26-.12-1.838-.352a.74.74 0 0 0-.847.195.76.76 0 0 0-.09.87 6.48 6.48 0 0 0 5.625 3.277M3.492 4.552a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06L3.434 2.373a.75.75 0 1 0-1.06 1.06zm-1.16 4.299H.75a.75.75 0 1 1 0-1.5h1.583a.75.75 0 1 1 0 1.5m.04 4.977a.75.75 0 0 0 1.06 0l1.12-1.119a.75.75 0 1 0-1.06-1.06l-1.12 1.119a.75.75 0 0 0 0 1.06M8.1 16.201a.75.75 0 0 1-.75-.75v-1.583a.75.75 0 1 1 1.5 0v1.583a.75.75 0 0 1-.75.75m4.668-2.373a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-1.12-1.12a.75.75 0 1 0-1.06 1.061zm2.682-4.977h-1.583a.75.75 0 1 1 0-1.5h1.583a.75.75 0 1 1 0 1.5m-3.802-4.298a.75.75 0 0 0 1.06 0l1.12-1.12a.75.75 0 1 0-1.06-1.06l-1.12 1.12a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSunMoon;
