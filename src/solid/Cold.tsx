import * as React from 'react';
import { SVGProps } from 'react';
const SvgCold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.625 14.738V3.375a3.375 3.375 0 0 0-6.75 0V14.73A5.25 5.25 0 0 0 8.25 24a5.25 5.25 0 0 0 3.375-9.262ZM7.5 17.032v-4.597H9v4.597a1.875 1.875 0 1 1-1.5 0ZM18.75 9.75h-4.5a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCold;
