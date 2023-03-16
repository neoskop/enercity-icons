import * as React from 'react';
import { SVGProps } from 'react';
const SvgPresent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M59.5 17H45.06C50.5 13.82 52 8.92 52 6.5 52 2.67 49.33 0 45.5 0c-4.87 0-7.24 4.63-7.3 4.75L32 15.5 25.84 4.83C25.74 4.63 23.37 0 18.5 0 14.67 0 12 2.67 12 6.5c0 2.42 1.5 7.32 6.94 10.5H4.5c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5H7v30.5c0 .83.67 1.5 1.5 1.5h47c.83 0 1.5-.67 1.5-1.5V32h2.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5ZM36 20v9h-8v-9h8Zm4.84-13.82S42.5 3 45.5 3C47.66 3 49 4.34 49 6.5c0 .1-.41 9.36-14.35 10.4l6.19-10.73v.01ZM15 6.5C15 4.34 16.34 3 18.5 3c3 0 4.65 3.15 4.7 3.25l6.15 10.65C15.41 15.85 15 6.59 15 6.5ZM6 20h19v9H6v-9Zm4 12h15v29H10V32Zm18 29V32h8v29h-8Zm26 0H39V32h15v29Zm4-32H39v-9h19v9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPresent;
