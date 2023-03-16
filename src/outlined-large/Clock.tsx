import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.046 32.5c0 16.24 13.213 29.454 29.453 29.454 16.24 0 29.453-13.214 29.453-29.454 0-16.24-13.212-29.454-29.453-29.454C16.26 3.046 3.046 16.26 3.046 32.5ZM0 32.5C0 14.58 14.58 0 32.5 0s32.498 14.58 32.498 32.5S50.42 65 32.5 65 0 50.42 0 32.5Zm34.022-18.464V31.88L46.47 44.67a1.522 1.522 0 1 1-2.182 2.125L31.424 33.578c-.002 0-.003-.002-.004-.003l-.012-.013-.004-.006a1.552 1.552 0 0 1-.317-.49l-.006-.019-.006-.021a1.532 1.532 0 0 1-.099-.526V14.036a1.523 1.523 0 1 1 3.046 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClock;
