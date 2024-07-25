import * as React from 'react';
import { SVGProps } from 'react';
const SvgLkw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.925 11.678v-.016l-2.018-4.147a1.476 1.476 0 0 0-1.32-.772H15.75v-.766a1.49 1.49 0 0 0-1.5-1.477H1.485C.667 4.5 0 5.16 0 5.978v9.847c0 .817.667 1.485 1.485 1.485h1.327a2.626 2.626 0 0 0 2.58 2.19c1.32 0 2.408-.99 2.588-2.258h8.558a2.623 2.623 0 0 0 2.587 2.25c1.32 0 2.4-.982 2.587-2.25h.788c.81 0 1.5-.69 1.5-1.5v-3.75a.748.748 0 0 0-.075-.315ZM5.393 18c-.623 0-1.125-.51-1.125-1.125A1.124 1.124 0 1 1 5.393 18ZM18.75 8.213l1.823-.015 1.477 3.044h-3.3v-3.03Zm.375 9.78A1.123 1.123 0 0 1 18 16.867c0-.623.503-1.125 1.125-1.125a1.123 1.123 0 1 1 0 2.249Zm3.375-2.25h-1.012a2.626 2.626 0 0 0-2.363-1.5 2.626 2.626 0 0 0-2.363 1.5H15.75v-7.5l1.5-.016v3.765c0 .413.337.75.75.75h4.5v3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLkw;