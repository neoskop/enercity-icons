import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M58.949 60.95H5.059a2.07 2.07 0 0 1-2.058-2.061V24.503H61v34.386c0 1.13-.92 2.06-2.051 2.06M5.059 10h5.442v2.5c0 2.48 2.019 4.5 4.5 4.5 2.488 0 4.5-2.02 4.5-4.5V10h25v2.5c0 2.48 2.018 4.5 4.5 4.5 2.488 0 4.5-2.02 4.5-4.5V10h5.448C60.08 10 61 10.92 61 12.06v9.443H3v-9.444C3 10.92 3.93 10 5.06 10m8.442-3V4.5c0-.82.679-1.5 1.5-1.5.83 0 1.5.68 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5-.821 0-1.5-.67-1.5-1.5zm34 0V4.5c0-.82.678-1.5 1.5-1.5.83 0 1.5.68 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5-.822 0-1.5-.67-1.5-1.5zM58.95 7H53.5V4.5A4.5 4.5 0 0 0 49 0c-2.48 0-4.5 2.02-4.5 4.5V7h-25V4.5A4.5 4.5 0 0 0 15 0a4.505 4.505 0 0 0-4.5 4.5V7H5.06A5.064 5.064 0 0 0 0 12.06v46.829c0 2.79 2.27 5.06 5.06 5.06h53.889c2.79 0 5.051-2.27 5.051-5.06v-46.83A5.057 5.057 0 0 0 58.949 7M12.503 31.233a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m15.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.212a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-36.5 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m15.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-36.5 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m15.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m10.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
