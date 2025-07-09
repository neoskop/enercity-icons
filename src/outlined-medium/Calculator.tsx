import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 22.5h14.974v-21H4.5zM19.646 0H4.328A1.33 1.33 0 0 0 3 1.328v21.344A1.33 1.33 0 0 0 4.327 24h15.32a1.33 1.33 0 0 0 1.327-1.328V1.328A1.33 1.33 0 0 0 19.646 0M7.476 9h9.023V4.5H7.475zm-1.5 1.5h12.023V3H5.975zm3.005 3.752h-3v-1.5h3zm1.505 0h3v-1.5h-3zm7.5 0h-3v-1.5h3zM6 17.252h2.981v-1.5H6zm7.486 0h-3v-1.5h3zm1.5 0h3v-1.5h-3zM8.982 20.23H6v-1.5h2.981zm1.505.02h3v-1.5h-3zm7.5 0h-3v-1.5h3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculator;
