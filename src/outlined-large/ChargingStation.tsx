import * as React from 'react';
import { SVGProps } from 'react';
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 61H8V7.605A4.61 4.61 0 0 1 12.605 3h20.79A4.61 4.61 0 0 1 38 7.605V61Zm20.584-43.037-11-11.5a1.5 1.5 0 1 0-2.168 2.074L50 13.329v5.921c0 2.895 2.019 5.25 4.5 5.25H56V53c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-3.859-3.141-7-7-7V7.605C41 3.412 37.588 0 33.395 0h-20.79C8.412 0 5 3.412 5 7.605V62.5A1.5 1.5 0 0 0 6.5 64h33a1.5 1.5 0 0 0 1.5-1.5V49c2.206 0 4 1.794 4 4 0 3.859 3.141 7 7 7s7-3.141 7-7V19c0-.387-.149-.758-.416-1.037ZM27.5 40h-6.389l5.685-9.744a1.5 1.5 0 0 0-2.592-1.512l-7 12A1.5 1.5 0 0 0 18.5 43h6.268l-5.534 8.694A1.503 1.503 0 0 0 20.499 54c.495 0 .98-.245 1.267-.694l7-11A1.5 1.5 0 0 0 27.5 40ZM32 20H14V9h18v11Zm-18.5 3h19c1.379 0 2.5-1.121 2.5-2.5v-12C35 7.121 33.879 6 32.5 6h-19A2.502 2.502 0 0 0 11 8.5v12c0 1.379 1.121 2.5 2.5 2.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChargingStation;
