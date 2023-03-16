import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmobStand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 1.5a.75.75 0 0 0-.75.75v19.496c0 .416.338.754.754.754h11.992a.755.755 0 0 0 .754-.754V2.25a.75.75 0 0 0-1.5 0v6.003a3 3 0 0 1-2.997 2.997H9.747A3 3 0 0 1 6.75 8.253V2.25A.75.75 0 0 0 6 1.5ZM17.996 24H6.004a2.256 2.256 0 0 1-2.254-2.254V2.25C3.75 1.01 4.76 0 6 0s2.25 1.01 2.25 2.25v6.003A1.5 1.5 0 0 0 9.747 9.75h4.506a1.5 1.5 0 0 0 1.497-1.497V2.25C15.75 1.01 16.76 0 18 0s2.25 1.01 2.25 2.25v19.496A2.256 2.256 0 0 1 17.996 24Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEmobStand;
