import * as React from 'react';
import { SVGProps } from 'react';
const SvgSmokeDetector = (props: SVGProps<SVGSVGElement>) => (
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
      d="M36.745 21H61V11H3v10h24.255c.641-2.021 2.515-3.5 4.745-3.5s4.104 1.479 4.745 3.5Zm5.968 11h5.965l3.502-8h-7.753l-1.714 8Zm-23.141-8H11.82l3.502 8h5.965l-1.715-8ZM30.5 32v-4.756A4.987 4.987 0 0 1 27.255 24h-4.614l1.714 8H30.5Zm-.5-9.5c0 1.104.897 2 2 2s2-.896 2-2-.897-2-2-2-2 .896-2 2ZM41.358 24h-4.613a4.987 4.987 0 0 1-3.245 3.244V32h6.145l1.713-8ZM1.5 8h61A1.5 1.5 0 0 1 64 9.5v13a1.5 1.5 0 0 1-1.5 1.5h-7.046l-4.422 10.102a1.499 1.499 0 0 1-1.374.898H14.342a1.499 1.499 0 0 1-1.374-.898L8.546 24H1.5A1.5 1.5 0 0 1 0 22.5v-13A1.5 1.5 0 0 1 1.5 8Zm18.665 37.336a1.5 1.5 0 1 1 2.121-2.121c5.356 5.355 14.072 5.355 19.428 0a1.5 1.5 0 1 1 2.121 2.12A16.686 16.686 0 0 1 32 50.232a16.686 16.686 0 0 1-11.835-4.895Zm18.918-4.755a1.5 1.5 0 0 0-2.123-2.119 6.961 6.961 0 0 1-4.96 2.06 6.961 6.961 0 0 1-4.96-2.06 1.5 1.5 0 0 0-2.123 2.119A9.94 9.94 0 0 0 32 43.521a9.94 9.94 0 0 0 7.083-2.94ZM32.001 54a20.267 20.267 0 0 0 14.438-5.991 1.5 1.5 0 1 1 2.123 2.119C44.138 54.56 38.256 57 32 57c-6.256 0-12.138-2.44-16.563-6.872a1.5 1.5 0 1 1 2.123-2.12A20.268 20.268 0 0 0 32.002 54Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSmokeDetector;
