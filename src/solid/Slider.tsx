import * as React from 'react';
import { SVGProps } from 'react';
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 3a.75.75 0 0 0-.75.75v1.628a2.25 2.25 0 0 0 0 4.244V20.25a.75.75 0 0 0 1.5 0V9.622a2.25 2.25 0 0 0 0-4.244V3.75A.75.75 0 0 0 5.25 3Zm6 .75a.75.75 0 0 1 1.5 0v10.628a2.251 2.251 0 0 1 0 4.244v1.628a.75.75 0 0 1-1.5 0v-1.628a2.251 2.251 0 0 1 0-4.244V3.75Zm7.5-.75a.75.75 0 0 0-.75.75v6.128a2.25 2.25 0 0 0 0 4.244v6.128a.75.75 0 0 0 1.5 0v-6.128a2.251 2.251 0 0 0 0-4.244V3.75a.75.75 0 0 0-.75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSlider;
