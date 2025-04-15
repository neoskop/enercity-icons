import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.664 20.199c-.298 0-.584-.118-.796-.33L3.33 14.33a1.124 1.124 0 1 1 1.59-1.59l4.658 4.657L19.734 4.915a1.125 1.125 0 0 1 1.745 1.42L10.537 19.783a1.12 1.12 0 0 1-.873.416"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckmark;
