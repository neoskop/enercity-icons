import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeater = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.46 10.012a3.51 3.51 0 0 0-3.505 3.505v38.39a3.509 3.509 0 0 0 3.505 3.504 3.509 3.509 0 0 0 3.506-3.504v-38.39a3.509 3.509 0 0 0-3.506-3.505Zm0 48.411a6.524 6.524 0 0 1-6.516-6.516v-38.39A6.524 6.524 0 0 1 21.46 7a6.525 6.525 0 0 1 6.518 6.517v38.39a6.525 6.525 0 0 1-6.518 6.516Zm14.507-44.906a3.509 3.509 0 0 1 3.505-3.505 3.51 3.51 0 0 1 3.505 3.505v38.39a3.509 3.509 0 0 1-3.505 3.504 3.509 3.509 0 0 1-3.505-3.504v-38.39Zm-3.012 38.39a6.525 6.525 0 0 0 6.517 6.516 6.524 6.524 0 0 0 6.516-6.516v-38.39A6.524 6.524 0 0 0 39.472 7a6.525 6.525 0 0 0-6.517 6.517v38.39Zm21.023-38.39a3.509 3.509 0 0 1 3.505-3.505 3.509 3.509 0 0 1 3.505 3.505v38.39a3.508 3.508 0 0 1-3.505 3.504 3.508 3.508 0 0 1-3.505-3.504v-38.39Zm-3.012 38.39a6.524 6.524 0 0 0 6.517 6.516A6.524 6.524 0 0 0 64 51.907v-38.39A6.524 6.524 0 0 0 57.483 7a6.524 6.524 0 0 0-6.517 6.517v38.39ZM8.071 18.271a1.506 1.506 0 1 0 .779-2.909L3.012 13.8v-2.068l5.838-1.564a1.506 1.506 0 0 0 1.065-1.844A1.511 1.511 0 0 0 8.07 7.258L1.116 9.12A1.507 1.507 0 0 0 0 10.575v4.38c0 .68.458 1.277 1.116 1.454l6.955 1.862Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeater;
