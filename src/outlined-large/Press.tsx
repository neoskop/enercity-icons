import * as React from 'react';
import { SVGProps } from 'react';
const SvgPress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M56.4 56.997c2.537 0 4.6-2.086 4.6-4.65V7H16v44.5c0 2.222-.551 4.088-1.561 5.5zM14.5 4h48A1.5 1.5 0 0 1 64 5.5v46.847c0 4.219-3.409 7.65-7.6 7.65L8.5 60h-.501C3.588 59.999 0 56.412 0 52.005V23.5A1.5 1.5 0 0 1 1.5 22h7a1.5 1.5 0 0 1 0 3H3v27.005A5.004 5.004 0 0 0 8.001 57C12.133 57 13 54.009 13 51.5v-46A1.5 1.5 0 0 1 14.5 4M54 39h-8V25h8zm-9.5-17h11a1.5 1.5 0 0 1 1.5 1.5v17a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-17a1.5 1.5 0 0 1 1.5-1.5m-23 6h16a1.5 1.5 0 0 0 0-3h-16a1.5 1.5 0 0 0 0 3m16 7h-16a1.5 1.5 0 0 1 0-3h16a1.5 1.5 0 0 1 0 3m-16 7h16a1.5 1.5 0 0 0 0-3h-16a1.5 1.5 0 0 0 0 3m34-24h-34a1.5 1.5 0 0 1 0-3h34a1.5 1.5 0 0 1 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPress;
