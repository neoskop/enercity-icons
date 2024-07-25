import * as React from 'react';
import { SVGProps } from 'react';
const SvgSurfFon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.7 27h.86c2.45 0 4.44 1.99 4.44 4.44v22.12c0 2.45-1.99 4.44-4.44 4.44H49.44C46.99 58 45 56.01 45 53.56V51H5.5A5.51 5.51 0 0 1 0 45.5v-4c0-.83.67-1.5 1.5-1.5H6V12.5C6 9.47 8.47 7 11.5 7h41.7c3.03 0 5.5 2.47 5.5 5.5V27Zm.86 28c.8 0 1.44-.64 1.44-1.44V31.44c0-.8-.64-1.44-1.44-1.44H49.44c-.8 0-1.44.64-1.44 1.44v22.12c0 .8.64 1.44 1.44 1.44h10.12ZM3 43v2.5A2.5 2.5 0 0 0 5.5 48H45v-5h-6.18l-1.76 1.76c-.28.28-.66.44-1.06.44h-8c-.4 0-.78-.16-1.06-.44L25.18 43H3Zm8.5-33A2.5 2.5 0 0 0 9 12.5V40h36v-8.56c0-2.45 1.99-4.44 4.44-4.44h6.26V12.5c0-1.38-1.13-2.5-2.5-2.5H11.5Zm41.59 41a1.495 1.495 0 0 1 2.82 0c.06.16.09.32.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.18.03-.34.09-.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSurfFon;
