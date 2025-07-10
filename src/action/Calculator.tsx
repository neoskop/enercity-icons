import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 22h16V2H4zM20.403 0H3.597C2.716 0 2 .716 2 1.597v20.806C2 23.284 2.716 24 3.597 24h16.806c.881 0 1.597-.716 1.597-1.597V1.597C22 .716 21.284 0 20.403 0M8 7.733h8V6H8zm-1 2h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.733a1 1 0 0 0 1 1m1 4.263H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m9-2h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2m-5.5 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2m-4.5 5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m9-2h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2m-3.5 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2m-4.5 5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m9-2h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2m-5.5 0h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculator;
