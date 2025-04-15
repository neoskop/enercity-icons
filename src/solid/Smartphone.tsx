import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.294 3.362h-2.25a.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75h2.25a.75.75 0 0 1 0 1.5m0 18.763h-4.5a.753.753 0 0 1-.75-.75c0-.413.338-.75.75-.75h4.5c.421 0 .75.337.75.75 0 .412-.329.75-.75.75m-4.5-20.263a.75.75 0 0 1 0 1.5.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75M16.328 0H7.844A2.6 2.6 0 0 0 5.25 2.595v18.81A2.6 2.6 0 0 0 7.844 24h8.484a2.596 2.596 0 0 0 2.595-2.595V2.595A2.595 2.595 0 0 0 16.328 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
