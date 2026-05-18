import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeater = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 3.75v3a.751.751 0 0 1-.935.727l-2.25-.573A.75.75 0 0 1 0 6.177v-1.86a.75.75 0 0 1 .567-.728l2.25-.566a.75.75 0 0 1 .933.727ZM7.5 3a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 1 1-4.5 0V5.25A2.25 2.25 0 0 1 7.5 3Zm8.25 2.25a2.25 2.25 0 0 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0V5.25Zm6 0a2.25 2.25 0 0 0-4.5 0v13.5a2.25 2.25 0 1 0 4.5 0V5.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeater;
