import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryLifetime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M46.5 61c1.379 0 2.5-1.121 2.5-2.5v-47c0-1.379-1.121-2.5-2.5-2.5H41V3.5c0-.275-.225-.5-.5-.5h-17c-.275 0-.5.225-.5.5V9h-5.5a2.5 2.5 0 0 0-2.5 2.5v47c0 1.379 1.121 2.5 2.5 2.5zM44 6h2.5c3.032 0 5.5 2.468 5.5 5.5v47c0 3.032-2.468 5.5-5.5 5.5h-29a5.507 5.507 0 0 1-5.5-5.5v-47C12 8.468 14.468 6 17.5 6H20V3.5C20 1.57 21.57 0 23.5 0h17C42.43 0 44 1.57 44 3.5zM21.098 50.9h21.803c1.16 0 2.1.94 2.1 2.1v1.9a2.1 2.1 0 0 1-2.1 2.1H21.098A2.1 2.1 0 0 1 19 54.9V53c0-1.16.94-2.099 2.098-2.099m21.803-10H21.098A2.1 2.1 0 0 0 19 43v1.9c0 1.16.94 2.1 2.098 2.1h21.803a2.1 2.1 0 0 0 2.1-2.1V43c0-1.16-.94-2.099-2.1-2.099m-21.803-10h21.803c1.16 0 2.1.94 2.1 2.1V34.9a2.1 2.1 0 0 1-2.1 2.1H21.098A2.1 2.1 0 0 1 19 34.9V33c0-1.16.94-2.099 2.098-2.099"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryLifetime;
