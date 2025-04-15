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
      d="M23.34 11.025 12.975.66a2.23 2.23 0 0 0-1.59-.66H2.25A2.257 2.257 0 0 0 0 2.25v9.135c0 .6.233 1.162.66 1.59L11.025 23.34c.442.442 1.02.66 1.59.66a2.26 2.26 0 0 0 1.598-.66l9.127-9.127a2.26 2.26 0 0 0 0-3.188M4.875 6.75a1.876 1.876 0 1 1 .001-3.751 1.876 1.876 0 0 1-.001 3.751m12.157 5.033-5.25 5.25a.77.77 0 0 1-.532.217.77.77 0 0 1-.533-.218.756.756 0 0 1 0-1.065l5.25-5.25a.756.756 0 0 1 1.065 0 .756.756 0 0 1 0 1.066"
    />
  </svg>
);
export default SvgCoupon;
