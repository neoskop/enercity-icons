import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 12c0 5.79 4.71 10.5 10.5 10.5S22.5 17.79 22.5 12 17.79 1.5 12 1.5 1.5 6.21 1.5 12ZM0 12C0 5.383 5.383 0 12 0c6.616 0 12 5.383 12 12 0 6.616-5.384 12-12 12-6.617 0-12-5.384-12-12Zm12.75-6.706v6.401l4.465 4.587a.75.75 0 0 1-1.074 1.046l-4.67-4.797-.002-.003-.006-.005a.154.154 0 0 1-.024-.036.19.19 0 0 0-.017-.028.726.726 0 0 1-.115-.178.614.614 0 0 1-.035-.163l-.003-.024a.267.267 0 0 0-.01-.04c-.004-.018-.009-.035-.009-.054V5.294a.75.75 0 1 1 1.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClock;
