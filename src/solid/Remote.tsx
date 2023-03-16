import * as React from 'react';
import { SVGProps } from 'react';
const SvgRemote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.691 13.211a.73.73 0 0 1-1.057 0c-2.558-2.55-6.713-2.55-9.264 0a.756.756 0 0 1-1.065 0 .748.748 0 0 1 0-1.057c3.144-3.143 8.25-3.143 11.386 0a.747.747 0 0 1 0 1.057Zm-2.258 2.265a.752.752 0 0 1-1.057 0 3.353 3.353 0 0 0-4.747 0 .748.748 0 0 1-1.058 0 .755.755 0 0 1 0-1.065 4.821 4.821 0 0 1 3.427-1.417c1.298 0 2.52.502 3.435 1.417a.756.756 0 0 1 0 1.065Zm-3.435 3.847c-.81 0-1.47-.66-1.47-1.477a1.474 1.474 0 1 1 2.947 0c0 .818-.659 1.477-1.477 1.477Zm11.73-8.43-11.25-9.225a.76.76 0 0 0-.953 0L.275 10.893a.75.75 0 0 0 .473 1.328H3.32v9.555c0 .413.337.75.75.75h15.862c.412 0 .75-.337.75-.75v-9.555h2.565c.323 0 .6-.195.712-.495a.763.763 0 0 0-.231-.833Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRemote;
