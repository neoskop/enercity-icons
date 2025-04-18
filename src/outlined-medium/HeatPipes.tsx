import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeatPipes = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 24H2.625a2.625 2.625 0 0 1 0-5.25h15a1.125 1.125 0 1 0 0-2.25h-15a2.625 2.625 0 0 1 0-5.25h15a1.125 1.125 0 1 0 0-2.25h-15a2.625 2.625 0 0 1 0-5.25H10.5a1.5 1.5 0 0 0 1.5-1.5V.75a.75.75 0 1 1 1.5 0v1.5a3 3 0 0 1-3 3H2.625a1.125 1.125 0 0 0 0 2.25h15a2.625 2.625 0 0 1 0 5.25h-15a1.125 1.125 0 1 0 0 2.25h15a2.625 2.625 0 0 1 0 5.25h-15a1.125 1.125 0 1 0 0 2.25H21a1.5 1.5 0 0 0 1.5-1.5V.75a.75.75 0 1 1 1.5 0V21a3 3 0 0 1-3 3"
    />
  </svg>
);
export default SvgHeatPipes;
