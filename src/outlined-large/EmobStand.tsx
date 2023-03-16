import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmobStand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3c-1.103 0-2 .897-2 2v53.503A2.5 2.5 0 0 0 16.497 61h31.006A2.5 2.5 0 0 0 50 58.503V5c0-1.103-.897-2-2-2s-2 .897-2 2v16.502A6.505 6.505 0 0 1 39.502 28H24.505A6.512 6.512 0 0 1 18 21.495V5c0-1.103-.897-2-2-2Zm31.503 61H16.497A5.503 5.503 0 0 1 11 58.503V5c0-2.757 2.243-5 5-5s5 2.243 5 5v16.495A3.509 3.509 0 0 0 24.505 25h14.997A3.502 3.502 0 0 0 43 21.502V5c0-2.757 2.243-5 5-5s5 2.243 5 5v53.503A5.503 5.503 0 0 1 47.503 64Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgEmobStand;
