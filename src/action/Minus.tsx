import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.125 12.75H4.875a1.125 1.125 0 1 1 0-2.25h14.25a1.125 1.125 0 1 1 0 2.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinus;
