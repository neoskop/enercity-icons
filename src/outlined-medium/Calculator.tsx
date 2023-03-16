import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 22.5h14.974v-21H4.5v21ZM19.646 0H4.327A1.33 1.33 0 0 0 3 1.327v21.345A1.33 1.33 0 0 0 4.327 24h15.32a1.33 1.33 0 0 0 1.327-1.328V1.327A1.33 1.33 0 0 0 19.646 0ZM7.476 9h9.023V4.5H7.475V9Zm-1.5 1.5h12.023V3H5.975v7.5Zm3.005 3.752h-3v-1.5h3v1.5Zm1.505 0h3v-1.5h-3v1.5Zm7.5 0h-3v-1.5h3v1.5ZM6 17.252h2.981v-1.5H6v1.5Zm7.486 0h-3v-1.5h3v1.5Zm1.5 0h3v-1.5h-3v1.5ZM8.982 20.23H6v-1.5h2.981v1.5Zm1.505.02h3v-1.5h-3v1.5Zm7.5 0h-3v-1.5h3v1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCalculator;
