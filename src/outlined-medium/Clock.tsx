import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12c0 5.79 4.71 10.5 10.5 10.5S22.5 17.79 22.5 12 17.79 1.5 12 1.5 1.5 6.21 1.5 12M0 12C0 5.384 5.384 0 12 0s12 5.384 12 12-5.384 12-12 12S0 18.616 0 12m12.75-6.706v6.401l4.465 4.587a.75.75 0 0 1-1.074 1.046l-4.67-4.797-.002-.003-.006-.005a.2.2 0 0 1-.024-.036l-.017-.028a.7.7 0 0 1-.115-.178.6.6 0 0 1-.035-.163l-.003-.024-.01-.04q-.008-.026-.009-.054V5.294a.75.75 0 1 1 1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
