import * as React from 'react';
import { SVGProps } from 'react';
const SvgFileX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.221 1.897c.216.044.416.15.574.308l5 5c.21.21.33.497.33.795v11.001A3.126 3.126 0 0 1 17 22.125H7a3.127 3.127 0 0 1-3.125-3.124V5A3.126 3.126 0 0 1 7 1.875h7l.221.022Zm.574 9.308a1.125 1.125 0 0 0-1.59 0l-1.207 1.204-1.204-1.204a1.125 1.125 0 0 0-1.59 1.59L10.408 14l-1.204 1.205a1.126 1.126 0 0 0 1.59 1.59l1.204-1.204 1.207 1.205a1.126 1.126 0 0 0 1.59-1.59L13.59 14l1.206-1.204c.44-.44.44-1.151 0-1.59Zm-.635-3.363h3.09l-3.09-3.093v3.093Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFileX;
