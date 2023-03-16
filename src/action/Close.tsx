import * as React from 'react';
import { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.59 12 6.33-6.33a1.125 1.125 0 0 0-1.59-1.59L12 10.41 5.67 4.08a1.126 1.126 0 0 0-1.59 1.59L10.41 12l-6.33 6.33a1.125 1.125 0 0 0 1.59 1.59L12 13.59l6.33 6.33a1.121 1.121 0 0 0 1.59 0c.44-.439.44-1.151 0-1.59L13.59 12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClose;
