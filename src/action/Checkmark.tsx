import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.664 20.199c-.298 0-.584-.118-.796-.33L3.33 14.33a1.124 1.124 0 1 1 1.59-1.59l4.658 4.657L19.734 4.915a1.125 1.125 0 0 1 1.745 1.42L10.537 19.783a1.123 1.123 0 0 1-.873.416Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheckmark;
