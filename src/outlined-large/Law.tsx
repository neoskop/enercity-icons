import * as React from 'react';
import { SVGProps } from 'react';
const SvgLaw = (props: SVGProps<SVGSVGElement>) => (
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
      d="m31.794 23.65 3.067 5.377 3.341 5.852 11.581-6.765-9.765-17.108-11.58 6.764 3.333 5.841.023.038Zm-11.993 8.836 1.641 2.735 10.083-5.988-1.58-2.77L19.8 32.486ZM4.17 44.949a1.51 1.51 0 0 0 1.16-.157l13.534-8.04-1.64-2.735L3.782 42a1.604 1.604 0 0 0-.579 2.18c.227.4.563.66.965.769Zm17.365-30.313 1.55 2.788 16.73-9.772V7.65l2.26-1.32-1.58-2.771-18.96 11.075Zm34.952 16.739-1.534-2.808-2.367 1.384c-.002 0-.004.002-.006.005l-14.172 8.277-2.26 1.32 1.635 2.867 18.704-11.046Zm-18.49 14.403a1.502 1.502 0 0 1-2.067-.549l-3.126-5.477a1.5 1.5 0 0 1 .546-2.038l2.26-1.322-2.598-4.553-26.16 15.538a4.487 4.487 0 0 1-3.459.469A4.52 4.52 0 0 1 .616 45.7c-1.266-2.218-.52-5.025 1.644-6.287l26.195-15.558-2.609-4.572-2.575 1.505a1.493 1.493 0 0 1-1.153.15 1.495 1.495 0 0 1-.915-.718l-3.007-5.412a1.5 1.5 0 0 1 .555-2.022L40.288.206a1.498 1.498 0 0 1 2.059.551l3.07 5.376a1.501 1.501 0 0 1-.546 2.039l-2.262 1.32L52.374 26.6l2.397-1.4a1.502 1.502 0 0 1 2.073.575l2.971 5.434c.39.71.143 1.598-.554 2.01L37.997 45.778ZM61 61H36.997v-3H61v3Zm-24.503-6H61.5c1.38 0 2.5 1.121 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H36.497a2.502 2.502 0 0 1-2.5-2.5v-4c0-1.379 1.12-2.5 2.5-2.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLaw;
