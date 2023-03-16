import * as React from 'react';
import { SVGProps } from 'react';
const SvgElectricPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 13v-1h8v1c0 2.206-1.794 4-4 4s-4-1.794-4-4Zm4-13C5.383 0 0 5.383 0 12c0 3.21 1.426 6.473 3.813 8.727a1.001 1.001 0 0 0 1.374-1.454C3.191 17.389 2 14.67 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10c0 3.737-2.021 9-6.515 9-1.209 0-2.5-.525-2.5-2v-.088C15.826 18.439 18 15.972 18 13v-2a1 1 0 0 0-1-1h-1V6a1 1 0 1 0-2 0v4h-4V6a1 1 0 1 0-2 0v4H7a1 1 0 0 0-1 1v2c0 2.962 2.159 5.423 4.985 5.907V19c0 2.355 1.851 4 4.5 4C21.358 23 24 16.567 24 12c0-6.617-5.383-12-12-12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgElectricPlug;
