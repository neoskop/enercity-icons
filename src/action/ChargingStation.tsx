import * as React from 'react';
import { SVGProps } from 'react';
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 22h11V4.003A2.005 2.005 0 0 0 11.997 2H4.999A2 2 0 0 0 3 3.999V22ZM18.673 3.221l4 3.639A1 1 0 0 1 23 7.6v11.361c0 1.654-1.346 3-3 3s-3-1.346-3-3h-1V23a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3.999A4.004 4.004 0 0 1 4.999 0h6.998A4.008 4.008 0 0 1 16 4.003v12.958h1c1.103 0 2 .897 2 2a1.001 1.001 0 0 0 2 0v-8a2.005 2.005 0 0 1-2-2.003V6.223l-1.673-1.522a1 1 0 0 1 1.346-1.48Zm-9.964 7.783H10a.999.999 0 0 1 .871 1.491l-2.25 3.995a.999.999 0 1 1-1.742-.98l1.41-2.506H7a.999.999 0 0 1-.872-1.49l2.25-4.004a.998.998 0 0 1 1.362-.382c.482.271.653.88.382 1.361l-1.413 2.515Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChargingStation;
