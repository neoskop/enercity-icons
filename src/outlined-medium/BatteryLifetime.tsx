import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryLifetime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.248 22.5a.753.753 0 0 0 .752-.752V4.502a.753.753 0 0 0-.752-.752H15V1.5H9v2.25H6.752A.753.753 0 0 0 6 4.502v17.246c0 .415.338.752.752.752h10.496ZM16.5 2.25h.748A2.255 2.255 0 0 1 19.5 4.502v17.246A2.255 2.255 0 0 1 17.248 24H6.752A2.255 2.255 0 0 1 4.5 21.748V4.502A2.255 2.255 0 0 1 6.752 2.25H7.5V1.5C7.5.673 8.173 0 9 0h6c.827 0 1.5.673 1.5 1.5v.75Zm-8.25 16.5h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75a.75.75 0 0 1 .75-.75Zm7.5-3.75h-7.5a.75.75 0 0 0-.75.75v.75c0 .415.335.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75a.75.75 0 0 0-.75-.75Zm-7.5-3.75h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBatteryLifetime;
