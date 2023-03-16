import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5a1.49 1.49 0 0 0-1.06.44l-9 9A1.5 1.5 0 0 0 3 13.5h.75v7.484c0 .83.672 1.5 1.5 1.5h3.752a1.5 1.5 0 0 0 1.5-1.5V15.75h3v5.234c0 .83.671 1.5 1.5 1.5h3.748a1.5 1.5 0 0 0 1.5-1.5V13.5H21a1.5 1.5 0 0 0 1.06-2.56l-9-9A1.494 1.494 0 0 0 12 1.5ZM12 3l9 9h-2.25v8.984h-3.748V15a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v5.984H5.25V12H3l9-9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHome;
