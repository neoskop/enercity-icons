import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11.567v.007c0 .144.03.28.08.407l.006.017c.057.14.141.266.246.37l5.84 5.84a1.124 1.124 0 1 0 1.59-1.591l-3.93-3.93 13.23-.042a1.125 1.125 0 0 0-.005-2.25h-.003l-13.204.042 4.015-4.016a1.124 1.124 0 1 0-1.59-1.59l-5.946 5.944v.001a1.13 1.13 0 0 0-.244.368l-.005.015a1.12 1.12 0 0 0-.08.408Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowLeft;
