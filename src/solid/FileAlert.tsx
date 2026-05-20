import * as React from 'react';
import { SVGProps } from 'react';
const SvgFileAlert = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.221 1.897c.216.044.416.15.574.308l5 5c.21.21.33.497.33.795v11.001A3.126 3.126 0 0 1 17 22.125H7a3.127 3.127 0 0 1-3.125-3.124V5A3.126 3.126 0 0 1 7 1.875h7l.221.022Zm-2.22 13.978a1.126 1.126 0 0 0 0 2.25h.008a1.126 1.126 0 0 0 0-2.25h-.008Zm0-6c-.621 0-1.125.504-1.125 1.125v3a1.126 1.126 0 0 0 2.25 0v-3c0-.62-.505-1.124-1.125-1.125Zm2.112-1.99h3.181l-3.181-3.18v3.18Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFileAlert;
