import * as React from 'react';
import { SVGProps } from 'react';
const SvgWaterDrops = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.355 10.48a3.982 3.982 0 0 0 3.975-3.975c0-1.5-1.65-4.117-3.037-6.052-.428-.608-1.44-.6-1.875 0-1.38 1.935-3.038 4.552-3.038 6.052a3.982 3.982 0 0 0 3.975 3.976ZM4.192 17.32a4.712 4.712 0 0 0 4.71 4.703c.413 0 .75-.33.75-.75a.752.752 0 0 0-.75-.75 3.207 3.207 0 0 1-3.21-3.203c0-.42-.337-.75-.75-.75-.412 0-.75.33-.75.75Zm4.71-11.34c.48 0 .93.233 1.208.623 2.032 2.835 5.445 8.01 5.445 10.717a6.66 6.66 0 0 1-6.653 6.653A6.66 6.66 0 0 1 2.25 17.32c0-2.715 3.412-7.882 5.445-10.717.277-.39.727-.623 1.207-.623Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWaterDrops;
