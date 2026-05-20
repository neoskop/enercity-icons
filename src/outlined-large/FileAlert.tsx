import * as React from 'react';
import { SVGProps } from 'react';
const SvgFileAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32.027 43.333a2 2 0 0 1 0 4H32a2 2 0 1 1 0-4h.027Zm-.027-16a2 2 0 0 1 2 2v8a2 2 0 0 1-4 0v-8a2 2 0 0 1 2-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.53 6.01a2 2 0 0 1 1.217.576L52.08 19.919a2 2 0 0 1 .586 1.414v29.334A7.334 7.334 0 0 1 45.333 58H18.666a7.334 7.334 0 0 1-7.333-7.333V13.333A7.334 7.334 0 0 1 18.666 6h18.667l.198.01ZM18.667 10a3.333 3.333 0 0 0-3.333 3.333v37.334A3.333 3.333 0 0 0 18.666 54h26.667a3.334 3.334 0 0 0 3.333-3.333V23.333H40a4.667 4.667 0 0 1-4.667-4.666V10H18.666Zm20.667 8.667a.666.666 0 0 0 .667.666h5.838l-6.505-6.505v5.839Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFileAlert;
