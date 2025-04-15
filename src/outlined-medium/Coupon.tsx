import * as React from 'react';
import { SVGProps } from 'react';
const SvgCoupon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.615 24a2.22 2.22 0 0 1-1.59-.66L.66 12.975a2.23 2.23 0 0 1-.66-1.59V2.25A2.257 2.257 0 0 1 2.25 0h9.135c.6 0 1.162.233 1.59.66L23.34 11.025a2.25 2.25 0 0 1 0 3.18l-9.135 9.135a2.23 2.23 0 0 1-1.59.66M2.25 1.5a.75.75 0 0 0-.75.75v9.135c0 .195.083.39.218.533l10.365 10.365a.747.747 0 0 0 1.057 0l9.135-9.135a.747.747 0 0 0 0-1.058L11.918 1.718a.74.74 0 0 0-.533-.218zM6.375 9A2.63 2.63 0 0 1 3.75 6.375 2.63 2.63 0 0 1 6.375 3.75 2.63 2.63 0 0 1 9 6.375 2.63 2.63 0 0 1 6.375 9m0-3.75a1.124 1.124 0 1 0-.002 2.248 1.124 1.124 0 0 0 .002-2.248m4.342 11.783c.15.142.338.217.533.217h-.008a.74.74 0 0 0 .533-.217l5.25-5.25a.747.747 0 1 0-1.058-1.058l-5.25 5.25a.747.747 0 0 0 0 1.058"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoupon;
