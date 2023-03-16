import * as React from 'react';
import { SVGProps } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.998 15.855c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm10.358-4.185c-.188-.262-4.65-6.42-10.358-6.42-5.7 0-10.17 6.158-10.357 6.42a.743.743 0 0 0 0 .87c.187.263 4.657 6.42 10.357 6.42 5.708 0 10.17-6.158 10.358-6.42a.743.743 0 0 0 0-.87Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEye;
