import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5a1.5 1.5 0 0 0-1.06.44l-9 9A1.5 1.5 0 0 0 3 13.5h.75v7.484c0 .83.672 1.5 1.5 1.5h3.752a1.5 1.5 0 0 0 1.5-1.5V15.75h3v5.234c0 .83.672 1.5 1.5 1.5h3.748a1.5 1.5 0 0 0 1.5-1.5V13.5H21a1.5 1.5 0 0 0 1.06-2.56l-9-9A1.5 1.5 0 0 0 12 1.5M12 3l9 9h-2.25v8.984h-3.748V15a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v5.984H5.25V12H3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;
