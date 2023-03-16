import * as React from 'react';
import { SVGProps } from 'react';
const SvgWorldwide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.924 22.077c1.337-1.978 2.211-5.331 2.31-9.327h5.228c-.317 4.442-3.4 8.125-7.538 9.327ZM1.538 12.75h5.227c.1 3.996.973 7.349 2.31 9.327-4.138-1.203-7.22-4.885-7.537-9.327ZM9.075 1.923c-1.337 1.979-2.21 5.332-2.31 9.327H1.538c.316-4.442 3.4-8.124 7.537-9.327Zm-.81 9.327C8.416 5.47 10.298 1.5 12 1.5c1.7 0 3.582 3.97 3.735 9.75h-7.47ZM12 22.5c-1.7 0-3.583-3.97-3.736-9.75h7.47C15.583 18.53 13.7 22.5 12 22.5Zm10.462-11.25h-5.228c-.099-3.995-.973-7.348-2.31-9.327 4.139 1.203 7.221 4.885 7.538 9.327ZM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWorldwide;
