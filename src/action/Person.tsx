import * as React from 'react';
import { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0ZM8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4.027 8H12c-3.15 0-5.794.496-7.928 1.504C1.71 16.619.394 19.135.057 22.909a1 1 0 1 0 1.993.177c.28-3.135 1.26-5.011 2.876-5.774C6.768 16.442 9.126 16 12 16a1.182 1.182 0 0 0 .053 0c2.875 0 5.232.442 7.075 1.312 1.615.763 2.596 2.64 2.876 5.774a1 1 0 0 0 1.992-.177c-.337-3.774-1.653-6.29-4.014-7.405C17.848 14.496 15.204 14 12.054 14h-.027Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPerson;
