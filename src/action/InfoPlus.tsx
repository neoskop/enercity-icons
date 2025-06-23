import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfoPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12a12 12 0 0 0 12-12Zm-5.25-1.031v2.062h-5.719v5.719H10.97v-5.719H5.25V10.97h5.719V5.25h2.062v5.719h5.72Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInfoPlus;
