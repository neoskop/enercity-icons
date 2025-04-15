import * as React from 'react';
import { SVGProps } from 'react';
const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5 1.5 17.79 1.5 12M0 12c0 6.616 5.384 12 12 12s12-5.384 12-12S18.616 0 12 0 0 5.384 0 12m13.508-5.242a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001M10.875 9.75v8.717h2.25V9.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInformation;
