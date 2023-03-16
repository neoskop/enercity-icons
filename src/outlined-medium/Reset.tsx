import * as React from 'react';
import { SVGProps } from 'react';
const SvgReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1.5c-2.482 0-4.86.877-6.75 2.467V3a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75v3c0 .412.338.75.75.75h3c.412 0 .75-.338.75-.75a.752.752 0 0 0-.75-.75H6.053A8.985 8.985 0 0 1 12 3c4.965 0 9 4.035 9 9s-4.035 9-9 9-9-4.035-9-9a.752.752 0 0 0-.75-.75.752.752 0 0 0-.75.75c0 5.79 4.71 10.5 10.5 10.5S22.5 17.79 22.5 12 17.79 1.5 12 1.5Z"
      fill="currentColor"
    />
    <path
      d="M12 12.75c.24 0 .473-.12.607-.315l3.75-5.25a.745.745 0 0 0-.172-1.042.745.745 0 0 0-1.042.172l-3.526 4.935H7.5a.752.752 0 0 0-.75.75c0 .413.338.75.75.75H12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgReset;
