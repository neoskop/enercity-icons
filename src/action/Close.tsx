import * as React from 'react';
import { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.59 12 6.33-6.33a1.125 1.125 0 0 0-1.59-1.59L12 10.41 5.67 4.08a1.126 1.126 0 0 0-1.59 1.59L10.41 12l-6.33 6.33a1.125 1.125 0 0 0 1.59 1.59L12 13.59l6.33 6.33a1.12 1.12 0 0 0 1.59 0c.44-.439.44-1.151 0-1.59z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
