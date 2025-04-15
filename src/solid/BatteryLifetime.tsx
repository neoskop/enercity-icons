import * as React from 'react';
import { SVGProps } from 'react';
const SvgBatteryLifetime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 12.803c0 .39-.308.697-.697.697H8.197a.69.69 0 0 1-.697-.697v-.856c0-.39.308-.697.697-.697h7.606a.69.69 0 0 1 .697.697zm0 3.75c0 .39-.308.697-.697.697H8.197a.69.69 0 0 1-.697-.698v-.855c0-.39.308-.697.697-.697h7.606a.69.69 0 0 1 .697.697zm0 3.75c0 .39-.308.697-.697.697H8.197a.69.69 0 0 1-.697-.698v-.855c0-.39.308-.697.697-.697h7.606c.39 0 .697.308.697.697zM17.625 2.25H16.5V1.125C16.5.503 15.998 0 15.375 0h-6.75C8.002 0 7.5.502 7.5 1.125V2.25H6.375C5.34 2.25 4.5 3.09 4.5 4.125v18C4.5 23.16 5.34 24 6.375 24h11.25c1.035 0 1.875-.84 1.875-1.875v-18c0-1.035-.84-1.875-1.875-1.875"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBatteryLifetime;
