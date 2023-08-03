import * as React from 'react';
import { SVGProps } from 'react';
const SvgFemale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 7.5C19.5 3.367 16.133 0 12 0S4.5 3.368 4.5 7.5c0 3.623 2.58 6.652 6 7.35V18H8.25a.752.752 0 0 0-.75.75v1.5c0 .413.338.75.75.75h2.25v2.25c0 .413.338.75.75.75h1.5c.412 0 .75-.337.75-.75V21h2.25c.413 0 .75-.337.75-.75v-1.5a.752.752 0 0 0-.75-.75H13.5v-3.15c3.42-.697 6-3.727 6-7.35Zm-12 0C7.5 5.018 9.518 3 12 3s4.5 2.018 4.5 4.5S14.482 12 12 12a4.504 4.504 0 0 1-4.5-4.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFemale;
