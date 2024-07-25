import * as React from 'react';
import { SVGProps } from 'react';
const SvgCoupon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.615 24a2.219 2.219 0 0 1-1.59-.66L.66 12.975a2.23 2.23 0 0 1-.66-1.59V2.25A2.257 2.257 0 0 1 2.25 0h9.135c.6 0 1.162.233 1.59.66L23.34 11.025a2.25 2.25 0 0 1 0 3.18l-9.135 9.135a2.231 2.231 0 0 1-1.59.66ZM2.25 1.5a.752.752 0 0 0-.75.75v9.135c0 .195.083.39.218.533l10.364 10.364a.747.747 0 0 0 1.058 0l9.135-9.134a.747.747 0 0 0 0-1.058L11.918 1.717a.742.742 0 0 0-.533-.217H2.25ZM6.375 9A2.628 2.628 0 0 1 3.75 6.375 2.628 2.628 0 0 1 6.375 3.75 2.628 2.628 0 0 1 9 6.375 2.628 2.628 0 0 1 6.375 9Zm0-3.75a1.124 1.124 0 1 0-.002 2.248 1.124 1.124 0 0 0 .002-2.248Zm4.342 11.783c.15.142.338.217.533.217h-.008a.736.736 0 0 0 .533-.217l5.25-5.25a.747.747 0 1 0-1.058-1.058l-5.25 5.25a.747.747 0 0 0 0 1.058Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCoupon;
