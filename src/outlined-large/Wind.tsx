import * as React from 'react';
import { SVGProps } from 'react';
const SvgWind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M33.5 26h-27c-.83 0-1.5-.67-1.5-1.5S5.67 23 6.5 23h27c3.58 0 6.5-2.92 6.5-6.5S37.08 10 33.5 10c-.83 0-1.5-.67-1.5-1.5S32.67 7 33.5 7c5.24 0 9.5 4.26 9.5 9.5S38.74 26 33.5 26m-8 32c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c3.58 0 6.5-2.92 6.5-6.5S29.08 42 25.5 42h-19c-.83 0-1.5-.67-1.5-1.5S5.67 39 6.5 39h19c5.24 0 9.5 4.26 9.5 9.5S30.74 58 25.5 58"
    />
    <path
      fill="currentColor"
      d="M51.5 34h-45c-.83 0-1.5-.67-1.5-1.5S5.67 31 6.5 31h45c2.48 0 4.5-2.02 4.5-4.5S53.98 22 51.5 22c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c4.14 0 7.5 3.36 7.5 7.5S55.64 34 51.5 34"
    />
  </svg>
);
export default SvgWind;
