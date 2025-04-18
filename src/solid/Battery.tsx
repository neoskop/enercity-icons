import * as React from 'react';
import { SVGProps } from 'react';
const SvgBattery = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 7.162-2.355 4.785 2.145.66c.202.06.277.3.142.465l-5.407 6.315c-.218.263-.645.03-.525-.285l2.235-5.13L9.12 12.42a.293.293 0 0 1-.03-.443l5.46-5.137c.24-.233.585.023.45.322m2.625-4.912H16.5V1.125C16.5.502 15.997 0 15.375 0h-6.75C8.002 0 7.5.502 7.5 1.125V2.25H6.375C5.34 2.25 4.5 3.09 4.5 4.125v18C4.5 23.16 5.34 24 6.375 24h11.25c1.035 0 1.875-.84 1.875-1.875v-18c0-1.035-.84-1.875-1.875-1.875"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBattery;
