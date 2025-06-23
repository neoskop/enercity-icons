import * as React from 'react';
import { SVGProps } from 'react';
const SvgStreetLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.26 3c.99 2.86 4.761 5 9.24 5 4.48 0 8.25-2.14 9.24-5H34.26ZM19.84 61l-1.7-17h-5.28l-1.7 17h8.68ZM54 .09c.16-.06.32-.09.5-.09.83 0 1.5.67 1.5 1.5 0 5.24-5.61 9.5-12.5 9.5-6.22 0-11.4-3.47-12.35-8H29.5C22.61 3 17 8.61 17 15.5V41h2.5c.77 0 1.42.58 1.49 1.35L22.86 61h1.64c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-18c-.83 0-1.5-.67-1.5-1.5S5.67 61 6.5 61h1.65l1.86-18.65A1.49 1.49 0 0 1 11.5 41H14V15.5C14 6.95 20.95 0 29.5 0h24c.18 0 .34.03.5.09ZM42 17.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0v-6Zm16.67 1.063-4-5a1.5 1.5 0 0 0-2.342 1.875l4 5a1.497 1.497 0 0 0 2.11.233 1.5 1.5 0 0 0 .233-2.108Zm-26.34-5a1.5 1.5 0 0 1 2.341 1.875l-4 5a1.498 1.498 0 1 1-2.341-1.875l4-5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgStreetLight;
