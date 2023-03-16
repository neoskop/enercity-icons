import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.294 3.362h-2.25a.752.752 0 0 1-.75-.75c0-.412.338-.75.75-.75h2.25a.75.75 0 0 1 0 1.5Zm0 18.763h-4.5a.753.753 0 0 1-.75-.75c0-.413.338-.75.75-.75h4.5c.421 0 .75.337.75.75 0 .412-.329.75-.75.75Zm-4.5-20.263a.75.75 0 0 1 0 1.5.752.752 0 0 1-.75-.75c0-.412.338-.75.75-.75ZM16.328 0H7.844A2.6 2.6 0 0 0 5.25 2.595v18.81A2.6 2.6 0 0 0 7.844 24h8.484a2.596 2.596 0 0 0 2.595-2.595V2.595A2.595 2.595 0 0 0 16.328 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSmartphone;
