import * as React from 'react';
import { SVGProps } from 'react';
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 3.75a.75.75 0 0 1 1.5 0v1.628a2.25 2.25 0 0 1 0 4.244V20.25a.75.75 0 0 1-1.5 0V9.622a2.25 2.25 0 0 1 0-4.244zm.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m6-4.5a.75.75 0 0 1 1.5 0v10.628a2.251 2.251 0 0 1 0 4.244v1.628a.75.75 0 0 1-1.5 0v-1.628a2.251 2.251 0 0 1 0-4.244zm.75 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M18.75 3a.75.75 0 0 0-.75.75v6.128a2.25 2.25 0 0 0 0 4.244v6.128a.75.75 0 0 0 1.5 0v-6.128a2.251 2.251 0 0 0 0-4.244V3.75a.75.75 0 0 0-.75-.75m.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlider;
