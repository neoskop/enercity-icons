import * as React from 'react';
import { SVGProps } from 'react';
const SvgPowerPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.649 13.745v1.605A3.356 3.356 0 0 0 12 18.702a3.355 3.355 0 0 0 3.351-3.352v-1.605H8.65Zm8.134-1.5H7.217v-1.819h9.566v1.82ZM12 0c6.617 0 12 5.383 12 12 0 4.803-2.852 9.131-7.265 11.028l-.004.001-.004.003h-.005l-.003.001a3.862 3.862 0 0 1-1.561.332 3.913 3.913 0 0 1-3.844-3.218A4.855 4.855 0 0 1 7.15 15.35v-1.605h-.682a.75.75 0 0 1-.75-.75V9.676a.75.75 0 0 1 .75-.75H8.3V4.885a.75.75 0 1 1 1.5 0v4.041h4.4V4.885a.75.75 0 1 1 1.5 0v4.041h1.833a.75.75 0 0 1 .75.75v3.319a.75.75 0 0 1-.75.75h-.682v1.605a4.857 4.857 0 0 1-4 4.772 2.41 2.41 0 0 0 2.307 1.743c.332 0 .658-.07.97-.208v.001c.002 0 .003-.002.005-.003l.002-.002A10.492 10.492 0 0 0 22.5 12c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12c0 2.654.992 5.186 2.795 7.133a.75.75 0 1 1-1.1 1.019A11.957 11.957 0 0 1 0 11.999C0 5.383 5.384 0 12 0Zm-.006 15.498a.75.75 0 1 1 .001 1.498.75.75 0 0 1-.001-1.498Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPowerPlug;
