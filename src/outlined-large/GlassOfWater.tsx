import * as React from 'react';
import { SVGProps } from 'react';
const SvgGlassOfWater = (props: SVGProps<SVGSVGElement>) => (
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
      d="M54.62.5c-.28-.32-.69-.5-1.12-.5h-43c-.43 0-.83.18-1.12.5-.28.32-.42.75-.38 1.17l7 61c.09.76.73 1.33 1.49 1.33h29c.76 0 1.4-.57 1.49-1.33l7.01-61c.05-.42-.09-.85-.37-1.17M51.82 3 50.2 17.11C48.08 16.02 45.53 15 41.33 15c-5.04 0-7.58 1.36-10.04 2.68-2.23 1.19-4.33 2.32-8.63 2.32s-6.13-1.03-8.35-2.23c-.15-.08-.31-.17-.47-.25L12.18 3zm-6.66 58H18.84l-4.58-39.87c2 1.01 4.37 1.87 8.4 1.87 5.04 0 7.58-1.36 10.04-2.68 2.23-1.19 4.33-2.32 8.62-2.32s6.28 1.11 8.5 2.31L45.15 61z"
    />
  </svg>
);
export default SvgGlassOfWater;
