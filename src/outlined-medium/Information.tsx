import * as React from 'react';
import { SVGProps } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5 1.5 17.79 1.5 12ZM0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12C5.383 0 0 5.383 0 12Zm13.508-5.242a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001ZM10.875 9.75v8.717h2.25V9.75h-2.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgInformation;
