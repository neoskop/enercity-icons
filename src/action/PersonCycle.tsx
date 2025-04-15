import * as React from 'react';
import { SVGProps } from 'react';
const SvgPersonCycle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.234 6.301c.521-2.351 1.805-4.114 3.823-5.227a5 5 0 1 1 7.887 0c2.018 1.113 3.301 2.875 3.822 5.227A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10m5.998 18.003c-.216-2.786-1.446-4.579-3.76-5.53A5 5 0 0 1 12 15a5 5 0 0 1-2.238-.527c-2.314.951-3.544 2.745-3.76 5.53A9.96 9.96 0 0 0 12 22c2.25 0 4.327-.743 5.998-1.997M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPersonCycle;
