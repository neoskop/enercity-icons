import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={65}
    fill="none"
    viewBox="0 0 65 65"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.046 32.5c0 16.24 13.213 29.454 29.453 29.454S61.952 48.74 61.952 32.5 48.74 3.046 32.499 3.046C16.26 3.046 3.046 16.26 3.046 32.5M0 32.5C0 14.58 14.58 0 32.5 0s32.498 14.58 32.498 32.5S50.42 65 32.5 65 0 50.42 0 32.5m34.022-18.464V31.88L46.47 44.67a1.522 1.522 0 1 1-2.182 2.125L31.424 33.578q-.003 0-.004-.003l-.012-.013-.004-.006-.003-.004a1.6 1.6 0 0 1-.314-.487l-.006-.017-.006-.022a1.5 1.5 0 0 1-.099-.526V14.036a1.523 1.523 0 1 1 3.046 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
